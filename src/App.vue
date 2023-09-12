<template>
  <v-app>
    <v-main>
      <login_1/>
    </v-main>
  </v-app>
</template>

<script>
import login_1 from './components/login.vue';

export default {
  name: 'App',

  components: {
    login_1
  },

  data: () => ({
    //
  }),
}
</script>
