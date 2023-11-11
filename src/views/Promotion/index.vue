<template>
  <NavTopBar title="推广" :isShowLeftArrow="true"></NavTopBar>
  <div class="promotion">
    <div class="content">
      <PromotionTopCard />
      <div class="team-mode">
        <div class="team-mode-title">
          <img src="./titleIcon.png" alt="">
          团队信息
        </div>
        <TeamMode />
      </div>
      <div class="activity-mode">
        <div class="mode-top">
          <div class="activity-top-mode">
            <img src="./titleIcon.png" alt="">
            活动报名
          </div>
          <div class="left-title-link">
            我报名的活动 >
          </div>
        </div>
        <ActivityCardMode/>
        <ActivityCardMode/>
        <ActivityCardMode/>
        <ActivityCardMode/>
      </div>

    </div>

  </div>
</template>
<script>
import PromotionTopCard from './components/PromotionTopCard.vue'
import TeamMode from './components/TeamMode.vue'
import ActivityCardMode from './components/ActivityCardMode.vue'
import Footer from '../../components/Footer.vue'
export default {
  name: 'promotion',
  components: { Footer, PromotionTopCard, TeamMode, ActivityCardMode }
};
</script>

<style lang="less" scoped>
.promotion {
  display: flex;
  flex-flow: column;
  height: 100%;
  padding-bottom: 60px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  padding-bottom: 50px;

  .team-mode {
    width: 380px;
    margin: 0 50px;

    .team-mode-title {
      margin: 15px 0px 5px 0;
      display: flex;
      align-items: center;
      color: #fff;
      font-size: 14px;

      img {
        margin-right: 5px;
        width: 16px;
        height: 16px;
      }
    }

  }

  .activity-mode {
    margin-top: 10px;
    width: 380px;
    .mode-top {
      display: flex;
      justify-content: space-between;

      .activity-top-mode {
        display: flex;
        align-items: center;
        color: #ffffffcc;
        font-size: 14px;

        img {
          margin-right: 5px;
          width: 16px;
          height: 16px;
        }
      }

      .left-title-link {
        font-size: 12px;
        color: #999999;
      }
    }


  }
}</style>
