<template>
  <div class="television grid_10x10">
    <div class="television__antena television__antena-1"></div>
    <div class="television__antena television__antena-2"></div>
    <div class="television__screen-outer">
        <div class="television__screen-inner">
          <video :src="current" class="television__display" loop="true" autoplay="true" muted></video>
        </div>
    </div>
    <div class="television__console">
        <div @click="playVideo(video1, 500)" :class="{active: current == video1}" class="television__console-button">
          <h3>video 1</h3>
        </div>
        <div @click="playVideo(video2, 500)" :class="{active: current == video2}" class="television__console-button">
          <h3>video 2</h3>
        </div>
        <div @click="playVideo(video3, 500)" :class="{active: current == video3}" class="television__console-button">
          <h3>video 3</h3>
        </div>
        <div @click="playVideo(video4, 500)" :class="{active: current == video4}" class="television__console-button">
          <h3>video 4</h3>
        </div>
        <div class="television__console-controls">
          <input type="range" :value="volume" max="1" step="0.01"  class="television__console-controls_slider" id="myRange">
        </div>
        <div class="television__console-vent">
          <hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr>
        </div>
    </div>

    <div class="television__leg television__leg-1"></div>
    <div class="television__leg television__leg-2"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noise: "http://www.emilwojcik.com/video/noiseHD.mp4",
      video1: "http://www.emilwojcik.com/video/wat.mp4",
      video2: "http://www.emilwojcik.com/video/smashing.mp4",
      video3: "http://www.emilwojcik.com/video/quadro.mp4",
      video4: "http://www.emilwojcik.com/video/tokyo.mp4",
      current:'',
      volume: 0
    }
  },
  created() {
    this.playVideo(this.video1)
  },
  methods: {
    playVideo(video, timing = 1500){
      this.current = this.noise;
      setTimeout(() => {
        this.current = video;
      }, timing)
    }
  }
}
</script>

<style lang="scss" scoped>
  .active {
    background-color: $color-gray;
  }
</style>