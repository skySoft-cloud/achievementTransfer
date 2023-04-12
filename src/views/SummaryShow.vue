<template>
  <div class="summary-show">
    <div class="header-container">
      <div class="bread-list">
        <div class="top-search">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{name:'TheIndex'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item>成果展示</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="search-bar">
            <el-input
              clearable
              placeholder="请输入成果名称"
              suffix-icon="el-icon-search"
              v-model="searchOptions.title"
            >
            </el-input>
            <el-button type="primary"
                       @click="$router.push({name: 'PublishResult'})"
                       style="margin-left: 30px">发布成果
            </el-button>
          </div>
        </div>
        <div class="nav-bar">
          <div class="nav-bar-content border-bottom">
            <div class="nav-bar-content__left">
              <span class="title">行业分类</span>
              <div class="nav-item">
                <span v-for="(classItem) in tradeTypes"
                      @click="searchOptions.belongClassification=classItem.value"
                      :class="searchOptions.belongClassification === classItem.value ?  'active-bg' : ''"
                      :key="classItem.value">
                  {{ classItem.label }}
                </span>
              </div>
            </div>
<!--            <div class="active mr30">-->
<!--              更多-->
<!--            </div>-->
          </div>
          <div class="nav-bar-content">
            <div class="nav-bar-content__left">
              <span class="title">所属区域</span>
              <div class="nav-item">
                  <span v-for="(areaItem) in citys"
                        @click="searchOptions.belongArea=areaItem.value"
                        :class="searchOptions.belongArea === areaItem.value ?  'active-bg' : ''"
                        :key="areaItem.value">
                  {{ areaItem.label }}
                </span>
              </div>
            </div>
<!--            <div class="active mr30">-->
<!--              更多-->
<!--            </div>-->
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
import CardItem from '@/components/CardItem'
import { getDictByDicCode, getSummaryList } from '@/api/apiFunc'
import { dictionary } from '@/dictionary/dictionary'

export default {
  name: 'SummaryShow',
  components: { CardItem },
  data () {
    return {
      searchOptions: {
        title: '',
        belongClassification: '',
        belongArea: ''
      },
      citys: [],
      tradeTypes: [],
      pageNo: 1,
      pageSize: 12,
      total: 100,
      routeName: 'SummaryShowDetail',
      listData: [
        {
          id: 1,
          poster: require('../assets/images/xm.png'),
          title: '畜牧业物联网数据分析模型',
          city: '南充市',
          major: '电子信息',
          date: '2019-3-11',
          readers: '321'
        },
        {
          id: 1,
          poster: require('../assets/images/xm.png'),
          title: '畜牧业物联网数据分析模型',
          city: '南充市',
          major: '电子信息',
          date: '2019-3-11',
          readers: '321'
        },
        {
          id: 1,
          poster: require('../assets/images/xm.png'),
          title: '畜牧业物联网数据分析模型',
          city: '南充市',
          major: '电子信息',
          date: '2019-3-11',
          readers: '321'
        },
        {
          id: 1,
          poster: require('../assets/images/xm.png'),
          title: '畜牧业物联网数据分析模型',
          city: '南充市',
          major: '电子信息',
          date: '2019-3-11',
          readers: '321'
        },
        {
          id: 1,
          poster: require('../assets/images/xm.png'),
          title: '畜牧业物联网数据分析模型',
          city: '南充市',
          major: '电子信息',
          date: '2019-3-11',
          readers: '321'
        },
        {
          id: 1,
          poster: require('../assets/images/xm.png'),
          title: '畜牧业物联网数据分析模型',
          city: '南充市',
          major: '电子信息',
          date: '2019-3-11',
          readers: '321'
        },
        {
          id: 1,
          poster: require('../assets/images/xm.png'),
          title: '畜牧业物联网数据分析模型',
          city: '南充市',
          major: '电子信息',
          date: '2019-3-11',
          readers: '321'
        },
        {
          id: 1,
          poster: require('../assets/images/xm.png'),
          title: '畜牧业物联网数据分析模型',
          city: '南充市',
          major: '电子信息',
          date: '2019-3-11',
          readers: '321'
        },
        {
          id: 1,
          poster: require('../assets/images/xm.png'),
          title: '畜牧业物联网数据分析模型',
          city: '南充市',
          major: '电子信息',
          date: '2019-3-11',
          readers: '321'
        },
        {
          id: 1,
          poster: require('../assets/images/xm.png'),
          title: '畜牧业物联网数据分析模型',
          city: '南充市',
          major: '电子信息',
          date: '2019-3-11',
          readers: '321'
        },
        {
          id: 1,
          poster: require('../assets/images/xm.png'),
          title: '畜牧业物联网数据分析模型',
          city: '南充市',
          major: '电子信息',
          date: '2019-3-11',
          readers: '321'
        },
        {
          id: 1,
          poster: require('../assets/images/xm.png'),
          title: '畜牧业物联网数据分析模型',
          city: '南充市',
          major: '电子信息',
          date: '2019-3-11',
          readers: '321'
        }
      ]
    }
  },
  watch: {
    searchOptions: {
      // immediate: true,
      deep: true,
      handler () {
        this.searchSummary()
      }
    }
  },
  mounted () {
    getDictByDicCode('need_pub_trade_type').then(res => {
      res.data.unshift({ label: '不限', value: '' })
      this.tradeTypes = res.data
    })

    this.citys = dictionary.citys
    this.getPageList()
  },
  methods: {
    getPageList () {
      let options = Object.assign(
        {},
        this.searchOptions,
        { pageNo: this.pageNo, pageSize: this.pageSize })
      console.log('查询条件：', options)
      getSummaryList(options).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    searchSummary () {
      this.pageNo = 1
      this.getPageList()
    },
    currentChange () {
      this.getPageList()
    }
  }
}
</script>

<style lang="scss">
.summary-show {
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
            max-width: 1040px;
            color: #000000;
            display: flex;
            //justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;

            .active-bg {
              background: #E1660D;
              padding: 6px 12px;
              color: #fff;
              border-radius: 5px;
            }

            span {
              margin: 5px 20px 5px 0;
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
