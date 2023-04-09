<template>
  <div class="publish-requirement">
    <div class="header-container">
      <div class="bread-list">
        <div class="top-search">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{name:'TheIndex'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{name:'CooperationRequirement'}">合作需求</el-breadcrumb-item>
            <el-breadcrumb-item>发布需求</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <el-divider class="top-divider"></el-divider>
      <div class="w1240">
        <div class="top-form">
          <div class="top-form-container">
            <el-form ref="form"
                     :model="formData"
                     label-width="120px">
              <el-row>
                <el-col>
                  <el-form-item label="需求名称">
                    <el-input v-model="formData.name"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                <el-form-item label="信息有效时间：">
                    <el-date-picker type="date"
                                    placeholder="选择日期"
                                    v-model="formData.date"
                                    style="width: 100%;">
                    </el-date-picker>
                </el-form-item>
                </el-col>
                <el-col :span="12">
                <el-form-item label="需求状态：">
                    <el-select v-model="formData.status" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                <el-form-item label="所属地区：">
                    <el-select v-model="formData.status" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                </el-form-item>
                </el-col>
                <el-col :span="12">
                <el-form-item label="行业分类：">
                    <el-select v-model="formData.status" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                <el-form-item label="所属类别：">
                    <el-select v-model="formData.status" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                </el-form-item>
                </el-col>
                <el-col :span="12">
                <el-form-item label="合作方式：">
                    <el-input v-model="formData.name"></el-input>
                </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                <el-form-item label="联系人：">
                    <el-select v-model="formData.status" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                </el-form-item>
                </el-col>
                <el-col :span="12">
                <el-form-item label="联系方式：">
                    <el-input v-model="formData.name"></el-input>
                </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col>
                  <el-form-item label="预算价格">
                    <el-input v-model="formData.price"></el-input>
                  </el-form-item>
                </el-col>
                <el-col>
                  <el-form-item label="应用领域">
                    <el-input
                      type="textarea"
                      :autosize="{ minRows: 2, maxRows: 4}"
                      placeholder="请输入内容"
                      v-model="formData.zone">
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col>
                  <el-form-item label="需求详情">
                    <el-input
                      type="textarea"
                      :autosize="{ minRows: 2, maxRows: 4}"
                      placeholder="请输入内容"
                      v-model="formData.detail">
                    </el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col>
                  <el-form-item label="展示图片">
                    <el-upload
                      action=""
                      list-type="picture-card">
                      <i class="el-icon-plus"></i>
                    </el-upload>
                  </el-form-item>
                </el-col>
                <el-col>
                  <el-form-item label="附件">
                    <el-upload
                      action="">
                      <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
            <div class="btn-container flex-c-c">
              <el-button type="primary">提交发布申请
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublishRequirement",
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }],
      formData: {
        name: "",
        date: "",
        price: "",
        zone: "",
        detail: "",
      }
    };
  },
  methods: {}
};
</script>
<style lang="scss">
.publish-requirement{
  .el-select{
    width: 100%;
  }
  .btn-container{
    margin-bottom: 40px;
  }
}
.step-class {
  margin-bottom: 40px;
}
</style>
