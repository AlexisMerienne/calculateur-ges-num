<template>
  <div id="wrapper" shadow="">
      <div id="title-and-question" style="display: flex;flex-direction: row;justify-content: space-around">
        <h3>1. Mes appareils</h3>
        <PopupExplanation
          textbutton="?"
          content="<strong style='color:#6887ff'>Bienvenue sur l'outil de mesure de votre impact carbone du numérique.</strong><br><br>Ce simulateur présente un scénario pré-enregistré. Ce scénario correspond à l'utlisation du numérique d'un profil 'type' d'étudiant.<br><br>Vous pouvez changer les paramètres à votre guise pour que le bilan corresponde à l'impact carbone de votre utilisation du numérique.<br><br>Ce simulateur est divisé en trois parties. Une partie <strong>Appareils</strong>, où vous renseignez les appareils que vous utilisez pendant une journée. Une partie <strong>Actions</strong> où vous renseignez les services numériques que vous utilisez en une journée. Et enfin une dernière partie <strong>Bilan</strong> qui établit votre bilan carbone"
          ></PopupExplanation>
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
import PopupExplanation from "@/components/PopupExplanation";

export default {
  name: "WrapperDevice",
  components: {DeviceDisplay,PopupExplanation},
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