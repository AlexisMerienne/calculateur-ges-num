<template>
  <div id="chart-view">
    <div id="wrapper" shadow="">
      <PieChartContainer v-on:undisplayTab="updateTab"/>
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
      tabdata : {}
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
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
#wrapper{
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 90%;
  min-width: 275px;
}


</style>