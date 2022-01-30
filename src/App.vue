<template>
  <AppHeader />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
<!--  <Calender/>-->

<!--<AppFooter/>-->
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
// import AppFooter from "./components/AppFooter.vue";
// import Calender from "./components/Calendar.vue"

export default {
  components: {AppHeader},
}
</script>