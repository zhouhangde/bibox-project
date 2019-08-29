<template>
  <div class="index">
     <TabBar/>
    <!-- keep-alive用于将全局的路由进行数据缓存 -->
    <keep-alive>
       <router-view></router-view>  
    </keep-alive>
     
     <Footer v-show="showFooter"/>
  </div>
</template>

<script>
import TabBar from "../components/TabBar";
import Footer from "../components/Footer";
export default {
  name: "index",
  data() {
    return {
      showFooter:true
    };
  },
  methods:{     
  },
  components: {
     TabBar,
     Footer
  }
};
</script>

<style scoped>
.index {
  width: 100%;
}
</style>
