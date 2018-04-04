<template>
  <div class="container">
    <div class="nomore">只给看这么多</div>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log('personal')
  }
}
</script>

<style lang="less" scoped>
.nomore {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 14px;
  color: #ccc;
}
</style>
