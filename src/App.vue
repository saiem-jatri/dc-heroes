<template>
  <AppHeader />
  <div class="w-full flex">
<DcHeros
    :dcHeros="dcHeros"
    @addMovie="addMovie"
    @removeMovie="remove"
/>
  </div>
<AppFooter/>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import DcHeros from "./components/DcHeroes.vue";

export default {
  components: {AppHeader,AppFooter,DcHeros},
  methods: {
    addMovie(newHero) {
      console.log(newHero)
      if (newHero !== "") {

        this.dcHeros.push({name: newHero});
      }
    },
    remove(index){
      this.dcHeros = this.dcHeros.filter((hero, i) => i !== index);
    },
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

      // attribute:"value"
    };
  }


}
</script>