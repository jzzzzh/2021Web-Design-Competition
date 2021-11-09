<template>
  <div id='fyrw'>
    <v-parallax dark height="200" src="./assets/fyrw2.jpg">
      <!-- 裁切图片下面部分 使得人物处于中心位置 -->
      <v-row align="center" justify="center">
        <v-col class="text-center">
          <h1 class="display-2 font-weight-black mb-3" style="font-family:'Microsoft YaHei UI';color:#0dc;">风云人物</h1>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container class="light-grey-5">
      <v-row no-gutters class="mb-16">
        <v-col cols="16">
          <v-hover v-slot="{ hover }">
            <v-card class="mx-auto" color="grey lighten-4" style="height:600px ; width: auto;box-sizing: border-box">
              <v-img :aspect-ratio="16/9" src="../static/fyrw2.jpg">
                <v-fade-transition>
                  <div v-if="hover"
                       class="d-flex transition-fast-in-fast-out lighten-0 v-card--top text-h2 white--text"
                       style="height: 100%;color: #ff55000c; ">
                    <v-card-text style="position: relative;font-size: large;">
                      <p>十月革命一声炮响，给中国送来了马克思列宁主义。在中国人民和中华民族的伟大觉醒中，在马克思列宁主义同中国工人运动的紧密结合中，
                        中国共产党应运而生。中国产生了共产党，这是开天辟地的大事变，深刻改变了近代以后中华民族发展的方向和进程，
                        深刻改变了中国人民和中华民族的前途和命运，深刻改变了世界发展的趋势和格局。
                      </p>
                      <p>中国共产党一经诞生，就把为中国人民谋幸福、为中华民族谋复兴确立为自己的初心使命。
                        一百年来，中国共产党团结带领中国人民进行的一切奋斗、一切牺牲、一切创造，归结起来就是一个主题：实现中华民族伟大复兴。
                      </p>
                      <p>中国共产党建党百年，期间不断涌现出风云人物。有的是出类拔翠的个人，更多的是默默奉献的集体。在如今百年未有之大变局的新时代，我们亦要争做当代的风云人物，实现中华民族的伟大复兴</p>
                    </v-card-text>
                  </div>
                </v-fade-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <v-row style="margin-bottom: 160px" no-gutters>
        <v-col v-for="(item, i) in items" :key="i" cols="4" md="4">
          <v-card class="mx-auto" color="grey lighten-4" @click="item.myshow = !item.myshow">
            <v-img :src="item.src1" :aspect-ratio="3/4"></v-img>
            <v-scale-transition>
              <div v-if="item.myshow" @mouseenter="item.insideshow = true" @mouseleave="item.insideshow = false"
                   class="d-flex transition-fast-in-fast-out grey  v-card--reveal text-h2 black--text"
                   style="height: 100%;">
                <v-card>
                  <v-img :src="item.src2" class="mx-auto" max-width='100%'></v-img>
                  <v-expand-transition v-if="item.insideshow">
                    <v-card>
                      <v-card-text @mouseenter="item.insideshow = true" @mouseleave="item.insideshow = false"
                                   max-width="100%" style="position: relative;">
                        <p>{{item.text1}}</p>
                        <p>{{item.text2}}</p>
                        <p>{{item.text3}}</p>
                      </v-card-text>
                    </v-card>
                  </v-expand-transition>
                </v-card>
              </div>
            </v-scale-transition>
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col v-for="(iTem, i) in iTems" :key="i" cols="4" md="4">
          <v-card class="mx-auto" color="grey lighten-4" @click="iTem.myshow = !iTem.myshow">
            <v-img :aspect-ratio="3/4" :src="iTem.src1"></v-img>
            <v-scale-transition>
              <div v-if="iTem.myshow" @mouseenter="iTem.insideshow = true" @mouseleave="iTem.insideshow = false"
                   class="d-flex transition-fast-in-fast-out grey v-card--reveal text-h2 white--text"
                   style="height: 100%;">
                <v-card>
                  <v-img :src="iTem.src2" max-width='100%' style="position: relative"></v-img>
                  <v-expand-transition v-if="iTem.insideshow">
                    <v-card>
                      <v-card-text v-if="iTem.insideshow" style="position: relative;">
                        <p>{{iTem.text1}}</p>
                        <p>{{iTem.text2}}</p>
                        <p>{{iTem.text3}}</p>
                      </v-card-text>
                    </v-card>
                  </v-expand-transition>
                </v-card>
              </div>
            </v-scale-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!--  </v-parallax>
 -->
  </div>
