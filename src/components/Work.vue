<template>
  <section class="works">
    <div class="works__bg"></div>
    <div class="works__img">
      <img src="../assets/works.png" alt="">
    </div>
    <div class="works__container">
      <h2 class="works__title">制作実績</h2>
      <div class="works__area">
        <ul class="works__list">

          <!-- 制作物一覧 -->
          <li v-for="work in works" v-bind:key="work.id" class="works__item">
            <router-link v-bind:to="{path: `/works/${work.id}`}">
              <div class="works__imgarea">
                <img v-bind:src="work.eyecatch.url" alt="">
              </div>
              <div class="works__txtarea">
                <p class="works__txt">{{work.title}}</p>
              </div>
            </router-link>
          </li>

        </ul>
      </div>
      <div class="works__btnarea">
        <router-link class="works__btn"  to="/works">制作の特徴</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Works',
  components: {

  },
  data: function(){
    return {
      works: null
    }
  },
  created: function(){
    this.fetchWorks();
  },
  methods: {
    fetchWorks: function(){
      fetch('https://bubekiti.microcms.io/api/v1/works', {
        headers: {
          'X-API-KEY': process.env.VUE_APP_MICROCMS_GET
        },
      })
      .then(res => res.json())
      .then(json => json.contents)
      .then(works => {
        this.works = works.slice(0, 2);
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


.works{
  margin-top: 160px;
  position: relative;
  padding-top: 40px;
  &__bg{
    position: absolute;
    top:0;
    right:0;
    z-index: -1;
    background-color: $grey-back;
    height:100%;
    //width:calc(1100px + (100vw - 1100px) /2);
    width: 70%;
  }
  &__img{
    width: 50vw;
    position: absolute;
    left:0;
    top: 50%;
    transform: translate(0, -50%);
  }
  &__container{
    @include _container;
  }
  &__title{
    @include _sectionTitle('WORKS');
    &:after{
      @include _title-bar;
    }
  }
  &__area{
    display: flex;
    justify-content: flex-end;
  }
  &__list{

  }
  &__item{
    width: 500px;
    height: 309px;
    margin-bottom: 40px;
    background-color: white;
    position: relative;
    transition: .3s;
    &:hover{
      opacity:0.9;
      top:-3px;
    }
  }
  &__imgarea{
    width: 100%;
    height: 279px;
    overflow: hidden;
  }
  &__txtarea{
    height: 30px;
  }
  &__txt{
    line-height: 30px;
    font-size: 1.6rem;
    text-align: center;
  }
  &__btnarea{
    text-align: right;
  }
  &__btn{
    text-align: center;
    @include _btn;
  }
}
</style>
