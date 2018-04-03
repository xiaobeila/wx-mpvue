<template>
<a :href="news.link" class="news-item">
  <div class="news-text">
    <div class="news-title">{{news.title}}</div>
    <div class="news-info">
      <span>{{news.publishTime}}</span>
    </div>
  </div>
  <img :src="news.image" mode="aspectFill" alt="" class="news-img">
</a>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.news-item {
  display: flex;
  height: 90px;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.news-img {
  width: 140px;
  height: 75px;
}
.news-text {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.news-title {
  font-size: 15px;
}
.news-info {
  color: #aaa;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
}
</style>
