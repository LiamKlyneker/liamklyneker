import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@pages/Home'
import ResumePage from '@pages/Resume'
import WorkDetailPage from '@pages/WorkDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/resume',
      name: 'Resume',
      component: ResumePage
    },
    {
      path: '/work-detail/:id',
      name: 'WorkDetail',
      component: WorkDetailPage
    }
  ],
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
