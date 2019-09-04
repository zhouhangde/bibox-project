<template>
  <div class="staking">
	  <div class="staking_banner">
		  <div class="banner_center">
			  <!--抵押/收益记录-->
			  <span class="staking_index"><a href="javascript:">抵押/收益记录  <i class="iconfont icon-jilu"></i> </a></span>
			  <!--staking 2.0-->
			  <div class="text_center">
				  <span><img src="../../../src/assets/img/home/Staking.svg" alt=""> </span>
				  <span>Staking 2.0</span>
			  </div>
			  <!--持币即挖矿-->
			  <div class="flex_box">
				  <span>持币即挖矿</span>
				  <div class="flex_box_right">
					  <span>18.885</span>
					  <div class="flex_box_right_sub">
						  <div class="title">预计收益</div>
						  <div class="title_sub">BPT全球首发</div>
					  </div>
				  </div>
			  </div>
			  <!--根据ATOM质押数量,计算年化收益-->
			  <div class="primary_dark">根据ATOM质押数量,计算年化收益,最高可达24%</div>
			  <!--ATOM介绍-->
			  <div class="atom">
				  <a href="javascript;"> <i class="icon iconfont icon-TokenInfo" style=""></i>ATOM介绍 </a>
				  <a href="javascript;"> <i class="icon iconfont icon-TokenInfo" style=""></i>IRIS介绍 </a>
				  <a href="javascript;"> <i class="icon iconfont icon-TokenInfo" style=""></i>BTM介绍 </a>
			  </div>
		  </div>
	  </div>
	  <!--三个盒子ATOM IRIS BTM-->
	  <div class="staking_content">
		  <div class="max_w">
			  <!--卡片位置-->
			  <div class="cards">
				  <li class="cards-item">
					  <div class="introduction por por_t">
						  <!--卡片文字内容-->
						  <div class="default">
							  <span class="cosmos"><img src="../../../src/assets/img/staking/staking_logo.jpg" alt=""></span>
							  <div class="default_right">
								  <p><span class="ato">ATOM</span> <span class="sub_ato">Cosmos</span></p>
								  <p><span class="estimate">预计年化收益率</span> <span class="sub_estimate">18.4%</span></p>
							  </div>
						  </div>
					  </div>
					  <!--卡片按钮-->
					  <div class="btn_groups">
						  <button class="btn">充值</button>
						  <button class="sub_btn">购买</button>
					  </div>
				  </li>
				  <li class="cards-item">
					  <div class="introduction por por_t">
						  <!--卡片文字内容-->
						  <div class="default">
							  <span class="cosmos"><img src="../../../src/assets/img/staking/staking_logo.jpg" alt=""></span>
							  <div class="default_right">
								  <p><span class="ato">ATOM</span> <span class="sub_ato">Cosmos</span></p>
								  <p><span class="estimate">预计年化收益率</span> <span class="sub_estimate">18.4%</span></p>
							  </div>
						  </div>
					  </div>
					  <!--卡片按钮-->
					  <div class="btn_groups">
						  <button class="btn">充值</button>
						  <button class="sub_btn">购买</button>
					  </div>
				  </li>
				  <li class="cards-item">
					  <div class="introduction por por_t">
						  <!--卡片文字内容-->
						  <div class="default">
							  <span class="cosmos"><img src="../../../src/assets/img/staking/staking_logo.jpg" alt=""></span>
							  <div class="default_right">
								  <p><span class="ato">ATOM</span> <span class="sub_ato">Cosmos</span></p>
								  <p><span class="estimate">预计年化收益率</span> <span class="sub_estimate">18.4%</span></p>
							  </div>
						  </div>
					  </div>
					  <!--卡片按钮-->
					  <div class="btn_groups">
						  <button class="btn">充值</button>
						  <button class="sub_btn">购买</button>
					  </div>
				  </li>
			  </div>
			  <!--什么是Staking-->
			  <div class="staking_about">
                   <h2 class="staking_about_title">什么是 <span>Staking</span></h2>
				   <h3>Staking源自于从POW （工作量证明）转向POS的模式</h3>
				   <div class="sta"> Staking 2.0 <span>进化版本</span></div>
				   <div class="create_title">
					   <p>Bibox 创造性地将 Staking 抵押资产获取收益和新币挖矿机制结合在一起</p>
					   <p>首期用户通过持有ATOM即可参与BPT挖矿，我们将陆续上线更多优质币种的Staking服务。 <i></i>BPT介绍</p>
				   </div>
				  <!--四个图片-->
				  <ul class="ul_reset">
					  <li class="ul_reset_item" v-for="(item) in flexList" :key="item.id">
						  <p><img :src="item.img" alt=""></p>
						  <p class="flexible">{{item.title}}</p>
						  <p class="sub_flexible">{{item.subtitle}}</p>
					  </li>
				  </ul>
				  <!--当前挖矿收益标题-->
				  <h2 class="noe">当前 Staking ATOM 挖矿收益</h2>
				  <!--18.48%盒子-->
				  <div class="profit">
                       <div class="profit_left">
                             <p class="profit_left_title">≈ 92,716.000000    <span>ATOM</span></p>
						     <p class="profit_left_subtitle">当前质押 ATOM 数量</p>
					   </div>
                       <div class="profit_right">
						   <p>18.48%</p>
						   <p>当前挖矿收益率</p>
					   </div>
				  </div>
                  <!--图表-->
				  <div class="chart_s">
					   <!--左边箭头-->
                       <!--<div class="chart_box_s">-->
                            <!--<div class="chart_left_s">-->
								<!--<span>收益率</span>-->
                                <!--<div class="left_box"> <i class="iconfont">&#xe639;</i></div>-->
							<!--</div>-->
					   <!--</div>-->
					  <!--左边箭头-->
					  <div class="chart_s_arrow flex_box_s">
                           <span>收益率</span>
						    <div class="chart_s_arrow_line"><i class="iconfont">&#xe639;</i></div>
					  </div>
					  <!--四个盒子-->
					  <div class="chart_one">
						  <div class="top_line"></div>
						  <div class="chart_content">
							  <p>18.48%</p>
							  <p>总用户抵押资产不超过 10 万 ATOM 时,
								  享受 18.48% 年化收益,</p>
						  </div>
					  </div>
					  <div class="chart_two">
						  <div class="top_line"></div>
						  <div class="chart_content">
							  <p>18.48%</p>
							  <p>总用户抵押资产不超过 10 万 ATOM 时,
								  享受 18.48% 年化收益,</p>
						  </div>
					  </div>
					  <div class="chart_three">
						  <div class="top_line"></div>
						  <div class="chart_content">
							  <p>18.48%</p>
							  <p>总用户抵押资产不超过 10 万 ATOM 时,
								  享受 18.48% 年化收益,</p>
						  </div>
					  </div>
					  <div class="chart_four">
						  <p>18.48%</p>
						  <div class="top_line"></div>
						  <div class="chart_content">
							  <p>总用户抵押资产不超过 10 万 ATOM 时,
								  享受 18.48% 年化收益,</p>
						  </div>
					  </div>
				  </div>
				  <div class="chart_below">
					  <div class="chart_below_line">
						  <i class="iconfont">&#xe70f;</i>
						  <div class="chart_below_one">
							  <span></span>
							  <p>100,000ATOM</p>
						  </div>
						  <div class="chart_below_two">
							  <span></span>
							  <p>200,000ATOM</p>
						  </div>
						  <div class="chart_below_three">
							  <span></span>
							  <p>400,000ATOM</p>
						  </div>
					  </div>
					  <div class="now_s">
						  <p>当前平台用户</p>
						  <p>质押ATOM资产数量</p>
					  </div>
				  </div>
				  <!--图表下面的文字说明-->
				  <div class="explain">
					  <p>1. 收益率将根据平台质押数量实时调整</p>
					  <p>2. 恒星计划结束申购前挖矿产出 BPT 上限为: 3,000,000 BPT (为发行总量的 0.3% )</p>
				  </div>
				  <!--什么是BPT-->
				  <div class="staking_bpt">
					  <h2>什么是BPT</h2>
					  <p>BPT 是由矿池 Blockpool 发行的代币,</p>
					  <p>Blockpool 矿池为用户提供稳定安全的服务, 也是 ATOM 等等多种支持 POS Token 的超级节点, 是 HPB 芯链的战略合作伙伴, Bibox 指定的 Staking 超级节点。</p>
					  <a><i class="icon iconfont icon-TokenInfo" style=""></i>更多BPT详情</a>
				  </div>
				  <!--本期详情-->
				  <div class="staking_issue">
					  <h2> 本期 Staking 详细规则请参照公告<a href="javascript;">查看公告  </a></h2>
					   <ul>
						   <li>1. 活动开始时间：北京时间2019年8月18日 8:00，首次奖励将于8月19日发放</li>
						   <li>2. 用户授权平台使用账户内ATOM资产进行主网抵押，以获得抵押奖励。用户只需持有ATOM，即可享受收益；</li>
						   <li>3. 在BPT开放交易前，Staking收益按照BPT价格为0.014USDT计算，开放交易后根据BPT/USDT市场价格进行发放。</li>
					   </ul>
					  <p>风险提示：数字资产是一种高风险投资，本活动不构成任何的投资建议，也不作为投资参考。请根据自身风险承受能力，合理安排投资。</p>
				  </div>
			  </div>
		  </div>
	  </div>
  </div>
