import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetifyPlugin from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vuetifyPlugin({ autoImport: true })]
})
