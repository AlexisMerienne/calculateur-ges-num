<template>
  <div id="popup-wrapper">
    <b-button pill id="button-popup" variant="outline-primary" v-on:click="onClickPopup">{{ textbutton }}</b-button>
    <div id="myModal" class="modal">
      <div id="modal-content" class="modal-content" style="width: 50%">
        <div class="close" style="display: flex;justify-content: right;text-align: left">
          <span class="close" v-on:click="closePopup">&times;</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
  props: {
    textbutton : String,
    content : String,
  },
  data() {
    return {
      isMobile : false,
    };
  },
  methods : {
    onClickPopup() {
      document.getElementById("myModal").style.display = "block";
    },
    closePopup() {
      document.getElementById("myModal").style.display = "none";
    }
  },
  mounted() {
    this.isMobile = this.$store.getters.getIsMobile
    if(this.isMobile==true){
      document.getElementById('modal-content').style.margin="5px"
      document.getElementById('modal-content').style.width="90%"
    }
    let content = this.content;
    let htmlObject = document.createElement('h5');

    htmlObject.style.marginTop = "5px"
    htmlObject.innerHTML = content;
    htmlObject.style.textAlign='left'
    document.getElementById('modal-content').appendChild(htmlObject)
    if (this.$store.getters.getJustArrive){
      this.onClickPopup();
      this.$store.commit('SET_JUST_ARRIVE_TO_FALSE');
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
  margin: 15% auto; /* 15% from the top and centered */
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

</style>