<template>
	<div id="app">
		<h1>{{title}}</h1>
		<p>宋体？</p>
<!-- 		<a href="#/fyrw">风云人物</a>
		<a href="#/jdgs">建党故事</a>
		<a href="#/hhfj">辉煌奋进</a>
		<a href="#/mhwl">美好未来</a> -->
<!-- 		<div id="dowebok">
			<div class="section">
				<h3>第一屏</h3>
				<p>fullPage.js — 基本演示</p>
			</div>
			<div class="section">
				<div class="slide">
					<h3>第二屏的第一屏</h3>
				</div>
				<div class="slide">
					<h3>第二屏的第二屏</h3>
				</div>
				<div class="slide">
					<h3>第二屏的第三屏</h3>
				</div>
			</div>
			<div class="section">
				<h3>第三屏</h3>
			</div>
			<div class="section">
				<h3>第四屏</h3>
				<p>这是最后一屏</p>
			</div>
		</div>
		<a href="http://www.dowebok.com/" style="display: none;">dowebok</a>
		<a href="http://www.dowebok.com/77.html" style="display: none;">jQuery全屏滚动插件fullPage.js</a> -->
	</div>

</template>

<script>
	export default {
		name: 'Home',
		data() {
			return {
				title: '建党百年'
			}
		}
	}
	// $(function() {
	// 	$('#dowebok').fullpage({
	// 		sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90']
	// 	});
	// });
</script>

<style>
	#app {
		font-family: "宋体", sans-serif;
	}
</style>
