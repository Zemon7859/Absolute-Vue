<template>
  <transition name="sidebar">
    <aside id="sidebar-left" v-if="showSideBar">
      <div class="sidebar-left-content">
        <div class="sidebar-widget author-widget">
          <div class="media">
            <a href="/" class="media-left">
              <img src="../assets/auth.jpg" alt="">
            </a>
            <div class="media-body">
              <div class="media-links">
                <router-link class="vue-a" to="/">注销</router-link>
              </div>
              <div class="media-author">
                Michael Richards
              </div>
            </div>
          </div>
        </div>
        <ul class="nav sidebar-menu">
          <li class="sidebar-label pt20">Label</li>
          <li class="active">
            <router-link class="vue-a" to="/">
              <i class="fa fa-envelope-open-o"></i>
              <span class="sidebar-title">Message</span>
              <span class="sidebar-title-tray">
              <span class="tag new">News</span>
            </span>
            </router-link>
          </li>
          <li>
            <a href="javascript:void(0)" class="vue-a accordion-toggle" v-on:click="showThisSubNav('menu1')">
              <i class="fa fa-envelope-open-o"></i>
              <span class="sidebar-title">Admin Plugins</span>
              <span class="angle">
              <!--<i class="fa fa-angle-right"></i>-->
              <i v-bind:class="{fa: true, 'fa-angle-right': !showSubNav.menu1, 'fa-angle-down': showSubNav.menu1}"></i>
            </span>
            </a>
            <transition name="popup">
              <ul class="sub-nav" v-if="showSubNav.menu1">
                <li>
                  <router-link class="vue-a" to="/">
                    <i class="fa fa-bar-chart"></i>
                    <span class="sidebar-title">{{showSubNav.menu1}}</span>
                  </router-link>
                </li>
              </ul>
            </transition>
          </li>
          <li>
            <router-link class="vue-a" to="/">
              <i class="fa fa-bar-chart"></i>
              <span class="sidebar-title">站点统计</span>
            </router-link>
          </li>
        </ul>
      </div>
    </aside>
  </transition>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'sidebar-left',
  data () {
    return {
      showSubNav: {
        menu1: true
      }
    }
  },
  computed: mapState([
    'showSideBar'
  ]),
  methods: {
    showThisSubNav: function (thisSubNav) {
      this.showSubNav[thisSubNav] = !this.showSubNav[thisSubNav]
    },
    ...mapMutations([
      'CHANGE_SIDEBAR'
    ])
  }
}
</script>

<style scoped>
  @import "../css/sidebar_left.css";

  .popup-enter-active, .popup-leave-active {
    transition: popup-show 0s ease-in;
  }

  .popup-enter, .popup-leave-to /* .popup-leave-active below version 2.1.8 */
  {
    transition: popup-hide 0s ease-in;
  }

  @keyframes popup-show {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes popup-hide {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }

  .sidebar-enter-active, .sidebar-leave-active {
    animation: sidebar-show .5s;
    animation-fill-mode: forwards;
  }

  .sidebar-enter, .sidebar-leave-to /* .sidebar-leave-active below version 2.1.8 */
  {
    animation: sidebar-hide .5s;
    animation-fill-mode: forwards;
  }

  @keyframes sidebar-show {
    0% {
      width: 0;
    }
    100% {
      width: 250px;
    }
  }

  @keyframes sidebar-hide {
    0% {
      width: 250px;
    }
    100% {
      width: 0;
    }
  }
</style>
