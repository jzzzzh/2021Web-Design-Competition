<template>
  <div id="app">
    <!-- <router-view/> -->
	<div>
	        <full-page :options="options">
	            //每个需要全屏滚动的页面都需要包在
	            <div class="section">
	                   section1
					   <Home></Home>
	            </div>
	            <div class="section">
	                section2
					<fyrw></fyrw>
	            </div>
	            <div class="section">
	                <div class="box3">
	                section3
	                </div>
					<jdgs></jdgs>
	            </div>
	            <div class="section">
	                <div class="box3">
	                section4
	                </div>
					<dmtx></dmtx>
	            </div>
	        </full-page>
	    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import jdgs from './components/jdgs.vue'
import fyrw from './components/fyrw.vue'
import dmtx from './components/dmtx.vue'
export default {
  name: 'App',
  components:{
  	Home,
	jdgs,
	fyrw,
	dmtx,
  },
  data () {
          return {
              options:{
  				// 为每个section设置背景色
  		        //sectionsColor: ["#f00","#0f0","#00f","#0ff"],
  		        //用来控制slide幻灯片的箭头，设置为false，两侧的箭头会消失
  		        //controlArrows: false,
  		        //每一页幻灯片的内容是否垂直居中
  		        //verticalCentered: false,
  		        //字体是否随着窗口缩放而缩放
  		        //resize: true,
  		        //页面滚动速度
  		        //scrollingSpeed: 700,
  		        //定义锚链接，用户可以快速打开定位到某一页面；不需要加"#"，不要和页面中任意的id和name相同
  		        //anchors: ["page1","page2","page3"],
  		        //是否锁定锚链接
  		        //lockAnchors: true,
  		        //定义section页面的滚动方式，需要引入jquery.easings插件
  		        //easing:,
  		        //是否使用css3 transform来实现滚动效果
  		        //css3: false,
  		        //滚动到最顶部后是否连续滚动到底部
  		        //loopTop: true,
  		        //滚动到最底部后是否连续滚动到顶部
  		        //loopBottom: true,
  		        //横向slide幻灯片是否循环滚动
  		        //loopHorizontal: false,
  		        //是否循环滚动，不会出现跳动，效果很平滑
  		        //continuousVertical: true,
  		        //是否使用插件滚动方式，设为false后，会出现浏览器自带的滚动条，将不会按页滚动
  		        //autoScrolling: false,
  		        //是否包含滚动条，设为true，则浏览器自带的滚动条会出现，页面还是按页滚动，但是浏览器滚动条默认行为也有效
  		        //scrollBar: true,
  		        //设置每个section顶部的padding，当我们要设置一个固定在顶部的菜单、导航、元素等时使用
  		        //paddingTop: "100px",
  		        //设置每个section底部的padding，当我们要设置一个固定在底部的菜单、导航、元素等时使用
  		        //paddingBottom: "100px",
  		        //固定的元素，为jquery选择器；可用于顶部导航等
  		        //fixedElements: ".nav",
  		        //是否可以使用键盘方向键导航
  		        //keyboardScrolling: false,
  		        //在移动设置中页面敏感性，最大为100，越大越难滑动
  		        //touchSensitivity: 5,
  		        //设为false，则通过锚链接定位到某个页面不再有动画效果
  		        //animateAnchor: false,
  		        //是否记录历史，可以通过浏览器的前进后退来导航
  		        //recordHistory: true,
  		        //绑定菜单，设定相关属性和anchors的值对应后，菜单可以控制幻灯片滚动
  		        // menu: '.nav',
  		        //是否显示导航，设为true会显示小圆点作为导航
  		        // navigation: true,
  		        //导航小圆点的位置，可以设置为left或者right
  		        // navigationPosition: right,
  		        //鼠标移动到小圆点上时显示出的提示信息
  		        //navigationTooltips: ["第一页","第二页","第三页"],
  		        //是否显示当前页面小圆点导航的提示信息，不需要鼠标移上
  		        //showActiveTooltip: true,
  		        //是否显示横向幻灯片的导航
  		        //slidesNavigation: true,
  		        //横向幻灯片导航的位置，可以为top或者bottom
  		        //slidesNavPosition: bottom,
  		        //内容超过满屏时是否显示滚动条，需要jquery.slimscroll插件
  		        //scrollOverflow: true,
  		        //section选择器
  		        //sectionSelector: ".section",
  		        //slide选择器
  		        //slideSelector: ".slide"
                  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
                  afterLoad: this.afterLoad,
                  scrollOverflow: true,
                  scrollBar: false,
                  menu: '#menu',
                  // navigation: true,
                  // anchors: ['page1', 'page2', 'page3'],
                  sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
              }
          }
      }
}

</script>

<style>

#app {
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
/*  background: url(assets/1.png);
  background-size: 100% 100%;
	height: 100%; */
}


</style>
