<template>
    <div class="SuperDiv">

        <div class="Div45">
            <v-btn class="btn">
                Buttonn
            </v-btn>
            <v-responsive max-width="300" class="btn1">
                <v-autocomplete :items="items" auto-select-first class="flex-full-width" density="comfortable" item-props
                    menu-icon="" placeholder="Search Google or type a URL" prepend-inner-icon="mdi-magnify" rounded
                    theme="light" variant="solo"></v-autocomplete>
            </v-responsive>

            <div class="Tikets_1">

                <div class="Div" >
                    <div class="p4">
                       
                        <p class="p11">Ticket No: {{iTikets}} </p>
                        <p >Orden de pedido: {{iOrden}}</p>
                    </div>
                    <div class="p2">
                        <p style="margin-left:-5%; width: 180%;">Cliente {{iCli}}</p>
                        <p>Referencia {{iRef}}</p>
                        
                       
                       
                    </div>
                    <div class="p8">
                        <p>Proceso {{iProce}}</p>
                        <p style="margin-left:-5%; width: 180%;" >Color {{iColor}}</p>
                        <div class="Divh3">

                        </div>
                    </div>
                    <div class="p10">
                        <p>Flecha {{iFlecha}}</p>
                        <p>Pares {{iPares}}</p>
                        <div class="Divh3">

                        </div>
                    </div>
                    
                </div>

            </div>

            
        
        </div>
    </div>
</template>
<script>
export default {
    name: 'Tikets_1',
    data() {
        return {
            iTikets: "71",
            iOrden: "0175",
            iCli: "BRAYAN ORDOÑEZ B/MANGA ",
            iRef: "103",
            iProce: "COSTURA",
            iColor: "MARRON X BEIGE X ROSA",
            iFlecha: "Flecha",
            iPares: "13"
            
        }
    },
}



</script>
<style>
.SuperDiv {
    min-height: 100vh;
    display: flex;

    background-color: #979694;
}

.Div45 {
    position: relative;
    width: 85%;
    float: left;
    margin-left: 3.5%;
}

.Tikets_1 {
    margin-left: 50%;
    width: 80%;
    margin: 0 auto;
    margin-top: 7%;
    background-color: transparent;
    position: absolute;
}

.Div {
    width: 100%;
    height: 120px;
    margin: 0 auto;
    border-radius: 40PX;
    background-color: #3B3B3B;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    position: absolute;
}

.p2{
width: 180%;
}

.p4,
.p2,
.p8,
.p10 {
    flex: 1;
    text-align: left;
    position: relative;
}

.Div p {
    margin-bottom: 10%;
    font-size: var(--h3-size, 20px);
    color: white;
    margin-left: 30%;
}

.btn {
    float: right;
    position: relative;
    margin-right: 20%;
    margin-top: 1.5%;


}

.btn1 {
    top: 2.5%;
    width: 50%;
    margin-right: 50%;
    float: left;
    position: relative;

}


</style>
  
