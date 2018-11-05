import { shallowMount } from '@vue/test-utils'
import Preview from '@/components/Preview.vue'

import showdown from 'showdown'

const toHtml = (markdown) => {
  const converter = new showdown.Converter()
  return converter.makeHtml(markdown)
}

describe('Preview.vue', () => {

  // 正しくパラメータがセットされるか
  it('Whether the parameter is set', () => {
    const propText = '# test'
    const wrapper = shallowMount(Preview, {
      propsData: {
        text: propText
      }
    })
    expect(wrapper.props().text).toBe(propText)
    expect(wrapper.html()).toMatchSnapshot()
  })

  // マークダウンが変換されているか
  it('Whether markdown has been converted', () => {
    const propText = '# test\n- test1\n- test2'
    const wrapper = shallowMount(Preview, {
      propsData: {
        text: propText
      }
    })
    expect(wrapper.html()).toBe(`<div class="preview">${toHtml(propText)}</div>`)
    expect(wrapper.html()).toMatchSnapshot()
  })

  // パラメータが渡されなくても動くか
  it('Whether it works even if no parameters are passed', () => {
    const wrapper = shallowMount(Preview)
    expect(wrapper.isVisible()).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
