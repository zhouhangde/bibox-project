<template>
    <div class="register">
        <div class="content">
            <div class="regis-method">
                <!-- <router-link to="/register"><span class="active">登录</span></router-link>
                <router-link to="/registerPhone"><span prefix-icon="icon iconfont icon-shouji">手机注册</span></router-link> -->
                <div class="flex-box">
                  <p class="login-title">登录</p> 
                  <div class="login-methods">
                    <span class="lg-methods" @click="methods_email" :class="[lg__email? 'active': '']">邮箱</span> 
                    <div class="box-line"></div> 
                    <span class="lg-methods" @click="methods_phone" :class="[lg__phone? 'active': '']">手机号</span> 
                    <div class="box-line"></div> 
                    <span class="lg-methods" @click="methods_child" :class="[lg__child? 'active': '']">子账户</span>
                  </div>
                </div>
            </div>
            <!-- 表单部分 -->
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <el-form-item prop="email" v-if="flag">
                    <el-input v-model="ruleForm.email" placeholder="请输入邮箱" prefix-icon="icon iconfont icon-youjian"></el-input>
                </el-form-item>
                <el-form-item prop="phone" v-if="!flag">
                    <el-input v-model="ruleForm.phone" placeholder="请输入手机号" prefix-icon="icon iconfont icon-shouji"></el-input>
                </el-form-item>
                <el-form-item prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" auto-complete="off" placeholder="请输入密码" prefix-icon="icon iconfont icon-suo"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')" class="register-btn">登录</el-button>
                </el-form-item>
                <div class="operation">
                  <div><router-link to="/seekPassword"><span class="active">忘记密码</span></router-link></div>
                  <div>还没有账号?
                    <router-link to="/register"><span class="active">注册</span></router-link>
                  </div>
                </div>
            </el-form>
        </div>
        <div class="login-hint-box">Bibox.com 与 LinkCoin.pro 账号已互通，您可使用任一已注册账号直接登录本站</div>
        <div class="login-hint-rights">Copyright © 2017 Bibox.com All rights Reserved</div>
    </div>
</template>
<script>
export default {
    data() {
        // 验证规则
        var checkEmail = (rule, value, callback) => {
            const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
            if (!value) {
            return callback(new Error('邮箱不能为空'))
            }
            setTimeout(() => {
            if (mailReg.test(value)) {
                callback()
            } else {
                callback(new Error('请输入正确的邮箱格式'))
            }
            }, 100)
        }
        var phone = (rule, value, callback) => {
            if (!value) {
            return callback(new Error('手机号不能为空'));
            } else {
            const reg = /^1[3|4|5|7|8][0-9]{9}$/
            if (reg.test(value)) {
                callback();
            } else {
                return callback(new Error('请输入正确的手机号'));
            }
            }
        }
        var validatePass = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请输入密码'));
            } else {
            if (this.ruleForm.checkPass !== '') {
                this.$refs.ruleForm.validateField('checkPass');
            }
            callback();
            }
        }
        return {
            flag: true,
            lg__email: true,
            lg__phone: false,
            lg__child: false,
            ruleForm: {
                email: '',
                phone: '',
                pass: '',
                checkPass: '',
                },
            rules: {
                email: [
                    { validator: checkEmail, trigger: 'blur' },
                ],
                phone: [
                    { validator: phone, trigger: 'blur' },
                ],
                pass: [
                    { validator: validatePass, trigger: 'blur' },
                    { min: 6, max: 8, message: '长度在 6 到 8 个字符', trigger: 'blur' }
                ]
            }
            
        }
    },
    methods: {
        // 登录方式
        methods_email() {
          this.flag=true
          this.lg__phone=false
          this.lg__child=false
          this.lg__email=true
        },
        methods_phone() {
          this.flag=false
          this.lg__email=false
          this.lg__child=false
          this.lg__phone=true
        },
        methods_child() {
          this.lg__phone=false
          this.lg__email=false
          this.lg__child=true
        },
        // 提交表单 
        submitForm(ruleForm) {
            this.$refs[ruleForm].validate((valid) => {
                if (valid) {
                    console.log('submit success');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    },
    mounted() {
        this.lg_phone=false
        this.lg_email=true
    },
}
</script>
<style lang="less" scoped>
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 600px;
  box-sizing: border-box;
  position: relative;

}
.content {
    width: 480px;
    height: 330px;
    padding: 24px 32px;
    background-color: #fff;
    box-shadow: 0 4px 12px 1px rgba(31,49,77,.1);
    border-radius: 4px;
}
.regis-method {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    .active {
        color: #000;
        font-size: 20px;
    }
    span {
        color: #3b85f5;
    }
}
.register-btn {
    width: 100%;
}
.register-btn {
    width: 100%;
}
.agreement {
    span {
        color: #000!important;
    }
    .agree {
        color: #409eff!important;
    }
}
// 版权声明
.login-hint-box {
    width: 480px;
    font-size: 12px;
    border-top: 1px solid #ebeff5;
    border-radius: 4px;
    color: #8a9099;
    line-height: 1.5;
    margin: 33px auto 0;
    text-align: center;
    padding-top: 16px!important;
}
.login-hint-rights {
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 12px;
    color: #8a9099;
}
// 登录方式
.flex-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px!important;
    font-size: 20px;
}
.login-methods {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
}
.box-line {
    width: 1px;
    height: 1.5em;
    margin: 16px 20px;
    background-color: #e6eaf0;
}
.lg-methods {
  cursor: pointer;
  color: #ccc!important;
}
.active {
  color: #409eff!important;
  font-size: 14px!important;
}
.operation {
  display: flex;
  justify-content: space-between;
}
</style>