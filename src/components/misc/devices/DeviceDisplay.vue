<template>
  <div id="displayer" shadow="">
    <div id="displat-txt-label" style="display: flex;flex-direction: column">
      <div v-bind:id="idtxtlabel" style="margin-bottom: 0px"></div>
    </div>
    <div v-if="isfirefox">
      <Slider
        :min=0
        :max=24
        :id="id"
        v-bind:ivalue=parseInt(this.device.temps[0])
        @send-value="setValue">
      </Slider>
    </div>
    <div v-else>
      <range-slider
          class="slider"
          min="0"
          max="24"
          step="1"
          v-model="temps">
      </range-slider>
    </div>
    <div id="display-dette-ddv" style="flex-direction:column;margin-top: 10px;width: 100%">
      <h6 style="text-align: left">Je change de <strong>{{device.label}}</strong> tous les <strong style="color: #2852f9;">{{device.dette_fabrication}} an(s)</strong></h6>
      <div id="input" style="display:flex;flex-direction:column;align-items:center;justify-content:center;width: 80%;">
        <b-form-input id="dette-ddv" v-model.number="device.dette_fabrication" placeholder="En année" type="number" min=0 max=20 step="1"></b-form-input>
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
      isfirefox : false,
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
    }
  },
  beforeMount() {
    this.idtxtlabel = "txt-label-"+this.device.id
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
  },
  updated() {
    this.device.temps[0] = this.temps;
    this.$store.commit('SET_VALUE_DEVICE',this.device)
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
#b-delete{
  margin : 3px
}

</style>