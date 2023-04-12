<template>
  <div class="publish-result">
    <div class="header-container">
      <div class="bread-list">
        <div class="top-search">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{name:'TheIndex'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{name:'SummaryShow'}">成果展示</el-breadcrumb-item>
            <el-breadcrumb-item>发布成果</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <el-divider class="top-divider"></el-divider>
      <div class="w1240">
        <el-steps :active="active"
                  class="step-class"
                  align-center
                  finish-status="success">
          <el-step title="基本信息"></el-step>
          <el-step title="成果创新"></el-step>
          <el-step title="竞争分析"></el-step>
        </el-steps>
        <el-form ref="form"
                 :model="form"
                 label-width="140px">
          <div v-show="active === 0">
            <el-form-item label="成果名称："
                          prop="title"
                          required>
              <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-row>
              <el-col :span="12">
                <el-form-item label="联系人："
                              prop="name"
                              required>
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="联系电话："
                              prop="phone"
                              required>
                  <el-input v-model="form.phone"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="研发时间："
                              prop="dateRange">
                  <el-date-picker type="daterange"
                                  start-placeholder="开始日期"
                                  end-placeholder="结束日期"
                                  v-model="form.dateRange"
                                  style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="发布日期：">
                  <el-date-picker type="date"
                                  placeholder="选择发布日期"
                                  v-model="form.createTime"
                                  style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="成果状态："
                              required>
                  <el-select v-model="form.achievementStatus"
                             placeholder="选择成果状态">
                    <el-option v-for="(item,index) in achievementStatus"
                               :key="index"
                               :label="item.label"
                               :value="item.value"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="合作方式：">
                  <el-input v-model="form.cooperateWay"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="合作价格：">
                  <el-input v-model="form.cooperateAmount"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="行业分类："
                              required>
                  <el-select v-model="form.tradeType"
                             placeholder="选择行业类别">
                    <el-option v-for="(item,index1) in tradeTypes"
                               :key="index1"
                               :label="item.label"
                               :value="item.value"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="所属类别："
                              required>
                  <el-select v-model="form.type"
                             placeholder="选择所属类别">
                    <el-option v-for="(item,index2) in types"
                               :key="index2"
                               :label="item.label"
                               :value="item.value"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="所属地区："
                              required>
                  <el-select v-model="form.city"
                             placeholder="选择所属地区">
                    <el-option v-for="(item,index3) in citys"
                               :key="index3"
                               :label="item.label"
                               :value="item.value"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="专利种类：">
                  <el-select v-model="form.patentType"
                             placeholder="选择专利种类">
                    <el-option v-for="(item,index4) in patentTypes"
                               :key="index4"
                               :label="item.label"
                               :value="item.value"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="专利号：">
                  <el-input v-model="form.patentNo"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label="选择团队：">
              <el-input v-model="form.groupId"></el-input>
            </el-form-item>
            <el-form-item label="技术领域：">
              <el-input type="textarea"
                        maxlength="100"
                        show-word-limit
                        v-model="form.domain"></el-input>
            </el-form-item>
            <el-form-item label="关键字：">
              <el-input type="textarea"
                        maxlength="50"
                        show-word-limit
                        v-model="form.keyword"></el-input>
            </el-form-item>
            <el-form-item label="成果描述：">
              <el-input type="textarea"
                        maxlength="120"
                        show-word-limit
                        v-model="form.remark"></el-input>
            </el-form-item>
            <el-form-item label="成果介绍："
                          prop="content"
                          required>
              <el-input type="textarea"
                        maxlength="1000"
                        show-word-limit
                        v-model="form.content"></el-input>
            </el-form-item>
            <el-form-item label="知识产权归属："
                          prop="ownership"
                          required>
              <el-input type="textarea"
                        maxlength="120"
                        show-word-limit
                        v-model="form.ownership"></el-input>
            </el-form-item>
            <el-col style="text-align: center;margin-bottom: 20px;">
              <el-button type="primary"
                         @click="active=1">下一步
              </el-button>
            </el-col>
          </div>
          <div v-show="active === 1">
            <el-form-item label="主要技术指标："
                          prop="mainQuota"
                          required>
              <el-input type="textarea"
                        maxlength="1000"
                        show-word-limit
                        v-model="form.mainQuota"></el-input>
            </el-form-item>
            <el-form-item label="创新程度："
            >
              <el-input type="textarea"
                        maxlength="1000"
                        show-word-limit
                        v-model="form.innovativeness"></el-input>
            </el-form-item>
            <el-form-item label="获奖情况："
            >
              <el-input type="textarea"
                        maxlength="1000"
                        show-word-limit
                        v-model="form.winState"></el-input>
            </el-form-item>
            <el-form-item label="应用范围："
            >
              <el-input type="textarea"
                        maxlength="1000"
                        show-word-limit
                        v-model="form.appRange"></el-input>
            </el-form-item>
            <el-form-item label="市场需求："
                          prop="marketNeeds"
                          required>
              <el-input type="textarea"
                        maxlength="1000"
                        show-word-limit
                        v-model="form.marketNeeds"></el-input>
            </el-form-item>
            <el-form-item label="转移转化效益说明："
                          prop="benefitRemark"
                          required>
              <el-input type="textarea"
                        maxlength="1000"
                        show-word-limit
                        v-model="form.benefitRemark"></el-input>
            </el-form-item>
            <el-col style="text-align: center;margin-bottom: 20px;">
              <el-button
                @click="active=0">上一步
              </el-button>
              <el-button type="primary"
                         @click="active=2">下一步
              </el-button>
            </el-col>
          </div>
          <div v-show="active === 2">
            <el-form-item label="全国竞争分析：">
              <el-input type="textarea"
                        maxlength="1000"
                        show-word-limit
                        v-model="form.nationwideAnalyse"></el-input>
            </el-form-item>
            <el-form-item label="区域竞争分析：">
              <el-input type="textarea"
                        maxlength="1000"
                        show-word-limit
                        v-model="form.areaAnalyse"></el-input>
            </el-form-item>
            <el-form-item label="行业竞争分析：">
              <el-input type="textarea"
                        maxlength="1000"
                        show-word-limit
                        v-model="form.professionAnalyse"></el-input>
            </el-form-item>
            <el-form-item label="竞品信息：">
              <el-input type="textarea"
                        maxlength="1000"
                        show-word-limit
                        v-model="form.competingProduce"></el-input>
            </el-form-item>
            <el-form-item label="展示图片：">
              <el-upload
                :on-success="onSuccess"
                :on-remove="onRemove"
                list-type="picture-card"
                :file-list="fileList"
                :action="baseUrl + '/sys/common/upload'"
                :headers="headers"
                multiple>
                <i class="el-icon-plus"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="商标图片：">
              <el-upload
                list-type="picture-card"
                :action="baseUrl + '/sys/common/upload'"
                :headers="headers"
                multiple>
                <i class="el-icon-plus"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="附件上传：">
              <el-upload
                          :action="baseUrl + '/sys/common/upload'"
                          :headers="headers">
                <el-button size="small"
                           type="primary">点击上传
                </el-button>
                <div slot="tip"
                     class="el-upload__tip">只能上传jpg/png文件，且不超过300kb
                </div>
              </el-upload>
            </el-form-item>
            <el-col style="text-align: center;margin-bottom: 20px;">
              <el-button
                @click="active=1">上一步
              </el-button>
              <el-button type="primary"
                         @click='applyRequest'>提交申请
              </el-button>
            </el-col>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { getDictByDicCode, getTeams } from '@/api/apiFunc'
import { dictionary } from '@/dictionary/dictionary'
import { baseUrl } from '@/api/config'
import store from '@/store/index'
export default {
  name: 'PublishResult',
  data () {
    return {
      headers: {'Authorization':store.state.userInfo.token || localStorage.getItem('token'),'X-Access-Token': store.state.userInfo.token || localStorage.getItem('token')},
      baseUrl: baseUrl,
      active: 0,
      achievementStatus: [],
      tradeTypes: [],
      types: [],
      citys: [],
      patentTypes: [],
      form: {
        title: '',
        name: '',
        phone: '',
        dateRange: [+new Date(), +new Date()],
        startTime: '',
        endTime: '',
        achievementStatus: '1',
        cooperateWay: '',
        cooperateAmount: '',
        tradeType: '',
        type: '',
        city: '',
        createTime: '',
        patentType: '',
        patentNo: '',
        groupId: '',
        domain: '',
        keyword: '',
        remark: '',
        content: '',
        ownership: '',
        mainQuota: '',
        innovativeness: '',
        winState: '',
        appRange: '',
        marketNeeds: '',
        benefitRemark: '',
        nationwideAnalyse: '',
        areaAnalyse: '',
        professionAnalyse: '',
        competingProduce: '',
      },
      fileList: []
    }
  },
  mounted () {
    this.getDic()
  },
  methods: {
    getDic () {
      getDictByDicCode('achievement_status').then(res => {
        this.achievementStatus = res.data
      })
      getDictByDicCode('need_pub_trade_type').then(res => {
        this.tradeTypes = res.data
      })
      getDictByDicCode('achievement_type').then(res => {
        this.types = res.data
      })
      getDictByDicCode('achievement_patent_type').then(res => {
        this.patentTypes = res.data
      })
      getTeams().then(res => {
        console.log(res.data.result)
      }).catch(err => {
        console.log(err)
      })
      dictionary.citys.shift()
      this.citys = dictionary.citys

    },
    applyRequest () {
      this.$router.push({ name: 'SummaryShow' })
    },
    click () {
      this.$notify({
        title: '成功',
        message: '提交成功。',
        type: 'success'
      })
    },
    onSuccess (response, file, fileList) {
      console.log('response',response)
      console.log('fileList',fileList)
      this.form.produceImgs = ''
    },
    onRemove(file, fileList){
      console.log('fileList',fileList)
    },
  }
}
</script>
<style lang="scss">
.step-class {
  margin-bottom: 40px;
}

.publish-result {
  .el-select {
    width: 100%;
  }
}
</style>
