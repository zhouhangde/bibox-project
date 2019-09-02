<template>
  <div class="staking">
	  <div class="staking_banner">
		  <div class="banner_center">
			  <!--抵押/收益记录-->
			  <span class="staking_indexs"><a href="javascript:">抵押/收益记录  <i class="iconfont icon-jilu"></i> </a></span>
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
					  <li class="ul_reset_item" v-for="(item,index) in flexList" :key="item.id">
						  <p><img :src="item.img" alt=""></p>
						  <p class="flexible">{{item.title}}</p>
						  <p class="sub_flexible">{{item.subtitle}}</p>
					  </li>
				  </ul>
				  <!--当前挖矿收益标题-->
				  <h2 class="now">当前 Staking ATOM 挖矿收益</h2>
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
                  <!--图表盒子-->
				  <div class="chart">
					  <!--图表四个盒子-->
					  <div class="chart_box">
						  <!--图表左边线条-->
						  <div class="chart_left">
							  <span>收益率</span>
							  <div> <i class="icon iconfont icon-f11" style=""></i> </div>
						  </div>
						  <div class="chart_one">
							  <div class="more">越早参与收益越高</div>
							  <div class="top_line"></div>
							  <div class="chart_content">
								  <p>18.73%</p>
								  <p>总用户抵押资产不超过 10 万 ATOM 时,
									  享受 18.73% 年化收益,</p>
							  </div>
						  </div>
						  <div class="chart_one">
							  <div class="more">越早参与收益越高</div>
							  <div class="top_line"></div>
							  <div class="chart_content">
								  <p>18.73%</p>
								  <p>总用户抵押资产不超过 10 万 ATOM 时,
									  享受 18.73% 年化收益,</p>
							  </div>
						  </div>
						  <div class="chart_one">
							  <div class="more">越早参与收益越高</div>
							  <div class="top_line"></div>
							  <div class="chart_content">
								  <p>18.73%</p>
								  <p>总用户抵押资产不超过 10 万 ATOM 时,
									  享受 18.73% 年化收益,</p>
							  </div>
						  </div>
						  <div class="chart_one">
							  <div class="more">越早参与收益越高</div>
							  <div class="top_line"></div>
							  <div class="chart_content">
								  <p>18.73%</p>
								  <p>总用户抵押资产不超过 10 万 ATOM 时,
									  享受 18.73% 年化收益,</p>
							  </div>
						  </div>
					  </div>
					  <!--图表下面线条-->
					  <div class="botton_line">
						  <div></div>
					  </div>
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

<style scoped lang="less">

