<script setup lang="ts">
import router from '@/router'
</script>

<template>
  <div flex flex-col h-screen justify-center items-center gap-4>
    <div i-tabler-key text-6xl text-pink-400 />

    <div text-lg>创建你的 ID</div>
    <div text-sm>只需一个 ID，你即可畅享所有服务</div>

    <div flex="~ col" gap-2>
      <div>用户名</div>
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

      <div>密码</div>
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

      <div>确认密码</div>
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

      <button rounded bg-pink-300 h-8 border shadow-lg>注册</button>

      <button rounded bg-sky-300 h-8 border shadow-lg @click="router.back()">
        返回
      </button>
    </div>
  </div>
</template>

<style scoped></style>
