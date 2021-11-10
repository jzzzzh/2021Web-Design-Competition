<template>
  <div id='hhfj'>
    <v-parallax dark height="250" src="../static/para.jpg">
      <!-- 裁切图片下面部分 使得人物处于中心位置 -->
      <v-row align="center" justify="center">
        <v-col class="text-center">
          <h1 id="headText" class="display-2 font-weight-black mb-3" style="color:whitesmoke;">辉煌奋进</h1>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container class="light-grey-5">
      <v-row no-gutters class="mb-10">
        <v-col cols="16">
          <v-hover v-slot="{ hover }">
            <v-card class="mx-auto" color="grey lighten-4">
              <v-img :aspect-ratio="16/9" src="../static/top_future.jpg">
                <v-fade-transition>
                  <div v-if="hover"
                    class="d-flex transition-fast-in-fast-out  red lighten-0 v-card--top text-h2 white--text"
                    style="height: 100%;">
                    <v-card-text style="position: relative;font-size: large;">
                      <p>中国历史源远流长，中国的科学技术，在很长的一段历史时期都居于世界领先地位，浩若烟海的科学技术成就，为世界文明的发展做出了突出的贡献，成就最大的是农学、天文学、数学和中医学。</p>

                    </v-card-text>
                  </div>
                </v-fade-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <v-row class="mb-16" no-gutters>
        <v-col v-for="(item, i) in items" :key="i" cols="4" md="4">
          <v-card class="mx-auto" color="grey lighten-4" @click="item.myshow = !item.myshow">
            <v-img :src="item.src1" :aspect-ratio="16/9"></v-img>
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
        <v-col v-for="(iTem, i) in iTems" :key="i" cols="6">
          <v-card class="mx-auto" color="grey lighten-4" @click="iTem.myshow = !iTem.myshow">
            <v-img :aspect-ratio="16/9" :src="iTem.src1"></v-img>
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
  </div id='hhfj'>

</template>

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

  .imginside {}
</style>

<script>
  export default {
    name: 'hhfj',
    data: () => ({
      reveal: false,
      items: [{
          myshow: false,
          insideshow: false,
          src1: '../static/cpu.jpg',
          src2: '../static/cpu1.jpg',
          text1: '中国芯是指由中国自主研发制造的计算机处理芯片。实施“中国芯”工程，采用动态流水线结构，研发生产了一系列中国芯片。',
          text2: '',
          text3: '',
        },
        {
          myshow: false,
          insideshow: false,
          src1: '../static/economy.jpg',
          src2: '../static/economy1.jpg',
          text1: '中华人民共和国成立后，通过有计划地进行大规模的建设，中国已成为世界上最具有发展潜力的经济大国之一，人民生活总体上达到小康水平。',
          text2: '',
          text3: '',
        },
        {
          myshow: false,
          insideshow: false,
          src1: '../static/military.jpg',
          src2: '../static/military1.jpg',
          text1: '中国拥有洲际弹道导弹、弹道导弹潜艇、战略轰炸机组成的三位一体的核打击能力，并拥有可配备核弹头的洲际弹道导弹,还被视为军事强国和潜在军事超级大国。',
          text2: '',
          text3: '',
        },
      ],
      iTems: [{
          myshow: false,
          insideshow: false,
          src1: '../static/diplomacy.jpg',
          src2: '../static/diplomacy1.jpg',
          text1: '中国外交政策指的是中国在处理同世界上一切其他国家和地区的政治、经济、文化、边界等各种关系中的措施和办法。特色战略如人类命运共同体，旨在追求本国利益时兼顾他国合理关切，在谋求本国发展中促进各国共同发展。人类只有一个地球，各国共处一个世界，要倡导“人类命运共同体”意识。',
          text2: '',
          text3: '',
        },
        {
          myshow: false,
          insideshow: false,
          src1: '../static/culture.jpg',
          src2: '../static/culture1.jpg',
          text1: '华夏文化，以中原文化为基础不断演化、发展而成的中华特有文化。历经千年，中华文化，相传经历了有巢氏、燧人氏、伏羲氏、神农氏、黄帝、尧、舜、禹等时代，到中国第一个国家夏朝建立发展，一个拥有灿烂文化的中国，带着丰富多彩的文化元素屹立在世界东方。',
          text2: '',
          text3: '',
        },
      ],
    }),
  }
</script>
