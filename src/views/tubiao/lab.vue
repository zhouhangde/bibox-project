<template>
  <div class="lab">
    <!-- lab页面 -->
    <div class="banner">
      <div class="labs-banner">
        <div class="banner-contant">
            <img src="../../assets/img/lab_images/lab_logo.png" alt="">
            <p>BiboxLab is an incubator, accelerator and an international blockchain hub launched by the world’s leading digital asset exchange Bibox. BiboxLab will bring together the world's top token funds to consolidate the best resources on hand to fully support top -tier blockchain projects in terms of funds, technical guidance, consulting services, marketing and media, legal counsel and office space.</p>
            <p class="lab-text-second">BiboxLab will follow Bibox's approach in rigorously screening quality start-up projects in the cryptocurrency and blockchain industry to select projects with the best potential for investment and incubation.</p>
        </div>
      </div>
    </div>
    <div class="labs-want">
      <div class="max-w">
        <h3 class="labs-title mg-b64">Who We Want</h3>
        <ul class="labs-want_list">
          <li class="labs-want_item">
            <div class="labs-want_bg"></div>
            <p class="labs-want_text">Projects that are practical and with short- term landing possibilities</p>
          </li>
          <li class="labs-want_item">
            <div class="labs-want_bg"></div>
            <p class="labs-want_text">Projects that look deep into innovative technology while embracing regulations and compliance</p>
          </li>
          <li class="labs-want_item">
            <div class="labs-want_bg"></div>
            <p class="labs-want_text">Projects that provide disruptive solutions to existing pain points</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="max-w pd-b16">
      <h3 class="labs-title mg-tb80">What We Do</h3>
      <ul class="service-content_list">
        <li class="service-content_item">
          <div class="service-content_img s1"></div>
          <h5 class="service-content_title">Funding & Investing</h5>
          <p class="service-content_text">BiboxLab will partner with the world's top token funds and VCs to provide funding to the selected projects</p>
        </li>
        <li class="service-content_item">
          <div class="service-content_img s2"></div>
          <h5 class="service-content_title">Technical & Tools</h5>
          <p class="service-content_text">BiboxLab will leverage on Bibox's strong technical strength to provide technical support and guidance to projects</p>
        </li>
        <li class="service-content_item">
          <div class="service-content_img s3"></div>
          <h5 class="service-content_title">Consulting & Mentoring</h5>
          <p class="service-content_text">BiboxLab will provide tailored mentoring and consulting to the projects that are in the incubator. Experienced investors, blockchain technology experts and first-class management teams are on call to solve the problems encountered by the project in starting a business, exhibitions, roadshows and on- boarding VCs.</p>
        </li>
        <li class="service-content_item">
          <div class="service-content_img s4"></div>
          <h5 class="service-content_title">Marketing & Media</h5>
          <p class="service-content_text">BiboxLab will provide personalized marketing and branding plans for projects based on their features. It will also help projects to get the all the resources in need to help them blossom.</p>
        </li>
        <li class="service-content_item">
          <div class="service-content_img s5"></div>
          <h5 class="service-content_title">Legal & Compliance</h5>
          <p class="service-content_text">Bibox and BiboxLab regard legal compliance with foremost attention. BiboxLab will provide legal consultancy for the projects along the way to help them to develop and move forward with no future worries on the compliance side. Qualified teams would also have the chance to be benefited by the Swiss VQF license acquired by Bibox.</p>
        </li>
        <li class="service-content_item">
          <div class="service-content_img s6"></div>
          <h5 class="service-content_title">Office Space</h5>
          <p class="service-content_text">All projects that meet the screening criteria can apply to join Bibox’s incubation center in the United States, Canada, South Korea, Singapore, Switzerland and other countries.</p>
        </li>
      </ul>
    </div>
    <div class="labs-team">
      <div class="max-w">
        <h3 class="labs-title">Team</h3>
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="(item,index) in bannerList" :key="index">
            <!-- <h3>{{ item }}</h3> -->
            <img :src="item" alt="" width="392px" height="466px">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div style="background-color: rgb(31, 45, 73);">
      <div class="labs-labs">
        <div class="max-w">
          <h3 class="labs-title pd-t80 pd-b64">Current Participants</h3>
          <ul>
            <li class="flex-box labs-labs_item">
              <div class="labs-labs_img"></div>
              <div>
                <h5 class="labs-labs_title">VOCEAN</h5>
                <p class="labs-labs_text">Vocean is a blockchain-based ecosystem where fixed income products such as bonds,
                  loans and derivatives can be issued, traded, settled and risk managed. Vocean introduces
                  formal disclosure and credit rating on blockchain projects and allow them a new way to raise
                  fund, Vocean team is comprised of Wall Street, Silicon Valley and blockchain veterans from
                  Morgan Stanley, Bloomberg. Google and BiBox. Vocean is the 1st project incubated by BiBoxLab,
                  an alliance of more  than 20 token funds such as BITMAIN, FBGX, Node Capital and Blockwater.</p>
              </div>
            </li>
            <li class="mg-t80 pd-b80 text-center">
              <a href="javascript:;">
                <el-button type="primary" class="labs_btn">REFER</el-button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div style="background-color: rgb(245, 245, 250);">
      <div class="max-w text-center pd-tb80">
        <h3 class="labs-title mg-b64">Partners</h3>
        <div class="labs-investment_bg"></div>
        <div class="mg-t80">
          <a href="javascript:;">
            <el-button type="primary" class="labs_btn">
              <span>JOIN THE PROGRAM</span>
            </el-button>
          </a>
        </div>
      </div>
    </div>
    <div style="background-color: rgb(32, 46, 74);">
      <div class="labs-contact_us_bg">
        <h3 class="labs-title pd-b40 pd-t70">More information</h3>
        <div>
          <a href="javascript:;">
            <el-button type="primary" class="labs_btn">
              <span>INQUIRIES</span>
            </el-button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import FilterView from "../components/FilterView";
