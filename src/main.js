import Vue from 'vue'
import App from './App.vue'
import './styles/index.css' // ページスタイル
import './styles/base.css' // CSSスタイル
import './styles/common.css' // 共通グローバルスタイル
import '@/assets/iconfont/iconfont.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
