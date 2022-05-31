<template>
  <div id="body">
    <div id="app">
      <div v-if="isMobile">
        <HeaderMobile/>
      </div>
      <div v-else>
        <Header/>
      </div>
      <div id="nav-bar" class="nav-bar">
        <div id="device-view-button" class="device-view-button" v-on:click="goToDevice">
          <div style="padding: 1em">
            <span id="span-device"><strong>1.Mes appareils</strong></span>
          </div>
        </div>
        <div id="actions-view-button" class="actions-view-button" v-on:click="goToAction">
          <span id="span-action" style="margin: 1em"><strong>2.Mes applications</strong></span>
        </div>
        <div id="charts-view-button" class="charts-view-button" v-on:click="goToBilanonClick">
          <span id="span-bilan" style="margin: 1em"><strong>3.Mon bilan</strong></span>
        </div>
      </div>
      <div id="wrapper">
        <router-view/>
      </div>
    </div>
    <div style="margin: 60px 0px;position: absolute;left: 30%">
    <CarbonBadge/>
    </div>
    <div id="footer">
      <Footer/>
    </div>
  </div>
</template>
<script>

import Header from "@/components/layouts/Header";
import HeaderMobile from "@/components/layouts/HeaderMobile";
import Footer from "@/components/layouts/Footer";

