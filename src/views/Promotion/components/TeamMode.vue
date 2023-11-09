<template>
    <div class="teamItemWrap">
        <div class="teamItem-left">
            <img src="./images/user.png" alt="">
            <p>直推</p>
            <img class="right" src="./images/rightjiantou.png" alt="">
        </div>
        <div class="teamItem-right">
            推3拿5代
        </div>
    </div>
    <div class="teamItemWrap">
        <div class="teamItem-left">
            <img src="./images/zhiya.png" alt="">
            <p>团队质押</p>
            <img class="right" src="./images/rightjiantou.png" alt="">
        </div>
        <div class="teamItem-right">
            2023000.0USDT
        </div>
    </div>
    <div class="teamItemWrap">
        <div class="teamItem-left">
            <img src="./images/zhiya.png" alt="">
            <p>5代内质押</p>
            <img class="right" src="./images/rightjiantou.png" alt="">
        </div>
        <div class="teamItem-right">
            2023000.0USDT
        </div>
    </div>
    <!-- 下级团队信息卡片 -->
    <div class="teamGroupMessageCardWrap">
        <div class="teamGroupMessageCard">
            <div class="list">
                <div class="title">
                    <div class="left">
                        <p>下级团队长</p>
                        <img class="arrow" src="./images/rightjiantou.png" alt="">
                    </div>
                    <div class="right">
                        共79人
                    </div>
                </div>
                <van-cell class="firstTitle" title="级别" value="团队长数量" />
                <van-cell title="U1" value="23人" />
                <van-cell title="U2" value="20人" />
                <van-cell title="U3" value="11人" />
                <van-cell title="U4" value="9人" />
                <van-cell title="U5" value="19人" />
                <van-cell class="lastCell" title="U6" value="2人" />
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style lang="less" scoped>
.teamItemWrap {

    padding-top: 10px;
    overflow: hidden;
    width: 380px;
    border-radius: 10px;
    margin: 10px auto;
    background: #22325E;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .teamItem-left {
        display: flex;
        align-items: center;
        margin: 20px 15px;
        font-size: 14px;
        color: #ffffffcc;

        p {
            margin: 3px;
        }

        img {
            width: 26px;
            height: 26px;
        }

        .right {
            width: 16px;
            height: 16px;
        }
    }

    .teamItem-right {
        font-size: 14px;
        color: #ffffffcc;
    }
}

.teamGroupMessageCardWrap {
    background: #22325E;
    --van-cell-background: #22325E;
    border-radius: 10px;
    width: 380px;
    overflow: hidden;

    // border: 1px solid red;
    .teamGroupMessageCard {

        overflow: hidden;
        margin: 15px 10px;
        height: 300px;
        font-size: 16px;
        color: #ffffffcc;


        .list {
            .title {
                background: #22325E;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .left {
                    display: flex;
                    align-items: center;

                    .arrow {
                        width: 16px;
                        height: 16px;
                    }
                }

                .right {
                    margin-right: 12px;
                    font-size: 14px;
                    color: #00ccffcc;
                }
            }

            .firstTitle {

                --van-cell-value-color: #ffffff66;
                color: #ffffff66;
                border: 0;
            }

            --van-cell-value-font-size:12px;
            --van-cell-label-font-size:12px;
            --van-cell-value-color:#ffffff99;
            --van-cell-text-color:#ffffff99;
            color: #ffffff99;
        }

        /deep/ .van-cell:after {

            border: .3px solid #ffffff36;

        }

        .lastCell {
            /deep/ .van-cell:after {

                border: none;

            }
        }

    }
}</style>