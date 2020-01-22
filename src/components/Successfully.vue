<template lang="html">
  <div class="v-main">
    <form class="v-main__form">
      <img class="v-main__form-icons" src="https://image.flaticon.com/icons/svg/845/845646.svg" alt="" width="40px" height="40px">
      <p>Проверка пройдена </p>
    </form>
    <div class="v-main__form-come-back">
      <router-link class="v-main__form-link" to="/">Вернуться назад</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vMain',

}
</script>


<style lang="scss" scoped>
.v-main {
    margin-top: 60px;

}
.v-main__form {
    display: flex;
    justify-content: center;
    border: 1px solid #a8a8a8;
    padding: $padding*2 $padding*4;
    border-radius: $radius;
    background-color: #def3d3;

    &-icons {
        margin-right: 10px;
    }

    &-link {
        font-size: 20px;
        font-weight: 400;
        letter-spacing: 0.5px;
        padding: 0 $padding*2;
        text-decoration: none;
        color: blue;
        margin: 20px;
    }
    &-come-back {
        margin: 20px;
    }
}
</style>
