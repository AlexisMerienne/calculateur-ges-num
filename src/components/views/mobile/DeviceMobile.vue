<template>
  <div id="wrapper">
    <div id="title-and-question" style="width:80%;display: flex;flex-direction: row;justify-content: space-between;">
      <h3>Mes appareils</h3>
      <div id="some-space" style="width: 20px"></div>
      <Popup
          textbutton="?"
          content="Ajoutez les appareils numériques que vous utilisez dans une journée type et renseignez leur durée d'utilisation"
      ></Popup>
    </div>
    <div id="devices-column">
      <div  v-for="device in devices" :key="device.id">
        <DeviceDisplayMobile v-bind:id="device.id"/>
      </div>
    </div>
    <div id="buttons">
      <b-dropdown  id="dropdown-device" size="lg" variant="white" pill style="margin: 5px;" no-caret>
        <template #button-content>
          <b-icon id="icon-plus" icon="plus-circle-fill" scale="3" variant="primary"></b-icon>
        </template>
        <b-dropdown-item v-on:click="addDevice('smartphone')">Smartphone</b-dropdown-item>
        <b-dropdown-item v-on:click="addDevice('laptop')">Laptop</b-dropdown-item>
        <b-dropdown-item v-on:click="addDevice('tele')">Télé</b-dropdown-item>
        <b-dropdown-item v-on:click="addDevice('ordinateurfixe')">Ordinateur fixe</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>

import DeviceDisplayMobile from "@/components/misc/devices/mobile/DeviceDisplayMobile";
import Popup from "@/components/Popup";

export default {
  name: "WrapperDevice",
  components: {DeviceDisplayMobile,Popup},
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
  mounted() {
  }
}
</script>

<style scoped>

#wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 275px;
}

#buttons{
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 30px 20px;
}
icon-plus{
  margin: 30px 20px;
}
devices-column{
  width: 90%;
}
</style>