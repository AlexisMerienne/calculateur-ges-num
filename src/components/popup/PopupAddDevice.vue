<template>
  <div id="popup-wrapper">
    <div class="plus-button" id="plus-button-device" v-on:click="onClickPopup">
      +
    </div>
    <div id="myModal-plus" class="modal">
      <div id="modal-content-plus" class="modal-content" style="width: 50%">
        <div class="close" style="display: flex;justify-content: right;text-align: left">
          <span class="close" v-on:click="closePopup">&times;</span>
        </div>
        <div class="device-chooser" v-on:click="addDevice('smartphone')">
          <h6 class="device-chooser-txt">Smartphone 📱</h6>
        </div>
        <div class="device-chooser" v-on:click="addDevice('laptop')">
          <h6 class="device-chooser-txt">Laptop 💻</h6>
        </div>
        <div class="device-chooser" v-on:click="addDevice('tele')">
          <h6 class="device-chooser-txt">Télé 📺</h6>
        </div>
        <div class="device-chooser" v-on:click="addDevice('ordinateurfixe')">
          <h6 class="device-chooser-txt">Ordinateur fixe 🖥</h6>
        </div>
        <div class="device-chooser" v-on:click="addDevice('tablette')">
          <h6 class="device-chooser-txt">Tablette <img alt="icon tablette" src="../../assets/tablet.png" width="15px" height="auto"></h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
  data() {
    return {
      isMobile : false,
    };
  },
  methods : {
    onClickPopup() {
      document.getElementById("myModal-plus").style.display = "block";
    },
    closePopup() {
      document.getElementById("myModal-plus").style.display = "none";
    },
    addDevice(device) {
      this.$store.commit('CREATE_DEVICE',device)
      this.closePopup()
    }
  },
  mounted() {
    this.isMobile = this.$store.getters.getIsMobile
    if(this.isMobile==true){
      document.getElementById('modal-content-plus').style.margin="5px"
      document.getElementById('modal-content-plus').style.width="90%"
      document.getElementById('plus-button-device').style.backgroundColor='#B2B2B2'
    }
  }
}
</script>

<style scoped>

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 2; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.plus-button{
  font-size: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  margin : 10px 10%;
  background-color: #bcd7ff;
  height: 70px;
  cursor: pointer;
  border-radius: var(--border-radius-main);
}
.plus-button:hover{
  font-size: 4em;
  border: 0px solid black;
  padding: 10px 20px;
  text-align: center;
  box-shadow: 0 0 0 transparent, 0 0 0 transparent, 6px 4px 25px rgba(214, 214, 214, 0.62);
}
.device-chooser{
  display: flex;
  text-align: left;
  padding: 10px 0px;
  background-color: var(--clr-blue-light);
  border-radius: var(--border-radius-main);
  margin: 5px 0px;
  cursor: pointer;
}
.device-chooser:hover{
  background-color: #bcd7ff;
}
.device-chooser-txt{
  margin: 2px 20px ;
}

</style>