<template>
    <div>
        <h2>{{ msg }}</h2>
        Please register
        <button v-on:click="fetchData">FETCH DATA TEST</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'register',
  data() {
    return {
      msg: 'Welcome to register page'
    };
  },
  head: {
    title: 'This is the about page'
  },
  methods: {}
};
</script>

<style scoped>

</style>