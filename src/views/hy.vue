<template>
  <div class="hyyi"  style="background-color: #1d2129;color:#fff;display: flex;">
    <!-- 左侧 -->
     <hyLeft />
    <!-- 左侧结束 -->
    
    <!-- 右侧开始 -->
    <hyRight />
    <!-- 右侧结束 -->

  </div>
</template>

<script>
// import FilterView from "../components/FilterView";
import hyLeft from "../components/hy/hyLeft";
import hyRight from "../components/hy/hyRight";

export default {
  name: "hyyi",
  data() {
    return {
    };
  },
  // keep-alive激活
  activated(){
     // 不显示公共底部
     this.$parent.showFooter = false
  },
  // keep-alive切换
  deactivated(){
     // 切换公共底部的显示状态
     this.$parent.showFooter = true
  },
  computed: {
    address() {
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
    }
  },
  components: {
    hyLeft,
    hyRight
  }
};
</script>

<style scoped>

.hyyi {
  width: 100%;
  height: 800px;
  overflow: auto;
  box-sizing: border-box;
}

.bzjy_header li p{
  padding:3px 10px
}


</style>
