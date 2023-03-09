import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import router from './router'
import store from './store'
import dataV from '@jiaminghi/data-view'
import '@/assets/css/main.css'
import '@/assets/css/common.css'
import './assets/lib/flexible'
import 'element-ui/lib/theme-chalk/index.css';
// import '@/conponents/test/container.css' 该文件为封装的动态创建dom布局框架的样式
import '@/components/test/container.css'

Vue.config.productionTip = false
Vue.use(dataV)
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
