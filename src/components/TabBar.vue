<template>
  <div class="tabbar">
    <!-- 左侧的导航 -->
    <div class="tab-router">
        <!-- 首页 -->
        <!-- active-class="is-selected"默认的路由选中样式 -->
        <a class="tab-item" @click="currentActive = 'home';$router.push({name:'home'})" :class="currentActive == 'home'?'showRed':''">
            <div class="tab-item-label">Bibox</div>
        </a>

        <!-- 图标 -->
        <a class="xiala tab-item" @click="showTb = !showTb;currentActive = 'staking|lab|dex|sbsq|bixyyjs|xykmk|xsfl'" :class="('staking|lab|dex|sbsq|bixyyjs|xykmk|xsfl'.indexOf(currentActive) != -1)?'showRed':''">
           <div class="tab-item-label theLable">图标</div>
           <ul class="theUl" v-if="showTb">
             <li @click="$router.push({name:'staking'})">
                  <img src="" width="30px" height="30px"/>
                  <div>
                    <p>staking</p>
                    <p>节点投币，赚取节点收益</p>
                  </div>
             </li>
             <li @click="$router.push({name:'lab'})">
               <img src="" width="30px" height="30px"/>
               <div>
                 <p>Lab</p>
                 <p>节点投币，赚取节点收益</p>
               </div>
             </li>
             <li @click="$router.push({name:'dex'})">
               <img src="" width="30px" height="30px"/>
               <div>
                 <p>Dex</p>
                 <p>节点投币，赚取节点收益</p>
               </div>
             </li>
             <li @click="$router.push({name:'sbsq'})">
               <img src="" width="30px" height="30px"/>
               <div>
                 <p>上币申请</p>
                 <p>节点投币，赚取节点收益</p>
               </div>
             </li>
             <li @click="$router.push({name:'bixyyjs'})">
               <img src="" width="30px" height="30px"/>
               <div>
                 <p>BIX应用介绍</p>
                 <p>节点投币，赚取节点收益</p>
               </div>
             </li>
             <li @click="$router.push({name:'xykmk'})">
               <img src="" width="30px" height="30px"/>
               <div>
                 <p>信用卡一键买币</p>
                 <p>节点投币，赚取节点收益</p>
               </div>
             </li>
             <li @click="$router.push({name:'xsfl'})">
               <img src="" width="30px" height="30px"/>
               <div>
                 <p>新手福利</p>
                 <p>节点投币，赚取节点收益</p>
               </div>
             </li>
           </ul>
        </a>
        
        <!-- 币币 -->
        <a class="xiala tab-item" @click="showBb = !showBb;currentActive = 'bzjy|qpjy'" :class="('bzjy|qpjy'.indexOf(currentActive) != -1)?'showRed':''">
           <div class="tab-item-label">币币</div>
           <ul class="showBb" v-if="showBb">
             <li>
               <P @click="$router.push({name:'bzjy'})">标准交易</P>
               <P @click="$router.push({name:'qpjy'})">全屏交易</P>
             </li>
           </ul>
        </a>
        
        <!-- 杠杆 -->
        <a class="xiala tab-item" @click="showGgyj = !showGgyj;currentActive = 'ggjy|jkfk'" :class="('ggjy|jkfk'.indexOf(currentActive) != -1)?'showRed':''">
          <div class="tab-item-label">杠杆</div>
           <ul class="showGgyj" v-if="showGgyj">
             <li>
               <P @click="$router.push({name:'ggjy'})">杠杆交易</P>
               <P @click="$router.push({name:'jkfk'})">借款放款</P>
             </li>
           </ul>
        </a>

        <!-- 合约 -->
        <a class="tab-item" @click="currentActive = 'hy';$router.push({name:'hy'})" :class="currentActive == 'hy'?'showRed':''">
            <div class="tab-item-label">合约</div>
        </a>

        <!-- 法币交易 -->
        <a class="tab-item" @click="currentActive = 'fabi';$router.push({name:'fabi'})" :class="currentActive == 'fabi'?'showRed':''">
            <div class="tab-item-label">法币交易</div>
        </a>

        <!-- Bibox合伙人 -->
        <a class="xiala tab-item" @click="showHhr = !showHhr;currentActive = 'biboxhxjh|cshhr'" :class="('biboxhxjh|cshhr'.indexOf(currentActive) != -1)?'showRed':''">
            <div class="tab-item-label">Bibox合伙人</div>
            <ul class="showHhr" v-if="showHhr">
             <li>
               <P @click="$router.push({name:'biboxhxjh'})">盒芯计划</P>
               <P @click="$router.push({name:'cshhr'})">城市合伙人</P>
             </li>
           </ul>
        </a>

        <!-- 恒星计划 -->
        <a class="tab-item" @click="currentActive = 'hxjh';$router.push({name:'hxjh'})" :class="currentActive == 'hxjh'?'showRed':''">
            <div class="tab-item-label">恒星计划</div>
        </a>
    </div>
    
    <!-- 右侧的导航 -->
    <div class="tab-right">
      <a class="tab-item" @click="currentActive = 'wtgl';$router.push({name:'wtgl'})" :class="currentActive == 'wtgl'?'showRed':''">
            委托管理
      </a>
      <a class="tab-item" @click="currentActive = 'zcgl'" :class="currentActive == 'zcgl'?'showRed':''">资产管理</a>
      <a class="tab-item" @click="currentActive = 'phone'" :class="currentActive == 'phone'?'showRed':''">手机</a>
      <a class="tab-item" @click="currentActive = 'gonggao'" :class="currentActive == 'gonggao'?'showRed':''">公告</a>
      <a class="tab-item" @click="currentActive = 'cny'" :class="currentActive == 'cny'?'showRed':''">CNY</a>
      <a class="tab-item"  @click="currentActive = 'lanuage'" :class="currentActive == 'lanuage'?'showRed':''">语言</a>
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
      showGgyj:false,  //显示杠杆交易下拉
      currentActive:'home' //当前被点击的路由标签
    }
  },
  created(){
    // 处理当不是用home主页进入时的情况，路由颜色
     if(this.$route.path !='/home'){
       this.currentActive =  this.$route.path.split('/')[1]
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


/* 杠杆交易下拉项的样式 */
.showGgyj{
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
.showGgyj p{
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

.showRed{
  color: red; 
}
</style>
