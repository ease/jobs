<template>
    <div>
      <div class="post" v-for="item in filteredJobs" :key="item.id">
        <router-link :to="{ name: 'Job', params: { title: 'Naslov' }}">
        <div class="details">
          <img class="company-thumb" src="https://static.agorapulse.com/wp-content/uploads/2017/10/apartment-a.png">
          <div class="post-title">{{ item.name }}
            
          </div>
          <div class="description">{{ item.company.catchPhrase }}</div>
          <!-- <div class="company-name">{{ item.company.name }}</div> -->
          <span class="location">{{ item.address.city }}</span><br>
          <span class="deadline">30.03.2017.</span>
        </div>
        </router-link>
      </div>
      <div class="no-results" v-if="filteredJobs.length === 0">
        No results
      </div>
    </div>
</template>

<script>
import axios from 'axios';
import { EventBus } from '../services/event-bus';

export default {
  name: 'JobPost',
  created: function() {
    this.fetchData();
  },
  data() {
    return {
      search: '',
      msg: 'Jooooob',
      posts: []
    };
  },
  methods: {
    fetchData() {
      axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
        this.posts = response.data;
        console.log(this.posts);
      });
    }
  },
  mounted: function() {
    var self = this;
    EventBus.$on('searchFired', function(searchInput) {
      self.search = searchInput;
    });
  },
  computed: {
    filteredJobs: function(post) {
      var self = this;
      return this.posts.filter(function(post) {
        return post.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0;
      });
    }
  }
};
</script>

<style scoped lang="scss">
.post {
  a {
    color: black;
  }
  // font-family: 'Varela Round', sans-serif;
  border-bottom: 1px solid #ebebeb;
  &:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
  .details {
    display: grid;
    grid-template-columns: 80px auto 140px;
    grid-template-rows: 40px 40px 0;
    align-items: center;
    padding: 5px;
    text-align: left;
  }
  .post-title {
    grid-column: 2/3;
    grid-row: 1/2;
    display: flex;
  }
  img {
    grid-column: 1/2;
    grid-row: 1/3;
  }
  .description {
    grid-column: 2/3;
    grid-row: 2/3;
    display: flex;
  }
  .location {
    grid-column: 3/3;
    grid-row: 1/2;
    display: flex;
    justify-content: flex-end;
  }
  .deadline {
    grid-column: 3/3;
    grid-row: 2/3;
    display: flex;
    justify-content: flex-end;
    font-size: 14px;
    color: gray;
  }

  @media screen and (max-width: 370px) {
    .location {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
  }
  @media screen and (max-width: 768px) {
    .details {
      grid-template-columns: 80px auto 140px;
    }
  }
}

.no-results {
  padding: 20px;
}
</style>
