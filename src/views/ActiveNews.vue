<template>
  <div class="active-news">
    <div class="header-container">
      <div class="full-container"
           style="padding-top:0">
        <div class="bread-list">
          <div class="top-search">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{name:'TheIndex'}">首页</el-breadcrumb-item>
              <el-breadcrumb-item>活动新闻</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="search-bar">
              <el-input
                suffix-icon="el-icon-search"
                v-model="searchOptions.content"
                placeholder="请输入活动新闻名称"
              >
              </el-input>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-container">
        <div class="news-tab">
          <span :class="[tabName === 'active' ? 'is-active' : '']"
                @click="tabName='active'">活动</span>
          <span :class="[tabName === 'news' ? 'is-active' : '']"
                @click="tabName='news'">新闻</span>
        </div>
      </div>
      <news-list v-if="tabName === 'news'"></news-list>
      <active-list v-if="tabName === 'active'"></active-list>
    </div>
  </div>
</template>

<script>
import NewsList from '@/components/NewsList'
import ActiveList from '@/components/ActiveList'
import { getActiveList, getNewsList } from '@/api/apiFunc'

export default {
  name: 'ActiveNews',
  components: { ActiveList, NewsList },
  data () {
    return {
      newsList: [],
      activityList: [],
      pageNo: 1,
      pageSize: 5,
      total: 0,
      tabName: 'news',
      searchOptions: {
        title: ''
      }
    }
  },
  watch: {
    tabName: function () {
      this.pageNo = 1
      this.getListData()
    },
    searchOptions: {
      deep: true,
      handler: function () {
        this.pageNo = 1
        this.getListData()
      }
    }
  },
  mounted () {
    this.getListData()
  },
  methods: {
    getListData () {
      let options = Object.assign(
        {},
        this.searchOptions,
        { pageNo: this.pageNo, pageSize: this.pageSize })
      let reqMethod = this.tabName === 'news' ? getNewsList : getActiveList
      reqMethod(options).then(res => {
        console.log(res)
        if (this.tabName === 'news') {
          this.newsList = res.data.result.record
        } else {
          this.activityList = res.data.result.record
        }
      }).catch(err => {
      })
    },
  }
}
</script>

<style lang="scss">
.active-news {
  background: #fff;

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
    padding-bottom: 76px;
    padding-top: 40px;

    div {
      width: 1240px;
      margin: 0 auto;
      text-align: center;
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

    //span {
    //  font-size: 24px;
    //}
  }

  .tab-container {
    padding: 20px 0;
  }

  .news-tab {
    width: 1240px;
    margin: 0 auto;
    font-size: 20px;

    span {
      margin-left: 58px;

      &:hover {
        cursor: pointer;
      }
    }

    .is-active {
      border-radius: 5px;
      color: #ffffff;
      padding: 8px 30px;
      background: #E1660D;
    }
  }
}
</style>
