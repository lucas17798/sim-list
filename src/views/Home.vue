<template>
  <Header></Header>
  <div class="home">
    <Container></Container>
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from "../components/Header";
import Container from "../components/Container";

export default {
  name: 'Home',
  components: {
    Container,
    Header,
    // HelloWorld
  }
}
</script>

<style scoped>
.home {
  padding: 0 7px;
}
</style>