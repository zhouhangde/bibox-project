<template>
  <div style="display: flex;flex-direction: column;" class="QpyjRight">
        <!-- 右侧的第一行 -->
        <div style="display: flex;height: 530px;">
          <!-- 右侧的第一行左侧一个 -->
          <div style="display: flex;flex-direction: column;">
              <!-- 第一行 -->
              <div style="display: flex;padding: 10px;justify-content: space-between;background-color: #2d3442;">
                <!-- 三个tab切换 -->
                  <div>
                    <span style="padding:5px;color: #3b85f5;font-weight: 600;border-bottom: 2px solid #3b85f5;" @click="filterLeft(1)">tab1</span>
                    <span style="padding:5px" @click="filterLeft(2)">tab2</span>
                    <span style="padding:5px" @click="filterLeft(3)">tab3</span>
                  </div>
                  <div>
                    <span>合并深度:</span>
                    <span>4位小数</span>
                  </div>
              </div>
              <!-- 第一行结束 -->
              
              <!-- 第二行 -->
              <table class="bzjy_table" border="0" cellpadding="0" cellspacing="0" width="100%" style="padding: 6px;">
                <thead>
                  <tr>
                      <th style="width:110px">价格(USDT)</th>
                      <th style="width:110px">数量(BTC)</th>
                      <th style="width:110px">金额(USDT)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                      <td>6</td>
                      <td>0.2930</td>
                      <td>2990.3485</td>
                  </tr>
                  <tr>
                      <td>7</td>
                      <td>0.2930</td>
                      <td>2990.3485</td>
                  </tr>
                  <tr>
                      <td>8</td>
                      <td>0.2930</td>
                      <td>2990.3485</td>
                  </tr>
                  <tr>
                      <td>9</td>
                      <td>0.2930</td>
                      <td>2990.3485</td>
                  </tr>
                  <tr>
                      <td>10</td>
                      <td>0.2930</td>
                      <td>2990.3485</td>
                  </tr>
                  <tr>
                      <td>11</td>
                      <td>0.2930</td>
                      <td>2990.3485</td>
                  </tr>
                  <tr>
                      <td>12</td>
                      <td>0.2930</td>
                      <td>2990.3485</td>
                  </tr>
                  <tr>
                      <td>13</td>
                      <td>0.2930</td>
                      <td>2990.3485</td>
                  </tr>
                  <tr>
                      <td>14</td>
                      <td>0.2930</td>
                      <td>2990.3485</td>
                  </tr>
                  <tr>
                      <td>15</td>
                      <td>0.2930</td>
                      <td>2990.3485</td>
                  </tr>
                </tbody>
              </table>
              <!-- 第二行结束 -->

              <!-- 第三行 -->
              <div style="text-align:center;">
                10,165.0002 ≈ 72,790.68 CNY
              </div>
              
              <!-- 第四行 -->
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
                      <td>10224</td>
                      <td>0.2930</td>
                      <td>2990.3485</td>
                  </tr>
                  <tr>
                      <td>2</td>
                      <td>0.2930</td>
                      <td>2990.3485</td>
                  </tr>
                  <tr>
                      <td>3</td>
                      <td>0.2930</td>
                      <td>2990.3485</td>
                  </tr>
                  <tr>
                      <td>4</td>
                      <td>0.2930</td>
                      <td>2990.3485</td>
                  </tr>
                  <tr>
                      <td>5</td>
                      <td>0.2930</td>
                      <td>2990.3485</td>
                  </tr>
                  <tr>
                      <td>6</td>
                      <td>0.2930</td>
                      <td>2990.3485</td>
                  </tr>
                  <tr>
                      <td>7</td>
                      <td>0.2930</td>
                      <td>2990.3485</td>
                  </tr>
                  <tr>
                      <td>8</td>
                      <td>0.2930</td>
                      <td>2990.3485</td>
                  </tr>
                  <tr>
                      <td>9</td>
                      <td>0.2930</td>
                      <td>2990.3485</td>
                  </tr>
                  <tr>
                      <td>10</td>
                      <td>0.2930</td>
                      <td>2990.3485</td>
                  </tr>
                </tbody>
              </table>

          </div>
          <!-- 右侧的第一行左侧一个结束 -->

            <!-- 右侧的第一行右侧一个 -->
            <div style="flex-basis: 280px;background-color: rgb(33, 39, 51);border: 1px solid rgb(33, 39, 51);">
              <div style="text-align:center;padding:10px;background-color: rgb(45, 52, 66);">最新成交</div>
              <div style="padding: 7px;display: flex;justify-content: space-around;">
                <span style="padding: 5px;color: #3b85f5;font-weight: 600;border-bottom: 2px solid #3b85f5;">市场</span>
                <span style="padding: 5px;">我的</span>
              </div>
              <table class="bzjy_table" border="0" cellpadding="0" cellspacing="0" width="100%" style="padding: 6px;">
                <tbody>
                  <tr>
                      <td>1</td>
                      <td>0.2930</td>
                      <td>15:32:35</td>
                  </tr>
                  <tr>
                      <td>2</td>
                      <td>0.2930</td>
                      <td>15:32:35</td>
                  </tr>
                  <tr>
                      <td>3</td>
                      <td>0.2930</td>
                      <td>15:32:35</td>
                  </tr>
                  <tr>
                      <td>4</td>
                      <td>0.2930</td>
                      <td>15:32:35</td>
                  </tr>
                  <tr>
                      <td>5</td>
                      <td>0.2930</td>
                      <td>15:32:35</td>
                  </tr>
                  <tr>
                      <td>6</td>
                      <td>0.2930</td>
                      <td>15:32:35</td>
                  </tr>
                  <tr>
                      <td>7</td>
                      <td>0.2930</td>
                      <td>15:32:35</td>
                  </tr>
                  <tr>
                      <td>8</td>
                      <td>0.2930</td>
                      <td>15:32:35</td>
                  </tr>
                  <tr>
                      <td>9</td>
                      <td>0.2930</td>
                      <td>15:32:35</td>
                  </tr>
                  <tr>
                      <td>10</td>
                      <td>0.2930</td>
                      <td>15:32:35</td>
                  </tr>
                  <tr>
                      <td>11</td>
                      <td>0.2930</td>
                      <td>15:32:35</td>
                  </tr>
                  <tr>
                      <td>12</td>
                      <td>0.2930</td>
                      <td>15:32:35</td>
                  </tr>
                  <tr>
                      <td>13</td>
                      <td>0.2930</td>
                      <td>15:32:35</td>
                  </tr>
                  <tr>
                      <td>14</td>
                      <td>0.2930</td>
                      <td>15:32:35</td>
                  </tr>
                  <tr>
                      <td>15</td>
                      <td>0.2930</td>
                      <td>15:32:35</td>
                  </tr>
                  <tr>
                      <td>16</td>
                      <td>0.2930</td>
                      <td>15:32:35</td>
                  </tr>
                  <tr>
                      <td>17</td>
                      <td>0.2930</td>
                      <td>15:32:35</td>
                  </tr>
                  <tr>
                      <td>18</td>
                      <td>0.2930</td>
                      <td>15:32:35</td>
                  </tr>
                  <tr>
                      <td>19</td>
                      <td>0.2930</td>
                      <td>15:32:35</td>
                  </tr>
                  <tr>
                      <td>20</td>
                      <td>0.2930</td>
                      <td>15:32:35</td>
                  </tr>
                </tbody>
              </table> 
            </div>
            <!-- 右侧的第一行右侧一个结束 -->
        </div> 
        <!-- 右侧的第一行结束 -->

        <!-- 右侧的第二行 -->
        <div style="border-radius: 4px;background-color: rgb(33, 39, 51);border: 1px solid #484646;padding: 15px 0;">
          <!-- tab切换 -->
          <div style="padding:10px 20px 6px">
            <span style="padding:5px 20px;color: #3b85f5;font-weight: 600;border-bottom: 2px solid #3b85f5;">限价委托</span>
            <span style="padding:5px 20px">计划委托</span>
            <span style="padding:5px 20px">冰山委托</span>
          </div>
          <div style="display: flex;justify-content: space-between;">
            <!-- 左侧的块 -->
            <div style="padding:10px;display: flex;flex-direction: column;flex-grow: 1;border-right: 1px double rgb(45, 52, 66);">
              <!-- 第一行 -->
              <div style="display: flex;justify-content: space-between;padding: 10px 0;">
                <span>买入BTC</span>
                <p>
                  <span>USDT</span>
                  <span>可用:0.00000000</span>
                  <span>互转图标</span>
                </p>
              </div>
              <!-- 第二行 -->
              <div style="border: 1px solid #000;margin-top: 8px;padding: 5px;background-color: rgb(45, 52, 66);border-radius: 4px;border: 1px solid rgb(45, 52, 66);display: flex;justify-content: space-between;"> 
                <span>买价</span>
                <input style="width:150px" placeholder="10154.7000"/>
                <span>USDT</span>
              </div>
              <!-- 第三行 -->
              <div style="padding:4px 68px">
                ≈ 72716.92CNY
              </div>
              <!-- 第四行 -->
              <div style="background-color: rgb(45, 52, 66);border-radius: 4px;border: 1px solid rgb(45, 52, 66);margin-top: 8px;padding: 5px;display: flex;justify-content: space-between;"> 
                <span>数量</span>
                <input style="width:150px" placeholder="0.0000"/>
                <span>BTC</span>
              </div>

              <!-- 第五行 -->
              <div style="padding: 2px 37px;display: flex;justify-content: space-between;border: 1px dashed #000;margin-top: 8px;">
                <span>25%</span>
                <span>50%</span>
                <span>75%</span>
                <span>100%</span>
              </div>

              <!-- 第六行 -->
              <div style="background-color: rgb(45, 52, 66);border-radius: 4px;border: 1px solid rgb(45, 52, 66);margin-top: 8px;padding: 5px;display: flex;justify-content: space-between;"> 
                <span>金额</span>
                <input style="width:150px" placeholder="10154.7000"/>
                <span>USDT</span>
              </div>

              <button style="padding: 10px;color: #fff;background-color: green;margin-top: 15px;">买入</button>

            </div>

            <!-- 右侧的块 -->
            <div style="padding:10px;display: flex;flex-direction: column;flex-grow: 1;">
              <!-- 第一行 -->
              <div style="display: flex;justify-content: space-between;padding: 10px 0;">
                <span>卖出BTC</span>
                <p>
                  <span>BTC</span>
                  <span>可用:0.00000000</span>
                  <span>互转图标</span>
                </p>
              </div>
              <!-- 第二行 -->
              <div style="background-color: rgb(45, 52, 66);border-radius: 4px;border: 1px solid rgb(45, 52, 66);margin-top: 8px;padding: 5px;display: flex;justify-content: space-between;"> 
                <span>卖价</span>
                <input style="width:150px" placeholder="10154.7000"/>
                <span>USDT</span>
              </div>
              <!-- 第三行 -->
              <div style="padding:4px 68px">
                ≈ 72716.92CNY
              </div>
              <!-- 第四行 -->
              <div style="background-color: rgb(45, 52, 66);border-radius: 4px;border: 1px solid rgb(45, 52, 66);margin-top: 8px;padding: 5px;display: flex;justify-content: space-between;"> 
                <span>数量</span>
                <input style="width:150px" placeholder="0.0000"/>
                <span>BTC</span>
              </div>

              <!-- 第五行 -->
              <div style="padding: 2px 37px;display: flex;justify-content: space-between;border: 1px dashed #000;margin-top: 8px;">
                <span>25%</span>
                <span>50%</span>
                <span>75%</span>
                <span>100%</span>
              </div>

              <!-- 第六行 -->
              <div style="background-color: rgb(45, 52, 66);border-radius: 4px;border: 1px solid rgb(45, 52, 66);margin-top: 8px;padding: 5px;display: flex;justify-content: space-between;"> 
                <span>金额</span>
                <input style="width:150px" placeholder="10154.7000"/>
                <span>USDT</span>
              </div>

              <button style="padding: 10px;color: #fff;background-color: red;margin-top: 15px;">卖出</button>

            </div>

          </div>
        </div>
        <!-- 右侧的第二行结束 -->

      </div>
</template>

<script>
// import FilterView from "../components/FilterView";
export default {
  name: "QpyjRight",
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

.QpyjRight {
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
