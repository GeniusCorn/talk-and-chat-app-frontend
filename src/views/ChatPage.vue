<script setup lang="ts">
import { ref, onMounted } from 'vue';
import BScroll from 'better-scroll';
import AppBar from '../components/common/AppBar.vue';
import MessageBox from '../components/chat/MessageBox.vue';
import BottomNavigation from '../components/common/BottomNavigation.vue';

const wrapper = ref();

onMounted(() => {
  BScroll(wrapper.value, {
    probeType: 3,
    click: true,
  });
});
</script>

<template>
  <app-bar></app-bar>
  <div ref="wrapper" class="h-screen overflow-hidden">
    <div style="padding-bottom: 104px">
      <div v-for="n in 20" :key="n">
        <message-box></message-box>
      </div>
    </div>
  </div>
  <bottom-navigation></bottom-navigation>
</template>

<style scoped></style>
