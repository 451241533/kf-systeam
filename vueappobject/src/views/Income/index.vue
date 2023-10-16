<template>
  <div class="income">
    <!-- <div>首页</div> -->
    <div class="content">
    <IncomeTopCard />
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '../../components/Footer.vue'
import IncomeTopCard from './components/IncomeTopCard.vue'
export default {
  name: 'income',
  components: {Footer, IncomeTopCard}
};
</script>

<style lang="less" scoped>
.income {
  display: flex;
  flex-flow: column;
  height: 100%;
}
.content{
  flex: 1;
  overflow-y: auto;
}
</style>
