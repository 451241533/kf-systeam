<template>
    <div class="activityWrap">
        <div class="activity-mode-wrap">
            <div class="activity-mode">
                <div class="top">
                    <img class="leftImg" src="./images/huodong.png" alt="">
                    <div class="rightText">
                        <div class="toptext">
                            深圳试点数字货币概念股金融培训活动
                        </div>
                        <div class="cente">
                            <img src="./images/time.png" alt="">
                            <p>2023-10-16 08:00 周一</p>
                        </div>
                        <div class="bottom">
                            <img src="./images/weizhi.png" alt="">
                            <p>
                                广东省深圳市五洲酒店</p>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
        <div class="line" ></div>
        <div class="activity-mode-bottom">
            <p>邀请人ID:128952</p>
            <div class="bottomBtn">立即报名</div>
        </div>
    </div>
</template>
<script>
</script>

<style lang="less" scoped>
.activityWrap {
    background: #22325E;
    width: 380px;
    height: 166px;

    .activity-mode-wrap {
        background: #22325E;
        margin: 15px 10px;
        padding-top:15px;

        .activity-mode {
            display: flex;
            background: #22325E;
            // margin: 15px 10px;
            .top {
                display: flex;
                background: #22325E;

                .leftImg {
                    width: 120px;
                    height: 88px;
                }

                .rightText {
                    margin-left: 15px;
                    font-size: 12px;

                    .toptext {
                        font-size: 16px;
                        color: #ffffffcc;
                    }
                    .cente{
                        margin: 3px auto;
                    }

                    .cente, .bottom {
                        display: flex;
                        align-items: center;
                        color: #ffffff99;

                        img {
                            margin-right: 3px;
                            width: 16px;
                            height: 16px;
                        }
                    }
                }
            }

        }
    }
    .line{
        width: 380px;
        height: .5px;
        background-color: #ffffff4f;
    }
    .activity-mode-bottom{
        display: flex;
        margin: auto 10px;
        margin-top: 10px;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        color: #ffffff99;
        .bottomBtn{
            color: #ffffffcc;
            text-align: center;
            font-size: 12px;
            width: 80px;
            height: 20px;
            border-radius: 20px;
            border: none;
            background: linear-gradient(90deg, rgba(241, 107, 171, 1) 0%, rgba(241, 107, 171, 1) 0%, rgba(237, 63, 137, 1) 100%, rgba(237, 63, 137, 1) 100%);
        }
    }

}</style>