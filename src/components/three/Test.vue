<template>
  <canvas class="webgl"></canvas>
</template>

<script>
import { init } from '../../js/test'
export default {
    mounted() {
        init()
    }
}
</script>

<style style="scss" scoped>
    .webgl {
        position: fixed;
        top: 0;
        left: 0;
        outline: none;
    }
</style>