import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/Login/index.vue')
        },
        {
            path: '/login',
            component: () => import('../views/Login/index.vue')
        },
        {
            path: '/home',
            component: () => import('../views/Home/index.vue')
        },
        {
            path: '/income',
            component: () => import('../views/Income/index.vue')
        },
        {
            path: '/mine',
            component: () => import('../views/Mine/index.vue')
        },
        {
            path: '/promotion',
            component: () => import('../views/Promotion/index.vue')
        },

    ]
})


//全局前置路由，配合浏览器localStorage进行鉴权操作
// router.beforeEach((to, from, next) =>{
//     console.log(to,'')
//     //首先，我们先看一看to和from参数，next就是执行的意思，不写页面是不会跳转的
//     // // console.log(to, from);
//     // if(to.meta.isAuth){     //判断是否需要鉴权
//     //     if(localStorage.getItem('name') === '张三'){
//     //         next();
//     //     }else{
//     //         alert('不好意思，姓名不对，没有权限');
//     //     }
//     // }else{
//     //     next()
//     // }
// })

export default router;