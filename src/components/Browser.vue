<template>
<div class="browser shadow-all" >
    <div class="browser__bar">
        <h3>project Explorer 1.11</h3>
    </div>
    <div class="browser__console">
        <a :href="video.live" target="_blank" :class="{inactive: video.live === ''}"><i class="ion-social-youtube"></i></a>
        <a :href="video.git" target="_blank" :class="{inactive: video.git === ''}"><i class="ion-social-github"></i></a>
        <div class="browser__console-input">
            <i class="ion-ios-world-outline"></i>
            <input type="text" placeholder="http://localhost:8080/" readonly>
        </div>
        
        <i v-if="view" class="ion-eye" @click="changeView()"></i>
        <i v-if="!view" class="ion-eye-disabled" @click="changeView()"></i>
    </div>
    <div class="browser__window">
        <video
            v-if="typeof video.video === 'string'" 
            :src="video.video" class="browser__display" 
            :class="{window: !view}"
            loop="true" autoplay="true" muted
            id="projectVid"
        ></video>
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
            view: false
        }
    },
    methods: {
        changeView() {
            if(this.video.video != true) {
                this.view = !this.view;
                document.getElementById('projectVid').controls = !document.getElementById('projectVid').controls;
            }
            
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .inactive {
       pointer-events: none !important;
        cursor: default;
        & i {
             color: $color-gray-light !important;
        }
    }
    .window {
        object-fit: scale-down;
    }
</style>