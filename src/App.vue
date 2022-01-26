<template>
  <h1>Hello vue {{ totalMOvies }}</h1>
  <h2>{{fName}} {{lName}}</h2>
  <ul>
    <li v-for="(hero,index) in dcHeros" :key="hero.index">
      <div>
        {{ index }} : {{ hero.name }} <button @click="remove(index)">x</button>
      </div>
    </li>
  </ul>

  <form @submit.prevent="addMovie">
    <input type="text" v-model.trim="newHero">
    <button type="submit">ADD Hero</button>
  </form>
  <small>There are {{ herosCount }}</small>
</template>

<script>
export default {
  computed: {
    herosCount() {
      return this.dcHeros.length + " " + "movies"
    },
  },
  methods: {
    addMovie() {
      if (this.newHero !== "") {

        this.dcHeros.push({name: this.newHero});
        this.newHero = ''
      }
    },
    // remove(index){
    //   (this.dcHeros.filter(hero,index)=>index !== index);
    // },
  },

  data() {
    return {
      dcHeros: [
        { name: "SuperGirl" },
        { name: "Flash" },
        { name: "Batman" },
        { name: "Arrow" },
        { name: "SuperMan" },
      ],

      newHero: "",

      // attribute:"value"
    };
  }


}
</script>