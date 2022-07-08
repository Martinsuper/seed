<template>
  <!--  <nav>-->
  <!--    <router-link to="/index">Home</router-link> |-->
  <!--    <router-link to="/about">About</router-link> |-->
  <!--  </nav>-->
  <Navigation></Navigation>
  <router-view />
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Navigation from "@/components/Navigation.vue";
@Options({
  components:{
    Navigation
  }
})
export default class App extends Vue {
  activeIndex = 1;
}
</script>
<style lang="scss"></style>
