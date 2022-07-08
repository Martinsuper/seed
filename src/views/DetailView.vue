<template>
  <div>
    <el-row>
      <el-col :offset="5" :span="14">
        <v-md-editor :model-value="content" mode="preview"></v-md-editor>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {LocationQueryValue} from "vue-router";
import axios from "axios";

@Options({
  watch: {
    $route(from, to) {
      console.log('from->' + from, 'to->' + to)
      if (from != to) {
        console.log(from.query, to.query)
        this.id = this.$route.query.id
        this.getData()
      }
    }
  },
})
export default class DetailView extends Vue {
  id: string | null | LocationQueryValue[] = ''
  content=""

  getData() {
    axios.get("http://localhost:8088/blog/markdown/detail?fileId=" + this.id).then((response) => {
      this.content = response.data
      console.log(response.data)
    })
  }

  created() {
    this.id = this.$route.query.id
    this.getData()
  }
}
</script>