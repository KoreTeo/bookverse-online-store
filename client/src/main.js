import './assets/main.css'
import { createPinia } from 'pinia'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import PrimeVue from 'primevue/config';

createApp(App)
  .use(createPinia())
  .use(router)
  .use(PrimeVue)
  .mount('#app');