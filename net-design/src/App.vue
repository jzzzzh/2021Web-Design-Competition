<template>
	<v-app id="app">
		<div>
			<!-- <router-view/> -->
			<div id="header">
				<img width="100%" src="../static/2_tianansquare.jpg" /></img>
				<!-- 建议在nanhu.jpg上ps毛笔竖排文字 -->
			</div>
      <parallax id="jdwyHeader"></parallax>
      <jdwy></jdwy>
			<div id="test1">
        <fyrw id="fyrw"></fyrw>
			</div>
			<!-- <div id="test2" style="height: 1600px;"> -->
				<!-- <hhfj></hhfj> -->
			<div id="test2">
				<hhfj id="hhfj"></hhfj>
				<!-- <carousel></carousel> -->
			</div>
			<div id="test3" style="color: crimson;">
				<parallax2 id="dmtx"></parallax2>
				<province></province>
			</div>
      <div id="footer"></div>
		</div>
		</div>
		<goto id="gotoBlock"></goto>
	</v-app>
</template>

<script>
import Home from './components/Home.vue'
import jdwy from './components/jdwy.vue'
import fyrw from './components/fyrw.vue'
import dmtx from './components/dmtx.vue'
import parallax from './components/parallax.vue'
import goto from './components/goto.vue'
import hover from './components/hover.vue'
import parallax2 from './components/parallax2.vue'
import hhfj from './components/hhfj.vue'
import carousel from './components/carousel.vue'
import hover2 from './components/hover2.vue'
import province from './components/province.vue'
export default {
  name: 'App',
  components: {
    Home,
    jdwy,
    fyrw,
    dmtx,
    parallax,
    goto,
    hover,
    parallax2,
    carousel,
    hover2,
    hhfj,
    province
  },
  data () {
    return {
      options: {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: false,
        menu: '#menu',
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9',
          '#b4b8ab', '#9a3a2d'
        ]
      }
    }
  }
}
</script>

<style>
@import url("./assets/font.css");

#app {
  background-color: #717166;
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 0px;
  position: relative;
}

#gotoBlock {
  position: fixed;
  right: 4%;
  top: 85%;
}

#headline{
	font-family: "FZBaiZRZTJW";
}

#test1 {
  background-image:-webkit-linear-gradient(top, #ff7547,#9a3a2d);
  background-color: #9a3a2d;
}

#test2 {
  background-image:-webkit-linear-gradient(top, #ffc8b7,lightcoral);
}

#test3 {
  background-image:-webkit-linear-gradient(top, #eeebf4,#E6E6FA);
}

#footer {
  height: 5%;
  background-image:-webkit-linear-gradient(top, #E6E6FA,#b1adcc);
}
</style>
