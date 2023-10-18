<template>
    <div class="footerMain">
        <van-tabbar v-model="active"   active-color="#fffffb2" inactive-color="#eeeee">
            <van-tabbar-item :to="(item.name)" @click="tabIndex(index)" v-for="(item, index) in tabbars"
                :key="'tabbar' + index">
                <span>{{ item.title }}</span>
                <template #icon="props">
                    <img :src="item.iconImage" />
                </template>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
import home from '../assets/images/home.png'
import asset from '../assets/images/asset.png'
import mine from '../assets/images/mine.png'
import promotion from '../assets/images/promotion.png'
export default {
    data() {
        return {
            active: 0, //默认选中tab
            tabbars:[
                {
                    name: "/home",
                    title: "首页",
                    iconImage: home
                },
                {
                    name: "/income",
                    title: "资产",
                    iconImage: asset
                },
                {
                    name: "/promotion",
                    title: "推广",
                    iconImage: promotion
                },
                {
                    name: "/mine",
                    title: "我的",
                    iconImage: mine
                },
            ]
        };
    },
    mounted() {
        // 如有缓存，刷新页面时还进入该页面
        let index = sessionStorage.getItem('tabIndex')
        if(index){
            this.tabIndex(index)
        }
    },
    methods: {
        tabIndex(index) {
            index = Number(index)
            this.active = index;
            // 记录当前tab页
            sessionStorage.setItem('tabIndex',index)
            let val = this.tabbars[index].name
            this.$router.push(val);
        }
    }
};
</script>
<style lang="less" scoped>
.footerMain {
    // .van-tabbar-item--active{
    //     color: red;
    // }
    // .van-tabbar-item__icon{
    //     color: red;
    //     img{
    //     color: red;
    // }
    // }
    display: flex;
    background: #fff;
    justify-content: space-around;
    padding-bottom: 2px;
    padding-top: 2px;
    color: black !important;
    border-top: 0.5px solid rgb(121, 121, 121);

    .item {
        // flex: 1;
        font-size: 5px;
        font-weight: 700;
        // color: rgb(255, 255, 255);
        // color: rgb(51, 51, 51);
        color: black !important;
        cursor: pointer;

        .nav-color {
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
--van-tabbar-background{
    background-color: red;
}
</style>