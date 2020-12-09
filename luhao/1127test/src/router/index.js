import Vue from 'vue'
import Router from 'vue-router'
import MissionDetails from '@/components/MissionDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MissionDetails',
      component: MissionDetails
    }
  ]
})
