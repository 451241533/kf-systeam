import { createApp } from 'vue'
import './style.css'
import 'amfe-flexible'
import './assets/base.css'
// import 'vant/lib/index.css'
import { Button, Swipe, SwipeItem, Image as VanImage, NavBar, Tabbar, TabbarItem, Divider,Badge, Icon, Popover,  Cell,PasswordInput, Tag } from 'vant'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import NavTopBar from "./components/NavTopBar.vue"
import 'swiper/css';
// import TokenPocketSDK from 'tokenpocket-sdk'
import tp  from 'tp-js-sdk'
// console.log(tp.isConnected(), '-----------12321312312');
import router from './router/index'


import App from './App.vue'

const app = createApp(App)
app.component('NavTopBar', NavTopBar)
app.use(router).use(Button).use(Swipe).use(SwipeItem).use(VanImage).use(VueAwesomeSwiper).use(NavBar).use(VanImage).use(Tabbar).use(TabbarItem).use(Divider).use(Badge).use(Icon).use(Popover).use(Cell).use(PasswordInput).use(Tag);
app.mount('#app')
