<template>
  <div class="w1240 flex-column">
    <div class="header df">
      <div style="width: 412px;height: 280px;border: 1px solid #eee"></div>
      <div class="profile-container flex-column">
        <h3 class="title">羚甲基纤维素闪蒸尾气中甲乙醇回收技术中加乙醇回收技术</h3>
        <p class="progress">成果画像信息完整度:90%</p>
        <p class="profile">简介：创新性的实现了尾气中甲醇、乙醇的有效回收利用，获得了一定的的经济效益，该技术也可以应用于含有机物的尾气处理领域。</p>
        <div class="profile-contact df align-center">
          <el-button style="width: 255px;height: 58px;font-size: 20px"
                     type="primary">联系技术方
          </el-button>
          <div class="price">
            <span>合作价格</span>
            <span class="meet">面议/3万元</span>
            <span class="read-num"><i class="el-icon-view"></i> 1345人浏览</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom flex-sb">
      <div class="item flex-column align-center">
        <span class="content">应用技术成果</span>
        <span class="title">所属类别</span>
      </div>
      <div class="item flex-column align-center">
        <span class="content">3801270940128011</span>
        <span class="title">专利号</span>
      </div>
      <div class="item flex-column align-center">
        <span class="content">外观设计专利</span>
        <span class="title">专利类型</span>
      </div>
      <div class="item flex-column align-center">
        <span class="content">信息科技技术</span>
        <span class="title">行业分类</span>
      </div>
      <div class="item flex-column align-center">
        <span class="content">企业</span>
        <span class="title">行业分类</span>
      </div>
      <div class="item flex-column align-center">
        <span class="content">西南地区</span>
        <span class="title">行业分类</span>
      </div>
      <div class="item flex-column align-center">
        <span class="content">2019年11月11日</span>
        <span class="title">发布时间</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SummaryDetailProfile"
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
