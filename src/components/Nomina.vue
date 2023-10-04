<template>
    <div class="Megadiv">
        <div class="Div_Lateral">

</div>
        <div class="MicroDiv">
            <div class="MacroDiv">
                <div class="box">
                    <p class="p">Pago mensual</p>
                    <h1 class="h1">$5.122,50</h1>

                    <v-btn class="bt1" size="x-large" color="#7a69e9" @click="dialog = !dialog">
                        Open Dialog
                    </v-btn>

                </div>
                <div class="box">
                    <p class="p">Pago mensual</p>
                    <h1 class="h1">$5.122,50</h1>

                    <v-btn class="bt1" size="x-large" color="#8c52ff" @click="dialog = !dialog">
                        Open Dialog
                    </v-btn>

                </div>
                <div class="box">
                    <p class="p">Pago mensual</p>
                    <h1 class="h1">$5.122,50</h1>

                    <v-btn class="bt1" size="x-large" color="#975bce" @click="dialog = !dialog">
                        Open Dialog
                    </v-btn>
                </div>

            </div>

            <div class="div32">
                <p class="p21">Resumen Semanal</p>

                <h1 class="btn21">
                    <h1 class="btn22"><b> Time</b></h1>
                    <v-btn icon="$vuetify" variant="plain" size="small">
                    </v-btn>Sort by
                </h1>

                <div class="box1">
                    <div class="box2"><v-img src="../assets/foto.png"></v-img>
                        <v-btn class="p24" style="color: #7a69e9; background-color: transparent;" variant="plain">See Details</v-btn> 
                        <h1 class="h2" >$5.122,50</h1>
                        <p class="p29">Cortada #A</p>
                        <p></p>
                    </div>

                    <div class="box3"><v-img src="../assets//Foto3.png"></v-img>
                        <v-btn class="p24" style="color: #7a69e9; background-color: transparent;" variant="plain">See Details</v-btn> 
                        <h1 class="h3">Pares: 23</h1>
                        <p class="p29">Resumen Semanal</p>
                    </div>
                    <div class="box2"><v-img src="../assets/Foto1.png"></v-img>
                        <v-btn class="p24" style="color: #8c52cc; background-color: transparent;" variant="plain">See Details</v-btn> 
                        <h1 class="h2" >$5.122,50</h1>
                        <p class="p29">Armado #B</p>
                    </div>
                    <div class="box3"><v-img src="../assets/Foto4.png"></v-img>
                        <v-btn class="p24" style="color: #8c52cc; background-color: transparent;" variant="plain">See Details</v-btn> 
                        <h1 class="h3">Pares: 23</h1>
                        <p class="p29">Resumen Semanal</p>
                    </div>
                    <div class="box2"><v-img src="../assets/Foto2.png"></v-img>
                        <v-btn class="p24" style="color: #975bce; background-color: transparent;" variant="plain">See Details</v-btn> 
                        <h1 class="h2" >$5.122,50</h1>
                        <p class="p29">Costura #C</p>
                    </div>
                    <div class="box3"><v-img src="../assets/Foto5.png"></v-img>
                        <v-btn class="p24" style="color: #975bce; background-color: transparent;" variant="plain">See Details</v-btn> 
                        <h1 class="h3">Pares: 23</h1>
                        <p class="p29">Resumen Semanal</p>
                    </div>
                    <div class="box2"><v-img src="../assets/foto.png"></v-img>
                        <v-btn class="p24" style="color: #7a69e9; background-color: transparent;" variant="plain">See Details</v-btn> 
                        
                        <h1 class="h2" >$5.122,50</h1>
                        <p class="p29">Montada #D</p>
                    </div>
                    <div class="box3"><v-img src="../assets/Foto3.png"></v-img>
                        <v-btn class="p24" style="color: #7a69e9; background-color: transparent;" variant="plain">See Details</v-btn> 
                        <h1 class="h3">Pares: 23</h1>
                        <p class="p29">Resumen Semanal</p>
                    </div>
                    <div class="box2"> <v-img src="../assets/Foto1.png"></v-img>
                        <v-btn class="p24" style="color: #8c52cc; background-color: transparent;" variant="plain">See Details</v-btn> 
                        <h1 class="h2" >$5.122,50</h1>
                        <p class="p29">Emplantillado #D</p>
                    </div>
                    <div class="box3"><v-img src="../assets/Foto4.png"></v-img>
                        <v-btn class="p24" style="color: #8c52cc; background-color: transparent;" variant="plain">See Details</v-btn> 
                        <h1 class="h3">Pares: 23</h1>
                        <p class="p29">Resumen Semanal</p>
                    </div>
                    <!-- estas cajas que estan abajo no sirven de nada ayudan a dar stilo al floverowo favor no quitar  -->
                    <div style="height: 30%;"></div>
                    <div style="height: 30%;"></div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'nomina_1',
    data() {
        return {
            drawer: true,
            rail: true,
        }
    },
}

</script>
<style>
.Megadiv {
    height: 94.2vh;
    width: 100vw;
    background-color: black;
}

.MicroDiv {
    height: 100%;
    width: 65%;
    border: 5px solid #3b3b3b;
    border-top: none;
}

.MacroDiv {
    height: 40%;
    width: 95%;
    margin: 0 auto;
    background-color: transparent;
    position: relative;
    display: flex;
}

.box {
    flex: 1;
    justify-content: center;
    height: 100%;

}

.p {
    color: #8e8e8e;
    margin-top: 23%;
    margin-left: 10%;
}

.h1 {
    color: rgb(255, 255, 255);

    margin-left: 20%;
    font-size: 280%;
}

.bt1 {
    margin-top: 10%;
    margin-left: 27%;

}

.div32 {
    height: 100%;
    width: 95%;
    margin: 0 auto;
    background-color: transparent;
    position: relative;
}

.btn21 {
    color: #8e8e8e;
    margin-left: 79%;
    float: right;
    font-size: 100%;
    margin-top: -2.6%;
    position: absolute;
}

.btn22 {
    color: #ffffff;
    float: right;
    font-size: 100%;
    margin-top: 5%;
    margin-left: 9px;
}

.p21 {
    color: #8e8e8e;
    margin-left: 3%;


}

.box1 {

    background-color: transparent;
    height: 100%;
    width: 100%;
    overflow: auto;
}

::-webkit-scrollbar {
    width: 0.1px;
}

.box2 {
    border: 5px solid #3b3b3b;
    background-color: #1f1f1f;
    border-radius: 12%;
    height: 25%;
    width: 35%;
    display: inline-block;
    margin-left: 3%;
    margin-top: 6%;
}

.box3 {
    border: 5px solid #3b3b3b;
    background-color: #1f1f1f;
    border-radius: 12%;
    height: 25%;
    width: 35%;
    display: inline-block;
    float: right;
    margin-right: 9%;
    margin-top: 6%;
}

.box2 img,
.box3 img {
    height: 40%;
    margin-top: 12%;
    margin-left: 30%;
}

.p24 {
    margin-top: -15%;
    float: right;
    margin-right: 5%;

}
.h2, .h3{
    color: white;
    margin-top: -40%;
    margin-left: 12%;
}

.p29{
    margin-left: 12%;
    color: #8e8e8e;
}
.Div_Lateral{
    height: 25%;
    width: 50%;
    background-color: white;
    float: right;
    position: absolute;
}
</style>