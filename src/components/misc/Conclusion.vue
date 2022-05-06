<template>
  <div v-if="firstbilan">
    <div id="bilan-container"  class="w3-container">
      <div id="bilan-wrapper">
        <span><h5>-- <strong>Mon Bilan</strong> --</h5></span>
      </div>
      <div id="image-budget-carbone" v-on:click="goToSourceBudgetCarbone">
        <img src='../../assets/ec_et_budget_carbone.png' alt='Budget carbone 2050' href="https://www.cigref.fr/wp/wp-content/uploads/2021/12/Cigref-INR-Sobriete-numerique-Piloter-empreinte-environnementale-numerique-par-mesure-Decembre-2021-MAJ-16122021.pdf">
      </div>
      <div style="text-align: left">
        <h5><br>Cliquez sur le boutton ci-dessous pour connaître le détail de ces émissions.</h5>
      </div>
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
  methods: {
    goToSourceBudgetCarbone(){
        window.open("https://www.cigref.fr/wp/wp-content/uploads/2021/12/Cigref-INR-Sobriete-numerique-Piloter-empreinte-environnementale-numerique-par-mesure-Decembre-2021-MAJ-16122021.pdf", "_blank");
    }
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

      this.$store.commit('SET_PROGRESS',-11)
    }


  }

}
</script>

<style scoped>

</style>