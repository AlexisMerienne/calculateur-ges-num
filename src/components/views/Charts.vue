<template>
  <div id="chart-view">
    <div id="wrapper" wrapper="">
      <div id="progress-wrapper" style="display: flex;flex-direction: row;justify-content:center;width: 100%">
        <progress id="progress" v-bind:value="progress" max="12">70 %</progress>
        <h6 style="margin-left: 10px;">{{progress}}/12</h6>
      </div>
      <PieChartContainer v-on:undisplayTab="updateTab" v-on:changeProgress="updateProgress"/>
    </div>
    <div id="tab-continus-backup" style="position:absolute;top:95px;right: 0px;">
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
    },
    changeSizeTab(){
      const largeur = window.innerWidth;
      const largeurWrapper = document.getElementById('app').offsetWidth
      const largeurtab = largeur*(1-0.5*(1+(largeurWrapper/largeur)))
      document.getElementById('tab-continus-backup').style.width=largeurtab.toString() + 'px'
    }
  },
  created() {
    window.addEventListener("resize", this.changeSizeTab);
  },
  destroyed() {
    window.removeEventListener("resize", this.changeSizeTab);
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
    this.changeSizeTab()

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
#tab-continus-backup{
  display: flex;
  justify-content: center;
}

</style>