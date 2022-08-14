import './style.css';
import './index.css';
import 'animate.css';

import Vue3TouchEvents from 'vue3-touch-events';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(Vue3TouchEvents).use(router).mount('#app');
