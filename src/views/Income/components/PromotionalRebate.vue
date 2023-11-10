<template>
    <div class="table-mode">
            <div class="top-mode">
            <div class="left">
                <img src="./images/topicon.png" />
                <h2>推广福利</h2>
            </div>
            <div class="right">
                更多>
            </div>
        </div>
        <Table class="rankTable" :loadMoreData="loadMoreData" ></Table>
        </div>
    <div class="promotionalRebateWrap">
        
    </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue';
import { post } from '../../../utils/request';
import Table from '../../../common/Table/table.vue'
export default {
    components: { Table },
    methods: {
    loadMoreData() {
      // 这里可以调用接口获取更多数据
      // 示例中使用 ref 来模拟表格数据
      getTableList()
      const newData = [
        // 新的数据项...
      ];
      // 将新数据追加到表格数据中
      this.tableData.value = [...this.tableData.value, ...newData];
    },
  },
    data() {
        return {
            amount: '',
            showAmount: false,
            option: {
                column: [
                    {
                        label: 'id/时间/类型',
                        tableDataprop: 'roomType',

                    },
                    // {
                    //     label: '时间',
                    //     tableDataprop: 'closedAccount'
                    // },
                    // {
                    //     label: '类型',
                    //     tableDataprop: 'noAccount'
                    // },
                    {
                        label: '返利金额(ETH)',
                        tableDataprop: 'givePrice'
                    },
                ]
            },
            tableData: [
                {
                    closedAccount: 0,
                    givePrice: 3,
                    noAccount: 0,
                    roomType: "品牌",
                    totalPrice: 0
                },
                {
                    closedAccount: 0,
                    givePrice: 3,
                    noAccount: 0,
                    roomType: "数量",
                    totalPrice: 0
                },
                {
                    closedAccount: 0,
                    givePrice: 3,
                    noAccount: 0,
                    roomType: "赠送",
                    totalPrice: 0
                },
                {
                    closedAccount: 2,
                    givePrice: 0,
                    noAccount: 0,
                    roomType: "合计",
                    totalPrice: 0
                },
            ],
        };
    },
    mounted() {
        this.getTableList()
        // this.getMessage()
    },
    methods: {
        getTableList() {
            // post('client/userProfitLog'), ({
            //     skip:'0'
            // })
            //     .then(res => {
            //         // 请求成功处理逻辑
            //         console.log(res);
            //     })
            //     .catch(error => {
            //         // 请求失败处理逻辑
            //         console.error(error);
            //     })
            post('client/userProfitLog',{
                skip: '0'
            })
        .then((res) => {
          if (res.length !== 0) {
            bannerArr = res;
          }
        })
        .catch((err) => {
          console.log(err, '------cuowu');
        });

        },
        toggleAmountVisibility() {
            this.showAmount = !this.showAmount;
        }
    },
    setup() {
    // 模拟表格数据
    const tableData = ref([]);

    return {
      tableData,
    };
  },
}
</script>

<style lang="less" scoped>
.promotionalRebateWrap {
    border-radius: 10px;
    background-color: #22325e;
    // .table-mode{
    //     margin: 15px;
 
    // }

}
.top-mode {
        display: flex;
        justify-content: space-between;
        // margin: 10px auto;
        height: 40px;
        width: 100%;

        .left {
            color: #ffffffcc;
            font-size: 16px;
            display: flex;
            justify-content: space-around;
            align-items: center;
           

            img {
                margin-right: 5px;
                width: 20px;
                height: 20px;
            }
        }

        .right {
            font-size: 12px;
            color: #ffffff99;
            line-height: 40px;
            text-align: center;
        }

    }
</style>