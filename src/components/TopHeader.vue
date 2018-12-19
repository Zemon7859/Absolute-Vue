<template>
  <header>
    <transition name="brand">
      <div class="brand">
        <router-link class="vue-a " to="/" v-if="showSideBar">
          <b>Absolute</b>
          Admin
        </router-link>
        <span class="fa fa-bars" v-on:click="CHANGE_SIDEBAR"></span>
      </div>
    </transition>
    <ul class="auth">
      <li>
        <router-link to="/" class="dropdown-toogle vue-a" id="authOperation" data-toggle="dropdown"
                     aria-haspopup="false"
                     aria-expanded="true">
          <img src="../assets/auth.jpg" alt="">
          <span> Michael .R</span>
          <i class="fa fa-caret-down"></i>
        </router-link>
        <ul class="dropdown-menu" aria-labelledby="authOperation">
          <li class="list-group-item">
            <router-link class="vue-a" to="/">Action</router-link>
          </li>
          <li class="list-group-item">
            <router-link class="vue-a" to="/">Another action</router-link>
          </li>
          <li class="list-group-item">
            <router-link class="vue-a" to="/">Something else here</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </header>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'top-header',
  computed: mapState([
    'showSideBar'
  ]),
  methods: {
    ...mapMutations([
      'CHANGE_SIDEBAR'
    ])
  }
}
</script>

<style scoped>
  @import "../css/header.css";

  .brand-enter-active, .brand-leave-active {
    animation: brand-hide .5s;
    animation-delay: .3s;
    animation-fill-mode: forwards;
  }

  .brand-enter, .brand-leave-to {
    animation: brand-hide .5s;
    animation-delay: .3s;
    animation-fill-mode: forwards;
  }

  @keyframes brand-show {
    0% {
      display: block;
      width: 0px;
    }
    100% {
      width: 250px;
    }
  }

  @keyframes brand-hide {
    0% {
      width: 250px;
    }
    100% {
      display: none;
      width: 0px;
    }
  }
</style>
