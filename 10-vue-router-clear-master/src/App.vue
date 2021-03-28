<template>
  <the-navbar :visible="isAuth"></the-navbar>
  <app-lang-selector
      v-model="langString"
  />
  <div class="container with-nav">
    <router-view
        :langVal="langString"
    ></router-view>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'
import AppLangSelector from './components/AppLangSelector'

export default {
  inject: ['changeI18N'],
  components: { TheNavbar, AppLangSelector },
  data () {
    return {
      langString: '',
      isAuth: false
    }
  },
  methods: {
    changeLang (opt) {
      this.langString = opt
      // console.log('this.langString', this.langString)
      this.langString = opt
      this.changeI18N(opt)
      this.$forceUpdate()
    },
    login () {
      console.log('login')
      this.isAuth = true
      // this.$router.push('/dashboard')
      if (this.$route.query.page) {
        this.$router.push(this.$route.query.page)
      } else {
        this.$router.push('/dashboard')
      }
    },
    logout () {
      console.log('logout')
      this.isAuth = false
      // this.$router.push('/login')
      this.$router.push({
                          path: '/login',
                          query: {
                            page: this.$route.path
                          }
                        })
    },
  },
  provide () {
    return {
      login: this.login,
      logout: this.logout,
      emails: [
        { id: 1, theme: 'Купил себе PlayStation 5' },
        { id: 2, theme: 'Выучил Vue Router' },
        { id: 3, theme: 'Хочу изучить весь Vue' },
        { id: 4, theme: 'А следующий блок про Vuex!' },
        { id: 5, theme: 'А что там на счет Vue Hooks?' }
      ]
    }
  }
}
</script>
<style>
</style>
