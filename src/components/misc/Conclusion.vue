<template>
  <div v-if="firstbilan">
    <div id="bilan-wrapper" class="w3-container">
      <span><h5>-- <strong>Mon Bilan</strong> --</h5></span>
    </div>
  </div>
  <div v-else>
    <div id="conclusion-wrapper" class="w3-container">
    </div>
  </div>
</template>

<script>
export default {
  name: "Conclusion",
  props : {
    firstbilan : Boolean
  },
  mounted() {

    if (this.firstbilan){
      let bilan = this.$store.getters.getBilanData;

      let htmlObjectBilan = document.createElement('h5');

      htmlObjectBilan.style.marginTop = "30px"
      htmlObjectBilan.className = "w3-left w3-animate-bottom"
      htmlObjectBilan.innerHTML = bilan;
      htmlObjectBilan.style.textAlign='left';

      document.getElementById('bilan-wrapper').appendChild(htmlObjectBilan)

    }else{

      let s = this.$store.getters.getConclusionData;

      let htmlObject = document.createElement('h5');

      htmlObject.style.marginTop = "30px"
      htmlObject.className = "w3-left w3-animate-bottom"
      htmlObject.innerHTML = s;
      htmlObject.style.textAlign='left';

      document.getElementById('conclusion-wrapper').appendChild(htmlObject)

      this.$store.commit('SET_PROGRESS',-10)
    }


  }

}
</script>

<style scoped>

</style>