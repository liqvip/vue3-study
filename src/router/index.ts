// 创建一个路由器，并暴露出去

// 第一步：引入 createRouter
import { createRouter, createWebHistory } from "vue-router";
// 引入一个个可能要呈现的组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'
import Props from '@/pages/01_props/Father.vue'
import Event from '@/pages/02_custom-event/Father.vue'
import Bus from '@/pages/03_mitt/Father.vue'
import Model from '@/pages/04_v-model/Father.vue'
import AttrsListeners from '@/pages/05_$attr/Father.vue'
import RefParent from '@/pages/06_$refs-$parent/Father.vue'
import ProvideInject from '@/pages/07_provide-inject/Father.vue'
import Pinia from '@/pages/08_pinia/Father.vue'
import Slot from '@/pages/09_slot/Father.vue'


// 第二步：创建路由器
const router = createRouter({
  // 路由器的工作模式
  history: createWebHistory(),
  // 一个个的路由规则
  routes: [
    {
      name: 'zhuye',
      path: '/home',
      component: Home
    },
    {
      path: '/news',
      component: News, 
      children: [
        {
          name: 'detail',
          path: 'detail',
          component: Detail,
          props(route){
            console.log(route)
            return route.query
          },
        },
      ],
    },
    {
      path: '/about',
      component: About
    },
    // 组件通信路由
    {
      path: '/props',
      component: Props,
    },
    {
      path: '/event',
      component: Event,
    },
    {
      path: '/mitt',
      component: Bus,
    },
    {
      path: '/model',
      component: Model,
    },
    {
      path: '/attrs',
      component: AttrsListeners,
    },
    {
      path: '/ref-parent',
      component: RefParent,
    },
    {
      path: '/provide-inject',
      component: ProvideInject,
    },
    {
      path: '/pinia',
      component: Pinia,
    },
    {
      path: '/slot',
      component: Slot,
    },
  ]
});

export default router