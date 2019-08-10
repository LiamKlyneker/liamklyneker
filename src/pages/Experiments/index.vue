<template>
  <main class="main-body">
    <p class="main-statement">Some of the experiments that I've been exploring.</p>
    <div>
      <article class="item-wrapper" v-for="work in featuredWorks" :key="work.name">
        <ItemWork v-if="work.type === 'experiment'" :itemData="work" />
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
