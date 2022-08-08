<script setup lang="ts">
import { ref } from 'vue';

const active = ref(0);
</script>

<template>
  <var-bottom-navigation v-model:active="active">
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
