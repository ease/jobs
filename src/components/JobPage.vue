<template>
    <div>
      <div class="job-info">
        {{ postData.title }}
        <div class="job-name">
        {{ postData.description }}
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
import { envSettings } from '../config';
let apiUrl = envSettings.apiUrl;
export default {
  name: 'JobPage',
  created: function() {
    this.fetchData();
  },
  data() {
    return {
      postData: Object,
      postTitle: this.$route.params.title
    };
  },
  methods: {
    fetchData() {
      axios.get(apiUrl + '/post/' + this.postTitle).then(response => {
        this.postData = response.data;
        console.log('Current job info:', this.postData);
      });
    }
  }
};
</script>

<style scoped lang="scss">

</style>
