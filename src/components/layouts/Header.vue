<template>
  <div class="header">
      <h5 style="max-width: 300px"><strong>Impactomètre carbone du <span style="color:#6887ff">numérique</span></strong></h5>
    <div id="logo-img" alt="logo-i3S" v-on:click="goToI3s">
      <img id="img-logo-i3s" src="../../assets/NewlogoI3S_0.png" alt="I3S logo" width="100%">
    </div>
  </div>
</template>


<script>


export default {
  name: "Header",
  components:{
  },
  methods : {
    goToI3s(){
      window.open("https://www.i3s.unice.fr/", "_blank");
    }
  }
}
</script>

<style scoped>

.header{
    display: flex;
    height: 55px;
    text-align: left;
    align-items: center;
    #border: solid;
    border-radius: 7px;
    margin-bottom: 20px;
    margin-top: 20px;
    min-width: 275px;
}
h2{
  margin-left: 10px;
}
logo-img{
  cursor: pointer;
}

</style>