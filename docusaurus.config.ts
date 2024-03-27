// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// import lightCodeTheme from "prism-react-renderer/themes/github";
// import darkCodeTheme from "prism-react-renderer/themes/dracula";
import path from "path";

/** @type {import('@docusaurus/types').Config} */
export default {
  title: "usagrada",
  tagline: "Dinosaurs are cool",
  url: "https://usagrada.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "usagrada", // Usually your GitHub org/user name.
  projectName: "usagrada.github.io", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
    localeConfigs: {
      ja: {
        label: "日本語",
        direction: "ltr",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: [
            "./src/css/custom.css",
            path.resolve("node_modules", "@mdi/font/css/materialdesignicons.css")
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "usagrada's page",
        logo: {
          alt: "usagrada's logo",
          src: "img/favicon.ico",
        },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "Tech Blog",
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: "https://github.com/usagrada",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tech Blog",
                to: "/docs/",
              },
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: "GitHub",
                href: "https://github.com/usagrada",
              },
            ],
            // },
            // {
            // title: 'Community',
            // items: [
            //   {
            //     label: 'Stack Overflow',
            //     href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            //   },
            //   {
            //     label: 'Discord',
            //     href: 'https://discordapp.com/invite/docusaurus',
            //   },
            //   {
            //     label: 'Twitter',
            //     href: 'https://twitter.com/docusaurus',
            //   },
            // ],
            // },
            // {
            // title: 'More',
            // items: [

            // ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} usagrada`,
      },
      // prism: {
      //   theme: lightCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
    }),
  plugins: ["./plugin", "docusaurus-plugin-pagemove"],
};
