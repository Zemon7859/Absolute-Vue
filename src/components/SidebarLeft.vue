<template>
  <transition name="sidebar">
    <aside id="sidebar-left">
      <div class="sidebar-left-content" v-if="showSideBar">
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
          <li :class="{actived: actived=== 'message'}" @click="changeActived('message')">
            <router-link class="vue-a" to="/">
              <i class="fa fa-user-circle-o"></i>
              <span class="sidebar-title">我的信息</span>
              <span class="sidebar-title-tray">
              <span class="tag new">News</span>
            </span>
            </router-link>
          </li>
          <li>
            <a href="javascript:void(0)" class="vue-a accordion-toggle" v-on:click="showThisSubNav('hot')">
              <i class="fa fa-file-text-o"></i>
              <span class="sidebar-title">热点管理</span>
              <span class="angle">
              <!--<i class="fa fa-angle-right"></i>-->
              <i v-bind:class="{fa: true, 'fa-angle-right': showSubNav !== 'hot', 'fa-angle-down': showSubNav === 'hot'}"></i>
            </span>
            </a>
            <transition name="popup">
              <ul class="sub-nav" v-if="showSubNav === 'hot'">
                <li :class="{actived: actived=== 'hot_add'}" @click="changeActived('hot_add')">
                  <router-link class="vue-a" to="/hot_add">
                    <i class="fa"></i>
                    <span class="sidebar-title">添加热点</span>
                  </router-link>
                </li>
                <li :class="{actived: actived=== 'hot_manage'}" @click="changeActived('hot_manage')">
                  <router-link class="vue-a" to="/hot_manage">
                    <i class="fa"></i>
                    <span class="sidebar-title">用户编辑</span>
                  </router-link>
                </li>
              </ul>
            </transition>
          </li>
          <li>
            <a href="javascript:void(0)" class="vue-a accordion-toggle" v-on:click="showThisSubNav('user_manage')">
              <i class="fa fa-group"></i>
              <span class="sidebar-title">用户管理</span>
              <span class="angle">
              <!--<i class="fa fa-angle-right"></i>-->
              <i v-bind:class="{fa: true, 'fa-angle-right': showSubNav !== 'user_manage', 'fa-angle-down': showSubNav === 'user_manage'}"></i>
            </span>
            </a>
            <transition name="popup">
              <ul class="sub-nav" v-if="showSubNav === 'user_manage'">
                <li :class="{actived: actived=== 'user_add'}" @click="changeActived('user_add')">
                  <router-link class="vue-a" to="/user_add">
                    <i class="fa"></i>
                    <span class="sidebar-title">添加用户</span>
                  </router-link>
                </li>
                <li :class="{actived: actived=== 'user_editor'}" @click="changeActived('user_editor')">
                  <router-link class="vue-a" to="/user_editor">
                    <i class="fa"></i>
                    <span class="sidebar-title">用户编辑</span>
                  </router-link>
                </li>
              </ul>
            </transition>
          </li>
          <li :class="{actived: actived=== 'message2'}" @click="changeActived('message2')">
            <router-link class="vue-a" to="/chart">
              <i class="fa fa-bar-chart"></i>
              <span class="sidebar-title">站点统计</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="sidebar-left-small" v-if="!showSideBar">
        <ul>
          <li>
            <span  @mouseenter="enter('message')" @mouseleave="leave">
              <i class="fa fa-envelope-open-o"></i>
            </span>
            <ul class="small-sub" v-if="activedSubNavName === 'message'">
              <li @mouseenter="enter('message')" @mouseleave="leave">
                <router-link class="vue-a" to="/">Message</router-link>
              </li>
              <li @mouseenter="enter('message')" @mouseleave="leave">
                <router-link class="vue-a" to="/">Test</router-link>
              </li>
              <li @mouseenter="enter('message')" @mouseleave="leave">
                <router-link class="vue-a" to="/">Score</router-link>
              </li>
            </ul>
          </li>
          <li>
            <span  @mouseenter="enter('message1')" @mouseleave="leave">
              <i class="fa fa-bar-chart"></i>
            </span>
            <ul class="small-sub" v-if="activedSubNavName === 'message1'">
              <li @mouseenter="enter('message1')" @mouseleave="leave">
                <router-link class="vue-a" to="/">Message</router-link>
              </li>
              <li @mouseenter="enter('message1')" @mouseleave="leave">
                <router-link class="vue-a" to="/">Test</router-link>
              </li>
              <li @mouseenter="enter('message1')" @mouseleave="leave">
                <router-link class="vue-a" to="/">Score</router-link>
              </li>
            </ul>
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
      showSubNav: 'menu1',
      activedSubNavName: '',
      actived: 'message'
    }
  },
  computed: mapState([
    'showSideBar'
  ]),
  methods: {
    showThisSubNav: function (menuName) {
      if (this.showSubNav === menuName) {
        this.showSubNav = ''
      } else {
        this.showSubNav = menuName
      }
    },
    ...mapMutations([
      'CHANGE_SIDEBAR'
    ]),
    enter: function (name) {
      this.activedSubNavName = name
    },
    leave: function () {
      this.activedSubNavName = ''
    },
    changeActived: function (activeName) {
      this.actived = activeName
    }
  }
}
</script>

<style scoped>
  @import "../css/sidebar_left.css";

  .popup-enter-active, .popup-leave-active {
    transition: popup-show 0s;
  }

  .popup-enter, .popup-leave-to /* .popup-leave-active below version 2.1.8 */
  {
    transition: popup-hide 0s;
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
