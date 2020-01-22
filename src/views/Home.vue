<template>
  <div class="home">
    <Authorization msg="Авторизация" title="Пройдите проверку..."/>
  </div>
</template>

<script>
// @ is an alias to /src
import Authorization from '@/components/Authorization.vue'

export default {
  name: 'home',
  components: {
    Authorization
  }
}
</script>
