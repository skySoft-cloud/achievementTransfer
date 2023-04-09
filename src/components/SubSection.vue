<template>
<div class="sub-section" :style="{background: $attrs.background}">
  <div class="sub-section-content w1240 flex-column align-center">
    <h3 :style="{color: $attrs.color}">{{$attrs.title}}</h3>
    <span class="shadow-text" :style="{color:$attrs.shadowColor,opacity:$attrs.opacity}">{{$attrs.shadowText}}</span>
    <div class="line"></div>
    <slot name="content"></slot>
    <div class="more-btn" v-if="!$attrs.hideBtn">
      <el-button type="primary" @click="$router.push({name:$attrs.routeName})">查看更多>></el-button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "SubSection",
};
</script>

<style lang="scss" scoped>
.sub-section{
  width: 100%;
  //margin: 40px 0;
  .sub-section-content{
    position: relative;
    h3{
      margin: 30px 0 30px 0;
      font-size: 40px;
      font-weight: bold;
      color: #FFFFFF;
    }
    .line{
      width: 77px;
      height: 7px;
      background: #E68140;
      margin: 0 0 40px 0;
    }
    .more-btn{
      margin: 40px 0 40px 0;
      .el-button{
        width: 184px;
        height: 60px;
        font-size: 20px;
      }
    }
    .shadow-text{
      font-size: 40px;
      font-weight: bold;
      position: absolute;
      top: 54px;
    }
  }
}
</style>
