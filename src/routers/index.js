import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import '../../node_modules/element-ui/lib/theme-chalk/index.css'
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VueScroller);
// 引入路由文件;
import VueScroller from 'vue-scroller'
import VueLazyLoad from 'vue-lazyload'

import home from '../components/home/home.vue';
import reg from '../components/reg/reg.vue'
import login from '../components/login/login.vue'
import list from '../components/list/list.vue'
import vote from '../components/vote/vote.vue'
var router = new VueRouter({
    routes:[
         {
            path:'/',
            name:'home',
            component:home
        },{
            path:'/reg',
            name:'reg',
            component:reg
        },{
            path:'/login',
            name:'login',
            component:login
        },{
            path:'/list',
            name:'list',
            component:list
        },{
            path:'/vote',
            name:'vote',
            component:vote
        }
    ]
})
// ok
export default router;
