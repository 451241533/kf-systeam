<template>
    <NavTopBar title="购买" :isShowLeftArrow="true"></NavTopBar>
    <div class="buyPageWrap">
        <div class="buyPage-content">
            <div class="buyPage-main">
                <div class="money-type">
                    <div class="left">
                        币种
                    </div>
                    <div class="right">
                        <div @click="toggleCheck('usdt')" class="usdtBtn">
                            <p>USDT</p><img v-if="checkedOption === 'usdt'" src="../images//duihao.png" alt="check-icon">
                        </div>
                        <div @click="toggleCheck('uni')" class="uniBtn">
                            <p>UNI</p><img v-if="checkedOption === 'uni'" src="../images//duihao.png" alt="check-icon">
                        </div>
                    </div>

                </div>
                <div class="recharge-number">
                    <div class="number">
                        充值数量(USDT)
                    </div>
                    <div class="balance">
                        钱包余额
                    </div>
                </div>
                <div class="number-input">
                    <div class="input-container">
                        <input v-model="inputValue" type="text" class="input-field" placeholder="输入充值数量">
                        <button class="btn" @click="handleButtonClick">全部</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <SureBtn></SureBtn>
</template>
<script>
import { ref } from 'vue';

export default {
    setup() {
        const checkedOption = ref('usdt');
        const inputValue = ref('');

        const toggleCheck = (option) => {
            // 切换选中状态
            checkedOption.value = checkedOption.value === option ? null : option;
        };

        const handleButtonClick = () => {
            // 处理按钮点击事件
            console.log('按钮被点击');
        };

        return {
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
    min-height: 80vh;
    flex: 1;

    .buyPage-content {
        background: #1f2e58;
        border-radius: 6px;
        width: 380px;
        // height: 100px;
        margin: 15px;
        border: 1px solid transparent;

        .buyPage-main {
            margin: 15px;
            // border: 1px solid yellow;
            font-size: 12px;
            color: #ffffffcc;

            .money-type {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .left {
                    font-size: 14px;
                    padding-left: 5px;
                    border-left: 2px solid #6f6d6ddd;
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
                        margin-right: 5px;
                        background: linear-gradient(90deg, rgba(241, 107, 171, 1) 0%, rgba(241, 107, 171, 1) 0%, rgba(237, 63, 137, 1) 100%, rgba(237, 63, 137, 1) 100%);
                    }

                    .uniBtn {
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
                    border-left: 2px solid #6f6d6ddd;
                }

                .balance {
                    font-size: 12px;
                    color: #ffffff99;
                }
            }

            .number-input {
                padding-bottom: 20px;

                .input-container {
                    position: relative;
                    display: flex;
                    align-items: center;
                }

                .input-field {
                    font-size: 14px;
                    background: #2c427e;
                    width: calc(100% - 5px);
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
        }
    }
}</style>