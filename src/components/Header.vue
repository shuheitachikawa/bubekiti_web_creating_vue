<template>
   <header>
      <div class="header__container">
        <router-link class="header__title" to="/"><img src="../assets/title.png" alt=""></router-link>
        <nav class="header__menu" id="nav">
          <ul class="header__menu--list">
            <li class="header__menu--item" exact><router-link to="/services">サービス</router-link></li>
            <li class="header__menu--item" exact><router-link to="/works">制作実績</router-link></li>
            <li class="header__menu--item" exact><router-link to="/flow">制作の流れ</router-link></li>
            <li class="header__menu--item" exact><router-link to="/blogs">ブログ</router-link></li>
            <li class="header__menu--item" exact><router-link to="/inquiry">お問い合わせ</router-link></li>
          </ul>
        </nav>
      </div>
    </header>
</template>

<script>
// export default {
//   name: 'Header',
//   props: {
//     msg: String
//   }
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $blue:#64D5FF;
  $purple:#8400B5;
  $grey-back:#F4F4F4;
  $black-font:#333333;
  $grey-font:#A0A0A0;

  @import '../scss/mixin/container';

  header{
    height:72px;
    background-color: $grey-back;
    width:100%;
    position: fixed;
    top:0;
    z-index: 9999;
    opacity:0.8;
  }
  .header{
    &__container{
      @include _container;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__title{
      width:160px;
      display: flex;
      align-items: center;
    }
    &__menu{
      ul{
        width:465px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      li{
        font-size: 1.6rem;
        font-weight: bold;
        & > a{
          display:inline;
        }
        &:after{
          display: inline-block;
          content:'';
          height:20px;
          width:1px;
          background-color:$grey-font;
          position: relative;
          left:15px;
          top:5px;
          transform: rotate(20deg);
        }
        &:last-child{
          position: relative;
          top:3px;
        }
        &:last-child:after{
          display: none;
        }
      }
    }
  }
  a.router-link-active{
    font-size: 1.8rem;
    color: #000;
  }
</style>
