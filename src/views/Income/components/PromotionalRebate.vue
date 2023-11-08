<template>
    <div class="promotionalRebateWrap">
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
        <Table class="rankTable" :option="option" :tableData="tableData"></Table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Table from '../../../common/Table/table.vue'
export default {
    components: { Table },
    data() {
        return {
            amount: '',
            showAmount: false,
            option: {
                column: [
                    {
                        label: 'id',
                        tableDataprop: 'roomType',

                    },
                    {
                        label: '时间',
                        tableDataprop: 'closedAccount'
                    },
                    {
                        label: '类型',
                        tableDataprop: 'noAccount'
                    },
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
        this.getMessage()
    },
    methods: {
        getMessage() {
            // const params ={
            //     unescape:1,
            //     version:'v61',
            //     appid:69617844,
            // }
            console.log('1111是否执行了')
            axios.post('api/homeBanner'), ({
                symbol: 'usdt',
                amount: 500
            })
                .then(response => {

                    // 请求成功处理逻辑
                    console.log(response.data);
                })
                .catch(error => {
                    // 请求失败处理逻辑
                    console.error(error);
                })

        },
        toggleAmountVisibility() {
            this.showAmount = !this.showAmount;
        }
    }
}
</script>

<style lang="less" scoped>
.promotionalRebateWrap {
    border-radius: 10px;
    background-color: #22325e;
    .table-mode{
        margin: 15px;
        .top-mode {
        display: flex;
        justify-content: space-between;
        margin: 10px auto;
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
    }

}</style>