// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const codeBlock = require('./src/remark/codeblock');


// const path = require('path');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// console.log(__dirname);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Rascal Meta Programming Language',
  tagline: 'The one-stop shop for metaprogramming',
  url: 'https://rascal-mpl.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'images/favicon.ico',
  organizationName: 'usethesource', // Usually your GitHub org/user name.
  projectName: 'rascal-website', // Usually your repo name.
  deploymentBranch: 'gh-pages-v2',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/usethesource/rascal-website/tree/website-v2/docs/',
          remarkPlugins: [
            // codeBlock
          ],
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          editUrl: 'https://github.com/usethesource/rascal-website/tree/website-v2/blog/',
          remarkPlugins: [
            // codeBlock
          ],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'release-notes',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'release-notes',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './release-notes',
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'The Rascal Meta Programming Language',
        logo: {
          alt: 'Rascal logo',
          src: 'images/rascal_large_no_text.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'WhyRascal/index',
            position: 'left',
            label: 'Docs',
          },
          // {href: 'https://tutor.rascal-mpl.org/Rascal/Rascal.html', label: 'Reference docs', position: 'left'},
          {to: '/stories', label: 'Stories', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/release-notes', label: 'Release notes', position: 'left'},

          {to: '/projects', label: 'Projects', position: 'right'},
          {to: '/team', label: 'Team', position: 'right'},
          {
            href: 'https://github.com/usethesource',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/GettingStarted',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/rascal',
              }
              // ,
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/docusaurus',
              // },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/usethesource',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UseTheSource. Built with Docusaurus.`,
      },
      
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      algolia: {
        // The application ID provided by Algolia
        appId: 'FKSZQR9CR0',
  
        // Public API key: it is safe to commit it
        apiKey: '1f28a823d399f1a470a0f8bb027528ac',
  
        indexName: 'rascal_web',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },}),
};

module.exports = config;
