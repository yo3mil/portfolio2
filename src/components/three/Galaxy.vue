<template>
  <canvas class="webgl__galaxy"></canvas>
</template>

<script>
import { init } from "../../js/galaxy";
export default {
  mounted() {
    init();
  },
};
</script>

<style style="scss" scoped>
.webgl__galaxy {
  position: fixed;
  top: 0;
  left: 0;
  outline: none;
}
</style>
