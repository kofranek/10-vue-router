<template>
  <header class="navbar" v-if="visible">
    <h3>GMail</h3>
    <ul class="navbar-menu">
      <li>
        <router-link to="/dashboard">{{ $i18n('app.main') }}</router-link>
      </li>
      <li>
<!--        <router-link to="/mail" >{{ $i18n('app.post') }}</router-link>-->
        <router-link to="/mail" custom v-slot="{navigate, href}">
          <a href="#" @click="navigate" :class="{
             active: $route.path.indexOf(href) !== -1
          }">
             {{ $i18n('app.post') }}
          </a>
        </router-link>
      </li>
      <li><a href="#" @click.prevent="logout">{{ $i18n('app.goOut') }}</a></li>
    </ul>
  </header>
</template>

<script>
export default {
  inject: ['logout'],
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  }
}
</script>
