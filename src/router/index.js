import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: { name: 'Books' }
  },
  {
    path: '/books',
    name: 'Books',
    component: () => import(/* webpackChunkName: "Books" */ '@/views/books.vue')
  },
  {
    path: '/book/create',
    name: 'BookCreate',
    props: (router) => ({ mode: 'add' }),
    component: () => import(/* webpackChunkName: "BookCreate" */ '@/views/bookDetail.vue')
  },
  {
    path: '/books/:id',
    name: 'BookDetail',
    props: (router) => ({ id: router.params.id }),
    component: () => import(/* webpackChunkName: "BookDetail" */ '@/views/bookDetail.vue')
  },
  // 未找到返回Books
  {
    path: '*',
    redirect: { name: 'Books' }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
