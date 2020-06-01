<template>
    <div class="yoyo grid_2x3">
        
            <div class="yoyo__title" v-show="animation">
                <h1>Yoyoing !</h1> 
            </div>
        
        <div class="yoyo__description" v-show="animation">
            <p>
               I have been sponsored to play it, I have traveled a lot because of it, and I have met most of my best friends thanks to it. Even though nowadays it is more of a side hobby, international yoyo events and competitions are still very important dates in my schedule. Check some of my videos below, in case you think “up and down” is all you can do with a yoyo.
            </p>
        </div>
        <transition name="walk-in">
            <television v-show="animation"></television>
        </transition>
    </div>
</template>

<script>
import Television from "../components/Television.vue";
export default {
    components: {
        Television
    },
    data() {
        return {
            animation: false
        }
    },
    mounted() {
        this.animation = true;
    }
}
</script>

<style lang="scss">
// animations


</style>