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
import 'video.js/dist/video-js.css'
import Video from 'video.js'
import video_zhCN from 'video.js/dist/lang/zh-CN.json'
import video_en from 'video.js/dist/lang/en.json'

Video.addLanguage('zh-CN', video_zhCN);
Video.addLanguage('en', video_en);

Vue.config.productionTip = false
Vue.use(dataV)
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
