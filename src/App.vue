<template>
  <v-card>
    <v-layout>

      <v-navigation-drawer permanent @click="rail = false" expand-on-hover rail color="black">

        <v-list>
          <v-list-item> <v-img src="../src/assets/Roots.png"
              style="border-radius: 150px; width:80%; margin:0 auto;"></v-img></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi mdi-home" title="Home" value="myfiles" router-link to='/Home'></v-list-item>
          <v-list-item prepend-icon="mdi mdi-content-cut" title="Tickets" value="shared" router-link
            to='/tickets'></v-list-item>
          <v-list-item prepend-icon="mdi mdi-cash-multiple" title="Nomina" value="nomina" router-link
            to='/Nomina'></v-list-item>
          <v-list-item prepend-icon="mdi mdi-package-variant-closed" title="Inventario" value="Inventory"></v-list-item>
          <v-list-item prepend-icon="mdi mdi-account-group" title="Clientes" value="clientes" router-link
            to="/clientes"></v-list-item>
          <v-list-item prepend-icon="mdi mdi-account-circle" title="Perfiles" value="profiles" router-link
            to="/usuario"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="display:block;height: 100%;"><router-view /></v-main>
      <v-app-bar>
        <div class="div_superior">
          <div id="titulo">
          <h1>Welcome</h1>
        </div>
        <div id="user">
          <v-list-item prepend-avatar="https://randomuser.me/api/portraits/lego/7.jpg" class="coso"></v-list-item>
          <h1 class="cosita">
            <v-btn type="button" class="btn btn-outline-primary mx-2" router-link to="/login" data-bs-toggle="modal">
               Log in
            </v-btn>
            <!-- Cerrar sesión -->
            <v-btn class="btn btn-outline-danger me-2" data-bs-toggle="modal" @click="signout">
              Log out
            </v-btn>
            <v-btn class="btn btn-outline-danger me-2" router-link to="/Home" data-bs-toggle="modal">
              regresar a inicio
            </v-btn>
          </h1>
          </div>
        </div>
      </v-app-bar>
    </v-layout>

  </v-card>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'App',
  

  components: {
    
  },

  data() {
    return {
      drawer: true,
      rail: true,
    }
  },
  computed: {
    ...mapGetters(['existeUsuario'])
  }
}
</script>
<style>
.div_superior {
  background-color: #000000;
  width: 100%;
  height: 65px;
  border: 3px solid #3b3b3b;
  color: white;
  position: absolute;
}
.coso {
  float: right;
  margin-top: -2.3%;
  position: relative;
}

.cosita {
  float: right;
  margin-top: -2.3%;
  margin-right: 5%;
  font-size: 180%;
  position: relative;
}
.ft{
  background-color: red;
  height: 80%;
}
.v-navigation-drawer.active {
  background-color: black;
}
</style>
