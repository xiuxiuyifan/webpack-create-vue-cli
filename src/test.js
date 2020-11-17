import Vue from 'vue/dist/vue.esm'

const vm = new Vue({
    el: "#app",
    data: {},
    components: {
        //自己写的一个test 组件
        test: {
            data() {
                return {
                    tips: "用webpack构建Vue项目"
                }
            },
            template: '<div>{{tips}}</div>' //组件模版内容
        }
    },
    template: '<div> <test></test> </div>' //挂载 test 组件
})
