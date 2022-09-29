<script setup lang="ts"></script>

<template>
  <div
    bg-pink-400
    h="8vh"
    flex="~"
    justify-center
    items-center
    text-white
    font-semibold
  >
    聊天
  </div>

  <div w-screen h="8vh" bg-pink-300 fixed bottom-0>
    <div grid="~ cols-4" p-2 gap-4>
      <input
        col-span-3
        h="5vh"
        rounded-lg
        w-full
        outline="hover:none"
        border="~ solid gray-300"
        indent-2
        shadow-lg
        text-base
        transition
        ease-in-out
        type="text"
      />
      <button
        col-span-1
        w-full
        rounded-lg
        font-medium
        outline="none hover:2"
        border="~ slate-100"
        active:bg-pink-400
        shadow-lg
        transition
        duration-150
        ease-in-out
      >
        发送
      </button>
    </div>
  </div>
</template>

<style scoped></style>
