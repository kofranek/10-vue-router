<template>
  <div class="card">
    <h2>{{ $i18n('app.forgotPasswort') }}</h2>

    <button class="btn" @click="goToLogin">{{ $i18n('app.backToLogin') }}</button>
    <button class="btn" @click="$router.push('/login')">{{ $i18n('app.backToLogin') }} 2</button>  </div>
</template>
<script>
export default {
  methods: {
    goToLogin () {
      this.$router.push('/login')
    }
  }
}

</script>