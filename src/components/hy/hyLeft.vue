<template>
  <div style="flex-grow: 1;" class="hyLeft">
       <!-- 第一大行 -->
       <div style="display: flex;align-items: center;justify-content: space-between;">
            <ul style="display: flex;justify-content: space-between;padding: 20px 10px;align-items: center;" class="bzjy_header">
              <li>
                <p>
                  <span>图标</span>
                  <span style="margin-left:5px">BTC/USDT</span>
                  <span>永续</span>
                  <span style="margin-left:5px">下拉</span>
                </p>
              </li>
              <li>
                <p>
                  <span style="color:red">9,419.06</span>
                  <span style="margin-left:3px;color:red">-781.41</span>
                  <span style="margin-left:3px;color:red">-7.66%</span>
                </p>
              </li>
              <li>
                <p>
                  <span style="color: #6d7e8f;">24小时最高</span>
                  <span style="margin-left:3px">¥73,268.44</span>
                </p>
              </li>
              <li>
                <p>
                  <span style="color: #6d7e8f;">24小时最低</span>
                  <span style="margin-left:3px">¥71,931.63</span>
                </p>
              </li>
              <li>
                <p>
                  <span style="color: #6d7e8f;">24小时成交量</span>
                  <span style="margin-left:8px">1，329，863张</span>
                  <span style="margin-left:3px">~</span>
                  <span style="margin-left:3px;color: #6d7e8f;">124,889,514 USDT</span>
                </p>
              </li>
            </ul>
            <span style="color: #3b85f5;">保险基金</span>
       </div> 
      <!-- 第一大行结束 --> 
      
      <!-- 第二大行 -->
      <div style="display: flex;">
          <!-- 成交记录 -->
          <div>
             <!-- 第一行 -->
             <div style="padding: 7px 23px;">成交记录</div>
             
             <!-- 第二行 -->
             <table class="bzjy_table" border="0" cellpadding="0" cellspacing="0" width="100%" style="padding: 6px;">
               <thead>
                 <tr>
                    <th style="width:110px">价格(USDT)</th>
                    <th style="width:110px">数量(张)</th>
                    <th style="width:110px">时间</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                    <td>9,433.96</td>
                    <td>30</td>
                    <td>16:13:19</td>
                 </tr>
                 <tr>
                    <td>9,433.96</td>
                    <td>30</td>
                    <td>16:13:19</td>
                 </tr>
                 <tr>
                    <td>9,433.96</td>
                    <td>30</td>
                    <td>16:13:19</td>
                 </tr>
                 <tr>
                    <td>9,433.96</td>
                    <td>30</td>
                    <td>16:13:19</td>
                 </tr>
                 <tr>
                    <td>9,433.96</td>
                    <td>30</td>
                    <td>16:13:19</td>
                 </tr>
                 <tr>
                    <td>9,433.96</td>
                    <td>30</td>
                    <td>16:13:19</td>
                 </tr>
                 <tr>
                    <td>9,433.96</td>
                    <td>30</td>
                    <td>16:13:19</td>
                 </tr>
                 <tr>
                    <td>9,433.96</td>
                    <td>30</td>
                    <td>16:13:19</td>
                 </tr>
                 <tr>
                    <td>9,433.96</td>
                    <td>30</td>
                    <td>16:13:19</td>
                 </tr>
                 <tr>
                    <td>9,433.96</td>
                    <td>30</td>
                    <td>16:13:19</td>
                 </tr>
                 <tr>
                    <td>9,433.96</td>
                    <td>30</td>
                    <td>16:13:19</td>
                 </tr>
                 <tr>
                    <td>9,433.96</td>
                    <td>30</td>
                    <td>16:13:19</td>
                 </tr>
                 <tr>
                    <td>9,433.96</td>
                    <td>30</td>
                    <td>16:13:19</td>
                 </tr>
                 <tr>
                    <td>9,433.96</td>
                    <td>30</td>
                    <td>16:13:19</td>
                 </tr>
                 <tr>
                    <td>9,433.96</td>
                    <td>30</td>
                    <td>16:13:19</td>
                 </tr>
                 <tr>
                    <td>9,433.96</td>
                    <td>30</td>
                    <td>16:13:19</td>
                 </tr>
                 <tr>
                    <td>9,433.96</td>
                    <td>30</td>
                    <td>16:13:19</td>
                 </tr>
               </tbody>
             </table>

          </div>
          
          <!-- k线图 -->
          <div style="flex-grow: 1;">
            <iframe id="" name="" src="" frameborder="0" allowtransparency="true" scrolling="no" allowfullscreen="" style="display: block; width: 100%; height: 420px;border-radius: 4px;background-color: #212733;border: 1px solid #212733;">

            </iframe>
          </div>


           <!-- 最新委托的块 -->
          <div style="flex-basis: 280px;border-radius: 4px;background-color: #212733;border: 1px solid #212733;" class="BibContent">
             <!-- 左侧第一行 -->
             <div style="display: flex;padding: 10px;justify-content: space-between;background-color: #2d3442;">
               <!-- 三个tab切换 -->
                <div>
                  <span>最新委托</span>
                </div>
                <div>
                  <span style="padding:5px;color: #3b85f5;font-weight: 600;border-bottom: 2px solid #3b85f5;" @click="filterLeft(1)">tab1</span>
                  <span style="padding:5px" @click="filterLeft(2)">tab2</span>
                  <span style="padding:5px" @click="filterLeft(3)">tab3</span>
                </div>
             </div>
             <!-- 左侧第一行结束 -->

             <table class="bzjy_table" border="0" cellpadding="0" cellspacing="0" width="100%" style="padding: 6px;">
               <thead>
                 <tr>
                    <th style="width:110px">价格(USDT)</th>
                    <th style="width:110px">数量(张)</th>
                    <th style="width:110px">总量(张)</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                    <td style="color:red">10224</td>
                    <td>0.2930</td>
                    <td>2990.3485</td>
                 </tr>
                 <tr>
                    <td style="color:red">2</td>
                    <td>0.2930</td>
                    <td>2990.3485</td>
                 </tr>
                 <tr>
                    <td style="color:red">3</td>
                    <td>0.2930</td>
                    <td>2990.3485</td>
                 </tr>
                 <tr>
                    <td style="color:red">4</td>
                    <td>0.2930</td>
                    <td>2990.3485</td>
                 </tr>
                 <tr>
                    <td style="color:red">5</td>
                    <td>0.2930</td>
                    <td>2990.3485</td>
                 </tr>
                 <tr>
                    <td style="color:red">6</td>
                    <td>0.2930</td>
                    <td>2990.3485</td>
                 </tr>
                 <tr>
                    <td style="color:red">7</td>
                    <td>0.2930</td>
                    <td>2990.3485</td>
                 </tr>
               </tbody>
             </table>
             
             <!-- 中间 -->
             <div style="text-align:center;">
               <p>10,165.0002 ≈ 72,790.68 CNY</p>
               <p><span>指数</span>165.0002 ≈ 72,790.68 CNY</p>
             </div>

             <table class="bzjy_table" border="0" cellpadding="0" cellspacing="0" width="100%" style="padding: 6px;">
               <thead>
                 <tr>
                    <th style="width:110px"></th>
                    <th style="width:110px"></th>
                    <th style="width:110px"></th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                    <td style="color:green">10224</td>
                    <td>0.2930</td>
                    <td>2990.3485</td>
                 </tr>
                 <tr>
                    <td style="color:green">2</td>
                    <td>0.2930</td>
                    <td>2990.3485</td>
                 </tr>
                 <tr>
                    <td style="color:green">3</td>
                    <td>0.2930</td>
                    <td>2990.3485</td>
                 </tr>
                 <tr>
                    <td style="color:green">4</td>
                    <td>0.2930</td>
                    <td>2990.3485</td>
                 </tr>
                 <tr>
                    <td style="color:green">5</td>
                    <td>0.2930</td>
                    <td>2990.3485</td>
                 </tr>
                 <tr>
                    <td style="color:green">6</td>
                    <td>0.2930</td>
                    <td>2990.3485</td>
                 </tr>
                 <tr>
                    <td style="color:green">7</td>
                    <td>0.2930</td>
                    <td>2990.3485</td>
                 </tr>
               </tbody>
             </table>


          </div>


      </div>
      <!-- 第二大行结束 -->

      <!-- 第三大行（包含仓位，当前委托，计划委托，冰山委托，历史委托） -->  
      <div>
        <!-- 第一小行 -->
        <div style="display: flex;justify-content: space-between;padding: 25px 30px 3px;" class="BibBottom">
          <div style="width: 462px;justify-content: space-between;display: flex;">
            <span style="padding: 5px;color: #3b85f5;font-weight: 600;border-bottom: 2px solid #3b85f5;">仓位</span>
            <span style="padding: 5px;">当前委托</span>
            <span style="padding: 5px;">计划委托</span>
            <span style="padding: 5px;">历史委托</span>
            <span style="padding: 5px;">成交记录</span>
          </div>
          <div style="display: flex;align-items: center;">
            <input type="checkBox"/>
            <span style="margin-left:5px">仅显示当前合约</span>
          </div>
        </div>

        <!-- 第二小行 -->
        <table class="bzjy_table" border="0" cellpadding="0" cellspacing="0" width="100%" style="padding: 6px;border-top: 1px solid #373535;">
            <thead>
              <tr>
                  <th>合约</th>
                  <th>仓位(张)</th>
                  <th>开仓均价</th>
                  <th>强平价格</th>
                  <th>杠杆	</th>
                  <th>保证金	</th>
                  <th>未实现盈亏</th>
                  <th>收益率</th>
                  <th>可平</th>
                  <th>平仓价格</th>
                  <th>数量</th>
                  <th>操作</th>
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
                  <td>11111</td>
                  <td>11111</td>
                  <td>11111</td>
                  <td>11111</td>
                  <td>查看</td>
              </tr>
            </tbody>
          </table>
      </div>

    </div>



</template>

<script>
// import FilterView from "../components/FilterView";
export default {
  name: "hyLeft",
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

.hyLeft {
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
