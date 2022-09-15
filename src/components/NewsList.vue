<template>
  <div v-for="news in newsList" :key="news.id">
    {{ news.title }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, useStore } from "vuex";
import { FETCH_NEWS_STATE } from "@/store/NewsState";

export default defineComponent({
  name: "NewsList",
  computed: {
    ...mapState("NewsState", ["newsList"]),
  },
  created() {
    const store = useStore();
    store.dispatch(FETCH_NEWS_STATE);
  },
});
// import { fetchNewsList } from "@/api";
// import { defineComponent } from "vue";
//
// export default defineComponent({
//   name: "NewsList",
//   data() {
//     return {
//       newsList: [],
//     };
//   },
//   computed: {
//     news(): {
//       console.log()
//     }
//   },
//
//   created() {
//     const vm = this;
//     fetchNewsList()
//       .then((res) => {
//         console.log(vm.$store.state.NewsStore);
//         vm.newsList = res.data;
//       })
//       .catch((e) => console.dir(e));
//   },
// });
</script>

<style scoped></style>
