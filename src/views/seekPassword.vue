<template>
    <div class="register">
        <div class="content">
            <div class="title">
                找回密码
            </div>
            <!-- 表单部分 -->
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <el-form-item prop="name">
                    <div class="info">账号</div>
                    <el-input v-model="ruleForm.name" placeholder="请输入手机号或邮箱"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')" class="register-btn">确定</el-button>
                </el-form-item>
                <div class="prompting text-center">为了您的资金安全，修改安全设置后，24小时以内禁止提现</div>
            </el-form>
        </div>
        <div class="login-hint-rights">Copyright © 2017 Bibox.com All rights Reserved</div>
    </div>
</template>
<script>
export default {
    data() {
        // 验证规则
        return {
            ruleForm: {
                name: ''
                },
            rules: {
                name: [
                        { required: true, message: '请输入手机号或邮箱', trigger: 'blur' },
                    ],
            }
            
        }
    },
    methods: {
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
    height: 300px;
    padding: 24px 32px;
    background-color: #fff;
    box-shadow: 0 4px 12px 1px rgba(31,49,77,.1);
    border-radius: 4px;
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
.login-hint-rights {
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 12px;
    color: #8a9099;
}
.title {
    margin-bottom: 24px!important;
    font-size: 20px;
    font-weight: 500;
    color: #2f363d;
}
.info {
    font-size: 12px;
    color: #2f363d;
}
.prompting {
    font-size: 12px;
    color: #fba002;
    margin-top: 40px;
    padding-bottom: 12px;
    text-align: center;
}
</style>