import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';
import {messages} from './language/language'; 
import { createPinia } from 'pinia';


const i18n = createI18n({
  legacy: false, 
  locale: 'en', 
  fallbackLocale: 'es', 
  messages, 
});

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(i18n); 
app.use(pinia);

app.mount('#app');
