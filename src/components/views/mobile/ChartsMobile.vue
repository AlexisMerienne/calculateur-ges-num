<template>
  <div id="wrapper" wrapper="">
    <div id="progress-wrapper" style="display: flex;flex-direction: row;justify-content:center;width: 100%">
      <progress id="progress" v-bind:value="progress" max="12">70 %</progress>
      <h6 style="margin-left: 10px">{{progress}}/12</h6>
    </div>
    <PieChartMobile v-on:changeProgress="updateProgress"/>
  </div>
</template>
<script>

import PieChartMobile from "@/components/misc/charts/PieChartMobile";

export default {
  name: "PieChart",
  data() {
    return {
      chartdata : null,
      loaded : false,
      progress : 0,
    }
  },
  components : {
    PieChartMobile
  },
  methods:{
    updateProgress(){
      this.progress = this.$store.getters.getProgress
    },
  },
  mounted() {
    this.progress = this.$store.getters.getProgress
  }
}
</script>

<style scoped>
#wrapper{
  position: relative;
  flex-direction: column;
  align-items: center;
  min-width: 275px;
}


</style>