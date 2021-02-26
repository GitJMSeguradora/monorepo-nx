import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptBR from '../../locale/pt-BR/translation.json';
import en from '../../locale/en/translation.json';

const resources = {
  pt: {
    translation: ptBR
  },
  en: {
    translation: en
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt-BR',
  fallbackLng: 'pt-BR',
  interpolation: {
    escapeValue: true
  }
});

export default i18n;
