<script setup lang="ts"></script>

<template>
  <TopHeader />

  <RouterView v-slot="{ Component, route }">
    <Transition mode="out-in">
      <div :key="route.path">
        <component :is="Component" />
      </div>
    </Transition>
  </RouterView>

  <MenuBar />
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
