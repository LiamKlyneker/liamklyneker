import Vue from 'vue'
import Router from 'vue-router'

import LkLandingPage from '@/components/LandingPage'
import LkResumeAndSkillsPage from '@/components/ResumeAndSkillsPage'
import LkAboutPage from '@/components/AboutPage'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Landing',
			component: LkLandingPage
		},
		{
			path: '/resume-skills',
			name: 'ResumeAndSkills',
			component: LkResumeAndSkillsPage
		},
		{
			path: '/about',
			name: 'About',
			component: LkAboutPage
		}
	],
	mode: 'history',
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
})
