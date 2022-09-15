<template>
  <div v-for="ask in askList" :key="ask.id">{{ ask.title }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, useStore } from "vuex";
import { FETCH_ASK_STATE } from "@/store/AskState";

export default defineComponent({
  name: "AsksList",
  computed: {
    ...mapState("AskState", ["askList"]),
  },
  created() {
    const store = useStore();
    store.dispatch(FETCH_ASK_STATE);
  },
});
</script>

<style scoped></style>
