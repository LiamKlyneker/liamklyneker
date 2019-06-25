<template>
  <main class="main-body">
    <h1>Resume</h1>
    <p class="p-disclaimer">I been working on the industry for over 5 years now (f### how time flies!), always learning new and exiting things to improve my craft, is needless to say that I didn't this on my own, in my path I had the honor to work with these companies.</p>
    
    <section class="items-list">
      <div v-for="job in jobsExperience" :key="job.company_name">
        <ItemJobExperience :itemData="job" />
      </div>
    </section>

    <h2>Skills</h2>
    <section class="skills-section-list">
      <div v-for="skill in skills" :key="skill.title">
        <SkillsSection :itemData="skill" />
      </div>
    </section>
  </main>
</template>

<script>
import ItemJobExperience from '@components/ItemJobExperience'
import SkillsSection from '@components/SkillsSection'
import jobsExperience from '@common/jobs-experience'
import skills from '@common/skills'
export default {
  components: {
    ItemJobExperience,
    SkillsSection,
  },

  data() {
    return {
      jobsExperience,
      skills,
    }
  }
}
</script>

<style lang="stylus" scoped>
@import 'styles'
</style>
