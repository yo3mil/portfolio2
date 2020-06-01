<template>
  <div class="dev grid_2x3">
      <div class="dev__projects">
        <h1 @click="changeTo(projectOne)" :class="{active: current === projectOne}">{{ projectOne.name }}</h1>
        <h1 @click="changeTo(projectTwo)" :class="{active: current === projectTwo}">{{ projectTwo.name }}</h1>
        <h1>Mini Game</h1>
        <h1 @click="changeTo(projectThree)" :class="{active: current === projectThree}">{{ projectThree.name }}</h1>
        <h1 @click="changeTo(projectFour)" :class="{active: current === projectFour}">{{ projectFour.name }}</h1>
        <h1 @click="changeTo(projectFive)" :class="{active: current === projectFive}">{{ projectFive.name }}</h1>
      </div>
      <div class="dev__description">
        <transition name="fade">

          <p v-if="toggle">
          {{ current.description }} 
          </p>
        </transition>
      </div>
        <browser :video="current"></browser>
  </div>
</template>

<script>
import Browser from "@/components/Browser.vue";

export default {
  components: {
    Browser
  },
  data() {
    return {
      current: {},
      projectOne: {
        name: "Invoicer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet lobortis diam, sit amet semper orci. Duis tincidunt ex in erat ullamcorper, at elementum turpis consequat. Nunc lacinia aliquam mauris sit amet tempor. Etiam vehicula arcu non felis vulputate semper. Maecenas elementum tortor fermentum ligula convallis",
        video: "http://www.emilwojcik.com/video/invoicing.mp4",
        live: "www.youtube.com",
        git: "www.github.com"
      },
      projectTwo: {
        name: "City Break",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet lobortis diam, sit amet semper orci. Duis tincidunt ex in erat ullamcorper, at elementum turpis consequat. Nunc lacinia aliquam mauris sit amet tempor. Etiam vehicula arcu non felis vulputate semper. Maecenas elementum tortor fermentum ligula convallis ullamcorper. Morbi varius ullamcorper rutrum.",
        video: "http://www.emilwojcik.com/video/citybreak.mp4",
        live: "www.emilwojcik.com/citybreak",
        git: "https://github.com/yo3mil/CityBreakVue"
      },
      projectThree: {
        name: "Old Portfolio",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet lobortis diam, sit amet semper orci. Duis tincidunt ex in erat ullamcorper, at elementum turpis consequat. Nunc lacinia aliquam mauris sit amet tempor. Etiam vehicula arcu non felis vulputate semper. Maecenas elementum tortor fermentum ligula convallis ullamcorper. Morbi varius ullamcorper rutrum.",
        video: "http://www.emilwojcik.com/video/portfolio.mp4",
        live: "",
        git: "https://github.com/yo3mil/portfolio"
      },
      projectFour: {
        name: "Manda Yuen",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet lobortis diam, sit amet semper orci. Duis tincidunt ex in erat ullamcorper, at elementum turpis consequat. Nunc lacinia aliquam mauris sit amet tempor. Etiam vehicula arcu non felis vulputate semper. Maecenas elementum tortor fermentum ligula convallis ullamcorper. Morbi varius ullamcorper rutrum.",
        video: "http://www.emilwojcik.com/video/manda.mp4",
        live: "www.mandayuen.com",
        git: ""
      },
      projectFive: {
        name: "Other",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet lobortis diam, sit amet semper orci. Duis tincidunt ex in erat ullamcorper, at elementum turpis consequat. Nunc lacinia aliquam mauris sit amet tempor. Etiam vehicula arcu non felis vulputate semper. Maecenas elementum tortor fermentum ligula convallis ullamcorper. Morbi varius ullamcorper rutrum",
        video: "http://www.emilwojcik.com/video/invoicer.mp4",
        live: "",
        git: "https://github.com/yo3mil/"
      },
      minigame: true,
      toggle: true
      
    }
  },
  mounted() {
    setTimeout(()=>{
      this.current = this.projectOne;
    }, 100)
    
  },
  methods: {
    changeTo(project) {
      this.toggle = false;
      setTimeout(()=>{
        this.current = project;
        this.toggle = true;
      }, 1000)
      
    }
  }
}
</script>

<style lang="scss">
  .active {
    color: $color-black;
    text-decoration: underline;
  }
</style>