import Vue from 'vue'
import store from '@/store'
import App from './App'

// 增加全局方法
import uiti from 'utils'
global.uiti = uiti

Vue.config.productionTip = false

const app = new Vue({
  store,
  ...App
})
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/news/news', 'pages/detail/detail', 'pages/personal/personal'],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#ed8c1f',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white',
      enablePullDownRefresh: false
    },
    tabBar: {
      color: '#999',
      selectedColor: '#ff8a00',
      backgroundColor: '#fff',
      borderStyle: '#eee',
      list: [{
        pagePath: 'pages/news/news',
        text: '资讯库',
        iconPath: 'static/images/info1.png',
        selectedIconPath: 'static/images/info2.png'
      }, {
        pagePath: 'pages/personal/personal',
        text: '我的',
        iconPath: 'static/images/personal1.png',
        selectedIconPath: 'static/images/personal2.png'
      }]
    },
    networkTimeout: {
      request: 20000,
      downloadFile: 20000
    },
    debug: false
  }
}
