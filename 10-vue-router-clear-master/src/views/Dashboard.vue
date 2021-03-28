<template>
  <div class="card">
    <h1>{{ $i18n('app.hello') }}</h1>

    <p>{{ $i18n('app.info') }}</p>

    <router-link to="mail">{{ $i18n('app.toMail') }}</router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>