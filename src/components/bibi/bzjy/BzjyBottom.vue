<template>

    <!-- 第三大行（包含当前委托，计划委托，冰山委托，历史委托） -->  
    <div>
          <!-- 第一小行 -->
          <div style="display: flex;justify-content: space-between;padding: 25px 10px 3px;" class="BibBottom">
             <div style="width: 462px;justify-content: space-between;display: flex;">
               <span style="padding: 5px;color: #3b85f5;font-weight: 600;border-bottom: 2px solid #3b85f5;">当前委托</span>
               <span style="padding: 5px;">计划委托</span>
               <span style="padding: 5px;">冰山委托</span>
               <span style="padding: 5px;">历史委托</span>
             </div>
             <div style="display: flex;align-items: center;">
               <input type="checkBox"/>
               <span style="margin-left:5px">只看当前交易币种记录</span>
               <span style="color: #3b85f5;font-weight: 600;margin-left:20px">查看更多</span>
             </div>
          </div>

          <!-- 第二小行 -->
          <table class="bzjy_table" border="0" cellpadding="0" cellspacing="0" width="100%" style="padding: 6px;border-top: 1px solid #373535;">
               <thead>
                 <tr>
                    <th>时间</th>
                    <th>市场</th>
                    <th>方向</th>
                    <th>委托类型</th>
                    <th>委托/成交价格	</th>
                    <th>委托/成交数量	</th>
                    <th>委托/成交金额	</th>
                    <th>操作	</th>
                 </tr>
               </thead>
               <tbody style="border-radius: 4px;overflow: hidden;background-color: #242933;padding: 8px 0;">
                 <tr>
                    <td>1111</td>
                    <td>11111</td>
                    <td>11111</td>
                    <td>11111</td>
                    <td>11111</td>
                    <td>11111</td>
                    <td>11111</td>
                    <td>查看</td>
                 </tr>
               </tbody>
             </table>
        </div>

</template>

<script>
// import FilterView from "../components/FilterView";
export default {
  name: "BibBottom",
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

.BibBottom {
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
