<template>
  <canvas class="snowfall_webgl"></canvas>
</template>

<script>
import { init } from "../../js/snowfall";
export default {
  mounted() {
    init();
  },
};
</script>

<style style="scss" scoped>
.snowfall_webgl {
  position: fixed;
  top: 0;
  left: 0;
  outline: none;
}
</style>
