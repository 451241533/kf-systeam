import { createApp } from 'vue'
import './style.css'
import 'amfe-flexible'
import './assets/base.css'
import { Button, Swipe, SwipeItem, Image as VanImage, NavBar, Tabbar, TabbarItem, Divider,Badge, Icon, Popover, PasswordInput, Tag,   Cell, CellGroup, Dialog  } from 'vant'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import NavTopBar from "./components/NavTopBar.vue"
import SureBtn from './components/SureBtn.vue'
import 'swiper/css';
import router from './router/index'
import axios from 'axios'

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('AUTH-CODE')}`

import App from './App.vue'

const app = createApp(App)
app.component('NavTopBar', NavTopBar)
app.component('SureBtn', SureBtn)
app.use(router).use(Button).use(Swipe).use(SwipeItem).use(VanImage).use(VueAwesomeSwiper).use(NavBar).use(VanImage).use(Tabbar).use(TabbarItem).use(Divider).use(Badge).use(Icon).use(Popover).use(Cell).use(PasswordInput).use(Tag).use(CellGroup).use(Dialog);
app.mount('#app')
