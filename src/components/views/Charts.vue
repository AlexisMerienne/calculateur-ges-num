<template>
  <div id="chart-view">
    <div id="progress-wrapper" style="display: flex;flex-direction: row;justify-content:center;width: 100%">
      <progress id="progress" v-bind:value="progress" max="11">70 %</progress>
      <h6 style="margin-left: 10px">{{progress}}/11</h6>
    </div>
    <div id="wrapper" shadow="">
      <PieChartContainer v-on:undisplayTab="updateTab" v-on:changeProgress="updateProgress"/>
    </div>
    <div id="tab-continus-backup" style="position:absolute;top:95px;right: 0px">
      <Tableau v-if="displayTab" v-bind:data="tabdata"></Tableau>
    </div>
  </div>
</template>
<script>

import PieChartContainer from "@/components/misc/charts/PieChartContainer";
import Tableau from "@/components/Tableau";

export default {
  name: "PieChart",
  data() {
    return {
      chartdata : null,
      loaded : false,
      displayTab : false,
      tabdata : {},
      progress : 0,
    }
  },
  components : {
    PieChartContainer,
    Tableau
  },
  methods: {
    updateTab(){
      this.displayTab = false
      this.tabdata = {
        colspan:this.$store.getters.getColspan,
        items:this.$store.getters.getItems
      }
      this.displayTab = true
    },
    updateProgress(){
      this.progress = this.$store.getters.getProgress
    }
  },
  mounted() {
    this.progress = this.$store.getters.getProgress
    if(this.$store.getters.getItems.length>1){
      this.tabdata = {
        colspan:this.$store.getters.getColspan,
        items:this.$store.getters.getItems
      }
      this.displayTab=true
    }
  }
}
</script>

<style scoped>
#wrapper{
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 275px;
}

</style>