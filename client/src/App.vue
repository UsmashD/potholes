<template>
  <v-app>
  
  <v-app-bar app>
    <Header />
  </v-app-bar>

   <v-main>

    <v-container fluid>

    <router-view></router-view>
   
    </v-container>
  </v-main>

  </v-app>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/_header.vue'
// import Index from './components/Index.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
