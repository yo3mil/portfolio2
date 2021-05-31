<template>
  <div>
      <techno v-if="techno"></techno>
      <galaxy v-if="galaxy"></galaxy>
      <test v-if="test"></test>
  </div>
</template>

<script>
    import Galaxy from "@/components/three/Galaxy.vue";
    import Techno from "@/components/three/Galaxy.vue";
    import Test from "@/components/three/Test.vue";

    export default {
        components: {
            Galaxy,
            Techno,
            Test
        },
        data() {
            return {
                galaxy: false,
                techno: true,
                test: false
            }
        },
        methods: {
            change() {
                
            }
        }
    }

</script>

<style style="scss" scoped>
    
</style>