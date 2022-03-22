import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  content: {
    highlight: {
      theme: 'one-dark-pro',
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue']
    }
  },
  /**
   * Modules
   */
  modules: [
    '@nuxt/content'
  ]
})
