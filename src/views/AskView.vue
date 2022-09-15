<template>
  <div>
    <h2>AskView</h2>
    <AsksList />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
<script>
import AsksList from "@/components/AsksList.vue";
export default {
  components: { AsksList },
};
</script>
