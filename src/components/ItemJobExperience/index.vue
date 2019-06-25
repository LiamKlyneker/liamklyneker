<template>
  <div>
    <h3>{{itemData.company_name}}</h3>
    <p>{{itemData.role}}</p>
  </div>
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
