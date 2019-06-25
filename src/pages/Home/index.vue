<template>
  <main class="main-body">
    <div class="i-am-who-i-am">
      <h1>Liam <br>Klyneker</h1>
      <h3>Product Designer</h3>
      <h3>Front End Engineer</h3>
      <h3>Creative Alchemist</h3>
    </div>
    <div>
      <article class="item-wrapper" v-for="work in featuredWorks" :key="work.name">
        <ItemWork :itemData="work" />
      </article>
    </div>
  </main>
</template>

<script>
import ItemWork from '@components/ItemWork'
import featuredWorks from '@common/featured-works.js'
export default {
  components: {
    ItemWork
  },

  data () {
    return {
      featuredWorks,
    }
  }
}
</script>

<style lang="stylus" scoped>
@import 'styles'
</style>
