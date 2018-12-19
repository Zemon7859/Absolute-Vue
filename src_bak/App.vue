<template>
  <div id="main">
    <TopHeader></TopHeader>
    <SidebarLeft></SidebarLeft>
    <section id="content_wrapper">
      <router-view/>
    </section>
  </div>
</template>

<script>
import TopHeader from './components/TopHeader'
import SidebarLeft from './components/SidebarLeft'

export default {
  name: 'App',
  components: {
    TopHeader,
    SidebarLeft
  }
}
</script>

<style>
  @import "css/reset.css";
  @import "css/self_animate.css";

  #main {
    background: #eeeeee;
    min-height: 100%;
  }

  #content_wrapper {
    margin-left: 250px;
    padding-top: 60px;
    background: skyblue;
  }
</style>
