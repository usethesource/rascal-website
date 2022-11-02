// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// See https://github.com/FormidableLabs/prism-react-renderer/tree/master/src/themes for available themes
const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Rascal Meta Programming Language',
  tagline: 'The one-stop shop for metaprogramming',
  url: 'https://www.rascal-mpl.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: true,
  favicon: 'images/favicon.png',
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
          // editUrl: ({docPath}) =>
          // `https://github.com/usethesource/rascal/tree/main/src/org/rascalmpl/courses/${docPath.substring(4)}`,
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          editUrl: 'https://github.com/usethesource/rascal-website/tree/website-v2/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'release-notes',
        path: 'release-notes',
        routeBasePath: 'release-notes',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'description', content: 'The Rascal Meta Programming Language - The one-stop shop for metaprogramming'},
        {name: 'keywords', content: 'rascal, metaprogramming, programming, dsl, compiler, code analysis'}
      ],
      navbar: {
        title: 'The Rascal Meta Programming Language',
        logo: {
          alt: 'Rascal logo',
          src: 'images/rascal_large_no_text.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'GettingStarted/index',
            position: 'left',
            label: 'Docs',
          },
          // {href: 'https://tutor.rascal-mpl.org/Rascal/Rascal.html', label: 'Reference docs', position: 'left'},
          // {to: '/stories', label: 'Stories', position: 'left'},
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
                label: 'Community',
                to: '/team/#usethesource-community',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/rascal',
              },
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
        appId: '7K16S5598L',
  
        // Public API key: it is safe to commit it
        apiKey: '01ef0adfc1b9c3598a0c9153042d63e5',
  
        indexName: 'rascal',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Algolia search parameters
        // searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },}),
};

module.exports = config;
