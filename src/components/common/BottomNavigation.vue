<script setup lang="ts">
import { ref } from 'vue';
import router from '../../router';

const active = ref(0);

function onClick(): void {
  switch (active.value) {
    case 0:
      router.push('/');
      break;
    case 1:
      router.push('/friends');
      break;
    case 2:
      router.push('/home');
      break;
    default:
      break;
  }
}
</script>

<template>
  <var-bottom-navigation
    v-model:active="active"
    class="bottom-nav"
    @click="onClick"
  >
    <var-bottom-navigation-item
      label="聊天"
      icon="message-processing-outline"
    />

    <var-bottom-navigation-item
      label="好友"
      icon="card-account-details-outline"
    />

    <var-bottom-navigation-item label="我的" icon="home" />
  </var-bottom-navigation>
</template>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
}
</style>
