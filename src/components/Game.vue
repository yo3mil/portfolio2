<template>
  <div class="game" id="game">
    
    <div class="game__console" v-if="!gameActive && !endGame.visible">
      <h1 class="game__console-title">Zombie Attack!</h1>
      <button class="game__btn game__btn-start" @click="init()">Start</button></div>
    <div class="game__canvas"></div>
    <div class="game__console game__console-endgame" v-if="endGame.visible">
      <h3>{{ endGame.msg }}</h3>
      <p>Lvl: {{ stage }}</p>
      <p>Score: {{ score }}</p>
      <button class="game__btn game__btn-start" @click="init()">Again!</button></div>
    <div class="game__canvas"></div>
    
    <div v-if="gameActive" class="game__timer"><div :style="{ width: `${gameTimer}%` }" class="game__timer-bar"></div></div>
    <!---------------------------------------------------------------------->
    <!-- Game INFO-->
    <div v-if="gameActive" class="game__info">
      <div  class="game__info-score">Score: {{ score }}</div>
      <div  class="game__info-stage">lvl: {{ stage }}</div>
    </div>
    <!---------------------------------------------------------------------->
    <!-- PERSON 1-->
    <div class="game__person" 
          v-if="person[0].visible"     
          v-bind:style="{ top: person[0].top, left: person[0].left , animationDuration: `${spawn}ms` }"
          @click="hit(0)"
      >
      <img class="game__person-police" src="./../assets/game/police.png" alt="person">
      <img v-if="person[0].splash" class="game__person-splash" src="./../assets/game/greensplash.png" alt="splash">
    </div>
    <!---------------------------------------------------------------------->
    <!-- PERSON 2-->
    <div class="game__person" 
      v-if="person[1].visible"     
      v-bind:style="{ top: person[1].top, left: person[1].left , animationDuration: `${spawn}ms` }"
      @click="hit(1)"
    >
      <img class="game__person-police" src="./../assets/game/police.png" alt="person">
      <img v-if="person[1].splash" class="game__person-splash" src="./../assets/game/greensplash.png" alt="splash">
    </div>
    <!---------------------------------------------------------------------->
    <!-- PERSON 3-->
    <div class="game__person" 
      v-if="person[2].visible"     
      v-bind:style="{top: person[2].top, left: person[2].left , animationDuration: `${spawn}ms` }"
      @click="hit(2)"
    >
      <img class="game__person-police" src="./../assets/game/police.png" alt="person">
      <img v-if="person[2].splash" class="game__person-splash" src="./../assets/game/greensplash.png" alt="splash">
    </div>
    <!---------------------------------------------------------------------->
    <!---------------------------------------------------------------------->
    <!-- szef 1-->
    <div class="game__person" 
      v-if="person[3].visible"     
      v-bind:style="{top: person[3].top, left: person[3].left , animationDuration: `${spawn}ms` }"
      @click="hit(3)"
    >
      <img class="game__person-police" src="./../assets/game/szef2.png" alt="person">
      <img v-if="person[3].splash" class="game__person-splash" src="./../assets/game/greensplash.png" alt="splash">
    </div>
    <!---------------------------------------------------------------------->
     <!-- szef 2-->
    <div class="game__person" 
      v-if="person[4].visible"     
      v-bind:style="{top: person[4].top, left: person[4].left , animationDuration: `${spawn}ms` }"
      @click="hit(4)"
    >
      <img class="game__person-police" src="./../assets/game/szef2.png" alt="person">
      <img v-if="person[4].splash" class="game__person-splash" src="./../assets/game/greensplash.png" alt="splash">
    </div>
    <!---------------------------------------------------------------------->
    
  </div>
</template>

<script>
//let audio = {
  //splash: new Audio('/dist/assets/splash1.wav'),
  //pain: new Audio('/dist/assets/pain.wav')
//};

