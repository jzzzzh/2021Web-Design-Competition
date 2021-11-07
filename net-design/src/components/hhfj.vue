<template>
<!-- 	<div id="app">
<!-- 		<h2>{{title}}</h2>
		<a href="#/">返回</a> -->
<!-- 		    <div class="container">
 -->	<!-- 	      <div class="panel active" style="background-image: url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')">
		        <h3>Explore The World</h3>
		      </div>
		      <div class="panel" style="background-image: url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')">
		        <h3>Wild Forest</h3>
		      </div>
		      <div class="panel" style="background-image: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')">
		        <h3>Sunny Beach</h3>
		      </div>
		      <div class="panel" style="background-image: url('https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')">
		        <h3>City on Winter</h3>
		      </div>
		      <div class="panel" style="background-image: url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')">
		        <h3>Mountains - Clouds</h3>
		      </div>
		    </div> -->
<!-- 	</div>
</template> -->
  <!--  <v-parallax src="../static/jiandang.jpg">
 -->
  <div id='hhfj'>
    <v-parallax dark height="250" src="../static/para.jpg">
      <!-- 裁切图片下面部分 使得人物处于中心位置 -->
      <v-row align="center" justify="center"  >
        <v-col class="text-center">
          <h1 class="display-2 font-weight-black mb-3" id="headText">辉煌奋进</h1>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container class="light-grey-5">
      <v-row no-gutters class="mb-6">

        <v-col cols="16">
          <v-hover v-slot="{ hover }">
            <v-card class="mx-auto" color="grey lighten-4">
              <v-img :aspect-ratio="16/9" src="../static/top.jpg">
                <v-fade-transition>
                  <div v-if="hover"
                    class="d-flex transition-fast-in-fast-out  red lighten-1 v-card--top text-h2 white--text"
                    style="height: 100%;">
                    <v-card-text style="position: relative;">
                      中国科技史源远流长，中国的科学技术，在很长的一段历史时期都居于世界领先地位，浩若烟海的科学技术成就，为世界文明的发展做出了突出的贡献，成就最大的是农学、天文学、数学和中医学，诞生了诸如“四大发明”等影响世界文明进程的众多科技成果。
                    </v-card-text>
                  </div>
                </v-fade-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <v-row class="mb-6" no-gutters>
        <v-col v-for="(item, i) in items" :key="i" cols="4" md="4">
          <v-card class="mx-auto" color="grey lighten-4" @click="item.myshow = !item.myshow">
            <v-img :aspect-ratio="16/9" src="../static/back.jpg"></v-img>
            <v-scale-transition>
              <div v-if="item.myshow"
                class="d-flex transition-fast-in-fast-out white v-card--reveal text-h2 white--text"
                style="height: 100%;">
                <v-card>
                  <v-img src="../static/jiandang.jpg" max-width='300px' @mouseenter="item.insideshow = true"
                    @mouseleave="item.insideshow = false"></v-img>
                  <v-card-text v-if="item.insideshow" v-text="item.text" style="position: relative;">
                  </v-card-text>
                </v-card>
              </div>
            </v-scale-transition>
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col v-for="(iTem, i) in iTems" :key="i" cols="6">
          <v-card class="mx-auto" color="grey lighten-4" @click="iTem.myshow = !iTem.myshow">
            <v-img :aspect-ratio="16/9" src="../static/back.jpg"></v-img>
            <v-scale-transition>
              <div v-if="iTem.myshow"
                class="d-flex transition-fast-in-fast-out white v-card--reveal text-h2 white--text"
                style="height: 100%;">
                <v-card>
                  <v-img src="../static/jiandang.jpg" max-width='300px' @mouseenter="iTem.insideshow = true"
                    @mouseleave="iTem.insideshow = false"></v-img>
                  <v-card-text v-if="iTem.insideshow" v-text="iTem.text" style="position: relative;">
                  </v-card-text>
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

<script>
  export default {
    name: 'hhfj',
    data: () => ({
      reveal: false,
      items: [{
          myshow: false,
          insideshow: false,
          text: '2-1',
        },
        {
          myshow: false,
          insideshow: false,
          text: '2-2',
        },
        {
          myshow: false,
          insideshow: false,
          text: '2-3',
        },
      ],
      iTems: [{
          myshow: false,
          insideshow: false,
          text: '3-1',
        },
        {
          myshow: false,
          insideshow: false,
          text: '3-2',
        },
      ],
    }),
  }
</script>
