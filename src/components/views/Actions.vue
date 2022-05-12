<template>
  <div id="actions-wrapper" wrapper="">
    <div id="title-and-question" style="display: flex;flex-direction: row;justify-content: space-around">
      <h3>2. Mes applications</h3>
      <Popup
          textbutton="?"
          content="Ajoutez les actions que vous faites pendant une journée type."
      ></Popup>
    </div>

    <div v-for="action in actions" :key="action.id">
      <ActionDisplay v-bind:id="action.id"/>
    </div>

    <PopupAddAction/>
  </div>
</template>

<script>

import ActionDisplay from "@/components/misc/actions/ActionsDisplay";
import Popup from "@/components/Popup";
import PopupAddAction from "@/components/PopupAddAction";


export default {
  name: "Actions",
  components: {ActionDisplay,Popup,PopupAddAction},
  data() {
    return {
      actions : this.$store.getters.getActions
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