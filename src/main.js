import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import router from './route/index'

Vue.config.productionTip = false;
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.js'

new Vue({
  router, //看这儿
  render: h => h(App),
}).$mount('#app')





