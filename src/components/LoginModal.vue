<template>
  <section @click="$emit('close-login')" class="z-20 w-screen h-screen bg-gray-500 fixed top-0 opacity-50">

  </section>
  <div class="absolute inset-0 ">
    <div class ="flex h-full">
      <div class="z-30 m-auto bg-white rounded p-4 shadow">
        <div class="p-2 border">
          <h1 class="text-2xl text-center">Login</h1>

          <p class="my-3 text-center">Or</p>
          <form class="p-2 my-2" @submit.prevent="submit">
            <div class="my-4">
              <label>Email or Username</label>
              <input
                  v-model="form.email"
                  ref="emailRef"
                  class="rounded shadow p-2 w-full"
                  placeholder="Enter your email or username"
              />
            </div>
            <div class="my-4">
              <label>Password</label>
              <input
                  v-model="form.password"
                  class="rounded shadow p-2 w-full"
                  type="password"
                  placeholder="enter your password"
              />
            </div>
            <div class="my-4">
              <button
                  type="submit"
                  class="w-full rounded shadow-md bg-gradient-to-r from-red-800 to-pink-800 text-white p-2"
              >Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: "LoginModal",
  data() {
    return{
      form:{
        email:'',
        password:'',
      },
    }
  },
  methods:{
    submit(){
      //submit the form
    }
  }

}
</script>

<style scoped>

</style>