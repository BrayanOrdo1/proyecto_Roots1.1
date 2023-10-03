<template>
    <div class="Megadiv">
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

            <div class="div32" >
                <p class="p21">Resumen Semanal</p>
                
                <h1 class="btn21"> <h1 class="btn22"><b> Time</b></h1>
                    <v-btn icon="$vuetify" variant="plain" size="small">
                  </v-btn>Sort by  </h1> 
                  
                  <div class="box1">
                      <div class="box2"></div>
                      <div class="box3"></div>

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
    height: 93.2vh;
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
.p{
    color:#8e8e8e;
    margin-top: 23%;
    margin-left: 10%;
}
.h1{
    color:rgb(255, 255, 255);
    
    margin-left: 20%;
    font-size: 280%;
}
.bt1{
    margin-top: 10%;
    margin-left: 27%;
    
}
.div32{
    height: 100%;
    width: 95%;
    margin: 0 auto;
    background-color: transparent;
    position: relative;  
}
.btn21{
    color:#8e8e8e;
    margin-left: 79%;
    float: right;
    font-size: 100%;
    margin-top: -2.6%;
     position: absolute;
}
.btn22{
    color:#ffffff;
    float: right;
    font-size: 100%;
    margin-top: 5%;
    margin-left: 9px;
}
.p21{
    color:#8e8e8e;
    margin-left: 3%;
   

}

.box1{

    background-color: red;
    height: 100%;
    width: 100%;
    overflow: auto; 
  
}
.box2{
    border: 2px solid #3b3b3b;
    background-color: white;
    height: 30%;
    width: 35%;
    display: inline-block;
    margin-left: 3%;
    margin-top: 6%;  
}
.box3{
    border: 2px solid #3b3b3b;
    background-color: white;
    height: 30%;
    width: 35%;
    display: inline-block;
    float: right;
    margin-right: 9%;
    margin-top: 6%;  
}
</style>