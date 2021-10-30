<template>
  <div id="jdwy">
    <h2>建党伟业主体</h2>
    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item v-for="(item, i) in items" :key="i" :color="item.color" fill-dot small>
          <div @mouseenter="item.show = true" @mouseleave="item.show = false">
          <v-card :color="item.color" dark>
            <v-card-title class="title" >{{ item.year }}</v-card-title>
              <v-expand-transition>
                <div v-show="item.show">
                  <v-card-text class="headline font-weight-bold">
                    <p>{{ item.text }}</p>
                  </v-card-text>
                </div>
              </v-expand-transition>
          </v-card>
          </div>
        </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
	export default {
		name: 'jdgs',
		data: () => ({
		      items: [
		        {show: false,color: 'red lighten-2',year: '1921年',text: '1921年3月，李大钊撰文公开呼吁创建工人阶级政党，6月，共产国际代表马林和共产国际远东书记处代表尼克尔斯基先后到达上海，与上海的党组织成员建立了联系，建议及时召开全国代表大会，正式对外宣告中国共产党的成立。\
            代表大会原定于6月20日召开，直到7月23日代表们才在上海聚齐。当天晚上，中国共产党第一次全国代表大会在上海法租界望志路106号正式开幕。\
            30日晚，因一名神秘男子的突然闯入而终止会议，代表们分批转移到浙江嘉兴南湖的游船上继续进行。嘉兴南湖，由此成为中国共产党扬帆起航的圣地。“红船精神”也成为共产党最具代表性的精神标识。\
            党的一大确定党的名称为“中国共产党”，通过了党的纲领。党的纲领表明，中国共产党从建党开始就旗帜鲜明地把实现社会主义、共产主义作为自己的奋斗目标。',},
		        {show: false,color: 'purple darken-1',year: '1922年',text: '1922年7月16日至23日，党的二大在上海南成都路辅德里625号举行。出席大会的代表12人，代表全国195名党员。大会举行了三次全体会议，陈独秀主持大会并代表中央局向大会作一年来的工作报告。\
            党的二大发表了具有重大历史意义的宣言，在中国近代历史上第一次明确提出彻底反帝反封建的民主革命纲领，“打倒列强，除军阀”随即成为各族人民的共同呼声。\
            党的二大后，罢工斗争在全国各地普遍兴起。其中，安源路矿工人大罢工产生了重大影响。这次罢工是中国共产党第一次独立领导并取得完全胜利的工人斗争，提高了党组织在工人群众中的威信，扩大了党和工人阶级在全国的政治影响。',},
		        {show: false,color: 'green lighten-1',year: '1923年',text: '3Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',},
		        {show: false,color: 'indigo',year: '1925年',text: '4Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',},
            {show: false,color: 'indigo',year: '1926年',text: '4Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',},
            {show: false,color: 'indigo',year: '1927年',text: '4Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',},
            {show: false,color: 'indigo',year: '1928年',text: '4Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',},
            {show: false,color: 'indigo',year: '1929年',text: '4Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',},
            {show: false,color: 'indigo',year: '1930年',text: '4Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',},
            {show: false,color: 'indigo',year: '1924年',text: '4Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',},
          ],
		    }),
	}
</script>
<style>
 /* 解决了button等组件的ripple效果被背景遮挡的bug 但我也不知道为什么这么写有用 */
#jdwy {
    background-color: coral;
    height: 300%;
    position: sticky;
    top: 0;
}
</style>
