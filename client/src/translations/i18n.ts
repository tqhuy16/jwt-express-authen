import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import lodash from 'lodash'

import { setLanguage, getLanguage } from '@/utils/translate-storage'
import { LANGUAGE_KEY } from '@/constants/key-storage'
import common from './common.json'
import home from './home.json'

const INIT_LANGUAGE = getLanguage(LANGUAGE_KEY) || 'en'

const resources = lodash.merge(common, home)

i18n.use(initReactI18next).init({
  resources,
  lng: INIT_LANGUAGE,
  fallbackLng: INIT_LANGUAGE,
  interpolation: {
    escapeValue: false
  }
})

// i18n.off('languageChanged')
i18n.on('languageChanged', (language) => {
  setLanguage(LANGUAGE_KEY, language)
})

export default i18n
