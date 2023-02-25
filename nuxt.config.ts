// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { charset: 'utf8' },
      //   { http-equiv: 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      script: [
          {
              src: 'bootstrap/dist/js/bootstrap.bundle.min.js'
          },
          
          
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: 'stylesheet', href: '/assets/css/main.css' }
      ],
      // please note that this is an area that is likely to change
      style: [
      ],
      noscript: [
      ]
    }
  },
})
