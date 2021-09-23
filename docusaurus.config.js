const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Rowy Docs",
    tagline: "Open source and extendable spreadsheet for your database",
    url: "https://docs.rowy.io/",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/rowyfavicon.png",
    organizationName: "rowyio", // Usually your GitHub org/user name.
    projectName: "rowydocs", // Usually your repo name.

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
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          // title: "Rowy Docs",
          logo: {
            alt: "Rowy Docs",
            src: "img/rowyicon.png",
          },
          items: [
            {
              type: "doc",
              docId: "home",
              position: "left",
              label: "Docs",
            },
            // { to: "/blog", label: "Blog", position: "right" },
            {
              href: "https://github.com/rowyio/docs",
              label: "GitHub",
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
            alt: "Rowy Logo",
            src: "img/rowyicon.png",
            href: "https://rowy.io",
          },
          copyright: `Copyright © ${new Date().getFullYear()} Rowy, Inc.`,
        },
        prism: {
          // theme: lightCodeTheme,
          theme: darkCodeTheme,
          // darkTheme: darkCodeTheme,
        },
        // algolia: {
        //   apiKey: '',
        //   indexName: '',
        // },
        colorMode: {
          defaultMode: "light",
          disableSwitch: true,
          respectPrefersColorScheme: false,
        },
        announcementBar: {
          id: "announcementBar", // Increment on change
          content: `⭐️ If you like Rowy, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/rowyio/rowy">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/rowyio" >Twitter</a> `,
        },
        gtag: {
          trackingID: "G-G41D01C293",
        },
      }),
  }
);
