<template>
    <div id="app" class="wholeContainer">
        <navigation></navigation>
    </div>
</template>

<script>
  import Navigation from './modules/core/components/Navigation'
  export default {
    name: 'app',
    components: { Navigation }
  }
</script>


<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        top: 0;
        left: 0;
    }
</style>