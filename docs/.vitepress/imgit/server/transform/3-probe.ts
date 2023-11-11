import { platform } from "../platform";
import { config } from "../config";
import { cache } from "../cache";
import { DownloadedAsset, ProbedAsset, AssetSize, AssetType } from "../asset";

const probing = new Map<string, Promise<AssetSize>>;

/** Probes downloaded asset files to evaluate their width and height. */
export function probe(assets: DownloadedAsset[]): Promise<ProbedAsset[]> {
    return Promise.all(assets.map(probeAsset));
}

async function probeAsset(asset: DownloadedAsset): Promise<ProbedAsset> {
    let size: AssetSize;
    const url = asset.sourceUrl;
    if (asset.type === AssetType.YouTube) size = { width: 0, height: 0 };
    else if (cache.size.hasOwnProperty(url)) size = cache.size[url];
    else if (probing.has(url)) size = await probing.get(url)!;
    else size = cache.size[url] = await probeSize(asset.sourcePath, url);
    return { ...asset, size, alpha: false }; // TODO: Probe alpha.
}

async function probeSize(path: string, url: string): Promise<AssetSize> {
    let resolve: (value: (AssetSize)) => void, promise;
    probing.set(url, promise = new Promise<AssetSize>(r => resolve = r));
    platform.exec(`ffprobe ${config.probe.args} "${path}"`, (err, out) => handleProbe(resolve, err, out));
    return promise;
}

function handleProbe(resolve: (info: AssetSize) => void, error: (Error | null), out: string) {
    if (error) config.log?.err?.(`ffprobe error: ${error.message}`);
    resolve(parseOut(out));
}

function parseOut(out: string): AssetSize {
    if (!out?.includes("x")) return { width: NaN, height: NaN };
    const parts = out.split("x");
    return { width: Number(parts[0]), height: Number(parts[1]) };
}