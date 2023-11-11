import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/Login/index.vue'),
            meta: {
                keepAlive: true,
                showFooter: false,
              }
        },
        {
            path: '/login',
            component: () => import('../views/Login/index.vue'),
            meta: {
                keepAlive: true,
                showFooter: false,
              }
        },
        {
            path: '/home',
            component: () => import('../views/Home/index.vue'),
            meta: {
                keepAlive: true,
                showFooter: true,
                requiresAuth: true,
              },
        },
        {
            path: '/buypage',
            name:'buypage',
            component: () => import('../views/Home/components/BuyPage.vue'),

      props: route => ({ currentType: route.query.currentType }),
            meta: {
                keepAlive: true,
                showFooter: false,
                requiresAuth: true,
            }
          },
        {
            path: '/income',
            component: () => import('../views/Income/index.vue'),
            meta: {
                keepAlive: true,
                showFooter: true,
                requiresAuth: true,
              }
        },
        {
            path: '/mine',
            component: () => import('../views/Mine/index.vue'),
            meta: {
                keepAlive: true,
                showFooter: true,
                requiresAuth: true,
              }
        },
        {
            path: '/promotion',
            component: () => import('../views/Promotion/index.vue'),
            meta: {
                keepAlive: true,
                showFooter: true,
                requiresAuth: true,
              }
        },

    ]
})


router.beforeEach(async (to, from, next) => {
    if (to.meta.requiresAuth) {
      const isAuthenticated =  localStorage.getItem('AUTH-CODE');
  
      if (isAuthenticated) {
        next();
      } else {
        next({ path: '/login', query: { redirect: to.fullPath } });
      }
    } else {
      next();
    }
  });

export default router;