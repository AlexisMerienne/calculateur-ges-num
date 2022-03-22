<template>
  <div id="wrapper" shadow="">
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