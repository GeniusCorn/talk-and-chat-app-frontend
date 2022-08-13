import { VarletUIResolver } from 'unplugin-vue-components/resolvers';
import components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    components({
      resolvers: [VarletUIResolver()],
    }),
  ],
});
