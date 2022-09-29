<script setup lang="ts">
import router from '@/router'
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
  <div ref="scroll" h="[84vh]" overflow-hidden>
    <div>
      <div v-for="n in 20" :key="n">
        <MessageBox @click="router.push('/chat')" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<route lang="yaml">
meta:
  layout: common
</route>
