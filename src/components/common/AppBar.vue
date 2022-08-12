<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <var-app-bar :title="props.title" title-position="center" />
</template>
