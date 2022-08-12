import '@varlet/ui/es/style';
import './style.css';
import './index.css';
import 'animate.css';

import Varlet from '@varlet/ui';
import Vue3TouchEvents from 'vue3-touch-events';
import { createApp } from 'vue';
import router from './router';
import App from './App.vue';

createApp(App).use(Varlet).use(router).use(Vue3TouchEvents).mount('#app');
