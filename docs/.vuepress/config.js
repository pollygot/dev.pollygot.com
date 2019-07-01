module.exports = {
  title: 'Pollygot',
  description: 'Developers',
  dest: 'public',
  plugins: [
    '@vuepress/last-updated',
  ],
  themeConfig: {
    nav: [
      { text: 'Blog', link: '/blog/' },
      { text: 'Products', link: '/products/' },
    ],
    sidebar: {
      '/blog/': [
        'some-post',
      ],
      '/pidgeon/': [
        {
          title: 'Pidgeon',
          collapsable: false,
          children: ['getting-started'],
        },
        {
          title: 'API',
          collapsable: false,
          children: [
            'api-key-concepts', 
            'sendgrid',
            'twilio',
          ],
        },
      ],
    },
    docsRepo: 'https://github.com/pollygot/docs/',
    docsDir: 'docs',
    editLinks: true,
  },
}
