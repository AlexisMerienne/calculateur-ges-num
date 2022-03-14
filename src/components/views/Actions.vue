<template>
  <div id="actions-wrapper">
    <h3>Mes actions</h3>
    <div v-for="action in actions" :key="action.id">
      <ActionDisplay v-bind:id="action.id"/>
    </div>
    <div id="buttons">
      <b-dropdown class="mx-1" right text="+" style="margin: 5px">
        <b-dropdown-item v-on:click="addAction('mail')">mail</b-dropdown-item>
        <b-dropdown-item v-on:click="addAction('video')">video</b-dropdown-item>
        <b-dropdown-item v-on:click="addAction('insta')">insta</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
import ActionDisplay from "@/components/misc/actions/ActionsDisplay";
export default {
  name: "Actions",
  components: {ActionDisplay},
  data() {
    return {
      actions : this.$store.getters.getActions
    }
  },
  methods : {
    addAction(action) {
      this.$store.commit('CREATE_ACTION',action)
    }
  }
}
</script>

<style scoped>

#actions-wrapper{
  position: relative;
  flex-direction: column;
  align-items: center;
  border: solid;
  border-radius: 7px;
  min-width: 275px;
}
#buttons{
  display: flex;
  justify-content: right;
  margin: 5px 10px;
}


</style>