export default {
  name: 'App',
  components: {
    Footer,
    Header,
    HeaderMobile
  },
  data() {
    return {
      currentviews : this.$store.getters.getCurrentView,
      isMobile : false,
      windowsheight : 0,
      viewscliked : [true,false,false],
    }
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  methods:{
    goToDevice(){
      if(this.checkNegValue()){
        window.alert('Vous avez indiqué des valeurs négatives pour les mails envoyés')
      }else if(this.checkNotNumberValue()){
        window.alert('Veuillez indiquer des valeurs numériques dans les champs dédiés')
      }else if (!this.viewscliked[0]){
        if (this.isMobile){
          this.$router.push({name:"homemobile"})
          this.$session.set("page","homemobile")
        }else {
          this.$router.push({name:"home"})
          this.$session.set("page","home")
        }
        this.setIsClickCss(document.getElementById('device-view-button'));
        this.setIsNotClickCss(document.getElementById('actions-view-button'));
        this.setIsNotClickCss(document.getElementById('charts-view-button'));
        this.viewscliked=[true,false,false]
      }
    },
    goToAction(){
      if(this.checkNegValue()){
        window.alert('Vous avez indiqué une valeur négative là où il ne faut pas')
      }else if(this.checkNotNumberValue()){
        window.alert('Veuillez indiquer des valeurs numériques dans les champs dédiés')
      }else if (!this.viewscliked[1]) {
        if(this.isMobile){
          this.$router.push({name:"actionsmobile"})
          this.$session.set("page","actionsmobile")
        }else{
          this.$router.push({name:"actions"})
          this.$session.set("page","actions")
        }
        this.setIsClickCss(document.getElementById('actions-view-button'));
        this.setIsNotClickCss(document.getElementById('device-view-button'));
        this.setIsNotClickCss(document.getElementById('charts-view-button'));
        this.viewscliked=[false,true,false]

      }
    },
    goToBilanonClick(){
      if (this.isMobile){
        this.goToBilan("bilanmobile")
        this.$session.set("page","bilanmobile")
      }else{
        this.goToBilan("bilan")
        this.$session.set("page","bilan")
      }
    },
    //quand on clique sur l'onglet bilan, on
    goToBilan(route){
      //vérifie que l'utilisateur a renseigné les valeurs correctement
      if(this.checkNegValue()){
        window.alert('Vous avez entré une valeur négative là où il ne faut pas')
      }else if(this.checkNotNumberValue()){
        window.alert('Veuillez indiquer des valeurs numériques dans les champs dédiés')
      }else if (!this.viewscliked[2]){


        /**
         * On met à jour le résumé avec les nouvelles données
         */

        //on calcule la conso totale en GES de l'utilisateur
        const consotot = this.$store.getters.getConsoTotal
        //On met à jour les valeurs du tableau résumé
        this.$store.commit('SET_NEW_RESUME_VALUE',{
          data : this.$store.getters.getChartDataSpec('chart-gesdevice'),
          conso : consotot
        })
        this.$store.commit('SET_NEW_RESUME_VALUE',{
          data:this.$store.getters.getChartDataSpec('chart-gesaction'),
          conso : consotot
        })
        this.$store.commit('SET_NEW_RESUME_VALUE', {
          data: this.$store.getters.getChartDataSpec('chart-gesutilisationproduction'),
          conso : consotot
        })

        //se dirige vers la page 'bilan'
        route === 'bilan' ? this.$router.push({name:"bilan"}) : this.$router.push({name:"bilanmobile"})
        //on change les design des onglets en conséquence
        this.setIsClickCss(document.getElementById('charts-view-button'));
        this.setIsNotClickCss(document.getElementById('device-view-button'));
        this.setIsNotClickCss(document.getElementById('actions-view-button'));
        this.viewscliked=[false,false,true]
      }

    },

    //Si l'utilisateur a renseigné des valeurs négatives dans les inputs dédiés, une popup d'alerte s'affiche
    checkNegValue() {
      let negValues = false;
      if (this.$store.getters.getMail !== null){
        negValues = this.$store.getters.getMail.value_1<0 || this.$store.getters.getMail.value_2<0
      }
      for (let i=0;i<this.$store.getters.getDevices.length;i++){
        if(this.$store.getters.getDevices[i].dette_fabrication < 0){
          negValues=true;
        }
      }
      return negValues;
    },
    //Si l'utilisateur a rentré autre chose que des chiffres dans les inputs dédiés, une popup d'alerte s'affiche
    checkNotNumberValue(){
      let notnumvalue = false;
      if (this.$store.getters.getMail !== null){
        notnumvalue = typeof this.$store.getters.getMail.value_1 !== "number" || typeof this.$store.getters.getMail.value_2 !== "number"
      }
      for (let i=0;i<this.$store.getters.getDevices.length;i++){
        if(typeof this.$store.getters.getDevices[i].dette_fabrication !== "number"){
          notnumvalue=true;
        }
      }
      return notnumvalue;

    },
    //change dynamiquement la position du pied de page lorsqu'on ajoute des éléments
    myEventHandler() {
      const screeneheight = window.screen.height;
      let footer = document.getElementById("footer");
      footer.style.marginTop = (screeneheight-300).toString() + "px";
    },
    setIsClickCss(el){
      el.style.backgroundColor=" #d2e5ff"
      el.style.marginTop = "0px"
    },
    setIsNotClickCss(el){
      el.style.backgroundColor='#eff4f9'
      el.style.marginTop = "2px"
    },
    //Change le design des onglets lorsqu'on change de pages
    setRoute(routeName){
      this.$router.push({name:routeName})
      switch (routeName) {
        case "home" || "homemobile":
          this.setIsNotClickCss(document.getElementById('charts-view-button'));
          this.setIsClickCss(document.getElementById('device-view-button'));
          this.setIsNotClickCss(document.getElementById('actions-view-button'));
          this.viewscliked=[true,false,false]
          break
        case "actions" || "actionsmobile" :
          this.setIsNotClickCss(document.getElementById('charts-view-button'));
          this.setIsNotClickCss(document.getElementById('device-view-button'));
          this.setIsClickCss(document.getElementById('actions-view-button'));
          this.viewscliked=[false,true,false]
          break
        case "bilan" || "bilanmobile" :
          this.setIsClickCss(document.getElementById('charts-view-button'));
          this.setIsNotClickCss(document.getElementById('device-view-button'));
          this.setIsNotClickCss(document.getElementById('actions-view-button'));
          this.viewscliked=[false,false,true]
          break
      }
    }
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
  updated() {
    this.$store.commit('SET_CURRENT_VIEW',this.currentRouteName);
  },
  mounted() {
    let check = false;
    //teste si mobile
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    this.$store.commit('SET_IS_MOBILE',check);
    this.isMobile = this.$store.getters.getIsMobile;
    //quand on rafraichit la page, l'app nous renvoie à la page où l'on était
    if(this.$session.exists("page")){
      this.setRoute(this.$session.get("page"))
      if (this.isMobile==true) {
        document.getElementById('app').style.margin = '0';
        this.$router.push({name: 'homemobile'});
        this.$store.commit('SET_CURRENT_VIEW', 'homemobile')
      }
    }
    else {
      if (this.isMobile==true){
        //elements de design et page différenyes si mobile
        document.getElementById('app').style.margin = '0';
        this.$router.push({name : 'homemobile'});
        this.$store.commit('SET_CURRENT_VIEW','homemobile')
      }else{this.$router.push({name : 'home'});this.$store.commit('SET_CURRENT_VIEW','home')}
    }
    this.currentviews = this.$store.getters.getCurrentView
    if (!(/home/.test(this.currentviews))){
      this.displayprev=true;
    }
    //dimension des éléments dépendent la taille de l'écran
    this.windowsheight = window.innerHeight;
    if (window.innerHeight>900){
      document.getElementById('footer').style.marginTop = "300px"
    }
    //teste si le borwser est windows
    typeof InstallTrigger !== 'undefined' ? this.$store.commit("SET_IS_FIREFOX") : null;
    const screeneheight = window.screen.height;
    let footer = document.getElementById("footer");
    footer.style.marginTop = (screeneheight-300).toString() + "px";
  }
}
</script>

<style>



#body{
  background-color: #313131;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 30%;
}
#footer{
  display: flex;
  justify-content: center;
  margin-top: 400px;
  height: 200px;
  background-color: #eff4f9;
}
.nav-bar{
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
  justify-content: space-between;
}
.device-view-button {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--clr-blue-wrapper);;
  border-radius: 7px 7px 0px 0px;
  width: 90%;
  margin-right: 2px;
  cursor: pointer;
}


.actions-view-button {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eff4f9;
  border-radius: 7px 7px 0px 0px;
  width: 90%;
  margin: 2px 2px 0px 2px;
  cursor: pointer;

}

.charts-view-button{
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eff4f9;
  border-radius: 7px 7px 0px 0px;
  width: 90%;
  margin: 2px 0px 0px 2px;
  cursor: pointer;
}

#wrapper{
  width: 100%;
}
</style>