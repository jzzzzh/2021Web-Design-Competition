<template>
  <div>
    <v-parallax dark height="200" src="../static/tam.jpg">
    <!-- 裁切图片下面部分 使得人物处于中心位置 -->
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="display-2 font-weight-black mb-3 animate__bounceIn" id="headText">党民同心</h1>
          </v-col>
        </v-row>
    </v-parallax>
  </div>
</template>

<script>
	import 'animate.css';
  export default {
  	name: 'parallax',
  	data() {
  		return {}
  	}
  }
</script>

<style>
#headText {
  font-family: "STHeiti";
  background-image:-webkit-linear-gradient(top, #e23708,#df6010,#eb740c);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}
</style>
