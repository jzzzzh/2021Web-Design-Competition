<template>
	<div>
		<v-btn small fab color="lightblue" style="position: absolute;" @click="show = !show" @mouseenter="show = true">
			<div>+</div>
		</v-btn>
		<v-expand-x-transition>
			<v-card v-show=show style="position: absolute;right: 10px;top: -30px" class="mx-auto" max-width="344">
				<v-btn v-for="(item, i) in items" :key="i" @click="$vuetify.goTo(item.id,item.options)" text small
					color="red lighten-2" class=" font-weight-black">
					{{item.name}}
				</v-btn>
			</v-card>
		</v-expand-x-transition>
	</div>
</template>

<script>
	import * as easings from 'vuetify/es5/services/goto/easing-patterns'

	export default {
		data: () => ({
			show: 'false',
			items: [{
					options: {
						duration: 800,
						offset: 0,
						easing: 'easeInOutQuad',
					},
					id: '#jdwyHeader',
					name: '建党伟业',
				},
				{
					options: {
						duration: 800,
						offset: 0,
						easing: 'easeInOutQuad',
					},
					id: '#fyrw',
					name: '风云人物',
				},
				{
					options: {
						duration: 800,
						offset: 0,
						easing: 'easeInOutQuad',
					},
					id: '#hhfj',
					name: '辉煌奋进',
				},
        {
        	options: {
        		duration: 800,
        		offset: 0,
        		easing: 'easeInOutQuad',
        	},
        	id: '#dmtx',
        	name: '党民同心',
        },
			]
		})
	}
</script>

<style>

</style>
