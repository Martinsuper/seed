<template>
  <div>
    <el-row>
      <el-col>
        <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            :ellipsis="false"
            :router="true"
            @select="handleSelect">
          <div v-for="nav in navigations" :key="nav.fileId">
            <el-menu-item v-if="nav.subCategories.length === 0" :key="nav.fileId"
                          :index="String('/list?category='+nav.fileId)">
              {{ nav.categoryName }}
            </el-menu-item>
            <el-sub-menu class="test" v-else :index="nav.fileId">
              <template #title>{{ nav.categoryName }}</template>
              <el-menu-item v-for="sub in nav.subCategories" :key="sub.fileId"
                            :index="String('/list?category='+sub.fileId)">
                {{ sub.categoryName }}
              </el-menu-item>
            </el-sub-menu>
          </div>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import axios from "axios";

@Options({
  methods: {
    handleSelect(key: string, keyPath: string) {
      console.log(key, keyPath)
    },

  }
})
export default class Navigation extends Vue {
  activeIndex = '1'
  navigations = [{
    categoryName: '',
    path: '',
    fileId: '',
    subCategories: []
  }]

  getNavigation() {
    axios.get("http://localhost:8088/blog/navigations").then(response => {
      this.navigations = response.data
      console.log(response.data)
    })
  }

  created() {
    this.getNavigation()
  }
}
</script>
<style>
.el-sub-menu.test .el-sub-menu__icon-arrow{
  right: 2px;
}
</style>
<style scoped>

</style>
