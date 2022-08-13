<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <var-app-bar title-position="center">
    <template #default>{{ route.meta.title }}</template>
  </var-app-bar>
</template>
