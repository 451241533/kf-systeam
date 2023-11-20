<template>
    <NavTopBar :title="returnTitle"></NavTopBar>
    <div class="mine">
        <div class="topCard">
            <van-image class="icon" width="100" height="100" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
            <span>申请获取您的TokenPocket信息</span>
        </div>
        <van-button class="loginBtn" round @click="loginHandleAuth" text="TokenPocket授权登录" />
        <div class="footer">
            <span class="footerText">
                未注册的用户，初次登录时将完成注册，注册即代表您已同意
                用户协议 和 隐私条款
            </span>
        </div>

    </div>
</template>
<script>
import { post } from '../../utils/request'
import tp from 'tp-js-sdk'
export default {
    name: 'login',
    data() {
        return {
            returnTitle: '注册/登录',
            signedMsg:'',
            account:''
        }
    },
    mounted() {
        // 获取钱包用户信息
        this.getWellet()
        this.beforGetNotice()
    },
    methods: {
        async getWellet() {
            const currentWallet = await tp.getCurrentWallet();
            console.log('获取用户当前钱包信息', currentWallet)
            if (window.ethereum) {
                const ethereum = window.ethereum;
                this.account = currentWallet.data.address;
                // 获取签名
                ethereum.request({
                    method: 'personal_sign',
                    params: [currentWallet.data.address, 'abc123']
                })
                    .then(balance => {
                        console.log('看看是否成功Account Balance:', balance);
                        this.signedMsg = balance
                    })
                    .catch(error => {
                        console.error('Error getting balance:', error);
                    });
            } else {
                console.error('MetaMask is not detected.');
            }
        },
        beforGetNotice() {
            post('api/getNotice').then(res => {
                if (res.error === 0) {
                    console.log(res.data.msg)
                }
            }).catch(err => {
                console.log(err)
            })
        },
        loginHandleAuth() {
            this.$router.push('/home')
        },
    }
};
</script>
  
<style lang="less" scoped>
.mine {
    display: flex;
    align-items: center;
    flex-flow: column;
    height: 100%;
    font-size: .1rem;

    .topCard {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 380px;
        height: 220px;
        border-radius: 6px;
        background-color: #1f2e58;
        ::v-deep .van-image__img {
            border-radius: 10px !important;
        }

        span {
            margin-top: 35px;
            font-size: 13px;
            color: rgba(255, 255, 255, 0.6);

        }

        ::v-deep .van-button--round {
            width: 340px;
            height: 38px;
        }

    }

    ::v-deep .van-button--round {
        margin-top: 30px;
        width: 340px;
        height: 38px;
        border: 0;
        font-size: 15px;
        color: #fff;
        background: linear-gradient(90deg, rgba(241, 107, 171, 1) 0%, rgba(241, 107, 171, 1) 0%, rgba(237, 63, 137, 1) 100%, rgba(237, 63, 137, 1) 100%)
    }

    .footerText {
        text-align: center;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.498039215686275);
    }

    .footer {
        flex: 1;
        display: flex;
        flex-direction: column-reverse;

        .footerText {
            margin-bottom: 35px;
        }
    }
}
</style>
  