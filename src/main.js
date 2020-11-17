import Vue from 'vue/dist/vue.esm'
import App from './App.vue'

import './app.scss'

const vm = new Vue({
    render:h => h(App)
})

vm.$mount('#app')