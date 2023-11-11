<template>
    <div
        :class="['cardWrap', { 'ordinary-background': data.ordinary, 'periodic-background': data.periodic, 'advanced-background': data.advanced }]">
        <div class="card">
            <div class="card-top-title">
                <div class="card-top-title-left">
                    {{ data.kcType }}
                </div>
                <div class="card-top-title-right">
                    {{ data.ruleCardText }}
                </div>
            </div>
            <div class="card-image">
                <img :src="data.image" alt="">
            </div>
            <div class="card-bottom-text-mode">
                <div class="card-bottom-text-mode-top">
                    <div class="card-bottom-text-mode-top-text">
                        <div class="left">
                            <!-- 空div -->
                        </div>
                        <div class="right">
                            <p>{{ data.incomeRuleFirstText }}</p>
                            <p>{{ data.incomeRuleSecondText }}</p>
                        </div>
                    </div>
                    <div class="right-number">
                        <img class="right-number-image" src="../images/rightimage.png" alt="">
                        <div>日化收益</div>
                        <p class="ratio">{{ data.interestRateNumber }}</p> %
                    </div>
                </div>
                <div class="card-bottom-text-mode-bottom">
                    {{ data.incomeBottomText }}
                </div>
            </div>
            <!-- 分割线 -->
            <div class="line"></div>
            <div class="card-bottom-btn-mode">
                <div class="btn-mode">
                    <div @click="clickToBuyPage"
                        :class="['btn', { 'ableToPurchase-btn': data.can, 'noableToPurchase-btn': data.none, }]">
                        参与挖矿
                    </div> <img v-show="data.none" class="questionIcon" src="../images/wenhao.png" @click="showPopupHandler" alt="">
                </div>
            </div>
           
        </div>
    </div>
    
</template>
<script>
import { ref, defineProps, defineEmits,defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { showToast } from 'vant';
export default defineComponent({
    name: 'kcCard',
    props: {
  },
    setup({data}, { emit }) {
        const showPopup = () => {
      emit('card-click', '参数1', '参数2', '参数3');
    };
    const showConfirmationDialog = () => {
      emit('show-confirmation');
    };
    const showPopupHandler = () => {
      emit('show-popup', '参数1', '参数2', '参数3');
    };

        const showConfirmation = ref(data.showConfirmation);
        const showPopover = ref(false);
        const router = useRouter()
    const handleConfirm = () => {
      showConfirmation.value = false;
    };
        const handleClose = (action) => {
            if (action === 'confirm') {
            }
        };

        const onSelect = (action) => showToast(action.text);
        const clickToBuyPage = () => {

            console.log(data.kcType, '-------------datadata')
            if (!!data.none) return false
            router.push({
                name: 'buypage', // 路由名称
                query: {
                    currentType: data.kcType,
                },
            });
        }

        return {
            data,
            onSelect,
            showPopup,
            showPopover,
            clickToBuyPage,
            showPopupHandler,
            showConfirmation,
            showConfirmationDialog,
            handleClose,
            handleConfirm,
        };
    },
    props: {
        data: {
            type: Object,
            require: true,
        },
        // kcType: {
        //     type: String,
        //     default: '初级池'
        // },
        // kcRuleText: {
        //     type: String,
        //     default: '收益每日可取 翻倍出局 | U本位 本金不波动 收益稳定'
        // },
        // ruleCardText: {
        //     type: String,
        //     default: '本金质押翻倍'
        // },
        // interestRateNumber: {
        //     type: Number,
        //     default: 0.4
        // },
        // ordinary: {
        //     type: Boolean,
        //     default: false // 或者根据需要设置默认值
        // },
        // image: {
        //     type: String,
        //     default: ''
        // },
        // incomeRuleFirstText: {
        //     type: String,
        // },
        // incomeRuleSecondText: {
        //     type: String,
        // },
        // can: {
        //     type: Boolean,
        //     default: ''
        // },
        // none: {
        //     type: Boolean,
        //     default: ''

        // },
        // // ordinary:Boolean,
        // periodic: Boolean,
        // advanced: Boolean,


    },
})
</script>
<style lang="less"  scoped>
/* 普通卡片颜色 */
.ordinary-background {
    background: #22325E;
}

/* 定投卡片颜色 */
.periodic-background {
    background: linear-gradient(90deg, rgba(89, 17, 48, 1) 0%, rgba(89, 17, 48, 1) 0%, rgba(34, 50, 94, 1) 100%, rgba(34, 50, 94, 1) 100%);
}

/* 高级卡片颜色 */
.advanced-background {
    background: linear-gradient(90deg, rgba(15, 70, 70, 1) 0%, rgba(15, 70, 70, 1) 0%, rgba(34, 50, 94, 1) 100%, rgba(34, 50, 94, 1) 100%);
}



.cardWrap {
    margin-top: 10px;
    width: 380px;
    /* height: 200px; */
    border-radius: 10px;

    .card {
        padding: 15px 10px;

        .card-top-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #00ccffcc;
            margin-top: 3px;
            margin-bottom: 5px;

            .card-top-title-left {
                font-size: 18px;
                font-weight: 700;
            }

            .card-top-title-right {
                font-size: 14px;
            }
        }

        .card-bottom-text-mode {
            display: flex;
            flex-direction: column;
            padding-bottom: 15px;
            border-bottom: .5px solid #6f6d6ddd;

            .card-bottom-text-mode-top {
                margin-top: 15px;
                width: 100%;
                display: flex;
                justify-content: space-between;
                /* width: 50%; */


                .card-bottom-text-mode-top-text {
                    display: flex;
                    align-items: center;
                    font-size: 12px;
                    color: #ffffff99;
                    /* padding-left: 10px; */

                    /* border-left: 2px solid #6f6d6ddd; */
                    .left {
                        margin-right: 10px;
                        width: 2px;
                        height: 25px;
                        background: #6f6d6ddd;
                    }

                }

                .right-number {
                    display: flex;
                    align-items: center;
                    font-size: 12px;
                    color: #00ccffcc;

                    .right-number-image {
                        width: 12px;
                        height: 12px;
                    }

                    .ratio {
                        margin-left: 5px;
                        font-size: 20px;
                    }
                }
            }

            .card-bottom-text-mode-bottom {
                min-height: 18px;
                margin-top: 5px;
                margin-left: 13px;
                font-size: 12px;
                color: #ffffff99;
            }
        }

        .line {
            width: 100%;
            height: .1px;
            background: #85848430;
        }

        .card-bottom-btn-mode {
            display: flex;
            justify-content: center;
            align-items: center;

            /* margin: 15px 0px 10px 0; */
            margin-top: 10px;

            .btn-mode {
                display: flex;
                justify-content: center;
                align-items: center;

                /* 可以购买按钮背景色 */
                .ableToPurchase-btn {
                    color: #ffffffcc;
                    background: linear-gradient(90deg, rgba(241, 107, 171, 1) 0%, rgba(241, 107, 171, 1) 0%, rgba(237, 63, 137, 1) 100%, rgba(237, 63, 137, 1) 100%);
                }

                /* 不可购买按钮背景色 */
                .noableToPurchase-btn {

                    color: #ffffff4c;

                    background: #314886;
                }

                .btn {
                    min-width: 100px;
                    min-height: 28px;
                    border-radius: 100px;
                    font-size: 12px;
                    line-height: 28px;
                    text-align: center;
                    margin-right: 5px;
                }

                .questionIcon {
                    width: 20px;
                    height: 20px;
                }
            }
        }
    }

}
</style>