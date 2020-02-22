import App from '../../components/App.vue'
import { mount } from '@vue/test-utils'

describe("App.vue", () => {
    const factory = () => {
        const wrapper = mount(App);
        return wrapper;
    }

    it("render", () => {
        const wrapper = factory();
        expect(wrapper.find('.counter').exists()).toBe(true);
    })


    it("count异步更新, count的值应该为1", done => {
        const wrapper = factory();
        // 触发异步自增
        wrapper.find('.incrementAsync').trigger('click')
        // 1 s 后断言
        window.setTimeout(() => {
            expect(wrapper.vm.count).toBe(1);
            done();
        }, 1000)
    })
})