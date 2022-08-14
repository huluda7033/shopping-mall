import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false;
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.js'

new Vue({
  render: h => h(App),
}).$mount('#app')
