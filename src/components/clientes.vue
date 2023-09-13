<template>
    <v-card color="primary" class="pa-8 d-flex justify-center flex-wrap">
        <v-responsive max-width="550">

            <v-autocomplete :items="items" auto-select-first class="flex-full-width" density="comfortable" items-props
                menu-icon="" placeholder="Depatamento, ciudad o cliente por buscar" prepend-inner-icon="mdi-magnify" rounded
                theme="light" variant="solo"></v-autocomplete>
        </v-responsive>
    </v-card>
    <div class="clie" style="background-color:primary">
        <div id="left">
            <div class="left">
                <v-select style="margin:0 auto;margin-top: 15px;width: 90%;" clearable label="Departamentos"
                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" variant="outlined">
                </v-select>
                <v-select style="margin:0 auto;width: 90%;" clearable label="Ciudad"
                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" variant="outlined">
                </v-select>
                <v-btn @click="openAgregarDialog" id="btn" append-icon="mdi mdi-account-plus" variant="outlined">
                    Agregar cliente
                </v-btn>
            </div>
        </div>
        <div id="right">
            <div class="right">
                <v-card class="mx-auto" style="text-align: center;" max-width="1100">
                    <v-card-title>
                        Lista de clientes
                    </v-card-title>

                    <v-divider></v-divider>

                    <v-table style="margin-left: 5%;margin-right: 5% ;height: 600px;">
                        <thead>
                            <tr>
                                <th style="text-align: center;">Codigo</th>
                                <th style="text-align: center;">Nombre</th>
                                <th style="text-align: center;">Ciudad</th>
                                <th style="text-align: center;">Telefono</th>
                                <th style="text-align: center;">Direccion almacen</th>
                                <th style="text-align: center;">Nombre almacen</th>
                                <th style="text-align: center;">Edicion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="items in desserts" :key="items.code">
                                <td>{{ items.code }}</td>
                                <td>{{ items.name }}</td>
                                <td>{{ items.country }}</td>
                                <td>{{ items.cell }}</td>
                                <td>{{ items.direccion }}</td>
                                <td>{{ items.nombreAlmacen }}</td>
                                <td>
                                    <v-icon style="margin-left: 20px;" icon="mdi mdi-pencil" @click="openEditarDialog(items)"></v-icon>
                                    <v-icon @click="confirmEliminar(items)" icon="mdi mdi-delete-empty"></v-icon>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card>
            </div>
        </div>
    </div>
    <v-dialog v-model="agregarDialog" max-width="500">
        <v-card>
            <v-card-title>agregar</v-card-title>
            <v-card-text>
                <v-form @submit.prevent="AgregarCliente">
                    <v-text-field v-model="codigo" label="id"> </v-text-field>
                    <v-text-field v-model="nombre" label="nombre"> </v-text-field>
                    <v-text-field v-model="ciudad" label="direccion"> </v-text-field>
                    <v-text-field v-model="telefono" label="telefono"> </v-text-field>
                    <v-text-field v-model="direccion_almacen" label="direccion_almacen"> </v-text-field>
                    <v-text-field v-model="nombre_almacen" label="nombre_almacen"> </v-text-field>
                    <v-btn type="submit" color="primary">Add</v-btn>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="closeAgregarDialog">cerrar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

    <v-dialog v-model="editarDialog" max-width="500">
        <v-card>
            <v-card-title>agregar</v-card-title>
            <v-card-text>
                <v-form @submit.prevent="editarCliente">
                    <v-text-field v-model="codigo" label="id"> </v-text-field>
                    <v-text-field v-model="nombre" label="nombre"> </v-text-field>
                    <v-text-field v-model="ciudad" label="direccion"> </v-text-field>
                    <v-text-field v-model="telefono" label="telefono"> </v-text-field>
                    <v-text-field v-model="direccion_almacen" label="direccion_almacen"> </v-text-field>
                    <v-text-field v-model="nombre_almacen" label="nombre_almacen"> </v-text-field>
                    <v-btn type="submit" color="primary">Realizar Cambio</v-btn>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="closeeditarDialog">cerrar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    name: 'cli_1',
    data() {
        return {
            desserts: [
            ],
            agregarDialog: false,
            codigo: '',
            nombre: '',
            ciudad: '',
            telefono: '',
            direccion_almacen: '',
            nombre_almacen: '',
            editarDialog: false,
            editeDcodigo: '',
            editeDnombre: '',
            editeDciudad: '',
            editeDtelefono: '',
            editeDdireccion: '',
            editeDnombreAlmacen: '',
            selectedItem: null,
        }
    },
    methods: {
        confirmEliminar(items) {
            if (window.confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
                const index = this.desserts.indexOf(items);
                if (index !== -1) {
                    this.desserts.splice(index, 1)
                }
            }
        },

        openAgregarDialog() {
            this.agregarDialog = true
        },

        openEditarDialog(items) {
            this.selectedItem = { ...items };
            this.editeDcodigo = items.code
            this.editeDnombre = items.name
            this.editeDciudad = items.country
            this.editeDtelefono = items.cell
            this.editeDdireccion = items.direccion
            this.editeDnombreAlmacen = items.nombreAlmacen
            this.editarDialog = true
        },

        editarCliente() {
            const index = this.desserts.findIndex(items => items.code === this.selectedItem.code);

            if (index !== 1) {
                this.desserts[index].code = this.editeDcodigo
                this.desserts[index].code = this.editeDnombre
                this.desserts[index].code = this.editeDciudad
                this.desserts[index].code = this.editeDtelefono
                this.desserts[index].code = this.editeDdireccion
                this.desserts[index].code = this.editeDnombreAlmacen

                this.editarDialog = false;

                this.selectedItem = null
                this.editeDcodigo = ''
                this.editeDnombre = ''
                this.editeDciudad = ''
                this.editeDtelefono = ''
                this.editeDdireccion = ''
                this.editeDnombreAlmacen = ''
            }
        },

        closeAgregarDialog() {
            this.agregarDialog = false;
            this.codigo = ''
            this.nombre = ''
            this.ciudad = ''
            this.telefono = ''
            this.direccion = ''
            this.nombrelmacen = ''
        },

        AgregarCliente() {
            if (
                this.codigo.trim() === '' ||
                this.nombre.trim() === '' ||
                this.ciudad.trim() === '' ||
                this.telefono.trim() === '' ||
                this.direccion_almacen.trim() === '' ||
                this.nombre_almacen.trim() === ''
            ) {
                alert('por favor, igresa los campos');
                return;
            }
            this.desserts.push({
                code: this.codigo,
                name: this.nombre,
                country: this.ciudad,
                cell: this.telefono,
                direccion: this.direccion_almacen,
                nombreAlmacen: this.nombre_almacen,
            });
            this.closeAgregarDialog()
        }
    }
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
}

#left {
    width: 20%;
    height: 650px;
    margin-left: 2%;
    margin-top: 2%;
    margin-bottom: 2%;
    margin-right: 80%;
}

.left {
    border: 1px solid;
    height: 650px;
}

#btn {
    position: relative;
    top: 430px;
    left: 35px;
}

#right {
    width: 70%;
    margin-left: 25%;
    margin-top: -45.5%;
}

.right {
    border: 1px solid;
}
</style>