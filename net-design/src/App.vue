<template>
  <div id="app">
    <!-- <router-view/> -->
	<Home></Home>
  </div>
</template>

<script>
import Home from './components/Home.vue'
export default {
  name: 'App',
  components:{
  	Home
  }
}

</script>

<style>

#app {
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
/*  background: url(assets/1.png);
  background-size: 100% 100%;
	height: 100%; */
}


</style>
