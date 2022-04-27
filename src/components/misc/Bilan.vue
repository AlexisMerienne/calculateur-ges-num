<template>
  <div id="conclusion-wrapper" class="w3-container">
  </div>
</template>

<script>
export default {
  name: "Bilan",
  mounted() {

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
</script>

<style scoped>

</style>