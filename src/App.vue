<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: { }
}
</script>

<style lang="scss">
#app {
  font-family: 'Montserrat',sans-serif ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscsale;
  text-align: center;
  background-color: #fff;
  max-width: 1200px;
  margin: 0 auto;
};
</style>
