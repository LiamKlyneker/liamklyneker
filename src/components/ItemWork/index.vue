<template>
  <a href="#" @click.prevent="goToWorkDetail">
    <div class="item-work" :style="{ backgroundColor: itemData.main_color }">
      <img :src="itemData.shoot_image" alt="work-image">
      <span>SEE DETAILS <i class="icon-arrow-right" /></span>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    itemData: Object,
  },

  methods: {
    goToWorkDetail() {
      const { itemData, $router } = this;
      if (itemData.outside_link) window.open(itemData.outside_link);
      else if (!itemData.outside_link) $router.push(`/work-detail/${itemData.id}`)
    }
  },
}
</script>

<style lang="stylus" scoped>
@import 'styles'
</style>
