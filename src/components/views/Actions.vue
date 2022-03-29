<template>
  <div id="actions-wrapper" shadow="">
    <div id="title-and-question" style="display: flex;flex-direction: row;justify-content: space-around">
      <h3>Mes actions</h3>
      <Popup
          textbutton="?"
          content="Ajoutez les actions que vous faites pendant une journée type."
      ></Popup>
    </div>
    <div v-for="action in actions" :key="action.id">
      <ActionDisplay v-bind:id="action.id"/>
    </div>
    <div id="buttons">
      <b-dropdown toggle-class="rounded-circle px-2.8" variant="primary" text="+" pill right style="margin: 5px;" no-caret>
        <b-dropdown-item v-on:click="addAction('mail')">mail</b-dropdown-item>
        <b-dropdown-item v-on:click="addAction('video')">video</b-dropdown-item>
        <b-dropdown-item v-on:click="addAction('insta')">réseaux (a)sociaux</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>

import ActionDisplay from "@/components/misc/actions/ActionsDisplay";
import Popup from "@/components/Popup";

export default {
  name: "Actions",
  components: {ActionDisplay,Popup},
  data() {
    return {
      actions : this.$store.getters.getActions
    }
  },
  methods : {
    addAction(action) {
      this.$store.commit('CREATE_ACTION',action)
    }
  },
}
</script>

<style scoped>

#actions-wrapper{
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


</style>