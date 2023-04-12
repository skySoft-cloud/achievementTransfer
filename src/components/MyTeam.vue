<template>
  <div class="my-team">
    <div class="table-operate">
      <el-button type="primary"
                 @click="clickAddTeam">添加团队
      </el-button>
    </div>
    <div class="table-content">
      <el-table
        :data="teamList"
        style="width: 100%">
        <el-table-column
          width="200"
          label="团队名称"
          prop="name">
        </el-table-column>
        <el-table-column
          width="200"
          label="创建时间"
          prop="createTime">
        </el-table-column>
        <el-table-column
          width="200"
          label="技术领域"
          prop="domain">
        </el-table-column>
        <el-table-column label="操作"
                         width="350">
          <template slot-scope="scope">
            <el-button size="mini">查看</el-button>
            <el-button size="mini">编辑</el-button>
            <el-dropdown style="margin-left: 10px;margin-right: 10px;">
              <el-button type="primary"
                         size="mini">
                团队管理<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="clickTeamMember(scope.row.id)">团队成员</el-dropdown-item>
                <el-dropdown-item @click.native="clickTeamEvent(scope.row.id)">团队大事迹</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-button size="mini"
                       type="danger">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="新增团队"
               :close-on-click-modal="false"
               width="40%"
               :visible.sync="dialogFormVisible">
      <el-form :model="teamForm"
               ref="form"
               label-width="100px"
               label-position="left">
        <el-form-item label="团队名称"
                      prop="name"
                      required>
          <el-input v-model="teamForm.name"></el-input>
        </el-form-item>
        <el-form-item label="技术领域"
                      prop="domain"
                      required>
          <el-input v-model="teamForm.domain"></el-input>
        </el-form-item>
        <el-form-item label="团队介绍">
          <el-input v-model="teamForm.remark"
                    type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="团队亮点">
          <el-input v-model="teamForm.feature"
                    type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="细分研究方向">
          <el-input v-model="teamForm.researchInterests"
                    type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="confirmAddTeam"
        >确 定
        </el-button>
      </div>
    </el-dialog>
    <el-dialog title="团队成员"
               width="80%"
               :visible.sync="teamMemberDialog">
      <div class="table-operate">
        <el-button type="primary"
                   @click="clickAddMember">添加成员
        </el-button>
      </div>
      <el-table :data="teamMember">
        <el-table-column property="name"
                         label="姓名"
                         width="150"></el-table-column>
        <el-table-column property="sex"
                         label="性别"
                         width="200"></el-table-column>
        <el-table-column property="qualification"
                         label="最高学历"></el-table-column>
        <el-table-column property="school"
                         label="毕业院校"></el-table-column>
        <el-table-column property="post"
                         label="职务"></el-table-column>
        <el-table-column property="positionalTitles"
                         label="职称"></el-table-column>
        <el-table-column property="domain"
                         label="研究领域"></el-table-column>
        <el-table-column property="researchDirection"
                         label="研究方向"></el-table-column>
        <el-table-column label="操作"
                         width="150">
          <template slot-scope="scope">
            <el-button size="mini">编辑</el-button>
            <el-button size="mini"
                       type="danger">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="teamMemberDialog = false">返回</el-button>
      </div>
    </el-dialog>
    <el-dialog title="新增成员"
               :close-on-click-modal="false"
               width="40%"
               :visible.sync="addMemberDialog">
      <el-form :model="addMemberForm"
               class="add-member-form"
               ref="addMemberForm"
               label-width="100px"
               label-position="left">
        <el-form-item label="姓名"
                      required>
          <el-input v-model="addMemberForm.name"></el-input>
        </el-form-item>
        <el-form-item label="性别"
                      required>
          <el-radio-group v-model="addMemberForm.sex">
            <el-radio label="1">男</el-radio>
            <el-radio label="2">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="最高学历">
          <el-select v-model="addMemberForm.qualification"
                     placeholder="选择最高学历">
            <el-option label="博士"
                       value="1"></el-option>
            <el-option label="硕士"
                       value="2"></el-option>
            <el-option label="本科"
                       value="3"></el-option>
            <el-option label="专科"
                       value="4"></el-option>
            <el-option label="中专/高中"
                       value="5"></el-option>
            <el-option label="初中"
                       value="6"></el-option>
            <el-option label="小学"
                       value="7"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="毕业院校">
          <el-input v-model="addMemberForm.school"></el-input>
        </el-form-item>
        <el-form-item label="职务">
          <el-input v-model="addMemberForm.post"></el-input>
        </el-form-item>
        <el-form-item label="职称">
          <el-input v-model="addMemberForm.positionalTitles"></el-input>
        </el-form-item>
        <el-form-item label="研究领域">
          <el-input v-model="addMemberForm.domain"></el-input>
        </el-form-item>
        <el-form-item label="研究方向">
          <el-input v-model="addMemberForm.researchDirection"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="addMemberDialog = false">取 消</el-button>
        <el-button type="primary"
                   @click="confirmAddTeamMember"
        >确 定
        </el-button>
      </div>
    </el-dialog>
    <el-dialog title="团队事迹"
               width="80%"
               :visible.sync="teamEventDialog">
      <div class="table-operate">
        <el-button type="primary"
                   @click="clickAddTeamEvent">添加事迹
        </el-button>
      </div>
      <el-table :data="teamEventList">
        <el-table-column property="eventDate"
                         label="发生日期"
                         width="150"></el-table-column>
        <el-table-column property="eventContent"
                         label="事迹内容"
                         width="200"></el-table-column>
        <el-table-column label="操作"
                         width="150">
          <template slot-scope="scope">
            <el-button size="mini">编辑</el-button>
            <el-button size="mini"
                       type="danger">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="teamEventDialog = false">返回</el-button>
      </div>
    </el-dialog>
    <el-dialog title="新增事迹"
               :close-on-click-modal="false"
               width="40%"
               :visible.sync="addTeamEventDialog">
      <el-form :model="addTeamEventForm"
               class="add-member-form"
               ref="addMemberForm"
               label-width="100px"
               label-position="left">
        <el-form-item label="发生日期"
                      required>
          <el-date-picker type="date"
                          placeholder="选择发布日期"
                          v-model="addTeamEventForm.eventDate"
                          style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item label="事迹内容">
          <el-input v-model="addTeamEventForm.eventContent"
                    type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="addTeamEventDialog = false">取 消</el-button>
        <el-button type="primary"
                   @click="confirmAddTeamEvent"
        >确 定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { addTeam, addTeamMember, getTeamEvent, getTeamList, getTeamMember } from '@/api/apiFunc'

