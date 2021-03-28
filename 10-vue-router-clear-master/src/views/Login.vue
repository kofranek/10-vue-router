<template>
  <form class="card" @submit.prevent="submit">
    <h2>{{ $i18n('app.title') }}</h2>
    <div class="form-control">
      <label for="email">Email</label>
      <input type="text" id="email" v-model.trim="email">
    </div>

    <div class="form-control">
      <label for="password">{{ $i18n('app.password') }}</label>
      <input type="password" id="password" v-model="password">
    </div>

    <button class="btn primary" type="submit">{{ $i18n('app.enter') }}</button>
    <router-link to="/forget" v-slot="{ navigate }">
      <button class="btn warning" @click="navigate">{{ $i18n('app.forgot') }}</button>

    </router-link>

    <!--    <a href="/forget">{{ $i18n('app.forgot') }}</a>-->
    <router-link to="/forget">{{ $i18n('app.forgot') }}</router-link>
  </form>
</template>

<script>
// při volání je nutno <login:langVal="langString"/>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    isValid () {
      return this.email !== '' && this.password !== ''
    }
  },
  inject: ['login'],

  methods: {
    submit () {
      if (this.isValid) {
        // this.$router.push('/dashboard')     //zacovává historii
        //this.$router.replace('/dashboard')      //nezachovává historii
        this.login()
      }
    }
  },
}
</script>

<style scoped>

</style>