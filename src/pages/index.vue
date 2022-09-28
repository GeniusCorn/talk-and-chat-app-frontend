<script setup lang="ts">
import router from '@/router'
</script>

<template>
  <div flex="~ col" h-screen justify-center items-center gap-4>
    <div i-tabler-brand-messenger text-6xl text-pink-400 />

    <div flex="~ col" gap-2>
      <input
        type="text"
        rounded
        h-8
        w-68
        outline-none
        focus:ring
        focus:border-pink-400
        border="~"
        indent-1
        placeholder="账号"
      />
      <input
        type="password"
        rounded
        h-8
        outline-none
        focus:ring
        focus:border-pink-400
        border="~"
        indent-1
        placeholder="密码"
      />
      <button rounded bg-pink-300 h-8 border @click="router.push('/message')">
        登录
      </button>
      <button rounded bg-sky-300 h-8 border>注册</button>
    </div>
  </div>
</template>

<style scoped>
.input {
  @apply;
}
</style>
