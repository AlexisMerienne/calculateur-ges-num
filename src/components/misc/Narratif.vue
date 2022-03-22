<template>
  <div id="narratif-wrapper">
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
    htmlObject.innerHTML = s;
    htmlObject.style.textAlign='left'
    document.getElementById('narratif-wrapper').appendChild(htmlObject)
  }

}
</script>

<style scoped>

</style>