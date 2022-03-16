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
    let wrapper = document.getElementById("wrapper");
    wrapper.scrollIntoView();
  }
}
</script>

<style scoped>
#wrapper{
  position: relative;
  flex-direction: column;
  align-items: center;
  min-width: 275px;
}


</style>