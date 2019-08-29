<template>
  <div class="hxjh">
	  <!--头部banner图-->
      <div class="project">
		  <div class="project_banner">
			  <a href="#"><i class="el-icon-document"></i>申购/中签</a>
		  </div>
	  </div>
	  <!--中间发布内容盒子-->
	  <div class="release">
		  <!--中间发布盒子规则-->
		   <div class="release_box">
			   <!--中间盒子-->
                <div class="content_box">
					<li>
						<!--已发币-->
						<div class="btn_pending">已发币</div>
						<p class="content_banner"><img src="../../src/assets/img/project/content.jpg" alt=""></p>
						<p class="content_icon"><img src="../../src/assets/img/project/content_icon.jpg" alt=""></p>

							<p class="content_title pd-all">BPT</p>
							<p class="pd-all">BlockPool 是国内知名的硬件芯片驱动高性能公链 HPB 芯链孵化的产品。它是一个快速成长的矿池, 背后由区块链、硬件芯片、人工智能 等资深研发人员组成, 致力于打造国际国内一流的矿池。BlockPool 会发挥在硬件芯片技术、区块链技术、以及现有HPB社区及合作伙伴的影响力, 与各项目方和社区一起共同努力, 为用户资产获取更大利益。</p>
							<p class="pd-all">抢购周期
								08/21 18:00:00 - 08/22 18:00:00</p>
							<p class="pd-all">募集总量
								30,000,000 BPT</p>

					</li>
				</div>
			   <!--规则-->
			   <div class="rule">
				   <p>Bibox Orbit活动规则</p>
				   <p>活动时间</p>
				   <ul>
					   <li>1.申购期：北京时间2019/08/21 18:00 - 2019/08/22 18:00</li>
					   <li>2.开签时间：北京时间2019/08/22 22:00</li>
				   </ul>
				   <p>申购规则</p>
				   <li>1.平台将仅快照用户钱包/币币账户中BIX可用资产，不包含挂单或冻结资产以及“盒芯”锁仓或鼓励金锁仓资产；</li>
				   <li>2.用户持有BIX资产越多，可获得的申购额度越高，实际中签概率将相应增加；</li>
				   <li>3.中签用户在申购期间未使用USDT进行申购，所获签号将作废；</li>
				   <p>注意事项</p>
				   <li>1.为满足相关法律法规，参与恒星计划的用户需要完成实名认证，同一身份的账户只能参与一次；</li>
				   <li>2.Bibox保留对活动的最终解释权。</li>
			   </div>
		   </div>
	  </div>
  </div>
</template>

<script>
// import FilterView from "../components/FilterView";
export default {
  name: "hxjh",
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
	li{
		list-style: none;
	}
	.hxjh {
         width: 100%;
         overflow: auto;
         box-sizing: border-box;
    }
	.project{
		background-color: #060320;
		height: 180px;
	}
	.project_banner{
		background-image:url("../../src/assets/img/project/project_banner.png");
		min-width: 1200px;
		max-width: 1440px;
		margin: 0 auto;
		height:100%;
		background-repeat:no-repeat;
		background-size:1440px 100%;
		position: relative;
		background-position: 50%;
	}
    .project_banner a{
		position: absolute;
		right: 120px;
		top:16px;
		font-size: 14px;
		font-weight: 700;
		user-select: none;
		cursor: pointer;
		text-decoration: none;
		color:#3b85f5 !important;
	}
	.release{
		margin-bottom: 0;
		position: relative;
		display: block;
	}
	.release_box{
		width: 1200px;
		padding: 0 30px;
		margin: 0 auto;
		display: block;
	}
	.content_box{
		position: relative;
		overflow: hidden;
		border-radius: 4px;
		width: 384px;
		height: 457px;
		margin-bottom: 64px;
		box-sizing: border-box;
		margin-right: 24px;
		cursor: pointer;
		display: block;
		margin-top: 40px !important;
	}
	.btn_pending{
		border-radius: 4px 0 4px;
		color:#fff;
		position: absolute;
		font-size: 16px;
		background-color:#60a33e;
		text-align: center;
	}
	.content_icon{
		display: inline-block;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		position: absolute;
		left: 24px;
		top:165px;
		overflow: hidden;
	}
	.content_banner img{
		width: 100%;
		height: 200px;
		display: inline-block;
		border-radius: 4px 4px 0 0;
		border-style:none;
	}
	.content_title{

	}
	.pd-all{
		padding: 36px 24px 24px;
		background-color: #fff;
	}
</style>
