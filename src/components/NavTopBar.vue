<template>
  <div class="NavTopBar">
    <van-nav-bar :left-text="title" :left-arrow="isShowLeftArrow" :border="false" @click-left="onClickLeft" />
  </div>
</template>
<script>
export default {
  name: 'TopBar',
  props: {
    title: {
      type: String,
      default: '返回'
    },
    isShowLeftArrow:{
      type: Boolean,
      default: true
    }
  },
  setup() {
    const onClickLeft = () => history.back();
    return {
      onClickLeft,
    };
  },
};
</script>
  
<style lang="less" scoped>
.NavTopBar{
  ::v-deep .van-nav-bar__text{
    font-size: .41rem;
  }
  ::v-deep  .van-nav-bar__left{
    padding: 0;
  }
}
</style>
  