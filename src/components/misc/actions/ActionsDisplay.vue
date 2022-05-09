<template>
  <div id="displayer" shadow="">
    <div v-if="action.label==='mail'">
      <h6 style="text-align: left">Les {{action.label}}s que j'ai envoyé aujourd'hui :</h6>
      <h6 style="text-align: left">Mails totals</h6>
      <div class="form" >
        <input id="mail" class="form-input" type=”number” autocomplete="off" placeholder=" " v-model.number="action.value_1">
      </div>
      <h6 style="text-align: left;">Dont avec pièces jointes</h6>
      <div class="form">
        <input id="mailpj" class="form-input" type=”number” autocomplete="off" placeholder=" " v-model.number="action.value_2">
      </div>
    </div>
    <div v-else id="descr-service-num" style="display: flex;flex-direction: column;">
      <div v-html="printDescription()"></div>
      <div v-if="isfirefox">
        <Slider
            :min=0
            :max=12
            :id="id"
            v-bind:ivalue=parseInt(this.value1)
            @send-value="setValue">
        </Slider>
      </div>
      <div v-else style="display:flex;justify-content:center;width: 100%">
      <div id="range-slider-container" style="display: flex;justify-content:center;align-items:center;width:80%;margin-top:10px;background-color: rgba(119,136,153,0.73);border-radius: var(--border-radius-max);min-height: 30px">
      <range-slider
          class="slider"
          min="0"
          max="12"
          step="1"
          v-model="value1">
      </range-slider>
        </div>
      </div>
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
import Slider from "@/components/Slider";


export default {
  name: "ActionDisplay",
  props : {
    id : Number
  },
  components: {
    RangeSlider,
    Slider
  },
  data() {
    return {
      action : this.$store.getters.getAction(this.id),
      temps : 0,
      value1 : 0,
      isfirefox : false
    }
  },
  methods : {
    onDelete(){
      this.$store.commit('DELETE_ACTION',this.id)
    },
    printDescription(){
      if (this.action.label==='video'){return '<h6>Je regarde  <strong style="color: #2852f9;">' +this.value1 + 'h</strong> de vidéos par jour</h6>';}
      if (this.action.label==='insta'){return '<h6>Je passe <strong style="color:#2852f9;">' + this.value1 + 'h</strong> sur les réseaux sociaux</h6>';}
    },
    setValue(payload) {
      this.value1 = payload;
    }
  },
  updated() {
    if(this.action.label !=='mail'){this.action.value_1 = this.value1;}
    this.$store.commit('SET_VALUE_ACTION',this.action)
  },
  mounted() {
    this.value1 = (this.$store.getters.getAction(this.id).value_1 !== null && this.$store.getters.getAction(this.id).label != "mail" ) ? this.value1 = this.$store.getters.getAction(this.id).value_1 : this.value1=0
    this.isfirefox = this.$store.getters.getIsFirefox;
  }
}
</script>

<style scoped>

#displayer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 10%;
  background-color: #eff4f9;
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