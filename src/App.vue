<script setup lang="ts">
import AppBar from './components/AppBar.vue';
import BottomNavigation from './components/BottomNavigation.vue';
import MessageBox from './components/MessageBox.vue';
</script>

<template>
  <app-bar></app-bar>
  <div class="overscroll-y-scroll">
    <template v-for="n in 10">
      <message-box></message-box>
    </template>
  </div>
  <bottom-navigation></bottom-navigation>
</template>

<style scoped></style>
