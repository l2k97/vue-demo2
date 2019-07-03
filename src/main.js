
import vue from "vue"
import App from "./app.vue"
import vuerouter from "vue-router"
import { Button, Cell,Header} from 'mint-ui'
import "./lib/css/mui.min.css"
import "./lib/css/icons-extra.css"
// import "./css/app.css"
vue.component(Header.name, Header);
vue.use(vuerouter)
vue.component(Button.name,Button)
vue.component(Cell.name,Cell)

var router=new vuerouter({
    routes:[

    ],
    linkActiveClass: 'mui-active'

})

var vm=new vue({
    el:"#app",
    data:
        {

        },
    method:
        {

        },
    render: c => c(App)
      ,
    router
    })