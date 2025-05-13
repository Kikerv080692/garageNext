import i18n from 'i18next';
import ru from './assets/ru/ru.json';
import ua from './assets/ua/ua.json';
import cz from './assets/cz/cz.json';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import LocalStorageBackend from 'i18next-localstorage-backend';

export const resources = {
    cz: {
      translation: cz,
    },
    ua: {
      translation: ua,
    },
    ru: {
        translation: ru,
      },
  } ;
  
  i18n
    .use(LanguageDetector)
    .use(LocalStorageBackend)
    .use(initReactI18next)
    .init({
      detection: {
        order: ['localStorage'],
        cache: ['localStorage'],
      },
  
      fallbackLng: 'cz',
      resources,
      interpolation: {
        escapeValue: false,
      },
    });
  export default i18n;