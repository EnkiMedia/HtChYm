import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import common_en from '@/locales/en/common.json';
import homePage_en from '@/locales/en/homePage.json';
import servicesPage_en from '@/locales/en/servicesPage.json';
import aboutPage_en from '@/locales/en/aboutPage.json';
import testimonialsPage_en from '@/locales/en/testimonialsPage.json';
import contactPage_en from '@/locales/en/contactPage.json';

import common_es from '@/locales/es/common.json';
import homePage_es from '@/locales/es/homePage.json';
import servicesPage_es from '@/locales/es/servicesPage.json';
import aboutPage_es from '@/locales/es/aboutPage.json';
import testimonialsPage_es from '@/locales/es/testimonialsPage.json';
import contactPage_es from '@/locales/es/contactPage.json';

const resources = {
  en: {
    common: common_en,
    homePage: homePage_en,
    servicesPage: servicesPage_en,
    aboutPage: aboutPage_en,
    testimonialsPage: testimonialsPage_en,
    contactPage: contactPage_en,
  },
  es: {
    common: common_es,
    homePage: homePage_es,
    servicesPage: servicesPage_es,
    aboutPage: aboutPage_es,
    testimonialsPage: testimonialsPage_es,
    contactPage: contactPage_es,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    debug: false,
    ns: ['common', 'homePage', 'servicesPage', 'aboutPage', 'testimonialsPage', 'contactPage'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;