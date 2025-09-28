import type * as DocsPlugin from "@docusaurus/plugin-content-docs";
import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: "DAQEM Studios",
    tagline: "Dive into a world of wonder.",
    favicon: "img/favicon.ico",
    future: {
        v4: true,
    },
    url: "https://daqem.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    markdown: {
        hooks: {
            onBrokenMarkdownLinks: "warn",
            onBrokenMarkdownImages: "warn",
        },
    },
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },
    presets: [
        [
            "classic",
            {
                docs: false,
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ["rss", "atom"],
                        xslt: true,
                    },
                    onInlineTags: "warn",
                    onInlineAuthors: "warn",
                    onUntruncatedBlogPosts: "warn",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: "img/docusaurus-social-card.jpg",
        navbar: {
            logo: {
                alt: "DAQEM Studios Logo",
                src: "img/logo.svg",
                srcDark: "img/logo-dark.svg",
                width: 1040 / 8,
                height: 448 / 8,
                href: "/",
            },
            items: [{ to: "/projects", label: "Projects", position: "left" }],
        },
        footer: {
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Jobs+",
                            to: "/projects/jobsplus/wiki",
                        },
                        {
                            label: "YAML Config",
                            to: "/projects/yaml-config/wiki",
                        },
                        {
                            label: "UI Lib",
                            to: "/projects/ui-lib/wiki",
                        },
                        {
                            label: "Arc Lib",
                            to: "/projects/arc/wiki",
                        },
                        {
                            label: "Item Restrictions",
                            to: "/projects/item-restrictions/wiki",
                        },
                        {
                            label: "More Projects",
                            to: "/projects",
                        },
                    ],
                },
                {
                    title: "Community",
                    items: [
                        {
                            label: "Discord",
                            href: "https://daqem.com/discord",
                        },
                        {
                            label: "CurseForge",
                            href: "https://www.curseforge.com/members/daqem",
                        },
                        {
                            label: "Modrinth",
                            href: "https://modrinth.com/organization/daqem-studios",
                        },
                        {
                            label: "Ko-fi",
                            href: "https://ko-fi.com/daqem",
                        },
                    ],
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "GitHub",
                            href: "https://github.com/DAQEM",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} DAQEM Studios. All rights reserved.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.oneDark,
        },
    } satisfies Preset.ThemeConfig,
    plugins: [
        "./src/plugins/tailwind-plugin.ts",
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "jobsplus",
                path: "docs/jobsplus",
                routeBasePath: "/projects/jobsplus/wiki",
                sidebarPath: "./sidebars.ts",
                sidebarCollapsed: true,
                editUrl: "https://github.com/DAQEM/website/tree/main/",
            } satisfies Partial<DocsPlugin.PluginOptions>,
        ],
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "yaml-config",
                path: "docs/yaml-config",
                routeBasePath: "/projects/yaml-config/wiki",
                sidebarPath: "./sidebars.ts",
                sidebarCollapsed: true,
                editUrl: "https://github.com/DAQEM/website/tree/main/",
            } satisfies Partial<DocsPlugin.PluginOptions>,
        ],
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "ui-lib",
                path: "docs/ui-lib",
                routeBasePath: "/projects/ui-lib/wiki",
                sidebarPath: "./sidebars.ts",
                sidebarCollapsed: true,
                editUrl: "https://github.com/DAQEM/website/tree/main/",
            } satisfies Partial<DocsPlugin.PluginOptions>,
        ],
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "arc",
                path: "docs/arc",
                routeBasePath: "/projects/arc/wiki",
                sidebarPath: "./sidebars.ts",
                sidebarCollapsed: true,
                editUrl: "https://github.com/DAQEM/website/tree/main/",
            } satisfies Partial<DocsPlugin.PluginOptions>,
        ],
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "item-restrictions",
                path: "docs/item-restrictions",
                routeBasePath: "/projects/item-restrictions/wiki",
                sidebarPath: "./sidebars.ts",
                sidebarCollapsed: true,
                editUrl: "https://github.com/DAQEM/website/tree/main/",
            } satisfies Partial<DocsPlugin.PluginOptions>,
        ],
    ],
};

export default config;
