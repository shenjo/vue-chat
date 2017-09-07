<template>
    <div>
        <p>this is todo modules</p>
        <ul v-for="todo in todos">
            <todo-detail :message="todo"></todo-detail>
        </ul>
        <el-row>
            <el-col :span="4">
                <el-input v-model="input" placeholder="input your name"></el-input>
            </el-col>
            <el-col :span="2">
                <el-button type="primary" @click="addTodo()">commit</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  import todoDetail from './todoDetail'
  import _ from 'lodash'
  import * as types from '../store/mutation-types'
  export default {
    name: 'todoList',
    components: { todoDetail },
    data () {
      return {
        input: ''
      }
    },
    computed: {
      todos () {
        return this.$store.state.todo.todos
      }
    },
    methods: {
      addTodo () {
        const val = this.input;
        if (!_.isEmpty(val)) {
          this.$store.dispatch(types.ADDTODO, { name: val });
        }
        this.input = '';
      }
    },
    mounted () {
      this.$store.dispatch(types.LOADTODO);
    }
  }
</script>