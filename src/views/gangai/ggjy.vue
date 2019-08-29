<template>
  <div class="ggjy" style="background-color: #1d2129;color:#fff">
     <div style="width:1200px;margin:0 auto;">

      <!-- 第一大行 -->
      <GgjyTop />
      <!-- 第一大行结束 -->
      
      <!-- 第二行 -->
      <div style="display: flex;justify-content: space-between;padding: 13px;background: #2a303d;">
        <!-- 左侧 -->
        <div style="display: flex;justify-content: space-between;">
          <div style="margin-right:80px">
            <span>图标</span>
            <span>杠杆账户</span>
          </div>
          <span>应还 BTC0</span>
          <span style="margin-right:20px">应还 USDT0</span>
          <span style="margin-right:20px">保证金率--</span>
          <span style="margin-right:20px">爆仓价(USDT)--</span>
          <span style="margin-right:20px">价格指数</span>
          <span style="margin-right:20px">9,614.2814</span>
        </div>
        <!-- 右侧 --> 
        <span style="color: #3b85f5;">资金划转</span>
      </div>
      
      <!-- 第三行 -->
      <GgjyContent/>
      
      <!-- 第四行 -->
      <GgjyBottom />
    </div>
  </div>
</template>

<script>
// import FilterView from "../components/FilterView";
import GgjyTop from "../../components/gangai/ggjy/GgjyTop";
import GgjyContent from "../../components/gangai/ggjy/GgjyContent";
import GgjyBottom from "../../components/gangai/ggjy/GgjyBottom";

export default {
  name: "ggjy",
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
    GgjyTop,
    GgjyContent,
    GgjyBottom
  }
};
</script>

<style scoped>

.ggjy {
  width: 100%;
  overflow: auto;
  box-sizing: border-box;
}


</style>
