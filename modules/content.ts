import { defineNuxtModule } from '@nuxt/kit'
import { resolve } from 'pathe'

export default defineNuxtModule({
  setup (_opts, nuxt) {
    // Save here when the app is running in browser
    nuxt.hook('nitro:context', (ctx) => {
      Object.assign(
        ctx.storage.mounts,
        {
          'content:source:content': {
            name: 'content',
            driver: 'fs',
            prefix: '',
            driverOptions: {
              base: resolve(nuxt.options.srcDir, 'content')
            }
          }
        }
      )
      // console.log('mounts', ctx.storage.mounts)
    })
  }
})
