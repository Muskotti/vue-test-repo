import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from "./store/MyStore.js";
import VueRouter from 'vue-router'
import MyForm from "./components/MyForm";
import MyList from "./components/MyList";

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: { name: 'form-fill' } },
    { path: '/form', name: 'form-fill', component: MyForm },
    { path: '/list', name: 'list', component: MyList },
  ]
})

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
