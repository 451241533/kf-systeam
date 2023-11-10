<template>
    <div class="mainWrap">
        <!-- <NavTopBar title="资产" :isShowLeftArrow="true" :customBackgroundColor="true"></NavTopBar> -->
        <div class="top-nav-bar">
            <img src="./images/leftjiantou.png" alt="">
            <p>资产</p>
        </div>
        <div class="main">
            <div class="mobile-component">
                <!-- 上层资产总额部分 -->
                <div class="top">
                    <span class="asset-label">资产总额(USDT)</span>
                    <img v-if="showPassword" class="eye-icon" src="./images/yincang.png" alt="Show"
                        @click="togglePasswordVisibility" />
                    <img v-else class="eye-icon" src="./images/zhanshi.png" alt="Hide" @click="togglePasswordVisibility" />
                </div>

                <!-- 中层约等于号 -->
                <span class="middle">
                    ≈
                </span>

                <!-- 下层密码文本部分 -->
                <div class="bottom">
                    <span v-if="showPassword" class="password">{{ password }}</span>
                    <span v-else class="secretPassWord">{{ generatePasswordMask(password.length) }}</span>
                </div>
            </div>
            <div class="other-property">
                <div class="left">
                    <div class="text-top">
                        质押挖矿资产(USDT)
                    </div>
                    <div class="money">
                        30.000000
                    </div>
                </div>
                <div class="middle-line">

                </div>
                <div class="right">
                    <div class="text-top">
                        可提现资产(USDT)
                    </div>
                    <div class="money">
                        ≈ 30.000000
                    </div>
                </div>
            </div>
            <div class="withdrawalInforma-mode-Wrap">
                <div class="withdrawalInformaMode">
                    <div class="title">
                        可提现资产详情:
                    </div>
                    <div class="show-info">
                        <div class="left">
                            <div class="unit">
                                USDT
                            </div>
                            <div class="number">
                                20.0192
                            </div>
                        </div>
                        <div class="middle">
                            <div class="unit">
                                ETH
                            </div>
                            <div class="number">
                                20.0192
                            </div>
                        </div>
                        <div class="right">
                            <div class="unit">
                                平台币
                            </div>
                            <div class="number">
                                20.0192
                            </div>
                        </div>
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
import { ref } from 'vue';
export default {
    setup() {
        const password = ref('38.000000');
        const showPassword = ref(false);

        const togglePasswordVisibility = () => {
            showPassword.value = !showPassword.value;
        };
        const generatePasswordMask = (length) => {
            return '*'.repeat(length);
        };

        return {
            password,
            showPassword,
            togglePasswordVisibility,
            generatePasswordMask
        };
    },
}
</script>

<style lang="less" scoped>
.mainWrap {
    width: 100%;
    // width: 380px;
    // height: 230px;
    font-size: 8px;
    color: #FFF;
    // display: flex;
    background: linear-gradient(180deg, rgba(0, 153, 255, 1) 0%, rgba(0, 153, 255, 1) 0%, rgba(19, 23, 66, 1) 100%, rgba(19, 23, 66, 1) 100%);
    border-radius: 10px;

    .top-nav-bar {
        display: flex;
        align-items: center;
        margin: 10px;
        color: #ffffffcc;
        // margin-bottom: 20px;

        img {
            width: 20px;
            height: 20px;
        }

        p {
            font-size: 18px;
        }
    }

    .main {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #ffffffcc;

        .mobile-component {
            //   text-align: center;
            display: flex;
            flex-direction: column;
        }

        /* 上层资产总额部分样式 */
        .top {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .asset-label {
            font-size: 18px;
        }

        .asset-amount {
            margin-left: 3px;
        }

        .eye-icon {
            width: 20px;
            height: 20px;
        }

        /* 中层约等于号部分样式 */
        .middle {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 15px;
            font-size: 24px;
        }



        /* 下层密码文本部分样式 */
        .bottom {
            display: flex;
            justify-content: center;
            align-items: center;

            .password {
                text-align: center;
                font-size: 24px;
                font-family: monospace;
                /* 使用等宽字体，确保占位符和实际字符对齐 */
            }

            .secretPassWord {
                text-align: center;
                font-size: 24px;
                font-family: monospace;
                /* 使用等宽字体，确保占位符和实际字符对齐 */
            }

        }


        .other-property {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: 15px 20px;
            width: 80%;

            .left,
            .right {
                .text-top {
                    font-size: 14px;
                    color: #ffffffcc;
                }

                .money {
                    color: #fff;
                    font-size: 18px;
                }
            }

            .middle-line {
                width: 1px;
                height: 35px;
                background: #aba9a943;
            }
        }

        .withdrawalInforma-mode-Wrap {
            width: 380px;
            margin: 15px 10px;
            margin-bottom: 5px;
            background: linear-gradient(90deg, rgba(21, 149, 63, 1) 0%, rgba(21, 149, 63, 1) 0%, rgba(6, 74, 142, 1) 100%, rgba(6, 74, 142, 1) 100%);
            border-radius: 10px;

            .withdrawalInformaMode {
                margin: 20px;
                font-size: 14px;
            }

            .show-info {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .left,
                .middle,
                .right {
                    // flex-direction: column;
                    // // flex: 1;
                    width: 33%;
                    font-size: 14px;
                    color: #ffffffcc;

                    .unit {}

                    .number {
                        font-size: 18px;
                    }
                }

                .middle {
                    display: flex;
                    flex-direction: column;
                    border-left: 1px solid red;
                    border-right: 1px solid yellow;
                    .unit{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }

                .right {
                    .unit {
                        display: flex;
                        justify-content: end;
                    }

                    .number {
                        display: flex;
                        justify-content: center;
                    }
                }
            }
        }


    }

}</style>