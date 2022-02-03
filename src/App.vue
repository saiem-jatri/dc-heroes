<template>
  <AppHeader @open-login-modal="isLoginOPen = true"/>
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <loginModal v-if="isLoginOPen" @close-login="isLoginOPen=false"/>

</template>

<script>
import AppHeader from "./components/AppHeader.vue";
// import LoginModal from "./components/LoginModal.vue";
import Home from "./components/Home.vue";
import LoginModal from "./components/LoginModal.vue";
import Calculator from "./components/Calculator.vue";
// import AppFooter from "./components/AppFooter.vue";
// import Calender from "./components/Calendar.vue"

export default {
  components: {LoginModal, AppHeader,Home,Calculator},
  data() {
    return {
      isLoginOPen:false,
    }
  }
}

</script>