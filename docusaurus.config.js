const React = require("react");
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/okaidia");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Rowy Docs",
    tagline: "Open source and extendable spreadsheet for your database",
    url: "https://docs.rowy.io",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.svg",
    organizationName: "rowyio", // Usually your GitHub org/user name.
    projectName: "rowydocs", // Usually your repo name.
    titleDelimiter: "•",

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            routeBasePath: "/",
            // Please change this to your repo.
            editUrl: "https://github.com/rowyio/docs/tree/main/",
          },
          // blog: {
          //   showReadingTime: true,
          //   // Please change this to your repo.
          //   editUrl: "https://github.com/rowyio/docs/blog/",
          // },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
          gtag: {
            trackingID: "G-G41D01C293",
          },
        }),
      ],
    ],

    stylesheets: [
      "https://rsms.me/inter/inter.css",
      "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap",
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          hideOnScroll: true,
          // title: "Rowy Docs",
          logo: {
            alt: "Rowy Docs",
            src: "img/logo.svg",
            srcDark: "img/logo-dark.svg",
          },
          items: [
            // {
            //   type: "doc",
            //   docId: "introduction",
            //   position: "left",
            //   label: "Docs",
            // },
            // { to: "/blog", label: "Blog", position: "right" },
            {
              href: "https://rowy.io",
              label: "rowy.io",
              position: "right",
            },
            {
              href: "https://discord.gg/B8yAD5PDX4",
              className: "navbar__icon-link navbar__icon-link--discord",
              "aria-label": "Discord community",
              position: "right",
            },
            {
              href: "https://twitter.com/rowyio",
              className: "navbar__icon-link navbar__icon-link--twitter",
              "aria-label": "Twitter",
              position: "right",
            },
            {
              href: "https://github.com/rowyio/rowy",
              className: "navbar__icon-link navbar__icon-link--github",
              "aria-label": "GitHub repository",
              position: "right",
            },
          ],
        },
        footer: {
          style: "light",
          links: [
            {
              title: "Community",
              items: [
                {
                  label: "Discord",
                  href: "https://discord.com/invite/B8yAD5PDX4",
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/rowyio",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/rowyio",
                },
              ],
            },
            {
              title: "Help",
              items: [
                {
                  label: "Feature Request",
                  href: "https://github.com/rowyio",
                },
                {
                  label: "Support",
                  href: "https://discord.com/invite/B8yAD5PDX4",
                },
              ],
            },

            // {
            //   title: "More",
            //   items: [
            //     {
            //       label: "Blog",
            //       to: "/blog",
            //     },
            //     {
            //       label: "GitHub",
            //       href: "https://github.com/rowyio",
            //     },
            //   ],
            // },
          ],
          logo: {
            alt: "Rowy",
            src: "img/rowy-logo.svg",
            srcDark: "img/rowy-logo-dark.svg",
            href: "https://rowy.io",
          },
          copyright: `Copyright © ${new Date().getFullYear()} Rowy Inc.`,
        },

        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
        algolia: {
          appId: "IY9HJR36YD",
          apiKey: "d156e914da917ac8e4f129af98bbc732",
          indexName: "rowy",

          // Optional: see doc section below
          contextualSearch: true,
        },
        colorMode: {
          defaultMode: "light",
          // disableSwitch: false,
          respectPrefersColorScheme: true,
          // switchConfig: {
          //   darkIcon: " ",
          //   lightIcon: "\u2600",
          //   darkIconStyle: {
          //     backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' d='M12 2A9.91 9.91 0 0 0 9 2.46A10 10 0 0 1 9 21.54A10 10 0 1 0 12 2Z' /%3E%3C/svg%3E")`,
          //     width: 18,
          //     height: 18,
          //     margin: -4,
          //     transform: "scaleX(-1)",
          //   },
          //   lightIconStyle: { color: "#fff" },
          // },
        },
        announcementBar: {
          id: "announcementBar", // Increment on change
          content: `⭐️ If you like Rowy, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/rowyio/rowy">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/rowyio">Twitter</a> `,
          backgroundColor: "var(--ifm-background-surface-color)",
          textColor: "var(--ifm-font-color-base)",
        },
        autoCollapseSidebarCategories: true,
        hideableSidebar: true,
        image: "img/meta.png",
      }),
  }
);
