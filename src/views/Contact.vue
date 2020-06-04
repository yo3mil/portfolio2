<template>
  <div class="contact grid_2x3">
      <div class="contact__title">
        
        <i class="ion-social-github"></i>
        <i class="ion-social-linkedin"></i>
        <i class="ion-social-facebook"></i>
        <i class="ion-social-instagram"></i>
        <i class="ion-alert"></i>
        <i class="ion-alert"></i>
      </div>


      <!-- <div class="contact__social">
        <div class="contact__social-icon">
          <i class="ion-social-github"></i>
        
          <i class="ion-social-linkedin"></i>
        </div>
        <div class="contact__social-icon">
          <i class="ion-social-facebook"></i>
        
          <i class="ion-social-instagram"></i>
        </div>
      </div> -->
      <messenger></messenger>
  </div>
</template>

<script>
import "@/styles/ionicons.css"
import Messenger from './../components/Messenger.vue'
  export default {
    components: {
      Messenger
    }
  }
</script>

<style>

</style>