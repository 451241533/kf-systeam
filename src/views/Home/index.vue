<template>
  <div class="home">
    <NavTopBar title="马丁交易所" :isShowLeftArrow="false"></NavTopBar>
    <!-- <div>首页</div> -->
    <div class="content">
      <!-- 轮播图模块 -->
      <div class="top_swipe">
        <van-swipe class="my-swipe" style="height: 200px;" :autoplay="2000" indicator-color="white">
          <van-swipe-item>banner1</van-swipe-item>
          <van-swipe-item>banner2</van-swipe-item>
        </van-swipe>
        <div class="homeKcCard-top-wrap">
          <div class="homeKcCard-top">
            <div class="left">
              <img src="./images/jckcIcon.png" />
              <p>基础矿池</p>
            </div>
            <div class="right">
              <img src="./images/kcgzIcon.png" />
              <p>矿池规则</p>
            </div>
          </div>
        </div>

      </div>
      <!-- 基础矿池 -->
      <div class="homeKcCard-Group">
        <div v-for="(item, index ) in cardData.jcKc">
          <MiningPoolCard :key="index" :data="item" />
        </div>
      </div>
      
     
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '../../components/Footer.vue'
import MiningPoolCard from './components/MiningPoolCard.vue'
import img from './notice.png'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default {
  name: 'Home',
  components: {
    Footer, MiningPoolCard, Swiper,
    SwiperSlide
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
  data() {
    return {
      msg: '数字货币利好哪些股 深圳试点数字货币概念股',
      img: img,
      cardData: {
        jcKc: [
          {
            kcType: '初级池',
            kcRuleText: '初级矿池文案',
            ruleCardText: '本金质押翻倍', // 小卡片文案
            interestRateNumber: '0.4', //日收益
          },
          {
            kcType: '矿工池',
            kcRuleText: '矿工池文案',
            ruleCardText: '本金质押翻倍', // 小卡片文案
            interestRateNumber: '0.5', //日收益
          },
          {
            kcType: '矿长池',
            kcRuleText: '矿工池文案',
            ruleCardText: '本金质押翻倍', // 小卡片文案
            interestRateNumber: '0.6', //日收益
          },
          {
            kcType: '机枪池',
            kcRuleText: '矿工池文案',
            ruleCardText: '本金质押翻倍', // 小卡片文案
            interestRateNumber: '0.5', //日收益
          },
          {
            kcType: '矿工池',
            kcRuleText: '矿工池文案',
            ruleCardText: '本金质押翻倍', // 小卡片文案
            interestRateNumber: '0.6', //日收益
          },
        ],
        gjKc: [
          {
            kcType: '定投池',
            kcRuleText: '初级矿池文案',
            ruleCardText: '本金质押翻倍', // 小卡片文案
            interestRateNumber: '0.7', //日收益
          },
          {
            kcType: '高级池',
            kcRuleText: '矿工池文案',
            ruleCardText: '本金质押翻倍', // 小卡片文案
            interestRateNumber: '0.8', //日收益
          },
        ]
      }
    }
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
.home {
  display: flex;
  flex-flow: column;
  height: 100%;

  .content {
    flex-direction: column;
    /* co1umn 从上到下*/
    align-items: center;
    /* center代表水平方向 */
    justify-content: center;
    flex: 1;
    // overflow-y: auto;
    padding: 3px 5px;

    .top_swipe {
      position: relative;

      .my-swipe {
        .van-swipe-item {
          border-radius: 8%;
          color: #fff;
          font-size: 20px;
          text-align: center;
          background-color: black;
        }
      }

      .homeKcCard-top-wrap {
        display: flex;
        justify-content: center;
        position: absolute;
        bottom: -30px;
        z-index: 100;
        background-color: rgb(19, 23, 66);
        border-radius: 10px;
        width: 100%;

        .homeKcCard-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 390px;
          height: 64px;

          .left,
          .right {
            width: 50%;
            display: flex;
            // justify-content: start;
            font-weight: 700;
            font-style: normal;
            font-size: 15px;
            color: rgba(255, 255, 255, 0.8);

            img {
              width: 20px;
              height: 20px;
              margin-right: 10px;
            }
          }

          .right {
            font-size: 12px;
            color: #ffffff99;
            justify-content: end;
          }
        }
      }

    }

    ::v-deep .van-swipe__indicators {
      bottom: 60px;
    }
  }

  ::v-deep .van-nav-bar__text {
    font-size: 17px;
    margin-left: 20px;
  }

  // 矿池卡片模块样式
  .homeKcCard-Group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 15px;
    width: 100%;
    overflow-y: scroll;
  }

}
</style>
