<template>
  <div class="about__page">
    <div class="about__container">
      
      <div class="about__strength">
        <h2 class="about__strength-title">制作の特徴</h2>
        <p v-html="strength" class="about__strength-text"></p>
      </div>

      <div class="about__person">
        <h2 class="about__person-title">制作者について</h2>
        <div class="about__person-wrapper">
          <div class="about__person-img">
            <img v-show="!real" src="../assets/bubekiti_fake.png" alt="">
            <img v-show="real" src="../assets/bubekiti.jpg" alt="">
          </div>
          <div class="about__person-txtarea">
            <p v-html="person" class="about__person-text"></p>
          </div>
        </div>
      </div>

      <div class="about__profile">
        <h2 class="about__profile-title">プロフィール</h2>
        <table class="about__profile-table">
          <tr v-for="tableItem in tableItems" v-bind:key="tableItem.id">
            <td v-html="tableItem.item" class="table-item"></td>
            <td v-html="tableItem.value" class="table-value"></td>
          </tr>         
        </table>
      </div>

    </div>
    <Contact/>
  </div>
</template>



<script>

// var change = function(a){
//   setTimeout(function(){
//     a = true;
//     return a;
//   },1000)
// }


import Contact from '@/components/Contact.vue'

export default {
  name: 'About',
  components: {
    Contact,
  },
  data: function(){
    return {
      strength: "",
      person: "",
      tableItems: "",
      real: false,
    }
  },
  created: function(){
    this.fetchAbout();
    this.changeImageByDelay();
  },
  methods: {
    fetchAbout: function(){
      fetch('https://bubekiti.microcms.io/api/v1/about', {
      headers: {
        'X-API-KEY': process.env.VUE_APP_MICROCMS_GET
      },
    })
      .then(res => res.json())
      .then(json => {
        this.strength = json.strength;
        this.person = json.person;
        this.tableItems = json.profile;
      })
    }, 
    changeImageByDelay: function(){
      setTimeout(this.changeImage, 500);
    },
    changeImage: function(){
      this.real = true;
    }
  },
}
</script>



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

p{
  font-size: 1.6rem;
  line-height: 2.5rem;
}

h2{
  font-size: 20px;
  font-weight: bold;
}

.about{
  &__page{
    background-color: $grey-back;
    padding-top: 16px;
  }
  &__container{
    @include _container;
    max-width: 732px;
    background-color: white;
    position: relative;
    padding: 35px;
  }
  &__strength, &__person, &__profile{
    padding: 40px 0;
    border-bottom: 1px solid $grey-back;
    &-text{
      margin-left: 8px;
      margin-top: 16px;
    }
  }
  &__person{
    &-wrapper{
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
    }
    &-txtarea{
      width: 68%;
    }
    &-img{
      width: 30%;
      img{
        border-radius: 50%;
      }
    }
  }
  &__profile{
    border-bottom: none;
    &-table{
      font-size: 1.4rem;
      margin: 0 auto;
      margin-top: 32px;
      width: 80%;
      max-width: 545px;
      tr{
        height: 56px;
        line-height: 56px;
        border-bottom: 1px solid rgb(189, 189, 189);
      }
      .tabel-item{
        width: 30%;
      }
      .table-value{
        width: 70%;
      }
    }
  }
}


@media (max-width:650px){
  .about{
  &__container{
    @include _container;
    padding: 8px;
  }
  &__person{
    &-wrapper{
      display: block;
    }
    &-txtarea{
      width: 100%;
    }
    &-img{
      width: 70%;
      margin: 16px auto 24px;
    }
  }
  &__profile{
    border-bottom: none;
    &-table{
      width: 95%;
      tr{
        height: 45px;
        line-height: 45px;
      }
      .tabel-item{
        width: 25%;
      }
      .table-value{
        width: 75%;
      }
    }
  }
}
}


</style>
