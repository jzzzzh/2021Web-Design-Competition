<template>
  <v-app id="app">
    <img id="pic1" src="./assets/logo.png">
    <div class="my-2">
        <v-btn small color="error">testButton</v-btn>
    </div>
    <router-view/>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#pic1 {
  margin: 0 auto;
  width: 100px;
  height: 180px;
}

</style>
