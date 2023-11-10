import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/Login/index.vue'),
            meta: {
                keepAlive: true,
              }
        },
        {
            path: '/login',
            component: () => import('../views/Login/index.vue'),
            meta: {
                keepAlive: true,
              }
        },
        {
            path: '/home',
            component: () => import('../views/Home/index.vue'),
            meta: {
                keepAlive: true,
              },
            //   children: [
            //     {
            //       path: 'buypage',
            //       name:'buypage',
            //       component: () => import('../views/Home/components/BuyPage.vue'),
            //       meta: {
            //         keepAlive: true,
            //       }
            //     }
            //   ]
        },
        {
            path: '/buypage',
            name:'buypage',
            component: () => import('../views/Home/components/BuyPage.vue'),

      props: route => ({ currentType: route.query.currentType }),
            meta: {
              keepAlive: true,
            }
          },
        {
            path: '/income',
            component: () => import('../views/Income/index.vue'),
            meta: {
                keepAlive: true,
              }
        },
        {
            path: '/mine',
            component: () => import('../views/Mine/index.vue'),
            meta: {
                keepAlive: true,
              }
        },
        {
            path: '/promotion',
            component: () => import('../views/Promotion/index.vue'),
            meta: {
                keepAlive: true,
              }
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