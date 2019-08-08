import Vue from 'vue'
import Meta from 'vue-meta'
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
import notfound from './components/notfound.vue'
import asciibinary from './components/asciibinary.vue'
import binarydecimal from './components/binarydecimal.vue'
import hexadecimalbinary from './components/hexadecimalbinary.vue'
import hexadecimaldecimal from './components/hexadecimaldecimal.vue'
import lan from './components/lan.vue'
import octalbinary from './components/octalbinary.vue'
import octaldecimal from './components/octaldecimal.vue'
import wakeonlan from './components/wake-on-lan.vue'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: binarytext
    },
    {
      path: '/binary-to-hexadecimal',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/binaryhexadecimal.vue')
    },
    {
      path: '/hexadecimal-to-decimal',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/hexadecimaldecimal.vue')
    },
    {
      path: '/wake-on-lan',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/wake-on-lan.vue')
    },
    {
      path: '/lan-local-area-network',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/lan.vue')
    },
    {
      path: '/octal-to-binary-converter',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/octalbinary.vue')
    },
    {
      path: '/decimal-to-binary',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/decimalbinary.vue')
    },
    {
      path: '/octal-to-decimal',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/octaldecimal.vue')
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
      path: '/hexadecimal-to-binary-converter',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/hexadecimalbinary.vue')
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
      path: '/binary-to-decimal',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/binarydecimal.vue')
    },
    {
      path: '/binary-to-octal',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/binaryoctal.vue')
    },
    {
      path: '/write-for-us',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/writeus.vue')
    },
    {
      path: '/ascii-to-binary',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/asciibinary.vue')
    },
    {
      path: '/404',
      component: () => import(/* webpackChunkName: "about" */ './components/notfound.vue')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
