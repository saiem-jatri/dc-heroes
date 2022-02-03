<template>
  <section  class="w-full flex">
    <div class="m-auto">
      <h1 class="text-2xl font-bold">Calculator</h1>
      <p class="text-3xl h-20 text-right mt-10 mb-2 w-32 overflow-hidden" style="direction:rtl">
          {{calculation}}
      </p>
      <div class="my-10 grid grid-cols-4 gap-1">
         <button @click="pressed ('1')" class="p-2 w-10 h-10 border rounded shadow">1</button>
         <button @click="pressed ('2')" class="p-2 w-10 h-10 border rounded shadow">2</button>
         <button @click="pressed ('3')" class="p-2 w-10 h-10 border rounded shadow">3</button>
         <button @click="pressed ('+')" class="p-2 w-10 h-10 border rounded shadow">+</button>
         <button @click="pressed ('4')" class="p-2 w-10 h-10 border rounded shadow">4</button>
         <button @click="pressed ('5')" class="p-2 w-10 h-10 border rounded shadow">5</button>
         <button @click="pressed ('6')" class="p-2 w-10 h-10 border rounded shadow">6</button>
         <button @click="pressed ('-')" class="p-2 w-10 h-10 border rounded shadow">-</button>
         <button @click="pressed ('7')" class="p-2 w-10 h-10 border rounded shadow">7</button>
         <button @click="pressed ('8')" class="p-2 w-10 h-10 border rounded shadow">8</button>
         <button @click="pressed ('9')" class="p-2 w-10 h-10 border rounded shadow">9</button>
         <button @click="pressed ('*')" class="p-2 w-10 h-10 border rounded shadow">*</button>
         <button @click="pressed ('c')" class="p-2 w-10 h-10 border rounded shadow">C</button>
        <button @click="pressed ('0 ')" class="p-2 w-10 h-10 border rounded shadow">0</button>
         <button @click="pressed ('=')" class="p-2 w-10 h-10 border rounded shadow">=</button>
         <button @click="pressed ('/')" class="p-2 w-10 h-10 border rounded shadow">/</button>

      </div>
    </div>
  </section>
</template>

<script>
import {ref} from 'vue'
export default {
  name: "Calculator",
  setup(){
  const calculation =ref("");
  const operations =['+','-','*','/'];

  function pressed(value){
    if(value === '=')calculate();
    else if(value === 'c') clear();
    else if(operations.includes(value)) applyOperations(value);
    else appendNumber(value);

  }
    function appendNumber(value){
      calculation.value=calculation.value+value;
    }
    function applyOperations(){

    }
    function calculate(){

    }
    function clear(){
    calculation.value=''
    }
  return{calculation,pressed,appendNumber};
  },
}
</script>

<style scoped>

</style>