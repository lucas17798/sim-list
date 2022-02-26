import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../public/css/common.css'
import '../public/css/mac.css'
import '../public/css/style.css'
import '../public/font/iconfont.css'

createApp(App).use(router).mount('#app')
