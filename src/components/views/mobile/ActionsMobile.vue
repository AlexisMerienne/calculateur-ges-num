<template>
  <div id="actions-wrapper">
    <div id="title-and-question" style="display: flex;flex-direction: row;justify-content: space-around">
      <h3>Mes actions</h3>
      <div id="some-space" style="width: 20px"></div>
      <Popup
          textbutton="?"
          content="Ajoute les actions que tu fais pendant une journée de travail."
      ></Popup>
    </div>
    <div v-for="action in actions" :key="action.id">
      <ActionsDisplayMobile v-bind:id="action.id"/>
    </div>
    <div id="buttons">
      <b-dropdown class="mx-1" right text="Ajouter une action numérique" style="margin: 5px">
        <b-dropdown-item v-on:click="addAction('mail')">mail</b-dropdown-item>
        <b-dropdown-item v-on:click="addAction('video')">video</b-dropdown-item>
        <b-dropdown-item v-on:click="addAction('insta')">réseaux (a)sociaux</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
import ActionsDisplayMobile from "@/components/misc/actions/ActionsDisplayMobile";
import Popup from "@/components/Popup";


export default {
  name: "Actions",
  components: {ActionsDisplayMobile,Popup},
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
  mounted() {
    document.getElementById('b-prev').style.left = '0%';
    document.getElementById('b-next').style.right = '0%';
  }
}
</script>

<style scoped>

#actions-wrapper{
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