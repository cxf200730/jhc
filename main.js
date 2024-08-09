import App from './App'
import Fly from 'flyio/dist/npm/wx'
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
uni.setStorageSync('baseURL', 'https://wuainin-1303218521.cos.ap-nanjing.myqcloud.com/jhcimgs/')