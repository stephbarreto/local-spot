import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
//plugins
import NowUIKit from './plugins/now-ui-kit';

import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

Vue.config.productionTip = false;
Vue.use(NowUIKit);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
