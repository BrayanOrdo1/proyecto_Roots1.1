<template>
   <router-link to="/login"></router-link>
   <router-view/>
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
