<template>
  <div>
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
