<template>
  <div class="container" style="max-height: 60%">
    <div v-if="!conclusion">
    <div v-if="isChart">
    {{this.title}}
    <div id='flex-row' style="position:relative;display: flex;flex-direction: column">
      <pie-chart v-if="loaded"
                 :chartdata="chartdata"
                 :options="options"
                  :width='300'
                  :height='300'/>
      <div id="flewx-total" style="display: flex;flex-direction:column;justify-content:center;align-items: center">
        Consommation totale {{isForOnDay}}<div id="stg wrapper" style="display:flex;flex-direction:row"><strong>{{total}} </strong></div>
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
    <div v-else>
      <Conclusion/>
    </div>
  </div>
</template>
<script>

import PieChart from "@/components/misc/charts/PieChart";
import Popup from "@/components/Popup";
import Narratif from "@/components/misc/Narratif";
import Conclusion from "@/components/misc/Conclusion";

export default {
  name : "myPieChart",
  components: {
    PieChart,
    Popup,
    Narratif,
    Conclusion,
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
      narcontent : "",
      conclusion : false,
      isForOnDay : ""
    }
  },
  methods : {
    nextChart() {
      if (this.isChart && !this.conclusion){
        this.$store.commit('SET_NEXT_NARID');
        this.narcontent = this.$store.getters.getNarData;
        this.isChart=false
        this.$store.commit('SET_iS_CHART',false);
        this.conclusion = this.narcontent.isEnd;
        this.conclusion ? this.$store.commit('SET_NARID_END') : null;
      }else if (!this.conclusion){
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
      this.$store.commit('SET_PROGRESS',1)
      this.$emit('changeProgress')
    }

  },
  mounted() {
    const data = this.$store.getters.getChartData
    this.chartdata = data.chartdata
    this.title = data.title
    this.focus = data.focus
    this.source = data.src
    this.total = data.total
    data.id === 'chart-gesproduction' ? this.isForOnDay = "" : this.isForOnDay="(d'une journée)"
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