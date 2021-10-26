<template>
	<div class="hello" :style="conTop">
		<h1>{{ msg }}</h1>
		<h2>Links</h2>
		<ul>
			<li>
				<a href="https://vuejs.org" target="_blank">
					Core Docs
				</a>
			</li>
			<li>
				<a href="https://forum.vuejs.org" target="_blank">
					Forum
				</a>
			</li>
			<li>
				<a href="https://chat.vuejs.org" target="_blank">
					Community Chat
				</a>
			</li>
			<li>
				<a href="https://twitter.com/vuejs" target="_blank">
					Twitter
				</a>
			</li>
			<br>
			<li>
				<a href="http://vuejs-templates.github.io/webpack/" target="_blank">
					Docs for This Template
				</a>
			</li>
		</ul>
		<h2>Ecosystem</h2>
		<ul>
			<li>
				<a href="http://router.vuejs.org/" target="_blank">
					vue-router
				</a>
			</li>
			<li>
				<a href="http://vuex.vuejs.org/" target="_blank">
					vuex
				</a>
			</li>
			<li>
				<a href="http://vue-loader.vuejs.org/" target="_blank">
					vue-loader
				</a>
			</li>
			<li>
				<a href="https://github.com/vuejs/awesome-vue" target="_blank">
					awesome-vue
				</a>
			</li>
		</ul>
		<h1>aa</h1>
		<h2>bb</h2>
		<h1>aa</h1>
		<h2>bb</h2>
		<h1>aa</h1>
		<h2>bb</h2>
		<h1>aa</h1>
		<h2>bb</h2>
		<h1>aa</h1>
		<h2>bb</h2>
		<h1>aa</h1>
		<h2>bb</h2>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				imgSrc:require('@/../src/assets/1.png'),
				conTop: {
				            backgroundImage:'url(' + require('@/../src/assets/1.png') + ')',
				            backgroundRepeat:'no-repeat',
				            backgroundSize: cover,
				    }
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
	.hello{
		background-image: url(../assets/1.png);
	}
</style>
