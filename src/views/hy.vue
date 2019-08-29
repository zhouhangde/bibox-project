<template>
  <div class="hyyi"  style="background-color: #1d2129;color:#fff">
    <!-- 左侧 -->
    <div style="width:1300px;">
       <!-- 第一行 -->
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
      <!-- 第一行结束 --> 
      
      <!-- 第二行 -->
      <div>
          <!-- 成交记录 -->
          <div>
             <!-- 第一行 -->
             <div>成交记录</div>
             
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
               </tbody>
             </table>

          </div>


      </div>



    
    
    
    </div>
    <!-- 左侧结束 -->


  </div>
</template>

<script>
// import FilterView from "../components/FilterView";
export default {
  name: "hyyi",
  data() {
    return {
    };
  },
  computed: {
    address() {
    }
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

.hyyi {
  width: 100%;
  height: 800px;
  overflow: auto;
  box-sizing: border-box;
}

.bzjy_header li p{
  padding:3px 10px
}

</style>
