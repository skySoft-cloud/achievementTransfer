<template>
  <div class="cooperation-requirement">
    <div class="header-container">
      <div class="bread-list">
        <div class="top-search">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{name:'TheIndex'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item>合作需求</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="search-bar">
            <el-input
              clearable
              placeholder="请输入需求名称"
              v-model="searchOptions.content"
              suffix-icon="el-icon-search"
            >
            </el-input>
            <el-button type="primary"
                       @click="$router.push({name:'PublishRequirement'})"
                       style="margin-left: 30px">发布需求
            </el-button>
          </div>
        </div>
        <div class="nav-bar">
          <div class="nav-bar-content border-bottom">
            <div class="nav-bar-content__left">
              <span class="title">行业分类</span>
              <div class="nav-item">
                <span v-for="(classItem) in navIndustry"
                      @click="searchOptions.belongClassification=classItem.id"
                      :class="searchOptions.belongClassification === classItem.id ?  'active-bg' : ''"
                      :key="classItem.id">
                  {{ classItem.label }}
                </span>
              </div>
            </div>
            <div class="active mr30">
              更多
            </div>
          </div>
          <div class="nav-bar-content">
            <div class="nav-bar-content__left">
              <span class="title">所属区域</span>
              <div class="nav-item">
                  <span v-for="(areaItem) in navArea"
                        @click="searchOptions.belongArea=areaItem.id"
                        :class="searchOptions.belongArea === areaItem.id ?  'active-bg' : ''"
                        :key="areaItem.id">
                  {{ areaItem.label }}
                </span>
              </div>
            </div>
            <div class="active mr30">
              更多
            </div>
          </div>
        </div>
      </div>
      <div class="card-list-container">
        <card-item :listData="listData"
                   :routeName="routeName"></card-item>
      </div>
      <div class="page-size-class">
        <div>
          <el-pagination
            background
            :page-size="pageSize"
            :current-page.sync="pageNo"
            layout="prev, pager, next"
            :total="total"
            @current-change="currentChange"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardItem from "@/components/CardItem";
import { getRequirementList } from "@/api/apiFunc";

export default {
  name: "CooperationRequirement",
  components: { CardItem },
  data () {
    return {
      searchOptions: {
        content: "",
        belongClassification: "0",
        belongArea: "0"
      },
      pageNo: 1,
      pageSize: 12,
      total: 100,
      routeName: "RequirementShowDetail",
      navIndustry: [
        { label: "不限", id: "0" },
        { label: "能源电力", id: "1" },
        { label: "环境工程", id: "2" },
        { label: "化学化工", id: "3" },
        { label: "先进材料", id: "4" },
        { label: "生物医药", id: "5" },
        { label: "电子信息", id: "6" },
        { label: "智能制造", id: "7" }
      ],
      navArea: [
        { label: "不限", id: "0" },
        { label: "成都市", id: "1" },
        { label: "绵阳市", id: "2" },
        { label: "德阳市", id: "3" },
        { label: "宜宾市", id: "4" },
        { label: "泸州市", id: "5" },
        { label: "南充市", id: "6" },
        { label: "自贡市", id: "7" },
        { label: "内江市", id: "8" }
      ],
      listData: [
        {
          id: 1,
          poster: require("../assets/images/xm.png"),
          title: "畜牧业物联网数据分析模型",
          city: "南充市",
          major: "电子信息",
          date: "2019-3-11",
          readers: "321"
        },
        {
          id: 1,
          poster: require("../assets/images/xm.png"),
          title: "畜牧业物联网数据分析模型",
          city: "南充市",
          major: "电子信息",
          date: "2019-3-11",
          readers: "321"
        },
        {
          id: 1,
          poster: require("../assets/images/xm.png"),
          title: "畜牧业物联网数据分析模型",
          city: "南充市",
          major: "电子信息",
          date: "2019-3-11",
          readers: "321"
        },
        {
          id: 1,
          poster: require("../assets/images/xm.png"),
          title: "畜牧业物联网数据分析模型",
          city: "南充市",
          major: "电子信息",
          date: "2019-3-11",
          readers: "321"
        },
        {
          id: 1,
          poster: require("../assets/images/xm.png"),
          title: "畜牧业物联网数据分析模型",
          city: "南充市",
          major: "电子信息",
          date: "2019-3-11",
          readers: "321"
        },
        {
          id: 1,
          poster: require("../assets/images/xm.png"),
          title: "畜牧业物联网数据分析模型",
          city: "南充市",
          major: "电子信息",
          date: "2019-3-11",
          readers: "321"
        },
        {
          id: 1,
          poster: require("../assets/images/xm.png"),
          title: "畜牧业物联网数据分析模型",
          city: "南充市",
          major: "电子信息",
          date: "2019-3-11",
          readers: "321"
        },
        {
          id: 1,
          poster: require("../assets/images/xm.png"),
          title: "畜牧业物联网数据分析模型",
          city: "南充市",
          major: "电子信息",
          date: "2019-3-11",
          readers: "321"
        },
        {
          id: 1,
          poster: require("../assets/images/xm.png"),
          title: "畜牧业物联网数据分析模型",
          city: "南充市",
          major: "电子信息",
          date: "2019-3-11",
          readers: "321"
        },
        {
          id: 1,
          poster: require("../assets/images/xm.png"),
          title: "畜牧业物联网数据分析模型",
          city: "南充市",
          major: "电子信息",
          date: "2019-3-11",
          readers: "321"
        },
        {
          id: 1,
          poster: require("../assets/images/xm.png"),
          title: "畜牧业物联网数据分析模型",
          city: "南充市",
          major: "电子信息",
          date: "2019-3-11",
          readers: "321"
        },
        {
          id: 1,
          poster: require("../assets/images/xm.png"),
          title: "畜牧业物联网数据分析模型",
          city: "南充市",
          major: "电子信息",
          date: "2019-3-11",
          readers: "321"
        }
      ]

    };
  },
  watch: {
    searchOptions: {
      immediate: true,
      deep: true,
      handler () {
        this.searchRequirement();
      }
    }
  },
  methods: {
    getPageList () {
      let options = Object.assign(
        {},
        this.searchOptions,
        { pageNo: this.pageNo, pageSize: this.pageSize });
      console.log("查询条件：", options);
      getRequirementList( options ).then(res => {
      }).catch(err => {
      });
    },
    searchRequirement () {
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
.cooperation-requirement {
  .header-container {
    background: #ffffff;
  }

  .bread-list {
    width: 1240px;
    margin: 0 auto;
    padding: 28px 0 20px 0;

    .top-search {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .nav-bar {
      border: 1px solid #D2D2D2;

      .nav-bar-content {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        align-items: center;

        .nav-bar-content__left {
          display: flex;

          .title {
            color: #909090;
            padding: 20px 12px;
            background: #F6F6F6;
          }

          .nav-item {
            margin-left: 30px;
            width: 720px;
            color: #000000;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .active-bg {
              background: #E1660D;
              padding: 6px 12px;
              color: #fff;
              border-radius: 5px;
            }

            span:not(.active-bg):hover {
              cursor: pointer;
              color: #E1660D;
            }
          }
        }

        .mr30 {
          margin-right: 30px;

          &:hover {
            cursor: pointer;
          }
        }
      }

      .border-bottom {
        border-bottom: 1px solid #eeeeee;
      }
    }
  }

  .search-bar {
    display: flex;
  }

  .card-list-container {
    background: #F5F5F5;
  }

  .page-size-class {
    background: #F5F5F5;
    padding-bottom: 76px;

    div {
      width: 1240px;
      margin: 0 auto;
      text-align: center;
      background: #F5F5F5;
    }
  }

  .el-pagination.is-background .el-pager li {
    background: #ffffff;
  }
}
</style>
