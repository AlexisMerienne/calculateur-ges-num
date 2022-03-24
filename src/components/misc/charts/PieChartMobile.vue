<template>
  <div class="container" style="max-height: 60%">
    <div v-if="isChart">
    {{this.title}}
    <div id='flex-row' style="position:relative;display: flex;flex-direction: column">
      <pie-chart v-if="loaded"
                 :chartdata="chartdata"
                 :options="options"
                  :width='300'
                  :height='300'/>
      <div id="flewx-total" style="display: flex;flex-direction:column;justify-content:center;align-items: center">
        Consommation totale <div id="stg wrapper" style="display:flex;flex-direction:row"><strong>{{total}} </strong></div>
      </div>
    </div>

    <Popup
        :textbutton="btext"
        v-bind:sources="source"
        v-bind:content="focus"
        style="margin: 5px"></Popup>
    </div>
    <div v-else>
      <Narratif
          v-bind:content="narcontent"/>
    </div>
    <div id="next-chart" v-on:click="nextChart">
      <img src="../../../assets/caret-down.svg" width="50" height="50">
    </div>
  </div>
</template>
<script>

import PieChart from "@/components/misc/charts/PieChart";
import Popup from "@/components/Popup";
import Narratif from "@/components/misc/Narratif"

export default {
  name : "myPieChart",
  components: {
    PieChart,
    Popup,
    Narratif
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
      loaded : false,
      isChart : false,
      narcontent : ""
    }
  },
  methods : {
    nextChart() {
      if (this.isChart){
        this.$store.commit('SET_NEXT_NARID');
        this.narcontent = this.$store.getters.getNarData;
        this.isChart=false
        this.$store.commit('SET_iS_CHART',false);
      }else {
        this.loaded = false;
        this.$store.commit('SET_NEXT_CHARTID');
        const data = this.$store.getters.getChartData
        this.chartdata = data.chartdata
        this.title = data.title
        this.focus = data.focus
        this.source = data.src
        this.total = data.total
        this.loaded = true;
        this.isChart=true;
        this.$store.commit('SET_iS_CHART',true);
      }
    }

  },
  mounted() {
    const data = this.$store.getters.getChartData
    this.chartdata = data.chartdata
    this.title = data.title
    this.focus = data.focus
    this.source = data.src
    this.total = data.total
    this.loaded=true
    this.isChart = this.$store.getters.getIsChart;
  },
  beforeMount() {
    this.narcontent = this.$store.getters.getNarData
  }
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