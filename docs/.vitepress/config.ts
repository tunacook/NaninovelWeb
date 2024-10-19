import { defineConfig } from "vitepress";
import { l10n, md, vite } from "./ext";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Naninovel",
    titleTemplate: ":title • Naninovel",
    appearance: "dark",
    cleanUrls: true,
    lastUpdated: true,
    head: [
        ["link", { rel: "icon", href: "/favicon.svg" }],
        ["link", { rel: "preload", href: "/assets/fonts/inter.woff2", as: "font", type: "font/woff2", crossorigin: "" }],
        ["link", { rel: "preload", href: "/assets/fonts/jb.woff2", as: "font", type: "font/woff2", crossorigin: "" }],
        ["meta", { name: "og:image", content: "/assets/img/og.jpg" }],
        ["meta", { name: "twitter:card", content: "summary_large_image" }]
    ],
    themeConfig: {
        logo: { src: "/favicon.svg" },
        logoLink: { link: "/", target: "_self" },
        search: { provider: "local", options: { detailedView: true, locales: l10n.search } },
        socialLinks: [
            { icon: "github", link: "https://github.com/naninovel" },
            { icon: "discord", link: "https://discord.gg/BfkNqem" },
            { icon: "x", link: "https://x.com/naniengine" },
            { icon: { svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M407.8 294.7c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3zM288 227.1C261.9 176.4 190.9 81.9 124.9 35.3C61.6-9.4 37.5-1.7 21.6 5.5C3.3 13.8 0 41.9 0 58.4S9.1 194 15 213.9c19.5 65.7 89.1 87.9 153.2 80.7c3.3-.5 6.6-.9 10-1.4c-3.3 .5-6.6 1-10 1.4C74.3 308.6-9.1 342.8 100.3 464.5C220.6 589.1 265.1 437.8 288 361.1c22.9 76.7 49.2 222.5 185.6 103.4c102.4-103.4 28.1-156-65.8-169.9c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3c64.1 7.1 133.6-15.1 153.2-80.7C566.9 194 576 75 576 58.4s-3.3-44.7-21.6-52.9c-15.8-7.1-40-14.9-103.2 29.8C385.1 81.9 314.1 176.4 288 227.1z"/></svg>` }, link: "https://bsky.app/profile/naninovel.com" }
        ]
    },
    sitemap: { hostname: "https://naninovel.com" },
    locales: l10n.config,
    markdown: md,
    vite: vite,
});
