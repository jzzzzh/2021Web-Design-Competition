<template>
  <div>
    <v-parallax dark height="200" src="../static/tam.jpg">
    <!-- 裁切图片下面部分 使得人物处于中心位置 -->
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="display-2 font-weight-black mb-3" id="headText">党民同心</h1>
          </v-col>
        </v-row>
    </v-parallax>
  </div>
</template>

<script>
  export default {
  	name: 'parallax',
  	data() {
  		return {}
  	}
  }
</script>

<style>
#headText {
  color: #ff5500;
  font-family: "STHeiti";
}
</style>
