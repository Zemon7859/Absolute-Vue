<template>
  <header class="navbar navbar-fixed-top navbar-shadow">
    <div class="navbar-branding">
      <a href="/" class="navbar-brand"><b>Absolute</b>Admin</a>
      <span id="toggle_sidemenu_l" class="fa fa-bars"></span>
    </div>
    <ul class="nav navbar-nav navbar-right">
      <li class="dropdown menu-merge">
        <a href="#" class="dropdown-toggle fw600 p15" data-toggle="dropdown">
          <img src="../assets/auth.jpg" alt="avatar" class="mw30 br64">
          <span class="hidden-xs pl15"> Michael .R </span>
          <span class="caret caret-tp hidden-xs"></span>
        </a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'top-header'
}
</script>

<style scoped>
  @import '../css/topheader.css';
  @import '../css/navbar.css';
</style>
