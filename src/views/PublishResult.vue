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
                         required>
             <el-input v-model="form.name"></el-input>
           </el-form-item>
           <el-col :span="12">
             <el-form-item label="联系人："
                           required>
               <el-input v-model="form.contact"></el-input>
             </el-form-item>
           </el-col>
           <el-col :span="12">
             <el-form-item label="联系电话："
                           required>
               <el-input v-model="form.phone"></el-input>
             </el-form-item>
           </el-col>
           <el-form-item label="研发时间：">
             <el-col :span="24">
               <el-date-picker type="datetimerange"
                               placeholder="选择日期"
                               v-model="form.date1"
                               style="width: 100%;"></el-date-picker>
             </el-col>
           </el-form-item>
           <el-col :span="12">
             <el-form-item label="成果状态："
                           required>
               <el-input v-model="form.state"></el-input>
             </el-form-item>
           </el-col>
           <el-col :span="12">
             <el-form-item label="合作方式：">
               <el-input v-model="form.type"></el-input>
             </el-form-item>
           </el-col>
           <el-col :span="12">
             <el-form-item label="合作价格：">
               <el-input v-model="form.price"></el-input>
             </el-form-item>
           </el-col>
           <el-col :span="12">
             <el-form-item label="行业分类："
                           required>
               <el-input v-model="form.catogery"></el-input>
             </el-form-item>
           </el-col>
           <el-col :span="12">
             <el-form-item label="所属类别："
                           required>
               <el-input v-model="form.somes"></el-input>
             </el-form-item>
           </el-col>
           <el-col :span="12">
             <el-form-item label="所属地区："
                           required>
               <el-input v-model="form.area"></el-input>
             </el-form-item>
           </el-col>
           <el-col :span="24">
             <el-form-item label="发布时间：">
               <el-date-picker type="date"
                               placeholder="选择日期"
                               v-model="form.publishDate"
                               style="width: 100%;"></el-date-picker>
             </el-form-item>
           </el-col>
           <el-form-item label="专利种类：">
             <el-input v-model="form.zltypes"></el-input>
           </el-form-item>
           <el-form-item label="专利号：">
             <el-input v-model="form.number"></el-input>
           </el-form-item>
           <el-form-item label="选择团队：">
             <el-input v-model="form.team"></el-input>
           </el-form-item>
           <el-form-item label="技术领域：">
             <el-input type="textarea"
                       maxlength="100"
                       show-word-limit
                       v-model="form.zone"></el-input>
           </el-form-item>
           <el-form-item label="关键字：">
             <el-input type="textarea"
                       maxlength="50"
                       show-word-limit
                       v-model="form.keys"></el-input>
           </el-form-item>
           <el-form-item label="成果描述：">
             <el-input type="textarea"
                       maxlength="120"
                       show-word-limit
                       v-model="form.desc"></el-input>
           </el-form-item>
           <el-form-item label="成果介绍："
                         required>
             <el-input type="textarea"
                       maxlength="1000"
                       show-word-limit
                       v-model="form.show"></el-input>
           </el-form-item>
           <el-form-item label="知识产权归属："
                         required>
             <el-input type="textarea"
                       maxlength="120"
                       show-word-limit
                       v-model="form.belong"></el-input>
           </el-form-item>
           <el-col style="text-align: center;margin-bottom: 20px;">
             <el-button type="primary"
                        @click="active=1">下一步
             </el-button>
           </el-col>
         </div>
         <div v-show="active === 1">
           <el-form-item label="主要技术指标："
                         required>
             <el-input type="textarea"
                       maxlength="1000"
                       show-word-limit
                       v-model="form.standard"></el-input>
           </el-form-item>
           <el-form-item label="创新程度："
           >
             <el-input type="textarea"
                       maxlength="1000"
                       show-word-limit
                       v-model="form.chengdu"></el-input>
           </el-form-item>
           <el-form-item label="获奖情况："
           >
             <el-input type="textarea"
                       maxlength="1000"
                       show-word-limit
                       v-model="form.situation"></el-input>
           </el-form-item>
           <el-form-item label="应用范围："
           >
             <el-input type="textarea"
                       maxlength="1000"
                       show-word-limit
                       v-model="form.range"></el-input>
           </el-form-item>
           <el-form-item label="市场需求：">
             <el-input type="textarea"
                       maxlength="1000"
                       show-word-limit
                       v-model="form.request"></el-input>
           </el-form-item>
           <el-form-item label="转移转化效益说明：">
             <el-input type="textarea"
                       maxlength="1000"
                       show-word-limit
                       v-model="form.desc1"></el-input>
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
                       v-model="form.country"></el-input>
           </el-form-item>
           <el-form-item label="区域竞争分析：">
             <el-input type="textarea"
                       maxlength="1000"
                       show-word-limit
                       v-model="form.areaZone"></el-input>
           </el-form-item>
           <el-form-item label="行业竞争分析：">
             <el-input type="textarea"
                       maxlength="1000"
                       show-word-limit
                       v-model="form.hangye"></el-input>
           </el-form-item>
           <el-form-item label="竞品信息：">
             <el-input type="textarea"
                       maxlength="1000"
                       show-word-limit
                       v-model="form.jingping"></el-input>
           </el-form-item>
           <el-form-item label="展示图片：">
             <el-upload
               class="upload-demo"
               drag
               multiple>
               <i class="el-icon-upload"></i>
               <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
               <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
             </el-upload>
           </el-form-item>
           <el-form-item label="商标图片：">
             <el-upload
               class="upload-demo"
               drag
               multiple>
               <i class="el-icon-upload"></i>
               <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
               <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
             </el-upload>
           </el-form-item>
           <el-form-item label="附件上传：">
             <el-upload>
               <el-button size="small" type="primary">点击上传</el-button>
               <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过300kb</div>
             </el-upload>
           </el-form-item>
           <el-col style="text-align: center;margin-bottom: 20px;">
             <el-button
               @click="active=1">上一步
             </el-button>
             <el-button type="primary" @click='applyRequest'>提交申请</el-button>
           </el-col>
         </div>
       </el-form>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublishResult",
  data () {
    return {
      active: 0,
      form: {
        name: "",
        contact: "",
        phone: "",
        date1: "",
        date2: "",
        state: "",
        type: "",
        price: "",
        catogery: "",
        somes: "",
        area: "",
        publishDate: "",
        zltypes: "",
        number: "",
        team: "",
        zone: "",
        keys: "",
        desc: "",
        show: "",
        belong: "",
        standard: "",
        chengdu: "",
        situation: "",
        range: "",
        request: "",
        desc1: "",
        country: "",
        areaZone: "",
        hangye: "",
        jingping: "",
      }
    };
  },
  methods: {
    applyRequest() {
      this.$router.push({name: 'SummaryShow'})
    },
    click() {
      this.$notify({
        title: '成功',
        message: '提交成功。',
        type: 'success'
      });
    }
  }
};
</script>
<style lang="scss">
.step-class{
  margin-bottom: 40px;
}
</style>
