<template>
  <div class="bzjy" style="background-color: #1d2129;color:#fff">
    <div style="width:1200px;margin:0 auto;">
      
        <!-- 第一大行 -->
        <BibiTop />

        <!-- 第二大行(内部包含3个块)   -->
        <BibContent />

        <!-- 第三大行（包含当前委托，计划委托，冰山委托，历史委托） -->
        <BibBottom />

    </div>
  </div>
</template>

<script>
// 第一大行
import BibiTop from "../../components/bibi/BibiTop";
// 第二大行
import BibContent from "../../components/bibi/BibContent";
// 第三大行
import BibBottom from "../../components/bibi/BibBottom";


export default {
  name: "bzjy",
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
     BibiTop,
     BibContent,
     BibBottom
  }
};
</script>

<style scoped>

.bzjy {
  width: 100%;
  overflow: auto;
  padding: 10px 0 40px;
  box-sizing: border-box;
}

</style>
