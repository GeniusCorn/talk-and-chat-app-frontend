<script setup lang="ts">
import { ref } from 'vue';

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
</script>

<template>
  <div
    v-touch:swipe.right="close"
    v-touch:swipe.left="open"
    class="relative flex p-3 border-b-2"
  >
    <var-icon name="account-circle-outline" :size="50" />
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
        v-ripple
        class="absolute top-0 right-0 h-full flex flex-row-reverse justify-center items-center bg-red-500"
      >
        <div class="w-10 text-center" @click="deleteThis">
          <var-icon name="delete" />
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped></style>
