<template lang="html">
  <div class="nav">
    <router-link class="nav-link" to="/login">Log In</router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

.nav{
  margin: 60px auto;
  &-link{
    margin: 0 15px;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.5px;
    padding: 0px 20px;
    text-decoration: none;
    color: blue;
    border: 1px solid blue;
    border-radius: $radius;
    &:hover{
      background-color : #c9c9ff;
    }
  }
}

</style>
