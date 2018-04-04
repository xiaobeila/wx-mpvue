<template>
  <div class="container">
      <h1 class="info-title">{{info.title}}</h1>
      <div class="info-tag">
        <img src="/static/images/info/recommend.png" alt="">
        <div class='recommend'>
          <p>{{info.tagName}}</p>
          <p>{{info.publishAt}}</p>
        </div>
      </div>
      <rich-text class="info-content" :nodes="info.content"></rich-text>
  </div>
</template>

<script>
import { getNewsDetail } from '@/utils/api'

export default {
  data () {
    return {
      info: [],
      id: null
    }
  },
  mounted () {
    const id = this.$root.$mp.query.id
    if (!id) {
      return wx.navigateBack()
    }
    this.id = id
    this.getNewsDetail(id)
  },
  methods: {
    async getNewsDetail (id) {
      let data = await getNewsDetail({ id })
      this.info = data
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  padding: 15px 15px 0px 15px;
}

.info-title {
  width: 100%;
  font-size: 16px;
  color: #333;
  height: auto;
  overflow: hidden;
}

.info-tag {
  padding: 20px 0;
  color: #7f8d96;
  width: 100%;
}

.info-tag image {
  width: 25px;
  height: 25px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 4.5px;
}

.info-tag .recommend {
  display: inline-block;
  vertical-align: middle;
  color: #999;
  font-size: 14px;
  margin-left: 5px;
}

.info-content {
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 2px;
  font-size: 12px;
  color: #666;
  margin-bottom: 50px;
  overflow: hidden;
}
</style>
