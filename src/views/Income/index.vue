<template>
      <NavTopBar title="资产" :isShowLeftArrow="true"></NavTopBar>
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
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '../../components/Footer.vue'
import IncomeTopCard from './components/IncomeTopCard.vue'
import PromotionalRebate from './components/PromotionalRebate.vue'
import AssetsCard from './components/AssetsCard.vue'
export default {
  name: 'income',
  components: {Footer, IncomeTopCard, PromotionalRebate, AssetsCard}
};
</script>

<style lang="less" scoped>
.income {
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;
}
.content{
  flex: 1;
  color: #fff;
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

</style>
