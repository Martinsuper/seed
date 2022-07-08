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

@Options({
})
export default class HomeView extends Vue {
  content = "# H1"
}
</script>