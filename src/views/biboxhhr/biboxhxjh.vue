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
        <div class="flex-box">
          <div class="tc-primary w-953">
            <p class="can_title">参与条件</p>
            <p class="plan_can">凡 BIX 锁仓数量 ≥5,000 枚且锁仓 1 年的用户均可申请成为 Bibox“盒芯“, 加入 Bibox 全球 “盒芯” 联盟。每年 Bibox 将举办 Bibox“盒芯” 联盟会议, 共同探讨 Bibox 社区下一步发展规划</p>
          </div>
          <div class="can_btn">
            <p class="marginNo">立即锁仓参与</p>
          </div>
        </div>
        <p class="plan_equity">"和芯"权益</p>
        <ul>
          <li class="plan_item" v-for="(item,id) in iconList" :key="id">
            <p class="marginNo">
              <img :src="iconList.img" alt="">
            </p>
            <p>{{iconList.title}}</p>
          </li>
        </ul>
        <p class="marginNo text-center mg-t48 tc-second">BIX抵扣合约手续费等更多福利不断更新，敬请期待！</p>
      </div>
      <!--邀请奖励-->
      <div class="plan_invitation">
        <div class="invitation_max">
          <h2 class="reward">邀请奖励</h2>
          <div class="level-explain">
            <ul class="ul-reset">
              <li class="level">"盒芯"级别</li>
              <li class="level">"盒芯"级别</li>
              <li class="level">"盒芯"级别</li>
              <li class="level">"盒芯"级别</li>
              <li class="level">"盒芯"级别</li>
              <li class="level">"盒芯"级别</li>
              <li class="level">"盒芯"级别</li>
              <li class="level">"盒芯"级别</li>
            </ul>
            <ul></ul>
          </div>
        </div>
      </div>
	</div>
</template>

<script>
    export default {
        name: "biboxhxjh",
        data(){
          return{
              iconList:[
                // {id:1,img:'../../src/assets/img/plan_1.png',title:'锁仓收益'},
                // {id:2,img:'../../src/assets/img/plan_2.png',title:'锁仓收益'},
                // {id:3,img:'../../src/assets/img/plan_3.png',title:'锁仓收益'},
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
		/* background-image:url("../../src/assets/img/plan_banner.png"); */
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
	.flex-box{
		justify-content: space-between;
		display: flex;
		align-items: center;
		margin: 0;
		padding: 0;
		list-style-type:none;
		align-items: center;
		border-bottom:4px solid #23ad76;
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
	}
	.plan_item{
		width:20%;
		text-align: center;
	}
	.plan_equity{
		font-size: 40px;
		text-align: center;
		font-weight: 700;
		margin-top: 80px !important;
	}
	.marginNo{
		margin: 0;
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
	.level{
		width: 151px;
		margin-left: 19px;
		font-size: 14px;
		text-align: left;
		color:#657585;
	}
</style>
