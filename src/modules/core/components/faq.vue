<template>
    <div id="faq">
        <p>this is faq page,the button has been clicked {{ count}} times.</p>
        <el-button type="primary" @click="increate()">click</el-button>
    </div>

</template>

<script>
  export default {
    name: 'about',
    data () {
      return {
        count: 0
      }
    },
    computed: {
//      count () {
//        return this.$store.state.core.count
//      }
    },
    methods: {
      increate () {
//        this.$store.commit('increment');
        this.count++;
      }
    }
  }
</script>