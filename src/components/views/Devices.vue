<template>
  <div id="wrapper" shadow="">
      <div id="title-and-question" style="display: flex;flex-direction: row;justify-content: space-around">
        <h3>Mes appareils</h3>
        <Popup
          textbutton="?"
          content="Bienvenue sur l'outil de calcule des émissions en gaz à effet de serre de votre utilisation du numérique."
          v-bind:sources=txtpopup
          ></Popup>
      </div>
      <div v-for="device in devices" :key="device.id">
        <DeviceDisplay v-bind:id="device.id"/>
      </div>
      <div id="buttons">
        <b-dropdown toggle-class="rounded-circle px-2.8" size="lg" variant="white" pill right style="margin: 5px;" no-caret>
          <template #button-content>
            <b-icon id="icon-plus" icon="plus-circle-fill" scale="2" variant="primary"></b-icon>
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

import DeviceDisplay from "@/components/misc/devices/DeviceDisplay";
import Popup from "@/components/Popup";

export default {
  name: "WrapperDevice",
  components: {DeviceDisplay,Popup},
  data() {
    return {
      devices: this.$store.getters.getDevices,
      txtpopup : [{
        id: 0,
        src: "Pour commencer, ajouter les appareils numériques que vous avez utilisés aujourd'hui en renseignant le temps d'utilisation ainsi le nombre d'année que vous le possédez"
      }]
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