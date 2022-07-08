<template>
  <div>
    <el-row>
      <el-col :offset="6" :span="12">
        <el-divider/>
        <div v-for="curData in data" :key="curData.content">
          <el-card shadow="always" @click="handleClick(curData.fileId)">
            <div id="title">{{ curData.categoryName }}</div>
            <div id="content">{{ curData.content }}</div>
          </el-card>
          <div style="margin: 24px"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {Options, Vue} from "vue-class-component";
@Options({
  props:{
    data:Array
  }
})
export default class ListCard extends Vue {
  handleClick(fileId){
    this.$router.push('/detail?id='+fileId)
    console.log(fileId)
  }
}
</script>

<style scoped>
#title {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #1d2129;
  margin-bottom: 8px;
}

#content {
  font-weight: 400;
  font-size: 13px;
  line-height: 22px;
  color: #86909c;
}
</style>