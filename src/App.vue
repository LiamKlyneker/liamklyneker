<template>
  <div id="app">
    <MainHeader />
    <router-view />
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from '@components/MainHeader'
import MainFooter from '@components/MainFooter'

export default {
  name: 'app',
  components: {
    MainHeader,
    MainFooter,
  }
}
</script>

<style lang="stylus">
@import '~@styles/default.styl'
</style>
