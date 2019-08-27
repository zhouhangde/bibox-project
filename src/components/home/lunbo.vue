<template>
  <div class="lunbo">
       <!-- 轮播 -->
      <div class="broadcast">
        <div class="igs">
          <div class="ig">
            <img src="../../assets/img/banner1.png" />
          </div>
          <div class="ig">
            <img src="../../assets/img/banner2.png" />
          </div>
          <div class="ig">
            <img src="../../assets/img/banner3.png" />
          </div>
        </div>

        <div style="width: 100%;height:400px;position: relative;margin: 0 auto;">
          <div class="igs-content">
            <div id="tabs">
              <div class="tab bg">
              </div>
              <div class="tab">
              </div>
              <div class="tab">
              </div>
            </div>
          </div>
      </div>
    </div>

  </div>
</template>

<script>
import $ from 'jquery'
/* 首页轮播特效*/
var i = 0;
var timer;
$(function(){
	$(".ig").eq(0).show().siblings().hide();
	ShowTime();
	$(".tab").hover(function(){
		i=$(this).index();
		Show();
		clearInterval(timer);
	},function(){
		ShowTime();
	});
	
});

/* 首页轮播特效*/
function Show(){
	$(".ig").eq(i).fadeIn(300).siblings().fadeOut(300);
	$(".tab").eq(i).addClass("bg").siblings().removeClass("bg");
}

function ShowTime(){
	timer=setInterval(function(){
		i++;
		if(i==3){
			i=0;
		};
		Show();
	},4000);
}


export default {
  name: "lunbo",
  data() {
    return {
    };
  },
  props: {
  },
  created(){
    
  },
   methods: {
   }
};
</script>

<style scoped>
  /* 轮播 */
.igs-content{
	/*position: absolute;*/
	width: 1200px;
    height: 100%;
	margin: 0 auto;
	position: relative;
	/* box-shadow: 1px 0 4px #bfbfbf; */
}
.ig{
	position: absolute;
	height: 411px;
}
.ig img{
	height: 411px;
	width: 100%;
}

#tabs{
	position: absolute;
	bottom: 50px;
    left: 45%;
}

.tab{
	width: 41px;
	height: 2px;
	/*background-color: #5388e8;*/
	float: left;
	text-align: center;
	line-height: 30px;
	color: #fff;
	margin-right: 10px;
	/* border-radius: 100%; */
	cursor: pointer;
	background: #B8B8B6;
}
.bg{
	background: #EAE9E7;
}
/* 轮播结束 */    
</style>
