<template>
  <div id="displayer" shadow="">
    <div v-if="action.label==='mail'">
      Les {{action.label}}s que j'ai envoyé aujourd'hui :
      <b-form-input id="mail" v-model="action.value_1" placeholder="mails" type="number" min="0" max="1000"></b-form-input>
      <b-form-input id="mailpj" v-model="action.value_2" placeholder="mails avec pièces jointes" type="number" min="0" max="1000"></b-form-input>
    </div>
    <div v-else style="display: flex;flex-direction: column">
      <h6>{{printDescription()}} </h6>
      <range-slider
          class="slider"
          min="0"
          max="12"
          step="1"
          v-model="value1">
      </range-slider>
    </div>
    <div class="d-button" style="width:100%">
      <div class="d-button-container" style="display: flex;justify-content:right">
        <b-button id="b-delete" pill variant="outline-danger" v-on:click="onDelete">Supprimer</b-button>
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
      action : this.$store.getters.getAction(this.id),
      value1 : 0,
    }
  },
  methods : {
    onDelete(){
      this.$store.commit('DELETE_ACTION',this.id)
    },
    printDescription(){
      if (this.action.label==='video'){return "Je regarde " + this.value1 + "h de vidéos par jour";}
      if (this.action.label==='insta'){return "Je passe " + this.value1 + "h sur les réseaux sociaux";}
    },
  },
  updated() {
    if(this.action.label !=='mail'){this.action.value_1 = this.value1;}
    this.$store.commit('SET_VALUE_ACTION',this.action)
  },
  mounted() {
    this.value1 = (this.$store.getters.getAction(this.id).value_1 !== null && this.$store.getters.getAction(this.id).label != "mail" ) ? this.value1 = this.$store.getters.getAction(this.id).value_1 : this.value1=0
  }
}
</script>

<style scoped>

#displayer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
  background-color: #eff4f9;
  min-width: 100%;
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