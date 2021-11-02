<template>
	<div id="app">
		<h2>{{title}}</h2>
		<a href="#/">返回</a>
    <div id="show_maozedong">
      <p>{{message}}</p>
    </div>
	</div>
</template>

<script>
	export default {
		name: 'fyrw',
		data() {
			return {
				title: '风云人物',

			}
		}
	}
</script>

<style>
*{
  margin: 0;
  border: 0;
}
#show_maozedong{
  width: auto;
  length:50em;
  background-image: url("../素材/图片素材/素材/毛泽东。.jpg");
}
</style>
