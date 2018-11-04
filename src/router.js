import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import EditDict from './views/EditDict.vue'
import Login from './views/Login.vue'

import firebase from 'firebase'
import 'firebase/auth'

import store from './store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/new',
      name: 'new',
      component: EditDict,
      meta: { requiresAuth: true }
    },
    {
      path: '/edit',
      name: 'edit',
      component: EditDict,
      meta: { requiresAuth: true }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    firebase.auth().onAuthStateChanged((user) => {
      const isLogin = !!user

      store.commit('user/changeLoginState', isLogin)
      store.commit('user/setUid', isLogin ? user.uid : null)

      if (isLogin) {
        next()
      } else {
        next({
          name: 'login',
          query: { redirect: to.fullPath }
        })
      }
    })
  } else {
    next()
  }
})

export default router
