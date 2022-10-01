<script setup lang="ts">
const props = defineProps<{
  show: boolean
}>()

const emit = defineEmits(['close'])
</script>

<template>
  <Transition
    enter-active-class="animate__animated animate__slideInRight"
    leave-active-class="animate__animated animate__slideOutRight"
  >
    <div v-if="show" absolute top-0 left-0 z-50 w-full h-full shadow-lg>
      <div
        bg-pink-400
        h="8vh"
        flex="~"
        justify-between
        items-center
        text-white
        font-semibold
        relative
      >
        <div
          i-tabler-arrow-left
          absolute
          left-2
          text-2xl
          text-center
          @click="emit('close')"
        />
        <div></div>
        <div>聊天</div>
        <div></div>
      </div>

      <div h="84vh" bg-white></div>

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
    </div>
  </Transition>
</template>

<style scoped></style>
