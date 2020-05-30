<template>
  <div class="home grid_12x12">
    <!--dev element-->
    <router-link tag="div" to="/dev" class="home__desk">
      <img  class="home__img" src="./../assets/desk.png" alt="my desktop pc here :)">
    </router-link>
    <div class="home__desk-popup home__desk-popup_1">
      <h1>My Projects !</h1>
    </div>
    <div class="home__desk-popup home__desk-popup_2">
      <h2 class="home__desk-popup_2-1">TIC </h2><h2 class="home__desk-popup_2-2">TIC </h2><h2 class="home__desk-popup_2-3">TIC</h2><h2>...</h2> 
    </div>
    <!--about element-->
    <router-link tag="div" to="/about" class="home__chair">
      <img class="home__img" src="./../assets/back-chair.png" alt="back of me">
    </router-link>
    <div class="home__chair-popup home__chair-popup">
      <h1>Who</h1><h1>am</h1><h1>I</h1><h1>?!</h1>
    </div>
    <!--yoyo element-->
    <router-link tag="div" to="/yoyo" class="home__yoyo">
      <img class="home__img" src="./../assets/yoyo-straight.png" alt="yoyo!">
    </router-link>
    <div class="home__yoyo-popup home__yoyo-popup_1">
      <img  src="./../assets/japan.png" alt="sound of shhhhh">
    </div>
    <div class="home__yoyo-popup home__yoyo-popup_2">
      <h2>YOYOING...</h2>
    </div>
    <!--contact element-->
    <router-link tag="div" to="/contact" class="home__contact">
      <img class="home__img" src="./../assets/contact.png" alt="typing on my mobile">
    </router-link>
    <div class="home__contact-popup home__contact-popup">
      <h1>Contact me.</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sounds: {
        typing: new Audio('http://www.emilwojcik.com/sounds/typing.wav'),
        iphone: new Audio('http://www.emilwojcik.com/sounds/iphone.mp3')
      }
    }
  },
  methods: {
    play(sound) {
      console.log('im over')
      sound.volume = .2;
      sound.play()
      
    },
    stop(sound) {
      sound.pause()
    }
  }
}
</script>
<style lang="scss">
  
</style>
