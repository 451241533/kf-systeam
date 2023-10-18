<template>
    <div class="card">
        <div class="card-top">
            <div class="image">
                <img src="../images/wakuang.png" />
            </div>
            <div class="message">
                <div class="kc-type">
                    {{ kcType }}
                </div>
                <div class="kc-rule">
                    <p>{{kcRuleText}}</p>
                </div>
                <div class="kc-ferture">
                    <div class="ruleCard">
                        <p>{{ruleCardText}}</p>
                    </div>
                    <div class="sy-mode">
                        日化收益 <span class="interestRate">
                            {{interestRateNumber}}%
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 分割线 -->
       <div class="fg-line">
        <van-divider :hairline="true" />
       </div>
        <div class="bottom">

        </div>
    </div>
</template>
<script>
export default {
    name: 'kcCard',
    props: {
        kcType: {
            type: String,
            default: '初级池'
        },
        kcRuleText:{
            type: String,
            default: '收益每日可取 翻倍出局 | U本位 本金不波动 收益稳定'
        },
        ruleCardText:{
            type: String,
            default:'本金质押翻倍'
        },
        interestRateNumber:{
            type:Number,
            default: 0.4
        }
        
    }
}
</script>
<style scoped>
.card {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 15px auto;
    width: 380px;
    height: 166px;
    background-color: #22325e;
    border-radius: 10px;

    .card-top {
        display: flex;
        margin-top: 25px;

        /* 图片部分 */
        .image {
            margin-left: 15px;

        }

        .image>img {
            width: 50px;
            color: aliceblue;
            height: 50px;
            color: aliceblue;
        }

        .message {
            margin-left: 20px;
            font-size: 16px;
            font-weight: 700;
            color: rgba(255, 255, 255, 0.8);
            .kc-rule{
                margin: 5px auto;
                color: #ffffff99;
                font-size: 12px;
            }
            .kc-ferture{
                width: 280px;
                height: 30px;
                overflow: hidden;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .ruleCard{
                    padding: 2px 5px;
                    text-align: center;
                    font-size: 13px;
                    background: rgba(19, 23, 66, 1);
                    width: 90px;
                    height: 24px;
                    line-height: 24px;
                    border-radius: 4px;
                    color: #08B0E3;
                }
                .sy-mode{
                    line-height: 30px;
                    .interestRate{
                    font-size: 24px;
                    color: #00ccffcc;
                }
                }
              
            }
        }
    }
    .fg-line{
        width: 350px;
        margin: 0px;
        color: #333333;
        --van-divider-border-color: #868383;
    }
}</style>