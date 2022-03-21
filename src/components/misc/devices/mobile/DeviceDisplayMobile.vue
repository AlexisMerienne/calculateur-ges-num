<template>
  <div id="displayer" shadow="">
    J'utilise mon/ma <strong>{{device.label}}</strong> pendant {{device.temps[0]}}h
    <range-slider
        class="slider"
        min="0"
        max="24"
        step="1"
        v-model="device.temps[0]">
    </range-slider>
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
  name: "DeviceDisplay",
  props : {
    id : Number
  },
  components: {
    RangeSlider
  },
  data() {
    return {
      device : this.$store.getters.getDevice(this.id),
    }
  },
  methods : {
    onDelete(){
      this.$store.commit('DELETE_DEVICE',this.id)
    }
  },
  mounted() {
    this.device = this.$store.getters.getDevice(this.id);
    if (this.$store.getters.getIsMobile){document.getElementById('displayer').style.margin='5px'}
  },
  updated() {
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
  margin : 5px
}
#b-delete{
  margin : 3px
}
.slider {
  width: 200px;
}
</style>