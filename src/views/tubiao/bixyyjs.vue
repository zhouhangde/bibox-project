<template>
  <div class="bixyyjs">
      <div class="main">
		  <div class="bix_banner">
			  <div class="bix_banner_bg">
				  <transition appear>
					  <div class="why">
						  <p>什么是BIX</p>
						  <p>BIX Token 简称 “ BIX ”, 是 Bibox 平台推⾏的基于以太坊 ERC20 的标准 Token。</p>
						  <p>Bibox 承诺 BIX 永不增发, 且每季度拿出 25% 的净利润用来回购和销毁 BIX Token。</p>
					  </div>
				  </transition>
				  <transition appear>
				  <div class="bix_banner_box">
						  <div class="img_left">
							  <div class="left_box">
								  <div class="img_left_title">
									  <p>销毁</p>
									  <p>9,560,671 BIX</p>
								  </div>
								  <div class="img_left_i">
									  <img src="../../../src/assets/img/bix/i_1.jpg" alt="">
								  </div>
							  </div>
							  <img src="../../../src/assets/img/bix/img_left.svg" alt="">
						  </div>
						  <div class="img_center">
							  <div class="center_box">
								  <div class="img_center_i">
									  <img src="../../../src/assets/img/bix/i_2.jpg" alt="">
								  </div>
								  <div class="img_center_title">
									  <p>总量</p>
									  <p>261,959,678 BIX</p>
								  </div>
							  </div>
							  <img src="../../../src/assets/img/bix/img_center.svg" alt="">
						  </div>
						  <div class="img_right">
							  <div class="right_box">
								  <div class="img_center_i">
									  <img src="../../../src/assets/img/bix/i_2.jpg" alt="">
								  </div>
								  <div class="img_center_title">
									  <p>流通</p>
									  <p>261,959,678 BIX</p>
								  </div>
							  </div>
							  <img src="../../../src/assets/img/bix/img_right.svg" alt="">
						  </div>
				  </div>
				  </transition>
			  </div>
		  </div>
		  <!--应用场景-->
		  <div class="scene">
			  <p class="scene_title">BIX生态应用应用场景</p>
			  <div class="scene_box">
					  <li v-for="item in sceneList" :key="item.id">
						  <p><img :src="item.img"></p>
						  <p class="scene_title">{{item.title}}</p>
						  <p class="scene_subtitle">{{item.subtitle}}</p>
					  </li>
                      <!--跳转获得BIX-->
				      <a class="get">
						  <p> 立即获得BIX <i></i> </p>
					  </a>
			  </div>
		  </div>
		  <!--联合推出借记卡-->
		  <div class="card_box">
               <div class="card">
				   <p class="card_title">Bibox 即将联合 LTC 推出“BIX借记卡”</p>
				   <p class="card_subtitle">随时随地，想买就买，让 BIX 支付成为主流</p>
				   <div class="bank">
                        <div class="bank_left">
							<p><span class="bank_title">网购</span> <span class="bank_img"><img src="../../../src/assets/img/bix/bix_item_1.png" alt=""></span> </p>
							<p><span class="bank_title">餐厅</span> <span class="bank_img"><img src="../../../src/assets/img/bix/bix_item_2.png" alt=""></span></p>
							<p><span class="bank_title">旅游</span> <span class="bank_img"><img src="../../../src/assets/img/bix/bix_item_3.png" alt=""></span> </p>
							<p><span class="bank_title">游乐场</span> <span class="bank_img"><img src="../../../src/assets/img/bix/bix_item_4.png" alt=""></span></p>
						</div>
					    <div class="bank_card"><img src="../../../src/assets/img/bix/bank.png" alt=""></div>
					    <div class="bank_right">
							<p><span class="bank_title">商场</span> <span><img src="../../../src/assets/img/bix/bix_item_5.png" alt=""></span></p>
							<p><span class="bank_title">电影院</span> <span><img src="../../../src/assets/img/bix/bix_item_6.png" alt=""></span></p>
							<p><span class="bank_title">酒店</span> <span><img src="../../../src/assets/img/bix/bix_item_7.png" alt=""></span></p>
							<p> <span class="bank_title">医院</span> <span><img src="../../../src/assets/img/bix/bix_item_8.png" alt=""></span> </p>
							<p> <span class="bank_title">咖啡店</span> <span><img src="../../../src/assets/img/bix/bix_item_9.png" alt=""></span> </p>
						</div>
				   </div>
				   <ul class="support">
					   <li> * 支持全球大部分信用卡可使用地区，充值BIX＆LTC，刷卡时将按照汇率实时结算</li>
					   <li>* 支持全球大部分ATM取现业务，随时随地将加密货币兑换成现金</li>
				   </ul>
			   </div>
		  </div>
		  <!--BIX购买途径-->
		  <div class="purchase">
			  <p class="purchase_title">BIX购买途径</p>
			  <p class="purchase_subtitle">BIX购买途径</p>
			  <div class="purchase_content">
                   <div class="content_one"><span><img src="../../../src/assets/img/bix/buy_item_1.png" alt=""></span><p>Kyber Network</p></div>
                   <div class="content_two"><span><img src="../../../src/assets/img/bix/buy_item_2.png" alt=""></span><p>Huobi</p></div>
                   <div class="content_three"><span><img src="../../../src/assets/img/bix/buy_item_3.png" alt=""></span><p>Bibox</p></div>
                   <div class="content_four"><span><img src="../../../src/assets/img/bix/buy_item_4.png" alt=""></span><p>Dex.top</p></div>
                   <div class="content_five"><span><img src="../../../src/assets/img/bix/buy_item_5.png" alt=""></span><p>CoinPlace</p></div>
			  </div>
		  </div>
		  <!--销毁记录 联系我们-->
		  <div class="destruction">
			  <p class="destruction_title">BIX 销毁记录</p>
			  <p class="destruction_subtitle">每季度将 Bibox 平台 25% 的净利润用来回购和销毁 BIX Token，
				  销毁记录将会第一时间公布，用户可通过区块链浏览器查询，确保公开透明。
				  共计已销毁数量 共计已销毁数量 <span>9,560,671 BIX</span>，约占总流通量的 <span>7.84%</span></p>
			  <ul>
				  <li v-for="item in queryList" :key="item.id">
					  <span>{{item.id}}</span> <span>{{item.time}}</span>
					  <span>{{item.bix}}</span>
					  <span>查询地址:{{item.address}}</span>
				  </li>
			  </ul>
		  </div>
		  <!--联系我们-->
		  <div class="contact">
               <div class="contact_box">
				   <div class="contact_left">
					   <p>想与BIX合作</p>
					   <p>填写您的需求和联系方式,我们会第一时间联系您</p>
				   </div>
				   <a href="javascript;">联系我们</a>
			   </div>
		  </div>
	  </div>
  </div>
