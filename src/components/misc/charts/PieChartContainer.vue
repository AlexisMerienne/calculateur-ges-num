<template>
  <div class="container">
    <pie-chart
        :chartdata="chartdata"
        :options="options"/>
  </div>
</template>


<script>

import PieChart from "@/components/misc/charts/PieChart";

export default {
  name : "myPieChart",
  components: {
    PieChart
  },
  props: {
    chartdata : Object,
  },
  data () {
    return {
      options: {
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  methods : {
  },
  mounted() {
    console.log(this.chartdata)
  }
}
</script>