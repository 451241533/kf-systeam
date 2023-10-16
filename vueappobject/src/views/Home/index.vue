<template>
  <div class="home">
    <!-- <div>首页</div> -->
    <div class="content">
      <!-- 轮播图模块 -->
      <div class="top_swipe">
        <van-swipe class="my-swipe" style="height: 200px;" :autoplay="2000" indicator-color="white">
          <van-swipe-item>banner1</van-swipe-item>
          <van-swipe-item>banner2</van-swipe-item>
        </van-swipe>
      </div>
      <!-- 滚动公告模块 -->
      <div class="scroll_meg">
        <van-image width="30" height="30" :src="img" class="scroll_meg_img" />
        <div class="msg-box" ref="msgBox">
          <span class="msg" ref="scrollMsg">用户{{ msg }}</span>
        </div>
      </div>
      <!-- 中部卡片 -->
      <div class="card">
        <swiper :modules="modules" :loop="true" :slides-per-view="1" :space-between="50"
          :autoplay="{ delay: 1000, disableOnInteraction: false }" navigation :pagination="{ clickable: true }"
          :scrollbar="{ draggable: true }">
          <!-- loop可循环轮播，autoplay可自动播放 -->
          <swiper-slide>Slide 1123123</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
        </swiper>
        <div class="left-triangle">
          111
          <div class="mydiv">

          </div>
        </div>
        <div class="right-triangle">

        </div>


        <!-- <MessageCard title="矿池" text="基础池" ></MessageCard>
      <MessageCard title="特殊矿池" text="高炮池" ></MessageCard>
      <MessageCard title="王珠珠" text="大傻蛋" ></MessageCard>
      <MessageCard title="偷吃国家的" text="大米饭" ></MessageCard>
      <MessageCard title="吃不完" text="是笨蛋" ></MessageCard> -->
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '../../components/Footer.vue'
import img from './notice.png'
import MessageCard from './components/MessageCard.vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default {
  name: 'Home',
  components: {
    Footer, MessageCard, Swiper,
    SwiperSlide
  },
  data() {
    return {
      msg: '12312312312312312321321321321312312',
      img: img
    }
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
  mounted() {
    this.handleScrollMsg()
  },
  methods: {
    //横向播放通知公告
    handleScrollMsg() {
      let speed = 30//字体的整体滚动速度
      let box = this.$refs.msgBox
      let msg = this.$refs.scrollMsg

      let scroll = () => {
        if (msg.offsetLeft <= (- msg.offsetWidth)) {
          msg.style.left = box.offsetWidth + 'px'
        } else {
          msg.style.left = msg.offsetLeft - 1 + 'px'
        }
      }

      let timer = setInterval(scroll, speed)
      //鼠标移动到通知内容上暂停
      msg.onmouseover = () => {
        clearInterval(timer);
      }
      //移开继续滚动
      msg.onmouseout = () => {
        timer = setInterval(scroll, speed)
      }
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  display: flex;
  flex-flow: column;
  height: 100%;

  .content {
    border: 1px solid yellow;
    flex: 1;
    // overflow-y: auto;
    padding: 3px 5px;

    .my-swipe .van-swipe-item {
      border-radius: 8%;
      color: #fff;
      font-size: 20px;
      text-align: center;
      background-color: black;
    }

    // 滚动公告模块
    .scroll_meg {
      display: flex;
      width: 100%;
      height: 10px;

      .scroll_meg_img {
        width: 11%;
        background-color: transparent;
      }

      .msg-box {
        width: 85%;
        height: 10px;
        margin-left: 10px;
        overflow: hidden;
        position: relative;

        .msg {
          position: absolute;
          height: 10px;
          line-height: 10px;
          font-size: 7px;
          white-space: nowrap;
        }
      }
    }

    .card {
      padding-top: 10px;
      --swiper-navigation-size: 0;

      .swiper {
        .swiper-slide {
          height: 200px;
        }

        .left-triangle {
          border-top: 50px solid yellowgreen;
          border-bottom: 50px solid deeppink;
          border-left: 50px solid bisque;
          border-right: 50px solid chocolate;
          .mydiv{
            background-color: red;
  border-top: 50px solid yellowgreen;
  border-bottom: 50px solid deeppink;
  border-left: 50px solid bisque;
  border-right: 50px solid chocolate;
          }
        }

        .right-triangle {
          border-top: 50px solid yellowgreen;
          border-bottom: 50px solid deeppink;
          border-left: 50px solid bisque;
          border-right: 50px solid chocolate;
        }

        // .swiper-button-prev,.swiper-button-next{
        //   font-size: 10px;
        // }
      }

    }


  }

}
</style>
