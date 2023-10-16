<template>
  <div class="mine">
    <!-- <div>首页</div> -->
    <div class="content">
     我的
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '../../components/Footer.vue'
export default {
  name: 'mine',
  components: Footer
};
</script>

<style lang="less" scoped>
.mine {
  display: flex;
  flex-flow: column;
  height: 100%;
}
.content{
  flex: 1;
  overflow-y: auto;
}
</style>
