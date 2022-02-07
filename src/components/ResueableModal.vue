<template>

  <section class="flex w-full flex-wrap">
    <div class="m-auto">
      <h1 class="text-2xl my-5">
        Re-useable Modal
      </h1>
      <Modal v-if="isRedModalOPen" @close="isRedModalOPen=false">
       <template v-slot:title>
         Red Modal
       </template>
        <template v-slot:body>
          This is the body part
          <h2 class="text-[#f04935] font-bold text-2xl">Jatri</h2>
        </template>
      </Modal>
      <Modal v-if="isBlueModalOPen" @close="isBlueModalOPen=false">
        <template v-slot:title>
          Blue Modal
        </template>
        <template v-slot:body>
          This is the body part
        </template>
      </Modal>
      <div class="flex gap-4">
        <button @click="isRedModalOPen=true" class="bg-red-800 text-white p-4 rounded">
          Modal Open
        </button>
        <button @click="isBlueModalOPen=true" class="bg-blue-800 text-white p-4 rounded">
          Blue Modal Open
        </button>
      </div>

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
    const isRedModalOPen =ref(false);
    const isBlueModalOPen =ref(false);
    return{isRedModalOPen,isBlueModalOPen};
  }
}
</script>

<style scoped>

</style>