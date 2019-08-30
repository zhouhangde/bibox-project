<template>
  <div class="jkfk">
    <div style="width:1200px;margin:0 auto">
      
      <!-- 第一行 -->
      <div style="text-align: center;padding: 24px 0;">
        <button style="background: #3b85f5;color: #fff;font-weight: 600;border-radius: 4px 0 0 4px;padding: 6px 50px;">我要借款</button>
        <button style="font-weight: 600;border-radius: 4px 0 0 4px;padding: 6px 50px;background-color: #f0ebeb;">我要放款</button>
      </div>
      
      <!-- 第二行 -->
      <div style="display: flex;align-items: center;justify-content: space-between;">
        <!-- 左侧块 -->
        <div style="display: flex;" class="jkfk_left">
          <!-- 从左第一个 -->
          <div style="padding-right:30px;border-right: 1px solid #eee;">
            <p>我要借款</p>
            <p>BTC/USDT<span>下拉</span></p>
          </div>
          
          <!-- 从左第二个 -->
          <div style="padding:0 30px">
            <p>可用 BTC</p>
            <p>
              <span>0.00000000</span>
              <span>资金划转</span>
            </p>
          </div>
          
          <!-- 从左第三个 -->
          <div style="padding-right:30px"> 
            <p>可用 USDT</p>
            <p>
              <span>0.0000</span>
              <span>资金划转</span>
            </p>
          </div>

          <!-- 从左第四个 -->
          <div style="padding-right:30px">
            <p>保证金率</p>
            <p>
              <span>-</span>
            </p>
          </div>

          <!-- 从左第五个 -->
          <div style="padding-right:30px">
            <p>爆仓价</p>
            <p>
              <span>-</span>
            </p>
          </div>

          <!-- 从左第六个 -->
          <div style="padding-right:30px">
            <p>杠杆倍数</p>
            <p>
              <span>3.0</span>
            </p>
          </div>
       </div>
      
       <!-- 右侧块 -->
       <div>
          <button style="border: 1px solid #e6e6e6;padding: 9px 16px;color: blue;">去交易</button>
          <button style="border: 1px solid rgb(230, 230, 230);padding: 12px 15px;margin-left: 8px;border-radius: 100%;">...</button>
       </div>

      </div>
      <!-- 第二行结束 -->
      
      <!-- 第三行 -->
      <div style="display: flex;margin-top:20px;border: 1px solid #eee8e8;">
        <!-- 左侧 -->
        <div>
            <div style="border-bottom: 1px solid #d4c7c7;margin-top: 22px;">
                <div style="padding:8px 0px 8px 24px">
                  <span>图标</span>
                  <span style="margin-left:15px">闪借</span>
                </div>
                <div style="padding:8px 0px 8px 24px">
                  <span>图标</span>
                  <span style="margin-left:15px">一键借款</span>
                </div>
                <div style="padding:8px 0px 8px 24px"> 
                  <span>图标</span>
                  <span style="margin-left:15px">手动借款</span>
                </div>
            </div>
            <p style="text-align:center;padding: 9px;">平台推出多种借款方式供您选择</p>
        </div>
        <!-- 左侧结束 -->  

        <!-- 右侧 -->
        <div style="padding: 26px;flex-grow: 1;">
          <!-- 第一大行 -->
          <div>
             <p style="padding: 4px 0;font-size: 16px;">手动借款</p>
             <p style="padding: 4px 0;">从用户放款列表中手动选择借款</p>
          </div>

          <!-- 第二大行  -->
          <div style="display: flex;margin-top: 20px;">
            <!-- 左侧 -->
            <div style="width: 630px;">
               <!-- 第一小行 -->
               <div style="display: flex;justify-content: space-around;">
                 <div style="color: #3b85f5;font-weight: 600;border-bottom: 2px solid #3b85f5;padding-bottom: 6px;flex-grow: 1;text-align: center;">
                   <span>图标</span>
                   <span style="margin-left:6px">BTC</span>
                 </div>
                 <div style="flex-grow: 1;text-align: center;border-bottom: 2px solid rgb(232, 223, 223);">
                   <span>图标</span>
                   <span style="margin-left:6px">USDT</span>
                 </div>
               </div>

               <!-- 第二小行 -->
               <table class="bzjy_table" border="0" cellpadding="0" cellspacing="0" width="100%" style="padding: 6px;">
                 <thead>
                    <tr>
                        <th style="width:110px">日费率</th>
                        <th style="width:110px">放款数量</th>
                        <th style="width:110px">可借数量</th>
                        <th></th>
                    </tr>
                 </thead>
                  <tbody>
                    <tr>
                        <td>10224.0000</td>
                        <td>0.2930</td>
                        <td>15:32:35</td>
                        <td>
                          <button style="padding: 3px 16px;background: #579aff;border-radius: 12px;color: #fff;">借款</button>
                        </td>
                    </tr>
                    <tr>
                        <td>10224.0000</td>
                        <td>0.2930</td>
                        <td>15:32:35</td>
                        <td>
                          <button style="padding: 3px 16px;background: #579aff;border-radius: 12px;color: #fff;">借款</button>
                        </td>
                    </tr>
                    <tr>
                        <td>10224.0000</td>
                        <td>0.2930</td>
                        <td>15:32:35</td>
                        <td>
                          <button style="padding: 3px 16px;background: #579aff;border-radius: 12px;color: #fff;">借款</button>
                        </td>
                    </tr>
                    <tr>
                        <td>10224.0000</td>
                        <td>0.2930</td>
                        <td>15:32:35</td>
                        <td>
                          <button style="padding: 3px 16px;background: #579aff;border-radius: 12px;color: #fff;">借款</button>
                        </td>
                    </tr>
                    <tr>
                        <td>10224.0000</td>
                        <td>0.2930</td>
                        <td>15:32:35</td>
                        <td>
                          <button style="padding: 3px 16px;background: #579aff;border-radius: 12px;color: #fff;">借款</button>
                        </td>
                    </tr>
                    <tr>
                        <td>10224.0000</td>
                        <td>0.2930</td>
                        <td>15:32:35</td>
                        <td>
                          <button style="padding: 3px 16px;background: #579aff;border-radius: 12px;color: #fff;">借款</button>
                        </td>
                    </tr>
                    <tr>
                        <td>10224.0000</td>
                        <td>0.2930</td>
                        <td>15:32:35</td>
                        <td>
                          <button style="padding: 3px 16px;background: #579aff;border-radius: 12px;color: #fff;">借款</button>
                        </td>
                    </tr>
                    <tr>
                        <td>10224.0000</td>
                        <td>0.2930</td>
                        <td>15:32:35</td>
                        <td>
                          <button style="padding: 3px 16px;background: #579aff;border-radius: 12px;color: #fff;">借款</button>
                        </td>
                    </tr>
                    <tr>
                        <td>10224.0000</td>
                        <td>0.2930</td>
                        <td>15:32:35</td>
                        <td>
                          <button style="padding: 3px 16px;background: #579aff;border-radius: 12px;color: #fff;">借款</button>
                        </td>
                    </tr>
                    <tr>
                        <td>10224.0000</td>
                        <td>0.2930</td>
                        <td>15:32:35</td>
                        <td>
                          <button style="padding: 3px 16px;background: #579aff;border-radius: 12px;color: #fff;">借款</button>
                        </td>
                    </tr>
                  </tbody>
             </table> 

            </div>
            
            <!-- 右侧 -->
            <div style="padding: 0px 15px;">
              <div>BTC 指数</div>
              <div style="margin-top: 6px;">9490.4035 USDT +0.33%</div>
              <div style="height: 295px;border: 1px solid #eae5e5;margin-top: 6px;">
                <img src="" style="width:100%;height: 100%;"/>
              </div>
              <p style="margin-top: 6px;">价格指数</p>
              <p style="margin-top: 6px;">Bibox基于 CoinMarketCap、CoinCap、Binance、Bitfinex、Bibox，5家数字资产交易平台的价格信息，加权计算得出当前的价格指数。</p>
            </div>


          </div>

        </div>
        

      </div>



    </div>
  </div>
</template>

<script>
// import FilterView from "../components/FilterView";
export default {
  name: "jkfk",
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

.jkfk {
  width: 100%;
  height: 800px;
  overflow: auto;
  box-sizing: border-box;
}

.jkfk_left p{
  padding:3px 
}

.bzjy_table th{
  text-align: center;
  padding: 7px 2px;
  border-bottom: 1px solid #e2d9d9;
}

.bzjy_table td{
  text-align: center;
  padding: 7px 2px;
  border-bottom: 1px solid #e2d9d9;
}
</style>
