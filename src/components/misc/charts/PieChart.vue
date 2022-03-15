<script>
import  { Pie }  from 'vue-chartjs'
export default {
  extends: Pie,
  props: ['chartdata','options'],
  methods : {
    renderLineChart(){
      this.renderChart(this.chartdata, this.options)
    }
  },
  computed: {
    chartData: function() {
      return this.chartdata;
    }
  },
  mounted() {
    this.renderLineChart();
  },
  watch: {
    chartdata: function() {
      //this.renderChart(this.data, this.options);
      this.renderLineChart();
    }
  }
}
</script>