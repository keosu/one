import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetifyPlugin from 'vite-plugin-vuetify'

import { resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.vue', '.json', '.scss'],
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [vue(), vuetifyPlugin({ autoImport: true })]
})
