import '@varlet/ui/es/style';
import './style.css';
import './index.css';

import Varlet from '@varlet/ui';
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).use(Varlet).mount('#app');
