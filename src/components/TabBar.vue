<template>
  <div class="tabbar">
    <!-- 左侧的导航 -->
    <div class="tab-router">
         <!-- 首页 -->
        <router-link to="/home" active-class="is-selected" class="tab-item">
            <div class="tab-item-label">Bibox</div>
        </router-link>

        <!-- 图标 -->
        <a class="xiala tab-item" @click="showTb = !showTb">
           <div class="tab-item-label theLable">图标</div>
           <ul class="theUl" v-if="showTb">
             <li>
               <img src="" width="30px" height="30px"/>
               <div>
                 <p>staking</p>
                 <p>节点投币，赚取节点收益</p>
               </div>
             </li>
             <li>
               <img src="" width="30px" height="30px"/>
               <div>
                 <p>Lab</p>
                 <p>节点投币，赚取节点收益</p>
               </div>
             </li>
             <li>
               <img src="" width="30px" height="30px"/>
               <div>
                 <p>Dex</p>
                 <p>节点投币，赚取节点收益</p>
               </div>
             </li>
             <li>
               <img src="" width="30px" height="30px"/>
               <div>
                 <p>上币申请</p>
                 <p>节点投币，赚取节点收益</p>
               </div>
             </li>
             <li>
               <img src="" width="30px" height="30px"/>
               <div>
                 <p>BIX应用介绍</p>
                 <p>节点投币，赚取节点收益</p>
               </div>
             </li>
             <li>
               <img src="" width="30px" height="30px"/>
               <div>
                 <p>信用卡一键买币</p>
                 <p>节点投币，赚取节点收益</p>
               </div>
             </li>
             <li>
               <img src="" width="30px" height="30px"/>
               <div>
                 <p>新手福利</p>
                 <p>节点投币，赚取节点收益</p>
               </div>
             </li>
           </ul>
        </a>
        
        <!-- 币币 -->
        <a class="xiala tab-item" @click="showBb = !showBb">
           <div class="tab-item-label">币币</div>
           <ul class="showBb" v-if="showBb">
             <li>
               <P>标准交易</P>
               <P>全屏交易</P>
             </li>
           </ul>
        </a>
        
        <!-- 杠杆 -->
        <router-link to="/gangai" active-class="is-selected" class="tab-item">
           <div class="tab-item-label">杠杆</div>
        </router-link>

        <!-- 合约 -->
        <router-link to="/heyu" active-class="is-selected" class="tab-item">
            <div class="tab-item-label">合约</div>
        </router-link>

        <!-- 法币交易 -->
        <router-link to="/heyu" active-class="is-selected" class="tab-item">
            <div class="tab-item-label">法币交易</div>
        </router-link>

        <!-- Bibox合伙人 -->
        <a to="/heyu"  class="xiala tab-item" @click="showHhr = !showHhr">
            <div class="tab-item-label">Bibox合伙人</div>
            <ul class="showHhr" v-if="showHhr">
             <li>
               <P>盒芯计划</P>
               <P>城市合伙人</P>
             </li>
           </ul>
        </a>

        <!-- 恒星计划 -->
        <router-link to="/heyu" active-class="is-selected" class="tab-item">
            <div class="tab-item-label">恒星计划</div>
        </router-link>
    </div>
    
    <!-- 右侧的导航 -->
    <div class="tab-right">
      <a class="tab-item">委托管理</a>
      <a class="tab-item">资产管理</a>
      <a class="tab-item">手机</a>
      <a class="tab-item">公告</a>
      <a class="tab-item">CNY</a>
      <a class="tab-item">语言</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  props: {
  },
  data() {
    return {
      showTb:false,  //显示图标下拉项
      showBb:false,   //显示币币下拉项
      showHhr:false,  //显示Bibox合伙人

    }
  },
  methods:{
  }

};
</script>

<style scoped>
/* 整个内容 */
.tabbar{
  display: flex;
  background: #131625;
  height: 53px;
  align-items: center;
  justify-content: space-between
}


/* 左侧的导航 */
.tab-router{
  display: flex;
  align-items: center;
  height: 54px;
}

/* 每一个tab样式 */
.tab-item{
  padding: 0 14px;
  text-decoration: none;
  color: #90929e;
  cursor: pointer;

}


/* 下拉选择 */
.xiala{
  position: relative;
}

/* 图标下拉项的样式 */
.theUl{
  position: absolute;
    width: 300px;
    display: flex;
    flex-direction: column;
    top: 45px;
    left: 3px;
    background-color: #c0b8b8;
    color: #fff;
    border-radius: 6px;
    /* 下方轮播的层级为2 */
    z-index: 3;  
}
.theUl li{
    display: flex;
    padding: 10px;
}
.theUl li img{
    width: 40px;
    height: 40px;
    margin-right: 20px;
}

/* 币币下拉项的样式 */
.showBb{
   position: absolute;
    width: 100px;
    top: 38px;
    left: -18px;
    background-color: #c0b8b8;
    color: #fff;
    border-radius: 6px;
    padding: 10px 0;
    z-index: 3;
}
.showBb p{
  text-align: center
}

/* bibox合伙人下拉项的样式 */
.showHhr{
    position: absolute;
    width: 100px;
    top: 38px;
    left: 5px;
    background-color: #c0b8b8;
    color: #fff;
    border-radius: 6px;
    padding: 10px 0;
    z-index: 3;
}
.showHhr p{
  text-align: center
}

/* 右侧的导航 */
.tab-right{
  color: #90929e;
}


/* 用在当前活动的路由上，下即为动态添加的样式 */
.is-selected {
  color: red;
}
</style>
