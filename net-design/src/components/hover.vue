<template>
	<v-hover v-slot="{ hover }">
		<v-card class="mx-auto" color="grey lighten-4" max-width="600">
			<v-img :aspect-ratio="16/9" :src="dataList.imgsrc">
				<!-- src="https://img10.360buyimg.com/ddimg/jfs/t1/155894/28/23280/131551/6182a12aE9b9a1822/d85355da661c9895.jpg"> -->

				<v-expand-transition>
					<div v-if="hover"
						class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-h6 white--text"
						style="height: 100%;">
						{{dataList.word}}
					</div>
				</v-expand-transition>
			</v-img>
			<v-card-text class="pt-6" style="position: relative;">
				<v-btn absolute color="orange" class="white--text" fab large right top>{{dataList.word4}}
					<!-- <v-icon>mdi-cart</v-icon> -->
				</v-btn>
				<div class="font-weight-light grey--text text-h6 mb-2">
					{{dataList.pinyin}}
				</div>
				<h3 class="text-h4 font-weight-light orange--text mb-2">
					{{dataList.city}}
				</h3>
				<div class="font-weight-light text-h6 mb-2">
					{{dataList.word1}}<br>
					{{dataList.word2}}
				</div>
			</v-card-text>
		</v-card>
	</v-hover>
</template>

<script>
	export default {
		name: 'App',
		props: {
		    dataList: {
		      type: [Object],
		    },
		  },
		data() {
			return {
				imgsrc:"https://img14.360buyimg.com/ddimg/jfs/t1/197416/10/15789/998080/6182a1d0Ef1e0f64d/738bb20db85f2a9e.jpg",
				word:"“有院士的专业，有战士的勇猛，更有国士的担当。”这是人民日报微博上对钟南山的评价。自古以来，我国知识分子就有“为天地立心，为生民立命，为往圣继绝学，为万世开太平”的志向和传统。钟南山院士胸怀大理想、心中有人民。2003年非典肆虐，67岁的他说“把最重的病人送到我这来。”而今，武汉疫情肆虐，84岁的他一边告诉公众“尽量不要去武汉”，一边自己却登上了前往武汉的高铁。面对未知的艰难，他勇担大任，一往无前，既有医者仁心的专业技术，也有战士迎难而上的拼搏狠劲。但是在他看似无坚不摧的外衣之下，却深藏一颗柔情似水的仁人之心、一腔热血爱国的赤诚之情",
				pinyin:"wuhan",
				city:"武汉",
				word2:"道之所在，虽千万人，吾往矣",
				word3:"为天地立心，为生民立命，为往圣继绝学，为万世开太平",
			}
			}}
</script>

<style>
	.v-card--reveal {
		align-items: center;
		bottom: 0;
		justify-content: center;
		opacity: .5;
		position: absolute;
		width: 100%;
	}
</style>
