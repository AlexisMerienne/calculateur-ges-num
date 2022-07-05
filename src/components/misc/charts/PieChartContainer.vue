<template>
  <div class="container" style="max-height: 60%">
    <div v-if="!conclusion">
      <div v-if="isChart">
        <h5 style="height: 75px;text-align: left">{{this.title}}</h5>
      <div id='flex-row' style="display: flex;flex-direction: row">
        <pie-chart v-if="loaded"
                   :chartdata="chartdata"
                   :options="options"
                   :width='320'
                   :height='320'/>
          <div id="flewx-total" style="display: flex;flex-direction:column;justify-content:center;align-items: center">
            Emission totale {{isForOnDay}}<div id="stg wrapper" style="display:flex;flex-direction:row"><strong>{{total}} </strong></div>
            <div v-if="compareToSobriete">
              <div id="button-compare-sobriete" v-on:click="showGraph">
                <h6 style="margin: 5px">Graphe sans sobriété</h6>
              </div>
            </div>
          </div>
      </div>
    <Popup
          :textbutton="btext"
          v-bind:sources="source"
          v-bind:content="focus"
          v-bind:isEquation="isEquation"
          v-bind:src_equation="src_equation"
          style="margin: 5px"></Popup>
      </div>
    <div v-else>
      <Narratif
          v-bind:content="narcontent"/>
    </div>
      <div id="nav-charts" style="display: flex;flex-direction: row;justify-content: space-between">
        <div id="previous-chart" v-on:click="previousChart">
          <img src="../../../assets/caret-left.svg" width="50" height="50">
        </div>
        <div id="next-chart" v-on:click="nextChart">
          <img src="../../../assets/caret-right.svg" width="50" height="50">
        </div>
      </div>

  </div>
  <div v-else>
    <Conclusion v-bind:firstbilan="firstbilan"/>
    <div id="nav-charts-bilan" style="display: flex;justify-content: center;align-items: center;">
      <div v-if="firstbilan" style="display:flex;justify-content:center;width: 100%">
        <div id="next-chart-bilan" v-on:click="nextChartBilan" style="display: flex;justify-content: center;">
          <img src="../../../assets/caret-right.svg" width="50" height="50">
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>

import PieChart from "@/components/misc/charts/PieChart";
import Popup from "@/components/popup/Popup";
import Narratif from "@/components/misc/Narratif";
import Conclusion from "@/components/misc/Conclusion";

