<template>
  <div>
    <v-parallax dark height="200" src="../static/jiandang.jpg">
    <!-- 裁切图片下面部分 使得人物处于中心位置 -->
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="display-2 font-weight-black mb-3" id="headText">建党伟业</h1>
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
  font-family: "STHeiti";
  background-image:-webkit-linear-gradient(top,#eb9509, #e23708);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

</style>
