<template>
  <div class="home">
    <div class="content">
      <div class="top_swipe">
        <div class="top-title">
          马丁交易所
        </div>
        <van-swipe class="my-swipe" style="height: 200px;" :autoplay="2000" indicator-color="white">
          <van-swipe-item v-for="(item, index) in bannerArr" :key="index">
            <img :src="item.url" alt="">
          </van-swipe-item>
        </van-swipe>
        <div class="title-top">
          <div class="left">
              <img src="./images/jckcIcon.png" />
              <p>基础矿池</p>
            </div>
            <div class="right">
              <img src="./images/H.png" />
              <p>矿池规则</p>
            </div>
        </div>
      </div>
      <div class="homeKcCard-Group">
        <div v-for="(item, index) in cardData.jcKc">
          <MiningPoolCard :key="index" :data="item"   
          ref="miningPoolCardRef"
          @open-parent-modal="openParentModal"
         />
        </div>
      </div>
      <div class="adjust-mode">
        <div class="adjust-title">
          <img src="./images/jckcIcon.png" />
          <p>调节矿池</p>
        </div>
        <div class="adjust-card-group">
          <div v-for="(item, index) in cardData.gjKc" :key="index">
            <MiningPoolCard :data="item" 
            ref="miningPoolCardRef"
          @open-parent-modal="openParentModal"
            :key="index"
            />
          </div>
        </div>
      </div>
    </div>
    <Modal ref="modalRef"  />
  </div>
</template>

<script>
import {  ref, reactive, onMounted, defineComponent } from 'vue';
import Footer from '../../components/Footer.vue';
import Modal from '../../components/Modal.vue'
import MiningPoolCard from './components/Miningpoolcard.vue';
import { post } from '../../utils/request';
import img from './notice.png';
import ptkcImage from './images/blueImage.png'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default defineComponent({
  name: 'Home',
  components: {
    Footer,
    MiningPoolCard,
    Swiper,
    SwiperSlide,
    Modal
  },

  setup() {
    const data = reactive({
      msg: '数字货币利好哪些股 深圳试点数字货币概念股',
      img: img,
      cardData: {
        jcKc: [
          {
            kcType: '初级池',
            kcRuleText: '初级矿池文案',
            ruleCardText: '本金质押翻倍', // 小卡片文案
            interestRateNumber: '0.4', //日收益
            incomeRuleFirstText: '收益每日可取 翻倍出局',
            incomeRuleSecondText: 'U本位 本金不波动 收益稳定',
            image: ptkcImage,
            can: true,
            none: false,
            ordinary: true
          },
          {
            kcType: '矿工池',
            kcRuleText: '初级矿池文案',
            ruleCardText: '本金质押翻倍', // 小卡片文案
            interestRateNumber: '0.5', //日收益
            incomeRuleFirstText: '收益每日可取 翻倍出局',
            incomeRuleSecondText: 'U本位 本金不波动 收益稳定',
            incomeBottomText: '基础池开通5天方可购',
            image: ptkcImage,
            none: true,
            ordinary: true
          },
          {
            kcType: '矿长池',
            kcRuleText: '初级矿池文案',
            ruleCardText: '本金质押翻倍', // 小卡片文案
            interestRateNumber: '0.6', //日收益
            incomeRuleFirstText: '收益每日可取 翻倍出局',
            incomeRuleSecondText: 'U本位 本金不波动 收益稳定',
            incomeBottomText: '需用200USDT价值的平台币购买',
            image: ptkcImage,
            can: true,
            none: true,
            ordinary: true
          },
          {
            kcType: '机枪池',
            kcRuleText: '初级矿池文案',
            ruleCardText: '本金质押翻倍', // 小卡片文案
            interestRateNumber: '0.7', //日收益
            incomeRuleFirstText: '收益每日可取 翻倍出局',
            incomeRuleSecondText: 'U本位 本金不波动 收益稳定',
            incomeBottomText: '需用300USDT价值的平台币购买',
            image: ptkcImage,
            none: true,
            ordinary: true
          },
          {
            kcType: '头矿池',
            kcRuleText: '初级矿池文案',
            ruleCardText: '本金质押翻倍', // 小卡片文案
            interestRateNumber: '0.7', //日收益
            incomeRuleFirstText: '收益每日可取 翻倍出局',
            incomeRuleSecondText: 'U本位 本金不波动 收益稳定',
            incomeBottomText: '需用400USDT价值的平台币购买',
            image: ptkcImage,
            none: true,
            ordinary: true
          },
        ],
        gjKc: [
          {
            kcType: '定投池',
            kcRuleText: '初级矿池文案',
            ruleCardText: '本金质押翻倍', // 小卡片文案
            interestRateNumber: '1.0', //日收益
            incomeRuleFirstText: '收益每日可取 翻倍出局',
            incomeRuleSecondText: 'U本位 本金不波动 收益稳定',
            incomeBottomText:'需用400USDT价值的平台币购买',
            image: ptkcImage,
            can: false,
            none:true,
            advanced: true
          },
          {
            kcType: '高级池',
            kcRuleText: '初级矿池文案',
            ruleCardText: '本金质押翻倍', // 小卡片文案
            interestRateNumber: '0.8', //日收益
            incomeRuleFirstText: '收益每日可取 翻倍出局',
            incomeRuleSecondText: 'U本位 本金不波动 收益稳定',
            incomeBottomText:'需用400USDT价值的平台币购买',
            image: ptkcImage,
            can: false,
            none:true,
            periodic: true
          },
        ],
      },
      message: 'Hello Vue 3!',
      count: 0,
    });
    const bannerArr = ref([])
    const miningPoolCardRef = ref(null);
    const modalRef = ref(null);


    const openParentModal = () => {
      modalRef.value.isVisible = true
    };
    // 查询首页轮播图
    const getBanner = () => {
      post('client/homeBanner')
        .then((res) => {
          if (res.length !== 0) {
            bannerArr.value = res
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    const getEthPrice = () => {
      post('client/ethPrice')
        .then((res) => {
          if (res.length !== 0) {
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    
    onMounted(() => {
      // 查询轮播图
      getBanner();
      // 查询eth价格
      getEthPrice();
    });



    return {
      ...data,
      bannerArr,
      miningPoolCardRef,
      modalRef,
      openParentModal,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
});
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
    overflow-y: scroll;
    // overflow-y: auto;
    padding: 3px 5px;
    padding-bottom: 100px;

    .top_swipe {
      position: relative;

      .top-title {
        margin-left: 20px;
        color: #ffffffcc;
        font-size: 20px;
        z-index: 999;
        background: transparent;
        position: absolute;
        top: 10px;
      }

      .my-swipe {
        .van-swipe-item {
          border-radius: 8%;
          color: #fff;
          font-size: 20px;
          text-align: center;
        }

        img {
          height: 180px;
        }
      }

      .title-top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto 15px;
        .left{
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 16px;
          color: #ffffffcc;
          img{
            margin-right: 5px;
            width: 18px;
            height: 18px;
          }
        }
        .right{
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #ffffff99;
          font-size: 12px;
          img{
            margin-right: 5px;
            width: 16px;
            height: 16px;
          }
        }
      }

    }

    ::v-deep .van-swipe__indicators {
      bottom: 50px;
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
    align-items: center;
    width: 100%;
    // overflow-y: scroll;
  }

  .adjust-mode {
    .adjust-title {
      display: flex;
      align-items: center;
      margin: 10px 15px;
      margin-top: 15px;
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

    .adjust-card-group {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      // margin-top: 15px;
      width: 100%;
    }
  }

}</style>
