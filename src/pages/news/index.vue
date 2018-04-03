<template>
  <div class="container">
    <swiper autoplay, indicator-dots, circular>
      <swiper-item v-for="item of news.informationBanner" v-bind:key="item">
        <img v-bind:src="item.image" class="slide-image" width="355" height="150" />
      </swiper-item>
    </swiper>
    <div class="news-wrap">
      <div v-if="!!news.information && !!news.information.items">
        <news-item v-for="item of news.information.items" :news="item" :key="item.newsid"></news-item>
      </div>
    </div>
    <div class="nomore">只给看这么多</div>
  </div>
</template>

<script>
import wx from 'wx'
const uiti = global.uiti
import {
  mapState,
  mapActions
} from 'vuex'
import newsItem from '@/components/news-item'

export default {
  data () {
    return {
      page: 1
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()

    console.log(uiti.formatTime('2018-04-03'))
    // console.log(uiti)
  },
  components: {
    newsItem
  },
  computed: {
    ...mapState([
      'news'
    ])
  },
  mounted () {
    this.refresh()
  },
  onPullDownRefresh () {
    this.refresh()
  },
  methods: {
    ...mapActions([
      'getNewsList'
    ]),
    async refresh () {
      await Promise.all([
        this.getNewsList(true)
      ])
      wx.stopPullDownRefresh()
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
              console.log(this.userInfo)
            }
          })
        }
      })
    }
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