</template>

<script>
// import FilterView from "../components/FilterView";
export default {
  name: "staking",
  data() {
    return {
    	//卡片内容数据
        //四个图片数据
		flexList:[
			{id:1,img:require("../../../src/assets/img/staking/staking_item_1.png"),title:'灵活',subtitle:'随时可以交易, 不影响流动性'},
			{id:2,img:require("../../../src/assets/img/staking/staking_item_2.png"),title:'便捷',subtitle:'动态调整抵押率, 不影响提现'},
			{id:3,img:require("../../../src/assets/img/staking/staking_item_3.png"),title:'收益',subtitle:'持币即可每天享受收益, 无需锁仓'},
			{id:4,img:require("../../../src/assets/img/staking/staking_item_4.png"),title:'专业',subtitle:'精选挖矿币种, 收益潜力更大'}
		]
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

.staking {
  width: 100%;
  min-width:1260px;
  overflow: auto;
  box-sizing: border-box;
}
.staking_banner{
	height: 400px;
	background-color: #050533;
}
.banner_center{
	width: 1440px;
	margin: 0 auto;
	height: 100%;
	background:url("../../../src/assets/img/staking/staking_banner.png") no-repeat 50%;
	background-size: 1440px 400px;
}
.staking_index{
	text-decoration:none;
	width: 1200px;
	margin: 0 auto;
	display: block;
	font-size: 14px;
	font-weight: 500;
	text-align: right;
	padding-top: 16px !important;
	padding-bottom: 4px !important;
}
.staking_index a{
	color:#3b85f5 !important;
}
.text_center{
	text-align: center;
	display: block;
}
.text_center span:nth-child(1){
	width: 40px;
	height: 38px;
}
.text_center span:nth-child(1) img{
	width: 40px;
	height: 38px;
}
.text_center span:nth-child(2){
	color:#f5faff;
	font-size: 40px;
	font-weight: 500;
	text-align: center;
	padding-left: 16px !important;
}
.flex_box{
	justify-content:center;
	list-style-type: none;
	padding: 0;
	margin: 0;
	display: flex;
	align-items: center;
	margin-top: 16px !important;
}
.flex_box span:nth-child(1){
	font-size: 56px;
	color:#57b6ff;
	font-weight: 600;
	padding-right: 40px !important;
}
.flex_box_right{
	list-style-type: none;
	padding: 0;
	margin: 0;
	display: flex;
	align-items: center;
	padding-left: 40px !important;
}
.flex_box_right span:nth-child(1){
	font-size: 56px;
	color:rgb(255,153,36);
	font-weight: 600;
	padding-right: 40px !important;
}
.flex_box_right span:nth-child(2){
	font-size: 56px;
	font-weight: 900;
	color:rgb(255,153,36);
}
.flex_box_right_sub{
	font-size: 24px;
	font-weight: 500;
	padding-left: 12px !important;
	display: block;
}
.title{
	line-height: 1;
	display: block;
	font-size: 24px;
	font-weight: 500;
	color:rgb(255,153,36);
}
.title_sub{
	line-height: 1;
	color:#fff;
	display: block;
	font-size: 24px;
	font-weight: 500;
}
.primary_dark{
	color:#f5faff;
	font-size: 20px;
	text-align: center;
	font-weight: 500;
	padding-top: 56px !important;
	display: block;
}
.atom{
	text-align: center;
	margin-top: 8px !important;
	display: block;
}
.atom a{
	text-decoration: none;
	font-size: 14px;
	cursor: pointer;
	color:#3b85f5 !important;
	margin-right: 12px !important;
	margin-top: 5px !important;
}
.atom a i{
	margin-right: 4px !important;
}
.staking_content{
	min-width: 1260px;
	display: block;
}
.max_w{
	width: 1200px;
	padding: 0 30px;
	margin: 0 auto;
	display: block;
}
.cards{
	margin-top: -57px;
	justify-content:space-between;
	list-style-type: none;
	padding: 0;
	display: flex;
	align-items: center;
}
.cards-item{
	width: 384px;
	border-radius: 12px;
	overflow: hidden;
	background-image:linear-gradient(117deg,#2e5fe6,#0e318f);
	display: block;
	margin-left: 16px;
}
.introduction{
	background:url("../../../src/assets/img/staking/staking_card.png") no-repeat;
	background-size:146px 136px;
	background-position: 100%;
	padding: 32px 0px 32px 0px !important;
}
.default{
	align-items: flex-start;
	list-style-type: none;
	display: flex;
}
.cosmos{
	margin-left: 10px;
}
.default_right{
	margin-left: 16px !important;
	display: block;
}
.ato{
	color:rgb(245,250,255);
	font-size: 20px;
	font-weight: 700;
}
.sub_ato{
	color:#aec4e6;
	margin-left: 8px !important;
	font-size: 20px;
}
.estimate{
	color:#aec4e6;
	font-size: 16px;
}
.sub_estimate{
	color:rgb(255,153,36);
	font-size: 20px;
	font-weight: 700;
	margin-left: 8px !important;
}
.btn_groups{
	background-color:#0e318f;
	justify-content:flex-end;
	list-style-type: none;
	margin: 0;
	display: flex;
	align-items: center;
	padding: 16px 35px 24px 35px !important;
}
.btn{
	height:48px;
	width: 120px;
	background-color:#33b883;
	color:#fff;
	text-align: center;
	font-weight: 600;
	font-size: 16px;
	padding: 0 24px;
}
.sub_btn{
	height:48px;
	width: 120px;
	background-color:#3b85f5;
	border-color:#2b84f5;
	color:#fff;
	font-weight: 600;
	font-size: 16px;
	padding: 0 24px;
}
.staking_about{
	border-top:1px solid #e6e6eb;
	margin-top: 48px !important;
	display: block;
}
.staking_about h2{
	margin: 0;
	font-size: 20px;
	font-weight: 500;
	color: #2f363d;
	padding-top: 24px!important;
}
.staking_about h3{
	margin: 0;
	font-size: 14px;
	font-weight: 400;
	color: #657585;
	padding-top: 16px!important;
}
.sta{
	color:#3b6cf5;
	font-weight: 700;
	padding-top: 24px !important;
	display: block;
}
.sta span{
	height: 24px;
	border-radius: 4px;
	background-color: #d6f1ff;
	line-height: 24px;
	font-size: 14px;
	font-weight: 400;
	color: #18232e;
	padding: 4px 0px 8px 0px !important;
}
.create_title{
	font-size: 14px;
	color:#657585;
	padding-top: 16px !important;
	display: block;
}
.create_title p:nth-child(2){
	display: flex;
	align-items: center;
	font-size: 14px;
	color:#657585;
	margin-top: 8px !important;
}
.ul_reset{
	list-style-type: none;
	border-bottom: 1px solid #e6e6eb;
	padding-bottom: 48px !important;
	margin-top: 48px !important;
	display: flex;
	align-items: center;
}
.ul_reset_item{
	background-color: #fff;border-radius: 4px;
	border:1px solid #ECECEC;
	width: 282px;
	height: 179px;
	box-sizing: border-box;
	margin-right: 16px;
	border-radius: 4px;
	box-shadow: 0 0 0 1px rgba(0,0,0,.04), 0 2px 4px 0 rgba(0,0,0,.04), 0 4px 12px 0 rgba(0,0,0,.04);
	padding: 24px 0px 32px 0px !important;
}
.ul_reset_item p{
	text-align: center;
}
.flexible{
	font-size: 20px;
	color: #18232e;
	margin-top: 16px!important;
	font-weight: 600;
}
.sub_flexible{
	font-size: 14px;
	text-align: center;
	color: #657585;
	margin-top: 8px!important;
}
.noe{
	font-size: 20px;
	font-weight: 500;
	color:#2f363d;
	padding-top: 24px !important;
	padding-bottom: 40px !important;
}
.profit{
	justify-content: center;
	list-style-type: none;
	padding: 0;
	margin: 0;
	display: flex;
	align-items: center;
	padding-bottom: 70px !important;
}
.profit_left{
	border-right:1px solid #e6e6eb;
	padding-right: 80px !important;
	display: block;
}
.profit_left_title{
	font-size: 48px;
	padding-right: 8px !important;
	font-weight: 500;
	color:#3b6cf5;
}
.profit_left_title span{
	color:#3b6cf5;
	font-size: 16px;
	font-weight: 500;
}
.profit_left_subtitle{
	text-align: right;
	color:#2f363d;
	padding-top: 8px !important;
	display: block;
}
.profit_right{
	padding-left: 60px;
}
.profit_right p:nth-child(1){
	color: #db7916;
	font-size: 48px;
	font-weight: 500;
}
.profit_right p:nth-child(2){
	color: #2f363d;
	padding-top: 8px!important;
	display: block;
}
.chart_s{
	position: relative;
	margin-top: 24px !important;
	list-style-type: none;
	padding: 0;
	align-items: flex-end;
	display: flex;
}
/*.flex_box_s{*/
   /*list-style-type: none;*/
	/*padding: 0;*/
	/*margin: 0;*/
	/*display: flex;*/
	/*align-items: end;*/
/*}*/
.chart_s_arrow span{
	font-size: 12px;
	color:#2f363d;
	position: relative;
	left: -20px;
	top:12px;
	padding-right: 24px !important;
}
.chart_s_arrow_line{
	width: 2px;
	height: 280px;
	background-color:#e6e6eb;
	position: relative;
	display: block;
	left:30px;
}
.chart_s_arrow_line i{
	display: block;
	position: absolute;
	top:-5px;
	left: -6px;
	color:#e6e6eb;
}
/*.chart_box_s{*/
	/*align-items: flex-end;*/
	/*list-style-type: none;*/
	/*display: flex;*/
/*}*/
/*.chart_left_s{*/
	/*list-style-type: none;*/
	/*padding: 0;*/
	/*margin: 0;*/
	/*display: flex;*/
	/*align-items: end;*/
/*}*/
/*.chart_left_s span{*/
	/*padding-right: 24px!important;*/
	/*color: #2f363d;*/
	/*font-size: 12px;*/
	/*list-style-type: none;*/
/*}*/
/*.left_box{*/
	/*width: 2px;*/
	/*height: 280px;*/
	/*background: #e6e6eb;*/
	/*position: relative;*/
	/*display: block;*/
/*}*/
.left_box i{
	display: block;
	color:#e6e6eb;
	top:-12px;
	left:-6px;
	position: absolute;
}
.chart_one{
	position: relative;
	margin-left: 24px !important;
	display: block;
}
.chart_one .top_line{
	width: 240px;
	height: 2px;
	background: #db7916!important;
}
.chart_one .chart_content{
	background: #fff1e0!important;
	height: 240px;
	width: 240px;
	margin-top: 2px;
}
.chart_two{
	position: relative;
	margin-left: 24px !important;
	display: block;
}
.chart_two .top_line{
	background-color: #3b6cf5;
	width: 240px;
	height: 2px;
}
.chart_two .chart_content{
	height: 196px;
	width: 240px;
	margin-top: 2px;
	background: #e0f5ff;
}
.chart_three{
	position: relative;
	margin-left: 24px !important;
	display: block;
}
.chart_three .top_line{
	background-color: #3b6cf5;
	width: 240px;
	height: 2px;
}
.chart_three .chart_content{
	height: 145px;
	width: 240px;
	margin-top: 2px;
	background: #e0f5ff;
}
.chart_four{
	position: relative;
	margin-left: 24px !important;
	display: block;
}
.chart_four .top_line{
	background-color: #3b6cf5;
	width: 240px;
	height: 2px;
}
.chart_four .chart_content{
	height: 96px;
	width: 240px;
	margin-top: 2px;
	background: #e0f5ff;
}
.chart_below_line{
	width: 1120px;
	height: 2px;
	background-color: #3b6cf5;
	margin: 2px auto 0;
	position: relative;
}
.chart_below_line i{
	position: absolute;
	color:#3b6cf5;
	right:-11px;
	top:-7px;
	display: block;
}
.chart_below_line span{
	display: block;
	width: 1px;
	height: 18px;
	background-color: #3b6cf5;
	margin: 0 auto;
	text-align: center;
}
.chart_below_line p{
	font-size: 12px;
	color:#2f363d;
	margin-top:4px !important;
	display: block;
	text-align: center;
}
.chart_below_one{
	position: absolute;
	left: 25.8%;
	top:-8px;
	text-align: center;
	display: block;
}
.chart_below_two{
	position: absolute;
	left: 49.8%;
	top: -8px;
	text-align: center;
	display: block;
}
.chart_below_three{
	position: absolute;
	left:72.8%;
	top: -8px;
	text-align: center;
	display: block;
}
.now_s{
	font-size: 12px;
	text-align: center;
	color:#2f363d;
	padding-top: 12px !important;
	display: block;
}
.now_s p{
	text-align: right;
}
.explain{
	font-size: 12px;
	color:#657585;
	margin-top: 24px !important;
	display: block;
}
.staking_bpt{
	border-top: 1px solid #e2e5eb;
	margin-top: 48px!important;
	display: block;
}
.staking_bpt h2{
	font-size: 20px;
	font-weight: 500;
	color:#2f363d;
	padding-bottom: 16px !important;
	padding-top: 24px !important;
}
.staking_bpt p{
	font-size: 14px;
	color:#657585;
	display: block;
	line-height: 30px;
}
.staking_bpt a{
	font-size: 14px;
	cursor: pointer;
	color:#3b85f5 !important;
	text-decoration: none;
	padding-left: 4px !important;
}
.staking_issue{
	border-top: 1px solid #e2e5eb;
	margin-top: 48px!important;
	display: block;
}
.staking_issue ul{
	padding-top: 20px;
}
.staking_issue li{
	font-size: 14px;
	color:#657585;
	display: block;
	line-height: 30px;
}
.staking_issue p{
	font-size: 14px;
	color:#8494ad;
	padding-top: 24px !important;
	padding-bottom: 50px !important;
}
</style>
