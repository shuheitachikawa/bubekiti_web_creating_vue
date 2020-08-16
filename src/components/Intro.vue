<template>
  <section class="intro">
    <div class="intro__bg"></div>
    <div class="intro__img">
      <img src="../assets/intro.png" alt="手軽に名刺替わりのホームページ制作">
    </div>
    <div class="intro__container">
      <h2 class="intro__title">手軽に持てるホームページ</h2>
      <div class="intro__exp">
        <ul class="intro__list">
          <li class="intro__item">仕事でホームページが必要になった</li>
          <li class="intro__item">ホームページを新しくしたい</li>
          <li class="intro__item">サーバー/ドメインの維持費を0円にしたい</li>
          <li class="intro__item">WordPressからヘッドレスCMSに移行したい</li>
        </ul>
        <p class="intro__txt">
          手軽に持ちたい方にも対応した、<br>
          ホームページを制作します。
        </p>
        <router-link class="intro__btn"  to="/about">制作の特徴</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Intro',
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


.intro{
  margin-top: 160px;
  position: relative;
  &__container{
    @include _container;
    padding-top: 40px;
  }
  &__title{
    font-size: 3.2rem;
    font-weight: bold;
    &:after{
      @include _title-bar;
    }
  }
  &__list{
    margin-top: 40px;
  }
  &__item{
    width: 500px;
    height: 65px;
    line-height: 65px;
    background-color: white;
    margin-bottom: 16px;
    border-radius: 33px;
    padding-left: 32px;
    font-size: 2rem;
    font-weight: bold;
  }
  &__txt{
    margin-top: 48px;
    font-size: 2.8rem;
    font-weight: bold;
  }
  &__btn{
    margin-top: 48px;
    @include _btn;
  }
  &__bg{
    position: absolute;
    top:0;
    z-index: -1;
    background-color: $grey-back;
    height: 100%;
    width: 70%;
  }
  &__img{
    width: 50vw;
    position: absolute;
    right:0;
    top: 50%;
    transform: translate(0, -50%);
  }
}
</style>
