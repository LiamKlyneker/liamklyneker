import Vue from 'vue'
import Router from 'vue-router'

import LkLandingPage from '@/components/LandingPage'
import LkAboutPage from '@/components/AboutPage'
import LkWorkPage from '@/components/WorkPage'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Landing',
			component: LkLandingPage
		},
		{
			path: '/work',
			name: 'Work',
			component: LkWorkPage
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
