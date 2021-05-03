<template>
<div class="card">
  <h2>{{ $i18n('app.notFound') }}</h2>
  <router-link to='/login'>{{ $i18n('app.authorisation') }}</router-link>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias assumenda aut qui, quis tenetur totam ullam? Assumenda deserunt et nostrum placeat quo sunt temporibus ullam. Ad dignissimos non rerum?</p>
  <router-link to='/login'>
    <p> {{ $i18n('app.authorisation')}} </p>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'NotFound',
  data() {
    return {
      text1:'aaaaq' //$i18n('app.authorisation')
    }
  },
  computed: {
    text2(){
      return $i18n('app.authorisation')
    }
  }
}
</script>

<style scoped>

</style>