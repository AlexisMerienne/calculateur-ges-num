<template>
  <div id="narratif-wrapper" class="w3-container">
    <div id="first-content"/>
    <div style="display: flex;flex-direction: row;justify-content: space-between">
      <div v-for="i in nbricon" :key="i">
        <img :src="require(`../../assets/${icon[i-1]}`)" :alt="icon[i-1]" height="50" width="50">
      </div>
    </div>
    <div id="second-content"/>
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

    let s1 = this.content.narfirst;

    let htmlObjectFirstContent = document.createElement('h5');

    htmlObjectFirstContent.style.marginTop = "30px"
    htmlObjectFirstContent.className = "first-content-txt"
    htmlObjectFirstContent.innerHTML = s1;
    htmlObjectFirstContent.style.textAlign='left'


    document.getElementById('first-content') != null ? document.getElementById('first-content').appendChild(htmlObjectFirstContent) : null

    let s2 = this.content.narsecond;

    let htmlObjectSecondContent = document.createElement('h5');

    htmlObjectSecondContent.style.marginTop = "30px"
    htmlObjectSecondContent.className = "second-content-txt"
    htmlObjectSecondContent.innerHTML = s2;
    htmlObjectSecondContent.style.textAlign='left'
    document.getElementById('second-content') != null ?document.getElementById('second-content').appendChild(htmlObjectSecondContent) : null


  }

}
</script>

<style scoped>

</style>