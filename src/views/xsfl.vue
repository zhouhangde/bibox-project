<template>
  <div class="xsfl">
	  <!--版心-->
       <div class="main">
		    <!--拥有你第一笔数字资产-->
		   <div class="have">
			   <div class="center">
				   <!--图片加标题-->
				   <div class="have_title">
                        <div class="title_con">
							<span><img src="../../src/assets/img/new/new_item_1.png" alt=""></span>
							<div class="number">
								<p>拥有你第一笔数字资产</p>
								<p>一键买币由 LinkCoin 商家提供，请您放心购买，恶意下单系统会自动冻结您的账户</p>
							</div>
							<div></div>
						</div>
				   </div>
				   <!--购买USDT-->
				   <div class="buy">
					   <div class="buy_left_line"></div>
					   <div class="buy_right">
						   <!--购买-->
                            <div class="price">
								<div class="usdt">
									<span><img src="../../src/assets/img/new/usdt.jpg" alt=""></span>
									<span>USDT</span>
									<div class="usdt_line"></div>
									<span>单价</span>
									<span>7.17CNY</span>
								</div>
							</div>
						   <!--什么是USDT-->
						   <div class="hat">
							   <div class="hat_title">
								   <p><span><img src="../../src/assets/img/new/why.jpg" alt=""></span>什么是USDT?</p>
							   </div>
							   <ul class="hat_box">
								   <li><span><img src="../../src/assets/img/new/true.jpg" alt=""></span>USDT 是对标美元的稳定币, 根据发行协议价格锚定美元, 风险较低</li>
								   <li><span><img src="../../src/assets/img/new/true.jpg" alt=""></span>持有 USDT 之后可以直接交易 BTC 和 ETH 等主流数字货币</li>
								   <li><span><img src="../../src/assets/img/new/true.jpg" alt=""></span>支持多种主流方式直接购买</li>
							   </ul>
						   </div>
						   <!--限时优惠-->
						   <div class="time">
							   <div class="time_left">
								   <p>限时优惠,满100USDT送5 BIX</p>
								   <p>新用户首次购买10USDT送5BIX,满200USDT送10BIX</p>
							   </div>
							   <div class="time_right">
								   <div class="time_top">
									   <div class="top_title">
										   <p>当前市场价格</p>
										   <p>10 BIX ≈ 15.44 CNY</p>
									   </div>
									   <div class="active"><button>立即领取</button></div>
								   </div>
								   <div class="time_under">
									   <p>* BIX 为 Bibox 平台币，使用 BIX 可抵扣五折交易手续费</p>
									   <p>* 2019-03-01 之后注册且未使用过“一键买币”功能的用户可参与本次活动</p>
								   </div>
							   </div>
						   </div>
					   </div>
				   </div>
			   </div>
		   </div>
		   <!--充值第一笔数字资产-->
		   <div class="recharge">
			    <div class="main_s">
					<!--线条-->
					 <div class="main_line">
						 <div class="line_per"></div>
					 </div>
					<div class="recharge_title">
						 <div class="recharge_title_left">
							 <span><img src="../../src/assets/img/new/new_item_2.png" alt=""></span>
							 <p>充值第一笔数字资产</p>
						 </div>
						<div class="btn"><button>查看充值地址</button></div>
					</div>
					 <div class="prepaid_main">
						 <div class="recharge_left_line"></div>
						 <div class="main_right">
							 <div class="recharge_center">
								 <p class="recharge_center_title">新用户注册后充值，存币可获高息收益（活动仅支持未进行币币、杠杆以及合约交易的新用户参与）</p>

								 <!--盒子内容-->
								 <div class="recharge_box">
									 <div class="day_top">
										 <div class="enjoy">
											 <span><img src="../../src/assets/img/new/enjoy_left.png" alt=""></span>
											 <div class="tag_content">新手专享</div>
											 <span><img src="../../src/assets/img/new/enjoy_right.png" alt=""></span>
										 </div>
										 <span><img src="../../src/assets/img/new/usdt.jpg" alt=""></span>
										 <p>7天存币计划</p>
									 </div>
									 <div class="year">
										 <div class="year_left">
											 <p>12.00%</p>
											 <p>年化收益率</p>
										 </div>
										 <div class="year_right">
											 <p>20.00%</p>
											 <p>选择BIX收利</p>
											 <p>年化收益率</p>
										 </div>
										 <div class="year_btn">
											 <button>抢购已经结束</button>
										 </div>
									 </div>
								 </div>
							 </div>
						 </div>
					 </div>
				</div>
		   </div>
		   <!--与百万新生力量一同成长-->
		   <div class="power"></div>
	   </div>
  </div>
