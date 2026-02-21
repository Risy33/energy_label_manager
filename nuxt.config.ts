// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Energy Label Manager',
      titleTemplate: '%s - Energy Label Manager',
    }
  },
  $development: {
    app: {
      head: {
        title: 'Development',
        titleTemplate: '%s - Energy Label Manager (Development)',
      }
    }
  },
  $production: {
    app: {
      head: {
        title: 'Energy Label Manager',
        titleTemplate: '%s - Energy Label Manager',
      }
    }
  },
  $test: {
    app: {
      head: {
        title: 'Test',
        titleTemplate: '%s - Energy Label Manager (Test)',
      }
    }
  },
  modules: [
    '@nuxt/test-utils/module'
  ]
})
