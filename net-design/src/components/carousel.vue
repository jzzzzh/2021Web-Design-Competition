<template>
	<v-carousel v-model="model">
		<v-carousel-item v-for="(color, i) in colors" :key="color">
			<v-sheet :color="color" height="100%" tile>
				<v-img :aspect-ratio="16/9"
					src="https://img14.360buyimg.com/ddimg/jfs/t1/197416/10/15789/998080/6182a1d0Ef1e0f64d/738bb20db85f2a9e.jpg">
					<div class="text-h2">
						Slide {{ i + 1 }}
					</div>
				</v-img>

				<v-row class="fill-height" align="center" justify="center">
					<div class="text-h2">
						Slide {{ i + 1 }}
					</div>
				</v-row>
			</v-sheet>
		</v-carousel-item>
	</v-carousel>
</template>

<script>
	export default {
		data: () => ({
			model: 0,
			colors: [
				'primary',
				'secondary',
				'yellow darken-2',
				'red',
				'orange',
			],
		}),
	}
</script>

<style>
</style>
