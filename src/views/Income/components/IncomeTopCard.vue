<template>
    <div class="mainWrap">
        <div class="main">
            <div class="main-top">
                <div class="mainTopTitle">
                    资产总额
                    <van-icon :name="showAmount ? 'eye-o' : 'eye'" @click="toggleAmountVisibility" />
                </div>
                <div class="allNumber">≈99999.99<span class="unit">USDT</span></div>
            </div>
            <div class="main-center">
                <div class="main-center-child">
                    <div class="top">
                        质押挖矿资产（USDT）
                    </div>
                    <div class="top-number">
                        ≈9999.999
                    </div>
                </div>
                <div class="main-center-child">
                    <div class="top">
                        质押挖矿资产（USDT）
                    </div>
                    <div class="top-number">
                        ≈9999.999
                    </div>
                </div>
            </div>
            <van-divider />
            <div class="main-bottom">
                可提现资产详情
               <div class="box">
                <div>
                    <div class="unit">
                        USDT
                    </div>
                    <div class="number">
                        2003.00
                    </div>
                </div>
                <div class="center">
                    <div class="unit">
                        ETH
                    </div>
                    2003.00
                </div>
                <div>
                    <div class="unit">
                        平台币
                    </div>
                    2003.00
                </div>
               </div>
            </div>
        </div>


    </div>
    <!-- <div class="line"></div> -->
</template>

<script>
import getList from '../../../servers/manage'
import axios from 'axios'
export default {
    data() {
        return {
            amount: '',
            showAmount: false
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
.mainWrap {
    width: 380px;
    height: 230px;
    font-size: 8px;
    color: #FFF;
    display: flex;
    background: linear-gradient(90deg, rgba(237, 63, 137, 1) 0%, rgba(237, 63, 137, 1) 0%, rgba(194, 18, 94, 1) 100%, rgba(194, 18, 94, 1) 100%);
    border-radius: 10px;
    .main {
        margin: 20px;
        width: 100%;
        color: #ffffffcc;
        .main-top {
            
            height: 60px;
            .mainTopTitle{
                font-size: 18px;
            }
            .allNumber {
                font-size: 20px;
            }

            .unit {
                font-size: 10px;
            }
        }
        .main-center{
            display: flex;
            justify-content: space-between;
            .main-center-child{
                .top{
                    font-size: 12px;
                }
                .top-number{
                    font-size: 16px;
                }
            }
        }
        .main-bottom{
            .box{
                width: 100%;
                display: flex;
                justify-content: space-around;
                div{
                    text-align: center;
                }
                .center{
                    width: 33%;
                    border-left: 1.5px solid rgba(194, 190, 190, 0.5);
                    border-right: 1.5px solid rgba(194, 190, 190, 0.5);
                }
            }
           
        }
    }

}

</style>