</template>

<script>
// import FilterView from "../components/FilterView";
export default {
  name: "xsfl",
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

.xsfl {
  width: 100%;
  overflow: auto;
  box-sizing: border-box;
}
.main{
	min-width: 1260px;
	display: block;
}
.have{
	background: #fff!important;
	padding-bottom: 0!important;
	min-height: auto!important;
	min-width: 1260px;
}
.center{
	width: 1200px;
	padding: 0 30px;
	margin: 0 auto;
	display: block;
}

.have_title{
	justify-content:space-between;
	display: flex;
	align-items: center;
	padding-top: 48px !important;
}
.title_con{
	display: flex;
	align-items: center;
}
.number{
	margin-left: 24px !important;
}
.number p:nth-child(1){
	color: #18232e;
	font-size: 20px;
	font-weight: 500;
}
.number p:nth-child(2){
	color: #657585;
	font-size: 12px;
}
.buy{
	position: relative;
	padding: 48px 0 80px;
	display: block;
}
.buy_left_line{
	position: absolute;
	top: -1px;
	left: 27px;
	height: 101%;
	width: 2px;
	background: #e6e6eb;
}
.buy_right{
	margin-left: 204px;
	display: block;
}
.price{
	padding-top: 20px !important;
	padding-bottom: 20px !important;
	display: block;
}
.hat{
	border-top:1px solid #e6e6eb;
	margin-top: 32px !important;
	padding-top: 48px !important;
	display: block;
}
.price{
	list-style-type: none;
	padding: 0;
	margin: 0;
	display: flex;
	align-items: center;
	margin-bottom: 16px !important;
}
.usdt span:nth-child(1){
	width: 20px;
	height: 20px;
}
.usdt span:nth-child(2){
	color:#2f363d;
	font-size: 16px;
	font-weight: 600;
	margin-left: 4px !important;
}
.usdt_line{
	margin-left: 16px;
	margin-right: 16px;
	background-color: #e6eaf0;
	width: 1px;
	height: 1.5em;
	display: inline-block;
}
.usdt span:nth-child(3){
	color:#2f363d;
	font-size: 12px;
}
.usdt span:nth-child(4){

}
.usdt span:nth-child(5){
	color:rgb(219,121,22);
	font-size: 16px;
	font-weight: 600;
	margin-left: 4px !important;
}
.hat_title img{
	margin-top: -10px;
}
.hat_title p{
	font-size: 16px;
	color: #2f363d;
}
.hat_box{
	display: flex;
	align-items: center;
}
.hat_box li{
	width: 360px;
	height: 74px;
	border-radius: 8px;
	background-color: #f8f8fb;
	align-items: flex-start;
	padding-left: 20px;
	padding-top: 10px;
	padding-right: 5px;
	margin-right: 20px;
	text-align: left;
}
.hat_box span{
	padding: 10px;
}
.time{
	padding: 24px 40px;
	background-size:106% 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 8px;
	background:url("../../src/assets/img/new/time.svg") #1f9970 no-repeat;
	box-shadow: 0 4px 16px 0 rgba(0,0,0,.16);
}
.time_left p:nth-child(1){
	font-size: 24px;
	font-weight: 600;
	color:#fff;
	display: block;
}
.time_left p:nth-child(2){
	color:rgb(153,255,180);
	font-size: 16px;
	margin-top: 8px !important;
}
.time_right{
	display: block;
}
.time_top{
	display: flex;
	align-items: center;
	justify-content: flex-end;
}
.time_top p:nth-child(1){
	color:#fff;
	text-align: right;
}
.time_top p:nth-child(2){
	color: rgb(255, 169, 71);
	font-size: 16px;
	font-weight: 600;
	text-align: right;
}
.active{
	margin-left: 24px !important;
}
.active button{
	display: inline-block;
	line-height: 1;
	white-space: nowrap;
	cursor: pointer;
	background: #fff;
	border: 1px solid #e6e6e6;
	color: #555;
	-webkit-appearance: none;
	text-align: center;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	outline: 0;
	margin: 0;
	-webkit-transition: .1s;
	transition: .1s;
	font-weight: 500;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	padding: 11px 24px;
	font-size: 16px;
	border-radius: 4px;
}
.time_under{
	padding-top: 8px;
}
.time_under p{
	text-align: right;
	font-size: 12px;
	color:#fff;
}
.recharge{
	min-width: 1260px;
	background: #f5f5fa!important;
	padding-bottom: 0!important;
	min-height: auto!important;
}
.main_s{
	width: 1200px;
	padding: 0 30px;
	margin: 0 auto;
	display: block;
}
.main_line{
	display: block;
}
.line_per{
	height: 48px;
	width: 2px;
	background: #e6e6eb;
	margin-left: 27px;
}
.recharge_title{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.recharge_title_left{
	display: flex;
	align-items: center;
}
.recharge_title_left p{
	margin-left: 24px !important;
	font-size: 20px;
	font-weight: 500;
	color: #18232e;
}
.btn button{
	color: #fff;
	background-color: #659aea;
	border-color: #659aea;
	display: inline-block;
	line-height: 1;
	white-space: nowrap;
	cursor: pointer;
	-webkit-appearance: none;
	text-align: center;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	outline: 0;
	margin: 0;
	-webkit-transition: .1s;
	transition: .1s;
	font-weight: 500;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	padding: 11px 24px;
	font-size: 16px;
	border-radius: 4px;
}
.prepaid_main{
	position: relative;
	padding: 48px 0 80px;
	display: block;
}
.main_right{
	margin-left: 204px;
}
.recharge_left_line{
	position: absolute;
	top: 0;
	left: 27px;
	height: 101%;
	width: 2px;
	background: #e6e6eb;
	display: block;
}
.recharge_center_title{
	color:#2f363d;
	font-size: 16px;
	margin-bottom: 24px !important;
}
.recharge_box{
	flex-wrap: wrap;
	display: flex;
	align-items: center;
	width: 316px;
	border-radius: 4px;
	background-color: #fff;
	box-shadow: 0 8px 32px 0 rgba(0,0,0,.16), 0 2px 8px 0 rgba(0,0,0,.08), 0 0 0 1px rgba(0,0,0,.08);
	margin-bottom: 24px !important;
	margin-right: 24px !important;
}
.day_top{
	position: relative;
	display: block;
}
.enjoy{
	position: absolute;
	right: 16px;
	top: 0;
	height: 26px;
	display: flex;
    align-items: center;
}
.enjoy span{
	height: 100%;
}
.enjoy img{
	height: 100%;
}
.tag_content{
	height: 26px;
	line-height: 26px;
	background-color: #21a35e;
	font-size: 12px;
	color:#fff;
	font-weight: 600;
	display: block;
}
.year{
	padding: 32px 0 24px;
	background: #f8f9fb;
	-webkit-box-shadow: inset 0 1px 0 0 #e6e6eb;
	box-shadow: inset 0 1px 0 0 #e6e6eb;
	border-bottom-right-radius: 4px;
	border-bottom-left-radius: 4px;
	display: block;
}
</style>
