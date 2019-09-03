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
        // 首页
        {
          path: '/home',
          name: 'home',
          component: () => import('./views/Home.vue')    
        },

        // 标签下的7个下拉开始
        // staking
        {
          path: '/staking',
          name: 'staking',
          component: () => import('./views/tubiao/staking.vue')    
        },
        // Lab
        {
          path: '/lab',
          name: 'lab',
          component: () => import('./views/tubiao/lab.vue')    
        },
        // Dex
        {
          path: '/dex',
          name: 'dex',
          component: () => import('./views/tubiao/dex.vue')    
        },
        // 上币申请
        {
          path: '/sbsq',
          name: 'sbsq',
          component: () => import('./views/tubiao/sbsq.vue')    
        },
        // BIX应用介绍
        {
          path: '/bixyyjs',
          name: 'bixyyjs',
          component: () => import('./views/tubiao/bixyyjs.vue')    
        },
        // 信用卡一键买卡
        {
          path: '/xykmk',
          name: 'xykmk',
          component: () => import('./views/tubiao/xykmk.vue')    
        },
        // 新手福利
        {
          path: '/xsfl',
          name: 'xsfl',
          component: () => import('./views/tubiao/xsfl.vue')    
        },
        // 图标下的7个下拉结束

        // 币币下的下拉图标
        // 标准交易
        {
          path: '/bzjy',
          name: 'bzjy',
          component: () => import('./views/bibi/bzjy.vue')    
        }, 
        // 全屏交易
        {
          path: '/qpjy',
          name: 'qpjy',
          component: () => import('./views/bibi/qpjy.vue')    
        }, 
        // 币币下的下拉图标结束

        // 杠杆下的下拉
        // 杠杆交易
        {
          path: '/ggjy',
          name: 'ggjy',
          component: () => import('./views/gangai/ggjy.vue')    
        },
        // 借款放款
        {
          path: '/jkfk',
          name: 'jkfk',
          component: () => import('./views/gangai/jkfk.vue')    
        },
        // 杠杆下的下拉结束

        // 合约交易
        {
          path: '/hy',
          name: 'hy',
          component: () => import('./views/hy.vue')    
        },
        // 法币交易
        {
          path: '/fabi',
          name: 'fabi',
          component: () => import('./views/fabi.vue')    
        },

        // bibox合伙人的下拉
        // 核心计划
        {
          path: '/biboxhzxjh',
          name: 'biboxhzxjh',
          component: () => import('./views/biboxhhr/biboxhzxjh.vue')    
        },
        // 城市合伙人
        {
          path: '/cshhr',
          name: 'cshhr',
          component: () => import('./views/biboxhhr/cshhr.vue')    
        },
        // bibox合伙人的下拉结束

        // 恒星计划
        {
          path: '/hxjh',
          name: 'hxjh',
          component: () => import('./views/hxjh.vue')    
        },
        // 委托管理
        {
          path: '/wtgl',
          name: 'wtgl',
          component: () => import('./views/wtgl.vue')    
        },
        // 邮箱注册
        {
          path: '/register',
          name: 'register',
          component: () => import('./views/register.vue')    
        },
        // 手机注册
        {
          path: '/registerPhone',
          name: 'registerPhone',
          component: () => import('./views/registerPhone.vue')    
        },
        // 登录
        {
          path: '/login',
          name: 'login',
          component: () => import('./views/login.vue')    
        },
        // 找回密码
        {
          path: '/seekPassword',
          name: 'seekPassword',
          component: () => import('./views/seekPassword.vue')    
        }
      ]
    }
  ]
});
// 路由守卫（注意当有此方法时会默认进入此方法，不会进入下一步，不用时应该注释）
// router.beforeEach((to, from, next) => {

// });

export default router;
