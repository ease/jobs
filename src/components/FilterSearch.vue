<template>
<div class="side-section" v-bind:class="{ 'expanded':expanded }">
    <button v-on:click="toggleExpand" class="x-close" v-if="expanded">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
    <ul>
      <li>Category</li>
        <ul>
          <li>Programming</li>
          <li>Economy</li>
        </ul>
      <li>Location</li>
        <ul>
          <li>Sarajevo</li>
          <li>Mostar</li>
        </ul>
      <li>Experience</li>
    </ul>
    <div class="promo-left">
      AAAAAAAAAAAA
      <img src="http://www.turnerduckworth.com/media/filer_public/86/18/86187bcc-752a-46f4-94d8-0ce54b98cd46/td-amazon-smile-logo-01-large.jpg" alt="amazon logo" width="auto" height="150">
    </div>

</div>
</template>

<script>
import { EventBus } from '../services/event-bus';

export default {
  name: 'FilterSearch',
  data() {
    return {
      expanded: false
    };
  },
  mounted: function() {
    var self = this;
    EventBus.$on('sidebarState', function(toggleState) {
      self.expanded = toggleState;
      console.log('toggleState value:', toggleState);
    });
  },
  methods: {
    toggleExpand: function() {
      this.expanded = !this.expanded;
    }
  }
};
</script>

<style scoped lang="scss">
@import '../common/styles/common';
.side-section {
  // color: red;
}
ul {
  display: flex;
  flex-direction: column;
  li {
    appearance: none;
    padding: 10px;
    border-bottom: 1px solid gray;
    margin: 0;
  }
}
button {
  &.x-close {
    position: absolute;
    appearance: none;
    width: 28px;
    height: 36px;
    top: 7px;
    right: 13px;
    margin: 0;
    border: 0;
    outline: none;
    z-index: 2;
    padding: 13px 2px 0 15px;
    background-color: transparent;
    cursor: pointer;
    span {
      border-radius: 3px;
      display: block;
      position: absolute;
      height: 3px;
      width: 100%;
      background: #ffffff;
      opacity: 1;
      left: 0;
      &:nth-child(1) {
        top: 18px;
        width: 0%;
        left: 50%;
      }
      &:nth-child(2) {
        top: 18px;
        transform: rotate(45deg);
      }
      &:nth-child(3) {
        top: 18px;
        transform: rotate(-45deg);
      }
      &:nth-child(4) {
        top: 18px;
        width: 0;
        left: 50%;
      }
    }
  }
}

@media screen and (max-width: $tablet-breakpoint) {
  .side-section {
    background: #1a2580;
    color: #fff;
    position: fixed;
    left: auto;
    top: 0;
    right: 0;
    bottom: 0;
    width: 20%;
    min-width: 250px;
    z-index: 9999;
    right: -250px;
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    transform: translateX(0);
    transform: translate3d(0, 0, 0);
    transition: 300ms ease all;
    backface-visibility: hidden;
    &.expanded {
      transform: translateX(-250px);
      transform: translate3d(-250px, 0, 0);
    }
  }
}
</style>
