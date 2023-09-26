<!-- <template>
    <div class="SuperDiv">

        <div class="Div45">
            <v-btn class="btn">
                Button
              </v-btn>
            <v-responsive max-width="300" class="btn1">
                <v-autocomplete
                  :items="items"
                  auto-select-first
                  class="flex-full-width"
                  density="comfortable"
                  item-props
                  menu-icon=""
                  placeholder="Search Google or type a URL"
                  prepend-inner-icon="mdi-magnify"
                  rounded
                  theme="light"
                  variant="solo"
                ></v-autocomplete>
                </v-responsive>
         
            <div class="Tikets_1">

                <div class="Div">
                    <div class="p4">
                        <p>Ticket No</p>
                        <p>Orden de pedido</p>
                    </div>
                    <div class="p2">
                        <p>Cliente</p>
                        <p>Referencia</p>
                    </div>
                    <div class="p8">
                        <p>Proceso</p>
                        <p>Color</p>
                        </div>
                        <div class="p10">
                        <p>Flecha</p>
                        <p>Pares</p>
                    </div>
                </div>
                <tbody>
                    <tr v-for="item in desserts" :key="item.code">
                        <td>{{ item.code }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.country }}</td>
                        <td>{{ item.cell }}</td>
                        <td>{{ item.direccion }}</td>
                        <td>{{ item.nombreAlmacen }}</td>
                        <td>
                            <v-icon style="margin-left: 20px;" icon="mdi mdi-pencil"
                                @click="openEditarDialog(item)"></v-icon>
                            <v-icon @click="confirmEliminar(item)" icon="mdi mdi-delete-empty"></v-icon>
                        </td>
                    </tr>
                </tbody>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Tickets_1',

    data: () => ({

    }),
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
}

.p4 ,.p2,.p8,.p10  {
    flex: 1;
    text-align: left;
}
p{
    margin-bottom: 10%;
    font-size: var(--h3-size, 20px);
    color: white;
    margin-left: 30%;
}
.btn  {
    float:right;
    position: relative;
    margin-right: 20%;
margin-top: 1.5%;
 

}
.btn1{
    top:2.5%;
    width: 50%;
    margin-right: 50%;
    float:left;
    position: relative;

}

</style>
   -->