<template>
  <div v-for="job in jobsList" :key="job.id">
    <a :href="job.url">{{ job.title }}</a>
    <small>{{ job.time_ago }}, {{ job.domain }}</small>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, useStore } from "vuex";
import { FETCH_JOBS_STATE } from "@/store/Jobs";

export default defineComponent({
  name: "JobsList",
  computed: {
    ...mapState("Jobs", {
      jobsList: "jobsList",
    }),
  },
  created() {
    const store = useStore();
    store.dispatch(FETCH_JOBS_STATE);
  },
});
</script>

<style scoped></style>
