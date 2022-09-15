<template>
  <div>
    <h2>NewsView</h2>
    <div>
      <NewsList />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
<script lang="ts">
import NewsList from "@/components/NewsList.vue";
export default {
  components: { NewsList },
};
</script>
