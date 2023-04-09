<template>
  <div class="attach-files-list">
    <div class="attach-file-item flex-sb">
      <p>科技成果路定直传页-中国电子学会.docx</p>
      <el-link href="https://element.eleme.io"
               type="primary">下载
      </el-link>
    </div>
    <div class="attach-file-item flex-sb">
      <p>科技型小微企业专利权转让(专利文施许可)合同登记表.docx</p>
      <el-link href="https://element.eleme.io"
               type="primary">下载
      </el-link>
    </div>
    <div class="attach-file-item flex-sb">
      <p>关于开展第七届“中国技术市场协会金桥奖”表影奖励工作的通知.doc</p>
      <el-link href="https://element.eleme.io"
               type="primary">下载
      </el-link>
    </div>
    <div class="attach-file-item flex-sb">
      <p>关于开展第七届“中国技术市场协会金桥奖”表影奖励工作的通知.doc</p>
      <el-link href="https://element.eleme.io"
               type="primary">下载
      </el-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AttachFilesList"
};
</script>

<style lang="scss"
       scoped>
.attach-files-list {
  margin-bottom: 30px;
  .attach-file-item{
    background: #FFFFFF;
    border: 1px solid #eee;
    border-radius: 2px;
    padding: 16px;
    margin-bottom: 14px;
    &:hover{
      cursor: pointer;
      color: #E1580D;
      border-color: #E1580D;
    }
    p{
      margin: 0;
    }
  }
}
</style>