</template>

<script>
// import FilterView from "../components/FilterView";
export default {
  name: "bixyyjs",
  data() {
    return {
        //图标数据
		sceneList:[
			{id:1,img:require("../../../src/assets/img/bix/scene_item_1.png"),title:'折扣',subtitle:'账户持有 BIX 可享交易手续费 5 折特惠'},
			{id:2,img:require("../../../src/assets/img/bix/scene_item_2.png"),title:'折扣',subtitle:'账户持有 BIX 可享交易手续费 5 折特惠'},
			{id:3,img:require("../../../src/assets/img/bix/scene_item_3.png"),title:'折扣',subtitle:'账户持有 BIX 可享交易手续费 5 折特惠'},
			{id:4,img:require("../../../src/assets/img/bix/scene_item_4.png"),title:'折扣',subtitle:'账户持有 BIX 可享交易手续费 5 折特惠'},
			{id:5,img:require("../../../src/assets/img/bix/scene_item_5.png"),title:'折扣',subtitle:'账户持有 BIX 可享交易手续费 5 折特惠'},
			{id:6,img:require("../../../src/assets/img/bix/scene_item_6.png"),title:'折扣',subtitle:'账户持有 BIX 可享交易手续费 5 折特惠'},
			{id:7,img:require("../../../src/assets/img/bix/scene_item_7.png"),title:'折扣',subtitle:'账户持有 BIX 可享交易手续费 5 折特惠'},
			{id:8,img:require("../../../src/assets/img/bix/scene_item_8.png"),title:'折扣',subtitle:'账户持有 BIX 可享交易手续费 5 折特惠'},
			{id:9,img:require("../../../src/assets/img/bix/scene_item_9.png"),title:'折扣',subtitle:'账户持有 BIX 可享交易手续费 5 折特惠'},
			{id:10,img:require("../../../src/assets/img/bix/scene_item_10.png"),title:'折扣',subtitle:'账户持有 BIX 可享交易手续费 5 折特惠'},
			{id:11,img:require("../../../src/assets/img/bix/scene_item_11.png"),title:'折扣',subtitle:'账户持有 BIX 可享交易手续费 5 折特惠'},

		],
		//查询地址数据
		queryList:[
			{id:1,time:'2018第一季度',bix:'1,575,600 BIX',address:' https://etherscan.io/tx/0xb51a33cfbf6294bea7725e8eee4434c97d304fe2657cb90'},
			{id:2,time:'2018第二季度',bix:'2,003,300 BIX',address:'  https://etherscan.io/tx/0xf62b3293e828e2709e73cf8d0af0422ede8afed8886f5f03'},
			{id:3,time:'2018第三季度',bix:'1,954,452 BIX',address:' https://etherscan.io/tx/0x3e5dd4cc9d1436b90e9068bc7940a0fe5f65028bf03d9a'},
			{id:4,time:'2018第四季度',bix:'1,506,206 BIX',address:'  https://etherscan.io/tx/0xde2f8e24c2b093a56458e1b57f416d1e78a6e0ee5ec3d23'},
			{id:5,time:'2018第五季度',bix:'1,509,044 BIX',address:'  https://etherscan.io/tx/0x353b85df4e54836ffb80ed444a2d5bdb8f2f35f7e28ff11'},
			{id:6,time:'2018第六季度',bix:'1,012,069 BIX',address:'  https://etherscan.io/tx/0x805fc6dc6ef1a9150340b7bc2590b7ca2e80e4db4b5f3ae'},

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
   .bixyyjs {
       width: 100%;
       overflow: auto;
       box-sizing: border-box;
   }
	.main{
		min-width: 1260px;
		display: block;
	}
	.bix_banner{
		background-color:#0a1833;
		overflow: hidden;
		text-align: center;
	}
	.bix_banner_bg{
		background:url("../../../src/assets/img/bix/bix_bg.png") no-repeat 50%;
		height: 500px;
		display: block;
		text-align: center;
	}
	.why{
		padding-top: 40px;
	}
	.why p:nth-child(1){
		color: #fff;
		font-size: 38px;
		font-weight: 500;
		text-align: center;
	}
	.why p:nth-child(2){
		color: #fff;
		font-size: 17px;
		text-align: center;
		padding-top: 30px;
	}
   .why p:nth-child(3){
	   color: #fff;
	   font-size: 18px;
	   text-align: center;
	   padding-top: 20px;
   }
   .bix_banner_box{
	   margin: 0 auto;
	   position: relative;
	   padding-top: 137px;
	   display: block;
	   text-align: center;
   }
   .img_left{
	   position: absolute;
	   left: 50%;
	   z-index: 1;
	   padding-top: 80px;
	   margin-left: -310px;
	   animation-fill-mode: forwards;
   }
   .left_box{
	   position: absolute;
	   left: -38%;
	   top:30px;
	   white-space: nowrap;
	   display: flex;
	   align-items: center;
   }
   .img_left_title{
	   text-align: right;
	   padding-right: 8px !important;
	   display: block;
   }
   .img_left_title p:nth-child(1){
	   font-size: 14px;
	   font-weight: 500;
	   color:#fff;
	   display: block;
	   text-align: right;
   }
   .img_left_title p:nth-child(2){
	   color:#4bdba1;
	   font-size: 20px;
	   display: block;
   }
   .img_left_i{
	   display: inline-block;
	   position: relative;
	   line-height: 1;
	   width: 25px;
	   height: 25px;
   }
   .img_center{
	   position: absolute;
	   left: 50%;
	   margin-left: -130px;
   }
   .img_center_i{
	   width: 20px;
	   height: 20px;
	   position: relative;
	   left: -10px;
   }
   .img_center_title p:nth-child(1){
	   font-size: 14px;
	   font-weight: 500;
	   color:#fff;
	   display: block;
	   text-align: left;
   }
   .img_center_title p:nth-child(2){
	   color:#66a3ff;
	   font-size: 20px;
	   display: block;
	   text-align: left;
   }
   .center_box{
	   position: absolute;
	   top:-50px;
	   left: 84%;
	   white-space: nowrap;
	   display: flex;
	   align-items: center;
   }
   .img_right{
	   position: absolute;
	   left: 50%;
	   padding-top: 70px;
	   margin-left: 40px;
   }
   .right_box{
	   position: absolute;
	   top:24px;
	   left: 86%;
	   white-space: nowrap;
	   display: flex;
	   align-items: center;
   }
   .scene{
      padding-bottom: 90px;
   }
   .scene_title{
	   text-align: center;
	   font-size: 30px;
	   font-weight: 700;
	   padding-top: 35px;
	   padding-bottom: 30px;
   }
   .scene_box{
	   margin: 0 auto;
	   flex-wrap: wrap;
	   list-style-type: none;
	   display: flex;
	   align-items: center;
	   width: 1200px;
   }
	.scene_box li{
		width: 273px;
		border-radius: 4px;
		background-color: #fff;
		box-sizing: border-box;
		box-shadow: 0 3px 5px 0 rgba(0,0,0,.05), 0 7px 14px 0 rgba(54,54,77,.1);
		display: block;
		height: 248px !important;
		text-align: center;
		margin-right: 27px!important;
		margin-top: 24px!important;
		padding-left: 32px!important;
		padding-right: 32px!important;
		padding-top: 40px!important;
	}
	.scene_box li p:nth-child(1){
		text-align: center;
	}
	.scene_box li p:nth-child(2){
		text-align: center;
		font-weight: 700;
		font-size: 20px;
		padding-bottom: 8px !important;
		padding-top: 32px !important;
		display: block;
	}
	.scene_box li p:nth-child(3){
		text-align: center;
		color:#7c8ca3;
		font-size: 14px;
	}
	.get{
		width: 273px;
		border-radius: 4px;
		background: #3577db;
		color: rgb(224, 237, 255);
		text-decoration: none;
		box-sizing: border-box;
		box-shadow: 0 3px 5px 0 rgba(0,0,0,.05), 0 7px 14px 0 rgba(54,54,77,.1);
		display: block;
		height: 248px !important;
		text-align: center;
		margin-right: 27px!important;
		margin-top: 24px!important;
		padding-left: 32px!important;
		padding-right: 32px!important;
		padding-top: 40px!important;
	}
	.get p{
		text-align: center;
		font-size: 16px;
		font-weight: 700;
		line-height: 190px;
		display: block;
	}
	.card_box{
		background: #0a1833 url("../../../src/assets/img/bix/card.png") no-repeat 50%;
		height: 812px;
		background-size:876px 812px;
		display: block;
	}
	.card{
		width: 900px;
		margin: 0 auto;
		display: block;
	}
	.card_title{
		text-align: center;
		font-weight: 700;
		font-size: 32px;
		color: #d3dce6;
		padding-top: 80px !important;
	}
	.card_subtitle{
		color: #96a1b0;
		font-size: 12px;
		text-align: center;
		padding-top: 8px !important;
		display: block;
	}
	.bank{
		list-style-type: none;
		padding: 0;
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.bank_card{
		height: 398px;
		width: 563px;
		padding-top: 114px;
		display: block;
	}
	.bank_card img{
		width: 100%;
	}
	.bank_left p:nth-child(1){
		padding-top: 66px;
		margin: 0;
	}
	.bank_left p:nth-child(2){
		transform: translateX(-91px);
		padding-top: 82px;
		display: flex;
		align-items: center;
	}
   .bank_left p:nth-child(3){
	   transform: translateX(-66px);
	   padding-top: 92px;
	   display: flex;
	   align-items: center;
   }
   .bank_left p:nth-child(4){
	   padding-top: 122px;
	   margin: 0;
	   display: flex;
	   align-items: center;
   }
	.bank_title{
		color:#d3dce6;
		font-size: 14px;
		display: block;
		padding-right: 12px !important;
	}
    .bank_right{
		display: block;
	}
	.bank_right p:nth-child(1){
		padding-top: 66px;
		margin: 0;
		display: flex;
		align-items: center;
	}
   .bank_right p:nth-child(2){
	   transform: translateX(102px);
	   padding-top: 66px;
	   margin: 0;
	   display: flex;
	   align-items: center;
   }
   .bank_right p:nth-child(3){
	   transform: translateX(50px);
	   padding-top: 66px;
	   margin: 0;
	   display: flex;
	   align-items: center;
   }
   .bank_right p:nth-child(4){
	   transform: translateX(98px);
	   padding-top: 66px;
	   margin: 0;
	   display: flex;
	   align-items: center;
   }
   .bank_right p:nth-child(5){
	   padding-top: 66px;
	   margin: 0;
	   display: flex;
	   align-items: center;
   }
   .support li:nth-child(1){
	   margin-top: 58px;
	   line-height: 2;
	   color:#5d6e85;
	   text-align:center;
	   display: block;
   }
	.support li:nth-child(2){
		line-height: 2;
		color:#5d6e85;
		font-size: 12px;
		text-align: center;
		padding-bottom: 40px !important;
		display: block;
	}
	.purchase{
		background:url("../../../src/assets/img/bix/buy.jpg") no-repeat 50%;
		background-size:1440px 430px;
		height: 430px;
		display: block;
	}
	.purchase_title{
		font-size: 32px;
		text-align: center;
		font-weight: 600;
		color:#2f363d;
		padding-top: 80px !important;
		display: block;
	}
	.purchase_subtitle{
		font-size: 12px;
		text-align: center;
		color:#657585;
		padding-top: 8px !important;
		display: block;
	}
	.purchase_content{
		margin: 0 auto;
		align-items: inherit;
		width: 1200px;
		display: flex;
	}
	.purchase_content span{
		text-align: center;
	}
	.purchase_content p{
		padding-top: 6px;
		font-weight: 700;
		color:#18232e;
		display: block;
		text-align: center;
	}
	.content_one{
		padding-right: 135px;
		text-align: center;
		padding-left: 64px !important;
		margin-top: 64px !important;
		display: block;
	}
	.content_two{
		padding-right: 168px;
		margin-top: 114px;
		text-align: center;
	}
	.content_three{
		padding-right: 168px;
		text-align: center;
		margin-top: 64px !important;
		display: block;
	}
	.content_four{
		padding-right: 168px;
		margin-top: 114px;
		text-align: center;
	}
	.content_five{
		margin-top: 64px !important;
	}
    .destruction{
		width: 1200px;
		padding: 0 30px;
		margin: 0 auto;
		display: block;
	}
	.destruction_title{
		padding-top: 100px;
		font-size: 32px;
		text-align: center;
		font-weight: 600;
		color:#2f363d;
		display: block;
	}
	.destruction_subtitle{
		width: 996px;
		margin: 0 auto;
		text-align: center;
		color:#2f363d;
		padding-top:16px !important;
		display: block;
		font-size: 16px;
	}
	.destruction_subtitle span{
		font-weight: 700;
		color:#3b85f5 !important;
		text-align: center;
	}
	.destruction ul{
		padding-bottom: 48px !important;
		padding-top: 64px !important;
		display: block;
	}
	.destruction ul li{
		border-top:1px solid #e6e6eb;
		list-style-type: none;
		display: flex;
		align-items: center;
		padding-top: 24px !important;
		padding-bottom: 24px !important;
	}
	.destruction ul li:last-child{
		border-bottom: 1px solid #e6e6eb;
	}
	.destruction ul li span:nth-child(1){
		width: 32px;
		height: 32px;
		text-align: center;
		line-height: 32px;
		display: inline-block;
		background-color: #3b85f5;
		border-radius: 50%;
		font-size: 12px;
		font-weight: 500;
		color:#fff;
		margin-right: 48px !important;
	}
	.destruction ul li span:nth-child(2){
		width: 328px;
		display: inline-block;
		font-weight: 500;
		color:#2f363d;
	}
	.destruction ul li span:nth-child(3){
		width: 306px;
		display: inline-block;
		font-size: 20px;
		font-weight: 500;
		color:#3b85f5 !important;
	}
	.destruction ul li span:nth-child(4){
		word-break:break-all;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp:1;
		overflow: hidden;
		font-size: 14px;
		color:#657585;
	}
	.contact{
		width: 1200px;
		padding: 0 30px;
		margin: 0 auto;
		display: block;
	}
	.contact_box{
		background: #f5f5fa;
		border-radius: 8px;
		justify-content: space-between;
		display: flex;
		align-items: center;
		padding: 24px 26px 40px 35px;
		margin-bottom: 50px !important;
	}
	.contact_left{
		display: block;
	}
	.contact_left p:nth-child(1){
		font-size: 20px;
		font-weight: 500;
		color:#3b85f5 !important;
		display: block;
	}
   .contact_left p:nth-child(2){
	   font-size: 20px;
	   color:#2f363d;
   }
	.contact_box a{
		display: inline-block;
		text-decoration: none;
		width: 180px;
		height: 48px;
		line-height: 48px;
		border-radius: 4px;
		background-color: #3b85f5;
		color: #e0edff;
		text-align: center;
		font-weight: 500;
	}
	/*动画效果*/
	.v-enter,
	.v-leave-to{
		opacity: 0;
		transform: translateY(80px);
	}
	.v-enter-active,
	.v-leave-active{
		transition:all 1s;
	}
	.v-move{
		transition:all 0.8s ease;
	}
	.v-leave-active{
		position: absolute;
	}
</style>
