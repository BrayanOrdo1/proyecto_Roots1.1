<template>
   <v-card>
    <v-layout>
      <v-navigation-drawer 
        permanent @click="rail=false"
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/16.jpg"
            title="Hello"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi mdi-home" title="Home" value="myfiles" router-link to='/compras'></v-list-item>
          <v-list-item prepend-icon="mdi mdi-content-cut" title="Tickets" value="shared" router-link to='/ventas'></v-list-item>
          <v-list-item prepend-icon="mdi mdi-cash-multiple" title="Nomina" value="nomina" ></v-list-item>
          <v-list-item prepend-icon="mdi mdi-package-variant-closed" title="Inventario" value="Inventory" ></v-list-item>
          <v-list-item prepend-icon="mdi mdi-account-group" title="Clientes" value="clientes" router-link to="/clientes"></v-list-item>
          <v-list-item prepend-icon="mdi mdi-account-circle" title="Perfiles" value="profiles"></v-list-item>
          <v-list-item prepend-icon="mdi mdi-account-circle" title="login" value="profiles" router-link to="/login"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main  style="display:block;height: 100%;"><router-view/></v-main>
    </v-layout>
  </v-card>
</template>

<script>
// import login_1 from './components/login.vue'

export default {
  name: 'App',

  components: {
    // login_1
  },

  data() {
    return {
      drawer: true,
      rail: true,
    }
  },
}
</script>
