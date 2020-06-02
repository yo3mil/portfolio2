<template>
  <div class="browser">
      <div class="browser__bar">
          <h3>Explorer 1.1</h3>
          <!-- <div class="browser__bar-info">
              ?
          </div> -->
      </div>
      <div class="browser__console">
        <i class="ion-arrow-left-a"></i>
        <i class="ion-arrow-right-a"></i>
        <i class="ion-ios-home"></i>
        <div class="browser__console-input">
            <i class="ion-ios-world-outline"></i>
            <input type="text" placeholder="http://localhost:8080/" disabled>
        </div>
        <i class="ion-social-youtube"></i>
        <i class="ion-social-github"></i>
      </div>
      <div class="browser__window">
            <video v-if="typeof video.video === 'string'" :src="video.video" class="browser__display" loop="true" autoplay="true" muted></video>
            <game v-if="typeof video.video === 'boolean'"></game>
      </div>
  </div>
</template>

<script>
import "@/styles/ionicons.css"
import Game from "./Game.vue"
    export default {
        props: {
            video: {
                type: Object,
                required: true
            }
        },
        components: {
            Game
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="scss">

</style>