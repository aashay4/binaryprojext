import Vue from 'vue'
import Meta from 'vue-meta'
import Router from 'vue-router'
import binarytext from './components/binarytext.vue'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (){
  return { x: 0, y: 0 };
},
  routes: [
    {
      path: '/',
      component: binarytext
    },
    {
      path: '/binary-to-hexadecimal/',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/binaryhexadecimal.vue')
    },
    {
      path: '/hexadecimal-to-decimal/',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/hexadecimaldecimal.vue')
    },
    {
      path: '/wake-on-lan/',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/wake-on-lan.vue')
    },
    {
      path: '/lan-local-area-network/',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/lan.vue')
    },
    {
      path: '/octal-to-binary-converter/',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/octalbinary.vue')
    },
    {
      path: '/decimal-to-binary/',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/decimalbinary.vue')
    },
    {
      path: '/octal-to-decimal/',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/octaldecimal.vue')
    },
    {
      path: '/decimal-to-hexadecimal/',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/decimalhexadecimal.vue')
    },
    {
      path: '/hexadecimal-to-octal/',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/hexadecimaloctal.vue')
    },
    {
      path: '/decimal-to-octal/',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/decimaloctal.vue')
    },
    {
      path: '/hexadecimal-to-binary-converter/',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/hexadecimalbinary.vue')
    },
    {
      path: '/qr-code-reader/',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/qrgenerator.vue')
    },
    {
      path: '/qr-code-generator/',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/qrreader.vue')
    },
    {
      path: '/about-creator/',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/creator.vue')
    },
    {
      path: '/blog/',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/blogs.vue')
    },
    {
      path: '/binary-to-decimal/',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/binarydecimal.vue')
    },
    {
      path: '/binary-to-octal/',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/binaryoctal.vue')
    },
    {
      path: '/write-for-us/',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/writeus.vue')
    },
    {
      path: '/ascii-to-binary/',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/asciibinary.vue')
    },
    {
      path: '/404/',
      component: () => import(/* webpackChunkName: "about" */ './components/notfound.vue')
    },
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/blog/wake-on-lan/',
      redirect: '/wake-on-lan/'
    },
    {
      path: '/blog/lan-local-area-network/',
      redirect: '/lan-local-area-network/'
    },
    {
      path: '/binary-converter/',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/binaryconverter.vue')
    },
    {
      path: '/2-in-binary/',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/2inbinary.vue')
    },
    {
      path: '/write-6-in-binary/',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/6inbinary.vue')
    },
    {
      path: '/how-to-write-10-in-binary/',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/10inbinary.vue')
    },
    {
      path: '/22inbinary/',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/22inbinary.vue')
    },
    {
      path: '/3-in-binary/',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/3inbinary.vue')
    },
    {
      path: '/how-to-write-4-in-binary/',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/4inbinary.vue')
    },
    {
      path: '/binary-numbers/',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/binarynumbers.vue')
    },
    {
      path: '/decimal-to-fraction/',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/decimalfraction.vue')
    }
  ]
})
