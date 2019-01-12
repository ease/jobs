<template>
    <div>
      <div class="user-info">
        {{ userData.id }}
        <div class="user-name">
        {{ userData.name }}
        </div>
        <div class="username">
        {{ userData.username }}
        </div>
        <div class="email">
          {{ userData.email }}
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserPage',
  created: function() {
    this.fetchData();
  },
  data() {
    return {
      userData: Object,
      userId: this.$route.params.id
    };
  },
  methods: {
    fetchData() {
      axios
        .get('https://jsonplaceholder.typicode.com/users/' + this.userId)
        .then(response => {
          this.userData = response.data;
          console.log('Current user info:', this.userData);
        });
    }
  }
};
</script>

<style scoped lang="scss">

</style>
