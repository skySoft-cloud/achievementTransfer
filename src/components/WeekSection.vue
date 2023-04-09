<template>
  <div class="week-section" :style="{width: $attrs.width}">
    <h3>{{ $attrs.title }}</h3>
    <div v-for="(item,index) in sectionList"
           class="week-section-item flex-sb"
           :key="index" @click="$router.push({name: item.routeName,query: {id: item.id}})">
        <span class="desc">{{ item.desc }}</span>
        <div>
          <i class="el-icon-view" style="font-size: 18px"></i>
          <span class="week-section-item-num">{{ item.num }}</span>
        </div>
      </div>
    <slot name="weekData"></slot>
  </div>
</template>

<script>
export default {
  name: "WeekSection",
  props: ["sectionList"],
  mounted () {
    console.log(this.$slots);
  }
};
</script>

<style lang="scss">
.week-section {
  width: 612px;
  h3{
    font-size: 24px;
    font-weight: bold;
    color: #000000;
    padding-bottom: 8px;
    border-bottom: 2px solid #eeeeee;;
  }
  .week-section-item{
    line-height: 2.5;
    .desc{
      &:hover{
        cursor: pointer;
        color: #E68140;
      }
    }
    .week-section-item-num{
      font-size: 16px;
      color: #818181;
      margin-left: 6px;
    }
  }
}
</style>
