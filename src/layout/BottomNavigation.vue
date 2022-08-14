<script setup lang="ts">
import { reactive, ref } from 'vue';
import {
  MessageFilled,
  PermContactCalendarFilled,
  HomeFilled,
} from '@vicons/material';
import { Icon } from '@vicons/utils';
import router from '../router/index';

const active = reactive({
  chat: true,
  friends: false,
  home: false,
});

function goChat(): void {
  active.chat = true;
  active.friends = false;
  active.home = false;
  router.push('/main/chat');
}

function goFriends(): void {
  active.chat = false;
  active.friends = true;
  active.home = false;
  router.push('/main/friends');
}

function goHome(): void {
  active.chat = false;
  active.friends = false;
  active.home = true;
  router.push('/main/home');
}
</script>

<template>
  <div class="fixed bottom-0 w-full grid grid-cols-3 bg-white h-14">
    <div :class="{ active: active.chat }" class="navigate" @click="goChat">
      <Icon size="20">
        <MessageFilled></MessageFilled>
      </Icon>
      <div>聊天</div>
    </div>
    <div
      :class="{ active: active.friends }"
      class="navigate"
      @click="goFriends"
    >
      <Icon size="20">
        <PermContactCalendarFilled></PermContactCalendarFilled>
      </Icon>
      <div>好友</div>
    </div>
    <div :class="{ active: active.home }" class="navigate" @click="goHome">
      <Icon size="20">
        <HomeFilled></HomeFilled>
      </Icon>
      <div>我的</div>
    </div>
  </div>
</template>

<style scoped>
.navigate {
  @apply flex flex-col text-xs justify-center items-center;
}

.active {
  @apply text-pink-400;
}
</style>
