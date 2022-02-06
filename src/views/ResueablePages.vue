<template>
  <section @click="close" class="z-20 w-screen h-screen bg-gray-500 fixed top-0 left-0 opacity-50">

  </section>
  <div class="absolute inset-0 ">
    <div class ="flex h-full">
      <div class="z-30 m-auto bg-white rounded p-4 shadow">
        <div class="p-2 border">
      </div>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: "ResueablePages",
  setup(_,{emit}){
   function close(){
      this.emit("close");
    }
    return {close}
  }
}
</script>

<style scoped>

</style>