</template>

<script>
export default {
  name: 'fyrw',
  data: () => ({
    reveal: false,
    items: [{
      myshow: false,
      insideshow: false,
      src1: '../static/陈独秀.jpg',
      src2: '../static/陈独秀2.png',
      text1: '陈独秀',
      text2: '（1879年10月9日-1942年5月27日），原名陈庆同，陈乾生，字仲甫，号实庵，安徽怀宁人，新文化运动的倡导者、发起者和主要旗手，“五四运动的总司令”，中国共产党的主要创始人之一和党早期主要领导人。' +
        '1920年，在上海建立中国共产党发起组，进行建党活动。1921年7月，在上海举行的中国共产党第一次全国代表大会上，被选为中央局书记。1925年领导五卅运动。',
      text3: '德先生和赛先生:民主和科学！'
    },
    {
      myshow: false,
      insideshow: false,
      src1: '../static/李大钊.jpg',
      src2: '../static/李大钊2.png',
      text1: '李大钊',
      text2: '（1889年10月29日-1927年4月28日），字守常，河北乐亭人。' +
        '是中国共产主义运动的先驱，伟大的马克思主义者，杰出的无产阶级革命家，中国共产党的主要创始人之一。李大钊同志一生的奋斗历程，同马克思主义在中国传播的历史紧密相连，同中国共产党创建的历史紧密相连，同中国共产党领导的为中国人民谋幸福的历史紧密相连',
      text3: '“试看将来的环球，必是赤旗的世界！”'
    },
    {
      myshow: false,
      insideshow: false,
      src1: '../static/毛泽东.jpg',
      src2: '../static/毛泽东2.png',
      text1: '毛泽东',
      text2: '（1893年12月26日-1976年9月9日），字润之（原作咏芝，后改润芝），笔名子任。湖南湘潭人。中国人民的领袖，伟大的马克思主义者，伟大的无产阶级革命家、战略家、理论家，中国共产党、中国人民解放军和中华人民共和国的主要缔造者和领导人，' +
        '马克思主义中国化的伟大开拓者，近代以来中国伟大的爱国者和民族英雄，中国共产党第一代中央领导集体的核心，领导中国人民彻底改变自己命运和国家面貌的一代伟人',
      text3: '”多少事从来急，一万年太久，只争朝夕“'
    }
    ],
    iTems: [{
      myshow: false,
      insideshow: false,
      src1: '../static/一大会址.png',
      src2: '../static/人民英雄纪念碑.png',
      text1: '步履艰难的艰苦创业',
      text2: '从嘉兴湖上的一个小船，从井冈山山的点点火星，经过两万五千里的长征，阻挡了侵华日军的铁蹄，赶走了腐败反动的政权，建立了新中国',
      text3: '在这一场伟大的斗争中所有参与者都是建党百年的风云人物，除了我们耳熟能详的留名青史的伟大人物，那些魂归大地，倒在血泊之中的烈士也是风云人物，他们都永垂不朽'
    },
    {
      myshow: false,
      insideshow: false,
      src1: '../static/原子弹爆炸.png',
      src2: '../static/北京奥运会.png',
      text1: '在新中国建设时期',
      text2: '从社会主义建设的初步探索，到经历挫折之后的改革开放，然后又是社会主义市场经济下的经济腾飞，期间依然涌现出了无数风云人物',
      text3: '既有最可爱的志愿军战士，也有隐姓埋名的两弹元勋，还有我们耳熟能详的雷锋同志。小岗村的带头签字的村支书，不乏国企改革的先锋，还有洪水里的解放军战士，建设时期也是风气云涌之时！'
    },
    {
      myshow: false,
      insideshow: false,
      src1: '../static/上海夜景.png',
      src2: '../static/十九大.png',
      text1: '在中国特色主义新时代',
      text2: '而今迈入了中国特色社会主义的新时代，身处于百年未有之大变局，比历史上任何时刻都更接近与中华民族伟大复兴',
      text3: '一带一路的层层推进，脱贫攻坚的全面胜利，新冠疫情的成功应对，在新时期的伊始就涌现出许许多多风云人物。许许多多的名字我们都耳熟能详，我们见证着这一切，我们也参与着这一切，我们亦是风云人物！'
    }
    ]
  })
}
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
  opacity: 1 !important;

}

.v-card--top {
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
  opacity: .9;
}

</style>
