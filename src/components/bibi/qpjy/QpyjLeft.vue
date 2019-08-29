<template>

    <!-- 左侧列 -->
      <div style="display: flex;flex-direction: column;flex-grow: 1;" class="QpyjLeft">
        <!-- 左侧的第一行 -->
        <div style="height: 530px;">
          <iframe id="" name="" src="" frameborder="0" allowtransparency="true" scrolling="no" allowfullscreen="" style="display: block; width: 100%; height: 100%;background-color: #12161f;border: 1px solid #212733;">

          </iframe>
        </div>
        
        <!-- 左侧的第二行 -->
        <div style="display: flex;height: 100%;">
          <!-- 左侧的第1个 -->
          <div>
            <!-- 第一行 -->
            <div style="display: flex;justify-content: space-between;padding: 10px 0;">
                <div>
                  <span style="padding: 0 10px;">币币账户</span>
                  <span style="padding: 0 10px;">杠杆账户</span>
                </div>
                <span style="padding: 0 10px;">眼睛图标</span>
            </div>

            <!-- 第二行 -->
              <table class="bzjy_table" border="0" cellpadding="0" cellspacing="0" width="100%" style="padding: 6px;">
                <thead>
                  <tr>
                      <th style="width:110px;text-align: left;">币种</th>
                      <th style="width:110px">冻结</th>
                      <th style="width:110px;text-align: right;">可用</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                      <td style="text-align: left;">6</td>
                      <td>0.2930</td>
                      <td style="text-align: right;">2990.3485</td>
                  </tr>
                  <tr>
                      <td style="text-align: left;">15</td>
                      <td>0.2930</td>
                      <td style="text-align: right;">2990.3485</td>
                  </tr>
                </tbody>
              </table>
              <!-- 第二行结束 -->
          </div>
          <!-- 左侧的第1个结束 -->


          <!-- 左侧的第二个（包含当前委托，计划委托，冰山委托，历史委托） -->  
          <div style="flex-grow: 1;border: 1px solid #484646;">
            <!-- 第一小行 -->
            <div style="display: flex;justify-content: space-between;padding: 5px;">
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
          <!-- 左侧的第二个（包含当前委托，计划委托，冰山委托，历史委托）结束 --> 
        </div>
        <!-- 左侧的第二行结束 -->

      </div>
      <!-- 左侧列结束 -->

</template>

<script>
// import FilterView from "../components/FilterView";
export default {
  name: "QpyjLeft",
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

.QpyjLeft {
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
