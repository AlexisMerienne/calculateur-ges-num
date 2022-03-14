<template>
  <div id="app">
    <Header/>
    <div id="body">
      <div v-if="currentviews!=='home'" id="b-prev" v-on:click="goToPrev">
        <img id="b-prev-icon" src="../src/assets/arrow-left-circle.svg" width="50" height="50">
      </div>
      <div id="wrapper">
        <router-view/>
      </div>
      <div id="b-next" v-on:click="goToNext">
           <img id="b-next-icon" src="../src/assets/arrow-right-circle.svg" width="50" height="50">
      </div>
    </div>
  </div>
</template>

<script>

import Header from "@/components/layouts/Header";
export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      currentviews : this.$store.getters.getCurrentView
    }
  },
  methods:{
    goToNext() {
      this.$router.push({name : this.$store.getters.getNextView});
      this.$store.commit('SET_VIEW');
      this.currentviews = this.$store.getters.getCurrentView
    },
    goToPrev() {
      this.$router.push({name : this.$store.getters.getPrevView});
      this.$store.commit('SET_VIEW_PREV');
      this.currentviews = this.$store.getters.getCurrentView
    }
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 25%;
}
#body {
  position: relative;
  display: flex;
  flex-direction: row;
}
#wrapper{
  width: 100%;
}
#b-next{
  position: absolute;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  top: 50%;
  left: 100%;
  margin : 5px;
}
#b-prev{
  position: absolute;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  top: 50%;
  left: -60px;
  margin: 5px;
}
#b-next-icon{
  cursor: pointer;
}
#b-next-icon:hover{
  background-color: lightslategray;
}
#b-prev-icon{
  cursor: pointer;
}
#b-prev-icon:hover{
  background-color: lightslategray;
}
</style>
