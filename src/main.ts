import '@varlet/ui/es/style.js';
import './style.css';
import './index.css';

import App from './App.vue';
import Varlet from '@varlet/ui';
import { createApp } from 'vue';

createApp(App).use(Varlet).mount('#app');
