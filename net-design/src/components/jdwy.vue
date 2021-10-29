<template>
  <div id="jdwy">
    <h2>建党伟业主体</h2>
    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item v-for="(item, i) in items" :key="i" :color="item.color" fill-dot>
          <v-card :color="item.color" dark>
            <v-card-title class="title">Lorem Ipsum Dolor</v-card-title>
            <v-card-text class="white text--primary">
              <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
              <div>
              <v-btn :color="item.color">CLOSE</v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
	export default {
		name: 'jdgs',
		data: () => ({
		      items: [
		        {color: 'red lighten-2',},
		        {color: 'purple darken-1',},
		        {color: 'green lighten-1',},
		        {color: 'indigo',},
		      ],
		    }),
	}
</script>
<style>
 /* 解决了button等组件的ripple效果被背景遮挡的bug 但我也不知道为什么这么写有用 */
#jdwy {
    background-color: coral;
    height: 300%;
    position: sticky;
    top: 0;
}
</style>
