<template>
  <div id="wrapper" shadow="">
    <h3>Mes appareils</h3>
    <div v-for="device in devices" :key="device.id">
      <DeviceDisplayMobile v-bind:id="device.id"/>
    </div>
    <div id="buttons">
      <b-dropdown class="mx-1" right text="Ajouter un appareil" style="margin: 5px;">
        <b-dropdown-item v-on:click="addDevice('smartphone')">Smartphone</b-dropdown-item>
        <b-dropdown-item v-on:click="addDevice('laptop')">Laptop</b-dropdown-item>
        <b-dropdown-item v-on:click="addDevice('tele')">Télé</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>

import DeviceDisplayMobile from "@/components/misc/devices/mobile/DeviceDisplayMobile";

export default {
  name: "WrapperDevice",
  components: {DeviceDisplayMobile},
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
  display: flex;
  justify-content: center;
  margin: 5px 10px;
}
</style>