<template>
    <div class="card">
        <div class="card-top">
            <div class="image">
                <img src="../images/wakuang.png" />
            </div>
            <div class="message">
                <div class="kc-type">
                    {{ data.kcType }}
                </div>
                <div class="kc-rule">
                    <p>{{ data.kcRuleText }}</p>
                </div>
                <div class="kc-ferture">
                    <div class="ruleCard">
                        <p>{{ data.ruleCardText }}</p>
                    </div>
                    <div class="sy-mode">
                        日化收益 <span class="interestRate">
                            {{ data.interestRateNumber }}%
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 分割线 -->
        <div class="fg-line">
            <van-divider class="line" :hairline="true" />
        </div>
        <div class="card-bottom">
            <div class="bottom-left">
                基础池开通5天方可购
            </div>
            <div class="bottom-right">
                <div class="left">
                    <van-popover v-model:show="showPopover" theme="dark" :actions="actions">
                        <template #reference>
                            <van-button class="question-icon">?</van-button>
                        </template>
                    </van-popover>
                </div>
                
                <div class="right">
                    <van-button icon-prefix="question-o" class="btr-btn"  
                    color="#314886" 
                    size="small" round>参与挖矿</van-button>

                </div>

            </div>

        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import { showToast } from 'vant';
export default {

    name: 'kcCard',
    props: {
        // 是否是首页卡片
    isHome: {
      type: Boolean,
      default: true
    },
    isShowLeftArrow:{
      type: Boolean,
      default: true
    }
  },
    setup() {
        const showPopover = ref(false);

        // 通过 actions 属性来定义菜单选项
        const actions = [
            { text: '选项一' },
            { text: '选项二' },
            { text: '选项三' },
        ];
        const onSelect = (action) => showToast(action.text);

        return {
            actions,
            onSelect,
            showPopover,
        };
    },
    props: {
        data:{
            type: Object,
            require:true,
        },
        kcType: {
            type: String,
            default: '初级池'
        },
        kcRuleText: {
            type: String,
            default: '收益每日可取 翻倍出局 | U本位 本金不波动 收益稳定'
        },
        ruleCardText: {
            type: String,
            default: '本金质押翻倍'
        },
        interestRateNumber: {
            type: Number,
            default: 0.4
        }

    },
    data() {
        return {
            islevel: 'cj',
            isDisabled: true,
            // isHighCard: [
            //     {

            //     }
            // ]
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
    /* height: 166px; */
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

            .kc-rule {
                margin: 5px auto;
                color: #ffffff99;
                font-size: 12px;
            }

            .kc-ferture {
                width: 280px;
                height: 30px;
                overflow: hidden;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .ruleCard {
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

                .sy-mode {
                    line-height: 30px;
                    font-size: 13px;

                    .interestRate {
                        font-size: 24px;
                        font-weight: 400;
                        color: #00ccffcc;
                    }
                }

            }
        }
    }

    .fg-line {
        width: 350px;
        margin: 0px;
        color: #333333;
        --van-divider-border-color: #868383;

        .van-divider {
            margin: 10px;
        }

        .ling {
            margin: 0px;
        }
    }

    .card-bottom {
        width: 100%;
        display: flex;

        .bottom-left {
            width: 50%;
            text-align: center;
            font-size: 12px;
            color: #ffffff99;
            /* line-height: 48px; */
            margin-left: 75px;
        }

        .bottom-right {
            width: 50%;
            height: 40px;
            display: flex;
            /* overflow: hidden; */
            justify-content: space-around;
            align-items: center;

            .left {
                width: 30px;
                height: 40px;
                margin-bottom: 30px;
                margin-left: 30px;

                .question-icon {
                    width: 30px;
                    height: 30px;
                    background: transparent;
                    color: rgb(192, 191, 191);
                    border-radius: 50%;
                    font-weight: 700;
                    border: .5px solid rgb(192, 191, 191);
                    margin-bottom: 20px;
                }
            }

            .right {
                display: flex;
                justify-content: end;
                width: 80px;
                height: 40px;
                .btr-btn{
                    width: 80px;
                    height: 24px;
                    font-size: 12px;
                }
            }

            /* 
            .van-badge__wrapper {
                display: flex;

                .van-badge--top-right {
                    top: 100;
                }
            }


            .btr-btn {
                width: 80px;
                height: 24px;
                font-size: 13px;
                color: #ffffffcc;
                margin-right: 20px;
                margin-bottom: 15px;
                background-color: rgba(237, 63, 137, 0.9);
                --van-button-border-width: 0px
            }

            .van-popover__wrapper {
                display: block;
                width: 80px;
                height: 24px;
                font-size: 13px;
                color: #ffffffcc;
            }

            .btn-icon {
                position: absolute;
                top: 100;
            }

            .question-btn {
                width: 30px;
                height: 24px;
                margin-right: 20px;
                background-color: red;
                margin-bottom: 20px;

                .question-icon {
                    width: 30px;
                    height: 30px;
                }
            } */
        }
    }

    /* 徽标尺寸 */
    --van-badge-font-size: 20px;
    --van-badge-size:20px;
    --van-badge-border-width:0;
    --van-badge-background: transparent;
    --van-badge-font-weight:700;
}
</style>