export default {
  
  data() {
    return {
      audio: {
        splash: new Audio('http://www.emilwojcik.com/sounds/splash.wav'),
        pain: new Audio('http://www.emilwojcik.com/sounds/pain.wav'),
        bg: new Audio('http://www.emilwojcik.com/sounds/8bit.wav'),
        end: new Audio('http://www.emilwojcik.com/sounds/end.wav')
      },
      gameActive: false,
      gameTimer: 100,
      score: 0,
      pushback: 30,
      penalty: 30,
      person: [
        {visible: false,top: 0,left: 0,splash: false},
        {visible: false,top: 0,left: 0,splash: false},
        {visible: false,top: 0,left: 0,splash: false},
        {visible: false,top: 0,left: 0,splash: false},
        {visible: false,top: 0,left: 0,splash: false}
      ],
      stage: 1,
      spawn: 0,
      lvlUp: false,
      endGame:{
        visible: false,
        msg: ""
      } 
    }
  },
  methods: {
    resetPersons(person) {
      for(let i = 0; i < this.person.length; i++) {
        person[i].visible = false;
        person[i].splash = false;
      }
    },
    init() {
      // zero the figures ( start a new game )
      this.gameActive = true;
      this.gameTimer = 100;
      this.resetPersons(this.person);
      this.score = 0
      this.stage = 1;
      this.pushback = 30;
      this.spawn = 3000;
      this.penalty = 30
      this.endGame.visible = false;
      // init the game
      this.timer();
      this.start();
      this.audio.bg.play()
      this.audio.bg.loop = true;
      this.audio.bg.volume = .2;
    },
    start() {
      // spawn persons
      this.personSpawn(this.stage);
      let self = this;
      setTimeout(()=> {
        self.resetPersons(self.person);
        self.start();
      }, this.spawn)
    },
    hit(whichone) {
      
      //update score (with prevention of multiple clicks)
      if(!this.person[whichone].splash){
        // add splash 
        this.person[whichone].splash = true;
        // ally or enemy
        if(this.person[whichone] === this.person[3] || this.person[whichone] === this.person[4]) {
          this.audio.pain.play();
          this.score--
          this.gameTimer = this.gameTimer - this.penalty;
        } else {
          this.audio.splash.play();
          this.score++
          // clock max
          if(this.gameTimer > 120) {
            this.gameTimer = 150;
          } else {
            this.gameTimer = this.gameTimer + this.pushback;
          }
        }
      } 
    },
    timer() {
      let self = this;
      setTimeout(()=> {
        if(self.gameTimer > 0 && self.gameActive) {
          self.gameTimer = self.gameTimer - 1;
        // recall timer
          self.checkLVL();
          self.timer();
        } else {
          self.lose();
        }
      }, 100)
    },
    checkLVL() {
     
      if(this.score >= 3 && this.score < 6) {
        this.stage = 2;
        this.spawn = 2500;
        this.pushback = 25;
        this.endGame.msg = "Not really a zombie killer ?";
      }
      if (this.score >= 7 && this.score < 10) {
        this.stage = 3;
        this.pushback = 15;
        this.endGame.msg = "At least you have tried.";
      }
      if (this.score >= 10 && this.score < 20) {
        this.stage = 4;
        this.endGame.msg = "You are getting better at this!";
      } 
      if (this.score >= 20 && this.score < 40) {
        this.stage = 5;
        this.pushback = 5;
        this.spawn = 2000;
        this.penalty = 50;
        this.endGame.msg = "Zombie killer... Not";
      } 
      if (this.score >= 40 && this.score < 50) {
        this.stage = 6;
        this.spawn = 1500;
        this.endGame.msg = "Woah, there is hope!";
      }
      if (this.score >= 50) {
        this.stage = 7;
        this.spawn = 1100;
        this.endGame.msg = "Surely, you are not affraid of zombie apocalypse. Well done!";
      }
    },
    personSpawn(stage) {
      let self = this;
      this.randomize();
      
      //create enemies based on stage
      if(stage === 1) {
        this.person[1].visible = true;
      } else if (stage === 2) {
        for(let i = 0; i <= 1; i++){this.person[i].visible = true}
      } else if (stage >= 3) {
        for(let i = 0; i <= 2; i++){this.person[i].visible = true}
      } 
      // spawn allies after stage 4
      if(stage >= 4) {
        for(let i = 3; i <= Math.floor(Math.random() * (4 - 3 + 1) + 3); i++){
          this.person[i].visible = true;
        }
      }
      // reset all
      setTimeout(()=> {
          for(let i = 0; i < self.person.length; i++){
            self.person[i].visible = false;
          }
        }, this.spawn);
    },
    lose() {
      this.audio.bg.pause()
      this.audio.end.play();
      this.gameActive = false;
      this.endGame.visible = true;
    },
    randomize() {
      // Cords for positioning
      let width = document.getElementById("game").offsetWidth;
      let height = document.getElementById("game").offsetHeight;
      for(let i = 0; i < this.person.length; i++){
        this.person[i].top = Math.ceil(Math.random() * (height - 200)) + "px";
        this.person[i].left = Math.ceil(Math.random() * (width - 90)) + "px";
      }
    }
  }
}
</script>

