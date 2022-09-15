<template>
  <div>
    <section>
      <div class="user-container">
        <div><i class="fa-regular fa-user"></i></div>
        <div class="user-description">
          <RouterLink :to="`/user/${item.user}`">{{ item.user }}</RouterLink>
          <p class="tiem">{{ item.time_ago }}</p>
        </div>
      </div>
      <h2>{{ item.title }}</h2>
      <article v-html="item.content"></article>
    </section>
    <section></section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, useStore } from "vuex";
import { FETCH_ITEM_STATE } from "@/store/Item";

export default defineComponent({
  name: "ItemView",
  computed: {
    ...mapState("Item", {
      item: "item",
    }),
  },
  created() {
    const store = useStore();
    store.dispatch(FETCH_ITEM_STATE, { id: this.$route.params.id });
  },
});
</script>

<style scoped lang="scss">
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  .fa-user {
    font-size: 2.5rem;
  }
  .user-description {
    padding-left: 8px;
    .time {
      font-size: 0.7rem;
    }
  }
}
</style>
