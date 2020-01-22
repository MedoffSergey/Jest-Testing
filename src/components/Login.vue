<template lang="html">
  <div class="v-authorization">
    <form class="v-authorization__form">

      <div class="group">
        <input type="text" placeholder="Кодовое слово" @click="onkeyup()" v-model="inputMessage">
        <a href="#" class="button" @click="chekInput(inputMessage)">
          Отправить
        </a>
      </div>

      <div class="v-authorization__form-alert" v-if="showDismissibleAlert">
        <span class="count">Кодовое слово не совпадает!</span>
      </div>

    </form>

  </div>
</template>

<script>

export default {
  name: 'Authorization',
  props: {
    msg: String,
    title: String
  },
  data() {
    return {
      secretKey: "test",  //  Ключевое слово
      inputMessage: '',        //  Сообщение Input
      showDismissibleAlert: false,


    }
  },
  methods: {
    chekInput() {
      if (this.inputMessage!=undefined && this.inputMessage===this.secretKey) {
        this.showMain = true,
        this.$router.push({
        name: 'Main',
      })
      }
      else {
        this.inputMessage = ''
        this.showDismissibleAlert = true
      }
    },
    onkeyup(){
      this.showDismissibleAlert = false
    },
    increment() {
      this.count+=5
    }
  }
}
</script>


<style lang="scss" scoped>

.v-authorization {
    margin-top: 60px;
    &__form{
      border: 1px solid #a8a8a8;
      padding: 20px 40px;
      border-radius: $radius;

      &-alert{
        box-sizing: border-box;
        padding: 16px 8px;
        width: 50%;
        margin: 0 auto;
        background-color: red;
        color: #fff;
        border-radius: $radius;
        margin-top: 5px;
      }
    }
}


.group {
      display: flex;
      margin: 0 auto;
      width: 50%;

      @media (max-width: $breakpoint_sm) {
        margin: 0px;
        display: inline-block;
        width: 100%;
      }

}
input {
    font-size: 16px;
    padding: 10px;
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid #ccc;

    &:focus {
      outline: none;
    }

    @media (max-width: $breakpoint_sm) {
      display: flex;
      width: 100%;
    }
}

.button {
    background-color: #fff;
    border: 2px solid $green-bg;
    color: black;
    padding: 12px 28px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: $radius;
    margin-left: 10px;
    &:hover {
        background-color: $green-bg-hover;
    }
}
</style>
