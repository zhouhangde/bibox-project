<template>
  <div class="cshhr">
	  <!--头部banner图-->
     <div class="city">
		 <div class="city_banner">
			 <a href="#" class="city_account go-active">机构账户<i class="el-icon-right"></i></a>
		 </div>
	 </div>
	  <!--活动介绍城市合伙人福利-->
	  <div class="city_max">
		  <!--活动介绍-->
           <div class="activity">
			   <p class="huo">活动介绍</p>
			   <div class="activity_z">
				   <div class="activity_z_box">
					   <ul>
						   <li class="activity_list">为赋予BIX持有者社区治理权利，进一步推动Bibox向社区自治化发展进程，Bibox将面向全球招募“城市合伙人”。
							   每位城市合伙人除了享受“盒芯”福利外，还能获得多达 <span>1,000,000枚BIX </span> 的奖励。
							   <a href="#"> 点此查看详情</a>
						   </li>
						   <li class="activity_sublist">
							   <span>参与条件:</span> 每个城市有且仅有一位“城市合伙人”，每位任期5年。一线城市合伙人BIX锁仓量不低于1,000,000枚，
							   非一线城市合伙BIX锁仓量不低于500,000枚，且每年需完成一定的社区治理任务，详情咨询Bibox微信客服（BiboxKf-02）
						   </li>
					   </ul>
				   </div>
				   <a class="activity_y">
					   <p>立即申请</p>
					   <p>让我们更了解你</p>
				   </a>
			   </div>
			   <div class="bol"></div>
		   </div>
		  <!--合伙人福利-->
		  <div class="welfare">
			  <p class="welfare_title">城市合伙人福利</p>
               <!--图片文字区域-->
			  <div class="profit">
				  <div>
					  <div class="profit_1 profit_img"></div>
					  <p class="profit_title">年化收益10%</p>
				  </div>
				  <div>
					  <div class="profit_2 profit_img"></div>
					  <p class="profit_title">年化收益10%</p>
				  </div>
				  <div>
					  <div class="profit_3 profit_img"></div>
					  <p class="profit_title">年化收益10%</p>
				  </div>
				  <div>
					  <div class="profit_4 profit_img"></div>
					  <p class="profit_title">年化收益10%</p>
				  </div>
			  </div>
			  <div class="profit">
				  <div>
					  <div class="profit_5 profit_img"></div>
					  <p class="profit_title">年化收益10%</p>
				  </div>
				  <div>
					  <div class="profit_6 profit_img"></div>
					  <p class="profit_title">年化收益10%</p>
				  </div>
				  <div>
					  <div class="profit_7 profit_img"></div>
					  <p class="profit_title">年化收益10%</p>
				  </div>
				  <div>
					  <div class="profit_8 profit_img"></div>
					  <p class="profit_title">年化收益10%</p>
				  </div>
			  </div>
		  </div>
	  </div>
	  <!--合伙人奖励-->
	  <div class="city_reward">
		  <div class="city_box">
			  <p class="city_reward_title">城市邀请人奖励</p>
			  <!--合伙人奖励数据-->
			  <div class="reward_tab">
				  <ul class="reward_title">
					  <li class="reward_item">级别</li>
					  <li class="reward_item">邀请人数</li>
					  <li class="reward_item">手续费折扣</li>
					  <li class="reward_item">BIX抵扣手续费折扣</li>
					  <li class="reward_item">
						  <p>一级好友</p>
						  <p>交易返佣</p>
					  </li>
					  <li class="reward_item">
						  <p>一级好友</p>
						  <p>锁仓分红</p>
					  </li>
					  <li class="reward_item">
						  <p>二级好友</p>
						  <p> 交易返佣</p>
					  </li>
					  <li class="reward_item">
						  <p>二级好友</p>
						  <p>锁仓分红</p>
					  </li>
				  </ul>
				  <ul class="reward_subtitle">
					  <li class="reward_subitem pd-lr16" v-for="(item,index) in rewardList" :key="index">
						  <span class="bor_right">
							  <img :src="item.img" alt="">
							  <a href="#">{{item.he}}</a>
						  </span>
						  <span class="bor_right pd-tb8 pd-lr8">{{item.ren}} </span>
						  <span class="bor_right pd-tb8 pd-lr8">{{item.xu}}</span>
						  <span class="bor_right pd-tb8 pd-lr8">{{item.bix}}</span>
						  <span class="bor_right pd-tb8 pd-lr8">{{item.yi}}</span>
						  <span class="bor_right pd-tb8 pd-lr8">{{item.hon}}</span>
						  <span class="bor_right pd-tb8 pd-lr8">{{item.fan}}</span>
						  <span class="pd-tb8 pd-lr8">{{item.fen}}</span>
					  </li>
				  </ul>
			  </div>
			  <!--现在申请按钮-->
			  <div class="apply">
				  	<p class="ts-12">现在申请</p>
				  	<p class="tw-b">享30天"银盒plus"福利</p>
			  </div>
		  </div>
	  </div>
	  <!--活动规则-->
	  <div class="city_rule">
			  <p class="rule_title">活动规则</p>
			  <ul class="rule_life">
				  <li>1. 每个城市有且仅可有一位 “城市合伙人”, 每届任期 5 年。每年根据社区治理目标完成度评估奖励, 未通过考核者将视为放弃该年度奖励</li>
				  <li>2. 一线城市合伙人五年定期锁仓量不低于 1,000,000 枚 BIX, 非一线城市五年定期锁仓量不低于 500,000 枚 BIX</li>
				  <li>3. 活动正式开启, 前一个月申请为 “城市合伙人” 的用户, 皆可享受 30天“银盒子plus” 返佣福利</li>
				  <li>4. 好友关系永久生效, 北京时间每天 8:00 更新当天好友返佣比例。比例根据过去 30 天邀请好友的总数确定</li>
				  <li>5. 完成手机号注册/绑定、实名认证、交易任意一项操作的受邀好友, 即为有效好友</li>
				  <li>6. 手续费返佣比例以平台实收手续费进行计算</li>
				  <li>7. 机构客户不参与邀请返佣</li>
			  </ul>
		      <p class="rule_subtitle">特殊说明</p>
			  <ul class="rule_sub">
				  <li>1. 因个人原因申请退任, Bibox 将启动城市合伙人退任程序, 其锁仓的BIX将全部线性释放至个人账户, 半年内不可再申请。</li>
				  <li>2. 凡在任期内出现任何伤害 Bibox 品牌或社区整体利益的行为或不作为, 将视为放弃 “城市合伙人”身份, 取消其年度奖励；</li>
				  <li>3. 5 年任期期满后, 可申请续任, 续任的奖励规则参考当时最新的 “城市合伙人” 计划, 如不续任将取消 Bibox “城市合伙人” 身份及相关权益。</li>
			  </ul>
	  </div>
  </div>
