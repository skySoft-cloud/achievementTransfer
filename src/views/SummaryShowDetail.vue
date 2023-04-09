<template>
  <div class="summary-show-detail">
    <div class="header-container">
      <div class="bread-list">
          <div class="top-search">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{name:'TheIndex'}">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{name:'SummaryShow'}">成果展示</el-breadcrumb-item>
              <el-breadcrumb-item>成果展示详情</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
      <el-divider class="top-divider"></el-divider>
      <summary-detail-profile></summary-detail-profile>
      <div class="policy-content">
        <el-tabs
          class="w1240"
          v-model="activeName"
                 @tab-click="handleClick">
          <el-tab-pane label="成果内容"
                       name="summaryDetail">
         <summary-detail-desc></summary-detail-desc>
          </el-tab-pane>
          <el-tab-pane label="研发团队"
                       name="developTeam">
            <develop-team></develop-team>
          </el-tab-pane>
          <el-tab-pane label="竞争信息"
                       name="competitiveAnalysis">
            <competition-analysis></competition-analysis>
          </el-tab-pane>
          <el-tab-pane label="技术创新"
                       name="summaryInnovate">
            <summary-idea></summary-idea>
          </el-tab-pane>
          <el-tab-pane label="应用领域"
                       name="useArea">
            <apply-zone></apply-zone>
          </el-tab-pane>
          <el-tab-pane label="专家评价"
                       name="expertEvaluation">
            <profession-comment></profession-comment>
          </el-tab-pane>
        </el-tabs>
        <el-tabs
          class="w1240"
          v-model="attachName">
          <el-tab-pane label="附件下载"
                       name="attachDownload">
            <attach-files-list></attach-files-list>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import ContentHeader from "@/components/ContentHeader";
import SummaryDetailDesc from "@/components/summaryDetailDesc";
import AttachFilesList from "@/components/AttachFilesList";
import SummaryDetailProfile from "@/components/SummaryDetailProfile";
import SummaryIdea from "@/components/SummaryIdea";
import DevelopTeam from "@/components/DevelopTeam";
import CompetitionAnalysis from "@/components/CompetitionAnalysis";
import ApplyZone from "@/components/ApplyZone";
import ProfessionComment from "@/components/ProfessionComment";
export default {
  name: "summaryShowDetail",
  components: { ProfessionComment, ApplyZone, CompetitionAnalysis, DevelopTeam, SummaryIdea, SummaryDetailProfile, AttachFilesList, SummaryDetailDesc, ContentHeader },
  data () {
    return {
      activeName: "summaryDetail",
      attachName: "attachDownload",
    };
  },
  mounted () {
    this.getDetail();
  },
  methods: {
    getDetail () {
      console.log(this.$route.query.id);
    },
    handleClick (tab) {
      this.activeName = tab.name
    }
  }
};
</script>

<style lang="scss">
.summary-show-detail {
  background: #fff;

  .policy-content {
    background: #F4F5F7;
    padding-top: 30px;
  }

  .header-container {
    .top-search {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 18px 0 24px 0;
    }

    .bread-list {
      width: 1240px;
      margin: 0 auto;
    }
  }
}
</style>
