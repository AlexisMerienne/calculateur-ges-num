<template>
  <div id="narratif-wrapper" class="w3-container">
    <div style="display: flex;flex-direction: row;justify-content: space-between">
      <div v-for="i in nbricon" :key="i">
        <img :src="require(`../../assets/${icon[i-1]}`)" height="50" width="50">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Narratif",
  props : {
    content:Object
  },
  data(){
    return {
      icon : "",
      nbricon : 0,
    }
  },
  beforeMount() {
    this.icon = this.content.icon
    this.nbricon = this.content.nbricon
  },
  mounted() {

    let s = this.content.nar;

    let htmlObject = document.createElement('h5');

    htmlObject.style.marginTop = "30px"
    htmlObject.className = "w3-left w3-animate-bottom"
    htmlObject.innerHTML = s;
    htmlObject.style.textAlign='left'


    document.getElementById('narratif-wrapper').appendChild(htmlObject)

  }

}
</script>

<style scoped>

</style>