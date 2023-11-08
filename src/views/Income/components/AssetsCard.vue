<template>
    <div class="cardWrap">
        <div class="card">
            <div class="card-top">
                <div class="left">
                    <img src="./images/wakuang.png" alt="">
                    <div class="text">
                        <div class="title">
                            矿池类型
                        </div>
                        <div class="time">
                            创建时间: 2023 10-12
                        </div>
                    </div>
                </div>
                <div class="right">
                    <van-tag color="#0066cc">挖矿中...</van-tag>
                </div>
            </div>
            <div class="card-center">
                <div class="left">
                    <div class="number">
                        2.000030
                    </div>
                    <div class="unit">
                        挖矿资金 (USDT)
                    </div>
                </div>
                <div class="center">
                    <div class="number">
                        0.4%
                    </div>
                    <div class="unit">
                        日化利率/天
                    </div>
                </div>
                <div class="right">
                    <div class="number">
                        6天
                    </div>
                    <div class="unit">
                        挖矿天数
                    </div>
                </div>
            </div>
            <van-divider class="line" hairline />
            <div class="card-bottom">
                <div class="left">
                    累计挖矿：2.000030 <span class="unit">USDT</span>
                </div>
                <div class="right">
                    <van-button icon-prefix="question-o" class="btr-btn"  
                   
                    size="small" round>参与挖矿</van-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style lang="less" scoped>
.cardWrap{
    margin: 15px auto;
    border-radius: 10px;
    background-color: #22325e;
    width: 380px;
    // height: 186px;
    .card{
        overflow: hidden;
        margin: 15px;
        .card-top{
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            margin-top: 20px;
            .left{
                display: flex;
                img{
                    width: 40px;
                    height: 40px;
                }
                .text{
                    margin-left: 10px;
                    font-size: 16px;
                    color: #ffffffcc;
                    .time{
                        color: #ffffff99;
                        font-size: 12px;
                    }
                }
            }
        }
        .card-center{
            display: flex;
            justify-content: space-between;
            margin: auto 8px;
            font-size: 18px;
            .unit{
                font-size: 12px;
                color: #ffffff99;
            }
        }
        .line{
            margin: 8px;
        }
        .card-bottom{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: auto 10px;
            .left{
                font-size: 14px;
                .unit{
                    font-size: 12px;
                    color: #ffffff99;
                }
            }
            .right{
                display: inline-block;
                margin-bottom: 10px;
                .btr-btn{
                    color: #ffffffcc;
                    border: 0;
                    background: linear-gradient(90deg, rgba(241, 107, 171, 1) 0%, rgba(241, 107, 171, 1) 0%, rgba(237, 63, 137, 1) 100%, rgba(237, 63, 137, 1) 100%);
                    display: inline-block;
                }
            }
        }
    }
}
</style>