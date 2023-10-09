<template>
    <div class="SuperDiv">

        <div class="Div45">
            <div id="buscador">
                <v-autocomplete :items="items" density="comfortable" item-props menu-icon=""
                    placeholder="Search Google or type a URL" prepend-inner-icon="mdi-magnify" rounded theme="light"
                    variant="solo" style="width: 80%;margin: 0 auto"></v-autocomplete>
            </div>
            <div id="formulario">
                <v-dialog v-model="dialog">
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" style="border-radius: 9999px; border-width: 1px;height: 50px;;">+ agregar
                            cliente
                        </v-btn>
                    </template>
                    <v-card-title>
                        <span class="text-h5">{{ formTitle }}</span>
                    </v-card-title>
                </v-dialog>
            </div>
            <div class="Tikets_1">
                <div class="Div">
                    <v-dialog v-model="dialog">
                        <v-card>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.id" label="id"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.orden" label="orden"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.cliente" label="cliente"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.referencia" label="Ref"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.proceso" label="Proceso"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.pares" label="Pares"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                            <v-card>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue-darken-1" variant="text" @click="close">Cancel</v-btn>
                                    <v-btn color="blue-darken-1" variant="text" @click="save">Save</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-card>
                    </v-dialog>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import db from '../firebase/init.js'
import { collection, getDocs, query, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'

export default {
    name: 'tickets_1',
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
            { title: 'iOrden', key: 'orden' },
            { title: 'iCli', key: 'cliente' },
            { title: 'iRef', key: 'referencia' },
            { title: 'iProce', key: 'proceso', sortable: false },
            { title: 'iPares ', key: 'pares' },
            { title: 'Actions', key: 'actions', sortable: false },
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
            keyid: '',
            id: '',
            orden: '',
            cliente: '',
            referencia: '',
            proceso: '',
            pares: '',
        },
        defaultItem: {
            id: '',
            orden: '',
            cliente: '',
            referencia: '',
            proceso: '',
            pares: '',
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
        this.listarticket()
    },

    methods: {
        async listarticket() {
            const q = query(collection(db, "tickets"));
            const resul = await getDocs(q);
            resul.forEach((doc) => {
                console.log("id", doc.id);
                this.desserts.push({
                    keyid: doc.id,
                    id: doc.data().id,
                    orden: doc.data().orden,
                    cliente: doc.data().cliente,
                    referencia: doc.data().referencia,
                    proceso: doc.data().proceso,
                    pares: doc.data().pares,
                })
            })
        },

        async Eliminartickets() {
            console.log(this.editedItem.keyid)
            const Ref = doc(db, "tickets", this.editedItem.keyid);
            await deleteDoc(Ref, {
                orden: this.editedItem.orden,
                cliente: this.editedItem.cliente,
                referencia: this.editedItem.referencia,
                proceso: this.editedItem.proceso,
                pares: this.editedItem.pares,
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
                orden: this.editedItem.orden,
                cliente: this.editedItem.cliente,
                referencia: this.editedItem.referencia,
                proceso: this.editedItem.proceso,
                pares: this.editedItem.pares,
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
                orden: this.editedItem.orden,
                cliente: this.editedItem.cliente,
                referencia: this.editedItem.referencia,
                proceso: this.editedItem.proceso,
                pares: this.editedItem.pares,
            }
            const docRef = await addDoc(colRef, dataObj)
            console.log('Document was created with: ID:', docRef.id)
        },



        initialize() {
            this.desserts = [
                {
                    id: '',
                    orden: '',
                    cliente: '',
                    referencia: '',
                    proceso: '',
                    pares: '',
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
    position: absolute;
    width: 85%;
}

#buscador {
    position: relative;
    float: left;
    width: 60%;
    margin-top: 20px;
}

#formulario {
    position: relative;
    float: right;
    width: 30%;
    margin-top: 20px;
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
    margin-left: 35px;
    border-radius: 40PX;
    background-color: #3B3B3B;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    position: relative;
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
  
