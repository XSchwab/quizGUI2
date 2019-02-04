<template>
  <div>
    <div class="page-wrap">
      <b-navbar toggleable type="light bg-faded">
        <div class="container">
          <b-nav-toggle target="nav_collapse"></b-nav-toggle>

          <b-link class="navbar-brand" to="#">
            <router-link :to="{ name: 'home'}" class="navbar-brand"></router-link>
          </b-link>

          <b-collapse is-nav id="nav_collapse">
            <b-nav is-nav-bar>
             <b-nav-item :to="{ name: 'home'}" exact class="m-2">Home</b-nav-item>
              <b-nav-item :to="{ name: 'Geometrie'}" exact class="m-2">Geometrie</b-nav-item>
              <b-nav-item :to="{ name: 'Web'}" class="m-2">Web</b-nav-item>

            </b-nav>
          </b-collapse>
        </div>
      </b-navbar>

      <div class="content container">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style>
#app {
  font-family: 'Gadugi', Verdana, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>