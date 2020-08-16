<template>
   <footer>
    <div class="footer__container">
      <ul class="footer__list">

        <li class="footer__item">
          <router-link class="footer__item-name" to="/">TOP</router-link>
        </li>

        <li class="footer__item">
          <router-link class="footer__item-name" to="/services">SERVICE</router-link>
          <ul class="footer__sub-list">
            <li v-for="service in services" v-bind:key="service.id" class="footer__sub-item">
              <router-link v-bind:to="{path: `/services/${service.id}`}">
                {{service.title}}
              </router-link>
            </li>
          </ul>
        </li>

        <li class="footer__item">
          <router-link class="footer__item-name" to="/works">WORKS</router-link>
          <ul class="footer__sub-list">
            <li class="footer__sub-item"><router-link to="/works">制作物一覧</router-link></li>
          </ul>
        </li>

        <li class="footer__item">
          <p class="footer__item-name">GUIDE</p>
          <ul class="footer__sub-list">
            <li class="footer__sub-item"><router-link to="/flow">制作の流れ</router-link></li>
            <li class="footer__sub-item">かんたんお見積もり</li>
            <li class="footer__sub-item"><router-link to="/qa">よくある質問</router-link></li>

          </ul>
        </li>

        <li class="footer__item">
          <p class="footer__item-name">OTHER</p>
          <ul class="footer__sub-list">
            <li class="footer__sub-item"><router-link to="/about">Bubekitiについて</router-link></li>
            <li class="footer__sub-item"><router-link to="/blogs">ブログ</router-link></li>
            <li class="footer__sub-item"><router-link to="/inquiry">お問い合わせ</router-link></li>
          </ul>
        </li>

      </ul>
      <p class="footer__copyright">©Copyright2020 Bubekiti Web creating.All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  components: {

  },
  data: function(){
    return {
      services: null
    }
  },
  created: function(){
    this.fetchServices();
  },
  methods: {
    fetchServices: function(){
      fetch('https://bubekiti.microcms.io/api/v1/news', {
        headers: {
          'X-API-KEY': process.env.VUE_APP_MICROCMS_GET
        },
      })
      .then(res => res.json())
      .then(json => json.contents)
      .then(services => {
        this.services = services;
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $blue:#64D5FF;
  $purple:#8400B5;
  $grey-back:#F4F4F4;
  $black-font:#333333;
  $grey-font:#A0A0A0;

  @import '../scss/mixin/container';

  footer{
  background-color: black;
  color:$grey-font;
}
.footer{
  &__container{
    @include _container;
    padding-top: 48px;
    padding-bottom: 48px;
  }
  &__list{
    display: flex;
    justify-content: space-between;
  }
  &__item{
    &-name{
      font-size: 26px;
      height:auto;
    }
  }
  &__sub-list{
    margin-top: 16px;
  }
  &__sub-item{
    font-size: 1.3rem;
    margin-bottom: 16px;
    &:hover{
      opacity:0.8;
    }
  }
  &__copyright{
    text-align: center;
    margin-top: 56px;
    font-size: 1.3rem;
  }
}
</style>
