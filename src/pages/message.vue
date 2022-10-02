<script setup lang="ts">
import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'

const scroll: HTMLElement = $ref()

BScroll.use(ObserveDOM)
onMounted(() => {
  BScroll(scroll, {
    probeType: 3,
    click: true,
    observeDom: true
  })
})

const show = $ref(false)
</script>

<template>
  <Teleport to="body">
    <ChatPage :show="show" @close="show = false" />
  </Teleport>

  <div ref="scroll" h="[84vh]" overflow-hidden>
    <div>
      <div v-for="n in 20" :key="n">
        <MessageBox @click="show = !show" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<route lang="yaml">
meta:
  layout: common
</route>
