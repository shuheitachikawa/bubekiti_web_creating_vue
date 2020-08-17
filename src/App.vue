<template>
  <div id="app">
    <Header/>
    <TopView/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import TopView from './components/TopView.vue'
  import Footer from './components/Footer.vue'

  export default {
    components: {
      Header,
      TopView,
      Footer
    }
  }
</script>


<style lang="scss">

  $black-font:#333333;

  //base
  @import './scss/base/reset';

  html{
    font-size: 10px;
    color:$black-font;
    font-family: Noto, "Hiragino Sans", Helvetica, Arial, sans-serif;
  }

  p{
    letter-spacing: .1rem;
  }

  a{
    display:inline-block;
    height:100%;
    width:100%;
    transition: .3s;
  }

  img{
    width:100%;
    height:auto;
  }

  #app {

  }

  @media (max-width:1000px){
    html{
    font-size: 8px;
    }
  }


</style>
