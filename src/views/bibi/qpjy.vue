<template>
  <div class="qpjy">

    <!-- 第一行 -->
    <div style="display: flex;padding: 10px;background-color: #242933;color: #fff;">
       <div>
         <span>图标</span>
         <span style="margin-left:3px">BTC/USDT</span>
         <span style="margin-left:3px">下拉图标</span>
       </div>
       <div style="margin: 0 15px;">
         <span>图标</span>
         <span style="margin-left:3px">BTC/USDT</span>
       </div>
       <div style="margin: 0 15px;">
         <span>-431.2251</span>
         <span style="margin-left:3px">-4.25%</span>
       </div>
       <div style="margin: 0 15px;">
         <span>24小时最高</span>
         <span style="margin-left:3px">10,291.9482</span>
       </div>
       <div style="margin: 0 15px;">
         <span>24小时最低</span>
         <span style="margin-left:3px">9,601.0000</span>
       </div>
       <div style="margin: 0 15px;">
         <span>24小时成交量</span>
         <span style="margin-left:3px">11,688</span>
       </div>
    </div>

    <!-- 第二行 -->
    <div style="display: flex;background-color: rgb(45, 52, 66);color: #fff;">
      
      <!-- 左侧列 -->
      <QpyjLeft/>

      <!-- 右侧列 -->
      <QpyjRight/>
      <!-- 右侧列结束 -->

    </div>
    <!-- 第二行结束 -->

  </div>
</template>

<script>
//左侧列
import QpyjLeft from "../../components/bibi/qpjy/QpyjLeft";
//右侧列
import QpyjRight from "../../components/bibi/qpjy/QpyjRight";
export default {
  name: "qpjy",
  data() {
    return {
    };
  },
  // keep-alive激活
  activated(){
     // 不显示公共底部
     this.$parent.showFooter = false
  },
  // keep-alive切换
  deactivated(){
     // 切换公共底部的显示状态
     this.$parent.showFooter = true
  },
  computed: {
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      
    }
  },
  components: {
    QpyjLeft,
    QpyjRight
  }
};
</script>

<style scoped>

.qpjy {
  width: 100%;
  overflow: auto;
  box-sizing: border-box;
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
