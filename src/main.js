import Vue from 'vue'
import App from './App.vue'
//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//写组件
import index from './components/index.vue'
//写规则
const routes= [
  {
    path:'/index',
    component:index
  }
]

const router =new VueRouter({
  routes
})
import './assets/statics/site/css/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
