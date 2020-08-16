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
    <vue-particles-use
      :number="30"
      :area="700"
      color="#8400B5"
      shape="circle"
      :opacity="0"
      :speed="5"
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
  transition:1s;
}
// .slide-leave-active{
//   transition:1s;
// }
.slide-enter{
  opacity:0;
}
.slide-enter-to{
  opacity: 1;
}
.slide-leave{
  opacity:0;
}
.slide-leave-to{
  opacity:0;
}

.topview{
//  background-color: grey;
  height:90px;
  margin-top: 72px;
  position: relative;
  overflow: hidden;
  transition: .3s;
  &__title{
    display: block;
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%);
    font-size: 3.2rem;
    font-weight: bold;
    overflow: hidden;
  }
}
.router-link-top{
  height:calc(100vh - 72px);
}

</style>