<style lang="scss">
  .game {
    cursor: url('./../assets/game/aim.png'), pointer;
    &__person {
      cursor: url('./../assets/game/aim.png'), pointer;
      &-splash {
        cursor: url('./../assets/game/aim.png'), pointer;
      }
    }
  }
  .game {
    z-index: 1;
    height: 100%;
    width: 100%;
    //margin: 10px;
    position: relative;
    //border-radius: 30px;
    border: .5px solid rgba(255, 255, 255, 0.021);
   // background-image: url('./../assets/game/resident.png');
     background:
        /* top, transparent black, faked with gradient */ 
        linear-gradient(
          rgba(0, 0, 0, 0.4), 
          rgba(0, 0, 0, 0.7)
        ),
        url('./../assets/game/resident.png');
    
    background-repeat: no-repeat;
    background-size: cover;
    font-family: $font-main;
    color: $color-white;
    &__lvl {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      animation: shownhide 2s;
      &-title {
        color: white;
        font-size: 7rem;
      }
    }
    &__console {
      cursor: auto;
      //border-radius: 30px;
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      background-color: rgba(32, 32, 32, 0.5);
      backdrop-filter: blur(4px);
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      &-title {
        font-size: 7vh;
        margin-bottom: 3rem;
        animation: show 2s forwards;
      }
      &-endgame {
        font-size: 300%;
        animation: show 1s forwards;
        & h3 {
          margin-bottom: 30px;
        }
        
        & button {
          margin-top: 50px;
        }
      }
    }
    &__btn {
      opacity: 0;
      animation: appear 2s forwards;
      cursor: pointer;
      font-family: 'Permanent Marker', cursive;
      font-size: 2vh;
      z-index: 200;
      width: 120px;
      height: 60px;
      border-radius: 20px;
      border: 0;
      background-color: rgb(23, 12, 180);
      color: white;
      text-transform: uppercase;
      outline: none;
      box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
      
      &:hover {
        
        transform: translateY(-5%);
        box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.3);
      }
      &:active {
        
        transform: translateY(0%);
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
      }
    }
    &__timer {
      z-index: 100;
      position: absolute;
      width: 200px;
      height: 3px;
      top: 12px;
      left: 18%;
      transform: translate(-50%);
      &-bar {
        transition: all .1s;
        background-color: white;
        width: 100%;
        height: 100%;
      }
    }
    &__canvas {
      display: none;
      height: 100%;
      width: 100%;
    }
    &__info {
      position: absolute;
      right: 20px;
      top: 5px;
      height: 60px;
      width: 250px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
      font-size: 2.5rem;
    }
    &__person {
      position: absolute;
      height: 18vh;
      width: auto;
      animation: spinIn forwards;
      &-police {
        height: 100%;
        width: auto;
      }
      &-splash {
        z-index: 2000;
        position: absolute;
        top: 30px;
        left: 20px;
        height: 6vh;
        width: auto;
          
      }
    }
  }
  @keyframes spinIn {
    0% {transform: rotate(0deg) scale(.1);
    } 10% {transform: rotate(360deg) scale(1);
    } 85% { transform: rotate(360deg) scale(1);
    } 100% { transform: rotate(-360deg) scale(0); }
  }
  @keyframes show {
    0% { opacity: none; transform: scale(.5);
    } 100% { opacity: 1; transform: scale(1); }
  }
  @keyframes appear {
    0% { opacity: 0;
    } 10% { opacity: 0;
    } 60% { opacity: 1;
    } 80% { opacity: 1; transform: translateY(-20%); box-shadow: 6px 6px 3px 3px rgba(0, 0, 0, 0.3);
    } 90% { opacity: 1; transform: translateY(0%); box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.3);
    } 95% { opacity: 1; transform: translateY(-10%); box-shadow: 4px 4px 3px 3px rgba(0, 0, 0, 0.3);
    } 100% { opacity: 1;  } 
  }
  @keyframes shownhide {
    0% { display: none; }
    10% { opacity: none; transform: scale(.5); display: block;
    } 90% { opacity: 1; transform: scale(1);
    } 100% {  display: none;}
  }
    
  
</style>

