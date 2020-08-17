<template>
  <section class="guide">
    <div class="guide__container--color">
      <h2 class="guide__title">ご利用の手引き</h2>
      <div class="guide__list">
        <div class="guide__item"><router-link to="/flow">制作の流れ</router-link></div>
        <div class="guide__item"><router-link to="/calc">簡単見積もり</router-link></div>
        <div class="guide__item"><router-link to="/qa">よくある質問</router-link></div>
      </div>
    </div>
    <div class="guide__container--white">
      <router-link class="contact-btn guide__btn" to="/inquiry">お問い合わせ</router-link>
    </div>
  </section>
</template>

<script>
// export default {
//   name: 'Works',
// }
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


.guide{
  margin-top: 160px;
  text-align: center;
  &__container--color{
    height: 260px;
    background:  linear-gradient(to right,$blue,$purple);
    padding-top: 40px;
    position: relative;
  }
  &__title{
    color:white;
    @include _sectionTitle('GUIDE');
  }
  &__list{
    position: absolute;
    left:50%;
    top:70%;
    transform: translate(-50%, 0);
    display: inline-block;
    //margin-top: 40px;
    width: 90%;
    max-width: 544px;
    display: flex;
    justify-content: space-between;
  }
  &__item{
    display: block;
    width: 32%;
    max-width: 173px;
    border-radius: 50%;
    background-color: $grey-back;
    border: 10px white solid;
    font-size: 2rem;
    font-weight: bold;
    position: relative;
    a{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -10%);
    }
    &:before{
      content:"";
      display: block;
      padding-top: 100%;
    }
  }
  .contact-btn{
    margin-top: 160px;
    @include _contactBtn(56px, 240px);
  }
}

@media (max-width:500px){
  .guide{
    &__container--color{
      height: 200px;
    }
    &__item{
      a{
        font-size: 13px;
      }
    }
    .contact-btn{
    margin-top: 25vw;
    }
  }
}

</style>
