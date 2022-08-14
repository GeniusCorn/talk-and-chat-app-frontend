<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@vicons/utils';
import { DeleteFilled } from '@vicons/material';
import router from '@/router';

const show = ref<boolean>(false);

function open(): void {
  show.value = true;
}

function close(): void {
  show.value = false;
}

function deleteThis(): void {
  console.log('delete this');
}

function goSession(): void {
  router.push('/session');
}
</script>

<template>
  <div
    v-touch:swipe.right="close"
    v-touch:swipe.left="open"
    class="relative flex p-3 border-b-2"
    @click.self="goSession"
  >
    <div class="ml-2">
      <div class="">用户名</div>

      <div>消息</div>
    </div>

    <transition
      enter-active-class="animate__animated animate__fadeInRight"
      leave-active-class="animate__animated animate__fadeOutRight"
    >
      <div
        v-if="show"
        class="absolute top-0 right-0 h-full w-10 flex flex-row-reverse justify-center items-center bg-red-500"
      >
        <Icon size="20" @click="deleteThis">
          <DeleteFilled></DeleteFilled>
        </Icon>
      </div>
    </transition>
  </div>
</template>

<style scoped></style>
