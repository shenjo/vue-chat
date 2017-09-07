<template>
    <div>
        <p>my name is {{message.name}}</p>
    </div>
</template>

<script>
  export default {
    name: 'todoDetail',
    props: ['message']
//    data () {
//      return {
//        todo: 'study item'
//      }
//    }
  }
</script>