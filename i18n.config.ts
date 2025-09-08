import { defineI18nConfig } from 'vue-i18n'
import en from './i18n/locales/en.json'
import cs from './i18n/locales/cs.json'
export default defineI18nConfig(() => ({
    legacy: true,
    locale: 'cs',
    fallbackLocale: 'en',
    messages: {
        cs,
        en
    }
}))
