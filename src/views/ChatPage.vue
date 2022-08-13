<script setup lang="ts">
import { ref, onMounted } from 'vue';
import BScroll from 'better-scroll';
import MessageBox from '../components/chat/MessageBox.vue';

const wrapper = ref();

onMounted(() => {
  BScroll(wrapper.value, {
    probeType: 3,
    click: true,
  });
});
</script>

<template>
  <div ref="wrapper" class="h-screen overflow-hidden">
    <div style="padding-bottom: 104px">
      <div v-for="n in 20" :key="n">
        <message-box></message-box>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
