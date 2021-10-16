import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import home from '../components/home.vue'
import Home from '../components/Home.vue'
import hhfj from '../components/hhfj.vue'
import jdgs from '../components/jdgs.vue'
import mhwl from '../components/mhwl.vue'
import fyrw from '../components/fyrw.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
	{
	  path: '/fyrw',
	  name: 'fyrw',
	  component: fyrw,
	},
	{
	  path: '/jdgs',
	  name: 'jdgs',
	  component: jdgs,
	},
	{
	  path: '/hhfj',
	  name: 'hhfj',
	  component: hhfj,
	},
	{
	  path: '/mhwl',
	  name: 'mhwl',
	  component: mhwl,
	},
  ]
})
