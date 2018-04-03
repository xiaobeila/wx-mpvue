import request from './request'

let userId = 0
var userInfo = wx.getStorageSync('user_info')
if (userInfo && userInfo.user_id) {
  userId = userInfo.user_id
};

const api = {
  /**
   * newsList 获取资讯列表
   */
  getNewsList: (r) => request.get('api/information/index', { user_id: userId })
}

export default api
