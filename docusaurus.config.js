// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sustain and Gain Docs',
  tagline: 'Make sustainability fun!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.sustainandgain.fun',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Sustain and Gain',
        items: [
          {
            type: 'doc',
            docId: 'learn',
            position: 'left',
            label: 'Learn',
          },
          {
              type: 'doc',
              docId: 'deploy',
              position: 'left',
              label: 'Deploy',
          },
          {
            href: 'https://github.com/sustainabilityproject/app',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn more about the game',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/learn',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Sustain and Gain',
                href: 'https://www.sustainandgain.fun',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/sustainabilityproject/app',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sustain and Gain.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
