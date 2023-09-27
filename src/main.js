import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import {VDatePicker} from 'vuetify/labs/VDatePicker'
import store from './stores/store'

store.dispatch('initializeStore')

loadFonts()

createApp(App)
  .use(router)
  .component("VDatePicker",VDatePicker)
  .use(vuetify)
  .use(store)
  .mount('#app')