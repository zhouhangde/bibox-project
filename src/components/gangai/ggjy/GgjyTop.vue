<template>

        <div class="GgjyTop">
            <ul style="display: flex;justify-content: space-between;padding: 20px 0;align-items: center;" class="bzjy_header">
              <li>
                <p>
                  <span>图标</span>
                  <span style="margin-left:3px">BTC/USDT</span>
                  <span style="margin-left:3px">下拉</span>
                </p>
              </li>
              <li>
                <p>
                  <span>10,144.8800</span>
                  <span style="margin-left:3px">¥72,610.72</span>
                </p>
              </li>
              <li>
                <p>
                  <span>-63.8900</span>
                  <span style="margin-left:3px">-0.62%</span>
                </p>
              </li>
              <li>
                <p>
                  <span>24小时最高</span>
                  <span style="margin-left:3px">¥73,268.44</span>
                </p>
              </li>
              <li>
                <p>
                  <span>24小时最低</span>
                  <span style="margin-left:3px">¥71,931.63</span>
                </p>
              </li>
              <li>
                <p>
                  <span>24小时成交量</span>
                  <span style="margin-left:3px">BTC</span>
                </p>
              </li>
              <li>
                <p>
                  <span>币种介绍</span>
                  <span style="margin-left:3px">下雨图标</span>
                </p>
              </li>
            </ul>
        </div> 

</template>

<script>
// import FilterView from "../components/FilterView";
export default {
  name: "GgjyTop",
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

.GgjyTop {
  overflow: auto;
  box-sizing: border-box;
}


.bzjy_header li p{
  padding:3px 0
}


</style>
