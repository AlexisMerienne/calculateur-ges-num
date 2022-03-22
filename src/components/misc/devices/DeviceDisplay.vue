<template>
  <div id="displayer" shadow="">
    <h6>J'utilise mon/ma <strong>{{device.label}}</strong> pendant {{temps}}h</h6>
    <Slider
      :min=0
      :max=24
      :id="id"
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
  mounted() {
    this.device = this.$store.getters.getDevice(this.id);
    console.log(this.temps)
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
  text-align: left;
  margin : 10px 10%;
  background-color: #eff4f9;
}
#b-delete{
  margin : 3px
}

</style>