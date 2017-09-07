<template>
    <div class="headerWrapper header">
        <el-row type="flex" class="row-bg">
            <el-col :span="6">Vue chat demo</el-col>
            <el-col :span="12"></el-col>
            <el-col :span="6">
                <div v-if="isAuthed">
                    <el-button type="primary" @click="userLogout">logout</el-button>
                </div>
                <div v-else>
                    <router-link to="/signup"><el-button>register</el-button></router-link>
                    <router-link to="/login"><el-button>login</el-button></router-link>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  import * as types from '../../auth/store/mutation-types'
  export default {
    name: 'nav-header',
    computed: {
      isAuthed () {
        return this.$store.state.auth.authed
      }
    },
    methods: {
      userLogout () {
        this.$store.dispatch(types.USERLOGOUT);
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
</style>