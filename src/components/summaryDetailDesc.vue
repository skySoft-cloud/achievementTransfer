<template>
  <div>
    <content-header title="研发时间">
      <template slot="content">
        {{ summaryInfo.startTime }}-{{ summaryInfo.endTime }}
      </template>
    </content-header>
    <content-header title="发布时间">
      <template slot="content">
        2018年11月
      </template>
    </content-header>
    <content-header title="行业类别">
      <template slot="content">
        {{ summaryInfo.domain }}
      </template>
    </content-header>
    <content-header title="所属类别">
      <template slot="content">
        {{ summaryInfo.type }}
      </template>
    </content-header>
    <content-header title="技术领域">
      <template slot="content">
        {{ summaryInfo.domain }}
      </template>
    </content-header>
    <content-header title="关键字">
      <template slot="content">
        {{summaryInfo.keyword}}
      </template>
    </content-header>
    <content-header title="成果介绍">
      <template slot="content">
        {{summaryInfo.remark}}
      </template>
    </content-header>
    <content-header title="主要技术指标">
      <template slot="content">
        {{summaryInfo.mainQuota}}
      </template>
    </content-header>
  </div>
</template>

<script>
import ContentHeader from '@/components/ContentHeader'

export default {
  name: 'summaryDetailDesc',
  components: { ContentHeader },
  props: ['summaryInfo']
}
</script>

<style scoped>

</style>
