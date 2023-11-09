<template>
    <div class="userWrap">
        <div class="user">
            <div class="image-left">
                <img src="./images/userIcon.png" alt="">
            </div>
            <div class="right-info">
                <div class="name">
                    Anthony
                </div>
                <div class="user-info">
                    <div class="id">
                        ID/236059
                    </div>
                    <div class="level">
                        级别/讲师
                    </div>
                </div>
                <div class="address-info">
                    钱包地址/ 1892******ysox89a <img src="./images/copy.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import axios from 'axios'

</script>

<style lang="less" scoped>
.userWrap {
    display: flex;
    flex-direction: column;
    border-radius: 0 0 10px 10px;
    // align-items: center;
    width: 380px;
    background: #22325E;
    margin: auto 15px;
    margin-bottom: 10px;
    padding-top: 5px;

    .user {
        display: flex;
        margin-top: 20px;
        margin-bottom: 25px;
        margin-left: 10px;
        .image-left{
            border-radius: 50%;
            img{
                width: 60px;
                height: 60px;
            }
        }
        .right-info{
            font-size: 14px;
            margin-left: 15px;
            .name{
                font-size: 16px;
                font-weight: 700;
                color: #fff;
            }
            .user-info{
                display: flex;
                align-items: center;
                margin: 3px 0px 1px 0px;
                color: #c5c1c1dc;
                font-size: 12px;
                .level{
                    margin-left: 5px;
                }
            }
            .address-info{
                display: flex;
                align-items: center;
                color: #c5c1c1dc;
                font-size: 12px;
                img{
                    margin-left: 5px;
                    width: 15px;
                    height: 15px;
                }
            }
        }
    }
}
</style>