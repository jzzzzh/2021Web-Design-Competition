<template>
  <div>
    <v-btn small fab color="lightblue"
    style="position: absolute;"
    @click="show = !show">
      <div>+</div>
    </v-btn>
    <v-expand-x-transition>
      <v-card v-show="this.show"
      style="position: absolute;right: 10px;top: -100px"
      class="mx-auto"max-width="344">
        <v-tabs vertical>
          <v-tab>
            home
          </v-tab>
          <v-tab>
            风云人物
          </v-tab>
          <v-tab>
            建党故事
          </v-tab>
          <v-tab>
            党民同心
          </v-tab>
        </v-tabs>
      </v-card>
    </v-expand-x-transition>
  </div>
<!--  <v-container>
        <v-select
          v-model="selected"
          :items="elements"
          label="DOMElement"
        ></v-select>
        <v-btn
          ref="button"
          block
          color="primary"
          @click="$vuetify.goTo(target, options)"
        >
          scroll
        </v-btn>
  </v-container> -->
</template>

<script>
  import * as easings from 'vuetify/es5/services/goto/easing-patterns'

  export default {
    data () {
      return {
        show: 'false',
        selector: null,
        selections: ['#first', '#second', '#third'],
        duration: 300,
      }
    },
  }
</script>

<style>

</style>
