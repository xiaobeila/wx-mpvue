<template>
  <div class="container">
    <swiper autoplay, indicator-dots, circular>
      <swiper-item v-for="item of informationBanner" v-bind:key="item">
        <img v-bind:src="item.image" class="slide-image" width="355" height="150" />
      </swiper-item>
    </swiper>
    <div class="news-wrap">
        <news-item v-for="item of information" :news="item" :key="item.newsid"></news-item>
    </div>
    <div class="nomore">只给看这么多</div>
  </div>
</template>

<script>
import wx from 'wx'
import { getNewsList } from '@/utils/api'
import newsItem from '@/components/news-item'

const uiti = global.uiti

export default {
  data () {
    return {
      page: 1,
      hasMore: true,
      information: [],
      informationBanner: []
    }
  },

  created () {
    console.log(uiti.formatTime('2018-04-03'))
    // console.log(uiti)
  },
  components: {
    newsItem
  },

  computed: {
  },

  mounted () {
    this.getNewsList()
  },

  methods: {
    async getNewsList () {
      if (!this.hasMore) return

      let data = await getNewsList({ page: this.page++ })
      //  轮播图
      if (data.informationBanner.length) {
        this.informationBanner = data.informationBanner
      }
      // 资讯列表
      if (data.information.items.length) {
        this.information.push.apply(this.information, data.information.items)
      } else {
        this.hasMore = false
      }
      wx.stopPullDownRefresh()
    }
  },

  async onPullDownRefresh () { // 下拉刷新
    this.page = 1
    this.information = []
    this.hasMore = true
    await this.getNewsList()
    wx.stopPullDownRefresh()
  },

  onReachBottom () { // 上拉加载
    this.getNewsList()
  },

  onUnload () { // 清空状态
    this.page = 1
    this.information = []
    this.hasMore = true
  }
}
</script>

<style lang="less" scoped>
swiper {
  width: 100%;
  height: 200px;
}

.slide-image {
  width: 100%;
  height: 100%;
}

swiper .wx-swiper-dot {
  width: 10px;
  height: 10px;
  display: inline-flex;
  margin-left: 20rpx;
  justify-content: space-between;
}

swiper .wx-swiper-dot::before {
  content: "";
  flex-grow: 1;
  border-radius: 50%;
  border: 2px solid #fff;
}

swiper .wx-swiper-dot-active::before {
  background: #fff;
}

.news-wrap {
  padding: 0 10px;
}

.nomore {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 14px;
  color: #ccc;
}
</style>
