<template>
    <div class="register">
        <div class="content">
            <div class="regis-method">
                <router-link to="/register"><span class="active">邮箱注册</span></router-link>
                <router-link to="/registerPhone"><span>手机注册</span></router-link>
            </div>
            <!-- 表单部分 -->
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <el-form-item prop="email">
                    <span> <i class="icon iconfont icon-youjian" style=""></i></span>
                    <el-input v-model="ruleForm.email" placeholder="请输入邮箱"></el-input>
                </el-form-item>
                <el-form-item prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" auto-complete="off" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item prop="checkPass">
                    <i class="icon iconfont icon-youjian"></i>
                    <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="请确认密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-checkbox v-model="checked" class="agreement"><span>我已阅读并同意</span> <span class="agree"  @click="openPolice">隐私政策</span> <span>与</span><span class="agree" @click="openAgree">用户协议</span></el-checkbox>
                    <el-button type="primary" @click="submitForm('ruleForm')" class="register-btn" :disabled="!checked">注册</el-button>
                </el-form-item>
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
        var validatePass = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请输入密码'));
            } else {
            if (this.ruleForm.checkPass !== '') {
                this.$refs.ruleForm.validateField('checkPass');
            }
            callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.pass) {
            callback(new Error('两次输入密码不一致!'));
            } else {
            callback();
            }
        };
        return {
            checked: true,
            userInfo: [],
            ruleForm: {
                email: '',
                pass: '',
                checkPass: '',
                },
            rules: {
                email: [
                    { validator: checkEmail, trigger: 'blur' },
                ],
                pass: [
                    { validator: validatePass, trigger: 'blur' },
                    { min: 6, max: 8, message: '长度在 6 到 8 个字符', trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
            }
            
        }
    },
    methods: {
        // 提交表单
        submitForm(ruleForm) {
            this.$refs[ruleForm].validate((valid) => {
                if (valid) {
                    this.userInfo.push(this.ruleForm)
                    this.userInfo = JSON.stringify(this.userInfo)
                    localStorage.setItem('userInfo',this.userInfo)
                    this.userInfo= JSON.parse(localStorage.getItem('userInfo'))
                    console.log('submit success');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        // 存储数据
        getUser() {
            this.userInfo= JSON.parse(localStorage.getItem('userInfo'))
        },
        // 打开政策弹窗
        openPolice() {
           this.$alert('这是一段内容', 'BIBOX隐私政策', {
            callback: action => {
                
                }
            });
        },
        // 打开协议弹窗
        openAgree() {
           this.$alert('这是一段内容', 'BIBOX用户', {
            callback: action => {
                
                }
            });
        }
    },
    mounted() {
        this.getUser()
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
</style>