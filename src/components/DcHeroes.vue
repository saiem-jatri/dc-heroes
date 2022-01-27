<template>
  <div class="m-auto">
    <h1 class="text-center font-bold text-4xl text-[#f04935]">Hello vue {{ herosCount }}</h1>
    <ul class="text-center text-red-800">
      <li class="flex justify-between" v-for="(hero,index) in dcHeros" :key="hero.name">
        {{ index }} : {{ hero.name }} <button v-on:click="remove(index)">x</button>
      </li>
    </ul>
    <form class=" " @submit.prevent="addMovie">
      <input class="border border-gray-400 px-5 py-2" placeholder=" Enter movies name" type="text" v-model.trim="newHero">
      <button class="bg-gradient-to-b from-pink-600 to-amber-300 text-white px-4 py-2" type="submit">ADD Hero</button>
    </form>
    <small class="bg-amber-500 px-2 rounded-lg text-center w-full">There are {{ herosCount }}</small>
  </div>
</template>
<script>
export default {
  name:'DcHeros',
  props:['dcHeros'],

  computed: {
    herosCount() {
      return this.dcHeros.length + " " + "movies"
    },
  },
  data(){
    return {
      newHero: "",
    }
  },
  methods: {
    addMovie() {
      this.$emit("addMovie", this.newHero)
      this.newHero = ''
    },
    remove(index){
      this.$emit("removeMovie", index)
    }

  },
  mounted() {
    console.log(this.dcHeros)
  }
}

</script>