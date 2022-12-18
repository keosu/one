import { createVuetify } from 'vuetify'
import { en, zhHans, zhHant } from 'vuetify/locale'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.min.css'

import colors from 'vuetify/lib/util/colors.mjs'

export default createVuetify({
  locale: {
    messages: { en, zhHans, zhHant },
    locale: 'en',
    fallback: 'en'
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.blue.darken2
        }
      },
      dark: {
        dark: true,
        colors: {
          primary: colors.grey.darken4
        }
      }
    }
  }
})
