<template>
    <v-card color="primary" class="pa-8 d-flex justify-center flex-wrap">
        <v-responsive max-width="550">

            <v-autocomplete :item="item" auto-select-first class="flex-full-width" density="comfortable" item-props
                menu-icon="" placeholder="Depatamento, ciudad o cliente por buscar" prepend-inner-icon="mdi-magnify" rounded
                theme="light" variant="solo"></v-autocomplete>
        </v-responsive>
    </v-card>
    <div class="clie" style="background-color:primary">
        <div id="left">
            <div class="left">
                <v-select style="margin:0 auto;margin-top: 15px;width: 90%;" clearable label="Departamentos"
                    :item="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" variant="outlined">
                </v-select>
                <v-select style="margin:0 auto;width: 90%;" clearable label="Ciudad"
                    :item="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" variant="outlined">
                </v-select>
                <v-responsive>
                <v-btn @click="openAgregarDialog" id="btn" append-icon="mdi mdi-account-plus" variant="outlined">
                    Agregar cliente
                </v-btn>
                </v-responsive>
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
                            <tr v-for="item in desserts" :key="item.code">
                                <td>{{ item.code }}</td>
                                <td>{{ item.name }}</td>
                                <td>{{ item.country }}</td>
                                <td>{{ item.cell }}</td>
                                <td>{{ item.direccion }}</td>
                                <td>{{ item.nombreAlmacen }}</td>
                                <td>
                                    <v-icon style="margin-left: 20px;" icon="mdi mdi-pencil" @click="openEditarDialog(item)"></v-icon>
                                    <v-icon @click="confirmEliminar(item)" icon="mdi mdi-delete-empty"></v-icon>
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
                    <v-text-field v-model="editeDcodigo" label="id"> </v-text-field>
                    <v-text-field v-model="editeDnombre" label="nombre"> </v-text-field>
                    <v-text-field v-model="editeDciudad" label="direccion"> </v-text-field>
                    <v-text-field v-model="editeDtelefono" label="telefono"> </v-text-field>
                    <v-text-field v-model="editeDdireccion" label="direccion_almacen"> </v-text-field>
                    <v-text-field v-model="editeDnombreAlmacen" label="nombre_almacen"> </v-text-field>
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
        confirmEliminar(item) {
            if (window.confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
                const index = this.desserts.indexOf(item);
                if (index !== -1) {
                    this.desserts.splice(index, 1)
                }
            }
        },

        openAgregarDialog() {
            this.agregarDialog = true
        },

        openEditarDialog(item) {
            this.selectedItem = { ...item };
            this.editeDcodigo = item.code
            this.editeDnombre = item.name
            this.editeDciudad = item.country
            this.editeDtelefono = item.cell
            this.editeDdireccion = item.direccion
            this.editeDnombreAlmacen = item.nombreAlmacen
            this.editarDialog = true
        },

        editarCliente() {
            const index = this.desserts.findIndex(item => item.code === this.selectedItem.code);

            if (index !== 1) {
                this.desserts[index].code = this.editeDcodigo
                this.desserts[index].name = this.editeDnombre
                this.desserts[index].country = this.editeDciudad
                this.desserts[index].cell = this.editeDtelefono
                this.desserts[index].direccion = this.editeDdireccion
                this.desserts[index].nombreAlmacen = this.editeDnombreAlmacen

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
            this.direccion_almacen = ''
            this.nombre_almacen = ''
        },
        closeeditarDialog() {
            this.editarDialog = false;
            this.editeDcodigo = ''
            this.editeDnombre = ''
            this.editeDciudad = ''
            this.editeDtelefono = ''
            this.editeDdireccion = ''
            this.editeDnombreAlmacen = ''
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
    position: relative;
}

#left {
    width: 20%;
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
    width: 70%;
    margin-left: 25%;
    margin-top: 2%;
    position: absolute;
}

.right {
    border: 1px solid;
}
</style>