import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
// qs用于处理post请求失败的问题
import qs from 'qs';

// 全局引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

/* 全局引入swipe*/
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'//这里注意具体看使用的版本是否需要引入样式，以及具体位置。

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;


Vue.use(ElementUI, { size: 'small' })
Vue.use(VueAwesomeSwiper)


axios.defaults.baseURL = 'http://localhost:8081/';

// 请求拦截
axios.interceptors.request.use(
  config => {
    // 如果为post请求则将传输数据json化
    if (config.method == 'post') {
      config.data = qs.stringify(config.data);
    }

    // 加载动画
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截
axios.interceptors.response.use(
  response => {
    //关闭动画
    return response;
  },
  error => {
    // 错误提醒,关闭动画
    return Promise.reject(error);
  }
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
