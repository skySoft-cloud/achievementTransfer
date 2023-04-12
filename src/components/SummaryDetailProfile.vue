<template>
  <div class="w1240 flex-column">
    <div class="header df">
      <div style="width: 412px;height: 280px;border: 1px solid #eee">{{summaryInfo.produceImgs}}</div>
      <div class="profile-container flex-column">
        <h3 class="title">{{summaryInfo.title}}</h3>
<!--        TODO:数据字段？-->
        <p class="progress">成果画像信息完整度:90%</p>
        <p class="profile">{{summaryInfo.remark}}</p>
        <div class="profile-contact df align-center">
<!--          TODO:业务逻辑-->
          <el-button style="width: 255px;height: 58px;font-size: 20px"
                     type="primary">联系技术方
          </el-button>
          <div class="price">
            <span>合作价格</span>
<!--            TODO：字典-->
            <span class="meet">面议/{{ summaryInfo.cooperateAmount }}</span>
            <span class="read-num"><i class="el-icon-view"></i> {{summaryInfo.seeNum}}人浏览</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom flex-sb">
      <div class="item flex-column align-center">
<!--        TODO:字典-->
        <span class="content">{{summaryInfo.type}}</span>
        <span class="title">所属类别</span>
      </div>
      <div class="item flex-column align-center">
        <span class="content">{{summaryInfo.patentNo}}</span>
        <span class="title">专利号</span>
      </div>
      <div class="item flex-column align-center">
<!--        TODO:字典-->
        <span class="content">{{summaryInfo.patentType}}</span>
        <span class="title">专利类型</span>
      </div>
      <div class="item flex-column align-center">
        <span class="content">{{summaryInfo.domain}}</span>
        <span class="title">行业分类</span>
      </div>
      <div class="item flex-column align-center">
        <span class="content">{{summaryInfo.appRange}}</span>
        <span class="title">所有人</span>
      </div>
      <div class="item flex-column align-center">
        <span class="content">{{summaryInfo.city}}</span>
        <span class="title">所属地区</span>
      </div>
      <div class="item flex-column align-center">
        <span class="content">{{summaryInfo.createTime}}</span>
        <span class="title">发布时间</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SummaryDetailProfile",
  props:['summaryInfo']
};
</script>

<style lang="scss"
       scoped>
@import "@/styles/_variables.scss";

.profile-container {
  margin-left: 20px;
  max-width: 736px;

  .title {
    font-size: 26px;
    margin-top: 0;
    margin-bottom: 20px;
  }

  .progress {
    margin-top: 0;
    color: $main-color;
    font-size: 18px;
  }

  .profile {
    margin: 0 0 20px 0;
    font-size: 20px;
    line-height: 2;
  }

  .price {
    margin-left: 30px;
  }

  .meet {
    font-size: 40px;
    color: #F50F0F;
    margin-left: 24px;
    margin-right: 22px;
  }
}
.bottom{
  padding-top: 40px;
  padding-bottom: 40px;
  .item{
    padding: 0 30px;
    font-size: 18px;
    &:nth-of-type(-n+6){
      border-right: 1px solid #eee;
    }
    .title{
      padding-top: 16px;
      color: #737373;
    }
  }
}
.read-num{
  color: $text-color-grey;
}
</style>
