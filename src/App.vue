<template>
  <div id="app">
    <Home />
    <Project />
    <Blog />
  </div>
</template>

<script>
import Home from './components/Home.vue';
import Project from './components/Project.vue';
import Blog from './components/Blog.vue';

export default {
  name: 'App',
  components: {
    Home,
    Project,
    Blog
  }
}
</script>

<style lang="scss">
@import './assets/style.css';

#app {
  /* Ваши стили для #app */
}
</style>
