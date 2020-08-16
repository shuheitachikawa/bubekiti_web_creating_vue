<template>
  <section class="service">
    <div class="service__container">
      <h2 class="service__title">サービス</h2>
      <ul class="service__list">

        <!-- 記事アイコン -->
        <li v-for="service in services" v-bind:key="service.id" class="service__item">
          <router-link v-bind:to="{path: `/services/${service.id}`}">
            <div class="service__img">
              <img v-bind:src="service.eyecatch.url" alt="">
            </div>
            <div class="service__txtarea">
              <p class="service__txt">{{service.title}}</p>
            </div>
          </router-link>
        </li>

      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Service',
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
//mixin
@import '../scss/mixin/container';
@import '../scss/mixin/title-bar';
@import '../scss/mixin/btn';
@import '../scss/mixin/sectionTitle';
@import '../scss/mixin/contactBtn';


$blue:#64D5FF;
$purple:#8400B5;
$grey-back:#F4F4F4;
$black-font:#333333;
$grey-font:#A0A0A0;


.service{
  margin-top: 160px;
  &__container{
    @include _container;
    text-align: center;
  }
  &__title{
    display: inline-block;
    text-align: center;
    @include _sectionTitle('SERVICE');
    &:after{
      @include _title-bar;
      position: relative;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
  &__list{
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &__item{
    width:500px;
    height: 309px;
    margin-bottom: 40px;
    //box-shadow: 1px 1px 2px #9c9c9c;
    border-bottom: 1px solid $grey-back;
    border-right: 1px solid $grey-back;
    transition: .3s;
    position: relative;
    &:hover{
      border: none;
      top:-3px;
    }
  }
  &__img{
    height:277px;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
  &__txt{
    font-size: 2rem;
    line-height: calc(309px - 277px);
  }
  &__item:nth-child(n + 3){
    width:350px;
    height:216px;
    position: relative;
    .service__img{
      height:100%;
    }
    .service__txtarea{
      position: absolute;
      bottom:0;
      left:50%;
      transform: translate(-50%, 0);
      width: 100%;
      text-align: center;
    }
    .service__txt{
      font-size: 1.6rem;
    }
    &:hover{
      &:before{
        border-bottom: 0px solid rgba(255,255,255,0.8);
        border-right: 0px solid rgba(255,255,255,0.8);
        border-left: 350px solid transparent;
        border-top: 216px solid transparent;
      }
    }
    &:before{
      pointer-events: none;
      position: absolute;
      top:0;
      left:0;
      content:'';
      height: 0px;
      width: 0px;
      border-bottom: 108px solid rgba(255,255,255,0.8);
      border-right: 175px solid rgba(255,255,255,0.8);
      border-left: 175px solid transparent;
      border-top: 108px solid transparent;
      transition: .3s;
    }
  }
}
</style>
