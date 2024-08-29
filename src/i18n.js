// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

// Import your translation files
import translationEN from './lang/en/translation.json';
import translationBN from './lang/bn/translation.json';

// Define the resources
const resources = {
  en: {
    translation: translationEN
  },
  bn: {
    translation: translationBN
  }
};

// Initialize i18n
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) // detects user language
  .use(HttpApi) // loads translations from your server
  .init({
    resources,
    fallbackLng: 'en', // default language
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
