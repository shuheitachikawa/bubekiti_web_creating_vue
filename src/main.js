import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueParticlesUse from 'vue-particles-use'
import VueHead from 'vue-head'


Vue.config.productionTip = false

Vue.use(VueParticlesUse)
Vue.use(VueHead)

new Vue({
  router,
  store,
  render: h => h(App),
  head: {
    title: {
      inner: 'Bubekiti[ブベキチ] Web creating',
      separator: '|',
      complement: '神奈川県秦野市のWeb制作フリーランス'
    },
    meta: [
      { name: 'description', content: '神奈川県秦野市を拠点に活動しているWeb制作フリーランス(SOHO)です。神奈川・東京を中心にWeb制作業務(ホームページ制作 / HTMLコーディング / レスポンシブデザイン / CMS構築)を承っております。見やすいシンプルなデザインとモダンな開発技術を用いた制作で、クライアント様の要望にお応えします。' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,user-scalable=no' },
      { charset: 'utf-8' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Bubekiti Web creating | 神奈川県秦野市のWeb制作フリーランス' },
      { property: 'og:description', content: '神奈川県秦野市を拠点に活動しているWeb制作フリーランス(SOHO)です。神奈川・東京を中心にWeb制作業務(ホームページ制作 / HTMLコーディング / レスポンシブデザイン / CMS構築)を承っております。見やすいシンプルなデザインとモダンな開発技術を用いた制作で、クライアント様の要望にお応えします。' },
      { property: 'og:url', content: 'https://bubekiti.com' },
      { property: 'og:site_name', content: 'Bubekiti Web creating' },
      //{ property: 'og:image', content: '../src/assets/ogimage.jpg' },
      { property: 'fb:app_id', content: '591933487923354' },
      // { name: 'twitter:card', content: 'summary_large_image' },
      // { name: 'twitter:site', content: '@bubekiti' },
      // { name: 'twitter:domain', content: 'bubekiti.com' },
      // { name: 'twitter:title', content: 'Bubekiti Web creating | 神奈川県秦野市のWeb制作フリーランス' },
      // { name: 'twitter:description', content: '神奈川県秦野市を拠点に活動しているWeb制作フリーランス(SOHO)です。神奈川・東京を中心にWeb制作業務(ホームページ制作 / HTMLコーディング / レスポンシブデザイン / CMS構築)を承っております。見やすいシンプルなデザインとモダンな開発技術を用いた制作で、クライアント様の要望にお応えします。' },
      //{ property: 'twitter:image', content: '../src/assets/ogimage.jpg' },
      // ... 
    ],
    link: [
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.12.1/css/all.css' },

    ],
    // script: [
    //   { type: 'text/javascript', src: '外部jsファイル', async: true},
    //   // body内に挿入したい場合は「body: true」を入れましょう
    //   { type: 'text/javascript', src: '外部jsファイル', async: true, body: true},
    //   // ... 
    // ]
  },
}).$mount('#app')
