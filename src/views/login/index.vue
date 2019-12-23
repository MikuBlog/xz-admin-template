<template>
  <div class="login">
    <div class="background" ref="background">
      <div class="mask" ref="mask"></div>
    </div>
    <div class="login-box" ref="loginBox">
      <div class="header" ref="header">{{ defaultConfig.loginHeader }}</div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" size="medium">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" prefix-icon="el-icon-lock" type="password"></el-input>
        </el-form-item>
        <el-form-item prop="vcode">
          <div class="flex-box">
            <el-input
              v-model="ruleForm.vcode"
              @keyup.native="pressEnter"
              prefix-icon="fa fa-shield"
            ></el-input>
            <el-image class="code-box" :src="codeUrl" fit="fill" @click="getCode">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" style="width: 100%;">登录</el-button>
        </el-form-item>
        <el-form-item v-show="defaultConfig.isAutoLogin">
          <el-checkbox v-model="ruleForm.checked" @change="autoLogin">自动登录</el-checkbox>
        </el-form-item>
      </el-form>
      <div v-show="defaultConfig.otherLoginMethods">
        <el-divider></el-divider>
        <div class="tip">使用合作网站账号登陆：</div>
        <div class="button-box">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconQQ" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconweibo" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconweixin" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Initial from "./mixins/initial";
import Operation from "./mixins/operation";
import Property from "./mixins/property";
export default {
  mixins: [Initial, Operation, Property]
};
</script>

<style lang="scss" scoped src="./style/index.scss"></style>
