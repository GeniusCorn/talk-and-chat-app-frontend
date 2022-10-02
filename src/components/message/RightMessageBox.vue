<script setup lang="ts">
const props = defineProps<{
  message: string
}>()
</script>

<template>
  <div w-full h="10vh" ml--2 flex="~ row row-reverse" items-center>
    <div i-tabler-user-circle text-5xl />
    <div bg-pink-400 rounded px-1 w-fit>{{ props.message }}</div>
  </div>
</template>

<style scoped></style>
