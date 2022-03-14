<template>
  <div id="displayer">
    <div v-if="action.label==='mail'">
      {{action.label}}
      <b-form-input id="mail" v-model="nbr_mail" placeholder="mails"></b-form-input>
      <b-form-input id="mailpj" v-model="nbr_mail_pj" placeholder="mails pièces jointes"></b-form-input>
    </div>
    <div v-else style="display: flex;flex-direction: column">
      {{action.label}} - {{time}}
      <range-slider
          class="slider"
          min="0"
          max="12"
          step="1"
          v-model="time">
      </range-slider>
    </div>
    <b-button id="b-delete" v-on:click="onDelete">Delete</b-button>
  </div>
</template>

<script>

import RangeSlider from "vue-range-slider";
import 'vue-range-slider/dist/vue-range-slider.css'


export default {
  name: "ActionDisplay",
  props : {
    id : Number
  },
  components: {
    RangeSlider
  },
  data() {
    return {
      action : this.$store.getters.getAction(this.id),
      time : 0,
      nbr_mail : 0,
      nbr_mail_pj : 0
    }
  },
  methods : {
    onDelete(){
      this.$store.commit('DELETE_ACTION',this.id)
    }
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