export default {
  name: "lab",
  data() {
    return {
      bannerList:[
        require('../../assets/img/lab_images/lab_team1.png'),
        require('../../assets/img/lab_images/lab_team2.png'),
        require('../../assets/img/lab_images/lab_team3.png'),
      ],
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
.max-w {
  width: 1260px;
  padding: 0 30px;
  margin: 0 auto;
}
.text-center {
  text-align: center;
}
.lab {
  width: 100%;
  box-sizing: border-box;
  position: relative;
}
.banner {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 540px;
  background-color: rgb(10, 24, 51);
}
.labs-banner {
  width: 1440px;
  height: 540px;
  background: url("../../assets/img/lab_images/lab_banner.png") no-repeat 100%;
  background-size: 1440px 540px;
  text-align: center;
}
.banner-contant {
  width: 1200px;
  padding: 0 30px;
  margin: 0 auto;
}
.banner-contant img {
  width: 300px;
  margin: 120px 0 64px;
}
.banner-contant p {
  width: 1000px;
  margin: 0 auto;
  color: #6785b4;
}
.lab-text-second {
  margin-top: 48px!important;
}
.labs-want {
  width: 100%;
  padding: 80px 0;
  background-color: #f5f5fa;
}
.labs-title {
  font-weight: 600;
  font-size: 32px;
  margin: 0;
  text-align: center;
}
.labs-want_list {
  display: flex;
  justify-content: space-between;
  align-items: center
}
.labs-want_item {
  display: flex;
  align-items: center;
  width: 365px;
  height: 136px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 20px 40px -20px rgba(0,0,0,.15);
}
.labs-want_bg {
  /* background-size: 210px 54px; */
  width: 70px;
  height: 54px;
  margin-left: 16px!important;
  margin-right: 16px!important;
}
.labs-want_text {
  width: 240px;
  color: #333;
  padding-right: 30px!important;
  font-size: 16px;
  line-height: 20px;
}
.mg-t80 {
    margin-top: 80px!important;
}
.mg-tb80 {
  margin-top: 80px!important;
  margin-bottom: 80px!important;
}
.mg-b64 {
    margin-bottom: 64px!important;
}
.pd-b16 {
  padding-bottom: 16px!important;
}
.pd-t70 {
    padding-top: 70px!important;
}
.pd-t80 {
  padding-top: 80px!important;
} 
.pd-b40 {
    padding-bottom: 40px!important;
}
.pd-b64 {
  padding-bottom: 64px!important;
}
.pd-b80 {
    padding-bottom: 80px!important;
}
.pd-tb80 {
    padding-top: 80px!important;
    padding-bottom: 80px!important;
}
.service-content_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  margin: 0;
}
.service-content_item {
  width: calc((100% - 80px)/3);
  margin-bottom: 64px;
}
.service-content_img {
    width: 48px;
    height: 48px;
}
.s1 {
  background: url("../../assets/img/lab_images/lab-icon.png") no-repeat top left;
  background-size: 288px 48px;
}
.s2 {
  background: url("../../assets/img/lab_images/lab-icon.png") no-repeat -48px 0;
  background-size: 288px 48px;
}
.s3 {
  background: url("../../assets/img/lab_images/lab-icon.png") no-repeat -96px 0;
  background-size: 288px 48px;
}
.s4 {
  background: url("../../assets/img/lab_images/lab-icon.png") no-repeat -144px 0;
  background-size: 288px 48px;
}
.s5 {
  background: url("../../assets/img/lab_images/lab-icon.png") no-repeat -192px 0;
  background-size: 288px 48px;
}
.s6 {
  background: url("../../assets/img/lab_images/lab-icon.png") no-repeat -240px 0;
  background-size: 288px 48px;
}
.service-content_title {
  margin: 16px 0 8px;
  font-size: 18px;
  font-weight: 600;
  color: #333;
}
.service-content_text {
  margin: 0;
  font-size: 14px;
  color: #737880;
}
.labs-team {
  width: 100%;
  padding: 80px 0 122px;
  background-color: #f5f5fa;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.labs-team_img {
    width: 392px;
    height: 466px;
    position: absolute;
    bottom: 0;
    right: 0;
}
.labs-labs {
    background: url("../../assets/img/lab_images/lab_bg.png") no-repeat 50%;
    width: 1440px;
    margin: 0 auto;
    background-size: 1440px 100%;
    color: #fff;
}
.labs-labs_img {
  /* background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAAABGdBT…JAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAAB+F7j/3p8Rc0x/MT6AAAAAElFTkSuQmCC);
  background-size: 96px 96px; */
  width: 96px;
  height: 96px;
  margin-right: 40px;
  background-color: #fff;
}
.labs-labs_title {
  margin: 0;
  font-size: 32px;
  font-weight: 600;
}
.labs-labs_text {
  width: 1064px;
  margin: 16px 0 0;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.flex-box {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}
.labs_btn{
  width: 240px;
  height: 48px;
  background-color: #659aea;
  font-size: 16px;
}
.labs-investment_bg {
  background: url("../../assets/img/lab_images/Investment.png") no-repeat 50%;
  width: 1200px;
  height: 240px;
  background-size: 1200px 240px;
}
.labs-contact_us_bg {
  background: url("../../assets/img/lab_images/lab_contact_us_bg.png") no-repeat 50%;
  max-width: 1440px;
  height: 284px;
  margin: 0 auto;
  background-size: 1440px 284px;
  text-align: center;
  color: #fff;
}
</style>
