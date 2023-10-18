<template>
    <div id="todo">
        <div class="Center">
            <div class="izquierda ">
                <h1 class="tex1">Advanture <br> Start here</h1>
                <p class="text2">Create and account to Join Our <br> community</p>
            </div>
            <div class="derecha">
                <v-card>
                    <v-img src="../assets/descarga.jpg" class="img1"></v-img>
                    <p class="text3">¡Hello! Welcome back</p>
                    <div class="login">
                        <p style="justify-content: left; display:flex; color:#504C4B; margin-bottom:2%;">Usuario</p>
                        <v-text-field v-model="username" placeholder="Username ">
                            <v-icon style="margin-right: 2%;">
                                mdi mdi-account
                            </v-icon>
                        </v-text-field>
                        <p style="justify-content: left; display:flex; color:#504C4B; margin-bottom:2%;">Contraseña</p>
                        <v-text-field v-model="password" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                            :type="visible ? 'text' : 'password'"  placeholder="Contraseña"
                             @click:append-inner="visible = !visible">
                            <v-icon style="margin-right: 2%;">
                                mdi mdi-lock
                            </v-icon>
                        </v-text-field>
                        <v-checkbox label="Remember me"
                            style="margin-top: -7%; margin-bottom:-8%; color:black; font-size: 90%;"></v-checkbox>
                        <v-btn block class="mt-2" @click="login"
                            style=" background-color:#5C7CF2; color:white;">login</v-btn>
                    </div>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
import db from '../firebase/init.js'
import { collection, query, where, getDocs } from 'firebase/firestore'

export default {
  name: 'Login_1',
  data: () => ({
    
    visible: false,
    username: '',
    password: ''
  }),

  methods: {
    async buscarUsuarioDesdeFirebase(usuario, clave) {
      const q = query(
        collection(db, "usuario"),
        where("usuario", "==", usuario),
        where("clave", "==", clave)
      );
      const resul = await getDocs(q);
      console.log(resul.docs[0]);
      if (!resul.empty) {
        // Almacena el ID del usuario en localStorage
        localStorage.setItem('userId', resul.docs[0]);
        // Si hay algún resultado, entonces el usuario y la clave son correctos
        return resul.docs[0].data();
      }
      // Si no hay resultados, entonces no hay coincidencia
      return null;
    },

    async login() {
      const user = await this.buscarUsuarioDesdeFirebase(this.username, this.password);

      if (user) {
        // alert('Inicio de sesión exitoso');
        // Almacena al usuario en el store
        console.log(user);
        this.$store.dispatch('setUser', user);
        this.$store.commit('setUserAuthenticated', true);  // Para marcar al usuario como autenticado
        this.$router.push('/home');// Redirección
      } else {
        alert('Credenciales incorrectas');
        /* this.$store.commit('setUserAuthenticated', false); */ // Para marcar al usuario como no autenticado
      }
    }
  },

}
</script>

<style>
#todo {
    height: 975px;
    display: flex;
    justify-content: center;
    background: linear-gradient(90deg, #5C7CF2 50%, #e2e6f0 50%);
}

.Center {
    width: 1210px;
    height: 750px;
    background: linear-gradient(90deg, #6383FA 50%, #fff 50%);
    position: relative;
    text-align: center;
    margin-top: 5%;
    border-radius: 6%;
}

.izquierda {
    background-image: url(../assets/Brayanasdhsdefsa.png);
    float: left;
    background-size: 100% 100%;
    text-align: center;
    width: 50%;
    height: 100%;
    border-radius: 6%;
}

.tex1 {
    margin-top: 40%;
    color: white;
    font-family: var(--primary-font);
    font-size: 400%;
    font-style: normal;
    text-shadow: #fff;
    line-height: 1;
}

.text2 {
    color: white;
    font-family: var(--primary-font);
    font-size: 150%;
}

.derecha {
    float: right;
    width: 50%;
    height: 100%;
}

.img1 {
    height: 11%;
    width: 13%;
    margin-left: 44%;
    margin-top: 12%;
    border-radius: 10%;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5);
}

.text3 {
    color: rgb(0, 0, 0);
    font-family: var(--primary-font);
    font-size: clamp(20px, 2vw, 22px);
    margin-top: 5%;
}

.login {
    height: 45%;
    width: 70%;
    margin: 0 auto;
    background-color: transparent;
    color: #5C7CF2;
    margin-top: 4%;
}
</style>
