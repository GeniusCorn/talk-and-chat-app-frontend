<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import AppBar from './components/common/AppBar.vue';
import BottomNavigation from './components/common/BottomNavigation.vue';

const route = useRoute();
const title = ref();
watch(
  () => route.meta,
  () => {
    title.value = route.meta.title;
  },
);
</script>

<template>
  <app-bar :title="title"></app-bar>
  <router-view></router-view>
  <bottom-navigation></bottom-navigation>
</template>

<style scoped></style>
