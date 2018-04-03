import wx from 'wx'
import Fly from 'flyio'
import md5 from 'js-md5'

const request = new Fly()

// 请求超时时间
request.config.timeout = 10 * 1000

// 请求URL地址
request.config.baseURL = process.env.BASE_URL

request.interceptors.request.use((config, promise) => {
  wx.showNavigationBarLoading()
  // 给所有请求添加自定义header
  let timestamp = Date.parse(new Date())
  let t = timestamp / 1000
  let m = md5.hex(`xioa${t}`)
  var userId = 0
  var userInfo = wx.getStorageSync('user_info')
  if (userInfo && userInfo.user_id) {
    userId = userInfo.user_id
  };
  let headers = {
    'content-type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    m: m,
    t: t,
    uid: userId
  }
  config.headers = headers
  return config
})

request.interceptors.response.use(
  (response, promise) => {
    wx.hideNavigationBarLoading()
    return promise.resolve(response.data)
  },
  (err, promise) => {
    wx.hideNavigationBarLoading()
    wx.showToast({
      title: err.message,
      icon: 'none'
    })
    return promise.resolve()
  }
)

export default request
