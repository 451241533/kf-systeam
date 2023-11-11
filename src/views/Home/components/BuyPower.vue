<template>
    <NavTopBar title="参与挖矿" :isShowLeftArrow="true"></NavTopBar>
    <div class="buyPageWrap">
        <div class="buyPage-content">

            <div class="buyPage-main">
                <div class="top-show-mode">
                    <div class="top-image">
                        <img src="../images/blueImage.png" alt="">
                    </div>
                    <div class="currentType-mode">
                        <div class="title">
                            {{ currentType }}
                        </div>
                    </div>
                </div>
                <div class="buy-bottom-mode">
                    <div class="money-type">
                        <div class="left">
                            币种
                        </div>
                        <div class="right">
                            <div @click="toggleCheck('usdt')" class="usdtBtn">
                                <p>平台币</p><img  src="../images//duihao.png"
                                    alt="check-icon">
                            </div>
                        </div>

                    </div>
                    <div class="recharge-number">
                        <div class="number">
                            质押数量(USDT)
                        </div>
                        <div class="balance">
                            USDT余额
                        </div>
                    </div>
                    <div class="number-input">
                        <div class="input-container">
                            <input v-model="inputValue" type="text" class="input-field" placeholder="输入质押数量(最少100USDT)">
                        </div>
                    </div>
                    <div class="pledge-cost-mode">
                        <p class="pledge">资质费用</p>
                        <p class="cost">100.00平台币</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <SureBtn></SureBtn>
</template>
<script>
import { ref, onMounted, watchEffect } from 'vue';

export default {
    props: ['currentType'],
    setup(props) {
        const checkedOption = ref('usdt');
        const inputValue = ref('');
        const currentType = ref('');

        const toggleCheck = (option) => {
        };

        const handleButtonClick = () => {
            console.log('按钮被点击');
        };
        watchEffect(() => {
            currentType.value = props.currentType;
        });
        onMounted(() => {
            currentType.value = props.currentType;
        });

        return {
            currentType,
            checkedOption,
            toggleCheck,
            inputValue,
            handleButtonClick,
        };
    },
};
</script>
<style lang="less" scoped>
.buyPageWrap {
    overflow: hidden;

    .buyPage-content {
        flex-direction: column;
        display: flex;
        align-items: center;
        border-radius: 6px;
        // height: 100px;
        margin: 15px;
        margin-top: 0px;
        border: 1px solid transparent;

        .buyPage-main {
            // margin: 15px;
            // border: 1px solid yellow;
            font-size: 12px;
            color: #ffffffcc;

            .top-show-mode {
                background: #1f2e58;
                margin-bottom: 10px;
                padding: 15px;
                border-radius: 6px;

                .currentType-mode {
                    display: flex;
                    flex-direction: column;
                    margin-top: 10px;
                    // margin-bottom: 10px;
                    align-items: center;
                    color: #ffffffcc;
                    ;

                    .title {
                        font-size: 16px;
                        color: #ffffffcc;
                    }

                    .current-balance {
                        font-size: 12px;
                    }
                }
            }

            .buy-bottom-mode {
                border-radius: 6px;
                background: #1f2e58;
                padding: 20px 15px;

                .money-type {
                    padding-bottom: 15px;
                    border-bottom: 1px solid #131742;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .left {
                        font-size: 14px;
                        padding-left: 5px;
                    }

                    .right {
                        display: flex;

                        .usdtBtn,
                        .uniBtn {
                            font-size: 14px;
                            border-radius: 4px;
                            display: flex;
                            align-items: center;
                            margin-left: 10px;
                            min-width: 78px;
                            min-height: 34px;
                            text-align: center;

                            p {
                                margin-left: 10px;
                            }

                            img {
                                margin-left: 2px;
                                width: 16px;
                                height: 16px;
                            }
                        }

                        .usdtBtn {
                            // margin-right: 5px;
                            background: linear-gradient(90deg, rgba(241, 107, 171, 1) 0%, rgba(241, 107, 171, 1) 0%, rgba(237, 63, 137, 1) 100%, rgba(237, 63, 137, 1) 100%);
                        }

                        .uniBtn {
                            margin-left: 4px;
                            background: #0055aa;
                        }
                    }
                }

                .recharge-number {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 15px;
                    margin-bottom: 10px;

                    .number {

                        font-size: 14px;
                        padding-left: 5px;
                    }

                    .balance {
                        font-size: 12px;
                        color: #0099ff;
                    }
                }

                .number-input {
                    padding-bottom: 15px;
                    border-bottom: 1px solid #131742;

                    .input-container {
                        position: relative;
                        display: flex;
                        align-items: center;
                    }

                    .input-field {
                        font-size: 14px;
                        background: #131742;
                        // width: calc(100% - 20px);
                        width: 100%;
                        // margin: auto 15px;
                        padding: 10px;
                        border: none;
                        border-radius: 5px;
                        outline: none;

                        ::placeholder {
                            color: #ffffff4c !important;
                        }
                    }
                   

                    .btn {
                        position: absolute;
                        top: 50%;
                        right: 10px;
                        transform: translateY(-50%);
                        width: 50px;
                        // height: 26px;
                        text-align: center;
                        padding: 8px;
                        background-color: #0055aa;
                        color: #ffffff99;
                        border: none;
                        border-radius: 60px;
                        cursor: pointer;
                    }
                }
                .pledge-cost-mode{
                    margin-top: 10px;
                    font-size: 14px;
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        .cost{
                            color: #ffffffa7;

                        }
                    }
            }
        }

    }
}
</style>