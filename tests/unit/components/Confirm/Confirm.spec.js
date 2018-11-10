import { shallowMount, createLocalVue } from '@vue/test-utils'
import Confirm from '@/components/Confirm.vue'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'

const localVue = createLocalVue()
localVue.use(ElementUI, { locale })

describe('Confirm', () => {
  const props = {}

  beforeEach(() => {
    props.title = 'test'
    props.isShow = false
    props.question = 'test message'
  })

  // デフォルトの表示で非表示になっていること(propsの値だけチェックする)
  it('Hidden in default display', () => {
    delete props.isShow
    const wrapper = shallowMount(Confirm, {
      localVue,
      propsData: props
    })
    expect(wrapper.props.isShow).toBeFalsy()
  })

  // タイトル, メッセージが設定されていること
  it('Title and message are set', () => {
    const wrapper = shallowMount(Confirm, {
      localVue,
      propsData: props
    })
    expect(wrapper.find(`[title="${props.title}"]`).exists()).toBeTruthy()
    expect(wrapper.html().includes(props.question)).toBeTruthy()
  })
})
