import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Blogs from '../views/Blogs.vue'
import BlogDetail from '../views/BlogDetail.vue'
import ServiceDetail from '../views/ServiceDetail.vue'
import Works from '../views/Works.vue'
import WorkDetail from '../views/WorkDetail.vue'
import Flow from '../views/Flow.vue'
import Inquiry from '../views/Inquiry.vue'
import Qa from '../views/qa.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: '秦野のホームページ屋',
    component: Home
  },
  {
    path: '/services',
    name: 'SERVICE',
    component: Services
  },
  {
    path: '/services/:serviceId',
    name: 'SERVICE',
    component: ServiceDetail
  },
  {
    path: '/works',
    name: 'WORKS',
    component: Works
  },
  {
    path: '/works/:workId',
    name: 'WORK',
    component: WorkDetail
  },
  {
    path: '/flow',
    name: 'FLOW',
    component: Flow
  },
  {
    path: '/blogs',
    name: 'BLOGS',
    component: Blogs
  },
  {
    path: '/blogs/:articleId',
    name: 'BLOG',
    component: BlogDetail,
  },
  {
    path: '/inquiry',
    name: 'CONTACT',
    component: Inquiry
  },
  {
    path: '/qa',
    name: 'Q & A',
    component: Qa
  },
   {
    path: '/about',
    name: 'Bubekiti Web creating',
    component: About
  },
]





const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
       return savedPosition
    } else {
       return { x: 0, y: 0 }
    }
  }
})

export default router