</template>

<script>
// import FilterView from "../components/FilterView";
export default {
  name: "cshhr",
  data() {
    return {
    	//城市邀请人奖励
		rewardList:[
			{id:1,img:require('../../../src/assets/img/plan_img/te_1.png'),
				he:'铁盒Plus',ren:'R<=10',xu:'70%',bix:'36%',yi:'30%',hon:'2%',fan:'6.0%',fen:'1.0%'},
			{id:2,img:require('../../../src/assets/img/plan_img/te_2.png'),
				he:'铜盒Plus',ren:'10<R<=200',xu:'64%',bix:'32%',yi:'38%',hon:'3%',fan:'7.2%',fen:'1.5%'},
			{id:3,img:require('../../../src/assets/img/plan_img/te_3.png'),
				he:'银盒Plus',ren:'200<R<=1000',xu:'56%',bix:'28%',yi:'45%',hon:'5%',fan:'9.6%',fen:'2.5%'},
			{id:4,img:require('../../../src/assets/img/plan_img/te_4.png'),
				he:'金盒Plus',ren:'R>100',xu:'48%',bix:'24%',yi:'60%',hon:'6%',fan:'12.0%',fen:'3.0%'},
		],

    };
    methods:{

	}
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
    .cshhr {
         width: 100%;
         overflow: auto;
         box-sizing: border-box;
    }
	.city{
		background-color: #060320;
		height: 376px;
	}
	.city_banner{
		background-image:url("../../../src/assets/img/plan_img/city_banner.png");
		min-width: 1200px;
		max-width: 1440px;
		margin: 0 auto;
		height:100%;
		background-repeat:no-repeat;
		background-size:1440px 100%;
		position: relative;
		background-position: 50%;
	}
	.city_account{
		font-size: 14px;
		font-weight: 700;
		color:#3b85f5 !important;
		cursor: pointer;
		user-select: none;
		text-decoration: none;
	}
	.go-active{
		position: absolute;
		right: 120px;
		top: 24px;
	}
    .city_max{
		width: 1200px;
		padding:0 30px;
		margin: 0 auto;
		padding-top: 24px !important;
	}
    .activity{
		width: 1200px;
		padding: 0 30px;
		margin: 0 auto;
		padding-top: 48px !important;
		display: block;
	}
	.huo{
		color:#3b6cf5;
		margin: 0;
		font-size: 20px;
	}
	.activity_z{
		list-style-type:none;
		padding: 0;
		display: flex;
		align-items: center;
		padding-top: 16px !important;
	}
	.bol{
		width: 1200px;
		height: 4px;
		background-color:#d6f1ff;
		margin-top: 32px !important;
	}
	.activity_z_box{
		border-right:1px solid #e6e6eb;
		padding-right: 48px !important;
		margin-right: 48px !important;
		display: block;
	}
	.activity_z_box li{
		line-height: 30px;
	}
	.activity_z_box span:nth-child(1){
		color:#3b85f5;
		font-size: 17px;
		font-weight: 700;
	}
	.activity_z_box span:nth-child(2){
		color:#3b85f5;
		font-size: 10px;
	}
	.activity_z_box .activity_list{
		font-size: 16px;
	}
	.activity_z_box .activity_sublist{
		font-size: 12px;
	}
	.activity_y{
		width: 164px;
		padding: 12px 0;
		background-color: #3b6cf5;
		flex-shrink: 0;
		text-decoration: none;
		color:#e0ecff;
		text-align: center;
		border-radius: 32px;
	}
	.welfare_title{
		font-size: 40px;
		margin: 0;
		font-weight: 600;
		color:#18232e;
		padding-bottom: 48px !important;
		padding-top: 80px !important;
		text-align: center;
	}
	.profit{
		list-style-type: none;
		padding: 0;
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color:#18232e;
	}
	.profit_1{
		background-position: 0 0;
	}
	.profit_2{
		background-position: -240px 0;
	}
	.profit_3{
		background-position:-480px 0;
	}
	.profit_4{
		background-position:-720px 0;
	}
	.profit_5{
		background-position:0 100px;
	}
	.profit_6{
		background-position:-240px 100px;
	}
	.profit_7{
		background-position:-480px 100px;
	}
	.profit_8{
		background-position:-720px 100px;
	}

	.profit_img{
		width: 240px;
		height: 100px;
		background-image:url("../../../src/assets/img/plan_img/profit.png");
		background-size:960px 200px !important;
	}
	.profit_title{
		margin: 0;
		text-align:center;
		font-weight: 600;
		padding-top: 16px !important;
		font-size: 16px;
	}
	/*城市合伙人样式*/
	.city_reward{
		background-color: #f5f5fa;
		width: 100%;
		padding-bottom: 48px !important;
		margin-top: 80px !important;
	}
	.city_box{
		width: 1200px;
		padding: 0 30px;
		margin: 0 auto;
		display: block;
	}
	.city_reward_title{
		font-size: 40px;
		text-align: center;
		margin: 0;
		font-weight: 600;
		color:#18232e;
		margin-bottom: 48px !important;
		padding-top: 80px !important;
	}
	.reward_tab{
		padding-bottom: 48px !important;
	}
	.reward_title{
		list-style-type: none;
		padding: 0;
		margin: 0;
		display: flex;
		align-items: center;
	}
	.reward_item{
		width: 151px;
		margin-left: 19px;
		font-size: 14px;
		text-align: left;
		color:#657585;
	}
	.reward_subtitle{
		list-style-type: none;
		padding: 0;
		margin: 0;
		padding-top: 16px !important;
	}
	.reward_subitem{
		border-radius: 4px;
		background-color: #fff;
		list-style-type: none;
		display: flex;
		align-items: center;
		margin-top: 8px !important;
		padding-top: 16px !important;
		padding-bottom: 16px !important;
	}
	.pd-lr16{
		padding-left: 16px !important;
		padding-right: 16px !important;
	}
	.reward_subtitle img{
		width: 40px;
		height:40px;
	}
	.reward_subtitle a{
		text-decoration: none;
		color:#18232e;
		padding-left: 5px;
		font-weight: 600;
		font-size: 18px;
	}
	.bor_right{
		border-right:1px solid #e6e6eb;
	}
	.reward_subtitle span:nth-child(1){
		width: 151px;
		padding-right: 10px;
		display: flex;
		align-items: center;
		color:#18232e;
	}
	.reward_subtitle span:nth-child(2){
        display: inline-block;
		width: 128px;
		text-align: center;
		font-size:16px;
	}
	.reward_subtitle span{
		width: 128px;
		text-align: center;
		font-size: 16px;
	}
	.pd-tb8{
		padding-top: 8px !important;
		padding-bottom: 8px !important;
	}
	.pd-lr8{
		padding-left: 8px !important;
		padding-right: 8px !important;
	}
	.apply{
		padding: 12px 0;
		border-radius: 32px;
		background-color: #3b6cf5;
		flex-shrink: 0;
		text-decoration: none;
		width:232px;
		min-width:330px;
		cursor: pointer;
		margin: 0 auto;
		color:#e0ecff;
		text-align: center;
		display: block;
	}
	.ts-12{
		font-size: 12px;
		display: block;
	}
	.tw-b{
		font-weight: 600;
		font-size: 16px;
		line-height: 30px;
	}
	.city_rule{
		width: 1200px;
		padding: 0 30px;
		margin: 0 auto;
		font-size: 14px;
		color:#657585;
		padding-top: 48px !important;
		display: block;
	}
	.city_rule .rule_title{
		font-size: 20px;
		color:#2f363d;
		padding-bottom: 24px !important;
	}
	.rule_life li{
		line-height: 30px;
		font-size: 14px;
	}
	.rule_subtitle{
		font-size: 14px;
		font-weight: 500;
		color:#000000;
		padding-top: 30px;
		padding-bottom: 20px;
	}
	.rule_sub{
		line-height: 30px;
		font-size: 14px;
		padding-bottom: 30px;
	}
</style>
