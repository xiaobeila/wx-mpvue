import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/utils/api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    news: []
  },
  mutations: {
    news (state, data) {
      state.news = data
    }
  },
  actions: {
    async getNewsList ({ state, commit }, init) {
      const news = await api.getNewsList()
      if (!news) return
      const formatedNews = news
      if (init) {
        commit('news', formatedNews)
      } else {
        commit('news', state.news.concat(formatedNews))
      }
    }
  }
})

export default store
