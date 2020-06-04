<template>
  <div id="app" class="app grid_main">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
   
      <!-- <router-link v-if="intro" tag="div" to="/home" class="app__intro">
        <h1>ENTER</h1>
      </router-link> -->
     
      <router-link tag="div" to="/home" class="app__title">
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
        //intro: true
        back: false
      }
    },
    watch: {
      $route: function() {
        if (this.$route.path === "/home") {
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
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
</style>
