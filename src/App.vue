<template>
  <div id="app">
    <Header/>
      <div v-if="currentviews!=='home'" id="b-prev" v-on:click="goToPrev">
        <img id="b-prev-icon" src="../src/assets/arrow-left-circle.svg" width="50" height="50">
      </div>
      <div id="wrapper">
        <router-view/>
      </div>
      <div v-if="currentviews!=='charts'" id="b-next" v-on:click="goToNext">
           <img id="b-next-icon" src="../src/assets/arrow-right-circle.svg" width="50" height="50">
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
      this.currentviews = this.$store.getters.getCurrentView;
    },
    goToPrev() {
      this.$router.push({name : this.$store.getters.getPrevView});
      this.$store.commit('SET_VIEW_PREV');
      this.currentviews = this.$store.getters.getCurrentView
    }
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
  updated() {
    this.$store.commit('SET_CURRENT_VIEW',this.currentRouteName)
    this.currentviews = this.$store.getters.getCurrentView
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

#wrapper{
  width: 100%;
}
#b-next{
  position: absolute;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  right: 20%;
}
#b-prev{
  position: absolute;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 20%;
}
#b-next-icon{
  border-radius: 25px;
  cursor: pointer;
}
#b-next-icon:hover{
  background-color: lightslategray;
  width: 53px;
  height: 53px;
}
#b-prev-icon{
  border-radius: 25px;
  cursor: pointer;
}
#b-prev-icon:hover{
  background-color: lightslategray;
  width: 53px;
  height: 53px;
}
</style>
