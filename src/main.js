import Vue from 'vue/dist/vue.esm'
import App from './App.vue'


const vm = new Vue({
    render:h => h(App)
})

vm.$mount('#app')