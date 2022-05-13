<template>
  <div id="actions-wrapper" wrapper="">
    <div id="title-and-question" style="display: flex;flex-direction: row;justify-content: space-around">
      <h3>Mes actions</h3>
      <div id="some-space" style="width: 20px"></div>
      <Popup
          textbutton="?"
          content="Ajoutez les actions que vous faites pendant une journée type."
      ></Popup>
    </div>
    <div id="actions-column">
      <div v-for="action in actions" :key="action.id" style="display:flex;justify-content:center;">
        <ActionsDisplayMobile v-bind:id="action.id"/>
      </div>
    </div>

    <PopupAddAction style="width: 100%"></PopupAddAction>

  </div>
</template>

<script>
import ActionsDisplayMobile from "@/components/misc/actions/ActionsDisplayMobile";
import Popup from "@/components/Popup";
import PopupAddAction from "@/components/PopupAddAction";


export default {
  name: "Actions",
  components: {ActionsDisplayMobile,Popup,PopupAddAction},
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
  background-color: var(--clr-blue-wrapper);
}
#buttons{
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 60px 20px;
}
actions-column{
  width: 90%;
}


</style>