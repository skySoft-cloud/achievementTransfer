<template>
  <div class="professional-pool">
    <div class="header-container">
      <div class="full-container">
        <div class="bread-list">
          <div class="top-search">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{name:'TheIndex'}">首页</el-breadcrumb-item>
              <el-breadcrumb-item>专家库</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="search-bar">
              <el-input
                clearable
                suffix-icon="el-icon-search"
                placeholder="请输入专家名"
                v-model="searchOptions.name"
              >
              </el-input>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="listData.length"  style="background: #FAFAFA;padding-top: 38px;min-height: 400px">
      <div class="w1240">
        <div class="result-room avatar-container">
          <div class="result-room-item"
               v-for="listItem in listData"
               :key="listItem.id"
               @click="goDetail(listItem.id)">
            <img :src="listItem.headUrl"
                 alt="">
            <div class="profession">{{ listItem.name }}</div>
            <div class="profession-line"></div>
            <span class="zone">{{listItem.domain}}</span>
            <div class="mask">
              <span>查看详情></span>
            </div>
          </div>
        </div>
      </div>
      <div class="page-size-class">
        <div>
          <el-pagination
            background
            :current-page="2"
            layout="prev, pager, next"
            :total="100">
          </el-pagination>
        </div>
      </div>
    </div>
    <el-empty style="height: 500px" v-if="!listData.length" :image-size="200"></el-empty>
  </div>
</template>

<script>
import { getProfessionalList } from "@/api/apiFunc";

export default {
  name: "ProfessionalPool",
  data () {
    return {
      listData: [
        {
          id: 1,
          headUrl: require("@/assets/images/专家7@2x.png"),
          name: "何晴",
          domain: '研究领域'
        },
        {
          id: 2,
          headUrl: require("@/assets/images/专家7@2x.png"),
          name: "何晴",
          domain: '研究领域'
        },
        {
          id: 3,
          headUrl: require("@/assets/images/专家7@2x.png"),
          name: "何晴",
          domain: '研究领域'
        },
        {
          id: 4,
          headUrl: require("@/assets/images/专家7@2x.png"),
          name: "何晴",
          domain: '研究领域'
        },
        // {
        //   id: 5,
        //   url: require("@/assets/images/专家7@2x.png"),
        //   name: "何晴",
        //   zone: '研究领域'
        // },
        // {
        //   id: 7,
        //   url: require("@/assets/images/专家7@2x.png"),
        //   name: "何晴",
        //   zone: '研究领域'
        // },
        // {
        //   id: 6,
        //   url: require("@/assets/images/专家7@2x.png"),
        //   name: "何晴",
        //   zone: '研究领域'
        // },
        // {
        //   id: 8,
        //   url: require("@/assets/images/专家7@2x.png"),
        //   name: "何晴",
        //   zone: '研究领域'
        // },
        // {
        //   id: 9,
        //   url: require("@/assets/images/专家7@2x.png"),
        //   name: "何晴",
        //   zone: '研究领域'
        // },
        // {
        //   id: 10,
        //   url: require("@/assets/images/专家7@2x.png"),
        //   name: "何晴",
        //   zone: '研究领域'
        // },
        // {
        //   id: 11,
        //   url: require("@/assets/images/专家7@2x.png"),
        //   name: "何晴",
        //   zone: '研究领域'
        // },
        // {
        //   id: 12,
        //   url: require("@/assets/images/专家7@2x.png"),
        //   name: "何晴",
        //   zone: '研究领域'
        // }
      ],
      searchOptions: {
        name: ""
      },
      pageNo: 1,
      pageSize: 12,
      total: 100
    };
  },
  watch: {
    searchOptions: {
      immediate: true,
      deep: true,
      handler () {
        this.searchProfession();
      }
    }
  },
  methods: {
    goDetail (id) {
      this.$router.push({ name: "ProfessionalDetail", query: { id: id } });
    },
    getPageList () {
      let options = Object.assign(
        {},
        this.searchOptions,
        { pageNo: this.pageNo, pageSize: this.pageSize });
      console.log("查询条件：", options);
      getProfessionalList({ data: options }).then(res => {
        // this.listData = res.data.result.records
      }).catch(err => {
        console.log(err);
      });
    },
    searchProfession () {
      this.pageNo = 1;
      this.getPageList();
    },
    currentChange () {
      this.getPageList();
    }
  }
};
</script>

<style lang="scss">
.professional-pool {
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
    flex-wrap: wrap;

    .result-room-item {
      width: 300px;
      height: 280px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      overflow: hidden;
      margin-bottom: 12px;

      .mask {
        width: 300px;
        height: 280px;
        position: absolute;
        top: 268px;
      }

      &:hover {
        cursor: pointer;
        box-shadow: 0px 0px 2px 0px rgba(8, 1, 3, 0.13);

        .mask {
          width: 300px;
          height: 280px;
          background: #E7742B;
          position: absolute;
          top: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          opacity: 0.7;

          span {
            color: #fff;
            margin-bottom: 56px;
          }
        }
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
    margin-bottom: 14px;

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
        padding: 28px 0 0 0;
      }

      .profession-line {
        width: 26px;
        height: 5px;
        background: #E68140;
        padding: 0;
        margin-bottom: 15px;
        margin-top: 6px;
      }
      .zone{
        font-size: 14px;
        color: #8b8b8b;
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

