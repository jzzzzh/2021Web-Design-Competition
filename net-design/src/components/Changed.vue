//风云人物 demo 背面
<template>
  <div class="changed-box" @click="revert">
    {{msg}}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '毛泽东生平'
      }
    },
    methods: {
      revert() {
        console.log(111)
        this.$emit('parentRevert')
      }
    }
  }
</script>

<style scoped>
  .changed-box{
    width: 200px;
    height: 300px;
    cursor: pointer;
    border: 1px solid #aaa;
    border-radius: 5px;
    background: url("./img/风云人物1.jpg") no-repeat center;
    background-size: contain;
  }

</style>
