import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'

// 创建应用
const app = createApp(App)

// 创建 pinia
const pinia = createPinia()

// 应用插件
app.use(pinia)
app.use(router)

// 挂载整个应用到 app 容器
app.mount('#app')
