<template>
  <div v-for="ask in askList" :key="ask.id">
    <RouterLink :to="`/item/${ask.id}`">{{ ask.title }}</RouterLink>
    <small>{{ ask.time_ago }} by {{ ask.user }}</small>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, useStore } from "vuex";
import { FETCH_ASK_STATE } from "@/store/Ask";

export default defineComponent({
  name: "AsksList",
  computed: {
    ...mapState("Ask", {
      askList: "askList",
    }),
  },
  created() {
    const store = useStore();
    store.dispatch(FETCH_ASK_STATE);
  },
});
</script>

<style scoped></style>
