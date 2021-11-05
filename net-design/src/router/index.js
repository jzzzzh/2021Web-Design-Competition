import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import home from '../components/home.vue'
import Home from '../components/Home.vue'
import hhfj from '../components/hhfj.vue'
import jdwy from '../components/jdwy.vue'
import dmtx from '../components/dmtx.vue'
import fyrw from '../components/fyrw.vue'
import parallax from '../components/parallax.vue'
import hover from '../components/hover.vue'
Vue.use(Router)

export default new Router({
	routes: [{
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
			path: '/jdwy',
			name: 'jdwy',
			component: jdwy,
		},
		{
			path: '/hhfj',
			name: 'hhfj',
			component: hhfj,
		},
		{
			path: '/dmtx',
			name: 'dmtx',
			component: dmtx,
		},
		{
			path: '/parallax',
			name: 'parallax',
			component: parallax,
		},
		// {
		// 	Path: '/hover',
		// 	name: 'hover',
		// 	component: hover,
		// },
	]
})
