<template>
  <div id="displayer">
    <div id="displat-txt-label" style="display: flex;flex-direction: row">
      <div v-bind:id="idtxtlabel" style="padding: 10px"></div><div style="width: 2px"></div>
    </div>
    <range-slider
        class="slider"
        min="0"
        max="24"
        step="1"
        v-model="temps">
    </range-slider>
    <div id="display-dette-ddv" style="margin-top: 10px">
      <h6>Je possède cet appareil depuis <strong>{{device.dette_fabrication}} an(s)</strong></h6>
      <div style="display: flex;justify-content: center">
      <div class="form" id="form-mobile">
        <input id="dette-ddv-v2" class="form-input" type=”number” autocomplete="off" placeholder=" " v-model.number="device.dette_fabrication">
      </div>
      </div>
    </div>
    <div class="d-button" style="width:100%">
      <div class="d-button-container"  style="display: flex;justify-content:right">
        <b-button id="b-delete" pill variant="outline-danger" v-on:click="onDelete">Supprimer</b-button>
      </div>
    </div>
  </div>
</template>


<script>
import RangeSlider from 'vue-range-slider'
import 'vue-range-slider/dist/vue-range-slider.css'
import {setTextDevice} from "@/utils/parseText";

export default {
  name: "DeviceDisplay",
  props : {
    id : Number
  },
  components: {
    RangeSlider
  },
  data() {
    return {
      device :null,
      temps : 0,
      description :"",
      idtxtlabel : "",
    }
  },
  methods : {
    onDelete(){
      this.$store.commit('DELETE_DEVICE',this.id)
    },
  },
  beforeMount() {
    this.device = this.$store.getters.getDevice(this.id);
    this.idtxtlabel = "txt-label-"+this.device.id
  },
  mounted() {
    if (this.$store.getters.getIsMobile){document.getElementById('displayer').style.margin='5px'}
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
}
</script>

<style scoped>

#displayer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin : 20px 0px;
  background-color:#eff4f9;
  width: 90%;
  border-radius: var(--border-radius-main);
}
#b-delete{
  margin : 3px
}
.slider {
  width: 200px;
}
#form-mobile{
  width: 70%;
}
</style>