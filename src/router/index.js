import { createRouter, createWebHistory } from "vue-router";
import comprasAll from '../components/compras_com.vue'
import ventasAll from '../components/ventas_com.vue'
import cli_1 from '../components/clientes.vue'
import login_1 from '../components/login.vue'
import principal_1 from '../components/main.vue'

const routes=[
    {path:"/compras", name:"compras", component: comprasAll,},
    {path:"/Ventas", name:"ventas", component: ventasAll,},
    {path:"/login",name:"login", component:login_1},
    {path:'/app', name:'main',component:principal_1,
    beforeEnter: (to, from, next) => {
        // Verifica si el usuario está autenticado
        const isAuthenticated = autenticarUsuario();
        if (isAuthenticated) {
          next(); // Permite la navegación si está autenticado
        } else {
          // Si no está autenticado, redirige a la página de inicio de sesión o muestra un mensaje de error
          next('/login'); // Puedes redirigir a una página de inicio de sesión o cualquier otra página apropiada
        }
      }},
    {path:"/Clientes", name:"clientes", component: cli_1}
]
const router=createRouter({
    history:createWebHistory(),routes,
})
export default router;

function autenticarUsuario() {
    const nombreUsuario = prompt('Ingrese su nombre de usuario:');
    const contrasena = parseInt(prompt('Ingrese su contraseña:'));
  
    // Verifica si el nombre de usuario y la contraseña son correctos
    return nombreUsuario === 'pedro' && contrasena ===1234;
  }