<script setup lang="ts">
import { onBeforeMount } from "vue";
import { RouterView, useRouter } from "vue-router";

const router = useRouter()


onBeforeMount(()=>{
  const authToken = localStorage.getItem('token')
  authToken ?  router.push('/') : router.push('/auth')
  
})
</script>
<template>
    <h1 class="title">Reporter App</h1>
  <RouterView />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
}
#app {
  min-height: 100vh;
  background: #414141;
  padding-top: 70px;
  .title {
    color: #fff;
    text-align: center;
    font-size: 36px;
    font-weight: 500;
    letter-spacing: 25.2px;
    text-transform: uppercase;
    padding-bottom: 40px;
  }
}
</style>
