<script setup lang="ts">
import router from '@/router'
import { useRoute } from 'vue-router'

const route = useRoute()

const activeBar = $ref({
  message: false,
  address: false,
  settings: false
})

onMounted(() => {
  const { path } = route

  switchRoute(path)
})

watch(route, () => {
  const { path } = route

  switchRoute(path)
})

function switchRoute(path: string) {
  switch (path) {
    case '/message':
      activeBar.message = true
      activeBar.address = false
      activeBar.settings = false
      break

    case '/address':
      activeBar.message = false
      activeBar.address = true
      activeBar.settings = false
      break

    case '/settings':
      activeBar.message = false
      activeBar.address = false
      activeBar.settings = true
      break

    default:
      break
  }
}
</script>

<template>
  <div grid="~ cols-3" fixed bottom-0 w-full class="h-[8vh]">
    <div flex="~" justify-center items-center @click="router.push('/message')">
      <div
        i-tabler-messages
        text-2xl
        :class="{ 'text-pink-400': activeBar.message }"
      />
    </div>
    <div flex="~" justify-center items-center @click="router.push('/address')">
      <div
        i-tabler-address-book
        text-2xl
        :class="{ 'text-pink-400': activeBar.address }"
      />
    </div>
    <div flex="~" justify-center items-center @click="router.push('/settings')">
      <div
        i-tabler-settings
        text-2xl
        :class="{ 'text-pink-400': activeBar.settings }"
      />
    </div>
  </div>
</template>

<style scoped></style>
