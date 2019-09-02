<template>
  <div class="sbsq">
    <!-- 头部渐变区域 -->
    <div class="component">
      <div class="common-box">
        <div class="component-title">上币申请</div>
      </div>

    </div>
    <!-- 主体部分 -->
    <div class="form-box">
      <!-- 申请记录 -->
      <div class="tabel-box mg-b40">
        <!-- 头部 -->
        <div class="tabel-header">
          <span></span>
          <span>我的申请记录</span>
        </div>
        <!-- 主体记录区域 -->
        <div class="table-body">
          <table>
            <tbody>
              <tr>
                <td>暂无数据</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- 说明部分 -->
      <div class="square-common mg-b40">
        <div class="text-box">
          <p class="ts-18">项目上线说明</p>
          <p class="mg-tb10 ts-14">为了保证用户交易体验、保护投资者利益，我们会严格评估项目的投资潜力和风险，考察内容如下：</p>
          <ul class="text-ul pd-l4 ts-14 color-555">
            <li>团队实力</li>
            <li>社区维护</li>
            <li>技术实力</li>
            <li>项目发展</li>
          </ul>
        </div>
        <div class="text-box mg-t40 mg-b10">
          <p class="ts-18">项目下线说明</p>
          <p class="mg-tb10 ts-14">Bibox作为优质数字资产交易平台，拥有严选优质项目上线交易的权利，为了保护投资者利益，也天然保留无偿下线项目的权利。以下情形，将会提高项目下线的可能性</p>
          <p class="rich-text mg-t10 mg-b4 ts-14">安全问题</p>
          <ul class="text-ul pd-l4 ts-14 color-555">
            <li>智能合约代码存在溢出等安全漏洞；</li>
            <li>白皮书的语义与智能合约的实现缺乏一致性；</li>
            <li>算力不足，发生或存在51%被攻击的分叉问题；</li>
            <li>项目主网切换时或存在安全隐患。</li>
          </ul>
          <p class="rich-text mg-t10 mg-b4 ts-14">项目及团队</p>
          <ul class="text-ul pd-l4 ts-14 color-555">
            <li>项目定位、产品、经营方针、经营范围、商业模式或团队重要成员等有重大变更，未提前15天通知Bibox并依据变更后的项目资料获审通过，私下转让或者售卖</li>
            <li>团队提供的文件或者资料（包括财务信息、经营状况或团队核心成员资料等）存在造假、隐瞒、重大遗漏或误导；</li>
            <li>项目或团队核心成员发生涉及诉讼、仲裁或受到重大行政处罚或其他重大负面新闻；</li>
            <li>项目推广和研发进度严重滞后，或与白皮书等官方正式公布进度严重不符。</li>
          </ul>
          <p class="rich-text mg-t10 mg-b4 ts-14">Token及交易</p>
          <ul class="text-ul pd-l4 ts-14 color-555">
            <li>代币分配方案、功能及用途与官方披露不同，且项目方无正式说明；</li>
            <li>因项目隐瞒信息导致可能发生的影响其兑付能力或者标的币价值的重大事项，以致于币价持续低迷；</li>
            <li>未在有效时间内提前告知平台和用户并征得同意，即增发或分叉token，延长或缩短定期等;</li>
            <li>单个交易对连续一周日交易量低于5BTC。</li>
          </ul>
          <p class="rich-text mg-t10 mg-b4 ts-14">运营推广</p>
          <ul class="text-ul pd-l4 ts-14 color-555">
            <li>网站无法访问，官方社交媒体（Twitter、Facebook等）及社群超过一个月无人运维；</li>
            <li>对负面信息无应对意识和能力，欠缺公关处理能力；</li>
            <li>未经法律程序或事前书面同意，即将平台相关信息对外发布并严重损害Bibox的利益。</li>
            <li>项目主网切换时或存在安全隐患。</li>
          </ul>
          <div class="time-day ts-14 mg-t10">
            <span class="symbol">*</span>
            <span>对于确定下线的项目，我们会提前 5 天发出公告通知，用户将有 30 天时间从交易所提现该资产。</span>
          </div>
          <div class="line mg-tb40"></div>
          <el-checkbox v-model="checked">我已阅读并同意</el-checkbox>
          <div class="mg-t20">
            <el-button :disabled="!checked" type="primary">开始申请</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import FilterView from "../components/FilterView";
export default {
  name: "sbsq",
  data() {
    return {
      checked: true
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

.sbsq {
  width: 100%;
  box-sizing: border-box;
  position: relative;
}
/* 公共样式 */
.mg-t10 {
  margin-top: 10px;
}
.mg-t20 {
  margin-top: 20px!important;
}
.mg-t40 {
  margin-top: 40px;
}
.mg-b4 {
    margin-bottom: 4px!important;
}
.mg-b40 {
    margin-bottom: 40px!important;
}
.mg-tb10 {
    margin-top: 10px!important;
    margin-bottom: 10px!important;
}
.mg-tb40 {
    margin-top: 40px!important;
    margin-bottom: 40px!important;
}
.ts-14 {
  font-size: 14px;
}
.ts-18 {
  font-size: 18px;
}
.pd-l4 {
    padding-left: 4px!important;
}
.color-555 {
    color: #555;
}
/* 头部渐变区域样式 */
.component {
  width: 100%;
  height: 160px;
  background-image: linear-gradient(330deg, rgb(255, 189, 211), rgb(0, 5, 82));
}
.common-box {
  display: flex;
  justify-content: center;
  width: 1000px;
  margin: 0px auto;
  padding: 32px 0px 0px;
}
.component-title {
  font-size: 24px;
  color: #fff;
}
.form-box {
  margin: -59px auto 0;
  width: 1000px;
}
.table-body table {
  width: 100%;
}
/* 记录头部 */
.tabel-header {
  padding: 24px 48px 16px 32px;
  text-align: left;
  background: #f7faff;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  font-size: 16px;
}
/* 记录主体部分 */
.table-body {
  padding: 8px 0;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 0 1px rgba(0,33,82,.04), 0 4px 16px 0 rgba(0,33,82,.04), 0 4px 20px 0 rgba(0,33,82,.04);
}
.table-body tr {
  color: #ccc;
  background-color: #fff;
  padding: 40px;
  font-size: 24px;
  font-weight: 300;
  text-align: center
} 
.table-body td {
  padding: 40px 16px;
  text-align: center;
}
/* 说明部分 */
.square-common {
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.04), 0 5px 10px 0 rgba(54,54,77,.1);
  border-radius: 4px;
  box-sizing: border-box;
  padding: 40px;
}
.text-box {
  color: #333
}
.text-ul li:before {
    content: "\B7";
    margin: 0 4px 0 0;
    font-weight: 600;
    font-size: 22px;
    line-height: 22px;
}
.time-day {
  color: #8a9099;
}
.symbol {
    color: #ff9147;
}
.line {
  width: 100%;
  height: 1px;
  background: #e6eaf0;
}
</style>
