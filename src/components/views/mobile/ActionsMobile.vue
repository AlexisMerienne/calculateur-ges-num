<template>
  <div id="actions-wrapper">
    <h3>Mes actions</h3>
    <div v-for="action in actions" :key="action.id">
      <ActionsDisplayMobile v-bind:id="action.id"/>
    </div>
    <div id="buttons">
      <b-dropdown class="mx-1" right text="Ajouter une action numérique" style="margin: 5px">
        <b-dropdown-item v-on:click="addAction('mail')">mail</b-dropdown-item>
        <b-dropdown-item v-on:click="addAction('video')">video</b-dropdown-item>
        <b-dropdown-item v-on:click="addAction('insta')">insta</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
import ActionsDisplayMobile from "@/components/misc/actions/ActionsDisplayMobile";
export default {
  name: "Actions",
  components: {ActionsDisplayMobile},
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