<template>
  <div class="loginPanel">
    <el-row>
      <el-col :span="24">
        <el-form
          ref="loginFormEl"
          :model="loginForm"
          status-icon
          :rules="rules"
          label-width="100px"
          class="login-form"
        >
          <el-form-item label="用户名" prop="username">
            <el-input ref="username" :model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pwd">
            <el-input ref="pwd" :model="loginForm.pwd" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
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