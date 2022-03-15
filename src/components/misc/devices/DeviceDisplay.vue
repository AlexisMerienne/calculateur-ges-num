<template>
  <div id="displayer">
      J'utilise mon/ma {{device.label}} pendant {{device.temps[0]}}h
    <range-slider
        class="slider"
        min="0"
        max="24"
        step="1"
        v-model="device.temps[0]">
    </range-slider>
    <b-button id="b-delete" v-on:click="onDelete">Delete</b-button>
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
  border: solid;
  margin: 5px 20%;
  border-radius: 7px;
}
#b-delete{
  margin : 3px
}
.slider {
  width: 200px;
}
</style>