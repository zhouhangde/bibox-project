<template>
  <div class="Footer">
     <!-- 底部的帮助中心 -->
    <div style="background-color: #101929;color: #ffff;padding: 30px 0;">
       <div style="width: 1200px;margin: 0 auto;">
          <!-- 帮助列表第一行 -->
          <div class="help">
            <ul style="display: flex;justify-content: space-between;">
              <li class="zh-footer-li">
                <p>
                  <span> <i class="icon iconfont icon-bs_activity_contact" style=""></i></span> &nbsp;
                  <span>提交工单</span>
                </p>
                <p>
					<span> <i class="icon iconfont icon-Join" style=""></i></span> &nbsp;
                  <span>加入我们</span>
                </p>
                <p>
					<span> <i class="icon iconfont icon-Fee" style=""></i></span> &nbsp;
                  <span>费率标准</span>
                </p>
              </li>
              <li class="zh-footer-li">
                <p>
                  <span>产品</span>
                </p>
                <p>
                  <span>上币申请</span>
                </p>
                <p>
                  <span>存币宝</span>
                </p>
                <p>
                  <span>Lab</span>
                </p>
                <p>
                  <span>API接入</span>
                </p>
                <p>
                  <span>Bibox通证债券</span>
                </p>
              </li>
              <li class="zh-footer-li">
                <p>
                  <span>公告帮助</span>
                </p>
                <p>
                  <span>官方公告</span>
                </p>
                <p>
                  <span>帮助中心</span>
                </p>
                <p>
                  <span>用户协议</span>
                </p>
                <p>
                  <span>隐私政策</span>
                </p>
              </li>
              <li class="zh-footer-li">
                <p>
                  <span>联系我们</span>
                </p>
                <p>
                  <span>Telegram-中文</span>
                </p>
                <p>
                  <span>Telegram-English</span>
                </p>
                <p>
                  <span>Telegram-한국어</span>
                </p>
                <p>
                  <span>微信客服: BiboxKf-03</span>
                </p>
                 <p>
                  <span>官方邮箱:service@bibox.zendesk.com</span>
                </p>
              </li>
              <li class="zh-footer-li">
                <p>
                  <span>社交媒体</span>
                </p>
                <p>
					<span> <i class="icon iconfont icon-Facebook" style=""></i></span> &nbsp;
                    <span>Facebook</span>
                </p>
                <p>
					<span> <i class="icon iconfont icon-ttww" style=""></i></span> &nbsp;
                    <span>Twitter</span>
                </p>
                <p>
					<span> <i class="icon iconfont icon-ic-reddit" style=""></i></span> &nbsp;
                    <span>Reddit</span>
                </p>
                <p>
					<span> <i class="icon iconfont icon-weibo" style=""></i></span> &nbsp;
                    <span>Weibo</span>
                </p>
                 <p>
					 <span> <i class="icon iconfont icon-medium" style=""></i></span> &nbsp;
					 <span>Medium</span>
                </p>
                <p>
					<span> <i class="icon iconfont icon-biyong1" style=""></i></span> &nbsp;
                    <span>BiYong</span>
                </p>
              </li>
            </ul>
          </div>
           <!-- 第二行 -->
          <!--<div style="padding: 17px 0;">-->
            <!--<span>图标</span>-->
            <!--<span style="margin-left:6px">LinkCoin</span>-->
            <!--<span style="margin-left:14px">C2C服务由合作伙伴 LinkCoin 提供技术及服务支持</span>-->
          <!--</div>-->

          <!--&lt;!&ndash; 第三行 &ndash;&gt;-->
          <!--<div>-->
            <!--<span style="margin-right:15px">-->
              <!--友情链接-->
            <!--</span>-->
            <!--<span style="margin-right:15px">LinkCoin</span>-->
            <!--<span style="margin-right:15px">CoinPark</span>-->
            <!--<span style="margin-right:15px">RatingToken</span>-->
            <!--<span style="margin-right:15px">玩币族</span>-->
            <!--<span style="margin-right:15px">BITCOIN86</span>-->
            <!--<span style="margin-right:15px">陀螺财经</span>-->
            <!--<span style="margin-right:15px">链向财经</span>-->
            <!--<span style="margin-right:15px">共享财经</span>-->
            <!--<span style="margin-right:15px">BITKAN</span>-->
            <!--<span style="margin-right:15px">Block123</span>-->
            <!--<span style="margin-right:15px">F2Pool鱼池</span>-->
            <!--<span style="margin-right:15px">Cobo钱包</span>-->
            <!--<span style="margin-right:15px">降维安全实验室</span>-->
            <!--<span style="margin-right:15px">链得得</span>-->
            <!--<span>CoinGecko</span>-->
          <!--</div>-->

       </div>
    </div>
    <!-- 底部的帮助中心结束 -->

  </div>
</template>

<script>
// import FilterView from "../components/FilterView";
export default {
  name: "Footer",
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

.Footer {
  width: 100%;
  overflow: auto;
  box-sizing: border-box;
}
.help ul li:nth-child(1){
	font-weight: 500;
	text-decoration: none;
	color: #659aea;
	margin: 0 0 8px;
	display: block;
}
.help ul li p{
	line-height: 30px;
}

</style>
