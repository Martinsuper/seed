<template>
  <div>
    <el-row>
      <el-col :offset="4" span="2">
        <el-input v-model="firstTitle"></el-input>
      </el-col>
      <el-col :span="1">
        <el-button v-on:click="save()">提交</el-button>
      </el-col>
      <el-col :offset="1" span="2">
        <el-input v-model="secondTitle"></el-input>
      </el-col>
      <el-col :span="1">
        <el-button v-on:click="save(this.firstValue)">提交</el-button>
      </el-col>
      <el-col :span="4">
        <el-select v-model="firstValue" :change="selectOne()">
          <el-option
              v-for="item in firstCategoryList"
              :key="item.id"
              :label="item.categoryName"
              :value="item.id">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select v-model="secondValue">
          <el-option
              v-for="item in secondCategoryList"
              :key="item.id"
              :label="item.categoryName"
              :value="item.id">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row>
      <el-col :offset="2" :span="20">
        <v-md-editor :model-value="content" height="800px"></v-md-editor>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {Vue} from "vue-class-component";
import axios from "axios";

export default class EditView extends Vue {
  firstTitle = ""
  secondTitle = ""
  firstCategoryList = []
  secondCategoryList = []
  content = ""
  firstValue = ''
  secondValue = ''

  save(id) {
    if (!this.firstTitle || !this.secondTitle) {
      return
    }
    id = id ? id : 0
    axios.post("http://localhost:8088/blog/category/save", {
      categoryName: this.firstTitle,
      parentId: id
    })
    this.getList()
  }

  selectOne() {
    if (this.firstValue) {
      this.getList(this.firstValue)
    }
  }

  getList(parentId) {
    parentId = parentId ? parentId : 0
    axios.get("http://localhost:8088/blog/category/list?parentId=" + parentId).then(response => {
      parentId === 0 ? this.firstCategoryList = response.data : this.secondCategoryList = response.data
    })
  }

  mounted() {
    this.getList()
  }
}
</script>

<style scoped>

</style>