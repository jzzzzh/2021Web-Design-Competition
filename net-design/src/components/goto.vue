<template>
  <div>
    <v-btn small fab color="lightblue"
    style="position: absolute;"
    @click="show = !show">
      <div>+</div>
    </v-btn>
    <v-expand-x-transition>
      <v-card v-show="this.show"
      style="position: absolute;right: 10px;top: -30px"
      class="mx-auto"max-width="344">
        <v-tabs vertical v-for="(item, i) in items" :key="i">
          <v-btn @click="$vuetify.goTo('#'+item.id,item.options)">
          {{item.id}}
          </v-btn>
        </v-tabs>
      </v-card>
    </v-expand-x-transition>
  </div>
</template>

<script>
  import * as easings from 'vuetify/es5/services/goto/easing-patterns'

  export default {
    data: () => ({
    show: 'false',
    items: [
      {
        options:{
              duration: 800,
              offset: 0,
              easing: 'easeInOutQuad',
            },id:'test1',
      },
      {
        options:{
              duration: 800,
              offset: 0,
              easing: 'easeInOutQuad',
            },id:'test2',
      },
      {
        options:{
              duration: 800,
              offset: 0,
              easing: 'easeInOutQuad',
            },id:'test3',
      },
    ]
  })
  }
</script>

<style>

</style>
