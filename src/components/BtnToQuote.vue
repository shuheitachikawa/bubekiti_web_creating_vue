<template>
  <div>
    <!-- <router-link to="/quote"> -->
      <div class="quote__btn">
        <p class="quote__txt">簡単お見積もり<br>(30秒)</p>
      </div>
    <!-- </router-link> -->
  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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

.quote{
  &__btn{
    height: 160px;
    width: 160px;
    border-radius: 50%;
    background:  linear-gradient(to right,$blue,$purple);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__txt{
    color:white;
    font-size: 1.7rem;
    line-height: 2.5rem;
    font-weight: bold;
    text-align: center;
  }
}



</style>
