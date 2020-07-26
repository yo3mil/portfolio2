<template>
  <div class="contact grid_2x3">
      <div class="contact__title">
        <div class="contact__title-social">
          <a href="https://github.com/yo3mil"><i class="ion-social-github"></i></a>
          <a href="https://www.linkedin.com/in/emil-wojcik-151247bb/"><i class="ion-social-linkedin"></i></a>
          <a href="https://www.facebook.com/emil.wojcik/"><i class="ion-social-facebook"></i></a>
          <a href="https://www.instagram.com/yo3mil/"><i class="ion-social-instagram"></i></a>
        </div>
        <a class="contact__title-mail" href="mailto:info@emilwojcik.com"><h3>info@emilwojcik.com</h3></a>
      </div>
      <!--MESSENGER-->
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

