<template>
  <div class="policy-laws">
    <div class="header-container">
      <div class="full-container">
        <div class="bread-list">
          <div class="top-search"
               style="padding: 0">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{name:'TheIndex'}">首页</el-breadcrumb-item>
              <el-breadcrumb-item>政策法规</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="search-bar">
              <el-input
                suffix-icon="el-icon-search"
                v-model="searchOptions.title"
                placeholder="请输入法规政策名称"
              >
              </el-input>
            </div>
          </div>
        </div>
      </div>
      <div class="policy-content w1240">
        <div class="left-nav">
          <div @click="currentNav = ''"
               :class="currentNav === '' ? 'is-active' : ''">
            <img src="../assets/images/p1.png"
                 alt="">
            <span>全部政策</span>
          </div>
          <div @click="currentNav = '1'"
               :class="currentNav === '1' ? 'is-active' : ''">
            <img src="../assets/images/p2.png"
                 alt="">
            <span>国家政策</span>
          </div>
          <div @click="currentNav = '2'"
               :class="currentNav === '2' ? 'is-active' : ''">
            <img src="../assets/images/p3.png"
                 alt="">
            <span>地方政策</span>
          </div>
          <div @click="currentNav = '3'"
               :class="currentNav === '3' ? 'is-active' : ''">
            <img src="../assets/images/p3.png"
                 alt="">
            <span>行业政策</span>
          </div>
        </div>
        <div class="list">
          <h3>{{ policyTitle }}</h3>
          <div @click="$router.push({name:'PolicyRulesDetail',query: {id: '1'}})">
            <span>中共中央国务院印发《新时代爱国主义教育实施纲要》</span>
            <span>2019年11月11日</span>
          </div>
<!--          <div v-for="(item,index) in listData"-->
<!--               :key="index"-->
<!--               @click="$router.push({name:'PolicyRulesDetail',query: {id: item.id}})">-->
<!--            <span>{{item.title}}</span>-->
<!--            <span>{{item.createTime}}</span>-->
<!--          </div>-->
          <div @click="$router.push({name:'PolicyRulesDetail'})">
            <span>中共中央办公厅印发《2019 - 2023年全国党员教育培训工作规划》</span>
            <span>2019年11月11日</span>
          </div>
          <div @click="$router.push({name:'PolicyRulesDetail'})">
            <span class="text-ellipsis">国务院关于开展第七次全国人口普查的通知</span>
            <span>2019年11月11日</span>
          </div>
          <div @click="$router.push({name:'PolicyRulesDetail'})">
            <span>国务院办公厅关于加强水上搜救工作的通知</span>
            <span>2019年11月11日</span>
          </div>
          <div @click="$router.push({name:'PolicyRulesDetail'})">
            <span class="text-ellipsis">中共中央关于坚持和完善中国特色社会主义制度 推进国家治理体系和治理能力现代化若干重..</span>
            <span>2019年11月11日</span>
          </div>
          <div @click="$router.push({name:'PolicyRulesDetail'})">
            <span class="text-ellipsis">国务院办公厅关于对国务院第六次大督查发现的典型经验做法给予表扬的通报</span>
            <span>2019年11月11日</span>
          </div>
          <div @click="$router.push({name:'PolicyRulesDetail'})">
            <span class="text-ellipsis">中共中央国务院印发《新时代爱国主义教育实施纲要》</span>
            <span>2019年11月11日</span>
          </div>
          <div @click="$router.push({name:'PolicyRulesDetail'})">
            <span class="text-ellipsis">中共中央办公厅印发《2019 - 2023年全国党员教育培训工作规划》</span>
            <span>2019年11月11日</span>
          </div>
          <div @click="$router.push({name:'PolicyRulesDetail'})">
            <span class="text-ellipsis">国务院关于开展第七次全国人口普查的通知</span>
            <span>2019年11月11日</span>
          </div>
          <div @click="$router.push({name:'PolicyRulesDetail'})">
            <span>中共中央关于坚持和完善中国特色社会主义制度 推进国家治理体系和治理能力现代化若干重..</span>
            <span>2019年11月11日</span>
          </div>
          <div @click="$router.push({name:'PolicyRulesDetail'})">
            <span class="text-ellipsis">国务院办公厅关于对国务院第六次大督查发现的典型经验做法给予表扬的通报</span>
            <span>2019年11月11日</span>
          </div>
        </div>
      </div>
      <div class="page-size-class">
        <div>
          <el-pagination
            background
            :current-page="pageNo"
            :page-size="pageSize"
            layout="prev, pager, next"
            :total="total">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDictByDicCode, getPolicyList } from '@/api/apiFunc'
export default {
  name: "PolicyRules",
  data () {
    return {
      listData: [],
      pageNo: 1,
      pageSize: 12,
      total: 0,
      policyTitles: {
        '': '全部政策',
        '1': '国家政策',
        '2': '地方政策',
        '3': '行业政策'
      },
      currentNav: "",
      searchOptions: {
        title: ''
      },
    };
  },
  computed: {
    policyTitle() {
      return this.policyTitles[this.currentNav]
    },
  },
  watch: {
    currentNav:function(val){
      this.pageNo = 1;
      this.getListData()
    }
  },
  mounted () {
    getDictByDicCode('help_type').then(res=>{

    })
    this.getListData()
  },
  methods: {
    getListData() {
      let options = Object.assign(
        {},
        this.searchOptions,
        { pageNo: this.pageNo, pageSize: this.pageSize,type: this.currentNav });
      getPolicyList(options).then(res=>{
        console.log(res)
      })
    }
  },
};
</script>

<style lang="scss">
.policy-laws {
  background: #fff;

  .policy-content {
    display: flex;
    padding-top: 50px;

    .left-nav {
      div {
        display: flex;
        align-items: center;
        font-size: 24px;
        padding: 10px 20px;
        margin-bottom: 30px;
        &:hover:not(.is-active) {
          cursor: pointer;
          color: #F47F45;
        }
        img {
          width: 28px;
          height: 30px;
          margin-right: 12px;
        }

      }
    }

    .list {
      margin-left: 90px;
      width: 890px;

      h3, p {
        margin: 0;
        font-weight: 300;
      }

      h3 {
        font-size: 24px;
        margin-bottom: 40px;
      }

      div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
        font-size: 18px;

        span:nth-of-type(1) {
          display: inline-block;
          width: 645px;
          font-size: 14px;
        }

        span:nth-of-type(2) {
          font-size: 14px;
          color: #000000;
        }

        &:hover {
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

  .is-active {
    background: #F47F45;
    color: #fff
  }
}
</style>
