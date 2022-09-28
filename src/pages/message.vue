<script setup lang="ts">
import BScroll from '@better-scroll/core'

const scroll: HTMLElement = $ref()

onMounted(() => {
  const bs = new BScroll(scroll, {
    probeType: 3,
    click: true
  })
})
</script>

<template>
  <div ref="scroll" class="h-[84vh]" overflow-hidden>
    <div>
      <div v-for="n in 20" :key="n">
        <MessageBox />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<route lang="yaml">
meta:
  layout: common
</route>
