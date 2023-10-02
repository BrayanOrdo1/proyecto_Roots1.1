import { createRouter, createWebHistory } from "vue-router";
import home from '../components/home.vue'
import ventasAll from '../components/ventas_com.vue'
import cli_1 from '../components/clientes.vue'
import login_1 from '../components/login.vue'
import tickets from '../components/Tikets.vue'
import usuario from '../components/Usuario_C.vue'

import store from '../stores/store'

const routes=[
    {path:"/Home", name:"home", component: home,},
    {path:"/Ventas", name:"ventas", component: ventasAll,},
    {path:"/login",name:"login", component:login_1,},
    {path:"/Clientes", name:"clientes", component: cli_1,},
    {path:"/tickets", name:"tikets", component:tickets,},
    {path:"/usuario", name:"usuario", component:usuario,}
]
const router=createRouter({
    history:createWebHistory(),routes,
});

// router.beforeEach((to,from,next) => {
//     if (to.meta.requireAuth && !store.state.isAuthentificated) {
//         next('/ome');
//     } else {
//         next()
//     }
// })

export default router;
