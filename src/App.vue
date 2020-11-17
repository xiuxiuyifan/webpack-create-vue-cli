<template>
  <div class="example">{{ msg }}
    <z-nav/>
    <a href="a.html">到a.html页面</a>
  </div>
</template>

<script>
import ZNav from './components/nav/index.vue'

export default {
  components:{
    ZNav
  },
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>

<style lang="scss">
.example {
  color: red !important;
}
</style>