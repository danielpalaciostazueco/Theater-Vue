import { createI18n } from 'vue-i18n';
import messages from '../language/language'; 

const i18n = createI18n({
  legacy: false, 
  locale: 'en',
  fallbackLocale: 'es',
  messages,
});

export default i18n;
