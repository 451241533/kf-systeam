<template>
  <div class="rankTable">
    <table class="table">
     <div class="table-wrap">
      <thead class="table-top">
        <tr>
          <th class="first">ID/时间/类型</th>
          <th class="second">返利金额(ETH)</th>
        </tr>
      </thead>
      <tbody>
        <!-- 循环遍历数据渲染表格行 -->
        <tr v-for="item in tableData" :key="item.id">
          <td class="frist-list">
            <div class="user-info">
              <img :src="item.avatar" alt="Avatar">
              <div class="user-details">
                <div class="user-id">{{ item.id }}</div>
                <div class="detail-mode">
                  <div class="time">{{ item.time }}</div>
                <div class="type">{{ item.type }}</div>
                </div>
              </div>
            </div>
          </td>
          <td class="ethStyle">{{ item.rebateAmount }}</td>
        </tr>
      </tbody>
     </div>
     <div class="bottom-btn" @click="debouceLoadMoreData"></div>
    </table>

    <!-- 加载更多按钮 -->
   
  </div>
</template>

<script>

import { ref, onMounted, onBeforeUnmount } from 'vue';
import _debounce from 'lodash/debounce';

import headsculpture from '../../common/images/headsculpture.png'
export default {
  props: {
    loadMoreData: Function,
  },
  setup(props) {
    const debouceLoadMoreData = _debounce(() => {
      const container = document.getElementsByClassName('rankTable');
      console.log('123456789')
      if (container.scrollHeight - container.scrollTop === container.clientHeight) {
        // 触发加载更多数据的方法
        props.loadMoreData();
      }
    }, 1000); 
       // 监听滚动事件
       onMounted(() => {
      window.addEventListener('scroll', debouceLoadMoreData);
    });

    // 移除滚动事件监听
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', debouceLoadMoreData);
    });
    return {
      debouceLoadMoreData
    }
  },
  data() {
    return {
      // 模拟表格数据
      tableData: [
        { id: 1, avatar: headsculpture, time: '2023-01-01', type: '类型A', rebateAmount: 2.5 },
        { id: 2, avatar: headsculpture, time: '2023-02-01', type: '类型B', rebateAmount: 1.8 },
        { id: 3, avatar: headsculpture, time: '2023-03-01', type: '类型C', rebateAmount: 3.2 },
        { id: 2, avatar: headsculpture, time: '2023-02-01', type: '类型B', rebateAmount: 1.8 },
        { id: 3, avatar: headsculpture, time: '2023-03-01', type: '类型C', rebateAmount: 3.2 },
        { id: 2, avatar: headsculpture, time: '2023-02-01', type: '类型B', rebateAmount: 1.8 },
        { id: 3, avatar: headsculpture, time: '2023-03-01', type: '类型C', rebateAmount: 3.2 },
        // { id: 2, avatar: headsculpture, time: '2023-02-01', type: '类型B', rebateAmount: 1.8 },
        // { id: 3, avatar: headsculpture, time: '2023-03-01', type: '类型C', rebateAmount: 3.2 },
        // { id: 2, avatar: headsculpture, time: '2023-02-01', type: '类型B', rebateAmount: 1.8 },
        // { id: 3, avatar: headsculpture, time: '2023-03-01', type: '类型C', rebateAmount: 3.2 },
        // { id: 2, avatar: headsculpture, time: '2023-02-01', type: '类型B', rebateAmount: 1.8 },
        // { id: 3, avatar: headsculpture, time: '2023-03-01', type: '类型C', rebateAmount: 3.2 },
      ],
    };
  },
  methods: {
    debouceLoadMoreData() {
      // 模拟加载更多数据
      const newRows = [
        // 新的数据项...
      ];
      this.tableData = [...this.tableData, ...newRows];
    },
  },
};
</script>

<style  lang="less" scoped>
/* 添加样式以适应你的需求 */
.bottom-btn{
  background: transparent;
}
.rankTable{
  overflow-y: scroll;
  max-height: 320px;
}
.frist-list{
  width: 50%;
}
.table {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border-collapse: collapse;
  background-color: #22325e;
  color: #ffffff66;

  .table-wrap{
    margin: 20px 10px;
  }
.table-top{
  .first,.second{
    border: none;
  }
  .second{
    width: 100%;
    text-align: end;
  }
}

th, td {
  border: none; /* 移除所有边框 */
  border-top: .5px solid #77767671; /* 保留上边框 */
  padding: 8px;
  text-align: left;
  // color: #ffffff; /* 字体颜色为白色 */
  font-size: 12px; /* 字体大小为12px */
}

.user-info {
  display: flex;
  align-items: center;
}

.user-details {
  margin-left: 10px;
  .user-id{
    font-size: 14px;
    font-weight: 700;
    color: #ffffff99;
  }
  .detail-mode{
    display: flex;
    .time{
      padding-right: 4px;
      border-right: 1px solid #ffffff66;
    }
    .type{
      margin-left: 4px;
    }
  }
}

img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.ethStyle{
  color: #00ccffcc;
  text-align: end;
  font-size: 16px;
}
}
</style>
