<template>
  <div id="popup-wrapper">
    <b-button id="button-popup" v-on:click="onClickPopup">{{ textbutton }}</b-button>
    <div id="myModal" class="modal">
      <div class="modal-content" style="width: 50%">
        <div class="close" style="display: flex;justify-content: right;text-align: left">
          <span class="close" v-on:click="closePopup">&times;</span></div>
        <h5 style="text-align: left;">{{ content }}</h5>
        <div v-for="src in sources" :key="src.id">
          <p style="text-align: left">[{{(Number(src.id)+1).toString()}}] {{src.src}}</p>
        </div>
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
    sources : Array
  },
  methods : {
    onClickPopup() {
      document.getElementById("myModal").style.display = "block";
    },
    closePopup() {
      document.getElementById("myModal").style.display = "none";
    }
  }
}
</script>

<style scoped>

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
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