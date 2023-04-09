<template>
<div class="policy-rules">
  <div class="header-container">
    <div class="full-container">
      <div class="bread-list">
        <div class="top-search">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{name:'TheIndex'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item>帮助中心</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
    </div>
    <div class="policy-content w1240">
      <img src="../assets/images/help.png"
           style="width: auto;height: auto;max-width: 100%;max-height: 100%;"
           alt="">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "ResultActive"
};
</script>

<style lang="scss">
.policy-rules {
  background: #fff;
.policy-content{
  display: flex;
  //padding-top: 50px;
  .left-nav{
    div{
      display: flex;
      align-items: center;
      font-size: 24px;
      padding: 10px 20px;
      margin-bottom: 30px;
      img{
        width: 28px;
        height: 30px;
        margin-right: 12px;
      }
      span{
        &:hover{
          cursor: pointer;
          color: #F47F45;
        }
      }
    }
  }
  .list{
    margin-left: 90px;
    width: 890px;
    h3,p{
      margin: 0;
      font-weight: 300;
    }
    h3{
      font-size: 38px;
      margin-bottom: 40px;
    }
    div{
      display: flex;
      justify-content: space-between;
      margin-bottom: 40px;
      font-size: 18px;
      span:nth-of-type(1){
        display: inline-block;
        width: 645px;
      }
      span:nth-of-type(2){
        font-size: 18px;
        color: #000000;
      }
      &:hover{
        cursor: pointer;
        color: #F47F45;
      }
    }
  }
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
    justify-content: space-between;
    ;
    .news-desc {
      width: 736px;
      margin-left: 60px;
    }

    img {
      width: 426px;
      height: 267px;
      &:hover{
        cursor: pointer;
      }
    }

    h3 {
      margin: 0;
      font-size: 30px;
      padding-bottom: 30px;
      &:hover{
        cursor: pointer;
        color: #E68140
      }
    }

    p {
      margin: 0;
      font-size: 24px;
      padding-bottom: 30px;
      &:hover{
        cursor: pointer;
        color: #E68140
      }
    }

    span {
      font-size: 24px;
    }
  }
  .news-tab{
    width: 1240px;
    margin: 0 auto;
    font-size: 20px;
    margin-top: 20px;
    span{
      margin-left: 58px;
      &:hover{
        cursor: pointer;
      }
      &:nth-of-type(2){
        color: #ffffff;
        padding: 8px 30px;
        background: #E1660D;
      }
      &:nth-of-type(1):hover{
        color: #E1660D;
      }
    }
  }
  .w1240{
    width: 1240px;
    margin: 0 auto;
  }
  .result-room{
    width: 100%;
    display: flex;
    justify-content: space-between;
    .result-room-item{
      width: 286px;
      height: 286px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 0px 2px 2px 0px rgba(8,1,3,0.13);
      &:hover{
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
      img{
        width: 286px;
      }
      div{
        background: #ffffff;
        font-size: 16px;
        color: #232326;
        width: 100%;
        text-align: center;
        padding: 12px 0;
        &:hover{
          cursor: pointer;
          color: #E68140 ;
        }
      }
    }

  }
  .avatar-container{
    margin-top: 4px;
    margin-bottom: 8px;
    .result-room-item{
      font-size: 0;
      &:hover{
        cursor: pointer;
      }
      background: #ffffff;
      img{
        width: 146px;
        height: 146px;
        margin-top: 20px;
      }
      .profession{
        font-size: 20px;
        color: #000000;
        padding: 0;
        padding-top: 28px;
      }
      .profession-line{
        width: 26px;
        height: 5px;
        background: #E68140;
        padding: 0;
        margin-bottom: 15px;
        margin-top: 6px;
      }
      .profession-role{
        font-size: 16px;
        color: #000000;
        padding: 0;
      }
    }
  }
}
</style>
