<template>
  <div id="displayer" shadow="">
    <div v-if="action.label==='mail'">
      {{action.label}}
      <b-form-input id="mail" v-model="action.value_1" placeholder="mails"></b-form-input>
      <b-form-input id="mailpj" v-model="action.value_2" placeholder="mails avec pièces jointes"></b-form-input>
    </div>
    <div v-else style="display: flex;flex-direction: column">
      {{action.label}} - {{action.value_1}}h
      <range-slider
          class="slider"
          min="0"
          max="12"
          step="1"
          v-model="action.value_1">
      </range-slider>
    </div>
    <div class="d-button" style="width:100%">
      <div class="d-button-container" style="display: flex;justify-content:right">
        <b-button id="b-delete" variant="outline-danger" v-on:click="onDelete">Supprimer</b-button>
      </div>
    </div>
  </div>
</template>

<script>

import RangeSlider from "vue-range-slider";
import 'vue-range-slider/dist/vue-range-slider.css'


export default {
  name: "ActionDisplay",
  props : {
    id : Number
  },
  components: {
    RangeSlider
  },
  data() {
    return {
      action : this.$store.getters.getAction(this.id)
    }
  },
  methods : {
    onDelete(){
      this.$store.commit('DELETE_ACTION',this.id)
    }
  },
  updated() {
    this.$store.commit('SET_VALUE_ACTION',this.action)
  }
}
</script>

<style scoped>

#displayer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px 20%;
  background-color:#eff4f9;
}
#b-delete{
  margin : 3px
}
#mail{
  margin: 5px;
}
#mailpj{
  margin: 5px;
}
.slider {
  width: 200px;
}
</style>