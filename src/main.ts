import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n'
import router from './router'
 

const app = createApp(App)

app.use(vuetify).use(i18n).use(router).use(createPinia())

app.mount('#app')