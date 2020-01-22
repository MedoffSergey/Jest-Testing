import { mount } from '@vue/test-utils'
import Authorization from '@/components/Authorization.vue'

describe('Authorization.vue', () => {

  it('Непавильный ввод', () => {
    const wrapper = mount(Authorization)

    const input = wrapper.vm.inputMessage

    wrapper.find('input').setValue('wrong')                               //  Вызываем обработку действий
    wrapper.find('a.button').trigger('click')

    const targetDiv = wrapper.find('div.v-authorization__form-alert')
    expect(targetDiv.exists()).toBe(true)

    expect(targetDiv.text()).toBe('Кодовое слово не совпадает!')
  })


  it('Павильный ввод', () => {                                            //  При переходе условный роутинг
    const testFn = jest.fn()                                              //  Сначала мы создаем jest'овый mock. Это особая функция, которая умеет запоминать, вызывали ли её и с какими аргументами
    const wrapper = mount(Authorization, {
      mocks: {                                                            //  Этот mock мы присваиваем функции $router.push, что бы когда компонент её вызовет, он вместо этого вызывал mock-функцию
        $router: {
          push: testFn
        }
      }
    })

    const input = wrapper.vm.inputMessage

    wrapper.find('input').setValue('test')                                //  Вызываем обработку действий
    wrapper.find('a.button').trigger('click')

    expect(testFn).toHaveBeenCalledWith( {"name": "Successfully"})       //На последей строке мы проверяем, что наша функция была вызвана, и не просто была вызвана, а с известным нам аргументом (адресом успешной страницы)
  })
})
