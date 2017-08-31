<template>
    <div class="headerWrapper">
        <header class="header" ref="header">
            <div class="container">
                <h1>Vue demo</h1>
                <el-button v-if="isAuthed" @click="userLogout()">logout</el-button>
            </div>
        </header>
        <el-row type="flex" class="row-bg">
            <el-col :span="4" v-if="isAuthed">
                <div v-show="leftNavShow">
                    <el-menu default-active="2" class="el-menu-vertical-demo">
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-message"></i>导航一</template>
                            <el-menu-item-group>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
                        <el-menu-item index="3"><i class="el-icon-setting"></i>
                            <router-link to="/">Home</router-link>
                        </el-menu-item>
                    </el-menu>
                </div>
            </el-col>
            <el-col>
                <router-view></router-view>
            </el-col>
        </el-row>

    </div>
</template>

<script>
  export default {
    computed: {
      leftNavShow () {
        return this.$store.state.core.showLeftNav
      },
      isAuthed () {
        return this.$store.state.auth.authed
      }
    },
    methods: {
      userLogout () {
        this.$store.dispatch('userLogout');
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>
    .headerWrapper {
        height: 80px;
    }

    .header {
        height: 80px;
        background-color: rgba(32, 160, 255, 1);
        color: #fff;
        top: 0;
        left: 0;
        width: 100%;
        line-height: 80px;
        z-index: 100;
        position: relative;

    }

    .header .container {
        height: 100%;
        box-sizing: border-box;
    }

    .header .nav {
        float: right;
        height: 100%;
        line-height: 80px;
        background: transparent;
        padding: 0;
        margin: 0;
    }

    .nav-item {
        margin: 0;
        float: left;
        list-style: none;
        position: relative;
        cursor: pointer;
        margin-left: 20px
    }
</style>