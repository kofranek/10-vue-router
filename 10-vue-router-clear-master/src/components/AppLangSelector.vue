<template>
  <div class="flag" >
    <img src="../../public/cz.png" @click="changeLang('cz')">
    <img src="../../public/gb.png" @click="changeLang('en')">
    <img src="../../public/ru.jpg" @click="changeLang('ru')">
    <br>
    <button class="btn" @click="changeLang('en')">{{ $i18n('app.en') }}</button>
    <button class="btn" @click="changeLang('ru')">{{ $i18n('app.ru') }}</button>
    <button class="btn" @click="changeLang('cz')">{{ $i18n('app.cz') }}</button>
    <br>
  </div>

</template>

<script>
export default {
  inject: ['changeI18N'],
  name: 'AppLangSelector',
  props: {
    modelValue: String
  },
  data () {
    return {
    }
  },
  methods: {
    changeLang (opt) {
      console.log('AppVueSelector: change lang',opt)
      this.changeI18N(opt)
      this.$forceUpdate()
      //this.$emit('newLanguage',opt)
      this.$emit('update:modelValue',opt )
    }
  }
}
</script>

<style scoped>
.flag {
  display: flex;
  justify-content: flex-end;
}

.flag img {
  width: 30px;
  height: auto;
  border-radius: 50%;
}
</style>