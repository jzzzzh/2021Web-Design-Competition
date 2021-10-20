<template>
	<div id="app">
		<h2>{{title}}</h2>
		<a href="#/">返回</a>
    <div>
        <v-alert type="success">
          I'm a success alert.
        </v-alert>
    </div>
    <div>
        <v-alert type="info">
          I'm an info alert.
        </v-alert>
    </div>
    <div>
        <v-alert type="warning">
          I'm a warning alert.
        </v-alert>
    </div>
    <div>
        <v-alert type="error">
          I'm an error alert.
        </v-alert>
    </div>
    <test-component></test-component>
  </div>
</template>

<script>
	export default {
		name: 'fyrw',
		data() {
			return {
				title: '风云人物'
			}
		}
	}
</script>

<style>
</style>
