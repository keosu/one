import { createI18n } from 'vue-i18n'
// import en from '@/renderer/locales/en.json'
// import ko from '@/renderer/locales/ko.json'
// import zhHans from '@/renderer/locales/zh-hans.json'
// import zhHant from '@/renderer/locales/zh-hant.json'
// import { getCurrentLocale } from '@/renderer/utils'

export default createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: 'en',
  globalInjection: true,
  messages: {
    // en,
    // ko,
    // zhHans,
    // zhHant
  }
})
