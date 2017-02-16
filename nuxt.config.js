module.exports = {
  head: {
    title: 'SMC\'17',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: 'Student Media Con 2017 Website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '~assets/img/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
    ]
  },
  css: [
    { src: '~assets/scss/main.scss', lang: 'scss' }
  ],
  loading: { color: '#3B8070' }
};
