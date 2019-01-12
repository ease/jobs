<template>
    <job-post class="posts"></job-post>
</template>

<script>
import JobPost from './JobPost.vue';

export default {
  name: 'JobPosts',
  components: {
    JobPost: JobPost
  }
};
</script>

<style scoped>
.posts{
  padding: 0 5px;
}
</style>