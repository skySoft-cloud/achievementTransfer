<template>
  <div class="policy-rules">
    <div class="header-container">
      <div class="bread-list">
        <div class="top-search">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{name:'TheIndex'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{name:'ProfessionalPool'}">专家库</el-breadcrumb-item>
            <el-breadcrumb-item>专家详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <el-divider class="top-divider"></el-divider>
      <div class="w1240 top-container flex-column align-center">
        <div class="head-avatar"></div>
        <span class="name">{{ detail.name }}</span>
        <div>
          <span>{{ detail.company }}</span>
          <el-divider direction="vertical"></el-divider>
          <span>{{ detail.domain }}</span>
          <el-divider direction="vertical"></el-divider>
          <span>{{ detail.post }}</span>
          <el-divider direction="vertical"></el-divider>
          <span>{{ detail.positionalTitles }}</span>
        </div>
        <!--          TODO:联系按钮？-->
        <el-button type="primary"
                   style="width: 184px;height: 45px;margin: 18px 0;font-size: 18px">联系他
        </el-button>
        <div class="read-num">
          <i class="el-icon-view"></i>
<!--          TODO:联系人数统计？-->
          <span>123人联系</span>
        </div>
      </div>
      <div class="w1240">
        <content-header title="概况">
          <template #content>
            {{ detail.remark }}
          </template>
        </content-header>
        <content-header title="代表成果">
          <template #content>
            {{ detail.achievement }}
          </template>
        </content-header>
        <content-header title="教学工作">
          <template #content>
            {{ detail.workContent }}
          </template>
        </content-header>
        <content-header title="研究领域">
          <template #content>
            {{ detail.domainContent }}
          </template>
        </content-header>
        <content-header title="大事记">
          <template #content>
            {{ detail.memoir }}
          </template>
        </content-header>
        <content-header title="论文">
          <template #content>
            {{ detail.thesis }}
          </template>
        </content-header>
      </div>
    </div>
  </div>
</template>

<script>
import ContentHeader from '@/components/ContentHeader'
import { getProfessionalDetail } from '@/api/apiFunc'

export default {
  name: 'ProfessionalDetail',
  components: { ContentHeader },
  data () {
    return {
      detail: {
        name: '',
        company: '',
        domain: '',
        post: '',
        positionalTitles: '',
      }
    }
  },
  mounted () {
    this.getDetail()
  },
  methods: {
    /**
     * 获取专家详情
     */
    getDetail () {
      getProfessionalDetail(this.$route.query.id).then(res => {
        if (res?.data?.result){
          this.detail = res?.data?.result
        }
      }).catch(err => {
        console.log(err)
      })
    },
  }
}
</script>

<style lang="scss">
.policy-rules {
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

  .top-container {
    margin-bottom: 54px;
  }

  .full-container {
    border-bottom: 1px solid #eeeeee;
  }

  .head-avatar {
    width: 175px;
    height: 175px;
    background: #bfa;
    border-radius: 50%;
  }

  .name {
    font-size: 34px;
    font-weight: 700;
    margin: 20px 0 34px 0;
  }

  .read-num {
    color: #8b8b8b;
  }
}
</style>