export default {
  name : "myPieChart",
  components: {
    Narratif,
    PieChart,
    Popup,
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
      isForOnDay : "",
      compareToSobriete :false,
      isEquation : false,
      src_equation : "",
      firstbilan : true,
      showgraph : true,
      consotot : 0
    }
  },
  methods : {

    nextChartBilan() {
      this.conclusion=false;
      const data = this.$store.getters.getChartData
      this.chartdata = data.chartdata
      this.title = data.title
      this.focus = data.focus
      this.source = data.src
      this.total = data.total
      this.loaded=true;
      this.isChart = this.$store.getters.getIsChart;
      this.$store.commit('SET_PROGRESS',1);
      this.$emit('changeProgress')
      this.$store.commit('SET_SHOW_BILAN',false);
      this.consotot = this.$store.getters.getConsoTotal
    },
    nextChart() {
      if (this.isChart && !this.conclusion){
        this.$store.commit('SET_NEXT_NARID');
        this.narcontent =   this.$store.getters.getNarData;
        this.isChart=false;
        this.$store.commit('SET_iS_CHART',false);
        this.conclusion = this.narcontent.isEnd;
        if(this.conclusion) {
          this.$store.commit('SET_NARID_END');
          this.$store.commit('DELETE_ROWS');
          this.$store.commit('SET_SHOW_BILAN',true);
          this.firstbilan = false;
        }
      }else if (!this.conclusion){
      this.loaded=false;
      this.$store.commit('SET_NEXT_CHARTID');
      const data = this.$store.getters.getChartData
      this.chartdata = data.chartdata
      this.title = data.title
      this.focus = data.focus
      this.source = data.src
      this.total = data.total
      this.isEquation = data.isEquation
      this.src_equation=data.src_equation
      data.id === 'chart-gesproduction' ? this.isForOnDay = "" : this.isForOnDay="(d'une journée)"
      data.id==='chart-gesdoubleutilisationproduction'?this.compareToSobriete=true: this.compareToSobriete=false;
      this.loaded=true;
      this.isChart=true;
      this.$store.commit('SET_iS_CHART',true);
      if (data.addrow){
        this.$store.commit('ADD_ROW',{
          data:data,
          conso: this.$store.getters.getConsoTotal

        })
      }
      this.$emit('undisplayTab')
      }
      this.$store.commit('SET_PROGRESS',1)
      this.$emit('changeProgress')
    },
    previousChart(){
        if (this.isChart && !this.conclusion){
          this.$store.commit('SET_PREVIOUS_CHART');
          this.narcontent = this.$store.getters.getNarData;
          this.isChart=false;
          this.$store.commit('SET_iS_CHART',false);
        }else if (!this.conclusion){
          if(this.$store.getters.getCurrentNarId==='nar-gesdevice'){
            this.$store.commit('SET_SHOW_BILAN',true);
            this.conclusion = this.$store.getters.getShowBilan
          }else {
            this.loaded = false;
            this.$store.commit('SET_PREVIOUS_NARID');
            const data = this.$store.getters.getChartData
            data.id === 'chart-gesproduction' ? this.isForOnDay = "" : this.isForOnDay = "(d'une journée)"
            data.id === 'chart-gesdoubleutilisationproduction' ? this.compareToSobriete = true : this.compareToSobriete = false;
            this.chartdata = data.chartdata
            this.title = data.title
            this.focus = data.focus
            this.source = data.src
            this.total = data.total
            this.isEquation = data.isEquation
            this.src_equation = data.src_equation
            this.loaded = true;
            this.isChart = true
            this.$store.commit('SET_iS_CHART', true);
            if (data.addrow) {
              this.$store.commit('ADD_ROW', {
                data:data,
                conso:this.$store.getters.getConsoTotal
              })
            }
          }
          this.$emit('undisplayTab')
        }
      this.$store.commit('SET_PROGRESS',-1)
      this.$emit('changeProgress')
    },
    showGraph(){
        if (this.showgraph){
        this.isChart=false;
        const data = this.$store.getters.getChartDataSpec('chart-gesutilisationproduction')
        this.chartdata = data.chartdata
        this.title = data.title
        this.focus = data.focus
        this.source = data.src
        this.total = data.total
        this.isChart=true
        this.showgraph=false;
        const element = document.getElementById("button-compare-sobriete");
        element.style.backgroundColor = "lightgrey"
        element.style.boxShadow = "0 5px #666";
        }else{
          this.stopShowGraph()
          this.showgraph=true;
          const element = document.getElementById("button-compare-sobriete");
          element.style.backgroundColor = "#7993ff"
          element.style.boxShadow = "0 9px #999";
        }
    },
    stopShowGraph(){
      this.isChart=false;
      const data = this.$store.getters.getChartDataSpec('chart-gesdoubleutilisationproduction')
      this.chartdata = data.chartdata
      this.title = data.title
      this.focus = data.focus
      this.source = data.src
      this.total = data.total
      this.isChart=true

    }
  },
  updated() {
    if (document.getElementById('wrapper').offsetWidth < 490 && this.isChart){document.getElementById('flex-row').style.flexDirection='column'}
  },
  mounted() {
    this.conclusion =this.$store.getters.getShowBilan;
    const data = this.$store.getters.getChartData
    this.chartdata = data.chartdata
    this.title = data.title
    this.focus = data.focus
    this.source = data.src
    this.total = data.total
    this.loaded=true;
    this.isChart = this.$store.getters.getIsChart;
  },
  beforeMount() {
    this.narcontent = this.$store.getters.getNarData
  }
}
</script>

<style scoped>
#next-chart{
  margin: 10px 30px;
  width: 100%;
  border-radius: 7px;
}
#previous-chart{
  margin: 10px 30px;
  width: 100%;
  border-radius: 7px;
}
#next-chart:hover{
  background-color: lightgray;
  cursor: pointer;
}
#previous-chart:hover{
  background-color: lightgray;
  cursor: pointer;
}
#next-chart-bilan{
  margin: 10px 30px;
  width: 100%;
  border-radius: 7px;
}
#previous-chart-bilan{
  margin: 10px 30px;
  width: 100%;
  border-radius: 7px;
}
#next-chart-bilan:hover{
  background-color: lightgray;
  cursor: pointer;
}
#previous-chart-bilan:hover{
  background-color: lightgray;
  cursor: pointer;
}
#button-compare-sobriete{
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 25px;
  padding: 15px 25px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #7993ff;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  min-height: 30px;
}
#button-compare-sobriete:hover{
  background-color: #7993ff;
}
#button-compare-sobriete:active {
  background-color: #7993ff;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>