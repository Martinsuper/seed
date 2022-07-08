<template>
  <div>
    <el-table :data="tableData" style="width: 100%" max-height="350">
      <el-table-column fixed prop="taskName" label="任务" min-width="120" align="center"/>
      <el-table-column prop="taskDetail" label="详情" min-width="180" align="center"/>
      <el-table-column prop="deadline" label="截止日期" min-width="120" align="center"/>
      <el-table-column prop="taskStatus" label="状态" :formatter="formatStatus" min-width="80" align="center"/>
      <el-table-column fixed="right" label="操作" min-width="120" align="center">
        <template #default="scope">
          <el-button
              type="text"
              size="small"
              @click.prevent="updateStatus(scope.row,1)">开启
          </el-button>
          <el-button
              type="text"
              size="small"
              @click.prevent="updateStatus(scope.row,2)">完成
          </el-button>
          <el-button
              type="text"
              size="small"
              @click.prevent="updateStatus(scope.row,3)">删除
          </el-button>
          <el-button
              type="text"
              size="small"
              @click.prevent="modify(scope.row)">修改
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button class="mt-4" style="width: 49%" @click="dialogVisible = true">添加任务</el-button>
    <el-button class="mt-4" style="width: 49%" @click="getData">刷新数据</el-button>
  </div>
  <el-dialog
      v-model="dialogVisible"
      title="新增任务"
      width="30%"
      :before-close="handleClose">
    <el-form ref="taskFormRef" :model="taskForm">
      <el-form-item label="任务名称" prop="taskName">
        <el-input type="text" v-model="taskForm.taskName" placeholder="请输入任务名称"></el-input>
      </el-form-item>

      <el-form-item label="任务详情" prop="taskDetail">
        <el-input type="textarea" :rows="4" v-model="taskForm.taskDetail" placeholder="请输入任务详情"></el-input>
      </el-form-item>

      <el-form-item label="截止日期" prop="deadline">
        <el-date-picker
            v-model="taskForm.deadline"
            type="date"
            placeholder="截止日期"
            format="YYYY-MM-DD HH:mm:ss"
            value-format="YYYY-MM-DD HH:mm:ss"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">Cancel</el-button>
        <el-button type="primary" @click="addAndModify">Confirm</el-button>
      </span>
    </template>
  </el-dialog>

</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import axios from "axios";

@Options({
  props: {
    status: String,
    type: Number
  },
})
export default class Quadrant extends Vue {
  status!: number
  type!: number
  tableData = []
  dialogVisible = false
  taskForm = {
    id: null,
    taskName: "",
    taskDetail: "",
    deadline: "",
    importantType: 0,
    taskStatus: 0
  }

  updateStatus(data: any, status: number) {
    axios.post("http://dt.martind.cn:8088/quadrant/updateStatus", {id: data.id, taskStatus: status}).then(() => {
      this.getData()
    })
  }

  modify(data: any) {
    this.dialogVisible = true
    this.$nextTick(() => {
      this.taskForm = JSON.parse(JSON.stringify(data))
    })
  }

  addAndModify() {
    this.taskForm.importantType = this.type
    this.taskForm.taskStatus = this.status
    console.log(this.taskForm)
    axios.post("http://dt.martind.cn:8088/quadrant/save", this.taskForm).then(() => {
      this.getData()
      this.handleClose()
    })
  }

  handleClose() {
    this.dialogVisible = false
    const taskFormRef = this.$refs.taskFormRef as any
    this.$nextTick(() => {
      taskFormRef.resetFields()
    })
    this.taskForm.id = null
  }

  getData() {
    axios.get("http://dt.martind.cn:8088/quadrant/list?type=" + this.type + "&status=" + this.status).then((response) => {
      this.tableData = response.data
    })
  }

  formatStatus(row: any) {
    if (row.taskStatus === 0) {
      return '未完成'
    } else if (row.taskStatus === 1) {
      return '进行中'
    } else {
      return '已完成'
    }
  }
  created() {
    this.getData();
  }
}
</script>

<style scoped>

</style>