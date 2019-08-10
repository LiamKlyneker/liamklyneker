<template>
  <header :class="`${showHeader ? 'active' : 'inactive'}`">
    <div>
      <router-link to="/"><img src="@assets/logo.svg" alt=""></router-link>
      <div :class="`hamburguer-icon ${showMobileMenu && 'active'}`" @click="handleToggleMobileMenu">
        <span />
        <span />
      </div>
      <div :class="`navigation ${showMobileMenu && 'active'}`">
        <router-link to="/"><span>Work</span></router-link>
        <router-link to="/experiments"><span>Experiments</span></router-link>
        <router-link to="/resume"><span>Resume</span></router-link>
        <a href="mailto:liamklyneker@gmail.com" target="_blank">Contact</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showHeader: true,
      showMobileMenu: false,
    }
  },

  methods: {
    handleToggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },

    handleToggleHeader(value) {
      this.showHeader = value;
    }
  },

  created() {
    this.$eventHub.$on('toggle-header', this.handleToggleHeader);
  }
}
</script>

<style lang="stylus" scoped>
@import 'styles'
</style>
