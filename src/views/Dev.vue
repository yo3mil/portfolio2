<template>
  <div class="dev grid_2x3">
      <div class="dev__projects">
        <h1 @click="changeTo(projectOne)" :class="{active: current === projectOne}">{{ projectOne.name }}</h1>
        <h1 @click="changeTo(projectTwo)" :class="{active: current === projectTwo}">{{ projectTwo.name }}</h1>
        <h1 @click="changeTo(minigame)" :class="{active: current === minigame}">Mini Game</h1>
        <h1 @click="changeTo(projectThree)" :class="{active: current === projectThree}">{{ projectThree.name }}</h1>
        <h1 @click="changeTo(projectFour)" :class="{active: current === projectFour}">{{ projectFour.name }}</h1>
        <h1 @click="changeTo(projectFive)" :class="{active: current === projectFive}">{{ projectFive.name }}</h1>
      </div>
      
        <div v-if="toggle" class="dev__description">
          <p>
            {{ current.description }} 
          </p>
        </div>
      
        <browser :video="current"></browser>

        <div class="dev__mobile">
          <div v-if="current.live != ''" class="dev__mobile-link shadow-all">
            <i class="ion-social-youtube"></i>
            <a :href="current.live">Live Preview</a>
          </div>
          <div v-if="current.git != ''" class="dev__mobile-link shadow-all">
            <i class="ion-social-github"></i>
            <a :href="current.git">GitHub</a>
          </div>
        </div>
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
        description: "Invoicing and product/customer management web app I made for Orientalmart.co.uk - UK’s top oriental food supplier. Lightweight, powerful and packed with useful features, it’s currently being used as their main wholesale invoicing tool.",
        video: "http://www.emilwojcik.com/video/invoicing.mp4",
        live: "https://www.youtube.com",
        git: "https://www.github.com"
      },
      projectTwo: {
        name: "City Break",
        description: "Little widget which compares the temperatures in capital cities around Europe with the current location of its user. Originally made with in vanilla, recently refactored with Vue.js - both versions of the code are available under the GitHub link.",
        video: "http://www.emilwojcik.com/video/citybreak.mp4",
        live: "www.emilwojcik.com/citybreak",
        git: "https://github.com/yo3mil/CityBreakVue"
      },
      projectThree: {
        name: "Old Portfolio",
        description: "Pretty much the first website I have ever created. Although buggy and far from perfect, it is great to look back and see creative transitions I have managed to pull with next to zero JavaScript involved. ",
        video: "http://www.emilwojcik.com/video/portfolio.mp4",
        live: "",
        git: "https://github.com/yo3mil/portfolio"
      },
      projectFour: {
        name: "Manda Yuen",
        description: "A portfolio website for UK based graphic designer. This very simple website was exactly what my client had expected from me. ",
        video: "http://www.emilwojcik.com/video/manda.mp4",
        live: "www.mandayuen.com",
        git: ""
      },
      projectFive: {
        name: "Other",
        description: " Nunc sit amet lobortis diam, sit amet semper orci. Duis tincidunt ex in erat ullamcorper, at elementum turpis consequat. Nunc lacinia aliquam mauris sit amet tempor. Etiam vehicula arcu non felis vulputate semper. Maecenas elementum tortor fermentum ligula convallis ullamcorper. Morbi varius ullamcorper rutrum",
        video: "http://www.emilwojcik.com/video/invoicer.mp4",
        live: "",
        git: "https://github.com/yo3mil/"
      },
      minigame: {
        video: true,
        description: "Press start to kill some zombies and save our planet from an apocalypse. Game made on “on a lap” as a single Vue component, pastable into every window posible. ",
        git: '',
        live: ''
      },
      toggle: true
      
    }
  },
  mounted() {
    this.toggle = false;
    this.current = {};
    // media query for animation
    let x = window.matchMedia("(max-width: 900px)");
    if(x.matches) {
      this.current = this.projectOne;
      this.toggle=true;
    } else {
      setTimeout(()=>{
        this.current = this.projectOne;
        this.toggle=true;
      }, 2000)
    }
    
  },
  methods: {
    changeTo(project) {
      this.current = project;
    }
  }
}
</script>

<style lang="scss" scoped>
  .active {
    color: $color-black;
    text-decoration: underline;
   transform: scale(1.3);
   margin-right: .4rem;
  }
</style>