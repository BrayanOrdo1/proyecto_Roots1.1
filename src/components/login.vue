<template>
    <responsive>
        <div class="Center">
            <div class="izquierda ">
                <h1 class="tex1">Advanture <br> Start here</h1>
                <p class="text2">Create and account to Join Our <br> community</p>
            </div>
            <div class="derecha">
                <v-img src="../assets/descarga.jpg" class="img1"></v-img>
                <p class="text3">¡Hello! Welcome back</p>
                <div class="app">
                    <form @submit.prevent="iniciarSesion">
                        <label for="usuario">Usuario:</label>
                        <input type="text" id="usuario" v-model="usuario" required><br><br>
            
                        <label for="contrasena">Contraseña:</label>
                        <input type="password" id="contrasena" v-model="contrasena" required><br><br>
            
                        <button type="submit">Iniciar Sesión</button>
                    </form>
                </div>
            </div>
        </div>
        
    </responsive>
</template>

<script>
export default {
    name: "login_1",
    data() {
        return {
            mostrarDiv: false // Cambia esto a false para ocultar la div
        };
    }
}

</script>


<style>
body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90deg, #5C7CF2 50%, #e2e6f0 50%);
    position: relative;
}

.Center {
    width: 1210px;
    height: 750px;
    background: linear-gradient(90deg, #6383FA 50%, #fff 50%);
    text-align: center;
    position:fixed;
    margin-top: 4%;
    margin-left: -31.8%;
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
.text2{
    color: white;
    font-family: var(--primary-font);
    font-size: 150%;
}

.derecha {
    float: right;
    width: 50%;
    height: 100%;
    
}
.img1{
    height: 11%;
    width: 13%;
    margin-left: 44%;
    margin-top: 12%;
   border-radius: 10%;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5);
}
.text3{
    color: rgb(0, 0, 0);
    font-family: var(--primary-font);
    font-size: clamp(20px,2vw,22px);
    margin-top: 5%;
}
.app{
    margin-top: 10%;
}
</style>
