import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import '@/styles/element-variables.scss'
import '@/styles/index.scss'

console.log('页面先进')

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
