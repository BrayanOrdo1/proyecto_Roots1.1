import { createRouter, createWebHistory } from "vue-router";
import home from '../components/home.vue'
import ventasAll from '../components/ventas_com.vue'
import cli_1 from '../components/clientes.vue'
import login_1 from '../components/login.vue'
import tickets from '../components/Tikets.vue'

import store from '../stores/store'

const routes=[
    {path:"/Home", name:"home", component: home,meta:{requireAuth:false}},
    {path:"/Ventas", name:"ventas", component: ventasAll,meta:{requireAuth:true}},
    {path:"/login",name:"login", component:login_1,meta:{requireAuth:false}},
    {path:"/Clientes", name:"clientes", component: cli_1,meta:{requireAuth:true}},
    {path:"/tickets", name:"tikets", component:tickets,meta:{requireAuth:true}}
]
const router=createRouter({
    history:createWebHistory(),routes,
});

router.beforeEach((to,from,next) => {
    if (to.meta.requireAuth && !store.state.isAuthentificated) {
        next('/home');
    } else {
        next()
    }
})

export default router;
