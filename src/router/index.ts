// 创建一个路由器，并暴露出去

// 第一步：引入 createRouter
import { createRouter, createWebHistory } from "vue-router";
// 引入一个个可能要呈现的组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'


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
    }
  ]
});

export default router