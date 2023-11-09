<template>
    <div class="WithdrawCardWrap">
        <div class="withdraw-top">
            <div class="top-eyes">
                <p>可提现金额</p>
                <van-icon class="eyesBtn" :name="showAmount ? 'eye-o' : 'eye'" @click="toggleAmountVisibility" />
            </div>
            <div class="top-bottom">
                <div class="left">
                <div class="number">
                    36.000000
                </div>
                <div class="unit">
                    USDT
                </div>
            </div>
            <div class="center">
                <div class="number">
                    36.000000
                </div>
                <div class="unit">
                    ETH
                </div>
            </div>
            <div class="right">
                <div class="number">
                    36.000000
                </div>
                <div class="unit">
                    平台代币
                </div>
            </div>
            </div>
        </div>
        <div class="withdraw-bottom">
            <div class="left">
                <img src="./images/leftIcon.png" alt="">
                <p>充币</p>
            </div>
            <div class="center">
                <img src="./images/centerIcon.png" alt="">
                <p>提币</p>
            </div>
            <div class="right">
                <img src="./images/rightIcon.png" alt="">
                <p>交易记录</p>
            </div>
        </div>
        
    </div>
</template>
<script>
// import axios from 'axios'

</script>

<style lang="less" scoped>
.WithdrawCardWrap {
    width: 380px;
    margin: auto 15px;

    .withdraw-top {
        border-radius: 10px 10px 0px 0px;
        height: 90px;
        background: linear-gradient(90deg, rgba(241, 107, 171, 1) 0%, rgba(241, 107, 171, 1) 0%, rgba(237, 63, 137, 1) 100%, rgba(237, 63, 137, 1) 100%);
        padding: 15px;

        .top-eyes {
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #fff;
            margin-bottom: 5px;

            .eyesBtn {
                font-size: 18px;
                margin-left: 3px;
            }
        }
        .top-bottom{
            display: flex;
            justify-content: space-between;
            

            .left,
        .center,
        .right {
            display: flex;
            flex-direction: column;

            .number {
                font-size: 16px;
                color: #fff;
            }
            .unit{
                text-align: center;
                color: #fff;
                font-size: 14px;
            }
        }
        }
       
    }
    .withdraw-bottom{
        display: flex;
        justify-content: space-around;
        background: #22325E;
        height: 92px;
        border-radius: 0px 0px 10px 10px;
        .left, .center, .right{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 15px;
            font-size: 14px;
            color: #ffffff99;
            img{
                width: 35px;
                height: 35px;
            }
            p{
                margin-top: 5px;
            }
        }
    }
}</style>