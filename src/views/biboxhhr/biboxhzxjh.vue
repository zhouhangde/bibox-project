<template>
    <div class="biboxhxjh">
      <!--头部banner图-->
      <div class="banner loginout_banner">
        <div class="plan_banner">
          <a href="#" class="plan_account go-active">
            机构账户
            <i class="el-icon-right"></i>
          </a>
        </div>
      </div>
      <!--参与条件盒芯权益-->
      <div class="plan_max pd_t24">
           <div class="flex-box can-bor">
               <div class="tc-primary w-953">
                   <p class="can_title">参与条件</p>
                   <p class="plan_can">凡 BIX 锁仓数量 ≥5,000 枚且锁仓 1 年的用户均可申请成为 Bibox“盒芯“, 加入 Bibox 全球 “盒芯” 联盟。每年 Bibox 将举办 Bibox“盒芯” 联盟会议, 共同探讨 Bibox 社区下一步发展规划</p>
                </div>
                <div class="can_btn">
                     <p class="marginNo">立即锁仓参与</p>
                </div>
           </div>
              <p class="plan_equity">"和芯"权益</p>
              <ul class="ul-reset flex-box flex-wrap mg-t48">
                  <li class="plan_item" v-for="(item,index) in iconList" :key="index">
                      <p class="marginNo">
                         <img :src="item.img" alt="">
				      </p>
				      <p class="marginNo mg-t8 ts-16 tc-primary tw-b">{{item.title}}</p>
                 </li>
             </ul>
		      <p class="marginNo text-center mg-t48 tc-second">BIX抵扣合约手续费等更多福利不断更新，敬请期待！</p>
      </div>
      <!--邀请奖励-->
        <div class="plan_invitation">
		    <div class="invitation_max">
                 <h2 class="reward">邀请奖励</h2>
			     <div class="level-explain">
					<!--盒子标题-->
                     <ul class="ul-reset">
                         <li class="level">"盒芯"级别</li>
						 <li class="level">邀请人数</li>
                         <li class="level">BIX锁仓数量</li>
                         <li class="level tex">
				             <p class="marginNo">手续费率</p>
				             <p class="ts-12 tc-feature marginNo">用BIX抵扣还可享5折</p>
			             </li>
						 <li class="level">"盒芯"级别</li>
                         <li class="level">"盒芯"级别</li>
                         <li class="level">"盒芯"级别</li>
                         <li class="level">"盒芯"级别</li>
                     </ul>
					 <!--铁盒 铜盒 银盒 金盒-->
					<ul class="te_box">
						<li class="" v-for="(item,id) in rewardList" :key="id">
							<span>
								<img :src="item.img" alt="">
							</span>
							<span class="border-r label pd-tb16 tc-primary text-center ts-16 pd-lr8">R&lt;=10</span>
							<span class="border-r label tc-primary text-center ts-16 pd-lr8 h-56">
								<p class="border-b marginNo pd-b2">5000-50W</p>
								<p class="marginNo pd-t2">50W以上</p>
							</span>
							<span class="border-r label tc-primary text-center ts-16 pd-lr8 h-56">
								<p class="border-b marginNo pd-b2">5000-50W</p>
								<p class="marginNo pd-t2">50W以上</p>
							</span>
							<span class="border-r label tc-primary text-center ts-16 pd-lr8 h-56">
								<p class="border-b marginNo pd-b2">5000-50W</p>
								<p class="marginNo pd-t2">50W以上</p>
							</span>
							<span class="border-r label pd-tb16 tc-primary text-center ts-16 pd-lr8">R&lt;=10</span>
							<span class="border-r label tc-primary text-center ts-16 pd-lr8 h-56">
								<p class="border-b marginNo pd-b2">5000-50W</p>
								<p class="marginNo pd-t2">50W以上</p>
							</span>
							<span class="border-r label pd-tb16 tc-primary text-center ts-16 pd-lr8">R&lt;=10</span>
						</li>
					</ul>
					<!--立即锁仓参与-->
					<div class="lock">
						<p class="lock_btn">立即锁仓参与</p>
					</div>
			     </div>
            </div>
        </div>
		<!--活动规则-->
		<div class="plan_activity">
			<p class="gui">活动规则</p>
			<ul class="">
				<li class="" v-for="(item,index) in activityList" :key="index">{{item.title}}</li>
			</ul>
			<p class="te">特殊说明</p>
			<ul>
				<li v-for="(item,index) in specialList" :key="index">{{item.title}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
    export default {
        name: "biboxhxjh",
        data(){
          return{
              //盒芯权益模拟数据
              iconList:[
                {id:1,img:require('../../../src/assets/img/plan_img/plan_1.png'),title:'锁仓收益'},
                {id:2,img:require('../../../src/assets/img/plan_img/plan_2.png'),title:'邀请返佣'},
                {id:3,img:require('../../../src/assets/img/plan_img/plan_3.png'),title:'费率折扣'},
                {id:4,img:require('../../../src/assets/img/plan_img/plan_4.png'),title:'推荐大奖'},
                {id:5,img:require('../../../src/assets/img/plan_img/plan_5.png'),title:'糖果奖励'},
                {id:6,img:require('../../../src/assets/img/plan_img/plan_6.png'),title:'优先得奖'},
                {id:7,img:require('../../../src/assets/img/plan_img/plan_7.png'),title:'优先投资'},
                {id:8,img:require('../../../src/assets/img/plan_img/plan_8.png'),title:'专属身份'},
                {id:9,img:require('../../../src/assets/img/plan_img/plan_9.png'),title:'直通渠道'},
                {id:10,img:require('../../../src/assets/img/plan_img/plan_10.png'),title:'定制周边'},
            ],
			 //邀请奖励数据
			  rewardList:[
				  {id:1,img:require('../../../src/assets/img/plan_img/te_1.png'),
					  ren:'R<=10',lang_s:'5000-50W',lang_x:'50W以上',so_s:'0.09%',so_x:'0.072%',
					  yi_s:'20%',yi_x:'30%',hon:'2%',er_s:'5%',er_x:'6%',erji:'1%'},
				  {id:2,img:require('../../../src/assets/img/plan_img/te_2.png'),
					  ren:'R<=10',lang_s:'5000-50W',lang_x:'50W以上',so_s:'0.09%',so_x:'0.072%',
					  yi_s:'20%',yi_x:'30%',hon:'2%',er_s:'5%',er_x:'6%',erji:'1%'},
				  {id:3,img:require('../../../src/assets/img/plan_img/te_3.png'),
					  ren:'R<=10',lang_s:'5000-50W',lang_x:'50W以上',so_s:'0.09%',so_x:'0.072%',
					  yi_s:'20%',yi_x:'30%',hon:'2%',er_s:'5%',er_x:'6%',erji:'1%'},
				  {id:4,img:require('../../../src/assets/img/plan_img/te_4.png'),
					  ren:'R<=10',lang_s:'5000-50W',lang_x:'50W以上',so_s:'0.09%',so_x:'0.072%',
					  yi_s:'20%',yi_x:'30%',hon:'2%',er_s:'5%',er_x:'6%',erji:'1%'},
			  ],
			 //活动规则数据
			  activityList:[
				  {id:1,title:'1. 北京时间2019年7月12日22:00—北京时间2019年8月11日22:00，' +
					  '        锁仓成为“盒芯”的用户皆可享受“银盒子”福利，邀请人数大于200人时，' +
					  '        享受相应等级的福利；'},
				  {id:2,title:'2. 好友关系永久生效，北京时间每天8:00更新当天好友返佣比例，' +
					  '        比例根据过去30天邀请好友的总数确定；'},
				  {id:3,title:'3. 自北京时间2019年7月19日当周起，BIX鼓励金奖励比例调整为10%；'},
				  {id:4,title:'4. 完成手机号注册/绑定、实名认证、交易等任意一项操作的受邀好友，即为有效好友；'},
				  {id:5,title:'5. 交易返佣金额以平台实收手续费为准'},
				  {id:6,title:'6. 机构客户、子账户不参与邀请返佣'},
			  ],
			 //特殊说明数据
			  specialList:[
				  {id:1,title:'若锁仓期满不再继续锁仓，取消“盒芯”资格，不再享受手续费率优惠及好友锁仓分红奖励，' +
					  '        但一级好友关系永久生效，返佣比例统一调整为20%，如果后续继续参与“盒芯”锁仓，' +
					  '        则恢复原有等级及福利。'}
			  ]
          }
        },
        methods:{

        }
    }
</script>

<style scoped>
	.loginout_banner{
		background-color: #060320;
		height: 376px;
	}
	.plan_banner{
		background-image:url("../../../src/assets/img/plan_img/plan_banner.png");
		min-width: 1200px;
		max-width: 1440px;
		margin: 0 auto;
		height:100%;
		background-repeat:no-repeat;
		background-size:1440px 100%;
		position: relative;
		background-position: 50%;
	}
	.plan_account{
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
	.plan_max{
		width: 1200px;
		padding:0 30px;
		margin: 0 auto;
	}
	.pd_t24{
		padding-top: 24px !important;
	}
	.can-bor{
		border-bottom: 4px solid #23ad76;
	}
	.flex-box{
		justify-content: space-between;
		display: flex;
		align-items: center;
		margin: 0;
		padding: 0;
		list-style-type:none;
		align-items: center;
		padding-bottom: 24px !important;
	}
    .tc-primary{
		color:#18232e;
	}
	.w-953{
		width: 953px;
	}
	.can_title{
		line-height: 2;
		font-size: 12px;
		font-weight: 500;
	}
	.plan_can{
		font-size: 14px;
	}
	.can_btn{
		color:#e0ecff;
		background-color: #23ad76;
		border-radius:29px;
		box-sizing: border-box;
		text-align: center;
		padding-top: 16px !important;
		padding-bottom: 16px !important;
		padding-left: 24px !important;
		padding-right: 24px !important;
		width:167px;
	}
	.plan_item{
		width:20%;
		text-align: center;
		margin-top: 30px !important;
	}
	.plan_equity{
		font-size: 40px;
		text-align: center;
		font-weight: 700;
		margin-top: 80px !important;
	}
	/*和芯权益样式*/
	.flex-box.flex-wrap{
		flex-wrap:wrap;
	}
	.ul-reset{
		list-style-type:none;
		padding:0;
		margin: 0;
	}
	.marginNo{
		margin: 0;
	}
	.ts-16{
		font-size: 16px;
	}
	.tc-primary{
		color:#18232e;
	}
	.tw-b{
		font-weight: 600;
	}
	.mg-t8{
		margin-top: 8px !important;
	}
	.text-center{
		text-align: center;
	}
	.tc-second{
		color:#657585;
	}
	.mg-t48{
		margin-top: 48px !important;
	}
	.plan_invitation{
		background-color: #f5f5fa;
		margin-top: 48px !important;
	}
	.invitation_max{
		width: 1200px;
		padding: 0 30px;
		margin: 0 auto;
	}
	.reward{
		font-size: 40px;
		margin: 0;
		text-align: center;
		font-weight: 600;
		color:#18232e;
		margin-bottom: 48px !important;
		padding-top: 80px !important;
	}
	.level-explain{
		padding-bottom: 48px !important;
	}
	.ul-reset{
		list-style-type: none;
		padding: 0;
		margin: 0;
		display: flex;
		align-items: center;
	}
	/*铁盒样式*/
	.level{
		width: 151px;
		margin-left: 19px;
		font-size: 14px;
		text-align: left;
		color:#657585;
	}
	.te_box li{
		background-color: #fff;
		margin-top: 20px !important;
		border-radius: 4px;
		padding: 5px;
	}
	.te_box li img{
		width: 56px;
		height: 56px;
		margin-top:10px;
		margin-left: 10px;
	}
	.ts-12{
		font-size:12px;
	}
	.tc-feature{
		color:#8494ad;
	}
	.tex{
		text-align: center;
	}
	.mg-t8{
		margin-top:8px !important;
	}
	.pd-tb16{
		padding-top: 16px !important;
		padding-bottom: 16px !important;
	}
	.border-r{
		border-right:1px solid #e6e6eb;
	}
	.label{
		display: inline-block;
		width: 128px;
	}
	.pd-lr8{
		padding-left: 8px !important;
		padding-right: 8px !important;
	}
	.border-b{
		border-bottom:1px solid #e6e6eb;
	}
	.pd-b2{
		padding-bottom: 2px;
	}
	.pd-t2{
		padding-top: 2px;
	}
    .lock{
		margin-top: 30px !important;
		text-align: center;
	}
	.lock_btn{
		background-color:#23ad76;
		color:#e0ecff;
		text-align: center;
		border-radius: 30px;
		padding-top:16px !important;
		padding-bottom: 16px !important;
		width: 140px;
		display: inline-block;
		font-size: 16px;
	}
    /*活动规则样式*/
	.plan_activity{
		width: 1200px;
		padding: 0 30px;
		margin: 0 auto;
		padding-top: 48px!important;
		padding-bottom: 48px !important;
	}
	.gui{
		margin: 0;
		font-size: 20px;
		color:#2f363d;
	}

</style>
