import vuerouter from "vue-router"
import home from "./components/tabbar/home.vue"
import member from "./components/tabbar/member.vue"
import search from "./components/tabbar/search.vue"
import shopCart from "./components/tabbar/shopCart.vue"

var realrouter=new vuerouter({
    routes:[
        {path:"/home",component:home},
        {path:"/search",component:search},
        {path:"/shopCart",component:shopCart},
        {path:"/member",component:member},
        { path: '/', redirect: '/home' },
    ],
    linkActiveClass: 'mui-active'
})

export  default  realrouter;