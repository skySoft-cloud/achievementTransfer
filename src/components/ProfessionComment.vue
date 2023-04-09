<template>
<div class="summary-idea">
  <content-header title="已邀请专家">
    <template slot="content">
      <div class="avatar-list">
        <el-avatar :size="80" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <el-avatar :size="80" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <el-avatar :size="80" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      </div>
    </template>
  </content-header>
  <content-header title="专家评价">
    <template slot="content">
      <div class="mark-list">
        <div class="mark-list-item flex-sb">
          <div class="flex-column">
            <span class="name">贾乃亮</span>
            <div class="profile">
              <span>工作单位</span>
              <span>研究领域</span>
              <span>职称</span>
            </div>
          </div>
          <div class="mark-content">
            本技术国内尚天报道，具有独创性，应用范国广，具有广泛的市场前票;此技术投入远行，能极大的减少甲乙酶的采购费用，发甲乙纤维素生产过程
            中甲己静单样超大，利用此技术取得的效益越大。本技术能够有效实现尾气中醇、乙牌的资源化回农，使得甲乙醇的回收率高，收益大，男外本技
            术不仅能有效减少有机度气的转放，还能有败减少粉尘排放，实现清洁化工生产。本技术还可应用于含有机物的尾气处理领娘，能将尾气中的有机
            物有效回收利用。
          </div>
        </div>
        <div class="mark-list-item flex-sb">
          <div class="flex-column">
            <span class="name">贾乃亮</span>
            <div class="profile">
              <span>工作单位</span>
              <span>研究领域</span>
              <span>职称</span>
            </div>
          </div>
          <div class="mark-content">
            本技术国内尚天报道，具有独创性，应用范国广，具有广泛的市场前票;此技术投入远行，能极大的减少甲乙酶的采购费用，发甲乙纤维素生产过程
            中甲己静单样超大，利用此技术取得的效益越大。本技术能够有效实现尾气中醇、乙牌的资源化回农，使得甲乙醇的回收率高，收益大，男外本技
            术不仅能有效减少有机度气的转放，还能有败减少粉尘排放，实现清洁化工生产。本技术还可应用于含有机物的尾气处理领娘，能将尾气中的有机
            物有效回收利用。
          </div>
        </div>
      </div>
    </template>
  </content-header>
</div>
</template>

<script>
import ContentHeader from "@/components/ContentHeader";
export default {
  name: "ProfessionComment",
  components: { ContentHeader }
};
</script>

<style lang="scss" scoped>
.avatar-list{
  .el-avatar{
    margin-right: 40px;
  }
}

.mark-list {
  .mark-list-item{
    padding: 10px 30px;
    background: #fff;
    margin-bottom: 18px;
    border: 1px solid #E8E5E5;
    &:hover{
      cursor: pointer;
      border-color: #E1580D;
    }
    .name{
      padding-left: 8px;
    }
    .profile{
      color: #8b8b8b;
      span{
        font-size: 14px;
        padding: 0 8px;
        &:nth-of-type(-n+2){
          border-right: 1px solid #8b8b8b;
        }
      }
    }
  }
  .mark-content {
    width: 900px;
    font-size: 14px;
    border-left: 1px solid #eee;
    padding-left: 30px;
  }
}
</style>
