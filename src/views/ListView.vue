<template>
  <div>
    <ListCard :data="articles"></ListCard>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {LocationQueryValue} from "vue-router";
import axios from "axios";
import ListCard from "@/components/ListCard.vue";

@Options({
  components: {ListCard},
  watch: {
    $route(from, to) {
      console.log('from->' + from, 'to->' + to)
      if (from != to) {
        console.log(from.query, to.query)
        this.id = this.$route.query.category
        this.getData()
      }
    }
  },
  computed: {}
})
export default class ListView extends Vue {
  id: string | null | LocationQueryValue[] = ''
  articles=[]

  getData() {
    axios.get("http://localhost:8088/blog/list?category=" + this.id).then((response) => {
      this.articles = response.data
      console.log(response.data)
    })
  }

  created() {
    this.id = this.$route.query.category
    this.getData()
  }
}
</script>

<style scoped>

</style>