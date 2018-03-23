<template>
  <swiper autoplay, indicator-dots, circular>
    <swiper-item v-for="item of imgUrls" v-bind:key="item">
      <img v-bind:src="item" class="slide-image" width="355" height="150"/>
    </swiper-item>
</swiper>
</template>

<script>
export default {
  data () {
    return {
      imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ]
    }
  }
}
</script>

<style lang="scss">
$color: red;
body {
  background: $color;
}

swiper {
  height: 200px;
}
.slide-image {
  width: 100%;
  height: 100%;
}
</style>