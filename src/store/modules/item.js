import { getNewsList } from '@/utils/api'
import { NEWS_DETAIL, CLEAR_NEWS } from '@/store/mutations-type'

const state = {
  news: {},
  newsDetails: [] // 缓存资讯详情数据
}

const mutations = {
  [NEWS_DETAIL]: (state, { data, match }) => {
    if (!match) {
      state.newsDetails.unshift(data)
    }
    state.news = data
  },
  [CLEAR_NEWS]: (state) => {
    state.news = {}
  }
}

const actions = {
  async getNewsList ({ state, commit }, { id }, cb) {
    const newsDetails = state.news
    const matchNews = newsDetails.find(v => v.id === id)

    if (matchNews) {
      return commit(NEWS_DETAIL, {
        data: matchNews,
        match: true
      })
    }
    let news = await getNewsList(id)
    if (!news) return
    commit(NEWS_DETAIL, {
      data: news,
      match: false
    })
  }
}

export default {
  state,
  mutations,
  actions
}
