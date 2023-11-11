<template>

  <div class="income">
    
    <!-- <div>首页</div> -->
    <div class="content">
    <IncomeTopCard />
    <div class="table">
      <PromotionalRebate />
      <div class="assets">
        <div class="top">
          <img src="./components/images/topicon.png" /><h3>挖矿收益</h3>
        </div>
        <AssetsCard/>
        <AssetsCard/>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import Footer from '../../components/Footer.vue'
import { reactive, onMounted } from 'vue';
import IncomeTopCard from './components/IncomeTopCard.vue'
import { post } from '../../utils/request';
import PromotionalRebate from './components/PromotionalRebate.vue'
import AssetsCard from './components/AssetsCard.vue'
export default {
  name: 'income',
  components: {Footer, IncomeTopCard, PromotionalRebate, AssetsCard},
  setup() {

    onMounted(() => {
      getAssetSubtotal();
    });
    const getAssetSubtotal = () => {
      post('client/assetSubtotal')
        .then((res) => {
          if (res.length !== 0) {
            bannerArr = res;
          }
        })
        .catch((err) => {
          console.log(err, '------cuowu');
        });
    };
    return {
      
    }
  },
};
</script>
<!-- /assetSubtotal -->

<style lang="less" scoped>
.content{
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;
  flex: 1;
  color: #fff;
  background: #131742;
  padding-bottom: 35px;
  // overflow-y: auto;
  // flex-direction: column;
  // align-items: center;
  .assets{
    margin-bottom: 30px;
  
    .top{
      display: flex;
      align-items: center;
      color: #ffffffcc;
            font-size: 16px;
            margin-bottom: 10px;
      img {
                margin-right: 5px;
                width: 20px;
                height: 20px;
            }
    }
    
  }
}
.table{
  flex-direction: column;
}

</style>
