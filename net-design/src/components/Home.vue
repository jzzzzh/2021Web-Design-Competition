<template>
	<div id="app">
		<h1>{{title}}</h1>
		<p>宋体？</p>
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
</script>

<style>
	#app {
		font-family: "宋体", sans-serif;
	}
</style>
