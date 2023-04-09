<template>
  <div class="w1240 flex-column">
    <div class="header df">
      <div style="width: 412px;height: 280px;border: 1px solid #eee"></div>
      <div class="profile-container flex-column">
        <h3 class="title">羚甲基纤维素闪蒸尾气中甲乙醇回收技术中加乙醇回收技术</h3>
        <p class="progress">合作方式：合同</p>
        <div>
          <span>预算价格</span>
          <span class="meet">面议/3万元</span>
        </div>
          <div class="profile-contact flex-sb">
            <el-button style="width: 255px;height: 58px;font-size: 20px"
                       type="primary">联系需求方</el-button>
            <span class="read-num"><i class="el-icon-view"></i> 1345人浏览</span>
          </div>
      </div>
    </div>
    <div class="bottom flex-c-c">
      <div class="item flex-column align-center">
        <span class="content">生成技术</span>
        <span class="title">行业</span>
      </div>
      <div class="item flex-column align-center">
        <span class="content">西南地区</span>
        <span class="title">所属地区</span>
      </div>
      <div class="item flex-column align-center">
        <span class="content">智能化</span>
        <span class="title">专利类型</span>
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
    font-size: 18px;
  }

  .profile {
    margin: 0 0 20px 0;
    font-size: 20px;
    line-height: 2;
  }

  .meet {
    font-size: 40px;
    color: #F50F0F;
    margin-left: 24px;
    margin-right: 22px;
  }
  .profile-contact{
    margin-top: 60px;
  }
}
.bottom{
  padding-top: 40px;
  padding-bottom: 40px;
  .item{
    width: 25%;
    padding: 0 30px;
    font-size: 18px;
    &:nth-of-type(-n+3){
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
