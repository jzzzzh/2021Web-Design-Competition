<template>
	<v-container class="grey lighten-5">
		<v-row v-for="n in 1" :key="n" :class="n === 1 ? 'mb-6' : ''" no-gutters>
			<v-col v-for="k in n + 1" :key="k">
				<v-card class="pa-2" outlined tile>
					<hover></hover>
				</v-card>
			</v-col>
		</v-row>
		<v-row v-for="n in 1" :key="n" :class="n === 1 ? 'mb-6' : ''" no-gutters>
			<v-col v-for="k in n + 2" :key="k">
				<v-card class="pa-2" outlined tile>
					<hover2></hover2>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import hover from './hover.vue'
	import hover2 from './hover2.vue'
	export default {
		name: 'App',
		components: {
			hover,
			hover2,
		},
		data() {
			return {
			}
		}
	}
</script>

<style>
	#test1 {
		background-color: #006064;
		height: 1600px;
	}
	
	#test2 {
		background-color: lavender;
		height: 1000px;
	}
	
	#test3 {
		background-color: lightcoral;
		height: 1000px;
	}
</style>
