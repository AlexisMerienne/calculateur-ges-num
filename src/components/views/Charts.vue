<template>
  <div id="wrapper">
    <h3>Ma consommation</h3>
    <PieChartContainer/>
  </div>
</template>

<script>

import PieChartContainer from "@/components/misc/charts/PieChartContainer";

export default {
  name: "PieChart",
  data() {
    return {
      chartdata : null,
      loaded : false,
    }
  },
  components : {
    PieChartContainer
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