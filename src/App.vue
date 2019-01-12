<template>
    <div id="app">
        <div class="main-content">
            <header>
            <!-- Logo position <img src="./assets/logo.png" alt="Vue.js PWA" height="42" width="42"> -->
              <app-header></app-header>
            </header>
            <main>
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script>
import AppHeader from './components/Header';

export default {
  name: 'app',
  components: {
    AppHeader: AppHeader
  }
};
</script>

<style lang="scss">
@import './common/styles/common';

body {
  margin: 0;
}

#app {
  font-family: $main-font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.main-content {
  display: grid;
  grid-template-columns: 170px auto auto;
  grid-template-rows: 60px 1fr;
}
header {
  grid-column: 1/3;
  grid-row: 1/2;
  position: fixed;
  width: 100%;
}
main {
  text-align: center;
  grid-column: 1/4;
  grid-row: 2/3;
}

@media screen and (max-width: $tablet-breakpoint) {
  // .main-content {
  //   display: grid;
  //   grid-template-columns: 200px 1fr 200px;
  //   grid-template-rows: 60px 1fr;
  // }
  // header {
  //   grid-column: 1/3;
  //   grid-row: 1/2;
  //   position: fixed;
  //   width: 100%;
  // }
  // main {
  //   text-align: center;
  //   grid-column: 1/4;
  //   grid-row: 2/3;
  // }
}

a {
  text-decoration: none;
}
</style>
