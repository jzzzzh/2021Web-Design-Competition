//风云人物 index
<template>
  <div>
		<v-parallax dark height="250" src="../static/para.jpg">
		  <!-- 裁切图片下面部分 使得人物处于中心位置 -->
		  <v-row align="center" justify="center"  >
		    <v-col class="text-center">
		      <h1 class="display-2 font-weight-black mb-3" id="headText">辉煌奋进</h1>
		    </v-col>
		  </v-row>
		</v-parallax>
    <original-box v-if="!changeFlag"  @parentChange="change"/>
    <changed-box  v-else @parentRevert="revert"/>
  </div>
</template>

<script>
  import ChangedBox from './Changed'
  import OriginalBox from './Original'
  export default {
    components: {
      ChangedBox,
      OriginalBox
    },
    data() {
      return {
        changeFlag: false
      }
    },
    methods: {
      change() {
        console.log(222)
        this.changeFlag = true
      },
      revert() {
        this.changeFlag = false
      }
    }
  }
</script>

<style scoped>

</style>
