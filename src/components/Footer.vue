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
    computed: {
    // 从路由中获取当前页面的元信息
    currentRouteMeta() {
      return this.$route.meta || {};
    },
  },
  watch: {
    // 监听路由变化，更新 showFooter 的值
    $route(to, from) {
      this.showFooter = this.currentRouteMeta.showFooter !== false;
    },
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
    display: flex;
    background: #fff;
    justify-content: space-around;
    padding-bottom: 2px;
    padding-top: 2px;
    color: black !important;
    .van-tabbar-item--active {
        color: #00ccffcc; 
        background-color: #0b3840aa; 
        border-radius: 10px; 
        
    }
    .item {
        font-size: 5px;
        font-weight: 700;
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