.staking {
  width: 100%;
  min-width:1260px;
  overflow: auto;
  box-sizing: border-box;
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
	.staking_indexs{
		text-decoration:none;
		width: 1200px;
		margin: 0 auto;
		display: block;
		font-size: 14px;
		font-weight: 500;
		text-align: right;
		padding-top: 16px !important;
		padding-bottom: 4px !important;
		a{
			color:#3b85f5 !important;
		}
	}
	.text_center{
		text-align: center;
		display: block;
		span:nth-child(1){
			width: 40px;
			height: 38px;
			img{
				width: 40px;
				height: 38px;
			}
		}
		span:nth-child(2){
			color:#f5faff;
			font-size: 40px;
			font-weight: 500;
			text-align: center;
			padding-left: 16px !important;
		}
	}
	.flex_box{
		justify-content:center;
		list-style-type: none;
		padding: 0;
		margin: 0;
		display: flex;
		align-items: center;
		margin-top: 16px !important;
		span:nth-child(1){
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
			span:nth-child(1){
				font-size: 56px;
				font-weight: 900;
				color:rgb(255,153,36);
			}
			.flex_box_right_sub{
				font-size: 24px;
				font-weight: 500;
				padding-left: 12px !important;
				display: block;
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
			}
		}
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
		a{
			text-decoration: none;
			font-size: 14px;
			cursor: pointer;
			color:#3b85f5 !important;
			margin-right: 12px !important;
			margin-top: 5px !important;
			i{
				margin-right: 4px !important;
			}
		}
	}
	.staking_content{
		min-width: 1260px;
		display: block;
		.max_w{
			width: 1200px;
			padding: 0 30px;
			margin: 0 auto;
			display: block;
			.cards{
				margin-top: -57px;
				justify-content:space-between;
				list-style-type: none;
				padding: 0;
				display: flex;
				align-items: center;
				.cards-item{
					width: 384px;
					border-radius: 12px;
					overflow: hidden;
					background-image:linear-gradient(117deg,#2e5fe6,#0e318f);
					display: block;
					margin-left: 16px;
					.introduction{
						background:url("../../../src/assets/img/staking/staking_card.png") no-repeat;
						background-size:146px 136px;
						background-position: 100%;
						padding: 32px 0px 32px 0px !important;
						.default{
							align-items: flex-start;
							list-style-type: none;
							display: flex;
							.cosmos{
								margin-left: 10px;
							}
							.default_right{
								margin-left: 16px !important;
								display: block;
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
							}
						}
					}
					.btn_groups{
						background-color:#0e318f;
						justify-content:flex-end;
						list-style-type: none;
						margin: 0;
						display: flex;
						align-items: center;
						padding: 16px 35px 24px 35px !important;
						button{
							height: 48px;
							width: 120px;
							font-size: 16px;
							font-weight: 600;
							padding: 0 24px;
							margin-left: 15px;
						}
						.btn{
							background-color:#33b883;
							color:#fff;
							text-align: center;
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
					}
				}
			}
			.staking_about{
				border-top:1px solid #e6e6eb;
				margin-top: 48px !important;
				display: block;
				h2{
					margin: 0;
					font-size: 20px;
					font-weight: 500;
					color: #2f363d;
					padding-top: 24px!important;
				}
				h3{
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
					span{
						height: 24px;
						border-radius: 4px;
						background-color: #d6f1ff;
						line-height: 24px;
						font-size: 14px;
						font-weight: 400;
						color: #18232e;
						padding: 4px 0px 8px 0px !important;
					}
				}
				.create_title{
					font-size: 14px;
					color:#657585;
					padding-top: 16px !important;
					display: block;
					p:nth-child(2){
						display: flex;
						align-items: center;
						font-size: 14px;
						color:#657585;
						margin-top: 8px !important;
					}
				}
				.ul_reset{
					list-style-type: none;
					border-bottom: 1px solid #e6e6eb;
					padding-bottom: 48px !important;
					margin-top: 48px !important;
					display: flex;
					align-items: center;
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
						p{
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
					}
				}
				.now{
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
					.profit_left{
						border-right:1px solid #e6e6eb;
						padding-right: 80px !important;
						display: block;
						.profit_left_title{
							font-size: 48px;
							padding-right: 8px !important;
							font-weight: 500;
							color:#3b6cf5;
							span{
								color:#3b6cf5;
								font-size: 16px;
								font-weight: 500;
							}
						}
						.profit_left_subtitle{
							text-align: right;
							color:#2f363d;
							padding-top: 8px !important;
							display: block;
						}
					}
					.profit_right{
						padding-left: 100px !important;
						display: block;
						p:nth-child(1){
							color:#db7916;
							font-size: 48px;
							font-weight: 500;
						}
						p:nth-child(2){
							color:#2f363d;
							padding-top: 8px !important;
							display: block;
							font-size: 16px;
						}
					}
				}
                .chart{
					position: relative;
					margin-top: 24px !important;
					display: block;
					.chart_box{
						align-items: flex-end;
						list-style-type: none;
						display: flex;
						.chart_left{
							align-items: end;
							list-style-type: none;
							display: flex;
							span{
								font-size: 12px;
								color:#2f363d;
								padding-right: 24px !important;
								list-style-type: none;
							}
							div{
								width: 2px;
								height: 280px;
								background: #e6e6eb;
								position: relative;
								display: block;
								i{
									display: block;
									position: absolute;
									top:-12px;
									left: -6px;
									color: #e6e6eb;
								}
							}
						}
						.chart_one{
							margin-left: 24px !important;
							display: block;
							.top_line{
								background: #db7916!important;
								width: 240px;
								height: 2px;
								display: block;
							}
							.chart_content{
								background: #fff1e0!important;
								height: 240px;
								width: 240px;
								margin-top: 2px;
								box-sizing: border-box;
								text-align: center;
								padding-left: 16px!important;
								padding-right: 16px!important;
								display: block;
								p:nth-child(1){
									color: #db7916!important;
									font-size: 24px;
									font-weight: 900;
									padding-top: 16px!important;
									display: block;
									text-align: center;
								}
								p:nth-child(2){
									font-size: 12px;
									color:#18232e;
									padding-top: 8px !important;
									display: block;
									text-align: center;
								}
							}
						}
						.botton_line{
							width: 1120px;
							height: 2px;
							background-color: #3b6cf5;
							margin: 2px auto 0;
							position: relative;
							display: block;
						}
					}
				}
			}
		}
	}
}


</style>
