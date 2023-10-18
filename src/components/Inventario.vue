<template>
    <div class="Megadiv">
        <div class="Div_Lateral">

            <div class="parte_de_abajo">

                <p class="p21" style="margin-top: 8%; width: 22%;  margin-left: 3%;">Transaction</p>
                <p style="color: white; margin-top: -7%; margin-left: 65%;"><v-btn icon="$vuetify" variant="plain"
                        size="small">
                    </v-btn><b>Time</b></p>

            </div>
            <div class="ultimate">
                <div class="Ultimo_Div" style=" margin-left: 7%;">
                    <p style="color: #7ed597; position: relative; float: right; margin-right: 10%; margin-top: 5%;">
                        Terminado
                    </p>
                    <h1 style="font-size: 110%; margin-left: 10%; margin-top:5%; color: white;">Pares: 150</h1>
                    <p class="p21" style="margin-top: 0%; margin-left: 10%; font-size: 80%;">Cortada #A</p>
                </div>
                <div class="Ultimo_Div" style=" margin-left: 7%;">
                    <p style="color: #7ed597; position: relative; float: right; margin-right: 10%; margin-top: 5%;">
                        Terminado
                    </p>
                    <h1 style="font-size: 110%; margin-left: 10%; margin-top:5%; color: white;">Pares: 150</h1>
                    <p class="p21" style="margin-top: 0%; margin-left: 10%; font-size: 80%;">Rayada #B</p>
                </div>
                <div class="Ultimo_Div" style=" margin-left: 7%;">
                    <p style="color: #7ed597; position: relative; float: right; margin-right: 10%; margin-top: 5%;">
                        Terminado
                    </p>
                    <h1 style="font-size: 110%; margin-left: 10%; margin-top:5%; color: white;">Pares: 150</h1>
                    <p class="p21" style="margin-top: 0%; margin-left: 10%; font-size: 80%;">Costura #C</p>
                </div>
                <div class="Ultimo_Div" style=" margin-left: 7%;">
                    <p style="color: #7ed597; position: relative; float: right; margin-right: 10%; margin-top: 5%;">
                        Terminado
                    </p>
                    <h1 style="font-size: 110%; margin-left: 10%; margin-top:5%; color: white;">Pares: 150</h1>
                    <p class="p21" style="margin-top: 0%; margin-left: 10%; font-size: 80%;">Armada #D</p>
                </div>
                <div class="Ultimo_Div" style=" margin-left: 7%;">
                    <p style="color: #7ed597; position: relative; float: right; margin-right: 10%; margin-top: 5%;">
                        Terminado
                    </p>
                    <h1 style="font-size: 110%; margin-left: 10%; margin-top:5%; color: white;">Pares: 150</h1>
                    <p class="p21" style="margin-top: 0%; margin-left: 10%; font-size: 80%;">Montada #E</p>
                </div>
                <div class="Ultimo_Div" style=" margin-left: 7%;">
                    <p style="color: #7ed597; position: relative; float: right; margin-right: 10%; margin-top: 5%;">
                        Terminado
                    </p>
                    <h1 style="font-size: 110%; margin-left: 10%; margin-top:5%; color: white;">Pares: 150</h1>
                    <p class="p21" style="margin-top: 0%; margin-left: 10%; font-size: 80%;">Emplantillada #F</p>
                </div>
                <!-- favor no quitar este div ya que ayuda con estilos no usar el div de abajo -->
                <div class="Ultimo_Div" style="height: 70%; background-color:transparent; border: 0px transparent; ">
                </div>
            </div>
        </div>


        <div class="MicroDiv">
            <div class="MacroDiv">
                <div class="box34">
                    <p class="p">Pares En Proceso</p>
                    <h1 class="h1">Pares: 150</h1>

                    <v-btn class="bt1" size="x-large" color="#7a69e9" @click="verDetalles()">
                        Ver Detalles
                    </v-btn>

                </div>


                <div class="box34">
                    <p class="p">Pares Terminados</p>
                    <h1 class="h1">Pares: 200</h1>

                    <v-btn class="bt1" size="x-large" color="#8c52ff" @click="dialog = !dialog">
                        Ver Detalles
                    </v-btn>
                </div>

            </div>
            <p class="p21" style="margin-top: 1%; margin-left: 8%;">Resumen Semanal</p>

            <h1 class="btn21" style="margin-top: -2%; margin-left: 50%; position: absolute;">
                <h1 class="btn22"><b> Time</b></h1>
                <v-btn icon="$vuetify" variant="plain" size="small">
                </v-btn>Sort by
            </h1>

        </div>


    </div>
</template>
<script>
import router from '@/router'; // Asegúrate de ajustar la ruta del import según la estructura de tu proyecto

export default {
    name: 'Inventario_1',
    data() {
        return {
            dialog: true,
            rail: true,
        };
    },
    methods: {
        verDetalles() {
            router.push('/tickets'); // Esta línea redirige al usuario a la ruta '/tickets' usando el objeto del router
        }
    }
}
</script>
<style>
.MicroDiv {
    height: 100%;
    width: 65%;
    border: 5px solid #3b3b3b;
    border-top: none;
}

.Megadiv {
    height: 93.3vh;
    width: 100vw;
    background-color: black;
}

.box34 {
    flex: 1;
    justify-content: center;
    height: 100%;
    margin-top: -10%;

}
</style>