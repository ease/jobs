<template>
  <div class="home">
    <aside>
      <filter-search></filter-search>
    </aside>
    <div class="posts-home">
      <job-posts></job-posts>
    </div>
  </div>
</template>

<script>
import JobPosts from "./JobPosts.vue";
import FilterSearch from "./FilterSearch";

export default {
  name: "home",
  components: {
    JobPosts: JobPosts,
    FilterSearch: FilterSearch
  },
  data() {
    return {
      msg: "Welcome to Jobs"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../common/styles/common";

.home {
  display: grid;
  grid-template-columns: 170px auto auto;
}

aside {
  grid-column: 1/2;
  grid-row: 1/3;
}

.posts-home {
  text-align: center;
  grid-column: 2/5;
  grid-row: 1/3;
}

@media screen and (max-width: $tablet-breakpoint) {
  aside {
    grid-column: 1/2;
    grid-row: 3/3;
  }
  .posts-home {
    grid-column: 1/5;
  }
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
