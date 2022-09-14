<template>
  <header>
    <h1>Vue News</h1>
    <nav>
      <RouterLink to="/news">News</RouterLink>
      <RouterLink to="/ask">Ask</RouterLink>
      <RouterLink to="/jobs">Jobs</RouterLink>
    </nav>
    <RouterLink to="/user">User</RouterLink>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
h1 {
  color: var(--color-heading);
}
nav {
  width: 100%;
  font-size: 1rem;
  margin-top: 1rem;
  text-align: left;
  margin-left: -1rem;

  padding: 1rem 0;
  a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
    &:first-of-type {
      border: 0;
    }
    &.router-link-exact-active {
      color: var(--color-text);
      &:hover {
        background-color: transparent;
      }
    }
  }
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: -1rem;

    padding: 1rem 0;
  }
}
</style>
