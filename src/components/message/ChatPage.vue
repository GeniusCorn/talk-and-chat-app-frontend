<script setup lang="ts">
import BScroll from '@better-scroll/core'

const props = defineProps<{
  show: boolean
}>()

const emit = defineEmits(['close'])

type Message = { type: 'left' | 'right'; message: string }

const chatPage: HTMLElement = $ref()

let message = $ref('')

const messageList: Message[] = $ref([])

let bScroll: any = $ref()
watch(
  () => props.show,
  async () => {
    bScroll = BScroll(chatPage, {
      probeType: 3,
      click: true
    })

    await nextTick()
    if (props.show) {
      bScroll.refresh()
    } else {
      bScroll.destroy()
    }
  }
)

const itemRefs = $ref([])

watch(messageList, async () => {
  await nextTick()
  bScroll.refresh()

  // Scroll to the end of the messages list
  bScroll.scrollToElement(itemRefs.at(-1), 200)
})

function sendMessage() {
  if (message === '') {
    alert('请输入有效内容')
    return false
  }

  const item: Message = {
    type: 'right',
    message
  }

  messageList.push(item)

  clearMessage()
}

function clearMessage() {
  message = ''
}
</script>

<template>
  <Transition
    enter-active-class="animate__animated animate__slideInRight"
    leave-active-class="animate__animated animate__slideOutRight"
  >
    <div v-show="props.show" absolute top-0 left-0 z-50 w-full h-full shadow-lg>
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

      <div ref="chatPage" h="[84vh]" bg-white overflow-hidden>
        <div>
          <div v-for="(item, index) in messageList" :key="index" ref="itemRefs">
            <RightMessageBox
              v-if="item.type === 'right'"
              :message="item.message"
            />
            <LeftMessageBox
              v-if="item.type === 'left'"
              :message="item.message"
            />
            <!-- <LeftMessageBox :message="item" /> -->
          </div>
        </div>

        <div w-screen h="[8vh]" bg-pink-300 fixed bottom-0>
          <div grid="~ cols-4" p-2 gap-4>
            <input
              v-model="message"
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
              @click="sendMessage()"
            >
              发送
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped></style>
