<template>
    <div class="wrap">
        <div class="top-card">
            <div class="main">
                <div class="left">
                    <img src="./images/fjicon.png" alt="">
                </div>
                <div class="right">
                    <div class="top">
                        我的推广
                    </div>
                    <div class="center">
                        <p class="jb">级别:U5</p>
                        <p class="tg">推广码:42967821</p>
                    </div>
                    <div class="bottom">
                        <div class="question-icon erweima">
                            <img src="./images/erweima.png" alt="">
                            二维码
                        </div>
                        <div class="question-icon">
                            <img src="./images/fxicon.png" alt="">
                            分享邀约
                        </div>

                    </div>
                </div>

            </div>
            <van-divider class="line" hairline />
            <div class="bottomLink">
                <p>链接地址 http://xxx.com/share/45732105/</p> <img src="./images/copy.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style lang="less" scoped>
.wrap {
    display: flex;
    flex-direction: column;
    align-items: center;

    .top-card {
        border-radius: 10px;
        background: linear-gradient(90deg, rgba(0, 153, 255, 1) 0%, rgba(0, 153, 255, 1) 0%, rgba(6, 74, 142, 1) 100%, rgba(6, 74, 142, 1) 100%);
        width: 380px;

        .main {
            margin: 20px;
            display: flex;


            .left {
                img {
                    margin-top: 15px;
                    width: 40px;
                    height: 40px;
                }
            }

            .right {
                margin-left: 20px;
                font-size: 12px;

                .top {
                    font-size: 14px;
                    color: #fff;
                }

                .center {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    color: #ffffffc0;
                    font-size: 13px;
                    margin: 10px auto;
                    margin-top: 5px;

                    .jb {
                        margin-right: 10px;
                    }

                    .tg {
                        margin-right: 10px;
                    }
                }

                .bottom {
                    display: flex;
                    margin-bottom: 10px;
                    color: #333;

                    .erweima {
                        margin-right: 10px;
                    }

                    .question-icon {
                        display: flex;
                        background: #fff;
                        border-radius: 20px;
                        font-size: 12px;
                        height: 15px;
                        line-height: 15px;
                        padding: 5px 10px;

                        img {
                            width: 15px;
                            height: 15px;
                            margin-right: 5px;
                        }
                    }

                }
            }

        }
        .line{
            color: #ccc9c9a1;
            margin: auto 30px;
        }
        .bottomLink{
            display: flex;
            align-items: center;
            // justify-content: space-between;
            margin: 10px 30px;
            font-size: 14px;
            margin-bottom: 20px;
            color: #ffffffb5;
            img{
                margin-left: 15px;
                width: 15px;
                height: 15px;
            }
        }

    }
}</style>