import '@varlet/ui/es/style';
import './style.css';
import './index.css';
import 'animate.css';

import Varlet from '@varlet/ui';
import Vue3TouchEvents from 'vue3-touch-events';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(Vue3TouchEvents).use(Varlet).use(router).mount('#app');
