<template>
  <div class="header">
    <div class="header-nav">
      <div class="nav-left">
        <a href="javascript:;" class="nav-logo">
          <i></i>
        </a>
        <a href="javascript:;" class="nav-list">
          <i class="iconfont">&#xe602;</i>
          <div class="list-dropdown">
            <ul>
              <li v-for="(item, index) in navList" :key="index" @click="$router.push({name: item.name})">
                <img :src="item.img" alt />
                <div class="item-count">
                  <h3>{{item.title}}</h3>
                  <span>{{item.text}}</span>
                </div>
              </li>
            </ul>
          </div>
        </a>
        <a href="javascript:;" class="nav-item nav-coin">
          <a href="javascript:;" class="nav-active">币币</a>
          <div class="coin-dropdown">
            <a href="javascript:;" @click="$router.push({name: 'bzjy'})">标准交易</a>
            <a href="javascript:;" @click="$router.push({name: 'qpjy'})">全屏交易</a>
          </div>
        </a>
        <a href="javascript:;" class="nav-item nav-gang">
          <a href="javascript:;">杠杆</a>
          <div class="gang-dropdown">
            <a href="javascript:;" @click="$router.push({name: 'ggjy'})">杠杆交易</a>
            <a href="javascript:;" @click="$router.push({name: 'jkfk'})">借款/放款</a>
          </div>
        </a>
        <a href="javascript:;" class="nav-item" @click="$router.push({name: 'hy'})">合约</a>
        <a href="javascript:;" class="nav-item" @click="$router.push({name: 'fabi'})">法币交易</a>
        <a href="javascript:;" class="nav-item nav-people">
          <a href="javascript:;">Bibox合伙人</a>
          <div class="people-dropdown">
            <a href="javascript:;" @click="$router.push({name: 'biboxhzxjh'})">盒芯计划</a>
            <a href="javascript:;" @click="$router.push({name: 'cshhr'})">城市合伙人</a>
          </div>
        </a>
        <a href="javascript:;" class="nav-item nav-plan">
          <a href="javascript:;" @click="$router.push({name: 'hxjh'})">恒星计划</a>
        </a>
      </div>
      <div class="nav-right">
        <el-button size="mini" type="primary" @click="$router.push({name: 'login'})" plain class="login-btn">登录</el-button>
        <el-button size="mini" type="primary" @click="$router.push({name: 'register'})">注册</el-button>
        <a href="javascript:;" class="nav-author" v-if="token">委托管理</a>
        <div class="nav-asset" v-if="token">
          <a href="javascript:;">资产管理</a>
          <div class="asset-dropdown">
            <div class="asset-header">
              <div class="asset-eye">
                <i class="iconfont">&#xe669;</i>
              </div>
              <div class="asset-all">
                <div>总资产</div>
                <div class="zc">
                  <span>≈</span>0.00000000 BTC
                  <span class="rub">/ (0.00 RUB)</span>
                </div>
              </div>
              <div class="asset-page">
                <p>
                  <i class="iconfont">&#xe620;</i>
                </p>
                <p>账单</p>
              </div>
            </div>
            <div class="asset-item">
              <div class="item-header">
                <div class="item-account">我的钱包</div>
                <i class="iconfont">&#xe638;</i>
              </div>
              <div class="item-option">
                <div class="item-assets">
                  <span>≈</span>0.00000000 BTC
                  <span class="rub">/ (0.00 RUB)</span>
                </div>
              </div>
            </div>
            <div class="asset-item">
              <div class="item-header">
                <div class="item-account">币币账户资产</div>
                <i class="iconfont">&#xe638;</i>
              </div>
              <div class="item-option">
                <div class="item-assets">
                  <span>≈</span>0.00000000 BTC
                  <span class="rub">/ (0.00 RUB)</span>
                </div>
              </div>
            </div>
            <div class="asset-item">
              <div class="item-header">
                <div class="item-account">杠杆账户资产</div>
                <i class="iconfont">&#xe638;</i>
              </div>
              <div class="item-option">
                <div class="item-assets">
                  <span>≈</span>0.00000000 BTC
                  <span class="rub">/ (0.00 RUB)</span>
                </div>
              </div>
            </div>
            <div class="asset-item">
              <div class="item-header">
                <div class="item-account">合约账户资产</div>
                <i class="iconfont">&#xe638;</i>
              </div>
              <div class="item-option">
                <div class="item-assets">
                  <span>≈</span>0.00000000 BTC
                  <span class="rub">/ (0.00 RUB)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="nav-user" v-if="token">
          <a href="javascript:;">
            <i class="iconfont">&#xe643;</i>
          </a>
          <div class="user-dropdown">
            <div class="user-header">
              <div>
                <div class="user-name">82***om</div>
                <div class="user-id">UID 11966153</div>
              </div>
              <div class="user-btn">
                <div class="user-btn-quit">退出</div>
              </div>
            </div>
            <div class="user-item">
              <span class="user-item-icon">
                <i class="iconfont">&#xe643;</i>
              </span>
              <span class="user-item-text">账户信息</span>
            </div>
            <div class="user-item">
              <span class="user-item-icon">
                <i class="iconfont">&#xe643;</i>
              </span>
              <span class="user-item-text">账户信息</span>
            </div>
            <div class="user-item">
              <span class="user-item-icon">
                <i class="iconfont">&#xe643;</i>
              </span>
              <span class="user-item-text">账户信息</span>
            </div>
            <div class="user-item">
              <span class="user-item-icon">
                <i class="iconfont">&#xe643;</i>
              </span>
              <span class="user-item-text">账户信息</span>
            </div>
            <div class="user-item">
              <span class="user-item-icon">
                <i class="iconfont">&#xe643;</i>
              </span>
              <span class="user-item-text">账户信息</span>
            </div>
          </div>
        </div>
        <a href="javascript:;" class="nav-login" v-show="!token">登录</a>
        <a href="javascript:;" class="nav-register" v-show="!token">注册</a>
        <div class="nav-line"></div>
        <div class="nav-app">
          <i class="iconfont">&#xe73f;</i>
          <div class="app-dropdown">
            <div class="app-left">
              <div class="left-download">
                <div class="download-item">
                  <span>Andriod</span>
                  <div class="item-wrap">
                    <img src="../assets/img/download.png" alt />
                  </div>
                </div>
                <div class="download-item">
                  <span>Andriod</span>
                  <div class="item-wrap">
                    <img src="../assets/img/download.png" alt />
                  </div>
                </div>
                <div class="download-item">
                  <span>Andriod</span>
                  <div class="item-wrap">
                    <img src="../assets/img/download.png" alt />
                  </div>
                </div>
              </div>
              <div class="left-text">*扫描二维码即可下载 Bibox App 到您的手机，立即就可以使用</div>
            </div>
            <div class="app-right">
              <span class="right-title">PC & MAC</span>
              <div class="right-item">
                <span class="iconfont">&#xe93c;</span>
                <div class="item-group">
                  <span class="item-text">Download for</span>
                  <br />
                  <span class="item-type">Win32</span>
                </div>
              </div>
              <div class="right-item">
                <span class="iconfont">&#xe93c;</span>
                <div class="item-group">
                  <span class="item-text">Download for</span>
                  <br />
                  <span class="item-type">Win64</span>
                </div>
              </div>
              <div class="right-item">
                <span class="iconfont">&#xe61b;</span>
                <div class="item-group">
                  <span class="item-text">Download for</span>
                  <br />
                  <span class="item-type">Mac</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="nav-notice">
          <i class="iconfont">&#xe607;</i>
          <div class="notice-dropdown">
            <h4>平台公告</h4>
            <div class="notice-list">
              <div class="notice-item" v-for="(item, index) in msgList" :key="index">
                <div class="item-inner">
                  <div class="notice-item-title">{{item.title}}</div>
                  <div class="notice-item-time">{{item.time}}</div>
                </div>
              </div>
            </div>
            <a href="javascript:;" class="notice-all">查看全部</a>
          </div>
        </div>
        <div class="nav-lan">
          <a href="javascript:;">CNY</a>
          <div class="lan-dropdown">
            <div class="lan-list">
              <div class="lan-item" v-for="(item, index) in lanList" :key="index">
                <span class="iconfont" v-html="item.icon"></span>
                <span class="lan-text">{{ item.text }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="nav-flag">
          <i>
            <svg
              t="1567072987404"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="23209"
              width="200"
              height="200"
            >
              <path
                d="M1024 512C1024 229.376 794.624 0 512 0S0 229.376 0 512s229.376 512 512 512 512-229.376 512-512zM501.76 199.68l40.96 10.24 30.72-30.72-10.24 40.96 40.96 20.48-40.96 10.24v40.96l-20.48-30.72-51.2 10.24 30.72-40.96-20.48-30.72z m-122.88 327.68L286.72 455.68l-92.16 71.68 30.72-112.64-92.16-71.68h122.88l30.72-112.64 40.96 112.64h112.64L348.16 414.72l30.72 112.64z m184.32 92.16v40.96l-20.48-30.72-51.2 10.24 30.72-40.96-20.48-30.72 40.96 10.24 30.72-30.72-10.24 40.96 40.96 20.48-40.96 10.24z m122.88-71.68l-30.72-20.48-40.96 20.48 20.48-40.96-40.96-20.48h40.96l20.48-40.96 10.24 40.96 40.96-10.24-30.72 30.72 10.24 40.96z m-20.48-184.32l-20.48 40.96v-40.96l-51.2-10.24 40.96-20.48v-40.96l30.72 30.72 40.96-20.48-30.72 40.96 40.96 30.72-51.2-10.24z"
                fill="#E50012"
                p-id="23210"
              />
              <path
                d="M327.68 343.04l-40.96-112.64-30.72 112.64H133.12l92.16 71.68-30.72 112.64 92.16-71.68 92.16 71.68-30.72-112.64 92.16-71.68zM542.72 261.12l20.48 30.72v-40.96l40.96-10.24-40.96-20.48 10.24-40.96-30.72 30.72-40.96-10.24 20.48 30.72-30.72 40.96zM706.56 302.08l-40.96 20.48-30.72-30.72v40.96l-40.96 20.48 51.2 10.24v40.96l20.48-40.96 51.2 10.24-40.96-30.72zM665.6 486.4l-10.24-40.96-20.48 40.96h-40.96l40.96 20.48-20.48 40.96 40.96-20.48 30.72 20.48-10.24-40.96 30.72-30.72zM573.44 547.84l-30.72 30.72-40.96-10.24 20.48 30.72-30.72 40.96 51.2-10.24 20.48 30.72v-40.96l40.96-10.24-40.96-20.48z"
                fill="#FFF000"
                p-id="23211"
              />
            </svg>
          </i>
          <div class="flag-dropdown">
            <div class="flag-list">
              <div class="flag-item" v-for="(item, index) in flagList" :key="index">
                <span class="flag-icon" v-html="item.icon"></span>
                <span class="flag-text active">{{item.text}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "tabBar",
  data() {
    return {
      token: "true",
      navList: [
        {
          id: 1,
          img: "",
          name: 'staking',
          title: "Staking",
          text: "节点投票，赚取节点收益"
        },
        {
          id: 2,
          img: "",
          name: 'lab',
          title: "Lab",
          text: "节点投票，赚取节点收益"
        },
        {
          id: 3,
          img: "",
          name: 'dex',
          title: "Dex",
          text: "节点投票，赚取节点收益"
        },
        {
          id: 4,
          img: "",
          name: 'sbsq',
          title: "上币申请",
          text: "节点投票，赚取节点收益"
        },
        {
          id: 5,
          img: "",
          name: 'bixyyjs',
          title: "BIX应用介绍",
          text: "节点投票，赚取节点收益"
        },
        {
          id: 6,
          img: "",
          name: 'xykmk',
          title: "信用卡一件买币",
          text: "节点投票，赚取节点收益"
        },
        {
          id: 7,
          img: "",
          name: 'xsfl',
          title: "新手福利",
          text: "节点投票，赚取节点收益"
        }
      ],
      msgList: [
        {
          title: "Bibox“合约挖矿”即将上线",
          time: new Date().toDateString()
        },
        {
          title: "Bibox“合约挖矿”即将上线",
          time: new Date().toDateString()
        }
      ],
      lanList: [
        {
          icon: "&#xe65b;",
          text: "CNY"
        },
        {
          icon: "&#xe92d;",
          text: "USD"
        },
        {
          icon: "&#xeb22;",
          text: "KRW"
        },
        {
          icon: "&#xe6ef;",
          text: "RUB"
        },
        {
          icon: "&#xe728;",
          text: "TRY"
        },
        {
          icon: "&#xe6b8;",
          text: "JPY"
        }
      ],
      flagList: [
        {
          icon: `<svg
              t="1567072987404"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="23209"
              width="200"
              height="200"
            >
              <path
                d="M1024 512C1024 229.376 794.624 0 512 0S0 229.376 0 512s229.376 512 512 512 512-229.376 512-512zM501.76 199.68l40.96 10.24 30.72-30.72-10.24 40.96 40.96 20.48-40.96 10.24v40.96l-20.48-30.72-51.2 10.24 30.72-40.96-20.48-30.72z m-122.88 327.68L286.72 455.68l-92.16 71.68 30.72-112.64-92.16-71.68h122.88l30.72-112.64 40.96 112.64h112.64L348.16 414.72l30.72 112.64z m184.32 92.16v40.96l-20.48-30.72-51.2 10.24 30.72-40.96-20.48-30.72 40.96 10.24 30.72-30.72-10.24 40.96 40.96 20.48-40.96 10.24z m122.88-71.68l-30.72-20.48-40.96 20.48 20.48-40.96-40.96-20.48h40.96l20.48-40.96 10.24 40.96 40.96-10.24-30.72 30.72 10.24 40.96z m-20.48-184.32l-20.48 40.96v-40.96l-51.2-10.24 40.96-20.48v-40.96l30.72 30.72 40.96-20.48-30.72 40.96 40.96 30.72-51.2-10.24z"
                fill="#E50012"
                p-id="23210"
              />
              <path
                d="M327.68 343.04l-40.96-112.64-30.72 112.64H133.12l92.16 71.68-30.72 112.64 92.16-71.68 92.16 71.68-30.72-112.64 92.16-71.68zM542.72 261.12l20.48 30.72v-40.96l40.96-10.24-40.96-20.48 10.24-40.96-30.72 30.72-40.96-10.24 20.48 30.72-30.72 40.96zM706.56 302.08l-40.96 20.48-30.72-30.72v40.96l-40.96 20.48 51.2 10.24v40.96l20.48-40.96 51.2 10.24-40.96-30.72zM665.6 486.4l-10.24-40.96-20.48 40.96h-40.96l40.96 20.48-20.48 40.96 40.96-20.48 30.72 20.48-10.24-40.96 30.72-30.72zM573.44 547.84l-30.72 30.72-40.96-10.24 20.48 30.72-30.72 40.96 51.2-10.24 20.48 30.72v-40.96l40.96-10.24-40.96-20.48z"
                fill="#FFF000"
                p-id="23211"
              />
            </svg>`,
          text: "简体中文"
        },
        {
          icon: `<svg
                    t="1567135027501"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="1248"
                    width="200"
                    height="200"
                  >
                    <path
                      d="M0 512a512 512 0 1 0 1024 0A512 512 0 1 0 0 512z"
                      fill="#F0F0F0"
                      p-id="1249"
                    />
                    <path
                      d="M105.84 200.284C65.622 252.61 35.296 312.92 17.638 378.438h266.356L105.84 200.284z m900.522 178.154c-17.658-65.516-47.986-125.826-88.202-178.152L740.01 378.438h266.352zM17.638 645.568c17.66 65.516 47.986 125.826 88.202 178.15l178.148-178.15H17.638z m806.078-539.726C771.39 65.624 711.082 35.298 645.564 17.638v266.354l178.152-178.15zM200.284 918.158c52.326 40.218 112.636 70.544 178.152 88.204V740.01L200.284 918.158z m178.15-900.52c-65.516 17.66-125.826 47.986-178.15 88.202l178.15 178.15V17.638z m267.132 988.724c65.516-17.66 125.826-47.986 178.15-88.202l-178.15-178.15v266.352z m94.444-360.794L918.16 823.72c40.216-52.324 70.544-112.636 88.202-178.152H740.01z"
                      fill="#0052B4"
                      p-id="1250"
                    />
                    <path
                      d="M1019.666 445.218H578.784V4.334A517.112 517.112 0 0 0 512 0a517.011 517.011 0 0 0-66.782 4.334v440.882H4.334A517.112 517.112 0 0 0 0 512c0 22.638 1.488 44.922 4.334 66.782h440.882v440.884a516.7 516.7 0 0 0 133.566 0V578.784h440.884A517.066 517.066 0 0 0 1024 512c0-22.634-1.488-44.922-4.334-66.782z"
                      fill="#D80027"
                      p-id="1251"
                    />
                    <path
                      d="M645.566 645.568L874.038 874.04a513.272 513.272 0 0 0 30.096-32.87L708.53 645.566h-62.964v0.002z m-267.132 0h-0.004l-228.47 228.47a513.272 513.272 0 0 0 32.87 30.096l195.604-195.608v-62.958z m0-267.13v-0.004L149.962 149.96a513.272 513.272 0 0 0-30.096 32.87l195.606 195.606h62.962z m267.132 0L874.04 149.962a512.656 512.656 0 0 0-32.87-30.094L645.566 315.474v62.964z"
                      fill="#D80027"
                      p-id="1252"
                    />
                  </svg>`,
          text: "English"
        },
        {
          icon: `<svg
                    t="1567135074216"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="1362"
                    width="200"
                    height="200"
                  >
                    <path
                      d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
                      fill="#F0F0F0"
                      p-id="1363"
                    />
                    <path
                      d="M690.086 512c0 44.522-79.732 155.826-178.086 155.826S333.914 556.522 333.914 512c0-98.356 79.732-178.086 178.086-178.086s178.086 79.73 178.086 178.086z"
                      fill="#D80027"
                      p-id="1364"
                    />
                    <path
                      d="M690.086 512c0 98.356-79.732 178.086-178.086 178.086S333.914 610.356 333.914 512"
                      fill="#0052B4"
                      p-id="1365"
                    />
                    <path
                      d="M700.884 669.41l47.22-47.22 31.482 31.48-47.22 47.22zM622.17 748.12l47.22-47.224 31.482 31.482-47.22 47.222zM795.34 763.834l47.222-47.22 31.48 31.48-47.22 47.22zM716.628 842.556l47.22-47.22 31.482 31.48-47.22 47.222zM748.11 716.626l47.22-47.22 31.482 31.48-47.22 47.22zM669.418 795.334l47.22-47.22 31.482 31.48-47.22 47.222zM795.356 354.58l-125.926-125.926 31.482-31.48 125.924 125.924zM669.426 323.116l-47.22-47.22 31.48-31.48 47.22 47.22zM748.12 401.814l-47.22-47.222 31.48-31.48 47.22 47.22zM763.83 228.672l-47.22-47.222 31.48-31.482 47.22 47.22zM842.566 307.376l-47.222-47.22 31.48-31.482 47.224 47.22zM181.446 716.636l125.924 125.924-31.48 31.48-125.926-125.922zM307.36 748.1l47.222 47.222-31.48 31.48-47.22-47.22zM228.66 669.406l47.222 47.222-31.48 31.482-47.222-47.22zM275.886 622.182l125.924 125.926-31.48 31.48-125.926-125.924zM307.368 181.44L181.44 307.366l-31.48-31.482 125.924-125.926zM354.574 228.65l-125.926 125.926-31.48-31.482 125.924-125.924zM401.824 275.894l-125.924 125.924-31.48-31.48 125.924-125.924z"
                      fill
                      p-id="1366"
                    />
                  </svg>`,
          text: "한국어"
        },
        {
          icon: `<svg
                    t="1567135123334"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="1595"
                    width="200"
                    height="200"
                  >
                    <path
                      d="M0 512a512 512 0 1 0 1024 0A512 512 0 1 0 0 512z"
                      fill="#F42F4C"
                      p-id="1596"
                    />
                    <path
                      d="M512 630.846l168.954 120.13-64.241-195.292 168.31-124.628h-208.14L512 238.976l-62.956 192.08H238.976l167.669 124.628-63.599 195.292L512 630.846z"
                      fill="#FFE62E"
                      p-id="1597"
                    />
                  </svg>`,
          text: "русский"
        },
        {
          icon: `<svg
                    t="1567135140292"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="1707"
                    width="200"
                    height="200"
                  >
                    <path
                      d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
                      fill="#D80027"
                      p-id="1708"
                    />
                    <path
                      d="M491.036 418.372l42.01 57.89 68.034-22.06-42.076 57.84 42.004 57.888-68.01-22.144-42.074 57.84 0.044-71.522-68.012-22.144 68.036-22.06z"
                      fill="#F0F0F0"
                      p-id="1709"
                    />
                    <path
                      d="M376.388 656.696c-79.912 0-144.696-64.784-144.696-144.696s64.784-144.696 144.696-144.696c24.916 0 48.36 6.302 68.828 17.392-32.11-31.404-76.024-50.784-124.48-50.784-98.356 0-178.086 79.732-178.086 178.086s79.732 178.086 178.086 178.086c48.46 0 92.372-19.382 124.48-50.784-20.468 11.094-43.912 17.396-68.828 17.396z"
                      fill="#F0F0F0"
                      p-id="1710"
                    />
                  </svg>`,
          text: "Tiếng Việt"
        },
        {
          icon: `<svg
                    t="1567135093515"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="1476"
                    width="200"
                    height="200"
                  >
                    <path
                      d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
                      fill="#F0F0F0"
                      p-id="1477"
                    />
                    <path
                      d="M992.154 690.086C1012.736 634.62 1024 574.628 1024 512s-11.264-122.62-31.846-178.086H31.846C11.266 389.38 0 449.372 0 512s11.266 122.62 31.846 178.086L512 734.608l480.154-44.522z"
                      fill="#0052B4"
                      p-id="1478"
                    />
                    <path
                      d="M512 1024c220.142 0 407.812-138.944 480.154-333.914H31.846C104.188 885.056 291.858 1024 512 1024z"
                      fill="#D80027"
                      p-id="1479"
                    />
                  </svg>`,
          text: "Türk dili"
        },
        {
          icon: `<svg
                    t="1567135159242"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="1820"
                    width="200"
                    height="200"
                  >
                    <path
                      d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
                      fill="#F0F0F0"
                      p-id="1821"
                    />
                    <path
                      d="M512 512m-222.608 0a222.608 222.608 0 1 0 445.216 0 222.608 222.608 0 1 0-445.216 0Z"
                      fill="#D80027"
                      p-id="1822"
                    />
                  </svg>`,
          text: "日本語"
        }
      ]
    };
  }
};
</script>
<style lang="less" scope>
.header {
  width: 100%;
  background-color: #243052;
  min-width: 1260px;
  padding: 0 24px;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.08);
  .header-nav {
    display: flex;
    justify-content: space-between;
    height: 60px;
    .nav-left {
      max-width: 800px;
      display: flex;
      align-items: center;
      font-size: 16px;
      .nav-item {
        display: inline-block;
        height: 60px;
        line-height: 60px;
        padding: 0 12px;
        white-space: nowrap;
        &:hover {
          color: #fff;
        }
      }
      .nav-logo {
        margin-right: 64px;
        i {
          display: inline-block;
          width: 104px;
          height: 32px;
          background: url(../assets/img/nav-cut.svg) no-repeat -110px 1px;
          background-size: 212px;
        }
      }
      .nav-list {
        display: flex;
        align-items: center;
        position: relative;
        padding: 0 24px;
        height: 60px;
        &:hover i {
          background-color: rgba(87, 154, 255, 0.16);
          border-radius: 2px;
          color: #fff;
        }
        i {
          display: inline-block;
          width: 32px;
          height: 32px;
          line-height: 32px;
          text-align: center;
          font-size: 24px;
        }
        .list-dropdown {
          z-index: 9999999;
          display: none;
          overflow: hidden;
          position: absolute;
          top: calc(100% - 8px);
          left: 12px;
          z-index: 10000;
          background-color: #373e52;
          color: #fff;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.16),
            0 2px 8px 0 rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.08);
          border-radius: 4px;
          ul {
            width: 360px;
            padding: 4px 0;
            li {
              display: flex;
              align-items: center;
              padding: 16px 24px;
              &:hover {
                cursor: pointer;
                background-color: #4c5870;
              }
              img {
                width: 40px;
                height: 40px;
                border: 1px solid #fff;
              }
              .item-count {
                flex: 1;
                margin-left: 16px;
                h3 {
                  height: 24px;
                  font-size: 16px;
                  font-weight: 500;
                  line-height: 1.5;
                }
                span {
                  font-size: 12px;
                  color: #889db3;
                }
              }
            }
          }
        }
        &:hover .list-dropdown {
          display: block;
        }
      }
      .nav-coin {
        position: relative;
        &:hover a {
          color: #fff;
        }
        .coin-dropdown {
          z-index: 9999999;
          display: none;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          line-height: 1.5;
          margin: -8px 0 0;
          box-shadow: 0 8px 24px 1px rgba(7, 19, 53, 0.3),
            0 0 0 1px rgba(35, 38, 46, 0.04);
          border-radius: 4px;
          background-color: #373e52;
          padding: 4px 0;
          a {
            display: block;
            padding: 8px 24px;
            font-size: 14px;
            color: #fff;
            &:hover {
              background-color: #424957;
            }
          }
        }
        &:hover .coin-dropdown {
          display: block;
        }
      }
      .nav-gang {
        position: relative;
        &:hover a {
          color: #fff;
        }
        .gang-dropdown {
          z-index: 9999999;
          display: none;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          line-height: 1.5;
          margin: -8px 0 0;
          box-shadow: 0 8px 24px 1px rgba(7, 19, 53, 0.3),
            0 0 0 1px rgba(35, 38, 46, 0.04);
          border-radius: 4px;
          background-color: #373e52;
          padding: 4px 0;
          a {
            display: block;
            padding: 8px 24px;
            font-size: 14px;
            color: #fff;
            &:hover {
              background-color: #424957;
            }
          }
        }
        &:hover .gang-dropdown {
          display: block;
        }
      }
      .nav-people {
        position: relative;
        &:hover a {
          color: #fff;
        }
        .people-dropdown {
          z-index: 9999999;
          display: none;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          line-height: 1.5;
          margin: -8px 0 0;
          box-shadow: 0 8px 24px 1px rgba(7, 19, 53, 0.3),
            0 0 0 1px rgba(35, 38, 46, 0.04);
          border-radius: 4px;
          background-color: #373e52;
          padding: 4px 0;
          a {
            display: block;
            padding: 8px 24px;
            font-size: 14px;
            color: #fff;
            &:hover {
              background-color: #424957;
            }
          }
        }
        &:hover .people-dropdown {
          display: block;
        }
      }
      .nav-plan {
        a {
          display: inline-block;
          position: relative;
          &:hover {
            color: #fff;
          }
          &::before {
            content: "";
            width: 32px;
            height: 14px;
            right: 0;
            top: 5px;
            position: absolute;
            background: url(../assets/img/nav-cut.svg) no-repeat 0 -76px;
            background-size: 218px 115px;
          }
        }
      }
    }
    .nav-right {
      max-width: 800px;
      display: flex;
      align-items: center;
      font-size: 12px;
      .nav-author {
        padding: 0 12px;
        height: 60px;
        line-height: 60px;
        &:hover {
          color: #fff;
        }
      }
      .nav-asset {
        position: relative;
        padding: 0 12px;
        height: 60px;
        line-height: 60px;
        &:hover a {
          cursor: pointer;
          color: #fff;
        }
        .asset-dropdown {
          z-index: 9999999;
          display: none;
          overflow: hidden;
          position: absolute;
          top: calc(100% - 8px);
          right: -12px;
          line-height: 1.5;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.16),
            0 2px 8px 0 rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.08);
          border-radius: 4px;
          width: 440px;
          font-size: 14px;
          background-color: #373e52;
          padding-bottom: 20px;
          .asset-header {
            display: flex;
            align-items: center;
            background-color: #2d3442;
            box-shadow: inset 0 -1px 0 0 #4a5261;
            padding: 16px 24px;
            .asset-eye {
              background-color: #272d38;
              border: 1px solid #272d38;
              color: #fff;
              user-select: none;
              cursor: pointer;
              border-radius: 3px;
              padding: 6px 12px;
              font-size: 12px;
              margin-right: 12px;
              text-align: center;
              i {
                color: #a5adb8;
                line-height: 1em;
                cursor: pointer;
              }
              &:hover {
                border-color: #659aea;
                i {
                  color: #659aea;
                }
              }
            }
            .asset-all {
              flex: 1;
              border-left: 1px solid rgba(137, 148, 163, 0.16);
              border-right: 1px solid rgba(137, 148, 163, 0.16);
              padding-left: 16px;
              line-height: 1.5;
              font-size: 14px;
              color: #fff;
              .zc {
                font-size: 16px;
                .rub {
                  font-size: 12px;
                }
              }
            }
            .asset-page {
              margin-left: 24px;
              p {
                font-size: 12px;
                text-align: center;
                color: #3b85f5;
                user-select: none;
                cursor: pointer;
                line-height: 1.5;
                i {
                  font-size: 12px;
                }
              }
            }
          }
          .asset-item {
            cursor: pointer;
            padding: 0 24px;
            font-size: 14px;
            line-height: 1.5;
            color: #fff;
            .item-header {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding-top: 16px;
              .item-account {
                color: #579aff;
                font-size: 12px;
              }
              i {
                color: #8994a3;
                line-height: 1em;
              }
            }
            .item-option {
              border-bottom: 1px solid #4a5261;
              line-height: 1.3;
              .item-assets {
                display: flex;
                align-items: center;
                padding-bottom: 16px;
                text-align: right;
                font-size: 16px;
                .rub {
                  font-size: 12px;
                }
              }
            }
            &:hover {
              background-color: #2c3952;
            }
          }
        }
        &:hover .asset-dropdown {
          display: block;
        }
      }
      .nav-user {
        position: relative;
        display: flex;
        align-items: center;
        padding: 0 12px;
        height: 60px;
        a {
          display: inline-block;
          width: 32px;
          height: 32px;
          line-height: 32px;
          text-align: center;
          border-radius: 50%;
          i {
            font-size: 23px;
          }
          &:hover {
            background-color: rgba(87, 154, 255, 0.16);
          }
        }
        .user-dropdown {
          z-index: 9999999;
          display: none;
          position: absolute;
          top: calc(100% - 8px);
          right: 0;
          line-height: 1.5;
          width: 320px;
          border-radius: 4px;
          font-size: 14px;
          text-align: left;
          padding-bottom: 8px;
          background-color: #373e52;
          .user-header {
            background-color: #2d3442;
            border-radius: 4px 4px 0 0;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            padding: 16px 20px;
            font-size: 14px;
            .user-name {
              font-size: 16px;
              font-weight: 700;
              line-height: 1.5;
              color: #fff;
            }
            .user-id {
              color: #a3afc2;
              font-size: 12px;
            }
            .user-btn {
              display: flex;
              align-items: center;
              .user-btn-quit {
                background-color: rgba(87, 154, 255, 0.12);
                border: 1px solid rgba(87, 154, 255, 0.56);
                user-select: none;
                cursor: pointer;
                border-radius: 4px;
                padding: 6px 12px;
                font-size: 12px;
                color: #3b85f5;
                &:hover {
                  border-color: #659aea;
                }
              }
            }
          }
          .user-item {
            display: flex;
            align-items: center;
            flex: 1;
            margin-top: 8px;
            padding: 8px 20px;
            color: #fff;
            line-height: 1.5;
            cursor: pointer;
            border-bottom: 1px solid #4a5261;
            font-size: 14px;
            text-align: left;
            .user-item-icon {
              line-height: 1;
              font-size: 20px;
              cursor: pointer;
              i {
                font-size: 20px;
              }
            }
            .user-item-text {
              font-size: 14px;
              font-weight: 600;
              margin-left: 8px;
              cursor: pointer;
              color: #fff;
            }
            &:hover {
              background-color: #424957;
            }
          }
        }
        &:hover .user-dropdown {
          display: block;
        }
      }
      .nav-login {
        padding: 0 16px;
        height: 30px;
        line-height: 30px;
        border-radius: 4px;
        color: #579aff;
        border: 1px solid rgba(81, 154, 255, 0.56);
        background-color: rgba(87, 154, 255, 0.12);
        &:hover {
          background-color: #4e8be6;
          border-color: #4e8be6;
          color: #fff;
        }
      }
      .nav-register {
        padding: 0 16px;
        height: 30px;
        line-height: 30px;
        border-radius: 4px;
        border: 1px solid #579aff;
        background-color: #659aea;
        color: #fff;
        margin: 0 16px;
        &:hover {
          background-color: #4e8be6;
          border-color: #4e8be6;
        }
      }
      .nav-line {
        height: 24px;
        width: 1px;
        background-color: rgba(137, 148, 163, 0.16);
      }
      .nav-app {
        position: relative;
        text-align: center;
        width: 28px;
        height: 60px;
        line-height: 60px;
        margin-left: 12px;
        cursor: pointer;
        i {
          display: inline-block;
          width: 32px;
          height: 32px;
          line-height: 32px;
          font-size: 16px;
          color: #bad2f5;
          &:hover {
            border-radius: 50%;
            color: #fff;
            background-color: rgba(87, 154, 255, 0.16);
            cursor: pointer;
          }
        }
        .app-dropdown {
          z-index: 9999999;
          cursor: auto;
          position: absolute;
          top: calc(100% - 8px);
          right: -12px;
          padding: 16px 20px 20px;
          background-color: #373e52;
          border-radius: 4px;
          display: flex;
          align-items: flex-start;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.16),
            0 2px 8px 0 rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.08);
          line-height: normal;
          display: none;
          .app-left {
            margin-right: 40px;
            .left-download {
              display: flex;
              justify-content: space-around;
              .download-item {
                margin-right: 40px;
                text-align: left;
                color: #fff;
                font-weight: 500;
                font-size: 12px;
                &:last-child {
                  margin-right: 0;
                }
                .item-wrap {
                  box-sizing: content-box;
                  margin-top: 12px;
                  width: 122px;
                  height: 122px;
                  padding: 8px;
                  border-radius: 3px;
                  border: 1px solid #e6e6e6;
                  background: #fff;
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
              }
            }
            .left-text {
              font-size: 12px;
              text-align: center;
              color: #8994a3;
              margin-top: 6px;
            }
          }
          .app-right {
            .right-title {
              font-size: 12px;
              color: #fff;
              font-weight: 500;
            }
            .right-item {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-top: 8px;
              width: 160px;
              padding: 10px 28px 10px 16px;
              border-radius: 4px;
              line-height: 1;
              border: 1px solid hsla(0, 0%, 100%, 0.16);
              background-color: #252f3d;
              cursor: pointer;
              &:hover {
                border: 1px solid #659aea;
              }
              &:last-child {
                .iconfont {
                  color: #fff;
                }
              }
              .iconfont {
                font-size: 20px;
                color: #3c95fa;
              }
              .item-group {
                text-align: left;
                .item-text {
                  white-space: nowrap;
                  font-size: 12px;
                  color: #8994a3;
                }
                .item-type {
                  color: #fff;
                  font-size: 14px;
                }
              }
            }
          }
        }
        &:hover .app-dropdown {
          display: flex;
        }
      }
      .nav-notice {
        position: relative;
        text-align: center;
        width: 28px;
        height: 60px;
        line-height: 60px;
        margin-left: 12px;
        cursor: pointer;
        i {
          display: inline-block;
          width: 32px;
          height: 32px;
          line-height: 32px;
          font-size: 16px;
          color: #bad2f5;
          &:hover {
            border-radius: 50%;
            color: #fff;
            background-color: rgba(87, 154, 255, 0.16);
            cursor: pointer;
          }
        }
        .notice-dropdown {
          z-index: 9999999;
          display: none;
          overflow: hidden;
          position: absolute;
          right: -12px;
          top: calc(100% - 8px);
          background-color: #373e52;
          color: #fff;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.16),
            0 2px 8px 0 rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.08);
          border-radius: 4px;
          width: 400px;
          font-size: 14px;
          text-align: center;
          h4 {
            padding: 16px 20px 8px;
            background-color: #2d3442;
            border-radius: 4px 4px 0 0;
            font-size: 12px;
            text-align: left;
            color: #899db3;
            line-height: 1.5;
          }
          .notice-list {
            cursor: pointer;
            line-height: 1.5;
            font-size: 14px;
            .notice-item {
              padding: 0 20px;
              text-align: left;
              &:hover {
                background-color: #424957;
              }
              .item-inner {
                border-bottom: 1px solid rgba(132, 148, 173, 0.16);
                padding: 8px 0;
                .notice-item-title {
                  cursor: pointer;
                  color: #fff;
                }
                .notice-item-time {
                  font-size: 12px;
                  color: #899db3;
                }
              }
            }
          }
          .notice-all {
            display: block;
            line-height: 1.5;
            font-size: 14px;
            user-select: none;
            cursor: pointer;
            color: #3b85f5;
            background-color: #373e52;
            border-radius: 0 0 4px 4px;
            padding: 16px 0;
            &:hover {
              color: #5a8ad1;
            }
          }
        }
        &:hover .notice-dropdown {
          display: block;
        }
      }
      .nav-lan {
        position: relative;
        text-align: center;
        width: 28px;
        height: 60px;
        line-height: 60px;
        margin-left: 12px;
        cursor: pointer;
        a {
          display: inline-block;
          width: 32px;
          height: 32px;
          line-height: 32px;
          font-size: 10px;
          color: #bad2f5;
          &:hover {
            border-radius: 50%;
            color: #fff;
            background-color: rgba(87, 154, 255, 0.16);
            cursor: pointer;
          }
        }
        .lan-dropdown {
          z-index: 9999999;
          display: none;
          position: absolute;
          top: calc(100% - 8px);
          right: 0;
          color: #8994a3;
          cursor: pointer;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.16),
            0 2px 8px 0 rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.08);
          background-color: #373e52;
          border-radius: 4px;
          padding: 4px 0;
          text-align: center;
          .lan-list {
            line-height: 1.5;
            font-size: 14px;
            .lan-item {
              display: flex;
              align-items: center;
              word-spacing: nowrap;
              text-align: left;
              color: #fff;
              padding: 8px 24px;
              .iconfont {
                color: #8996a3;
                padding-right: 10px;
                font-size: 14px;
              }
              &:hover {
                background-color: #424957;
              }
            }
          }
        }
        &:hover .lan-dropdown {
          display: block;
        }
      }
      .nav-flag {
        position: relative;
        width: 28px;
        height: 60px;
        margin-left: 12px;
        cursor: pointer;
        i {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          display: inline-block;
          width: 32px;
          height: 32px;
          color: #bad2f5;
          &:hover {
            border-radius: 50%;
            background-color: rgba(87, 154, 255, 0.16);
            cursor: pointer;
          }
          svg {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 24px;
            height: 24px;
          }
        }
        .flag-dropdown {
          z-index: 9999999;
          display: none;
          position: absolute;
          top: calc(100% - 8px);
          right: 0;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.16),
            0 2px 8px 0 rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.08);
          background-color: #373e52;
          padding: 4px 0;
          border-radius: 4px;
          text-align: center;
          .flag-list {
            .flag-item {
              display: flex;
              align-items: center;
              color: #3b85f5;
              white-space: nowrap;
              text-align: left;
              padding: 8px 24px;
              .flag-icon {
                width: 24px;
                height: 24px;
                line-height: 24px;
                margin-right: 6px;
                svg {
                  width: 24px;
                  height: 24px;
                }
              }
              .flag-text {
                color: #fff;
                margin-bottom: 3px;
              }
              &:hover {
                background-color: #424957;
              }
            }
          }
        }
        &:hover .flag-dropdown {
          display: block;
        }
      }
    }
  }
}
.nav-active {
  color: #fff;
  font-weight: 700;
}

.flag-active {
  color: #3b85f5;
}
.login-btn {
  background-color: rgba(0, 0, 0, 0.04)!important;
  border: 1px solid rgba(87,154,255,.56)!important;
}
.login-btn:hover {
    background-color: #4e8be6!important;
    border-color: #4e8be6!important;
    color: #fff!important;
}
</style>