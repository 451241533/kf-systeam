<template>
    <!-- <van-nav-bar  left-text="返回" left-arrow border="false" @click-left="onClickLeft" /> -->
    <NavTopBar :title="returnTitle"   ></NavTopBar>
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
export default {
    name: 'login',
    data() {
        return {
            returnTitle: '注册/登录'
        }
    },
    setup() {
        const onClickLeft = () => history.back();
        return {
            onClickLeft,
        };
    },
    methods:{
        loginHandleAuth(){
            // try{
            //     // const res = await
                
            // }catch
            this.$router.push('/home')
        },
    }
};
</script>
  
<style lang="less" scoped>
.mine {
    display: flex;
    // justify-content: center;
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
        // border: 2px solid red;
        background-color: #1f2e58;
        // .icon{

        // }
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
        .footerText{
            margin-bottom: 35px;
        }
    }
}
</style>
  