<template>
    <div class="Megadiv">
        <div class="DivLateral1">
            <div class="box" style="margin-top: -12%; margin-left:13%;">
                <p class="p" style="color: #7ed597;">En Proceso</p>
                <h1 class="h1">Pares: {{ totalPares }}</h1>
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
                        <h1 ref="cortadaParesH1" style="font-size: 110%; margin-left: 10%; margin-top:8%; color: white;">
                            Pares: {{ cortadaPares }}</h1>
                        <p class="p21" style="margin-top: 0%; margin-left: 10%; font-size: 80%;">Resumen Semanal</p>
                    </div>
                    <div class="Ultimo_Div">
                        <p style="color: #7ed597; position: relative; float: right; margin-right: 10%; margin-top: 5%;">
                            Terminada
                        </p>
                        <p style="color: #8e8e8e;; position: relative; float: right; margin-right: -20%; margin-top: 12%;">
                            Armada</p>
                        <h1 ref="armadaParesH1" style="font-size: 110%; margin-left: 10%; margin-top:8%; color: white;">
                            Pares: {{ armadaPares }}
                        </h1>
                        <p class="p21" style="margin-top: 0%; margin-left: 10%; font-size: 80%;">Resumen Semanal</p>
                    </div>
                    <div class="Ultimo_Div">
                        <p style="color: #7ed597; position: relative; float: right; margin-right: 10%; margin-top: 5%;">
                            Terminada
                        </p>
                        <p style="color: #8e8e8e;; position: relative; float: right; margin-right: -20%; margin-top: 12%;">
                            Costura</p>
                        <h1 style="font-size: 110%; margin-left: 10%; margin-top:8%; color: white;">Pares:{{ costuraPares }}
                        </h1>
                        <p class="p21" style="margin-top: 0%; margin-left: 10%; font-size: 80%;">Resumen Semanal</p>
                    </div>
                    <div class="Ultimo_Div">
                        <p style="color: #7ed597; position: relative; float: right; margin-right: 10%; margin-top: 5%;">
                            Terminada
                        </p>
                        <p style="color: #8e8e8e;; position: relative; float: right; margin-right: -20%; margin-top: 12%;">
                            Montada</p>
                        <h1 style="font-size: 110%; margin-left: 10%; margin-top:8%; color: white;">Pares: {{ montadaPares
                        }}
                        </h1>
                        <p class="p21" style="margin-top: 0%; margin-left: 10%; font-size: 80%;">Resumen Semanal</p>
                    </div>
                    <div class="Ultimo_Div">
                        <p style="color: #7ed597; position: relative; float: right; margin-right: 10%; margin-top: 5%;">
                            Terminada
                        </p>
                        <p style="color: #8e8e8e;; position: relative; float: right; margin-right: -20%; margin-top: 12%;">
                            Emplantillado</p>
                        <h1 style="font-size: 110%; margin-left: 10%; margin-top:8%; color: white;">Pares:
                            {{ emplantilladoPares }}</h1>
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
                        <v-text-field :items="desserts" v-model="search" :Search="search" density="comfortable" item-props
                            menu-icon="" placeholder="Search Google or type a URL" prepend-inner-icon="mdi-magnify" rounded
                            theme="light" variant="solo" style="width: 80%;margin: 0 auto"></v-text-field>
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

                        <!-- Diálogo para agregar un ticket -->
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
                        <!-- dialogo para editar el ticket -->
                        <v-dialog v-model="dialogEdit">
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
                                                <v-select v-model="editedItem.proceso" label="Proceso"
                                                    :items="['Armada', 'Costura', 'Montada', 'Emplantillado']"
                                                    @change="guardarSeleccionEnBaseDeDatos"></v-select>

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
import { collection, getDocs, addDoc, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';

export default {
    name: 'tickets_1',
    data: () => ({
        dialog: false,
        dialogEdit: false,
        dialogDelete: false,
        ticketDivs: [],
        totalPares: 0,
        search: "",
        cortadaPares: 0,  // Propiedad para el total de pares en "Cortada"
        armadaPares: 0,   // Propiedad para el total de pares en "Armada"
        costuraPares: 0,  // Propiedad para el total de pares en "Costura"
        montadaPares: 0,  // Propiedad para el total de pares en "Montada"
        emplantilladoPares: 0, // Propiedad para el total de pares en "Emplantillado"
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
        dialogEdit(val) {
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
        // Este método calcula el total de pares sumando la propiedad "pares" de todos los tickets en Firebase
        async calcularTotalPares() {
            const q = collection(db, 'tickets');
            const resul = await getDocs(q);
            let total = 0;

            resul.forEach((doc) => {
                total += parseInt(doc.data().pares, 10);
            });

            this.totalPares = total;
        },

        async listarticket() {
            const q = collection(db, 'tickets');
            const resul = await getDocs(q);
            let total = 0;
            let cortadaPares = 0;
            let armadaPares = 0;
            let costuraPares = 0;
            let montadaPares = 0;
            let emplantilladoPares = 0;

            resul.forEach((doc) => {
                const docId = doc.id;
                const dataObj = {
                    id: doc.data().id,
                    orden: doc.data().orden,
                    cliente: doc.data().cliente,
                    referencia: doc.data().referencia,
                    proceso: doc.data().proceso,
                    pares: doc.data().pares,
                };

                total += parseInt(doc.data().pares, 10);

                if (dataObj.proceso === 'Cortada') {
                    cortadaPares += parseInt(dataObj.pares, 10);
                }

                if (dataObj.proceso === 'Armada') {
                    armadaPares += parseInt(dataObj.pares, 10);
                }

                // Calcula el total de pares en "Costura"
                if (dataObj.proceso === 'Costura') {
                    costuraPares += parseInt(dataObj.pares, 10);
                }

                // Calcula el total de pares en "Montada"
                if (dataObj.proceso === 'Montada') {
                    montadaPares += parseInt(dataObj.pares, 10);
                }

                // Calcula el total de pares en "Emplantillado"
                if (dataObj.proceso === 'Emplantillado') {
                    emplantilladoPares += parseInt(dataObj.pares, 10);
                }

                this.createTicketDiv(dataObj, docId);
                this.editedItem.keyid = docId;
            });

            this.totalPares = total;
            this.cortadaPares = cortadaPares;
            this.armadaPares = armadaPares;
            this.costuraPares = costuraPares;
            this.montadaPares = montadaPares;
            this.emplantilladoPares = emplantilladoPares;
        },

        async Eliminarticket() {
            const docId = this.ticketToDeleteId;

            try {
                const Ref = doc(db, "tickets", docId);
                // Obtiene los datos del ticket antes de eliminarlo
                const ticketSnapshot = await getDoc(Ref);
                if (ticketSnapshot.exists()) {
                    const dataObj = ticketSnapshot.data();
                    // Resta la cantidad de pares del ticket eliminado del total
                    this.totalPares -= parseInt(dataObj.pares, 10);

                    // Actualiza los totales de pares para los procesos específicos
                    switch (dataObj.proceso) {
                        case 'Cortada':
                            this.cortadaPares -= parseInt(dataObj.pares, 10);
                            break;
                        case 'Armada':
                            this.armadaPares -= parseInt(dataObj.pares, 10);
                            break;
                        case 'Costura':
                            this.costuraPares -= parseInt(dataObj.pares, 10);
                            break;
                        case 'Montada':
                            this.montadaPares -= parseInt(dataObj.pares, 10);
                            break;
                        case 'Emplantillado':
                            this.emplantilladoPares -= parseInt(dataObj.pares, 10);
                            break;
                        default:
                            break;
                    }
                }
                // Elimina el documento
                await deleteDoc(Ref);
                console.log("Documento eliminado con éxito");

                // Elimina el elemento de la interfaz
                const index = this.ticketDivs.findIndex((item) => item.docId === docId);
                if (index !== -1) {
                    // Elimina el elemento del array y del DOM
                    this.ticketDivs[index].div.remove();
                    this.ticketDivs.splice(index, 1);
                }

                // No es necesario llamar a this.actualizarTotalesPares() aquí, ya que los totales se actualizan directamente arriba
            } catch (error) {
                console.error("Error al eliminar el documento:", error);
            }
        },


        actualizarTotalesPares() {
            // Esta función actualiza los totales de pares para los diferentes procesos
            // y los totales generales.
            let cortadaPares = 0;
            let armadaPares = 0;
            let costuraPares = 0;
            let montadaPares = 0;
            let emplantilladoPares = 0;

            // Calcular los totales para cada proceso
            for (const item of this.desserts) {
                const pares = parseInt(item.pares, 10);
                switch (item.proceso) {
                    case 'Cortada':
                        cortadaPares += pares;
                        break;
                    case 'Armada':
                        armadaPares += pares;
                        break;
                    case 'Costura':
                        costuraPares += pares;
                        break;
                    case 'Montada':
                        montadaPares += pares;
                        break;
                    case 'Emplantillado':
                        emplantilladoPares += pares;
                        break;
                }
            }

            // Actualizar los totales en el estado
            this.cortadaPares = cortadaPares;
            this.armadaPares = armadaPares;
            this.costuraPares = costuraPares;
            this.montadaPares = montadaPares;
            this.emplantilladoPares = emplantilladoPares;
        },


        async editarTicket() {
            const docId = this.editedItem.keyid;
            const Ref = doc(db, "tickets", docId);

            const nuevosValores = {};
            if (this.editedItem.id) {
                nuevosValores.id = this.editedItem.id;
            }
            if (this.editedItem.orden) {
                nuevosValores.orden = this.editedItem.orden;
            }
            if (this.editedItem.cliente) {
                nuevosValores.cliente = this.editedItem.cliente;
            }
            if (this.editedItem.referencia) {
                nuevosValores.referencia = this.editedItem.referencia;
            }
            if (this.editedItem.proceso) {
                nuevosValores.proceso = this.editedItem.proceso;
            }
            if (this.editedItem.pares) {
                nuevosValores.pares = this.editedItem.pares;
            }

            try {
                await updateDoc(Ref, nuevosValores);
                console.log('Documento actualizado con éxito');

                // Actualiza los datos en la vista
                this.updateTicketInView(docId, nuevosValores);
                // Calcula el total de pares después de la edición
                this.calcularTotalPares();

                // Si el proceso editado es "Armada", actualiza el total de pares en el h1 de "Armada"
                if (nuevosValores.proceso === 'Armada') {
                    // Convierte la cantidad de pares a un número
                    const nuevosPares = parseInt(this.editedItem.pares, 10);

                    if (!isNaN(nuevosPares)) {

                        // Actualiza el valor editado
                        this.armadaPares += nuevosPares;
                        // Actualiza el elemento <h1> en tiempo real
                        this.$refs.armadaParesH1.innerText = `Armada: ${this.armadaPares}`;
                    }
                }
            } catch (error) {
                console.error('Error al actualizar el documento:', error);
            }

            this.dialogEdit = false;
        },

        updateTicketInView(docId, nuevosValores) {
            const ticketDiv = this.ticketDivs.find(item => item.docId === docId);
            if (ticketDiv) {
                const infoContainer = ticketDiv.div.querySelector('.info-container');
                if (infoContainer) {
                    // Actualiza solo los campos editados
                    if (nuevosValores.id !== undefined) {
                        infoContainer.querySelector('.left-content p:nth-child(1)').textContent = `id: ${nuevosValores.id}`;
                    }

                    if (nuevosValores.orden !== undefined) {
                        infoContainer.querySelector('.left-content p:nth-child(2)').textContent = `Orden: ${nuevosValores.orden}`;
                    }
                    if (nuevosValores.cliente !== undefined) {
                        infoContainer.querySelector('.left-content p:nth-child(3)').textContent = `Cliente: ${nuevosValores.cliente}`;
                    }
                    if (nuevosValores.referencia !== undefined) {
                        infoContainer.querySelector('.right-content p:nth-child(1)').textContent = `Referencia: ${nuevosValores.referencia}`;
                    }
                    if (nuevosValores.proceso !== undefined) {
                        infoContainer.querySelector('.right-content p:nth-child(2)').textContent = `Proceso: ${nuevosValores.proceso}`;
                    }
                    if (nuevosValores.pares !== undefined) {
                        infoContainer.querySelector('.right-content p:nth-child(3)').textContent = `Pares: ${nuevosValores.pares}`;
                    }
                }
            }
        },

        createTicketDiv(dataObj, docId) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('Div');

            newDiv.innerHTML = `
    <div class="info-container">
      <div class="left-content">
        <p> Id: ${dataObj.id} </p>
        <p> Orden: ${dataObj.orden} </p>
        <p> Cliente: ${dataObj.cliente} </p>
      </div>
      <div class="right-content">
        <p> Referencia: ${dataObj.referencia} </p>
        <p> Proceso: ${dataObj.proceso} </p>
        <p> Pares: ${dataObj.pares} </p>
      </div>
      <div class="actions">
        <button style="color:white" class="delete" @click="deleteItem(dataObj.id)">Eliminar ticket</button>
        <span style="margin-right: 10px;"></span>
        <button style="color:white" class="edit" @click="editItem(dataObj)">Editar ticket</button>
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

            const btnDelete = newDiv.querySelector('.actions .delete');
            btnDelete.addEventListener('click', () => {
                this.ticketToDeleteId = docId;
                this.dialogDelete = true;
            });
            const btnEdit = newDiv.querySelector('.actions .edit');
            btnEdit.addEventListener('click', () => {
                this.editedIndex = this.ticketDivs.findIndex(item => item.docId === docId);
                this.editedItem = Object.assign({}, this.desserts[this.editedIndex]);
                this.editedItem.keyid = docId;
                this.dialogEdit = true;
            })
            // Almacena la referencia al elemento div en el array
            this.ticketDivs.push({ docId, div: newDiv });

            return newDiv;
        },

        guardarSeleccionEnBaseDeDatos() {
            const docId = this.editedItem.keyid; // Obtén el ID del documento que deseas editar
            const procesoSeleccionado = this.editedItem.proceso; // Obtiene la opción seleccionada

            if (docId) {
                const Ref = doc(db, "tickets", docId);
                const nuevosValores = {
                    proceso: procesoSeleccionado,
                };

                // Actualiza la opción seleccionada en la base de datos
                updateDoc(Ref, nuevosValores)
                    .then(() => {
                        console.log('Proceso actualizado con éxito en la base de datos');
                    })
                    .catch((error) => {
                        console.error('Error al actualizar el proceso en la base de datos:', error);
                    });
            }
        },

        async createtickets() {
            const colRef = collection(db, 'tickets');
            const dataObj = {
                id: this.editedItem.id,
                orden: this.editedItem.orden,
                cliente: this.editedItem.cliente,
                referencia: this.editedItem.referencia,
                proceso: 'Cortada',
                pares: this.editedItem.pares,
            };
            const docRef = await addDoc(colRef, dataObj);
            console.log('Document was created with ID:', docRef.id);

            // Calcula el total de pares
            this.totalPares += parseInt(this.editedItem.pares, 10);
            // Actualiza el total de pares en "Cortada" en el h1
            this.cortadaPares += parseInt(this.editedItem.pares, 10);

            // Actualiza el h1 de "Cortada" en tiempo real
            this.$refs.cortadaParesH1.innerText = `Pares: ${this.cortadaPares}`;

            // Llamar a la función createTicketDiv para crear el nuevo div del ticket
            this.createTicketDiv(dataObj, docRef.id);

            // Almacenar los datos del nuevo ticket en el almacenamiento local del navegador
            this.saveTicketToLocalData(docRef.id, dataObj);

            // Después de guardar los datos en el almacenamiento local y crear el elemento de ticket
            this.desserts.push(dataObj);

            // Limpiar el formulario
            this.editedItem = { ...this.defaultItem };
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
            // Comprueba que this.desserts no sea undefined y que tenga elementos
            if (this.desserts && this.desserts.length > 0) {
                const index = this.desserts.indexOf(item);
                if (index !== -1) {
                    this.editedIndex = index;
                    this.editedItem = Object.assign({}, item);
                    this.dialog = true;
                } else {
                    console.log('Elemento no encontrado en desserts');
                }
            } else {
                console.log('this.desserts no está definido o es un arreglo vacío');
            }
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
            this.dialogEdit = false;
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
                // Actualizar un ticket existente
                this.editarTicket(); // Llama a la función para editar el ticket
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