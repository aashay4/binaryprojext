import Vue from 'vue'
import Router from 'vue-router'
import binarytext from './components/binarytext.vue'
import binaryhexadecimal from './components/binaryhexadecimal.vue'
import binaryoctal from './components/binaryoctal.vue'
import decimalbinary from './components/decimalbinary.vue'
import decimalhexadecimal from './components/decimalhexadecimal.vue'
import hexadecimaloctal from './components/hexadecimaloctal.vue'
import decimaloctal from './components/decimaloctal.vue'
import qrgenerator from './components/qrgenerator.vue'
import qreader from './components/qrreader.vue'
import creator from './components/creator.vue'
import blogs from './components/blogs.vue'
import writeus from './components/writeus.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: binarytext
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/About.vue')
    },
    {
      path: '/binary-to-hexadecimal',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/binaryhexadecimal.vue')
    },
    {
      path: '/binary-to-octal',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/binaryoctal.vue')
    },
    {
      path: '/decimal-to-binary',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/decimalbinary.vue')
    },
    {
      path: '/decimal-to-hexadecimal',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/decimalhexadecimal.vue')
    },
    {
      path: '/hexadecimal-to-octal',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/hexadecimaloctal.vue')
    },
    {
      path: '/decimal-to-octal',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/decimaloctal.vue')
    },
    {
      path: '/qr-code-reader',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/qrgenerator.vue')
    },
    {
      path: '/qr-code-generator',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/qrreader.vue')
    },
    {
      path: '/about-creator',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/creator.vue')
    },
    {
      path: '/blog',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/blogs.vue')
    },
    {
      path: '/write-for-us',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/writeus.vue')
    }
  ]
})
