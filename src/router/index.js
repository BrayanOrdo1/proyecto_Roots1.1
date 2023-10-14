import { createRouter, createWebHistory } from "vue-router";
import home from '../components/home.vue'
import ventasAll from '../components/ventas_com.vue'
import cli_1 from '../components/clientes.vue'
import login_1 from '../components/login.vue'
import tickets from '../components/Tikets.vue'
import usuario from '../components/Usuario_C.vue'
import Nomina from '../components/Nomina.vue'

import store from '../stores/store';

const routes=[
    {path:"/Home", name:"home", component: home,meta: { requiresAuth: false }},
    {path:"/Ventas", name:"ventas", component: ventasAll,meta: { requiresAuth: true }},
    {path:"/login",name:"login", component:login_1,meta: { requiresAuth: false }},
    {path:"/Clientes", name:"clientes", component: cli_1,meta: { requiresAuth: true }},
    {path:"/tickets", name:"tikets", component:tickets,meta: { requiresAuth: true }},
    {path:"/usuario", name:"usuario", component:usuario,meta: { requiresAuth: true }},
    {path:"/Nomina", name:"nomina", component:Nomina,meta: { requiresAuth: true }}
]
const router=createRouter({
    history:createWebHistory(),routes,
});

router.beforeEach((to, from, next) => {

    // Comprobar si la ruta requiere autenticación
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.state.isAuthenticated) {
            next('/');  // Redirecciona al login
            return;
        }
    }
    
    next();  // Continúa a la ruta solicitada
});
export default router;
