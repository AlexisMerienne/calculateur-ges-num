<template>
  <div id="displayer" shadow="">
    <div id="displat-txt-label" style="display: flex;flex-direction: row">
      <h6 v-bind:id="idtxtlabel"></h6><div style="width: 2px"></div><h6><strong>{{this.temps}}h</strong></h6>
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
      <b-form-input id="dette-ddv" v-model.number="device.dette_fabrication" placeholder="En année" type="number" min=0 max=20 step="1"></b-form-input>
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
    setValue(payload) {
      this.device.temps[0] = payload.value;
      this.temps = payload.value;
    }
  },
  beforeMount() {
    this.device = this.$store.getters.getDevice(this.id);
    this.idtxtlabel = "txt-label-"+this.device.id
  },
  mounted() {
    if (this.$store.getters.getIsMobile){document.getElementById('displayer').style.margin='5px'}
    this.device = this.$store.getters.getDevice(this.id);
    this.temps = this.device.temps[0];
    this.description = setTextDevice(this.device.label);
    let htmldescription = document.createElement('p');
    htmldescription.innerHTML = this.description;
    htmldescription.style.textAlign='left'
    document.getElementById(this.idtxtlabel).appendChild(htmldescription)
  },
  updated() {
    this.device.temps[0] = this.temps;
    this.$store.commit('SET_VALUE_DEVICE',this.device)
  }
}
</script>

<style scoped>

#displayer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin : 5px;
  background-color: #eff4f9;
  min-width: 100%;
}
#b-delete{
  margin : 3px
}
.slider {
  width: 200px;
}
</style>