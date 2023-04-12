<template>
  <div class="service-constructor">
    <div class="header-container">
      <div class="full-container">
        <div class="bread-list">
          <div class="top-search">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{name:'TheIndex'}">首页</el-breadcrumb-item>
              <el-breadcrumb-item>服务商</el-breadcrumb-item>
            </el-breadcrumb>
            <!--            <div class="search-bar">-->
            <!--              <el-input-->
            <!--                suffix-icon="el-icon-search"-->
            <!--                v-model="value"-->
            <!--              >-->
            <!--              </el-input>-->
            <!--            </div>-->
          </div>
        </div>
      </div>
      <div class="w1240">
        <div class="service-store"
             style="margin-top: 40px;">
          <img
            @click="newWindow(item.url)"
            v-for="(item,index) in listData"
            :key="index"
            :src="(baseUrl + item.logo)"
            class="service-store-item">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getConstructorList } from '@/api/apiFunc'
import { baseUrl } from '@/api/config'

export default {
  name: 'ServiceConstructor',
  data () {
    return {
      listData: [],
      baseUrl: baseUrl
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      getConstructorList({ pageSize: 999 }).then(res => {
        this.listData = res?.data?.result?.records || []
      }).catch(error => {
        console.log(error)
      })
    },
    newWindow (url) {
      window.open(url, '_blank')
    },
  },
}
</script>

<style lang="scss">
.service-constructor {
  height: calc(100vh - 338px);
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

  .service-store {
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .service-store-item {
      width: 290px;
      height: 100px;
      border: 1px solid #eee;
      margin-bottom: 14px;

      &:hover {
        cursor: pointer;
        color: #E68140;
      }
    }
  }
}
</style>
