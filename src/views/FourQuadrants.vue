<template>
  <div>
    <el-row>
      <el-col :offset="1" :span="11">
        <el-card style="height: 400px">
          <template #header>
            <div style="text-align: center">
              <span>重要且紧急</span>
            </div>
          </template>
          <quadrant :status="0"></quadrant>
        </el-card>
      </el-col>
      <el-col :span="11">
        <el-card style="height: 400px">
          <template #header>
            <div style="text-align: center">
              <span>紧急不重要</span>
            </div>
          </template>
          <quadrant :status="1"></quadrant>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :offset="1" :span="11">
        <el-card style="height: 400px">
          <template #header>
            <div style="text-align: center">
              <span>重要不紧急</span>
            </div>
          </template>
          <quadrant :status="2"></quadrant>
        </el-card>
      </el-col>
      <el-col :span="11">
        <el-card style="height: 400px">
          <template #header>
            <div style="text-align: center">
              <span>不紧急不重要</span>
            </div>
          </template>
          <quadrant :status="3"></quadrant>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
    </el-row>
    <el-row>
      <el-col :offset="1" :span="11">
        <el-card style="height: 400px">
          <template #header>
            <div style="text-align: center">
              <span>今日任务</span>
            </div>
          </template>
          <quadrant :status="4"></quadrant>
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
export default class FourQuadrants extends Vue {
}
</script>

<style scoped>

</style>