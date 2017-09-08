<template>
    <div class="login_container">
        <!--<NavHeader></NavHeader>-->
        <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
            <h1>Register</h1>
            <el-form-item label="username" prop="username">
                <el-input type="text" v-model="loginForm.username" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="password" prop="password">
                <el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('loginForm')">register</el-button>
                <el-button @click="resetForm('loginForm')">reset</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  import NavHeader from '../../core/components/main-header';
  import * as types from '../store/mutation-types';
  export default {
    components: { NavHeader },
    data () {
      const validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('please input username'));
        } else {
          if (this.loginForm.password !== '') {
            this.$refs.loginForm.validateField('password');
          }
          callback();
        }
      };
      const validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('please input your password'));
        } else {
          callback();
        }
      };
      return {
        loginForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ],
          password: [
            { validator: validatePassword, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.dispatch(types.USERSIGNUP, this.loginForm)
              .then((res) => {
                this.$store.commit(types.LOGIN, res.data);
                this.$notify.success({
                  message: 'Register success',
                  offset: 100,
                  duration: 2500
                });
                this.$router.push('/')
              }).catch(err => {
              this.$notify.error({
                title: 'Something wrong',
                message: err.response.data.message,
                offset: 100,
                duration: 2500
              });
            })
          }
        });
      },
      resetForm (formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
    .login_container {
        position: fixed;
        left: 50%;
        width: 500px;
        top: 35%;
        margin-left: -250px;
    }


</style>