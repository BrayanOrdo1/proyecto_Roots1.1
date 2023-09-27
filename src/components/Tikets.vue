<template>
    <div class="SuperDiv">

        <div class="Div45">
            <v-dialog v-model="dialog">
                <template v-slot:activator="{ props }">
                    <v-btn id="btn" v-bind="props" style="border-radius: 9999px; border-width: 1px;">+ agregar cliente
                    </v-btn>
                </template>
                <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>
            </v-dialog>
            <v-responsive max-width="300" class="btn1">
                <v-autocomplete :items="items" auto-select-first class="flex-full-width" density="comfortable" item-props
                    menu-icon="" placeholder="Search Google or type a URL" prepend-inner-icon="mdi-magnify" rounded
                    theme="light" variant="solo"></v-autocomplete>
            </v-responsive>

            <div class="Tikets_1">

                <div class="Div">
                    <div class="p4">

                        <p class="p11">Ticket No: {{ iTikets }} </p>
                        <p>Orden de pedido: {{ iOrden }}</p>
                    </div>
                    <div class="p2">
                        <p style="margin-left:-5%; width: 180%;">Cliente {{ iCli }}</p>
                        <p>Referencia {{ iRef }}</p>



                    </div>
                    <div class="p8">
                        <p>Proceso {{ iProce }}</p>
                        <p style="margin-left:-5%; width: 180%;">Color {{ iColor }}</p>
                        <div class="Divh3">

                        </div>
                    </div>
                    <div class="p10">
                        <p>Flecha {{ iFlecha }}</p>
                        <p>Pares {{ iPares }}</p>
                        <div class="Divh3">

                        </div>
                    </div>

                </div>

            </div>

            <v-dialog v-model="dialog">
                <div style="height: 20%; width:60%; background-color:blue; margin: 0 auto;">
                    <v-card>
                        <div class="caja1">
                            <div class="caja2">
                                <h1>gerd</h1>
                            </div>
                        </div>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue-darken-1" variant="text" @click="close">Cancel</v-btn>
                            <v-btn color="blue-darken-1" variant="text" @click="save">Save</v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </v-dialog>



        </div>
    </div>
</template>
<script>
import db from '../firebase/init.js'
import { collection, getDocs, query, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'

export default {
    name: 'Producto_1',
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
            {
                align: 'start',
                sortable: false,
                key: 'name',
            },
            { title: 'iTikets', key: 'id' },
            { title: 'iOrden', key: 'nombre' },
            { title: 'iCli', key: 'telefono' },
            { title: 'iRef', key: 'ciudad' },
            { title: 'iProce', key: 'direccionalmacen' },
            { title: 'iPares ', key: 'nombrealmacen', sortable: false },
            { title: 'Actions', key: 'actions', sortable: false },
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
            id: ' ',
            nombre: ' ',
            telefono: ' ',
            ciudad: ' ',
            direccionalmacen: ' ',
            nombrealmacen: ' ',
        },
        defaultItem: {
            id: ' ',
            nombre: ' ',
            telefono: ' ',
            ciudad: ' ',
            direccionalmacen: ' ',
            nombrealmacen: ' ',
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? ' ' : ' '
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    created() {
        this.listarProducto()
    },

    methods: {
        async listarProducto() {
            const q = query(collection(db, "cliente"));
            const resul = await getDocs(q);
            resul.forEach((doc) => {
                console.log("id", doc.id);
                this.desserts.push({
                    keyid: doc.id,
                    id: doc.data().id,
                    nombre: doc.data().nombre,
                    telefono: doc.data().telefono,
                    ciudad: doc.data().ciudad,
                    direccionalmacen: doc.data().direccionalmacen,
                    nombrealmacen: doc.data().nombrealmacen,
                })
            })
        },

        async Eliminartickets() {
            console.log(this.editedItem.keyid)
            const Ref = doc(db, "tickets", this.editedItem.keyid);
            await deleteDoc(Ref, {
                nombre: this.editedItem.nombre,
                telefono: this.editedItem.telefono,
                ciudad: this.editedItem.ciudad,
                direccionalmacen: this.editedItem.direccionalmacen,
                nombrealmacen: this.editedItem.nombrealmacen,
            })
                .then(console.log("Eliminado con exito"))
                .catch(function (error) {
                    console.log(error)
                })
        },


        async Actualizartickets() {
            console.log("hola", this.editedItem.keyid)
            const Ref = doc(db, "tickets", this.editedItem.keyid);
            await updateDoc(Ref, {
                nombre: this.editedItem.nombre,
                telefono: this.editedItem.telefono,
                ciudad: this.editedItem.ciudad,
                direccionalmacen: this.editedItem.direccionalmacen,
                nombrealmacen: this.editedItem.nombrealmacen,
            })
                .then(console.log("Termino update usuario"))
                .catch(function (error) {
                    console.log(error)

                });
        },

        async createtickets() {
            const colRef = collection(db, 'tickets');
            const dataObj = {
                id: this.editedItem.id,
                nombre: this.editedItem.nombre,
                telefono: this.editedItem.telefono,
                ciudad: this.editedItem.ciudad,
                direccionalmacen: this.editedItem.direccionalmacen,
                nombrealmacen: this.editedItem.nombrealmacen,
            }
            const docRef = await addDoc(colRef, dataObj)
            console.log('Document was created with: ID:', docRef.id)
        },



        initialize() {
            this.desserts = [
                {
                    id: ' ',
                    nombre: ' ',
                    telefono: ' ',
                    ciudad: ' ',
                    direccionalmacen: ' ',
                    nombrealmacen: ' ',
                },

            ]
        },

        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            this.desserts.splice(this.editedIndex, 1)
            this.closeDelete()
            this.Eliminarcliente()
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.desserts[this.editedIndex], this.editedItem)
                this.Actualizarcliente()
            } else {
                this.desserts.push(this.editedItem),
                    this.createUser()

            }
            this.close()
        },
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
    margin-top: -20%;
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

.p2 {
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
    margin-top: 25%;

}

.caja1 {
    margin-top: 40%;
}
.caja2 {
    background-color: #3B3B3B;
    margin-top: 20%;
    width: 40%;
    height: 60%;
    margin-left: 5%;
}
</style>
  
