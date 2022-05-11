<template>
  <div id="displayer" shadow="">
    <div v-if="action.label==='mail'" style="display: flex;flex-direction: column;width: 100%;">
      <div id="displat-txt-label" class="accordion" v-on:click="showAccordion()">
        <h6 style="text-align: left">En moyenne, j'envoie <span style="color:#2852f9">{{action.value_1}}</span><strong> mails</strong>, dont <span style="color:#2852f9">{{action.value_2}}</span> avec <strong>pièce jointe</strong></h6>
        <div id="caret-down-container" style="width: 15%">
          <div id="caret-down" style="display: flex;justify-content: flex-end">
            <img v-bind:id="idcaret" v-bind:src="srcImg" alt="caret-down" height="24">
          </div>
        </div>
      </div>
      <div class="panel" v-bind:id="idpanellabel">
      <h6 style="text-align: left">Mails totals</h6>
      <div class="form" style="width: 100%">
        <input id="mail" class="form-input" type=”number” autocomplete="off" placeholder=" " v-model.number="action.value_1">
      </div>
      <h6 style="text-align: left;">Dont avec pièces jointes</h6>
      <div class="form" style="width: 100%;">
        <input id="mailpj" class="form-input" type=”number” autocomplete="off" placeholder=" " v-model.number="action.value_2">
      </div>
      <div class="d-button" style="width:100%">
        <div class="d-button-container" style="display: flex;justify-content:right">
          <b-button id="b-delete-mail" pill variant="outline-danger" v-on:click="onDelete">Supprimer</b-button>
        </div>
      </div>
      </div>
    </div>
    <div v-else id="descr-service-num" style="display: flex;flex-direction: column;">
      <div id="displat-txt-label" class="accordion" v-on:click="showAccordion()">
        <div v-html="printDescription()"></div>
        <div id="caret-down-container" style="width: 15%">
          <div id="caret-down" style="display: flex;justify-content: flex-end">
            <img v-bind:id="idcaret" v-bind:src="srcImg" alt="caret-down" height="24">
          </div>
        </div>
      </div>
      <div class="panel" v-bind:id="idpanellabel">
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
      <div class="d-button" style="width:100%">
        <div class="d-button-container" style="display: flex;justify-content:right">
          <b-button id="b-delete" pill variant="outline-danger" v-on:click="onDelete">Supprimer</b-button>
        </div>
      </div>
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
      isfirefox : false,
      idpanellabel:"",
      idcaret:"",
      srcImg:"",
      idtxtlabel:"",
    }
  },
  methods : {
    onDelete(){
      this.$store.commit('DELETE_ACTION',this.id)
    },
    printDescription(){
      if (this.action.label==='video'){return '<h6>Je regarde  <strong style="color: #2852f9;">' +this.value1 + 'h</strong> de <strong>vidéos</strong> par jour</h6>';}
      if (this.action.label==='insta'){return '<h6>Je passe <strong style="color:#2852f9;">' + this.value1 + 'h</strong> sur les <strong>réseaux sociaux</strong></h6>';}
    },
    setValue(payload) {
      this.value1 = payload;
    },
    showAccordion(){
      let panel = document.getElementById(this.idpanellabel);
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        this.srcImg= require('../../../assets/caret-down.svg')
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        this.srcImg = require('../../../assets/caret-up.svg')
      }
    }
  },
  updated() {
    if(this.action.label !=='mail'){this.action.value_1 = this.value1;}
    this.$store.commit('SET_VALUE_ACTION',this.action)
  },
  beforeMount() {
    this.idtxtlabel = "txt-label-"+this.action.id
    this.idpanellabel = 'panel-label-'+this.action.id
    this.idcaret = 'caret-'+this.action.id
  },
  mounted() {
    this.value1 = (this.$store.getters.getAction(this.id).value_1 !== null && this.$store.getters.getAction(this.id).label != "mail" ) ? this.value1 = this.$store.getters.getAction(this.id).value_1 : this.value1=0
    this.isfirefox = this.$store.getters.getIsFirefox;
    this.srcImg = require('../../../assets/caret-down.svg')
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
#displayer:hover{
  background-color: #bcd7ff;
}

#b-delete{
  margin : 3px
}
#b-delete-mail{
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