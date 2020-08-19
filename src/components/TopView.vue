<template>
  <section class="topview" id="hoge" v-bind:class="{'router-link-top': $route.path === '/'}">
    <transition name="slide">
      <h1 v-if="$route.path === '/'" class="topview__title">{{$route.name}}</h1>
    </transition>
    <transition name="slide">
      <h1 v-if="$route.path === '/services'" class="topview__title">{{$route.name}}</h1>
    </transition>
    <transition name="slide">
      <h1 v-if="$route.path.indexOf('/services/') != -1" class="topview__title">{{$route.name}}</h1>
    </transition>
    <transition name="slide">
      <h1 v-if="$route.path === '/works'" class="topview__title">{{$route.name}}</h1>
    </transition>
    <transition name="slide">
      <h1 v-if="$route.path.indexOf('/works/') != -1" class="topview__title">{{$route.name}}</h1>
    </transition>
    <transition name="slide">
      <h1 v-if="$route.path === '/flow'" class="topview__title">{{$route.name}}</h1>
    </transition>
    <transition name="slide">
      <h1 v-if="$route.path === '/blogs'" class="topview__title">{{$route.name}}</h1>
    </transition>
    <transition name="slide">
      <h1 v-if="$route.path.indexOf('/blogs/') != -1" class="topview__title">{{$route.name}}</h1>
    </transition>
    <transition name="slide">
      <h1 v-if="$route.path === '/inquiry'" class="topview__title">{{$route.name}}</h1>
    </transition>
    <transition name="slide">
      <h1 v-if="$route.path === '/about'" class="topview__title">{{$route.name}}</h1>
    </transition>
    <transition name="slide">
      <h1 v-if="$route.path === '/qa'" class="topview__title">{{$route.name}}</h1>
    </transition>

    <div class="topview__img">
      <img src="../assets/intro.png" alt="手軽に名刺替わりのホームページ制作">
    </div>

    <vue-particles-use
      :number="30"
      :area="1000"
      color="#8400B5"
      shape="circle"
      :opacity="0"
      :speed="4"
      hoverMode="repulse"
      :distanse="100"
      clickMode="push"
      class="topview__area"
    >
    </vue-particles-use>
  </section>
</template>

<script>

</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.slide-enter-active{
  transition: .7s;
}
.slide-leave-active{
  transition: .7s;
}
.slide-enter{
  color:transparent;
  text-shadow: 0 0 8px rgba(0,0,0,0.5);
  opacity: 0;
}
.slide-enter-to{
  text-shadow: none;
}
.slide-leave{
  text-shadow: none;
}
.slide-leave-to{
  color:transparent;
  text-shadow: 0 0 8px rgba(0,0,0,0.5);
  opacity: 0;
}


.topview{
  //background-color: red;
  height:90px;
  margin-top: 72px;
  position: relative;
  overflow: hidden;
  transition: .3s;
  &__img{
    display: none;
  }
  &__title{
    width: 100%;
    text-align: center;
    position: absolute;
    top: 35%;
    //left:50%;
    //transform: translate(-50%, -50%);
    font-size: 3.2rem;
    overflow: hidden;
  }
  &__area{
    height: 100%;
    /deep/ #particles-js{
      height: 100vh;
    }
  }
}
.router-link-top{
  margin-top: 0;
  height:100vh;
  .topview__title{
    top:50%;
  }
}

@media (max-width:750px){
  .topview{
    margin-top: 127px;
    overflow: hidden;
  }
  .router-link-top{
    margin-top: 0;
    height:100vh;
    .topview{
      &__title{
        top:25%;
      }
      &__img{
        display: block;
        position: absolute;
        top:40%;
        left:10px;
        z-index: -1;
        opacity: .7;
      }
    }
  } 
}

@media (max-width:500px){
  .topview{
    margin-top: 100px;
    overflow: hidden;
  }
  .router-link-top{
    margin-top: 0;
    height:100vh;
  }
}

</style>

