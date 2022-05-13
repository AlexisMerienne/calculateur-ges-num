<template>
  <div id="wrapper" wrapper="">
    <div id="title-and-question" style="width:80%;display: flex;flex-direction: row;justify-content: space-between;">
      <h3>Mes appareils</h3>
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

    <PopupAddDevice style="width: 100%;"></PopupAddDevice>


  </div>
</template>

<script>

import DeviceDisplayMobile from "@/components/misc/devices/mobile/DeviceDisplayMobile";
import Popup from "@/components/Popup";
import PopupAddDevice from "@/components/PopupAddDevice";

export default {
  name: "WrapperDevice",
  components: {DeviceDisplayMobile,Popup,PopupAddDevice},
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
  background-color: var(--clr-blue-wrapper);;
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