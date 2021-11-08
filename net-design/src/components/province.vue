<template>
	<v-container class="grey lighten-5">
		<v-row v-for="n in 1" :key="n" :class="n === 1 ? 'mb-6' : ''" no-gutters>
			<v-col v-for="(item, i) in items" :key="i">
				<v-card class="pa-2" outlined tile>
					<!-- <a :dataList="appData"></a> -->
					<hover :dataList="item.appData"></hover>
					<!-- <hover></hover> -->
				</v-card>
			</v-col>
		</v-row>
		<v-row v-for="n in 1" :key="n" :class="n === 1 ? 'mb-6' : ''" no-gutters>
			<v-col v-for="(item2, i) in items2" :key="i">
				<v-card class="pa-2" outlined tile>
					<hover2 :dataList="item2.appData"></hover2>
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
				items: [{
						appData: {
							imgsrc: "https://img14.360buyimg.com/ddimg/jfs/t1/197416/10/15789/998080/6182a1d0Ef1e0f64d/738bb20db85f2a9e.jpg",
							word1: "道之所在，虽千万人，吾往矣",
							word2: "为天地立心，为生民立命，为往圣继绝学，为万世开太平",
							word: "“有院士的专业，有战士的勇猛，更有国士的担当。”这是人民日报微博上对钟南山的评价。自古以来，我国知识分子就有“为天地立心，为生民立命，为往圣继绝学，为万世开太平”的志向和传统。钟南山院士胸怀大理想、心中有人民。2003年非典肆虐，67岁的他说“把最重的病人送到我这来。”而今，武汉疫情肆虐，84岁的他一边告诉公众“尽量不要去武汉”，一边自己却登上了前往武汉的高铁。面对未知的艰难，他勇担大任，一往无前，既有医者仁心的专业技术，也有战士迎难而上的拼搏狠劲。但是在他看似无坚不摧的外衣之下，却深藏一颗柔情似水的仁人之心、一腔热血爱国的赤诚之情",
							pinyin: "wuhan",
							city: "武汉",
							word4: "鄂",
						}
					},
					{
						appData: {
							imgsrc: "https://s3.bmp.ovh/imgs/2021/11/34c5382ef5f1da5b.jpg",
							word1: "这双手扛得了枪，也护得住你",
							word2: "挺住，郑州！挺住，河南！挺住，中国！",
							word: "在抗洪救灾的现场，我们总能看到一抹抹橙色，背上“消防”两个大字赫然醒目。这是让受灾群众安心的颜色，看到他们，仿佛就看到了希望。“风雨里，人民子弟兵在”，每次发生重大险情，他们总是冲在最前面，而他们不仅是战士，更是别人家的儿子、丈夫、父亲。我想对他们说一声“谢谢”，道一声“辛苦了”。待洪水退去，愿他们都能平安归家。",
							pinyin: "henan",
							city: "河南",
							word4: "豫",
						}
					},
				],
				items2: [{
						appData: {
							imgsrc: "https://img0.baidu.com/it/u=529297116,3548176514&fm=26&fmt=auto",
							word1: "道之所在，虽千万人，吾往矣",
							word2: "为天地立心，为生民立命，为往圣继绝学，为万世开太平",
							word: "全面小康",
							pinyin: "wuhan",
							city: "武汉",
							word4: "鄂",
						}
					},
					{
						appData: {
							imgsrc: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.chinamil.com.cn%2Ftheory%2Fattachement%2Fjpg%2Fsite351%2F20180828%2F1658311984892661790772.jpg&refer=http%3A%2F%2Fwww.chinamil.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638967545&t=d60fd27403269f8b4c209dd64a0a1e87",
							word1: "这双手扛得了枪，也护得住你",
							word2: "挺住，河南！",
							word: "一带一路",
							pinyin: "henan",
							city: "河南",
							word4: "豫",
						}
					},
					{
						appData: {
							imgsrc: "https://i.loli.net/2021/11/08/3RckCGNPMbvOy4w.jpg",
							word1: "这双手扛得了枪，也护得住你",
							word2: "挺住，河南！挺住，中国！",
							word: "共同富裕",
							pinyin: "henan",
							city: "河南",
							word4: "豫",
						}
					},
				],
			}

		},
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
