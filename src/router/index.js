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
    name: 'サービス一覧',
    component: Services
  },
  {
    path: '/services/:serviceId',
    name: 'サービス',
    component: ServiceDetail
  },
  {
    path: '/works',
    name: '制作実績一覧',
    component: Works
  },
  {
    path: '/works/:workId',
    name: '制作実績',
    component: WorkDetail
  },
  {
    path: '/flow',
    name: '制作の流れ',
    component: Flow
  },
  {
    path: '/blogs',
    name: 'ブログ一覧',
    component: Blogs
  },
  {
    path: '/blogs/:articleId',
    name: 'ブログ記事',
    component: BlogDetail,
  },
  {
    path: '/inquiry',
    name: 'お問い合わせ',
    component: Inquiry
  },
  {
    path: '/qa',
    name: 'よくある質問',
    component: Qa
  },
   {
    path: '/about',
    name: 'Bubekiti Web creatingについて',
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
