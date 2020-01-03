<template>
  <div class="loginPanel">
    <el-row>
      <el-col :span="24">
        <el-card shadow="hover">
          <el-form
            ref="loginFormEl"
            :model="loginForm"
            status-icon
            :rules="rules"
            label-width="100px"
            class="login-form"
          >
            <el-form-item label="用户名" prop="username">
              <el-input ref="username" v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pwd">
              <el-input ref="pwd" v-model="loginForm.pwd" autocomplete="on"></el-input>
            </el-form-item>
            <el-button type="primary" @click="login">登陆</el-button>
            <el-button type="success" @click="register">注册</el-button>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import Login from "./login";
export default Login;
</script>
<style lang="scss" scoped>
@import "./login.scss";
</style>