import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTagify,
  presetUno
} from 'unocss'

import transformerDirective from '@unocss/transformer-directives'

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons(), presetTagify()],
  transformers: [transformerDirective()]
})
