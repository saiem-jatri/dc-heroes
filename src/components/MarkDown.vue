<template>
  <AppHeader/>
  <div class="flex w-full flex-wrap">
    <h2 class="w-full text-center text-4xl font-bold my-5">MarkDown App</h2>
    <section class="flex w-10/12 m-auto h-screen">
      <article class="w-1/2 border border-gray-200">
          <textarea class="w-full h-screen" :value="text"
          @input="update"
          ></textarea>
      </article>
      <article class="w-1/2 border border-gray-200" v-html="markedText">
      </article>
    </section>
  </div>
</template>
<script>
import {data} from "autoprefixer";
import {marked} from "marked";
export default {
  name: "MarkDown.vue",
  data(){
    return{
      text:"",
      timeout:""
    }
  },
  methods:{
    update(e){
      setTimeout(()=>{
        clearTimeout(this.timeout);
        this.timeout = this.text=e.target.value;
      },1000)

    },
  },
  computed: {
    markedText() {
      return marked(this.text);
    },
  },
}
</script>
<style scoped>
</style>