<template>
  <div id="wrapper" shadow="">
      <div id="title-and-question" style="display: flex;flex-direction: row;justify-content: space-around">
        <h3>Mes appareils</h3>
        <Popup
          textbutton="?"
          content="Ajoute les appareils numériques que t'utilise dans une journée type de travail et renseigne leur durée d'utilisation"
          ></Popup>
      </div>
      <div v-for="device in devices" :key="device.id">
        <DeviceDisplay v-bind:id="device.id"/>
      </div>
      <div id="buttons">
        <b-dropdown class="mx-1" right text="Ajouter un appareil" style="margin: 5px;">
          <b-dropdown-item v-on:click="addDevice('smartphone')">Smartphone</b-dropdown-item>
          <b-dropdown-item v-on:click="addDevice('laptop')">Laptop</b-dropdown-item>
          <b-dropdown-item v-on:click="addDevice('tele')">Télé</b-dropdown-item>
          <b-dropdown-item v-on:click="addDevice('ordinateurfixe')">Ordinateur fixe</b-dropdown-item>
        </b-dropdown>
      </div>
  </div>
</template>

<script>

import DeviceDisplay from "@/components/misc/devices/DeviceDisplay";
import Popup from "@/components/Popup";

export default {
  name: "WrapperDevice",
  components: {DeviceDisplay,Popup},
  data() {
    return {
      devices: this.$store.getters.getDevices,
    }
  },
  methods:{
    addDevice(device) {
      this.$store.commit('CREATE_DEVICE',device)
    }
  },
}
</script>

<style scoped>

#wrapper{
  position: relative;
  flex-direction: column;
  align-items: center;
  min-width: 275px;
}
#buttons{
  display: flex;
  justify-content: right;
  margin: 5px 10px;
}
#question-icon {
  cursor: pointer;
}
</style>