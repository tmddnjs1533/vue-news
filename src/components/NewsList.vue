<template>
  <div v-for="news in newsList" :key="news.id">
    <a :href="news.url">{{ news.title }}</a>
    <small
      >{{ news.time_ago }} by
      <RouterLink :to="`/user/${news.user}`"> {{ news.user }}</RouterLink>
    </small>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, useStore } from "vuex";
import { FETCH_NEWS_STATE } from "@/store/News";

export default defineComponent({
  name: "NewsList",
  computed: {
    ...mapState("News", {
      newsList: "newsList",
    }),
  },
  created() {
    const store = useStore();
    store.dispatch(FETCH_NEWS_STATE);
  },
});
</script>

<style scoped></style>
