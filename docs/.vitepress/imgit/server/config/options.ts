import { CapturedAsset, DownloadedAsset, ProbedAsset, EncodedAsset, BuiltAsset } from "../asset";

/** Configures build server behaviour. */
export type Options = Record<string, unknown> & {
    /** Local directory where the asset files are stored;
     *  <code>./public/assets</code> by default. */
    local?: string;
    /** Local directory where the cache files are stored;
     *  <code>./node_modules/.cache/imgit</code> by default. */
    cache?: string;
    /** URL prefix for served asset sources: relative to host or absolute when serving from a CDN;
     *  <code>/assets</code> by default. */
    serve?: string;
    /** Path to append to <code>local</code> and <code>serve</code> for downloaded remote assets;
     *  <code>remote</code> by default. */
    remote?: string;
    /** Regular expression to use for capturing transformed assets syntax.
     *  Expects <code><title></code> and <code><uri></code> capture groups.
     *  By default, captures Markdown image syntax: <code>/!\[(?<title>.*?)]\((?<uri>.+?)\)/g</code>. */
    regex?: RegExp;
    /** Text to append to the name of encoded asset files; <code>-imgit</code> by default. */
    suffix?: string;
    /** Width limit for the transformed assets, in pixels. When source asset is larger,
     *  will resize the content (given encoding is not disabled). No limit by default. */
    width?: number | null;
    /** File extensions (w/o dot) to encode into av1 still frame under avif container
     *  and transform into HTML picture (with fallback to source); default: png, jpg, and jpeg. */
    image?: string[];
    /** File extensions (w/o dot) to encode into looped sequence of av1 still frames under avif container
     *  and transform into HTML picture (with fallback to source); default: gif. */
    animation?: string[];
    /** File extensions (w/o dot) to encode into av1 video under mp4 container
     *  and transform into HTML video (with fallback to source); default: mp4. */
    video?: string[];
    /** Whether to transform YouTube links as videos; enabled by default. */
    youtube?: boolean;
    /** Source of an image to use for all video posters. When undefined automatically generates
     *  unique image for each video; assign <code>null</code> to disable posters completely. */
    poster?: string | null;
    /** Configure logging behaviour; assign <code>null</code> to disable logging. */
    log?: LogOptions | null;
    /** Configure remote assets downloading. */
    download?: DownloadOptions;
    /** Configure assets probing. */
    probe?: ProbeOptions;
    /** Configure assets encoding. */
    encode?: EncodeOptions;
    /** Configure HTML building for source assets of specific types. */
    build?: BuildOptions;
    /** Configure document transformation process. */
    transform?: TransformOptions;
};

/** Configures logging behaviour. */
export type LogOptions = {
    /** Logs informational message, such as which assets were downloaded and encoded;
     *  assign <code>null</code> to disable logging informational messages. */
    info: ((msg: string) => void) | null;
    /** Logs warning message, such as a non-fatal issue with encoding process;
     *  assign <code>null</code> to disable logging warning messages. */
    warn: ((msg: string) => void) | null;
    /** Logs error message associated with a failed procedure;
     *  assign <code>null</code> to disable logging error messages. */
    err: ((msg: string) => void) | null;
};

/** Configures remote assets downloading behaviour. */
export type DownloadOptions = {
    /** How long to wait when downloading remote asset, in seconds; 30 by default. */
    timeout: number;
    /** How many times to restart the download when request fails; 3 by default. */
    retries: number;
    /** How long to wait before restarting a failed download, in seconds; 6 by default.*/
    delay: number;
};

/** Configures asset probing. */
export type ProbeOptions = {
    /** ffprobe arguments specified when probing assets. */
    args: string;
};

/** Configures asset encoding and optimization. */
export type EncodeOptions = {
    /** ffmpeg arguments specified when encoding still image assets (png, jpg);
     *  assign <code>null</code> to disable images encoding. */
    image: string | null;
    /** ffmpeg arguments specified when encoding animated image assets (gif);
     *  assign <code>null</code> to disable animated images encoding. */
    animation: string | null;
    /** ffmpeg arguments specified when encoding video assets (mp4);
     *  assign <code>null</code> to disable video encoding. */
    video: string | null;
    /** Poster (covers for lazy-loaded assets) encoding options. */
    poster: {
        /** ffmpeg arguments specified when encoding posters. */
        args: string;
        /** ffmpeg filter to apply for generated posters; blur is applied by default.
         *  assign <code>null</code> to disable poster filtering. */
        filter: string | null
    }
};

/** Configures HTML building for source assets of specific types. */
export type BuildOptions = {
    /** Returns HTML string for specified source image asset. */
    image: (asset: EncodedAsset) => Promise<string>;
    /** Returns HTML string for specified source animation asset. */
    animation: (asset: EncodedAsset) => Promise<string>;
    /** Returns HTML string for specified source video asset. */
    video: (asset: EncodedAsset) => Promise<string>;
    /** Returns HTML string for specified source YouTube asset. */
    youtube: (asset: EncodedAsset) => Promise<string>;
};

/** Configures document transformation process. */
export type TransformOptions = {
    /** 1st phase: finds assets to transform in the document with specified content. */
    capture: (content: string) => Promise<CapturedAsset[]>;
    /** 2nd phase: downloads file content for the captured assets. */
    download: (assets: CapturedAsset[]) => Promise<DownloadedAsset[]>;
    /** 3rd phase: probes downloaded asset files to evaluate their width and height. */
    probe: (assets: DownloadedAsset[]) => Promise<ProbedAsset[]>;
    /** 4th phase: creates optimized versions of the source asset files. */
    encode: (assets: ProbedAsset[]) => Promise<EncodedAsset[]>;
    /** 5th phase: builds HTML for the optimized assets to overwrite source syntax. */
    build: (assets: EncodedAsset[]) => Promise<BuiltAsset[]>;
    /** 6th phase: rewrites content of the document with specified assets; returns modified document content. */
    rewrite: (content: string, assets: BuiltAsset[]) => Promise<string>;
};