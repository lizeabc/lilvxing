<script>
import { ref } from 'vue';
export default {
  setup() {
    let router =  ref(null)
    let loginOff = ref(false)
    loginOff = sessionStorage.getItem('loginOff')
    router = useRoute()
    const Btn=()=>{
      loginOff=true
      sessionStorage.setItem('loginOff',true)
    }
    return { loginOff,router,Btn };
  }
};
</script>

<template>
<div>
  <div v-if="loginOff">
    <nav-bar />
    <main class="w-full relative of-x-hidden">
      <Header />
      <router-view />
      <Footer v-if="router.path != '/travel'" />
    </main>
  </div>
  <div v-if="!loginOff">
    <div @click="Btn()">点击</div>
  </div>


</div>
</template>

<style scoped>

</style>
