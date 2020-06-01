<template>
  <div id="app" class="app grid_main">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <router-link tag="div" to="/" class="app__title">
      <h1>Emil</h1>
      <h1>WOjcik</h1>
    </router-link>
  </div>
</template>

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
