<script setup lang="ts">
import { Icon } from '@vicons/utils';
import { SettingsFilled } from '@vicons/material';
import UserProfile from '@/components/home/UserProfile.vue';
import router from '@/router';

function logout(): void {
  router.push('/');
}
</script>

<template>
  <div class="flex flex-col gap-4 justify-center items-center">
    <user-profile></user-profile>

    <button
      class="bg-pink-400 text-white block w-5/6 h-8 rounded-lg shadow-lg"
      @click="logout"
    >
      <Icon>
        <SettingsFilled></SettingsFilled>
      </Icon>
      <span> 注销 </span>
    </button>
  </div>
</template>

<style scoped></style>
