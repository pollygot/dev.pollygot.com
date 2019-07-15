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
      { text: 'Docs', link: '/docs/' },
    ],
    sidebar: {
      '/blog/': [
        'some-post',
      ],
      '/flock/': [
        {
          title: 'Flock',
          collapsable: false,
          children: ['/flock/'],
        },
        {
          title: 'API',
          collapsable: false,
          children: [
            'api-key-concepts', 
            'expo',
            'facebook',
            'mailgun',
            'nexmo',
            'slack',
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
