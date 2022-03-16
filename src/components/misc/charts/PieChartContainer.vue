<template>
  <div class="container" style="max-height: 60%">
    {{this.title}}
    <div id='flex-row' style="display: flex;flex-direction: row">
      <pie-chart v-if="loaded"
                 :chartdata="chartdata"
                 :options="options"/>
        <div id="flewx-total" style="display: flex;flex-direction:column;justify-content:center;align-items: center">
          Consommation totale <div id="stg wrapper" style="display:flex;flex-direction:row"><strong display="inline !important;">{{total}} </strong>gCo2/Kwh</div>
        </div>

    </div>

  <Popup
        :textbutton="btext"
        v-bind:sources="source"
        v-bind:content="focus"
        style="margin: 5px"></Popup>
    <div id="next-chart" v-on:click="nextChart">
      <img src="../../../assets/caret-down.svg" width="50" height="50">
    </div>
  </div>
</template>
<script>

import PieChart from "@/components/misc/charts/PieChart";
import Popup from "@/components/Popup";

export default {
  name : "myPieChart",
  components: {
    PieChart,
    Popup
  },
  data () {
    return {
      title : null,
      focus : null,
      source: null,
      btext : "D'où viennent les données ?",
      total : null,
      chartdata : null,
      options: {
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      },
      loaded : false
    }
  },
  methods : {
    nextChart() {
      this.loaded=false;
      this.$store.commit('SET_NEXT_CHARTID');
      const data = this.$store.getters.getChartData
      this.chartdata = data.chartdata
      this.title = data.title
      this.focus = data.focus
      this.source = data.src
      this.total = data.total
      this.loaded=true;
    }

  },
  mounted() {
    const data = this.$store.getters.getChartData
    this.chartdata = data.chartdata
    this.title = data.title
    this.focus = data.focus
    this.source = data.src
    this.loaded=true
  },
}
</script>

<style scoped>
#next-chart{
  margin: 10px;
  border-radius: 7px;
}
#next-chart:hover{
  background-color: lightgray;
  cursor: pointer;
}
</style>