import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TodayReport from '@/components/TodayReport'
import Projects from '@/components/Projects'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/today-report',
      name: 'TodayReport',
      component: TodayReport
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    }
  ]
})
