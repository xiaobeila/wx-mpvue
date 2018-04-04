import wx from 'wx'
import Fly from 'flyio'
import md5 from 'js-md5'

const request = new Fly()

// 请求超时时间
request.config.timeout = 10 * 1000

// 请求URL地址
request.config.baseURL = process.env.BASE_URL

request.interceptors.request.use((config, promise) => {
  wx.showLoading({ title: '拼命加载中...' })

  // 给所有请求添加自定义header
  let timestamp = Date.parse(new Date())
  let t = timestamp / 1000
  let m = md5.hex(`xioa${t}`)

  let headers = {
    'content-type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    m: m,
    t: t
  }
  config.headers = headers
  return config
})

request.interceptors.response.use(
  (response, promise) => {
    wx.hideLoading()
    return promise.resolve(response.data)
  },
  (err, promise) => {
    wx.hideLoading()
    wx.showToast({
      title: err.message,
      icon: 'none'
    })
    return promise.resolve()
  }
)

export default request
