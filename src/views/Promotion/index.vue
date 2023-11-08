<template>
  <div class="promotion">
    <div class="content">
     推广
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '../../components/Footer.vue'
export default {
  name: 'promotion',
  components: Footer
};
</script>

<style lang="less" scoped>
.promotion {
  display: flex;
  flex-flow: column;
  height: 100%;
}
.content{
  flex: 1;
  overflow-y: auto;
}
</style>
