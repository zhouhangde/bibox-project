<template>
  <div class="home">

    <!-- 轮播及其他的内容 -->
    <div class="zh_banner">
      <div class="banner-content">
          <div style="position: absolute;top: 20px;height: 300px;width: 1200px;">

            <!-- 轮播+公告 -->
            <div style="display:flex">
              <!-- 轮播内容 -->
              <div style="width:900px;height:300px">
                <el-carousel width="900px" height="300px" :interval="4000"
                >
                  <el-carousel-item v-for="(item,index) in bannerList" :key="index">
                      <img :src="item" width="900px" height="300px"/>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <!-- 轮播内容结束 -->

              <!-- 公告内容模块 -->
              <div style="width:280px;height:300px;background-color: #142547;margin-left:20px;">
                <p style="padding:10px;display:flex;justify-content: space-between;color:#fff">
                  <span>公告</span>
                  <span>全部</span>
                </p>
                <div style="padding:10px;color:#fff;overflow: auto;height:258px;">
                   <ul>
                    <li style="margin-bottom:10px">
                      <p>Bibox Orbit恒星计划第三期圆满结束暨中签结果公布</p>
                      <p>2019-08-22 20:59:19</p>
                    </li>
                    <li style="margin-bottom:10px">
                      <p>Bibox Orbit恒星计划第三期圆满结束暨中签结果公布</p>
                      <p>2019-08-22 20:59:19</p>
                    </li>
                    <li style="margin-bottom:10px">
                      <p>Bibox Orbit恒星计划第三期圆满结束暨中签结果公布</p>
                      <p>2019-08-22 20:59:19</p>
                    </li>
                    <li style="margin-bottom:10px">
                      <p>Bibox Orbit恒星计划第三期圆满结束暨中签结果公布</p>
                      <p>2019-08-22 20:59:19</p>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- 公告内容模块结束 -->
            </div>  
            <!-- 轮播+公告结束 -->
            
            <!-- 下面的买币内容 -->
            <div style="width:1200px;height:100px;background-color: #317a6c;margin-top:20px;display: flex;align-items: center;justify-content: space-between;color:#fff">
               <!-- 第一个大块 -->
              <div style="display: flex;align-items: center;align-items: center;margin-left:127px">
                 <!-- 第一个块  -->
                <div style="display: flex;padding:10px;">
                  <img src="" style="width:30px;height:30px"/>
                  <div style="margin-left:6px">
                    <p>一键买币 USDT</p>
                    <p>单价约 7.09 CNY/USDT</p>
                  </div>
                </div>
                <!-- 第二个块  -->
                <div style="padding:10px;border-radius: 5px;background-color: #fff;">
                  <input placeholder="请输入购买金额"/>
                  <span style="color:#000">CNY</span>
                  <span style="color:#000;margin-left:4px">互转符号</span>
                </div>
                <!-- 第三个块  -->
                <div style="padding:10px;">
                    <button style="height:100%" class="blue-button">一键购买</button>  
                </div>
              </div>
              <!-- 第二个大块 -->  
              <div style="padding:10px;margin-right:30px">
                <span>查看订单</span>
                <span style="margin-left:6px">图标</span>
              </div>
            </div>
            <!-- 下面的买币内容结束 -->

          </div>  
       </div>
    </div>
    <!-- 轮播及其他的内容结束 -->


    <!-- 主体内容：除轮播等悬浮框的内容 -->
    <div style="padding-top: 72px;width: 1200px;margin: 0 auto;">

      <!-- 5种币的展示 -->
      <div>
        <ul style="display: flex;justify-content: space-between;padding: 10px;"> 
         <li>
           <p>
             <span>图标</span>
             <span>BTC/USDT</span>
             <span>+2.92%</span>
           </p>
           <p>10,404.0000</p>
           <p>¥ 73,811.45</p>
         </li>
         <li>
           <p>
             <span>图标</span>
             <span>BTC/USDT</span>
             <span>+2.92%</span>
           </p>
           <p>10,404.0000</p>
           <p>¥ 73,811.45</p>
         </li>
         <li>
           <p>
             <span>图标</span>
             <span>BTC/USDT</span>
             <span>+2.92%</span>
           </p>
           <p>10,404.0000</p>
           <p>¥ 73,811.45</p>
         </li>
         <li>
           <p>
             <span>图标</span>
             <span>BTC/USDT</span>
             <span>+2.92%</span>
           </p>
           <p>10,404.0000</p>
           <p>¥ 73,811.45</p>
         </li>
         <li>
           <p>
             <span>图标</span>
             <span>BTC/USDT</span>
             <span>+2.92%</span>
           </p>
           <p>10,404.0000</p>
           <p>¥ 73,811.45</p>
         </li>
       </ul>
      </div>
      <!-- 5种币的展示结束 -->

      <!-- 优质投资, 玩赚币圈 -->
      <div style="background-color: #fff;display: flex;align-items: center;justify-content: space-between;">
        <!-- 左侧 -->
        <div style="display: flex;align-items: center;background-color: #f5f6fa;width: 80%;height: 80px;justify-content: space-between;">
          <div style="padding: 10px;">
            <p>优质投资, 玩赚币圈</p>
            <p>立即注册</p>
          </div>

          <div style="display: flex;align-items: center;padding:10px">
            <div>
              <button class="tab-button" style="background: rgb(59, 133, 245);">注册</button>
              <button class="tab-button">一键买币</button>
              <button class="tab-button">划转</button>
              <button class="tab-button">交易</button>
            </div>
            <span style="margin-left: 20px;">1/4</span>
          </div>

        </div>
        <!-- 右侧 -->
        <div style="width: 19%;height: 80px;display: flex;align-items: center;justify-content: space-around;background-color: #243052;color: #fff;">
          <span>新手教程</span>
          <span>向右图标</span>
        </div>
      </div>
      <!-- 优质投资, 玩赚币圈结束 -->

      <!-- 中间的小卡片 -->
      <div style="width: 779px;margin: 10px auto;padding: 9px;background-color: rgb(34, 97, 236);border-radius: 18px;color: rgb(173, 227, 255);display: flex;justify-content: space-between;">
        <!-- 第一个 -->
        <div>
          <span>图标</span>
          <span>Staking 2.0</span>
          <span>持币即挖矿</span>
        </div>
        <!-- 第二个 -->
        <div>
          <span>19.91%</span>
          <span>收益</span>
          <span>图标</span>
          <span>BPY</span>
          <span>全球首发</span>
        </div>
        <!-- 第三个 -->
        <div>
          <span>前往</span>
          <span>向右箭头</span>
        </div>
  

      </div>


    </div>
    <!-- 主体内容：除轮播等悬浮框的内容结束 -->
    

    <!-- 币种切换tab -->
    <div style="width:1200px;margin:0 auto">
      <div>
        <ul style="display: flex;cursor: pointer;">
          <li style="padding: 6px 9px;" @click="filterData(0)" :style="{color:(currentIndex=='0'?'blue':'#000')}">自选</li>
          <li style="padding: 6px 9px;" @click="filterData(1)" :style="{color:(currentIndex=='1'?'blue':'#000')}">USD</li>
          <li style="padding: 6px 9px;" @click="filterData(2)" :style="{color:(currentIndex=='2'?'blue':'#000')}">BTC</li>
          <li style="padding: 6px 9px;" @click="filterData(3)" :style="{color:(currentIndex=='3'?'blue':'#000')}">EHT</li>
          <li style="padding: 6px 9px;" @click="filterData(4)" :style="{color:(currentIndex=='4'?'blue':'#000')}">BIX</li>
        </ul>
      </div>

      <div>
        <table  cellpadding="0" cellspacing="0" class="biTable">
          <thead style="background-color: #c3baba;"> 
            <tr>
              <th>市场</th>
              <th>最新成交价</th>
              <th>24小时涨跌幅</th>
              <th>24小时最高</th>
              <th>24小时最低</th>
              <th>24小时成交额</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in currentList" :key="index">
              <td>{{item.name1}}</td>
              <td>{{item.name2}}</td>
              <td>{{item.name3}}</td>
              <td>{{item.name4}}</td>
              <td>{{item.name5}}</td>
              <td>{{item.name6}}</td>
            </tr>
          </tbody>
        </table>
      </div>
   </div>
   <!-- 币种切换tab结束 -->

   <hr style="display: block;height: 1px;border: 0;border-top: 1px solid #ccc;margin: 60px 0;padding: 0;"/>

   <!-- 5个导航显示 -->
   <div style="width: 1200px;margin: 0 auto;">
     <ul style="display: flex;justify-content: space-between;">
       <li style="text-align: center;">
         <div style="padding: 10px 0;">
           <img src="" style="width:30px;height:30px"/>
         </div>
         <p style="padding: 10px 0;">强健安全体系</p>
         <p style="padding: 1px 0;">AI 技术及微服务拆分设计应用，</p>
         <p style="padding: 1px 0;">智能提升交易安全系数</p>
       </li>
       <li style="text-align: center;">
         <div style="padding: 10px 0;">
           <img src="" style="width:30px;height:30px"/>
         </div>
         <p style="padding: 10px 0;">强健安全体系</p>
         <p style="padding: 1px 0;">AI 技术及微服务拆分设计应用，</p>
         <p style="padding: 1px 0;">智能提升交易安全系数</p>
       </li>
       <li style="text-align: center;">
         <div style="padding: 10px 0;">
           <img src="" style="width:30px;height:30px"/>
         </div>
         <p style="padding: 10px 0;">强健安全体系</p>
         <p style="padding: 1px 0;">AI 技术及微服务拆分设计应用，</p>
         <p style="padding: 1px 0;">智能提升交易安全系数</p>
       </li>
       <li style="text-align: center;">
         <div style="padding: 10px 0;">
           <img src="" style="width:30px;height:30px"/>
         </div>
         <p style="padding: 10px 0;">强健安全体系</p>
         <p style="padding: 1px 0;">AI 技术及微服务拆分设计应用，</p>
         <p style="padding: 1px 0;">智能提升交易安全系数</p>
       </li>
       <li style="text-align: center;">
         <div style="padding: 10px 0;">
           <img src="" style="width:30px;height:30px"/>
         </div>
         <p style="padding: 10px 0;">强健安全体系</p>
         <p style="padding: 1px 0;">AI 技术及微服务拆分设计应用，</p>
         <p style="padding: 1px 0;">智能提升交易安全系数</p>
       </li>
     </ul>
   </div>
   <!-- 5个导航显示结束 -->

   <!-- bibox官方app下载 -->
   <div style="background-color: #1d3566;color: #fff;padding-top: 30px;margin-top: 40px;">
      <div style="width: 1200px;margin: 0 auto;">
        <p style="text-align: center;padding: 15px 0;">Bibox 官方 App 下载</p>

        <div>
          <ul style="display: flex;justify-content: center;align-items: center;padding: 15px 0;">
            <li style="display: flex;align-items: center;padding: 15px 30px;">
              <img src="" style="width:40px;height:40px"/>
              <span style="margin-left:15px">Iphone</span>
            </li>
            <li style="display: flex;align-items: center;padding: 15px 30px">
              <img src="" style="width:40px;height:40px"/>
              <span style="margin-left:15px">Android</span>
            </li>
            <li style="display: flex;align-items: center;padding: 15px 30px">
              <img src="" style="width:40px;height:40px"/>
              <span style="margin-left:15px">windows</span>
            </li>
            <li style="display: flex;align-items: center;padding: 15px 30px">
              <img src="" style="width:40px;height:40px"/>
              <span style="margin-left:15px">Mas os</span>
            </li>
          </ul>
        </div>
          
          <div style="text-align:center"> 
            <img src="../assets/img/footter.png" style="width:100%;"/>
          </div>

      </div>
   </div>
    <!-- bibox官方app下载结束 -->


    <!-- 底部的帮助中心 -->
    <div style="background-color: #101929;color: #ffff;padding: 30px 0;">
       <div style="width: 1200px;margin: 0 auto;">
          <!-- 帮助列表第一行 -->
          <div>
            <ul style="display: flex;justify-content: space-between;">
              <li class="zh-footer-li">
                <p>
                  <span>图标</span>
                  <span>提交工单</span>
                </p>
                <p>
                  <span>图标</span>
                  <span>加入我们</span>
                </p>
                <p>
                  <span>图标</span>
                  <span>费率标准</span>
                </p>
              </li>
              <li class="zh-footer-li">
                <p>
                  <span>产品</span>
                </p>
                <p>
                  <span>上币申请</span>
                </p>
                <p>
                  <span>存币宝</span>
                </p>
                <p>
                  <span>Lab</span>
                </p>
                <p>
                  <span>API接入</span>
                </p>
                <p>
                  <span>Bibox通证债券</span>
                </p>
              </li>
              <li class="zh-footer-li">
                <p>
                  <span>公告帮助</span>
                </p>
                <p>
                  <span>官方公告</span>
                </p>
                <p>
                  <span>帮助中心</span>
                </p>
                <p>
                  <span>用户协议</span>
                </p>
                <p>
                  <span>隐私政策</span>
                </p>
              </li>
              <li class="zh-footer-li">
                <p>
                  <span>联系我们</span>
                </p>
                <p>
                  <span>Telegram-中文</span>
                </p>
                <p>
                  <span>Telegram-English</span>
                </p>
                <p>
                  <span>Telegram-한국어</span>
                </p>
                <p>
                  <span>微信客服: BiboxKf-03</span>
                </p>
                 <p>
                  <span>官方邮箱:service@bibox.zendesk.com</span>
                </p>
              </li>
              <li class="zh-footer-li">
                <p>
                  <span>社交媒体</span>
                </p>
                <p>
                  <span>Facebook</span>
                </p>
                <p>
                  <span>Twitter</span>
                </p>
                <p>
                  <span>Reddit</span>
                </p>
                <p>
                  <span>Weibo</span>
                </p>
                 <p>
                  <span>Medium</span>
                </p>
                <p>
                  <span>BiYong</span>
                </p>
              </li>
            </ul>
          </div>
           <!-- 第二行 -->
          <div style="padding: 17px 0;">
            <span>图标</span>
            <span style="margin-left:6px">LinkCoin</span>
            <span style="margin-left:14px">C2C服务由合作伙伴 LinkCoin 提供技术及服务支持</span>
          </div>
          
          <!-- 第三行 -->
          <div>
            <span style="margin-right:15px">友情链接</span>
            <span style="margin-right:15px">LinkCoin</span>
            <span style="margin-right:15px">CoinPark</span>
            <span style="margin-right:15px">RatingToken</span>
            <span style="margin-right:15px">玩币族</span>
            <span style="margin-right:15px">BITCOIN86</span>
            <span style="margin-right:15px">陀螺财经</span>
            <span style="margin-right:15px">链向财经</span>
            <span style="margin-right:15px">共享财经</span>
            <span style="margin-right:15px">BITKAN</span>
            <span style="margin-right:15px">Block123</span>
            <span style="margin-right:15px">F2Pool鱼池</span>
            <span style="margin-right:15px">Cobo钱包</span>
            <span style="margin-right:15px">降维安全实验室</span>
            <span style="margin-right:15px">链得得</span>
            <span>CoinGecko</span>
          </div>

       </div>
    </div>
    <!-- 底部的帮助中心结束 -->



   </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      // 轮播
       bannerList:[
        require('../../public/img/banner1.png'),
        require('../../public/img/banner2.png'),
        require('../../public/img/banner3.png')
      ],
      // 6个币种tab的切换
      currentIndex:0,  //当前的tab的index
      currentList:[],
      tabList:{
        usdtData:[
          {
            name1:'BTC/USDT',
            name2:'10312.89',
            name3:'-0.81%',
            name4:'10440.00',
            name5:'10270.11',     
            name6:'9825.63'
          },
          {
            name1:'BTC/USDT',
            name2:'10312.89',
            name3:'-0.81%',
            name4:'10440.00',
            name5:'10270.11',     
            name6:'9825.63'
          },
          {
            name1:'BTC/USDT',
            name2:'10312.89',
            name3:'-0.81%',
            name4:'10440.00',
            name5:'10270.11',     
            name6:'9825.63'
          },
          {
            name1:'BTC/USDT',
            name2:'10312.89',
            name3:'-0.81%',
            name4:'10440.00',
            name5:'10270.11',     
            name6:'9825.63'
          },
          {
            name1:'BTC/USDT',
            name2:'10312.89',
            name3:'-0.81%',
            name4:'10440.00',
            name5:'10270.11',     
            name6:'9825.63'
          },
          {
            name1:'BTC/USDT',
            name2:'10312.89',
            name3:'-0.81%',
            name4:'10440.00',
            name5:'10270.11',     
            name6:'9825.63'
          },
          {
            name1:'BTC/USDT',
            name2:'10312.89',
            name3:'-0.81%',
            name4:'10440.00',
            name5:'10270.11',     
            name6:'9825.63'
          }
        ],
        btcData:[
          {
            name1:'22',
            name2:'22',
            name3:'22',
            name4:'22',
            name5:'22',     
            name6:'22'
          }
        ],
        ethData:[
          {
           name1:'33',
           name2:'33',
           name3:'33',
           name4:'33',
           name5:'33',     
           name6:'33',
          }
        ],
        zxData:[
          {
           name1:'44',
           name2:'44',
           name3:'44',
           name4:'44',
           name5:'44',     
           name6:'44',
          }
        ],
        bixData:[
          {
           name1:'55',
           name2:'44',
           name3:'44',
           name4:'44',
           name5:'44',     
           name6:'44',
          }
        ]
      }
      // 6个币种tab的切换结束
    }
  },
  computed: {
    address() {
    }
  },
  created() {
    this.loadData();
  },
  methods: {
    // tab切换点击
    filterData(index) {
      this.currentIndex = index
      this.loadData();
    },
    loadData(){
      if(this.currentIndex == 0){
         this.currentList = this.tabList.usdtData
      }else if(this.currentIndex == 1){
         this.currentList = this.tabList.btcData
      }else if(this.currentIndex == 2){
         this.currentList = this.tabList.ethData
      }else if(this.currentIndex == 3){
         this.currentList = this.tabList.zxData
      }else if(this.currentIndex == 4){
         this.currentList = this.tabList.bixData
      }
      
    }
    
  },
  components: {
    
  }
};
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.home {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  
}
.zh_banner{
  background-color: #131625;

}
.banner-content{
  width:1200px;
  margin:0 auto;
  position: relative;
   height: 381px;
   
}

.blue-button{
  height: 100%;
  background: rgb(59, 133, 245);
  padding: 7px 20px;
  border-radius: 5px;
  color: #ffff;
}

.tab-button{
  padding: 15px 60px;
  border-radius: 5px;
  color: #ffff;
  margin: 0px 3px;
  background-color: #fff;
  color: #000;
}

/* 6个币种tab的切换 */
.biTable{
  width:100%
}


.biTable th{
   padding: 5px 10px;
   text-align: center
}

.biTable td{
   padding: 5px 10px;
   border-bottom: 1px solid #c4bcbc;
   text-align: center
}

.zh-footer-li{
  padding: 10px;
}
.zh-footer-li p{
  padding: 3px 0;
}
</style>