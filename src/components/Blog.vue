<template>
  <section class="blogs">
    <div class="blogs__container">
      <h2 class="blogs__title">Webの知識を配信中！</h2>
      <BlogCards/>
      <div class="blogs__btnarea">
        <router-link class="detail-btn blogs__btn" to="/blogs">記事一覧へ</router-link>
      </div>
    </div>
  </section>
</template>

<script>

 import BlogCards from './BlogCards.vue'

  export default {
    name: 'Blog',
    components: {
     BlogCards
    }
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


.blogs{
  margin-top: 100px;
  background-color: $grey-back;
  padding-top: 40px;
  &__container{
    @include _container;
  }
  &__title{
    @include _sectionTitle('BLOG');
    margin-bottom: 80px;
    &:before{
      display: inline-block;
      margin-right: 16px;
      margin-bottom: 0px;
    }
    &:after{
      @include _title-bar;
    }
  }

  &__btnarea{
    text-align: center;
  }
  &__btn{
    @include _btn;
    margin: 40px 0 80px;
  }
}

@media (max-width:750px){
  .blogs{
    &__container{
      text-align: center;
    }
    &__title{
      &:after{
        position: relative;
        left: 50%;
        transform: translate(-50%, 0);
        width:50vw;
      }
    }
    /deep/ &__item{
      margin: 0 auto 32px;
      width: calc(100vw * 0.8);
      height: calc(100vw * 0.8 / 1.4);
      text-align: left;
    }
    /deep/ &__img{
      height: 80%;
    }
    &__btnarea{
      margin-top: 32px;
      text-align: center;
    }
    &__btn{
      margin-top: 0;
    }
  }
}


</style>
