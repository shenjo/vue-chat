<template>
    <div id="faq">
        <p>this is faq page,the button has been clicked {{ count}} times.</p>
        <!--<img src="../../../assets/logo.png" alt="">-->
        <el-button type="primary" @click="increate()">click</el-button>
    </div>

</template>

<script>
  export default {
    name: 'about',
    computed: {
      count () {
        return this.$store.state.core.count
      }
    },
    methods: {
      increate () {
        this.$store.commit('INCREMENT');
      }
    }
  }
</script>