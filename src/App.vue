<script setup lang="ts">
import { RouterView } from "vue-router";
import ToolBar from "@/components/ToolBar.vue";
</script>

<template>
  <ToolBar />
  <RouterView v-slot="{ Component }">
    <transition name="page">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
