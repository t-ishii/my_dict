import { shallowMount, createLocalVue } from '@vue/test-utils'
import NavMenu from '@/components/NavMenu.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'

const localVue = createLocalVue()
localVue.use(ElementUI, { locale })
localVue.use(Vuex)
localVue.use(VueRouter)

const store = new Vuex.Store({
  modules: {
    user: {
      state: {
        isLogin: false
      },
      mutations: {
        logout(state) {
          state.isLogin = false
        },
        login(state) {
          state.isLogin = true
        }
      }
    }
  }
})

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: NavMenu
    }
  ]
})

describe('NavMenu.vue', () => {

  // ログインしていないときに、aboutアイコンだけ表示されているか
  it('Whether only the about icon is displayed when not logged in.', () => {
    const wrapper = shallowMount(NavMenu, {
      store,
      localVue
    })
    expect(wrapper.find('#nav-home').exists()).toBeFalsy()
    expect(wrapper.find('#nav-new').exists()).toBeFalsy()
    expect(wrapper.find('#nav-about').exists()).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })

  // ログイン時にアイコンが表示されるかどうか
  it('Whether icons is displayed when logged in.', () => {
    store.state.user.isLogin = true
    const wrapper = shallowMount(NavMenu, {
      store,
      localVue
    })
    expect(wrapper.find('#nav-home').exists()).toBeTruthy()
    expect(wrapper.find('#nav-new').exists()).toBeTruthy()
    expect(wrapper.find('#nav-about').exists()).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })

})
