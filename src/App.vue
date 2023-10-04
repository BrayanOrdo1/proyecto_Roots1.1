<template>
  <v-card>
   <v-layout>
    
     <v-navigation-drawer 
       permanent @click="rail=false"
       expand-on-hover
       rail
       color="black"
       >
     
       <v-list>
         <v-list-item
         
         > <v-img src="../src/assets/Roots.png" style="border-radius: 150px; width:80%; margin:0 auto;"></v-img></v-list-item>
       </v-list>

       <v-divider></v-divider>

       <v-list density="compact" nav>
         <v-list-item prepend-icon="mdi mdi-home" title="Home" value="myfiles" router-link to='/Home'></v-list-item>
         <v-list-item prepend-icon="mdi mdi-content-cut" title="Tickets" value="shared" router-link to='/tickets'></v-list-item>
         <v-list-item prepend-icon="mdi mdi-cash-multiple" title="Nomina" value="nomina" router-link to='/Nomina' ></v-list-item>
         <v-list-item prepend-icon="mdi mdi-package-variant-closed" title="Inventario" value="Inventory" ></v-list-item>
         <v-list-item prepend-icon="mdi mdi-account-group" title="Clientes" value="clientes" router-link to="/clientes"></v-list-item>
         <v-list-item prepend-icon="mdi mdi-account-circle" title="Perfiles" value="profiles" router-link to="/usuarios"></v-list-item>
         <v-list-item prepend-icon="mdi mdi-account-circle" title="login" value="login" router-link to="/login"></v-list-item>
       </v-list>
     </v-navigation-drawer>
     <v-main  style="display:block;height: 100%;"><router-view/></v-main>
     <v-app-bar>
      <div class="div_superior">
        <h1 style="margin-left: 2%;">Welcome</h1>
   
        <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/lego/7.jpg"
         class="coso"></v-list-item>
         <h1 class="cosita">
            <v-btn icon="$vuetify" variant="plain">
          </v-btn>germen niña</h1>
        </div>
    </v-app-bar>
   </v-layout>
   
 </v-card>
 
</template>

<script>
// import Add_cliente from './components/form_cli.vue'

export default {
 name: 'App',

 components: {
   // Add_cliente
 },

 data() {
   return {
     drawer: true,
     rail: true,
   }
 },
}
</script>
<style>
.div_superior{
  background-color: #000000;
  width: 100%;
  height: 65px; 
  border: 5px solid #3b3b3b;
  color: white;
  position: relative;
}
.coso{
  float: right;  
  margin-top: -2.8%;
  position: relative;
}
.cosita{
  float: right;  
  margin-top: -2.7%;
  margin-right: 5%;
  font-size: 180%;
  position: relative;
}</style>
