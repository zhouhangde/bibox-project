<template>
  <div id="app">
      <!-- keep-alive用于将全局的路由进行数据缓存 -->
      <keep-alive>
         <router-view/>
     </keep-alive>
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
  },
  methods: {
    getLocation() {
    } 
  }
};
</script>

<style scoped>
#app {
  width: 100%;
  font-size: 14px;
  background: #fff;
}
</style>
