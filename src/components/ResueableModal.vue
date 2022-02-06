<template>

  <section class="flex w-full flex-wrap">
    <div class="m-auto">
      <h1 class="text-2xl my-5">
        Re-useable Modal
      </h1>
      <Modal v-if="isModalOPen" @close="isModalOPen=false"/>
    </div>


  </section>
</template>

<script>
import Modal from "../views/ResueablePages.vue"
import {ref} from "vue"
export default {
  name: "ResueableModal",
  components:{
    Modal
  },
  setup(){
    const isModalOPen =ref(true);
    return{isModalOPen};
  }
}
</script>

<style scoped>

</style>