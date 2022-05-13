<template>
  <div id="displayer">
    <div v-if="action.label==='mail'">
      <h6 style="text-align: left;padding: 0.7em">Les {{action.label}}s que j'ai envoyé aujourd'hui :</h6>
      <h6 style="text-align: left;padding: 0.7em">Mails totals</h6>
      <div style="display: flex;justify-content: center">
        <div class="form" style="width: 70%">
          <input id="mail" class="form-input" type=”number” autocomplete="off" placeholder=" " v-model.number="action.value_1">
        </div>
      </div>
      <h6 style="text-align: left;padding: 0.7em">Dont avec pièces jointes</h6>
      <div style="display: flex;justify-content: center">
        <div class="form" style="width: 70%">
          <input id="mailpj" class="form-input" type=”number” autocomplete="off" placeholder=" " v-model.number="action.value_2">
        </div>
      </div>
    </div>
    <div v-else style="display: flex;flex-direction: column">
      <div v-html="printDescription()"></div>
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
      if (this.action.label==='video'){return '<h6 style="padding: 0.7em">Je regarde  <strong style="color: #2852f9;">' +this.value1 + 'h</strong> de vidéos par jour</h6>';}
      if (this.action.label==='insta'){return '<h6 style="padding: 0.7em">Je passe <strong style="color:#2852f9;">' + this.value1 + 'h</strong> sur les réseaux sociaux</h6>';}
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
  margin: 20px 0px;
  background-color: #eff4f9;
  min-width: 90%;
  border-radius: var(--border-radius-main);
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
#form-mobile{
  width: 70%;
}
</style>