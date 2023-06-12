import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Order from '../pages/Order/Order.vue'
import Person from '../pages/Person/Person.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'


//使用插件
Vue.use(Router)
export default new Router({
    routes:[
        {
        path: '/home',
        name: '',
        component: Home,
        meta:{
          showFooter:true
        }
      },
      {
        path: '/order',
        name: '',
        component: Order,
        meta:{
          showFooter:true
        }
      },
      {
        path: '/person',
        name: '',
        component: Person,
        meta:{
          showFooter:true
        }
      },
      {
        path: '/search',
        name: '',
        component: Search,
        meta:{
          showFooter:true
        }
      },
      {
        path:'/',
        redirect:'/home'
      },
      {
        path:'/login',
        component:Login
      }
    ]
})