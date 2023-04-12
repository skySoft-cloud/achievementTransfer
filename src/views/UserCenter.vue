<template>
  <div class="user-center">
    <div class="header-container">
      <div class="bread-list">
        <div class="top-search">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{name:'TheIndex'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item>个人中心</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
    </div>
    <div class="w1240 df">
      <div class="left-tab">
        <ul class="flex-column">
          <li @click="tabName = 'userInfo'"
              :class="[tabName === 'userInfo' ? 'active' : '']"><i class="el-icon-user"></i> 个人信息
          </li>
          <li @click="tabName = 'summary'"
              :class="[tabName === 'summary' ? 'active' : '']"><i class="el-icon-bangzhu"></i>
            成果管理
          </li>
          <li @click="tabName = 'requirement'"
              :class="[tabName === 'requirement' ? 'active' : '']"><i class="el-icon-document"></i>
            需求管理
          </li>
          <li @click="tabName = 'myTeam'"
              :class="[tabName === 'myTeam' ? 'active' : '']"><i class="el-icon-menu"></i>
            我的团队
          </li>
        </ul>
      </div>
      <div class="right-content">
        <div v-if="tabName === 'userInfo'">
          <el-form ref="userForm" :model="userForm" label-width="100px">
            <el-form-item label="账户名：">
              <span>{{userForm.username}}</span>
            </el-form-item>
            <el-form-item label="注册时间：">
              <span>{{userForm.createTime}}</span>
            </el-form-item>
          </el-form>
        </div>
        <div v-if="tabName === 'myTeam'">
          <my-team></my-team>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyTeam from '@/components/MyTeam'
export default {
  name: 'UserCenter',
  components: { MyTeam },
  data () {
    return {
      tabName: 'userInfo',
      userForm: {
        username: '18088888888',
        createTime: '2019-11-12'
      }
    }
  },
  mounted () {

  },
  methods: {},
}
</script>

<style lang="scss"
       scoped>
.left-tab {
  padding: 24px 0;
  margin-bottom: 40px;
  height: 700px;
  border: 1px solid #eee;
  background: #FAFAFA;
  margin-right: 8px;

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
    padding: 18px 40px;
    margin-bottom: 18px;
    font-size: 18px;

    &:not(.active):hover {
      cursor: pointer;
      color: #E7742B;
    }
  }

  .active {
    background: #E7742B;
    color: #fff;
  }
}
.right-content{
  margin-left: 80px;
}
</style>
