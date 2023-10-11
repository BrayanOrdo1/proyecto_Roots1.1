<template>
    <div class="Megadiv">
        <div class="DivLateral1">
            <div class="box" style="margin-top: -12%; margin-left:13%;">
                <p class="p" style="color: #7ed597;">En Proceso</p>
                <h1 class="h1">Pares: 150</h1>
                <div class="parte_de_abajo">

                    <p class="p21" style="margin-top: 18%; width: 22%; margin-left: -10%">Transaction</p>
                    <p style="color: white; margin-top: -5%; margin-left: 55%;"><v-btn icon="$vuetify" variant="plain"
                            size="small">
                        </v-btn><b>Time</b></p>

                </div>
                <div class="ultimate" style="margin-left: -8%;">
                    <div class="Ultimo_Div">
                        <p style="color: #7ed597; position: relative; float: right; margin-right: 10%; margin-top: 5%;">
                            Terminada
                        </p>
                        <p style="color: #8e8e8e;; position: relative; float: right; margin-right: -20%; margin-top: 12%;">
                            Cortada</p>
                        <h1 style="font-size: 110%; margin-left: 10%; margin-top:8%; color: white;">Pares: 150</h1>
                        <p class="p21" style="margin-top: 0%; margin-left: 10%; font-size: 80%;">Resumen Semanal</p>
                    </div>
                    <div class="Ultimo_Div">
                        <p style="color: #7ed597; position: relative; float: right; margin-right: 10%; margin-top: 5%;">
                            Terminada
                        </p>
                        <p style="color: #8e8e8e;; position: relative; float: right; margin-right: -20%; margin-top: 12%;">
                            Cortada</p>
                        <h1 style="font-size: 110%; margin-left: 10%; margin-top:8%; color: white;">Pares: 150</h1>
                        <p class="p21" style="margin-top: 0%; margin-left: 10%; font-size: 80%;">Resumen Semanal</p>
                    </div>
                    <div class="Ultimo_Div">
                        <p style="color: #7ed597; position: relative; float: right; margin-right: 10%; margin-top: 5%;">
                            Terminada
                        </p>
                        <p style="color: #8e8e8e;; position: relative; float: right; margin-right: -20%; margin-top: 12%;">
                            Cortada</p>
                        <h1 style="font-size: 110%; margin-left: 10%; margin-top:8%; color: white;">Pares: 150</h1>
                        <p class="p21" style="margin-top: 0%; margin-left: 10%; font-size: 80%;">Resumen Semanal</p>
                    </div>
                    <div class="Ultimo_Div">
                        <p style="color: #7ed597; position: relative; float: right; margin-right: 10%; margin-top: 5%;">
                            Terminada
                        </p>
                        <p style="color: #8e8e8e;; position: relative; float: right; margin-right: -20%; margin-top: 12%;">
                            Cortada</p>
                        <h1 style="font-size: 110%; margin-left: 10%; margin-top:8%; color: white;">Pares: 150</h1>
                        <p class="p21" style="margin-top: 0%; margin-left: 10%; font-size: 80%;">Resumen Semanal</p>
                    </div>
                    <div class="Ultimo_Div">
                        <p style="color: #7ed597; position: relative; float: right; margin-right: 10%; margin-top: 5%;">
                            Terminada
                        </p>
                        <p style="color: #8e8e8e;; position: relative; float: right; margin-right: -20%; margin-top: 12%;">
                            Cortada</p>
                        <h1 style="font-size: 110%; margin-left: 10%; margin-top:8%; color: white;">Pares: 150</h1>
                        <p class="p21" style="margin-top: 0%; margin-left: 10%; font-size: 80%;">Resumen Semanal</p>
                    </div>

                    <!-- favor no quitar este div ya que ayuda con estilos no usar el div de abajo -->
                    <div class="Ultimo_Div" style="height: 70%; background-color:transparent; border: 0px transparent; ">
                    </div>
                </div>

            </div>
        </div>
        <div class="MicroDiv">
            <div class="Div45">
                <div class="div54">
                    <div id="buscador">
                        <v-autocomplete :items="items" density="comfortable" item-props menu-icon=""
                            placeholder="Search Google or type a URL" prepend-inner-icon="mdi-magnify" rounded theme="light"
                            variant="solo" style="width: 80%;margin: 0 auto"></v-autocomplete>
                    </div>
                    <div id="formulario">
                        <v-dialog v-model="dialog">
                            <template v-slot:activator="{ props }">

                                <v-btn v-bind="props" class="bt1" size="small" color="#8c52cc"
                                    style="border-radius: 9999px; border-width: 1px;height: 50px; margin-top: 5%; margin-bottom: 7%;">
                                    agregar ticket
                                </v-btn>
                            </template>
                            <v-card-title>
                                <span class="text-h5">{{ formTitle }}</span>
                            </v-card-title>
                        </v-dialog>
                    </div>
                    <p class="p21" style="margin-top: 3%; margin-left: 5%;">Estado de Proceso</p>

                    <h1 class="btn211" style="margin-top: -4%;">

                        <v-btn icon="$vuetify" variant="plain" size="small">
                        </v-btn>Proceso
                    </h1>
                </div>
                <div class="MegaDiv2">


                    <div>
                        <!-- Botón para agregar un nuevo ticket -->
                        <button @click="dialog = true">Agregar Ticket</button>

                        <!-- Lista de tickets -->
                        <div ref="ticketsList">
                            <!-- Aquí se mostrarán los divs de los tickets -->
                        </div>

                        <!-- Diálogo para agregar/editar un ticket -->
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
                        <!-- Diálogo para confirmar la eliminación -->
                        <v-dialog v-model="dialogDelete" max-width="500px">
                            <v-card>
                                <v-card-title class="text-h5" style="border-radius: 100px; text-align: center;">
                                    ¿Estás seguro de eliminar este ticket?
                                </v-card-title>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
                                    <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import db from '../firebase/init.js';
