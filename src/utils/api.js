import request from './request'

let userId = 0
var userInfo = wx.getStorageSync('user_info')
if (userInfo && userInfo.user_id) {
  userId = userInfo.user_id
};

export function getNewsList ({ page = 1 } = {}) {
  let params = {
    user_id: userId,
    page: page
  }
  return request.get('api/information/index', params)
}

export function getNewsDetail ({ id = 0 } = {}) {
  let params = {
    user_id: userId
  }
  return request.get(`api/information/detail/${id}`, params)
}
