import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  //  mode: 'history',
  mode: 'hash',  //打包設置，必須為hash，否则页面为空白
  base: process.env.BASE_URL,    //api请求的前缀地址
  linkActiveClass: 'active',   //此为表示为当前路由时，显示active样式，会动态添加的样式
  routes: [
    {
      path: '/',
      // name: 'index',
      component: () => import('./views/index.vue'),
      children: [
        {
          path: '',
          redirect: '/home'   //表示默认首页跳转的地址，重定向到/home
        },
        {
          path: '/home',
          name: 'home',
          component: () => import('./views/Home.vue')    //此为按需引入的方式
        },
        {
          path: '/bibi',
          name: 'bibi',
          component: () => import('./views/bibi.vue')    //此为按需引入的方式
        },
        {
          path: '/fabi',
          name: 'fabi',
          component: () => import('./views/fabi.vue')    //此为按需引入的方式
        },
        {
          path: '/hyyi',
          name: 'hyyi',
          component: () => import('./views/hyyi.vue')    //此为按需引入的方式
        },
        {
          path: '/xmgs',
          name: 'xmgs',
          component: () => import('./views/xmgs.vue')    //此为按需引入的方式
        },
        {
          path: '/pack',
          name: 'pack',
          component: () => import('./views/pack.vue')    //此为按需引入的方式
        },
        {
          path: '/cbb',
          name: 'cbb',
          component: () => import('./views/cbb.vue')    //此为按需引入的方式
        },
        {
          path: '/tpss',
          name: 'tpss',
          component: () => import('./views/tpss.vue')    //此为按需引入的方式
        },
        {
          path: '/sgrfl',
          name: 'sgrfl',
          component: () => import('./views/sgrfl.vue')    //此为按需引入的方式
        }
      ]
    }
  ]
});
// 路由守卫（注意当有此方法时会默认进入此方法，不会进入下一步，不用时应该注释）
// router.beforeEach((to, from, next) => {

// });

export default router;
