<template>
  <div>
    <el-row>
      <el-col :offset="6" :span="11">
        <el-card style="height: 500px">
          <template #header>
            <div style="text-align: center">
              <span>进行中</span>
            </div>
          </template>
          <quadrant :type="5" status="1"></quadrant>
        </el-card>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <el-col :offset="1" :span="11">
        <el-card style="height: 500px">
          <template #header>
            <div style="text-align: center">
              <span>待办事项</span>
            </div>
          </template>
          <quadrant :type="5" :status="0"></quadrant>
        </el-card>
      </el-col>

      <el-col :span="11">
        <el-card style="height: 500px">
          <template #header>
            <div style="text-align: center">
              <span>已完成</span>
            </div>
          </template>
          <quadrant :type="5" :status="2"></quadrant>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {Options, Vue} from "vue-class-component";
import Quadrant from "@/components/Quadrant"

@Options({
  components: {
    Quadrant
  }
})
export default class TodayTask extends Vue {

}
</script>

<style scoped>

</style>