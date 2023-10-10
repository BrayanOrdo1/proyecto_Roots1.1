<template>
    <div class="Megadiv">
        <div class="Div_Lateral">
            <v-dialog v-model="dialog">
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props" class="bt31" size="small" color="#8c52cc" style=" border-radius: 9999px; border-width: 1px; height: 50px; width: 30%; margin-top: 3%; margin-left: 5%; ">
                        + AGREGAR CLIENTE
                                </v-btn>
              
                </template>
                <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>
            </v-dialog>

            <v-select style="width: 80%; background-color: rgb(0, 0, 0); color :white; margin-top: 4%; margin-left: 5%; " clearable
                label="Departamentos" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                variant="outlined">
            </v-select>
            <v-select color="primary" style="width: 80%; background-color: rgb(0, 0, 0); color :white; margin-top: 4%; margin-left: 5%;" clearable label="Ciudad"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" variant="outlined">
            </v-select>


        </div>
        <div class="MicroDiv">
            <v-responsive max-width="550">
                <v-autocomplete :items="desserts" auto-select-first class="flex-full-width" density="comfortable" item-props
                    menu-icon="" placeholder="Depatamento, ciudad o cliente por buscar" prepend-inner-icon="mdi-magnify"
                    rounded theme="light" variant="solo" style="    position: relative;
    float: left;
    width: 70%;
    margin-top: 20px; margin-left: 5%;"></v-autocomplete>
            </v-responsive>
            <v-btn v-bind="props" class="bt31" size="small" color="#8c52cc" style=" border-radius: 9999px; border-width: 1px; height: 50px; width: 12%; margin-top: -6%; margin-right: 2%; float: right;" @click="imprimir()">
                                    Imprimir
                                </v-btn>

            <v-card class="mx-auto" style="text-align: center; background-color: black; color: white;" max-width="1200">
                <v-card-title>
                    Lista de clientes
                </v-card-title>
                <v-divider ></v-divider>
                <v-data-table :headers="headers" :items="desserts" :sort-by="[{ order: 'asc' }]" class="elevation-1"
                    style="height: 720px; background-color: rgb(0, 0, 0); color: white; ">
                    <template v-slot:top>
                        <v-dialog v-model="dialog"  >
                            <v-card >
                                <v-card-text >
                                    <v-container>
                                        <v-row >
                                            <v-col cols="12" sm="6" md="4" >
                                                <v-text-field v-model="editedItem.id" label="Codigo"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.nombre" label="Nombre"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.telefono" label="Telefono"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.ciudad" label="Ciudad"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.direccionalmacen"
                                                    label="Direccion almacen"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="4">
                                                <v-text-field v-model="editedItem.nombrealmacen"
                                                    label="Nombre almacen"></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue-darken-1" variant="text" @click="close">Cancel</v-btn>
                                    <v-btn color="blue-darken-1" variant="text" @click="save">Save</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-dialog v-model="dialogDelete" max-width="500px">
                            <v-card>
                                <v-card-title class="text-h5" style="border-radius: 100px; text-align: center;">Estas seguro
                                    de eliminar este cliente?</v-card-title>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
                                    <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </template>

                    <template v-slot:[`item.actions`]="{ item }">
                        <v-icon size="small" class="me-2" @click="editItem(item.raw)">
                            mdi-pencil
                        </v-icon>
                        <v-icon size="small" @click="deleteItem(item.raw)">
                            mdi-delete
                        </v-icon>
                    </template>
                    <template v-slot:no-data>
                    </template>
                </v-data-table>
            </v-card>
        </div>
    </div>
</template>
<script>
import jsPDF from 'jspdf'
require('jspdf-autotable')
import db from '../firebase/init.js'
import { collection, getDocs, query, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'

export default {
    name: 'clientes_1',
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
            {
                align: 'start',
                sortable: false,
                key: 'name',
            },
            { title: 'Codigo', key: 'id' },
            { title: 'Nombre', key: 'nombre' },
            { title: 'Telefono', key: 'telefono' },
            { title: 'Ciudad', key: 'ciudad' },
            { title: 'Direccion almacen', key: 'direccionalmacen' },
            { title: 'Nombre almacen', key: 'nombrealmacen', sortable: false },
            { title: 'Acciones', key: 'actions', sortable: false },
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
            id: '',
            nombre: '',
            telefono: '',
            ciudad: '',
            direccionalmacen: '',
            nombrealmacen: '',
        },
        defaultItem: {
            id: '',
            nombre: '',
            telefono: '',
            ciudad: '',
            direccionalmacen: '',
            nombrealmacen: '',
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
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

        async Eliminarcliente() {
            console.log(this.editedItem.keyid)
            const Ref = doc(db, "cliente", this.editedItem.keyid);
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


        async Actualizarcliente() {
            console.log("hola", this.editedItem.keyid)
            const Ref = doc(db, "cliente", this.editedItem.keyid);
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

        async createUser() {
            const colRef = collection(db, 'cliente');
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

        async imprimir() {
            let colums = [
                { title: "Nombre", datakey: 'nombre' },
                { title: "Telefono", datakey: 'telefono' }
            ]
            let registros = this.desserts;

            let doc = new jsPDF("p", 'pt');
            doc.autoTable(colums, registros, {
                margin: { top: 70 }, addPageContent: function () { doc.text("Nombre", 40, 30) }
            });
            doc.save('Nombre.pdf')
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
.clie {
    margin: 0 auto;
    max-width: 1500px;
    height: 700px;
    border: 1px solid;
    margin-top: 2%;
    margin-bottom: 5.5%;
    position: relative;
}


#left {
    width: 100%;
    height: 650px;
    margin-left: 2%;
    margin-top: 2%;
    margin-bottom: 2%;
    margin-right: 80%;
    position: absolute;
}

.left {
    border: 1px solid;
    height: 650px;
}

#btn {
    position: relative;
    margin-top: 420px;
    margin-left: 50px;
}

#right {
    width: 20%;
}

.right {
    border: 1px solid;
}
.v-table--density-default > .v-table__wrapper > table > tbody > tr > th, .v-table--density-default > .v-table__wrapper > table > thead > tr > th, .v-table--density-default > .v-table__wrapper > table > tfoot > tr > th {
    background-color: black;
    color: white;
}
.v-table--density-default > .v-table__wrapper > table > tbody > tr > td, .v-table--density-default > .v-table__wrapper > table > thead > tr > td, .v-table--density-default > .v-table__wrapper > table > tfoot > tr > td {
    background-color: black;
  
}
</style>