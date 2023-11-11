<template>
  <NavTopBar title="我的"></NavTopBar>
  <div class="mine">
    <div class="content">
      <UserCard />
      <WithdrawCard />
      <div class="systemTitle">系统佣金</div>
      <div class="commission-mode">
        <div class="left">
          <div class="leftmode">
            <img src="./components/images/yongjin.png" alt="">
            <p>讲师佣金</p>
          </div>
        </div>
        <div class="right">
          <div class="rightmode">
            <img src="./components/images/yongjin.png" alt="">
            <p>运营佣金</p>
          </div>
        </div>
      </div>
      <div class="tool-set">
        <div class="language-set">
          <div class="left">
            语言
          </div>

          <div class="right">
            中文 >
          </div>
        </div>
        <div class="line"></div>
        <div class="help">
          <div class="left">
            使用帮助
          </div>

          <div class="right">
            >
          </div>
        </div>
      </div>
      <div  @click="clickLogout"  class="loginOrOutBtn">
        <p>
          退出登陆/切换账号
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import UserCard from './components/UserCard.vue'
import WithdrawCard from './components/WithdrawCard.vue'
import { post } from '../../utils/request'
export default {
  name: 'mine',
  components: { UserCard, WithdrawCard },
  setup(){
    const clickLogout =()=>{
      post('client/logout')
        .then((res) => {
          if (res.length !== 0) {
            localStorage.clear()
            sessionStorage.clear()
            window.location.reload()
          }
        })
        .catch((err) => {
          console.log(err,);
        });
    }
    return {
      clickLogout
    }
  }
};
</script>

<style lang="less" scoped>
.mine {
  display: flex;
  flex-flow: column;
  height: 100%;
}

.content {
  flex: 1;
  overflow-y: auto;

  .systemTitle {
    margin: 10px 15px 5px 15px;
    font-size: 16px;
    color: #fff;
  }

  .commission-mode {
    display: flex;
    margin: auto 15px;

    .left {
      background: #22325E;
      border-radius: 5px;
      width: 186px;
      height: 71px;
      margin-right: 10px;

      .leftmode {
        font-size: 14px;
        color: #f6f1f1c4;
        margin: 15px;
        display: flex;
        align-items: center;

        img {
          margin-right: 5px;
          width: 34px;
          height: 34px;
        }
      }
    }

    .right {
      border-radius: 5px;
      background: #22325E;
      width: 186px;
      height: 71px;

      .rightmode {
        display: flex;
        align-items: center;
        margin: 15px;
        font-size: 14px;
        color: #f6f1f1c4;

        img {
          margin-right: 5px;
          width: 34px;
          height: 34px;
        }
      }
    }
  }

  .tool-set {
    margin: 15px;
    height: 100px;
    background: #22325E;
    border-radius: 10px;
    .language-set{
      border-bottom: 1px solid #73727280;
      padding-bottom: 15px;
    }
    .language-set, .help{
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      color: #f6f1f1c4;
      .left{
        font-size: 14px;
        color: #f6f1f1c4;
        margin-left: 15px;
        margin-top: 10px;
      }
      .right{
        font-size: 12px;
        color: #f6f1f1c4;
        margin-right: 15px;
        margin-top: 10px;
      }
    }
    .help{
      margin-top: 5px;
    }
  }
  .loginOrOutBtn{
    text-align: center;
    margin: 10px auto;
    background: #22325E;
    width: 260px;
    height: 35px;
    line-height: 35px;
    border-radius: 20px;
    p{
      font-size: 14px;
      color: #f6f1f1de;
    }
  }
}</style>