import {
    collection,
    getDocs,
    addDoc,
    doc,
    updateDoc,
    deleteDoc
} from 'firebase/firestore';

export default {
    name: 'tickets_1',
    data: () => ({
        dialog: false,
        dialogDelete: false,
        ticketDivs: [],
        ticketToDeleteId: null,
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
            keyid: ' ',
            id: ' ',
            orden: ' ',
            cliente: ' ',
            referencia: '',
            proceso: ' ',
            pares: ' ',
        },
        defaultItem: {
            id: ' ',
            orden: ' ',
            cliente: ' ',
            referencia: ' ',
            proceso: ' ',
            pares: ' ',
        },
    }),


    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'Agregar Ticket' : 'Editar Ticket';
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
        // Llama a la función loadTicketsFromLocalStorage solo si los tickets no están cargados en data
        if (this.desserts.length === 0) {
            this.loadTicketsFromLocalStorage();
        }

        // Llama a la función listarticket para cargar los datos desde Firestore
        this.listarticket();
    },

    methods: {
        async listarticket() {
            const q = collection(db, 'tickets');
            const resul = await getDocs(q);
            resul.forEach((doc) => {
                const docId = doc.id; // Aquí obtienes el ID del documento
                const dataObj = {
                    id: doc.data().id,
                    orden: doc.data().orden,
                    cliente: doc.data().cliente,
                    referencia: doc.data().referencia,
                    proceso: doc.data().proceso,
                    pares: doc.data().pares,
                };
                this.createTicketDiv(dataObj, docId);
            });
        },


        async Eliminarticket() {
            const docId = this.ticketToDeleteId;
            console.log("ID del documento a eliminar:", docId);

            try {
                const Ref = doc(db, "tickets", docId);
                await deleteDoc(Ref);
                console.log("Documento eliminado con éxito");

                // Elimina el elemento de la interfaz
                const index = this.ticketDivs.findIndex((item) => item.docId === docId);
                if (index !== -1) {
                    // Elimina el elemento del array y del DOM
                    this.ticketDivs[index].div.remove();
                    this.ticketDivs.splice(index, 1);
                }

            } catch (error) {
                console.error("Error al eliminar el documento:", error);
            }
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

        createTicketDiv(dataObj, docId) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('Div');

            newDiv.innerHTML = `
    <div class="info-container">
      <div>
        <p> Id: ${dataObj.id} </p>
        <p> Orden: ${dataObj.orden} </p>
        <p> Cliente: ${dataObj.cliente} </p>
      </div>
      <div>
        <p> Referencia: ${dataObj.referencia} </p>
        <p> Proceso: ${dataObj.proceso} </p>
        <p> Pares: ${dataObj.pares} </p>
      </div>
      <div class="actions">
        <button class="btn btn-danger" style="color:white" @click="deleteItem(${dataObj.id})" data-id="${dataObj.id}">Eliminar Ticket</button>
      </div>
    </div>
  `;

            newDiv.dataset.key = docId;

            const ticketsList = this.$refs.ticketsList;
            if (ticketsList.firstChild) {
                ticketsList.insertBefore(newDiv, ticketsList.firstChild);
            } else {
                ticketsList.appendChild(newDiv);
            }

            const btnDelete = newDiv.querySelector('.actions button');
            btnDelete.addEventListener('click', () => {
                this.ticketToDeleteId = docId;
                this.dialogDelete = true;
            });

            // Almacena la referencia al elemento div en el array
            this.ticketDivs.push({ docId, div: newDiv });

            return newDiv;
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
            };
            const docRef = await addDoc(colRef, dataObj);
            console.log('Document was created with: ID:', docRef.id);
            // Llamar a la función createTicketDiv para crear el nuevo div del ticket
            this.createTicketDiv(dataObj, docRef.id);

            // Almacenar los datos del nuevo ticket en el almacenamiento local del navegador
            this.saveTicketToLocalData(docRef.id, dataObj);
            // Después de guardar los datos en el almacenamiento local y crear el elemento de ticket
            this.desserts.push(dataObj);


            // Limpiar el formulario
            this.editedItem = this.defaultItem;
            this.editedIndex = -1;

            // Cerrar el diálogo
            this.dialog = false;
        },

        saveTicketToLocalData(docId, dataObj) {
            // Guardar el ticket en el almacenamiento local
            const storedData = JSON.parse(localStorage.getItem('ticketsData')) || {};
            storedData[docId] = dataObj;
            localStorage.setItem('ticketsData', JSON.stringify(storedData));
        },
        loadTicketsFromLocalStorage() {
            // Verificar si this.$refs.ticketsList está definido
            if (this.$refs.ticketsList) {
                // Cargar los tickets almacenados en el almacenamiento local
                const storedData = JSON.parse(localStorage.getItem('ticketsData')) || {};
                for (const docId in storedData) {
                    if (Object.prototype.hasOwnProperty.call(storedData, docId)) {
                        const dataObj = storedData[docId];
                        // Agregar los datos al arreglo desserts
                        this.desserts.push(dataObj);
                        // Crear el elemento de ticket en la interfaz
                        this.createTicketDiv(dataObj, docId);
                    }
                }
            }
        },


        initialize() {
            this.desserts = [
                {
                    id: ' ',
                    orden: ' ',
                    cliente: ' ',
                    referencia: ' ',
                    proceso: ' ',
                    pares: ' ',
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
            this.Eliminarticket(); // Corregir el nombre de la función a Eliminarticket
        },


        close() {
            this.dialog = false;
            this.editedItem = { ...this.defaultItem };
            this.editedIndex = -1;
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
                // Actualizar un ticket existente (debes implementar esta función)
                this.Actualizartickets();
            } else {
                // Crear un nuevo ticket
                this.createtickets();
            }
        }
    }
}
</script>
<style>
.SuperDiv {
    min-height: 100vh;
    display: flex;
    background-color: #979694;
}

.info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.info-container div {
    display: inline-flex;
}

.info-container div p {
    margin: 0;
    letter-spacing: 0.2em;
}


.Div45 {

    width: 85%;
}

#buscador {
    position: relative;
    float: left;
    width: 40%;
    margin-top: 20px;
}

#formulario {

    margin-left: 65%;
    width: 43%;

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
    width: 88%;
    height: 120px;
    margin-left: 35px;
    border-radius: 40PX;
    background-color: #1f1f1f;
    justify-content: space-between;
    padding: 10px;
    position: relative;
    margin-top: 7%;
    border: 5px solid #3b3b3b;
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

.MegaDiv2 {

    height: 120%;
    width: 64.4%;
    position: absolute;
    overflow: auto;

}

::-webkit-scrollbar {
    width: 0.1px;
}

.div54 {

    width: 118.3%;


}

.btn221 {
    color: #ffffff;
    float: right;
    font-size: 100%;
    margin-top: 5%;

}

.btn211 {
    color: #8e8e8e;
    margin-left: 76%;
    float: right;
    font-size: 100%;
    margin-top: -2.6%;
    margin-right: 9%;
}

.DivLateral1 {
    height: 100%;
    width: 35%;

    position: relative;
    float: right;
}
</style>