export default {
  name: 'MyTeam',
  data () {
    return {
      dialogFormVisible: false,
      teamMemberDialog: false,
      addMemberDialog: false,
      addTeamEventDialog: false,
      teamEventDialog: false,
      addMemberForm: {
        'sex': '1',
        'domain': '',
        'name': '',
        'positionalTitles': '',
        'post': '',
        'qualification': '3',
        'researchDirection': '',
        'school': '',
      },
      teamForm: {
        name: '',
        domain: '',
        remark: '',
        feature: '',
        researchInterests: '',
      },
      addTeamEventForm: {
        eventDate: '',
        eventContent: '',
      },
      teamList: [
        { id: '1', name: '相信团队', createTime: '2019-9-9', domain: '环保科技' }
      ],
      teamMember: [
        {
          'id': '1',
          'domain': '新能源利用和分析',
          'name': '贾乃亮',
          'sex': '男',
          'positionalTitles': '行业专家',
          'post': '行业专家',
          'qualification': '本科',
          'researchDirection': '环保、回收',
          'school': '北京师范大学',
        }
      ],
      teamEventList: []
    }
  },
  watch: {
    dialogFormVisible: function (val) {
      if (!val) {
        this.$refs.teamForm.resetFields()
      }
    }
  },
  mounted () {
    // this.getTeamList()
  },
  methods: {
    clickAddTeam () {
      this.dialogFormVisible = true
    },
    confirmAddTeam () {
      addTeam(this.teamForm).then(res => {
        if (res.data.code === 200) {
          this.$notify({
            title: '成功',
            message: '新增成功.',
            type: 'success'
          })
          this.dialogFormVisible = false
          this.getTeamList()
        } else {
          this.$notify({
            title: '失败',
            message: '新增失败',
            type: 'error'
          })
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getTeamList () {
      getTeamList().then(res => {
        this.teamList = res?.data?.result?.records || []
      }).catch(err => {
        console.log(err)
      })
    },
    clickTeamMember (id) {
      this.teamId = id
      this.getTeamMemberList()
    },
    clickTeamEvent (id) {
      this.teamId = id
      this.getTeamEventList()
    },
    getTeamMemberList () {
      getTeamMember(this.teamId).then(res => {
        this.teamMemberDialog = true
        this.teamMember = res?.data?.result?.records || []
      }).catch(err => {
        this.teamMemberDialog = false
      })
    },
    getTeamEventList () {
      getTeamEvent(this.teamId).then(res => {
        this.teamEventDialog = true
        this.teamEventList = res?.data?.result?.records || []
      }).catch(err => {
        this.teamEventDialog = true
      })
    },
    clickAddMember () {
      this.addMemberDialog = true
    },
    confirmAddTeamMember () {
      addTeamMember(this.addMemberForm).then(res => {
        console.log(res)
        this.addMemberDialog = false
        this.getTeamMemberList()
      }).catch(err => {
        this.addMemberDialog = false
        console.log(err)
      })
    },
    clickAddTeamEvent () {
      this.addTeamEventDialog = true
    },
    confirmAddTeamEvent () {
      addTeamMember(this.addMemberForm).then(res => {
        console.log(res)
        this.getTeamEventList()
        this.addTeamEventDialog = false
      }).catch(err => {
        console.log(err)
        this.addTeamEventDialog = false
      })
    },
  }
}
</script>

<style lang="scss"
       scoped>
.table-operate {
  padding-bottom: 10px;
}

.el-table th.el-table__cell {
  background: #f5f5f5;
}

.add-member-form {
  .el-select {
    width: 100%;
  }
}
</style>
