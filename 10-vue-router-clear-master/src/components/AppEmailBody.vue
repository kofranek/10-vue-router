<template>
  <div>
    <h2>{{ $i18n('app.mailTopic') }}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi, cumque ea laborum laudantium nostrum odio quis soluta sunt velit?</p>
    <button class="btn" @click="$router.push('/mail')">{{ $i18n('app.close') }}</button>
  </div>
</template>

<script>
export default {
  props: {
    mailID: String
  },
  inject:['emails']
}
</script>

<style scoped>

</style>