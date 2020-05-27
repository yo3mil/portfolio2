<template>
  <div class="home grid_12x12">
    <router-link tag="div" to="/dev" class="home__desk">
      <img class="home__img" src="./../assets/desk.png" alt="my desktop pc here :)">
    </router-link>
    <router-link tag="div" to="/about" class="home__chair">
      <img class="home__img" src="./../assets/back-chair.png" alt="back of me">
    </router-link>
    <router-link tag="div" to="/yoyo" class="home__yoyo">
      <img class="home__img" src="./../assets/yoyo-straight.png" alt="yoyo!">
    </router-link>
    <router-link tag="div" to="/contact" class="home__contact">
      <img class="home__img" src="./../assets/contact.png" alt="typing on my mobile">
    </router-link>
  </div>
</template>

<script>


export default {
  
}
</script>
<style lang="scss">
  
</style>
