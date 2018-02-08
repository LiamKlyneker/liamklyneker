import Vue from 'vue'
import Router from 'vue-router'

import LkLandingPage from '@/components/LandingPage'
import LkMyWorkPage from '@/components/MyWorkPage'
import LkAboutMePage from '@/components/AboutMePage'
import LkContactMePage from '@/components/ContactMePage'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Landing',
			component: LkLandingPage
		},
		{
			path: '/my-work',
			name: 'MyWork',
			component: LkMyWorkPage
		},
		{
			path: '/about-me',
			name: 'AboutMe',
			component: LkAboutMePage
		},
		{
			path: '/contact-me',
			name: 'ContactMe',
			component: LkContactMePage
		}
	]
})
