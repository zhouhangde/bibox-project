<template>
    <div class="register">
        <div class="content">
            <div class="regis-method">
                <router-link to="/registerPhone"><span class="active">手机注册</span></router-link>
                <router-link to="/register"><span prefix-icon="icon iconfont icon-youjian">邮箱注册</span></router-link>
            </div>
            <!-- 表单部分 -->
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <el-form-item prop="phone">
                    <el-input v-model="ruleForm.phone" placeholder="请输入手机号" prefix-icon="icon iconfont icon-shouji"></el-input>
                </el-form-item>
                <el-form-item prop="checkPhone" class="checkPhone">
                    <el-input v-model="ruleForm.checkPhone" placeholder="请输入验证码"></el-input>
                    <el-button>获取验证码</el-button>
                </el-form-item>
                <el-form-item prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" auto-complete="off" placeholder="请输入密码" prefix-icon="icon iconfont icon-suo"></el-input>
                </el-form-item>
                <el-form-item prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="请确认密码" prefix-icon="icon iconfont icon-suo"></el-input>
                </el-form-item>
                <el-form-item>
                     <el-checkbox v-model="checked" class="agreement"><span>我已阅读并同意</span> <span class="agree" @click="openPolice">隐私政策</span> <span>与</span><span class="agree" @click="openAgree">用户协议</span></el-checkbox>
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
        };
        
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
                phone: '',
                checkPhone: '',
                pass: '',
                checkPass: '',
                },
            rules: {
                phone: [
                    { validator: phone, trigger: 'blur' },
                ],
                checkPhone: [
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                    { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
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
        submitForm(ruleForm) {
            this.$refs[ruleForm].validate((valid) => {
                if (valid) {
                    this.userInfo.push(this.ruleForm)
                    this.userInfo = JSON.stringify(this.userInfo)
                    localStorage.setItem('userInfo',this.userInfo)
                    // this.userInfo= JSON.parse(localStorage.getItem('userInfo'))
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
            this.$alert(
               `<p><strong>一、双方</strong></p>
                <p>&nbsp;</p>
                <p>1.1 Bibox Technology Ltd.（以下称 “公司”）是一家根据爱沙尼亚相关法律在爱沙尼亚注册成立的公司，该公司运营【Bibox】（以下称“本网站”），本网站是一个专门供用户进行数字资产交易和提供相关服务（以下称“该服务”或“服务”）的平台。为了本协议表述之方便，公司和本网站在本协议中合称使用“我们”或其他第一人称称呼。</p>
                <p>&nbsp;</p>
                <p>1.2 1.2 只要登陆本网站的自然人或其他主体均为本网站的用户，为本协议表述之便利，以下使用“您”或其他第二人称。为了本协议表述之便利，我们和您在本协议中合称为“双方”，我们或您单称为“一方”。</p>
                <p>&nbsp;</p>
                <p>1.3 本网站所有内容，为便利用户，可能提供多个语言版本，若有冲突或遗漏等情况，以中文内容为准。</p>
                <p>&nbsp;</p>`, 
               'BIBOX隐私政策', 
               {
                dangerouslyUseHTMLString: true,
                showConfirmButton: false,
                }
            ).catch(() => {
                    });;
        },
        // 打开协议弹窗
        openAgree() {
           this.$alert(
               `<p><strong>一、双方</strong></p>
                <p>&nbsp;</p>
                <p>1.1 Bibox Technology Ltd.（以下称 “公司”）是一家根据爱沙尼亚相关法律在爱沙尼亚注册成立的公司，该公司运营【Bibox】（以下称“本网站”），本网站是一个专门供用户进行数字资产交易和提供相关服务（以下称“该服务”或“服务”）的平台。为了本协议表述之方便，公司和本网站在本协议中合称使用“我们”或其他第一人称称呼。</p>
                <p>&nbsp;</p>
                <p>1.2 1.2 只要登陆本网站的自然人或其他主体均为本网站的用户，为本协议表述之便利，以下使用“您”或其他第二人称。为了本协议表述之便利，我们和您在本协议中合称为“双方”，我们或您单称为“一方”。</p>
                <p>&nbsp;</p>
                <p>1.3 本网站所有内容，为便利用户，可能提供多个语言版本，若有冲突或遗漏等情况，以中文内容为准。</p>
                <p>&nbsp;</p>`, 
               'Bibox用户协议', 
               {dangerouslyUseHTMLString: true,showConfirmButton: false}
            ).catch(() => {
                    });;
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
    height: 380px;
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
.checkPhone {
    margin-top: 18px;
    .el-input {
        width: 75%;
    }
    .el-button {
        float: right;
    }
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