<template>
<div class="header-content">
    <div class="logo"><a href="/">Jobs</a></div>
    <form class="searchbox">
        <input class="search-input" type="text" ref="search" placeholder="Start your search" @input="fireSearch" v-model="searchInput">
    </form>
    <div class="social">
        <a href="http://facebook.com/databih" target="_blank" rel="noopener"> <img src="../assets/facebook-logo.svg" alt="Facebook"></a>
        <a href="http://facebook.com/databih" target="_blank" rel="noopener"> <img src="../assets/twitter-logo.svg" alt="Twitter"></a>
    </div>
    <nav>
      <router-link to="home">Home</router-link>
        <router-link active-class="active" to="contact" class="contact">Contact</router-link>
        <router-link active-class="active" to="blog" class="blog">Blog</router-link>
        <router-link active-class="active" to="register" class="register">Register</router-link>
        <button v-on:click="toggleMenu" class="hamburger">
          <span></span>
        </button>
    </nav>
</div>
</template>

<script>
import { EventBus } from '../services/event-bus';
export default {
  name: 'AppHeader',
  data() {
    return {
      searchInput: '',
      msg: 'AAAAAAAAAAA'
    };
  },
  methods: {
    fireSearch: function() {
      EventBus.$emit('searchFired', this.searchInput);
    },
    toggleMenu: function() {
      this.toggleMenu = true;
      EventBus.$emit('sidebarState', this.toggleMenu);
    }
  }
};
</script>

<style scoped lang="scss">
@import '../common/styles/common';
header {
  position: fixed;
  top: 0;
  width: 100%;
}
.header-content {
  display: flex;
  align-items: center;
  height: 45px;
  padding: 8px;
  border-bottom: 1px solid lightgray;
  background-color: whitesmoke;
}
nav {
  margin-left: 10px;
  a {
    color: darkslategray;
    margin-left: 10px;
    &:hover {
      color: gray;
    }
  }
}
.social {
  margin-left: auto;
  img {
    height: 20px;
    width: auto;
    margin-left: 10px;
    &:hover {
      filter: invert(1);
    }
  }
}
.logo {
  a {
    font-size: 36px;
    color: black;
  }
}
a {
  color: #fff;
  &.active{
    color: #9c9c9c;
  }
}
.searchbox {
  margin: 0 15px;
  .search-input {
    appearance: none;
    padding: 0.5rem 1rem;
    font-family: $main-font;
    font-size: 17px;
    color: #464a4c;
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 3px;
    border: 1px solid #dbdbdb;
    width: 70%;
    height: 22px;
    vertical-align: middle;
  }
}
.hamburger{
  display: none;
}
@media screen and (max-width: $tablet-breakpoint) {
  nav a, .social{
    display: none;
  }
  .hamburger {
    display: block;
    position: fixed;
    overflow: hidden;
    right: 8px;
    top: 8px;
    margin: 0;
    padding: 0;
    width: 40px;
    height: 50px;
    font-size: 0;
    text-indent: -9999px;
    cursor: pointer;
    outline: none;
    background: none;
    border: 0;
    span {
      display: block;
      position: absolute;
      top: 20px;
      left: 0;
      right: 0;
      height: 5px;
      background: #9e9e9e;
      &:before,
      &:after {
        display: block;
        position: absolute;
        left: 0;
        width: 100%;
        height: 5px;
        background-color: #9e9e9e;
        content: '';
      }
      &:before {
        top: -13px;
      }
      &:after {
        bottom: -13px;
      }
    }
  }
}
</style>
