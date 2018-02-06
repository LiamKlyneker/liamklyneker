import Vue from 'vue'
import Router from 'vue-router'

import LkLandingPage from '@/components/LandingPage'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Landing',
			component: LkLandingPage
		}
	]
})
