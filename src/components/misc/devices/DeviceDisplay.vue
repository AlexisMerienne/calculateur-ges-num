<template>
  <div id="displayer" shadow="">
    <div id="displat-txt-label" style="display: flex;flex-direction: row">
      <h6 v-bind:id="idtxtlabel"></h6><div style="width: 2px"></div><h6><strong>{{this.temps}}h</strong></h6>
    </div>
    <Slider
      :min=0
      :max=24
      :id="id"
      v-bind:ivalue=parseInt(this.device.temps[0])
      @send-value="setValue">
    </Slider>
    <div class="d-button" style="width:100%">
      <div class="d-button-container" style="display: flex;justify-content:right">
        <b-button id="b-delete" variant="outline-danger" v-on:click="onDelete">Supprimer</b-button>
      </div>
    </div>
  </div>
</template>


<script>
import Slider from "@/components/Slider";
import {setTextDevice} from "@/utils/parseText"

export default {
  name: "DeviceDisplay",
  props : {
    id : Number
  },
  components: {
    Slider
  },
  data() {
    return {
      device : this.$store.getters.getDevice(this.id),
      temps : 0,
      description :"",
      idtxtlabel : "",
    }
  },
  methods : {
    onDelete() {
      this.$store.commit('DELETE_DEVICE', this.id)
    },
    setValue(payload) {
      this.device.temps[0] = payload;
      this.temps = payload;
    }
  },
  beforeMount() {
    this.idtxtlabel = "txt-label-"+this.device.id
  },
  mounted() {
    this.device = this.$store.getters.getDevice(this.id);
    this.temps = this.device.temps[0];
    this.description = setTextDevice(this.device.label);
    let htmldescription = document.createElement('p');
    htmldescription.innerHTML = this.description;
    htmldescription.style.textAlign='left'
    document.getElementById(this.idtxtlabel).appendChild(htmldescription)
  },
  updated() {
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