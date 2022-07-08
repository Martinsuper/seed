<template>
  <div id="test">
    <el-row>
      <el-col :span="14" :offset="5">
        <v-md-editor :model-value="content" mode="editor"></v-md-editor>
      </el-col>
    </el-row>
    <ListCard></ListCard>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {ElButton} from "element-plus";
import axios from "axios";
import ListView from "@/views/ListView.vue";
import ListCard from "@/components/ListCard.vue";

@Options({
  components: {
    ListCard,
    ElButton,
    ListView
  }
})
export default class index extends Vue {
  content = ""

  getMarkdownDetail() {
    axios.get("http://localhost:8088/blog/markdown/readme").then((response) => {
      this.content = response.data
    })
  }

  created() {
    this.getMarkdownDetail()
  }
}
</script>
