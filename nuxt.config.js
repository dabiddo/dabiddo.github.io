module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'dabiddo.net',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'dabiddo personal blog template' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
 /*
 ** Modules
 */
  modules: [
      '@nuxtjs/vuetify',
      '@nuxtjs/apollo'
    ],
    
    apollo: {
      clientConfigs: {
        default: '~/apollo/default.js'
      },
      includeNodeModules: true
    },

  generate:{
    routes:[
      '/post/new-year-new-blog',
      '/post/graphcms-blog',
      '/post/blog-configuration-completed',
      '/post/layout-fixing',
      '/post/shifting-a-little-bit-from-golang-to-erlang',
      '/post/laragon-for-local-dev-enviroment',
      '/post/little-update',
      '/post/laravel-and-graphql'
    ]
  },

  
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

