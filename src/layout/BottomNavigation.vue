<script setup lang="ts">
import { ref } from 'vue';
import router from '../router/index';

const active = ref('chat');

function handleChange(): void {
  if (active.value === 'chat') {
    router.push('/main/chat');
  } else if (active.value === 'friends') {
    router.push('/main/friends');
  } else if (active.value === 'home') {
    router.push('/main/home');
  }
}
</script>

<template>
  <keep-alive>
    <var-bottom-navigation
      v-model:active="active"
      :fixed="true"
      @change="handleChange"
    >
      <var-bottom-navigation-item
        name="chat"
        label="聊天"
        icon="message-processing-outline"
      />

      <var-bottom-navigation-item
        name="friends"
        label="好友"
        icon="card-account-details-outline"
      />

      <var-bottom-navigation-item name="home" label="我的" icon="home" />
    </var-bottom-navigation>
  </keep-alive>
</template>

<style scoped></style>
