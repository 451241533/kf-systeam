<template>
    <div v-if="isVisible" class="modal" @click.prevent="preventClose">
      <div class="modal-content">
        <div class="modal-title">温馨提示</div>
        <p>
          您的会员级别尚未达到在{{ miningPoolName }}挖矿的资质，不能直接进行挖矿。
        </p>
        <p>
          但您可使用平台币，以直接购买{{ miningPoolName }}挖矿资质的方式，进行挖矿。
        </p>
        <div class="button-group">
          <button @click="close" class="close-button">关闭</button>
          <button @click="buyQualification" class="buy-button">购买资质参与挖矿</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
import { useRouter } from 'vue-router';
  
  export default {
    setup(props) {
      const isVisible = ref(false);
      const miningPoolName = ref('');
      const router = useRouter()
      const open = (poolName) => {
        miningPoolName.value = poolName;
        isVisible.value = true;
      };
  
      const close = () => {
        isVisible.value = false;
      };
  
      const preventClose = () => {
      };
  
      const buyQualification = () => {
        router.push({
                name: 'buypower', // 路由名称
                query: {
                    currentType: miningPoolName.value,
                },
            });
        close();
      };
  
      return {
        isVisible,
        miningPoolName,
        open,
        close,
        preventClose,
        buyQualification,
      };
    },
  };
  </script>
  
  <style lang="less" scoped>
  .modal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
      z-index: 999;
      width: 100vw;
      height: 80vh;
  }
  
  .modal-content {
      background: #ffffff;
      padding: 20px;
      border-radius: 3px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      text-align: center;
      max-width: 400px;
      /* 设置你期望的最大宽度 */
      width: 100%;
      height: auto;
  
      .modal-title {
          font-size: 18px;
      }
  
      p {
          line-height: 1.5;
          margin-bottom: 15px;
      }
  
      .button-group {
          display: flex;
          justify-content: center;
          margin-top: 20px;
      }
  
      .buy-button,
      .close-button {
          margin: 0 10px;
          padding: 8px 16px;
          cursor: pointer;
          border-radius: 4px;
      }
  
      .buy-button {
          background-color: #4caf50;
          color: #fff;
      }
  
      .close-button {
          background-color: #f44336;
          color: #fff;
      }
  }</style>
  