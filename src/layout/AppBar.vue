<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ArrowBackIosNewFilled } from '@vicons/material';
import { Icon } from '@vicons/utils';
import router from '@/router';

const route = useRoute();

function goBack(): void {
  router.push('/main/chat');
}
</script>

<template>
  <div class="bg-pink-400 h-14 relative shadow-lg">
    <div class="text-white font-semibold absolute inset-0 m-auto h-max w-max">
      {{ route.meta.title }}
    </div>
    <Icon
      v-if="route.name === 'session'"
      color="white"
      class="absolute inset-y-0 m-auto left-4"
      @click="goBack"
    >
      <ArrowBackIosNewFilled></ArrowBackIosNewFilled>
    </Icon>
  </div>
</template>
