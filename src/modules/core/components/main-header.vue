<template>
    <div class="headerWrapper header">
        <el-row type="flex" class="row-bg">
            <el-col :span="6">bigs internal support</el-col>
            <el-col :span="12"></el-col>
            <el-col :span="6">
                <div>
                    <el-button>注册</el-button>
                    <el-button type="primary">登录</el-button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
      name: 'nav-header'
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