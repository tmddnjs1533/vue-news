<template>
  <div>
    <h2>UserView</h2>
    <div>
      <dl>
        <dt>user name</dt>
        <dd>{{ user.id }}</dd>

        <dt>user karma</dt>
        <dd>{{ user.karma }}</dd>
        <dt>user created</dt>
        <dd>{{ user.created }}</dd>
      </dl>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, useStore } from "vuex";
import { FETCH_USER_STATE } from "@/store/User";

export default defineComponent({
  name: "UserView",
  computed: {
    ...mapState("User", {
      user: "user",
    }),
  },
  created() {
    const store = useStore();
    store.dispatch(FETCH_USER_STATE, { id: this.$route.params.id });
  },
});
</script>

<style scoped></style>
