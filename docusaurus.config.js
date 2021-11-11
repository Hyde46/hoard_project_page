// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'hoard',
  tagline: 'command organizer tool to hoard all your precious commands 💎🐉',
  url: 'https://hyde46.github.io',
  baseUrl: '/hoard/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/hoard_small_no_text.png',
  organizationName: 'Hyde46', // Usually your GitHub org/user name.
  projectName: 'hoard', // Usually your repo name.'
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/hyde46/hoard',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      forceDarkMode: true,
      navbar: {
        title: 'hoard',
        logo: {
          alt: 'Hoard Logo',
          src: 'img/hoard_small_no_text.png',
        },
        items: [
          {
            href: "https://www.buymeacoffee.com/hyde46",
            label: "☕ Buy me a coffee",
            position: 'right'
          },
          {
            href: 'https://github.com/hyde46/hoard',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/hyde46/hoard',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Denis Heid | Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      
    }),
};

module.exports = config;
