<template>
  <div id="wrapper" shadow="">
    <PieChartMobile/>
  </div>
</template>
<script>

import PieChartMobile from "@/components/misc/charts/PieChartMobile";

export default {
  name: "PieChart",
  data() {
    return {
      chartdata : null,
      loaded : false,
    }
  },
  components : {
    PieChartMobile
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