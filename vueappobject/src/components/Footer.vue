<template>
    <div class="footerMain">
        <div class="item">
            <router-link class="nav-item"  active-class="nav-color" to="home">主页</router-link>
        </div>
        <div class="item">
            <router-link class="nav-item" active-class="nav-color" to="income">收益</router-link>
        </div>
        <div class="item">
            <router-link class="nav-item"  active-class="nav-color" to="promotion">推广</router-link>
        </div>
        <div class="item">
            <router-link class="nav-item" active-class="nav-color" to="mine">我的</router-link>
        </div>
    </div>
</template>

<style lang="less" scoped>
.footerMain {
    display: flex;
    background: #fff;
    justify-content: space-around;
    padding-bottom: 2px;
    padding-top: 2px;
    color:black !important;
    border-top: 0.5px solid rgb(121, 121, 121);
    .item {
        // flex: 1;
        font-size: 5px;
        font-weight: 700;
        // color: rgb(255, 255, 255);
        // color: rgb(51, 51, 51);
        color:black !important;
        cursor: pointer;
        .nav-color{
            color: #fff;
            background-color: black;
        }
        .nav-item {
            // color:black !important;
            // font-size: 10px;
            display: flex;
            flex-flow: column;
            align-items: center;
            width: 16px;
            height: 16px;
            line-height: 16px;
            border: .5px solid black;
            border-radius: 50%;
        }
    }
}
</style>