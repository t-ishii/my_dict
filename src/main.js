import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css'

import firebase from 'firebase'
import 'firebase/firebase-app'
import firebaseConfig from './firebase.config.json'
import './registerServiceWorker'

firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

Vue.use(ElementUI, { locale })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
