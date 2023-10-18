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
          <v-list-item prepend-icon="mdi mdi-content-cut" title="Tickets" value="shared" router-link
            to='/tickets'></v-list-item>
          <v-list-item prepend-icon="mdi mdi-package-variant-closed" title="Inventario" value="Inventory" router-link
            to='/Inventario'></v-list-item>
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
            <h1 class="cosita">
              <!-- Botón de inicio de sesión con v-if -->
              <v-btn v-if="!$store.state.isAuthenticated" type="button" class="btn btn-outline-primary mx-2" router-link
                to="/login">
                Inicia sesión
              </v-btn>
              <!-- Botón de cerrar sesión con v-if -->
              <v-btn v-if="$store.state.isAuthenticated" class="btn btn-outline-danger me-2" @click="logout">
                Cerrar sesión
              </v-btn>
            </h1>
          </div>
        </div>
      </v-app-bar>
    </v-layout>

  </v-card>
  <div v-if="!$store.state.isAuthenticated">
    <home />
  </div>
</template>

<script>
import home from './components/home.vue'
export default {
  name: 'App',
  components: {
    home
  },

  data() {
    return {
      drawer: true,
      rail: true,
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/');
    },
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

.ft {
  background-color: red;
  height: 80%;
}

.v-navigation-drawer.active {
  background-color: black;
}
</style>
