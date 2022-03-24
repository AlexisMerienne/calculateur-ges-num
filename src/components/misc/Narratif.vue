<template>
  <div id="narratif-wrapper" class="w3-container">
  </div>

</template>

<script>
export default {
  name: "Narratif",
  props : {
    content:String
  },
  mounted() {
    let s = this.content;
    let htmlObject = document.createElement('h5');
    htmlObject.className = "w3-left w3-animate-bottom"
    htmlObject.innerHTML = s;
    htmlObject.style.textAlign='left'
    document.getElementById('narratif-wrapper').appendChild(htmlObject)
  }

}
</script>

<style scoped>

</style>