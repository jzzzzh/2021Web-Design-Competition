<template>
  <div class="origin-box" @click="change">
    <div class="img-area">
      <img :src="url" />
    </div>
    <div>{{msg}}</div>
  </div>
</template>

<script>
  import img1 from './img/毛泽东.jpg'
  export default {
    data () {
      return {
        msg: '毛泽东',
        url: img1
      }
    },
    methods: {
      change() {
        this.$emit('parentChange')
      }
    }
  }
</script>

<style scoped>
  .origin-box{
    width: 300px;
    height: 280px;
    cursor: pointer;
    border: 1px solid #aaa;
    align-items: center;
  }
  .origin-box .img-area{
      width: 150px;
      height: 400px;
    float: left;
  }
  .origin-box .img-area img{
    width: 100%;
  }

</style>
