<template>
  <main class="main-detail-wrapper" :style="{ backgroundColor: featuredWorkData.main_color }">
    <header class="project-header">
      <div>
        <div>
          <router-link to="/" @click.native="showHeader"><i class="icon-arrow-left" /></router-link>
        </div>
        <figure>
          <img :src="featuredWorkData.logo" alt="project-logo">
        </figure>
      </div>
    </header>
    <section class="detail-wrapper">
      <div>
        <h2>{{this.featuredWorkData.name}}</h2>

        <div class="work-details-wrapper">
          <div class="work-detail">
            <article class="item-description item-description--inline">
              <p>_client</p>
              <p>{{this.featuredWorkData.client}}</p>
            </article>
            <article class="item-description item-description--inline">
              <p>_role</p>
              <p>{{this.featuredWorkData.role}}</p>
            </article>
            <article class="item-description item-description--inline">
              <p>_year</p>
              <p>{{this.featuredWorkData.year}}</p>
            </article>
          </div>
          <div class="work-description">
            <article class="item-description">
              <p>_overview</p>
              <p>{{this.featuredWorkData.overview}}</p>
            </article>
          </div>
        </div>
        
        <h3>_highlights</h3>
      </div>
      <section class="work-details-slides">
        <img v-for="slide in this.featuredWorkData.slides" :src="slide" alt="work-slide" :key="slide">
      </section>
      <div class="work-details-footer">
        <router-link to="/" @click.native="showHeader"><i class="icon-arrow-left" /> RETURN</router-link>
      </div>
    </section>
  </main>
</template>

<script>
import featuredWorks from '@common/featured-works.js';
export default {
  data() {
    return {
      featuredWorks,
      featuredWorkData: {},
      backgroundColor: '',
      showContent: false,
      showFunction: '',
    }
  },

  methods: {
    showHeader() {
      this.$eventHub.$emit('toggle-header', true);
    }
  },
  
  created() {
    const { featuredWorks, $route } = this;
    this.featuredWorkData = featuredWorks.find(work => work.id === $route.params.id);
    this.showFunction = setTimeout(() => {
      this.showContent = true;
    }, 2000);
  },

  mounted() {
    this.$eventHub.$emit('toggle-header', false);
  },

  destroyed() {
    clearTimeout(this.showFunction);
  },
}
</script>

<style lang="stylus" scoped>
@import 'styles'
</style>
