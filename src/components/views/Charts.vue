<template>
  <div id="wrapper">
    <h3>Ma consommation</h3>
    <PieChartContainer v-if="loaded"
        :chartdata="chartdata"/>
  </div>
</template>

<script>

import PieChartContainer from "@/components/misc/charts/PieChartContainer";

export default {
  name: "PieChart",
  components : {
    PieChartContainer
  },
  data () {
    return {
      chartdata: null,
      loaded : false
    }
  },
  mounted() {
    this.chartdata = this.$store.getters.getActionGes
    this.loaded = true

  }
}
</script>

<style scoped>
#wrapper{
  position: relative;
  flex-direction: column;
  align-items: center;
  border: solid;
  border-radius: 7px;
  min-width: 275px;
}

</style>