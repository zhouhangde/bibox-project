<template>

        <!-- 第一大行 -->
        <div>
            <ul style="display: flex;justify-content: space-between;padding: 20px 0;align-items: center;" class="BibiTop bzjy_header">
              <li>
                <p>
                  <span>图标</span>
                  <span>BTC/USDT</span>
                  <span>下拉</span>
                </p>
                <p>
                  Bitcoin
                </p>
              </li>
              <li>
                <p>
                  <span>10,144.8800</span>
                  <span>¥72,610.72</span>
                </p>
                <p>
                  最新成交价
                </p>
              </li>
              <li>
                <p>
                  <span>-63.8900</span>
                  <span>-0.62%</span>
                </p>
                <p>
                  24小时涨跌幅
                </p>
              </li>
              <li>
                <p>
                  <span>10,236.7740</span>
                  <span>¥73,268.44</span>
                </p>
                <p>
                  24小时最高
                </p>
              </li>
              <li>
                <p>
                  <span>10,050.0000</span>
                  <span>¥71,931.63</span>
                </p>
                <p>
                  24小时最低
                </p>
              </li>
              <li>
                <p>
                  <span>10,313</span>
                  <span>BTC</span>
                </p>
                <p>
                  24小时成交量
                </p>
              </li>
              <li>
                下雨图标
              </li>
            </ul>
        </div>  

</template>

<script>
// import FilterView from "../components/FilterView";
export default {
  name: "BibiTop",
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
  }
};
</script>

<style scoped>

.BibiTop {
  overflow: auto;
  box-sizing: border-box;
}


.bzjy_header li p{
  padding:3px 0
}


</style>
