<template>
  <div id="app" class="app grid_main">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <router-link tag="div" to="/" class="app__title">
      <h1>Emil</h1>
      <h1>WOjcik</h1>
      <transition name="fade">
      <div v-if="back" class="app__title-return">
        <i class="ion-arrow-return-left"></i>
        <h3>take me back</h3>
      </div>
      </transition>
    </router-link>
  </div>
</template>


<script>
  import "@/styles/ionicons.css"
  export default {
    data() {
      return {
        back: false
      }
    },
    watch: {
      $route: function() {
        if (this.$route.path === "/") {
          this.back = false;
        } else  {
          this.back = true;
        }
      }
    }
  }
</script>

<style lang="scss">
  
  body {
    font-size: 62.5%;
    color: $color-black;
    font-weight: 200;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
</style>
