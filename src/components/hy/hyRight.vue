<template>
   <div style="width: 320px;padding: 8px 15px;" class="hyRight">
       <!-- 第一行 -->
       <div style="display: flex;padding: 10px;justify-content: space-between;">
         <span>提交委托</span>
         <div>
           <span>交易单位</span>
           <span>张</span>
           <span>手机</span>
         </div>
       </div>
       <!-- 第一行结束 -->
       
       <!-- 第二行 -->
       <div style="display: flex;justify-content: space-between;">
          <span style="padding:5px 20px;color: #3b85f5;font-weight: 600;border-bottom: 2px solid #3b85f5;">限价委托</span>
          <span style="padding:5px 20px">市价委托</span>
          <span style="padding:5px 20px">计划委托</span>
       </div>
       <!-- 第二行结束 -->
       
       <!-- 第三行 -->
       <div style="display: flex;justify-content: space-between;align-items: center;border: 1px solid #565c66;background-color: #202c3d;padding: 0px 5px;margin-top:15px">
         <span>价格</span>
         <input placeholder="23452352" style="direction: rtl;" />
         <span>USDT</span>
         <div style="display: flex;flex-direction: column;">
           <span>上</span>
           <span>下</span>
         </div>
       </div>
       
       <!-- 第四行 -->
       <div style="display: flex;justify-content: space-between;align-items: center;border: 1px solid #565c66;background-color: #202c3d;padding: 0px 5px;margin-top:15px">
         <span>仓位</span>
         <input placeholder="23452352" style="direction: rtl;" />
         <span>张</span>
         <div style="display: flex;flex-direction: column;">
           <span>上</span>
           <span>下</span>
         </div>
       </div>

       <!-- 第五行 -->
       <div style="padding: 5px;display: flex;justify-content: space-between;">
         <span>可买-张</span>
         <span>可卖-张</span>
       </div>
      
       <!-- 登陆注册 -->
       <button class="el-button el-button--primary" style="width: 100%;margin-top:15px">登录/注册</button>


    </div>

</template>

<script>
// import FilterView from "../components/FilterView";
export default {
  name: "hyRight",
  data() {
    return {
    };
  },
  computed: {
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
    }
  },
  components: {
  }
};
</script>

<style scoped>

.hyRight {
  overflow: auto;
  box-sizing: border-box;
}

.bzjy_header li p{
  padding:3px 10px
}

.bzjy_table th{
  text-align: center;
  padding: 1px 2px;
}

.bzjy_table td{
  text-align: center;
  padding: 1px 2px;
}


</style>
