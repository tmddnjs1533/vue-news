<template>
  <div v-for="job in jobsList" :key="job.id">{{ job.title }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, useStore } from "vuex";
import { FETCH_JOBS_STATE } from "@/store/JobsState";

export default defineComponent({
  name: "JobsList",
  computed: {
    ...mapState("JobsState", ["jobsList"]),
  },
  created() {
    const store = useStore();
    store.dispatch(FETCH_JOBS_STATE);
  },
});
</script>

<style scoped></style>
