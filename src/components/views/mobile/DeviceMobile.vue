<template>
  <div id="wrapper">
    <div id="title-and-question" style="width:80%;display: flex;flex-direction: row;justify-content: space-between;">
      <h3 style="color: lightgrey">Mes appareils</h3>
      <div id="some-space" style="width: 20px"></div>
      <Popup
          textbutton="?"
          content="Ajoutez les appareils numériques que vous utilisez dans une journée type et renseignez leur durée d'utilisation"
      ></Popup>
    </div>
    <div id="devices-column">
      <div  v-for="device in devices" :key="device.id" style="display:flex;justify-content:center;">
        <DeviceDisplayMobile v-bind:id="device.id"/>
      </div>
    </div>
    <div id="buttons">
      <b-dropdown  id="dropdown-device" size="lg" variant="white" pill style="margin: 5px;" no-caret>
        <template #button-content>
          <div id="round-button" style="display:flex;justify-content:center;align-items:center;height: 60px;width: 60px;background-color: #0033ff;border-radius: 50%;z-index: 98;border-width: 1px;border-color:#0029cc">
            <img
                src="../../../assets/plus.svg"
                alt="plus icon"
            />
          </div>
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
  z-index: 99;
}
icon-plus{
  margin: 60px 20px;
}
devices-column{
  width: 90%;
}
</style>