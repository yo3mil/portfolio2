<template>
  <div class="home grid_12x12">

    <!--dev element-->
    <transition name="slide-left-right">
      <div @click="move('/dev')" v-show="animation" class="home__desk" >
        <img class="home__img shadow" src="./../assets/desk.png" alt="my desktop pc here :)">
      </div>
    </transition>
    <div v-show="animation" class="home__desk-popup home__desk-popup_1">
      <h1>My Projects !</h1>
    </div>
    <div v-show="animation" class="home__desk-popup home__desk-popup_2">
      <h2 class="home__desk-popup_2-1">TIC </h2><h2 class="home__desk-popup_2-2">TIC </h2><h2 class="home__desk-popup_2-3">TIC</h2><h2>...</h2> 
    </div>

    <!--about element-->
    <transition name="slide-down-top">
      <div @click="move('/about')" v-show="animation" class="home__chair">
        <img  class="home__img shadow" src="./../assets/back-chair.png" alt="back of me">
      </div>
    </transition>
    <div v-show="animation" class="home__chair-popup home__chair-popup">
      <h1>Who</h1><h1>am</h1><h1>I</h1><h1>?!</h1>
    </div>

    <!--yoyo element-->
    <transition name="slide-top-down">
      <div v-show="animation" @click="move('/yoyo')" class="home__yoyo shadow" >
        <img class="home__img" src="./../assets/bigyoyo-noframe.png" alt="yoyo!">
      </div>
    </transition>
    <div v-show="animation" class="home__yoyo-popup home__yoyo-popup_1">
      <img  src="./../assets/japan.png" alt="sound of shhhhh">
    </div>
    <div v-show="animation" class="home__yoyo-popup home__yoyo-popup_2">
      <h2>YOYOING...</h2>
    </div>
  
    <!--contact element-->
    <transition name="slide-right-left">
      <div @click="move('/contact')" v-show="animation" class="home__contact">
        <img class="home__img shadow" src="./../assets/contact.png" alt="typing on my mobile">
      </div>
    </transition>
    <div v-show="animation" class="home__contact-popup home__contact-popup">
      <h1>Contact me.</h1>
    </div>

    <!-- Three -->
    <!-- <transition name="slide-right-left">
      <div @click="move('/3d')" v-show="animation" class="home__three">
       <h1>Little secret...</h1> 
      </div>
    </transition> -->
    

    <div class="home__mobile">
      <h1>Emil</h1>
      <h1>WOjcik</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animation: false
    }
  },
  mounted() {
    this.animation = true;
  },
  methods: {
    move(where) {
      this.animation = false;
      setTimeout(() => {
        this.$router.push({path: where})
      }, 500)
    }
  }
}
</script>


