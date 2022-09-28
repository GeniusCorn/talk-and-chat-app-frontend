<script setup lang="ts">
import router from '@/router'

const id = $ref('123456')
</script>

<template>
  <div flex="~ col" justify-between h="[84vh]">
    <div flex="~ row" items-center py-2 px-4 border-b border-gray-200>
      <div i-tabler-user-circle text-5xl />

      <div flex="~ col" ml-2>
        <div font-bold>用户名</div>
        <div text-xs>ID：{{ id }}</div>
      </div>
    </div>

    <div flex="~" items-center justify-center>
      <button rounded bg-pink-300 h-8 w="3/4" border @click="router.push('/')">
        登出
      </button>
    </div>
  </div>
</template>

<style scoped></style>

<route lang="yaml">
meta:
  layout: common
</route>
