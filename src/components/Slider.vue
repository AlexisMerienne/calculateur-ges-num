<template>
  <div class="slidecontainer">
    <input type="range" min=min max=max value=value class="slider" id="myRange" v-model="value">
  </div>
</template>

<script>
export default {
  name: "Slider",
  props : {
    min : Number,
    max : Number,
  },
  data(){
    return  {
      value : 0,
    };
  },
  methods : {
    emitValue(){
      let slider = document.getElementById("myRange");
      //Update the current slider value (each time you drag the slider handle)
      this.$emit('send-value',{value : slider.value})
    }
  },
  updated() {
    this.emitValue()
  },
  mounted() {
    document.getElementById("myRange").min = this.min;
    document.getElementById("myRange").max = this.max;
  }
}
</script>

<style scoped>

.slidecontainer {
  width: 100%; /* Width of the outside container */
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

/* Mouse-over effects */
.slider:hover {
  opacity: 1; /* Fully shown on mouse-over */
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background:  #0070ff;
  cursor: pointer;
}
.slider::-moz-range-progress {
  border-radius: 5px;
  height: 15px;
  background-color: #93c0ff;
}
.slider::-moz-range-thumb {
  width: 40px;
  height: 25px;
  border-radius: 20px;
  background: #0070ff;
  cursor: pointer;
}
</style>