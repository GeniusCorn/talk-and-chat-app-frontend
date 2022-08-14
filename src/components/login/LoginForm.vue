<script setup lang="ts">
import router from '@/router';

function login(): void {
  router.push('/main/chat');
}
</script>

<template>
  <div class="flex flex-col gap-4 justify-center items-center">
    <input class="input" placeholder="账号" type="text" />
    <input class="input" placeholder="密码" type="password" />
    <button
      class="bg-pink-400 text-white w-5/6 h-8 rounded-lg shadow-lg"
      @click="login"
    >
      登录
    </button>
  </div>
</template>

<style scoped>
.input {
  @apply outline outline-1 focus:outline-1 indent-4 w-5/6 h-8 rounded-lg shadow-lg;
}
</style>
