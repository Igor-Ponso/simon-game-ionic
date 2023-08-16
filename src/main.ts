import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createHead } from '@vueuse/head';
import { IonicVue } from '@ionic/vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';
import i18n from '@/utils/i18n/i18n';
import App from './App.vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

const pinia = createPinia();
const head = createHead();

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(pinia)
  .use(head)
  .use(i18n)
  .use(VueAxios, axios);

router.isReady().then(() => {
  app.mount('#app');
});
