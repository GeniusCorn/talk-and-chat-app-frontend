<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

onMounted(() => {
  const { path } = route

  switchRoute(path)
})

watch(route, () => {
  const { path } = route

  switchRoute(path)
})

let title: string = $ref('')

function switchRoute(path: string) {
  switch (path) {
    case '/message':
      title = '消息'
      break

    case '/address':
      title = '好友'
      break

    case '/settings':
      title = '设置'
      break

    default:
      break
  }
}
</script>

<template>
  <div
    bg-pink-400
    class="h-[8vh]"
    flex="~"
    justify-center
    items-center
    text-white
    font-semibold
  >
    {{ title }}
  </div>
</template>

<style scoped></style>
