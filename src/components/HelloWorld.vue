<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  <p text="4xl">{{ msg }}</p>
</template>

<style scoped></style>
