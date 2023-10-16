<template>
            <h2>收益</h2>
    <div class="main" >

        <div class="mainTop">
            <div class="mainTopTitle">
                投资总金额 
            </div>
            <div class="bottom">
                9999999.99USDT
            </div>
            <div class="top">
                投资总金额 
            </div>
            <div class="bottom">
                9999999.99USDT
            </div>
        </div>
        <div class="textCard">
            <div class="textCardTopTitle">
                投资总金额 
            </div>
            <div class="bottom">
                9999999.99USDT
            </div>
            <div class="top">
                投资总金额 
            </div>
            <div class="bottom">
                9999999.99USDT
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {

        }
    }
}
</script>

<style lang="less" scoped>

.main{
    font-size: 8px;
     color: #FFF;
    background-color: rgba(0, 0, 0, 1);
    display: flex;
    justify-content: space-around;
    text-align: center;
    .mainTop, .textCard{
        font-size: 5px;
        
        .mainTopTitle {
            // margin-top: 5px;
            // font-size: 5px;
            margin-top: 5px;
        }
    }
    .textCard{
       .textCardTopTitle{
        margin-top: 5px;
       }
    }
    // .textCard{}
}
</style>