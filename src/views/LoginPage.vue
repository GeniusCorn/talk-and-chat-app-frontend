<script setup lang="ts">
import LoginForm from '@/components/login/LoginForm.vue';
</script>

<template>
  <div class="h-screen grid grid-rows-3 gap-4">
    <div class="h-max place-self-center">
      <span class="text-3xl">欢迎使用聊天软件</span>
    </div>
    <LoginForm></LoginForm>
    <div class="fixed bottom-0 right-0">
      <span class="text-xs"> Powered by @GeniusCorn </span>
    </div>
  </div>
</template>
