<template>
    <div>
        <nav-header></nav-header>
        <el-row type="flex" class="row-bg main_content">
            <el-col :span="4" v-if="isAuthed">
                <div v-show="leftNavShow">
                    <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo meun">
                        <router-link to="/" tag="li"><el-menu-item index="1"><i class="el-icon-message"></i>homepage</el-menu-item></router-link>
                        <el-submenu index="2">
                            <template slot="title"><i class="el-icon-message"></i>Blogs</template>
                            <router-link to="/faq" tag="li"><el-menu-item index="2-1">list</el-menu-item></router-link>
                            <router-link to="/todo" tag="li"><el-menu-item index="2-2">post</el-menu-item></router-link>
                        </el-submenu>
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
  import NavHeader from './main-header'
  import '../css/core.css'
  export default {
    components: { NavHeader },
    computed: {
      leftNavShow () {
        return this.$store.state.core.showLeftNav
      },
      isAuthed () {
        return this.$store.state.auth.authed
      }
    }
  }
</script>
