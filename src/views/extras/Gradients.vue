<template>
    <div class="view">
        <div class="gradients">
            <div class="gradients__one"></div>
            <div class="gradients__two"></div>
            <div class="gradients__three">
                <div class="gradients__three--yellow"></div>
                <div class="gradients__three--pink"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import GradientCursor from '../../js/gradients'
    export default {
    mounted() {
       new GradientCursor()
    }
}
</script>

<style lang="scss" scoped>
    
    .gradients {
        width: 100vw;
        height: 100vh;
        position: fixed;

        &__one {
          position: absolute;  
          left: -30vw;
          top: -10vh;
          height: 150vh;
          width: 150vh;
          background: radial-gradient(circle, rgba(244,180,96,1) 0%, transparent 51%);
        }

        &__two {
          position: absolute;  
          right: -30vw;
          top: -200px;
          height: 120vh;
          width: 120vh;
          background: radial-gradient(circle, rgba(255,111,150,1) 0%, transparent 70%);
        }

        &__three {
            position: absolute;  
          left: -500px;
          top: -500px;
          
          height: 1000px;
          width: 1000px;

          &--yellow {
            position: absolute;
            opacity:1;
            top: 0;
            left: 0;
            width:100%;
            height: 100%; 
            background: radial-gradient(circle, rgba(244,180,96,.25) 0%, transparent 60%);

          }
          &--pink {
              opacity:1;
              position: absolute;
            top: 0;
            left: 0;
            width:100%;
            height: 100%; 
            background: radial-gradient(circle, rgba(255,111,150,.25) 0%, transparent 60%);
          }
        }
    }
</style>