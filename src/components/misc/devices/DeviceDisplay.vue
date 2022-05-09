<template>
  <div id="displayer" shadow="">
    <div id="displat-txt-label" class="accordion" v-on:click="showAccordion()">
        <div v-bind:id="idtxtlabel" style="display:flex;margin-bottom: 0px;margin-right: 20px;width: 80%"></div>
        <div id="caret-down-container" style="width: 20%">
          <div id="caret-down" style="display: flex;justify-content: flex-end">
            <img v-bind:id="idcaret" v-bind:src="srcImg" alt="caret-down" height="24">
          </div>
        </div>
    </div>
    <div class="panel" v-bind:id="idpanellabel">
      <div v-if="isfirefox">
        <Slider
          :min=0
          :max=24
          :id="id"
          v-bind:ivalue=parseInt(this.device.temps[0])
          @send-value="setValue">
        </Slider>
      </div>
      <div v-else style="display:flex;justify-content:center;width: 100%">
        <div id="range-slider-container" style="display: flex;justify-content:center;width:80%;margin-top:10px;background-color: rgba(119,136,153,0.73);border-radius: var(--border-radius-max)">
        <range-slider
            class="slider"
            min="0"
            max="24"
            step="1"
            v-model="temps"
            style="width: 80%;margin: 1em 0px">
        </range-slider>
        </div>
      </div>
      <div id="display-dette-ddv" style="display:flex;flex-direction:column;justify-content: center;align-items:center;margin-top: 10px;width: 100%;margin-bottom: 10px">
        <h6 style="text-align: left">Je change de <strong>{{device.label}}</strong> tous les <strong style="color: #2852f9;">{{setDetteTxt(device.dette_fabrication)}} an(s)</strong></h6>
        <div class="form">
          <input id="dette-ddv-v2" class="form-input" type=”number” autocomplete="off" placeholder=" " v-model.number="device.dette_fabrication">
        </div>
      </div>
      <div class="d-button" style="width:100%;margin-bottom: 5px">
        <div class="d-button-container" style="display: flex;justify-content:right">
          <b-button id="b-delete" pill variant="outline-danger" v-on:click="onDelete">Supprimer</b-button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

import RangeSlider from 'vue-range-slider'
import 'vue-range-slider/dist/vue-range-slider.css'
import Slider from "@/components/Slider";
import {setTextDevice} from "@/utils/parseText"

export default {
  name: "DeviceDisplay",
  props : {
    id : Number
  },
  components: {
    Slider,
    RangeSlider
  },
  data() {
    return {
      device : this.$store.getters.getDevice(this.id),
      temps : 0,
      description :"",
      idtxtlabel : "",
      idpanellabel:"",
      idcaret:"",
      isfirefox : false,
      srcImg : ""
    }
  },
  methods : {
    onDelete() {
      this.$store.commit('DELETE_DEVICE', this.id)
    },
    setValue(payload) {
      this.device.temps[0] = payload;
      this.temps = payload;
      const element = document.getElementById("description-"+this.id.toString());
      element.remove();
      this.description = setTextDevice(this.device.label,this.temps);
      let htmldescription = document.createElement('h6');
      htmldescription.id = "description-"+this.id.toString()
      htmldescription.style.marginBottom = "0px"
      htmldescription.innerHTML = this.description;
      htmldescription.style.textAlign='left'
      document.getElementById(this.idtxtlabel).appendChild(htmldescription)
    },
    setDetteTxt(el){
      return Number(el)
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
  beforeMount() {
    this.idtxtlabel = "txt-label-"+this.device.id
    this.idpanellabel = 'panel-label-'+this.device.id
    this.idcaret = 'caret-'+this.device.id
  },
  mounted() {
    this.device = this.$store.getters.getDevice(this.id);
    this.temps = this.device.temps[0];
    this.description = setTextDevice(this.device.label,this.temps);
    let htmldescription = document.createElement('h6');
    htmldescription.id = "description-"+this.id.toString()
    htmldescription.style.marginBottom = "0px"
    htmldescription.innerHTML = this.description;
    htmldescription.style.textAlign='left'
    document.getElementById(this.idtxtlabel).appendChild(htmldescription)
    this.isfirefox = this.$store.getters.getIsFirefox;
    this.srcImg = require('../../../assets/caret-down.svg')
  },
  updated() {
    this.device.temps[0] = this.temps;
    this.$store.commit('SET_VALUE_DEVICE',this.device)
    const element = document.getElementById("description-"+this.id.toString());
    element.remove();
    this.description = setTextDevice(this.device.label,this.temps);
    let htmldescription = document.createElement('h6');
    htmldescription.id = "description-"+this.id.toString()
    htmldescription.style.marginBottom = "0px"
    htmldescription.innerHTML = this.description;
    htmldescription.style.textAlign='left'
    document.getElementById(this.idtxtlabel).appendChild(htmldescription)
  },
}
</script>

<style scoped>

#displayer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  margin : 10px 10%;
  background-color: #eff4f9;
}
#displayer:hover{
  background-color: #bcd7ff;
}

#b-delete{
  margin : 3px
}

</style>