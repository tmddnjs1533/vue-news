<template>
  <div>
    <h2>JobsView</h2>
    <JobsList />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
<script>
import JobsList from "@/components/JobsList.vue";
export default {
  components: { JobsList },
};
</script>
