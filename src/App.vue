<template>
  <div id="main">
    <TopHeader></TopHeader>
    <SidebarLeft></SidebarLeft>
    <section id="content-wrap" v-bind:class="{'full': !showSideBar, 'unfull': showSideBar}">
      <router-view/>
    </section>
  </div>
</template>

<script>
import TopHeader from './components/TopHeader'
import SidebarLeft from './components/SidebarLeft'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    TopHeader,
    SidebarLeft
  },
  computed: mapState([
    'showSideBar'
  ])
}
</script>

<style>
@import "css/reset.css";
#content-wrap {
  padding: 80px 20px 20px;
}
section.full {
  animation: full .5s;
  animation-fill-mode: forwards;
}

section.unfull {
  animation: unfull .5s;
  animation-fill-mode: forwards;
}

@keyframes full {
  0% {
    margin-left: 250px;
  }
  100% {
    margin-left: 60px;
  }
}

@keyframes unfull {
  0% {
    margin-left: 60px;
  }
  100% {
    margin-left: 250px;
  }
}
</style>
