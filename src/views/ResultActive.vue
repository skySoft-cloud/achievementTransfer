<template>
  <div class="policy-rules">
    <div class="header-container">
        <div class="bread-list">
          <div class="top-search">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{name:'TheIndex'}">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{name: 'ActiveNews'}">活动新闻</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
        <el-divider class="top-divider"></el-divider>
      <div class="w1240 header df" style="padding-bottom: 40px;">
        <div style="width: 412px;height: 280px;border: 1px solid #eee;margin-right: 40px"></div>
        <div class="profile-container flex-column" style="flex: 1">
          <div class="flex-sb">
            <h3 class="title">羚甲基纤维素闪蒸尾气中甲乙醇回收技术中加乙醇回收技术</h3>
            <el-tag type="success">进行中</el-tag>
<!--            <el-tag type="danger">已结束</el-tag>-->
          </div>
          <p class="progress">活动时间：2019年11月11日</p>
          <p class="progress">活动时间：中国成都高新区天府达到666号招商演艺中心</p>
          <div class="profile-contact flex-sb">
            <el-button style="width: 255px;height: 58px;font-size: 20px;margin-top: 60px"
                       type="primary">报名参加</el-button>
<!--            <el-button style="width: 255px;height: 58px;font-size: 20px"-->
<!--                       type="primary">活动已结束</el-button>-->
          </div>
        </div>
      </div>
      <div class="result-active-content">
        <div class="w1240 flex-column">
          <content-header title="活动简介">
            <template #content>本技术国内尚无报道，具有独创性，应用范围广，具有广泛的市场前景;此技术授入运行，极大的减少甲己励的采购费用。发甲乙择维累生产过程中甲己励单托越大。利用此技术取得的效益越大。
              本技术脆等有效实现尾气中甲醇、乙酶的资源化回收，使得甲乙醇的回收率高，收益大，另外，本技术不仅能有效减少有机度气的排放，还赔有效减少粉尘排放，实现清洁化工生产，本技术还
              可应用于含有机物的尾气处理领域，能将尾气中的有机物有效回收利用。本技术国内尚无报道，具有独创性，应用范围广，具有广泛的市场前景;此技术授入运行，极大的减少甲己励的采购费用。
              发甲乙择维累生产过程中甲己励单托越大。利用此技术取得的效益越大。本技术脆等有效实现尾气中甲醇、乙酶的资源化回收，使得甲乙醇的回收率高，收益大，另外，本技术不仅能有效减少
              有机度气的排放，还赔有效减少粉尘排放，实现清洁化工生产，本技术还可应用于含有机物的尾气处理领域，能将尾气中的有机物有效回收利用。
            </template>
          </content-header>
          <content-header title="活动详情">
            <template #content>本技术国内尚无报道，具有独创性，应用范围广，具有广泛的市场前景;此技术授入运行，极大的减少甲己励的采购费用。发甲乙择维累生产过程中甲己励单托越大。利用此技术取得的效益越大。
              本技术脆等有效实现尾气中甲醇、乙酶的资源化回收，使得甲乙醇的回收率高，收益大，另外，本技术不仅能有效减少有机度气的排放，还赔有效减少粉尘排放，实现清洁化工生产，本技术还
              可应用于含有机物的尾气处理领域，能将尾气中的有机物有效回收利用。本技术国内尚无报道，具有独创性，应用范围广，具有广泛的市场前景;此技术授入运行，极大的减少甲己励的采购费用。
              发甲乙择维累生产过程中甲己励单托越大。利用此技术取得的效益越大。本技术脆等有效实现尾气中甲醇、乙酶的资源化回收，使得甲乙醇的回收率高，收益大，另外，本技术不仅能有效减少
              有机度气的排放，还赔有效减少粉尘排放，实现清洁化工生产，本技术还可应用于含有机物的尾气处理领域，能将尾气中的有机物有效回收利用。
            </template>
          </content-header>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentHeader from "@/components/ContentHeader";

export default {
  name: "ResultActive",
  components: { ContentHeader }
};
</script>

<style lang="scss">
.policy-rules {
  background: #fff;

  .result-active-content {
    background: #FAFAFA;
    padding-top: 50px;
  }

  .header-container {
    .top-search {
      display: flex;
      justify-content: space-between;
      align-items: center;
      //margin-bottom: 20px;
      padding: 18px 0 24px 0;
    }

    .bread-list {
      width: 1240px;
      margin: 0 auto;
    }
  }

  .full-container {
    border-bottom: 1px solid #eeeeee;
  }

  .page-size-class {
    //background: #F5F5F5;
    padding-bottom: 76px;
    padding-top: 40px;

    div {
      width: 1240px;
      margin: 0 auto;
      text-align: center;
      //background: #F5F5F5;
    }
  }

  .el-pagination.is-background .el-pager li {
    background: #ffffff;

  }

  .news-list-item {
    width: 1240px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;;

    .news-desc {
      width: 736px;
      margin-left: 60px;
    }

    img {
      width: 426px;
      height: 267px;

      &:hover {
        cursor: pointer;
      }
    }

    h3 {
      margin: 0;
      font-size: 30px;
      padding-bottom: 30px;

      &:hover {
        cursor: pointer;
        color: #E68140
      }
    }

    p {
      margin: 0;
      font-size: 24px;
      padding-bottom: 30px;

      &:hover {
        cursor: pointer;
        color: #E68140
      }
    }

    span {
      font-size: 24px;
    }
  }

  .news-tab {
    width: 1240px;
    margin: 0 auto;
    font-size: 20px;
    margin-top: 20px;

    span {
      margin-left: 58px;

      &:hover {
        cursor: pointer;
      }

      &:nth-of-type(2) {
        color: #ffffff;
        padding: 8px 30px;
        background: #E1660D;
      }

      &:nth-of-type(1):hover {
        color: #E1660D;
      }
    }
  }

  .w1240 {
    width: 1240px;
    margin: 0 auto;
  }

  .result-room {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .result-room-item {
      width: 286px;
      height: 286px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 0px 2px 2px 0px rgba(8, 1, 3, 0.13);

      &:hover {
        cursor: pointer;
        /* &:before{
           text-align: center;
           line-height: 286px;
           color: #ffffff;
           font-size: 14px;
           font-weight: 700;
           content: "行业分类 | 合作方式 | 联系企业";
           display: block;
           position: absolute;
           top: 0;
           left: 0;
           right: 0;
           bottom: 0;
           background: #E68140;
           opacity: 0.7;
         }*/
      }

      img {
        width: 286px;
      }

      div {
        background: #ffffff;
        font-size: 16px;
        color: #232326;
        width: 100%;
        text-align: center;
        padding: 12px 0;

        &:hover {
          cursor: pointer;
          color: #E68140;
        }
      }
    }

  }

  .avatar-container {
    margin-top: 4px;
    margin-bottom: 8px;

    .result-room-item {
      font-size: 0;

      &:hover {
        cursor: pointer;
      }

      background: #ffffff;

      img {
        width: 146px;
        height: 146px;
        margin-top: 20px;
      }

      .profession {
        font-size: 20px;
        color: #000000;
        padding: 0;
        padding-top: 28px;
      }

      .profession-line {
        width: 26px;
        height: 5px;
        background: #E68140;
        padding: 0;
        margin-bottom: 15px;
        margin-top: 6px;
      }

      .profession-role {
        font-size: 16px;
        color: #000000;
        padding: 0;
      }
    }
  }
}
</style>
