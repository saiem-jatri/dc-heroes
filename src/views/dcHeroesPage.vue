<template>
  <DcHeroes
      :dcHeros="dcHeros"
      @addMovie="addMovie"
      @removeMovie="remove"
  />
</template>

<script>
import DcHeroes from "../components/DcHeroes.vue";

export default {
  name: "dcHeroesPage",
  components: {DcHeroes},
  methods: {
    addMovie(newHero) {
      if (newHero !== "") {

        this.dcHeros.push({name: newHero});
      }
    },
    remove(index) {
      this.dcHeros = this.dcHeros.filter((hero, i) => i !== index);
    },
  },
  data() {
    return {
      dcHeros: [
        {name: "SuperGirl"},
        {name: "Flash"},
        {name: "Batman"},
        {name: "Arrow"},
        {name: "SuperMan"},
      ],

      // attribute:"value"
    };
  }
}
</script>

<style scoped>

</style>