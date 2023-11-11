<template>
  <div v-if="isVisible" class="modal" @click.prevent="preventClose">
    <div class="modal-content">
      <div class="modal-title">提示</div>
      <p class="modal-title-tips">
        当前您的会员级别尚未达到该矿池的挖矿资质，不能进行当前矿池的挖矿操作。您可按以下方式参与挖矿。
      </p>
      <table>
        <thead>
          <tr>
            <th>矿池</th>
            <th>参与挖矿条件</th>
            <th>购买挖矿资质</th>
          </tr>
        </thead>
        <tbody class="table-line">
          <tr v-for="(item, index) in miningPools" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.condition || '-' }}</td>
            <td>{{ item.purchase || '-' }}</td>
          </tr>
        </tbody>
      </table>
      <div class="bottom-tips-text">
        购买挖矿资质和参与挖矿时，均需按矿池级别，依次晋级挖矿。
      </div>
      <button @click="close" class="close-button">关闭</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      miningPools: [
        { name: '基础池', condition: '', purchase: '' },
        { name: '矿工池', condition: '基础池开通5天', purchase: '用100USDT价值的平台币购买' },
        { name: '矿长池', condition: '矿工池复投5天', purchase: '用200USDT价值的平台币购买' },
        { name: '机枪池', condition: '矿长池复投5天', purchase: '用300USDT价值的平台币购买' },
        { name: '头矿池', condition: '机枪池复投5天', purchase: '用400USDT价值的平台币购买' },
      ],
    };
  },
  methods: {
    close() {
      this.isVisible = false;
    },
    preventClose() {
    },
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

  .modal-content {
    background: #ffffffff;
    padding: 20px;
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 400px;
    width: 100%;
    height: auto;

    .modal-title {
      font-size: 18px;
    }

    .modal-title-tips {
      margin-top: 10px;
      margin-left: 20px;
      margin-bottom: 20px;
      white-space: pre-wrap;
    }

    .bottom-tips-text {
      margin-top: 20px;
      white-space: pre-wrap;
    }

    table {
      width: 100%;
      margin-top: 15px;
      border-collapse: collapse;

      th,
      td {
        padding: 6px;
        border: 1px solid #ddd;
        vertical-align: middle;
      }
    }
  }
}
.close-button {
  margin-top: 10px;
  padding: 8px 16px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #4caf50;
  color: #060000;
}

.close-button {
  background-color: #fa5252be;
}</style>
