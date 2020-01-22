import { shallowMount } from '@vue/test-utils'
import Authorization from '@/components/Authorization.vue'

describe('Authorization.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'

    const wrapper = shallowMount(Authorization, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)

  })

  it('renders props.msg when passed', () => {
    const title = 'new title'

    const wrapper = shallowMount(Authorization, {
      propsData: { title }
    })
    expect(wrapper.text()).toMatch(title)

  })


})
