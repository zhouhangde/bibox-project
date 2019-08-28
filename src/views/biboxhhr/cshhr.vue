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

			  </div>
		  </div>
	  </div>
  </div>
</template>

<script>
// import FilterView from "../components/FilterView";
export default {
  name: "cshhr",
  data() {
    return {
    	//活动介绍数据

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
         height: 800px;
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
	}
</style>
