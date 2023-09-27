import { createRouter, createWebHistory } from "vue-router";
import comprasAll from '../components/compras_com.vue'
import ventasAll from '../components/ventas_com.vue'
import cli_1 from '../components/clientes.vue'
import login_1 from '../components/login.vue'
import tickets from '../components/Tikets.vue'

const routes=[
    {path:"/compras", name:"compras", component: comprasAll,},
    {path:"/Ventas", name:"ventas", component: ventasAll,},
    {path:"/login",name:"login", component:login_1},
    {path:"/Clientes", name:"clientes", component: cli_1},
    {path:"/tickets", name:"tikets", component:tickets}
]
const router=createRouter({
    history:createWebHistory(),routes,
})
export default router;
