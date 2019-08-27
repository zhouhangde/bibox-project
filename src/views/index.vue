<template>
  <div class="index">
     <TabBar/>
    <!-- keep-alive用于将全局的路由进行数据缓存 -->
     <router-view></router-view>
  </div>
</template>

<script>
import TabBar from "../components/TabBar";
export default {
  name: "index",
  data() {
    return {
      // tabbarData: [
      //   { title: "Bibox", path: "/home" },
      //   { title: "xl", path: "/home" },
      //   { title: "币币交易", path: "/bibi" },
      //   { title: "法币交易", path: "/fabi" },
      //   { title: "合约交易", path: "/hyyi" },
      //   { title: "项目公示", path: "/xmgs" },
      //   { title: "HXEX PACK", path: "/pack" },
      //   { title: "存币宝", path: "/cbb" },
      //   { title: "投票上市", path: "/tpss" },
      //   { title: "SGR返利", path: "/sgrfl" }
      // ]
    };
  },
  components: {
     TabBar
  }
};
</script>

<style scoped>
.index {
  width: 100%;
}
</style>
