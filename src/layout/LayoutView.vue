<script setup lang="ts">
import AppBar from './AppBar.vue';
import BottomNavigation from './BottomNavigation.vue';
</script>

<template>
  <AppBar></AppBar>
  <router-view></router-view>
  <BottomNavigation></BottomNavigation>
</template>

<style scoped></style>
