<template>
  <div class="requirement-show-detail">
    <div class="header-container">
      <div class="bread-list">
          <div class="top-search">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{name:'TheIndex'}">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{name:'CooperationRequirement'}">合作需求</el-breadcrumb-item>
              <el-breadcrumb-item>合作需求详情</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
      <el-divider class="top-divider"></el-divider>
      <requirement-detail-profile></requirement-detail-profile>
      <div class="policy-content">
        <div class="w1240">
          <content-header title="需求详情">
            <template #content>
              本技术国内尚无报道，具有独创性，应用范围广，具有广泛的市场前景;此技术授入运行，极大的减少甲己励的采购费用。发甲乙择维累生产过程中甲己励单托越大。利用此技术取得的效益越大。
              本技术脆等有效实现尾气中甲醇、乙酶的资源化回收，使得甲乙醇的回收率高，收益大，另外，本技术不仅能有效减少有机度气的排放，还赔有效减少粉尘排放，实现清洁化工生产，本技术还
              可应用于含有机物的尾气处理领域，能将尾气中的有机物有效回收利用。本技术国内尚无报道，具有独创性，应用范围广，具有广泛的市场前景;此技术授入运行，极大的减少甲己励的采购费用。
              发甲乙择维累生产过程中甲己励单托越大。利用此技术取得的效益越大。本技术脆等有效实现尾气中甲醇、乙酶的资源化回收，使得甲乙醇的回收率高，收益大，另外，本技术不仅能有效减少
              有机度气的排放，还赔有效减少粉尘排放，实现清洁化工生产，本技术还可应用于含有机物的尾气处理领域，能将尾气中的有机物有效回收利用。
            </template>
          </content-header>
          <content-header title="应用领域">
            <template #content>
              本技术国内尚无报道，具有独创性，应用范围广，具有广泛的市场前景;此技术授入运行，极大的减少甲己励的采购费用。发甲乙择维累生产过程中甲己励单托越大。利用此技术取得的效益越大。
              本技术脆等有效实现尾气中甲醇、乙酶的资源化回收，使得甲乙醇的回收率高，收益大，另外，本技术不仅能有效减少有机度气的排放，还赔有效减少粉尘排放，实现清洁化工生产，本技术还
              可应用于含有机物的尾气处理领域，能将尾气中的有机物有效回收利用。本技术国内尚无报道，具有独创性，应用范围广，具有广泛的市场前景;此技术授入运行，极大的减少甲己励的采购费用。
              发甲乙择维累生产过程中甲己励单托越大。利用此技术取得的效益越大。本技术脆等有效实现尾气中甲醇、乙酶的资源化回收，使得甲乙醇的回收率高，收益大，另外，本技术不仅能有效减少
              有机度气的排放，还赔有效减少粉尘排放，实现清洁化工生产，本技术还可应用于含有机物的尾气处理领域，能将尾气中的有机物有效回收利用。
            </template>
          </content-header>
        </div>
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
import AttachFilesList from "@/components/AttachFilesList";
import RequirementDetailProfile from "@/components/RequirementDetailProfile";
export default {
  name: "summaryShowDetail",
  components: { AttachFilesList, RequirementDetailProfile, ContentHeader },
  data () {
    return {
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
.requirement-show-detail {
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
