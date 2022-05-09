(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5285026b"],{"050a":function(t,e,i){t.exports=i.p+"img/caret-down.844cddbf.svg"},2760:function(t,e,i){},"2b48":function(t,e,i){},5383:function(t,e,i){"use strict";i("81be")},"5be4":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"wrapper",shadow:""}},[i("div",{staticStyle:{display:"flex","flex-direction":"row","justify-content":"space-around"},attrs:{id:"title-and-question"}},[i("h3",[t._v("1. Mes appareils")]),i("PopupExplanation",{attrs:{textbutton:"?",content:"<strong style='color:#6887ff'>Bienvenue sur l'outil de mesure de votre impact carbone du numérique.</strong><br><br>Ce simulateur présente un scénario pré-enregistré. Ce scénario correspond à l'utlisation du numérique d'un profil 'type' d'étudiant.<br><br>Vous pouvez changer les paramètres à votre guise pour que le bilan corresponde à l'impact carbone de votre utilisation du numérique.<br><br>Ce simulateur est divisé en trois parties. Une partie <strong>Appareils</strong>, où vous renseignez les appareils que vous utilisez pendant une journée. Une partie <strong>Actions</strong> où vous renseignez les services numériques que vous utilisez en une journée. Et enfin une dernière partie <strong>Bilan</strong> qui établit votre bilan carbone"}})],1),t._l(t.devices,(function(t){return i("div",{key:t.id},[i("DeviceDisplay",{attrs:{id:t.id}})],1)})),i("PopupAddDevice")],2)},s=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"displayer",shadow:""}},[i("div",{staticClass:"accordion",attrs:{id:"displat-txt-label"},on:{click:function(e){return t.showAccordion()}}},[i("div",{staticStyle:{display:"flex","margin-bottom":"0px","margin-right":"20px",width:"80%"},attrs:{id:t.idtxtlabel}}),t._m(0)]),i("div",{staticClass:"panel",attrs:{id:t.idpanellabel}},[t.isfirefox?i("div",[i("Slider",{attrs:{min:0,max:24,id:t.id,ivalue:parseInt(this.device.temps[0])},on:{"send-value":t.setValue}})],1):i("div",{staticStyle:{display:"flex","justify-content":"center",width:"100%"}},[i("div",{staticStyle:{display:"flex","justify-content":"center",width:"80%","margin-top":"10px","background-color":"rgba(119,136,153,0.73)","border-radius":"var(--border-radius-main)"},attrs:{id:"range-slider-container"}},[i("range-slider",{staticClass:"slider",staticStyle:{width:"80%",margin:"1em 0px"},attrs:{min:"0",max:"24",step:"1"},model:{value:t.temps,callback:function(e){t.temps=e},expression:"temps"}})],1)]),i("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center","margin-top":"10px",width:"100%","margin-bottom":"10px"},attrs:{id:"display-dette-ddv"}},[i("h6",{staticStyle:{"text-align":"left"}},[t._v("Je change de "),i("strong",[t._v(t._s(t.device.label))]),t._v(" tous les "),i("strong",{staticStyle:{color:"#2852f9"}},[t._v(t._s(t.setDetteTxt(t.device.dette_fabrication))+" an(s)")])]),i("div",{staticClass:"form"},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.device.dette_fabrication,expression:"device.dette_fabrication",modifiers:{number:!0}}],staticClass:"form-input",attrs:{id:"dette-ddv-v2",type:"”number”",autocomplete:"off",placeholder:" "},domProps:{value:t.device.dette_fabrication},on:{input:function(e){e.target.composing||t.$set(t.device,"dette_fabrication",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),i("div",{staticClass:"d-button",staticStyle:{width:"100%","margin-bottom":"5px"}},[i("div",{staticClass:"d-button-container",staticStyle:{display:"flex","justify-content":"right"}},[i("b-button",{attrs:{id:"b-delete",pill:"",variant:"outline-danger"},on:{click:t.onDelete}},[t._v("Supprimer")])],1)])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"20%"},attrs:{id:"caret-down-container"}},[n("div",{staticStyle:{display:"flex","justify-content":"flex-end"},attrs:{id:"caret-down"}},[n("img",{attrs:{src:i("050a"),alt:"caret-down",height:"24"}})])])}],o=i("53ca"),l=(i("a9e3"),i("d3b7"),i("25f0"),i("a4d3"),i("e01a"),i("c7e3")),c=i.n(l),u=(i("2760"),i("89fb")),d=i("c6dd"),p={name:"DeviceDisplay",props:{id:Number},components:{Slider:u["a"],RangeSlider:c.a},data:function(){return{device:this.$store.getters.getDevice(this.id),temps:0,description:"",idtxtlabel:"",idpanellabel:"",isfirefox:!1}},methods:{onDelete:function(){this.$store.commit("DELETE_DEVICE",this.id)},setValue:function(t){this.device.temps[0]=t,this.temps=t;var e=document.getElementById("description-"+this.id.toString());e.remove(),this.description=Object(d["setTextDevice"])(this.device.label,this.temps);var i=document.createElement("h6");i.id="description-"+this.id.toString(),i.style.marginBottom="0px",i.innerHTML=this.description,i.style.textAlign="left",document.getElementById(this.idtxtlabel).appendChild(i)},setDetteTxt:function(t){return console.log(Object(o["a"])(t)),Number(t)},showAccordion:function(){var t=document.getElementById(this.idpanellabel);t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"}},beforeMount:function(){this.idtxtlabel="txt-label-"+this.device.id,this.idpanellabel="panel-label-"+this.device.id},mounted:function(){this.device=this.$store.getters.getDevice(this.id),this.temps=this.device.temps[0],this.description=Object(d["setTextDevice"])(this.device.label,this.temps);var t=document.createElement("h6");t.id="description-"+this.id.toString(),t.style.marginBottom="0px",t.innerHTML=this.description,t.style.textAlign="left",document.getElementById(this.idtxtlabel).appendChild(t),this.isfirefox=this.$store.getters.getIsFirefox},updated:function(){this.device.temps[0]=this.temps,this.$store.commit("SET_VALUE_DEVICE",this.device);var t=document.getElementById("description-"+this.id.toString());t.remove(),this.description=Object(d["setTextDevice"])(this.device.label,this.temps);var e=document.createElement("h6");e.id="description-"+this.id.toString(),e.style.marginBottom="0px",e.innerHTML=this.description,e.style.textAlign="left",document.getElementById(this.idtxtlabel).appendChild(e)}},m=p,h=(i("e16b"),i("2877")),f=Object(h["a"])(m,a,r,!1,null,"7c1429e6",null),v=f.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"popup-wrapper"}},[i("b-button",{attrs:{pill:"",id:"button-popup",variant:"outline-primary"},on:{click:t.onClickPopup}},[t._v(t._s(t.textbutton))]),i("div",{staticClass:"modal",attrs:{id:"myModal"}},[i("div",{staticClass:"modal-content",staticStyle:{width:"50%"},attrs:{id:"modal-content"}},[i("div",{staticClass:"close",staticStyle:{display:"flex","justify-content":"right","text-align":"left"}},[i("span",{staticClass:"close",on:{click:t.closePopup}},[t._v("×")])])])])],1)},b=[],y={name:"Popup",props:{textbutton:String,content:String},data:function(){return{isMobile:!1}},methods:{onClickPopup:function(){document.getElementById("myModal").style.display="block"},closePopup:function(){document.getElementById("myModal").style.display="none"}},mounted:function(){this.isMobile=this.$store.getters.getIsMobile,1==this.isMobile&&(document.getElementById("modal-content").style.margin="5px",document.getElementById("modal-content").style.width="90%");var t=this.content,e=document.createElement("h5");e.style.marginTop="5px",e.innerHTML=t,e.style.textAlign="left",document.getElementById("modal-content").appendChild(e),this.$store.getters.getJustArrive&&(this.onClickPopup(),this.$store.commit("SET_JUST_ARRIVE_TO_FALSE"))}},x=y,_=(i("801e"),Object(h["a"])(x,g,b,!1,null,"7439a297",null)),E=_.exports,C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"popup-wrapper"}},[i("div",{staticClass:"plus-button",on:{click:t.onClickPopup}},[t._v(" + ")]),i("div",{staticClass:"modal",attrs:{id:"myModal-plus"}},[i("div",{staticClass:"modal-content",staticStyle:{width:"50%"},attrs:{id:"modal-content-plus"}},[i("div",{staticClass:"close",staticStyle:{display:"flex","justify-content":"right","text-align":"left"}},[i("span",{staticClass:"close",on:{click:t.closePopup}},[t._v("×")])]),i("div",{staticClass:"device-chooser",on:{click:function(e){return t.addDevice("smartphone")}}},[i("h6",{staticClass:"device-chooser-txt"},[t._v("Smartphone")])]),i("div",{staticClass:"device-chooser",on:{click:function(e){return t.addDevice("laptop")}}},[i("h6",{staticClass:"device-chooser-txt"},[t._v("Laptop")])]),i("div",{staticClass:"device-chooser",on:{click:function(e){return t.addDevice("tele")}}},[i("h6",{staticClass:"device-chooser-txt"},[t._v("Télé")])]),i("div",{staticClass:"device-chooser",on:{click:function(e){return t.addDevice("ordinateurfixe")}}},[i("h6",{staticClass:"device-chooser-txt"},[t._v("Ordinateur fixe")])])])])])},S=[],w={name:"Popup",props:{textbutton:String,content:String},data:function(){return{isMobile:!1}},methods:{onClickPopup:function(){document.getElementById("myModal-plus").style.display="block"},closePopup:function(){document.getElementById("myModal-plus").style.display="none"},addDevice:function(t){this.$store.commit("CREATE_DEVICE",t),this.closePopup()}},mounted:function(){this.isMobile=this.$store.getters.getIsMobile,1==this.isMobile&&(document.getElementById("modal-content-plus").style.margin="5px",document.getElementById("modal-content-plus").style.width="90%")}},D=w,$=(i("5383"),Object(h["a"])(D,C,S,!1,null,"45fd366d",null)),B=$.exports,I={name:"WrapperDevice",components:{DeviceDisplay:v,PopupExplanation:E,PopupAddDevice:B},data:function(){return{devices:this.$store.getters.getDevices}}},M=I,k=(i("bfc1"),Object(h["a"])(M,n,s,!1,null,"164eec51",null));e["default"]=k.exports},"69c1":function(t,e,i){},"78be":function(t,e,i){},"801e":function(t,e,i){"use strict";i("c3bf")},"81be":function(t,e,i){},"89fb":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slidecontainer"},[i("input",{staticClass:"slider",attrs:{type:"range",min:t.min,max:t.max,id:"myRange"},domProps:{value:t.ivalue},on:{change:function(e){return t.$emit("send-value",e.target.value)}}})])},s=[],a=(i("a9e3"),{name:"Slider",model:{prop:"value",event:"sendValue"},props:{min:Number,max:Number,id:Number,ivalue:Number},data:function(){return{value:0}},methods:{sendEvent:function(){var t=document.getElementById("myRange");this.$emit("send-value",t.value)}},mounted:function(){document.getElementById("myRange").min=this.min,document.getElementById("myRange").max=this.max}}),r=a,o=(i("caa6"),i("2877")),l=Object(o["a"])(r,n,s,!1,null,"027a87a4",null);e["a"]=l.exports},bfc1:function(t,e,i){"use strict";i("78be")},c3bf:function(t,e,i){},c6dd:function(t,e){e.setTextDevice=function(t,e){switch(t){case"smartphone":return"L'écran de mon <strong> smartphone </strong> est allumé pendant <strong style='color: #2852f9;'>"+e+"h</strong> dans une journée";case"laptop":return"J'utilise mon <strong> laptop </strong> pendant <strong style='color: #2852f9;'>"+e+"h</strong> dans une journée";case"tele":return"Ma <strong> télé </strong> est allumée pendant <strong style='color: #2852f9;'>"+e+"h</strong> dans une journée";case"ordinateurfixe":return"J'utilise mon <strong> ordinateur fixe </strong> pendant <strong style='color: #2852f9;'>"+e+"h</strong> dans une journée";default:return"Appareil non reconnu"}}},c7e3:function(t,e,i){"use strict";
/*!
 * vue-range-slider v0.6.0
 * https://github.com/ktsn/vue-range-slider
 *
 * @license
 * Copyright (c) 2016-2018 katashin
 * Released under the MIT license
 * https://github.com/ktsn/vue-range-slider/blob/master/LICENSE
 */var n={created:function(){"undefined"!==typeof document&&r(this,(function(t,e){o(document,t,e)}))},beforeDestroy:function(){"undefined"!==typeof document&&r(this,(function(t,e){l(document,t,e)}))}},s="undefined"!==typeof window,a=s&&function(){var t=!1;try{var e={get:function(){t=!0}},i=Object.defineProperty({},"passive",e);window.addEventListener("test",null,i),window.removeEventListener("test",null,i)}catch(n){t=!1}return t}();function r(t,e){var i=t.$options.events;Object.keys(i).forEach((function(n){e(n,(function(e){return i[n].call(t,e)}))}))}function o(t,e,i){var n=a?{passive:!1}:void 0;t.addEventListener(e,i,n)}function l(t,e,i){var n=a?{passive:!1}:void 0;t.removeEventListener(e,i,n)}function c(t,e){var i=e.getBoundingClientRect();return{left:t.clientX-i.left,top:t.clientY-i.top}}function u(t,e,i,n){if(t<=e)return e;var s=Math.floor((i-e)/n)*n+e;if(t>=s)return s;var a=(t-e)/n,r=Math.floor(a),o=a-r;return 0===o?t:o<.5?n*r+e:n*(r+1)+e}var d={mixins:[n],props:{disabled:Boolean},data:function(){return{isDrag:!1}},events:{mousedown:function(t){return this.dragStart(t,this.offsetByMouse)},mousemove:function(t){return this.dragMove(t,this.offsetByMouse)},mouseup:function(t){return this.dragEnd(t,this.offsetByMouse)},touchstart:function(t){return this.dragStart(t,this.offsetByTouch)},touchmove:function(t){return this.dragMove(t,this.offsetByTouch)},touchend:function(t){return this.dragEnd(t,this.offsetByTouch)},touchcancel:function(t){return this.dragEnd(t,this.offsetByTouch)}},methods:{isInTarget:function(t){return!!t&&(t===this.$el||this.isInTarget(t.parentElement))},offsetByMouse:function(t){return c(t,this.$el)},offsetByTouch:function(t){var e=0===t.touches.length?t.changedTouches[0]:t.touches[0];return c(e,this.$el)},dragStart:function(t,e){this.disabled||void 0!==t.button&&0!==t.button||!this.isInTarget(t.target)||(t.preventDefault(),this.isDrag=!0,this.$emit("dragstart",t,e(t),this.$el))},dragMove:function(t,e){this.isDrag&&(t.preventDefault(),this.$emit("drag",t,e(t),this.$el))},dragEnd:function(t,e){this.isDrag&&(t.preventDefault(),this.isDrag=!1,this.$emit("dragend",t,e(t),this.$el))}},render:function(){return this.$slots.default&&this.$slots.default[0]}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"range-slider",class:{disabled:t.disabled}},[i("drag-helper",{attrs:{disabled:t.disabled},on:{dragstart:t.dragStart,drag:t.drag,dragend:t.dragEnd}},[i("span",{ref:"inner",staticClass:"range-slider-inner"},[i("input",{staticClass:"range-slider-hidden",attrs:{type:"text",name:t.name,disabled:t.disabled},domProps:{value:t.actualValue}}),t._v(" "),i("span",{staticClass:"range-slider-rail"}),t._v(" "),i("span",{staticClass:"range-slider-fill",style:{width:t.valuePercent+"%"}}),t._v(" "),i("span",{ref:"knob",staticClass:"range-slider-knob",style:{left:t.valuePercent+"%"}},[t._t("knob")],2)])])],1)},staticRenderFns:[],props:{name:String,value:[String,Number],disabled:{type:Boolean,default:!1},min:{type:[String,Number],default:0},max:{type:[String,Number],default:100},step:{type:[String,Number],default:1}},data:function(){return{actualValue:null,dragStartValue:null}},created:function(){var t=this._min,e=this._max,i=Number(this.value);(null==this.value||isNaN(i))&&(i=t>e?t:(t+e)/2),this.actualValue=this.round(i)},computed:{_min:function(){return Number(this.min)},_max:function(){return Number(this.max)},_step:function(){return Number(this.step)},valuePercent:function(){return(this.actualValue-this._min)/(this._max-this._min)*100}},watch:{value:function(t){var e=Number(t);null==t||isNaN(e)||(this.actualValue=this.round(e))},min:function(){this.actualValue=this.round(this.actualValue)},max:function(){this.actualValue=this.round(this.actualValue)}},methods:{dragStart:function(t,e){this.dragStartValue=this.actualValue,t.target!==this.$refs.knob&&this.drag(t,e)},drag:function(t,e){var i=this.$refs.inner.offsetWidth;this.actualValue=this.round(this.valueFromBounds(e.left,i)),this.emitInput(this.actualValue)},dragEnd:function(t,e){var i=this.$refs.inner.offsetWidth;this.actualValue=this.round(this.valueFromBounds(e.left,i)),this.dragStartValue!==this.actualValue&&this.emitChange(this.actualValue)},emitInput:function(t){this.$emit("input",t)},emitChange:function(t){this.$emit("change",t)},valueFromBounds:function(t,e){return t/e*(this._max-this._min)+this._min},round:function(t){return u(t,this._min,this._max,this._step)}},components:{DragHelper:d}};t.exports=p},caa6:function(t,e,i){"use strict";i("2b48")},e16b:function(t,e,i){"use strict";i("69c1")}}]);
//# sourceMappingURL=chunk-5285026b.742efc3b.js.map