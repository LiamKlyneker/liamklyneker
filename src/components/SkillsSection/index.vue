<template>
  <section class="skill-list">
    <h3>{{itemData.title}}</h3>
    <ul>
      <li v-for="skill in itemData.list" :key="skill">{{skill}}</li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    itemData: Object,
  },
}
</script>

<style lang="stylus" scoped>
@import 'styles'
</style>
