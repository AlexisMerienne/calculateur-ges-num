(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-df456406"],{"050a":function(t,e,i){t.exports=i.p+"img/caret-down.844cddbf.svg"},1771:function(t,e,i){var n={"./NewlogoI3S_0.png":"3452","./arrow-left-circle.svg":"9412","./arrow-right-circle.svg":"9af2","./caret-down.svg":"050a","./caret-left.svg":"d04b","./caret-right.svg":"af8f","./caret-up.svg":"1e33","./chevron-left-arrow.svg":"a46a","./chevron-right-arrow.svg":"30b8","./css/main.css":"5aea","./database.svg":"c97c","./dettecarbone.png":"a0d5","./dettecarbonesobriete.png":"b83f","./devices.svg":"f7c0","./ec_et_budget_carbone.png":"fede","./factory.svg":"a32c","./formuleconsodevice.png":"ef01","./formuleconsoservicenum.png":"741a","./house-svg.svg":"287c","./list.svg":"e7e9","./logo.svg":"9b19","./network.svg":"5071","./plus-circle.svg":"be71","./plus.svg":"8a37","./power-plant.svg":"565c","./question-circle.svg":"a434e","./right-arrow.svg":"f590","./tablet.png":"e2b2"};function s(t){var e=a(t);return i(e)}function a(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=a,t.exports=s,s.id="1771"},"1e33":function(t,e,i){t.exports=i.p+"img/caret-up.bd757d4c.svg"},"24ad":function(t,e,i){"use strict";i("4f5b")},2760:function(t,e,i){},"287c":function(t,e,i){t.exports=i.p+"img/house-svg.0951b52d.svg"},"2b48":function(t,e,i){},"30b8":function(t,e,i){t.exports=i.p+"img/chevron-right-arrow.55a08e16.svg"},"3fb4":function(t,e,i){},"4f5b":function(t,e,i){},5071:function(t,e,i){t.exports=i.p+"img/network.3145cd0a.svg"},"565c":function(t,e,i){t.exports=i.p+"img/power-plant.1390646b.svg"},6752:function(t,e,i){"use strict";i("cd42")},"6f99":function(t,e,i){"use strict";i("c016")},"741a":function(t,e,i){t.exports=i.p+"img/formuleconsoservicenum.c3650147.png"},"89fb":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slidecontainer"},[i("input",{staticClass:"slider",attrs:{type:"range",min:t.min,max:t.max,id:"myRange"},domProps:{value:t.ivalue},on:{change:function(e){return t.$emit("send-value",e.target.value)}}})])},s=[],a=(i("a9e3"),{name:"Slider",model:{prop:"value",event:"sendValue"},props:{min:Number,max:Number,id:Number,ivalue:Number},data:function(){return{value:0}},methods:{sendEvent:function(){var t=document.getElementById("myRange");this.$emit("send-value",t.value)}},mounted:function(){document.getElementById("myRange").min=this.min,document.getElementById("myRange").max=this.max}}),o=a,r=(i("caa6"),i("2877")),c=Object(r["a"])(o,n,s,!1,null,"027a87a4",null);e["a"]=c.exports},"8a37":function(t,e,i){t.exports=i.p+"img/plus.52ed82b6.svg"},"93fd":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"popup-wrapper"}},[n("b-button",{attrs:{pill:"",id:"button-popup",variant:"outline-primary"},on:{click:t.onClickPopup}},[t._v(t._s(t.textbutton))]),n("div",{staticClass:"modal",attrs:{id:"myModal"}},[n("div",{staticClass:"modal-content",staticStyle:{width:"50%"},attrs:{id:"modal-content"}},[n("div",{staticClass:"close",staticStyle:{display:"flex","justify-content":"right","text-align":"left"}},[n("span",{staticClass:"close",on:{click:t.closePopup}},[t._v("×")])]),n("h5",{staticStyle:{"text-align":"left"}},[t._v(t._s(t.content))]),t.isEquation?n("div",[n("img",{attrs:{id:"img-equation",src:i("1771")("./"+t.src_equation),alt:t.src_equation}})]):t._e(),t._l(t.sources,(function(e){return n("div",{key:e.id},[n("p",{staticStyle:{"text-align":"left"}},[t._v("["+t._s((Number(e.id)+1).toString())+"] "),n("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.src))])])])}))],2)])],1)},s=[],a=(i("d3b7"),i("25f0"),{name:"Popup",props:{textbutton:String,content:String,sources:Array,isEquation:Boolean,src_equation:String},data:function(){return{isMobile:!1,src:""}},methods:{onClickPopup:function(){document.getElementById("myModal").style.display="block"},closePopup:function(){document.getElementById("myModal").style.display="none"}},mounted:function(){this.isMobile=this.$store.getters.getIsMobile,1==this.isMobile&&(document.getElementById("modal-content").style.margin="5px",document.getElementById("modal-content").style.width="90%");var t=document.getElementById("popup-wrapper").offsetWidth;null!=document.getElementById("img-equation")&&(document.getElementById("img-equation").style.width=t.toString()+"px")}}),o=a,r=(i("6f99"),i("2877")),c=Object(r["a"])(o,n,s,!1,null,"41b98094",null);e["a"]=c.exports},9412:function(t,e,i){t.exports=i.p+"img/arrow-left-circle.d7056b61.svg"},"96c8":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"actions-wrapper",wrapper:""}},[i("div",{staticStyle:{display:"flex","flex-direction":"row","justify-content":"space-around"},attrs:{id:"title-and-question"}},[i("h3",[t._v("2. Mes applications")]),i("Popup",{attrs:{textbutton:"?",content:"Ajoutez les actions que vous faites pendant une journée type."}})],1),t._l(t.actions,(function(t){return i("div",{key:t.id},[i("ActionDisplay",{attrs:{id:t.id}})],1)})),i("PopupAddAction")],2)},s=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"displayer",shadow:""}},["mail"===t.action.label?i("div",{staticStyle:{display:"flex","flex-direction":"column",width:"100%"}},[i("div",{staticClass:"accordion",attrs:{id:"displat-txt-label-mail"},on:{click:function(e){return t.showAccordion()}}},[i("h6",{staticStyle:{"text-align":"left"}},[t._v("En moyenne, j'envoie "),i("span",{staticStyle:{color:"#2852f9"}},[t._v(t._s(t.action.value_1))]),i("strong",[t._v(" mails")]),t._v(", dont "),i("span",{staticStyle:{color:"#2852f9"}},[t._v(t._s(t.action.value_2))]),t._v(" avec "),i("strong",[t._v("pièce jointe")])]),i("div",{staticStyle:{width:"15%"},attrs:{id:"caret-down-container-mail"}},[i("div",{staticStyle:{display:"flex","justify-content":"flex-end"},attrs:{id:"caret-down-mail"}},[i("img",{attrs:{id:t.idcaret,src:t.srcImg,alt:"caret-down",height:"24"}})])])]),i("div",{staticClass:"panel",attrs:{id:t.idpanellabel}},[i("h6",{staticStyle:{"text-align":"left"}},[t._v("Mails totals")]),i("div",{staticClass:"form",staticStyle:{width:"100%"}},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.action.value_1,expression:"action.value_1",modifiers:{number:!0}}],staticClass:"form-input",attrs:{id:"mail",type:"”number”",autocomplete:"off",placeholder:" "},domProps:{value:t.action.value_1},on:{input:function(e){e.target.composing||t.$set(t.action,"value_1",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),i("h6",{staticStyle:{"text-align":"left"}},[t._v("Dont avec pièces jointes")]),i("div",{staticClass:"form",staticStyle:{width:"100%"}},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.action.value_2,expression:"action.value_2",modifiers:{number:!0}}],staticClass:"form-input",attrs:{id:"mailpj",type:"”number”",autocomplete:"off",placeholder:" "},domProps:{value:t.action.value_2},on:{input:function(e){e.target.composing||t.$set(t.action,"value_2",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),i("h5",{staticStyle:{position:"absolute",color:"red","text-align":"left","font-size":"0.7em",top:"5em"},attrs:{id:"alert-txt"}},[t._v(t._s(t.alertText))])]),i("div",{staticClass:"d-button",staticStyle:{width:"100%"}},[i("div",{staticClass:"d-button-container",staticStyle:{display:"flex","justify-content":"right"}},[i("b-button",{attrs:{id:"b-delete-mail",pill:"",variant:"outline-danger"},on:{click:t.onDelete}},[t._v("Supprimer")])],1)])])]):i("div",{staticStyle:{display:"flex","flex-direction":"column"},attrs:{id:"descr-service-num"}},[i("div",{staticClass:"accordion",attrs:{id:"displat-txt-label"},on:{click:function(e){return t.showAccordion()}}},[i("div",{staticStyle:{display:"flex","margin-bottom":"0px","margin-right":"20px",width:"85%"},domProps:{innerHTML:t._s(t.printDescription())}}),i("div",{staticStyle:{width:"15%"},attrs:{id:"caret-down-container"}},[i("div",{staticStyle:{display:"flex","justify-content":"flex-end"},attrs:{id:"caret-down"}},[i("img",{attrs:{id:t.idcaret,src:t.srcImg,alt:"caret-down",height:"24"}})])])]),i("div",{staticClass:"panel",attrs:{id:t.idpanellabel}},[t.isfirefox?i("div",[i("Slider",{attrs:{min:0,max:12,id:t.id,ivalue:parseInt(this.value1)},on:{"send-value":t.setValue}})],1):i("div",{staticStyle:{display:"flex","justify-content":"center",width:"100%"}},[i("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center",width:"80%","margin-top":"10px","background-color":"rgba(119,136,153,0.73)","border-radius":"var(--border-radius-max)","min-height":"30px"},attrs:{id:"range-slider-container"}},[i("range-slider",{staticClass:"slider",attrs:{min:"0",max:"12",step:"1"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1)]),i("div",{staticClass:"d-button",staticStyle:{width:"100%"}},[i("div",{staticClass:"d-button-container",staticStyle:{display:"flex","justify-content":"right"}},[i("b-button",{attrs:{id:"b-delete",pill:"",variant:"outline-danger"},on:{click:t.onDelete}},[t._v("Supprimer")])],1)])])])])},o=[],r=(i("a9e3"),i("c7e3")),c=i.n(r),l=(i("2760"),i("89fb")),u={name:"ActionDisplay",props:{id:Number},components:{RangeSlider:c.a,Slider:l["a"]},data:function(){return{action:this.$store.getters.getAction(this.id),temps:0,value1:0,isfirefox:!1,idpanellabel:"",idcaret:"",srcImg:"",idtxtlabel:"",alertText:""}},methods:{onDelete:function(){this.$store.commit("AVAILABLE",this.action.label),this.$store.commit("DELETE_ACTION",this.id)},printDescription:function(){return"video"===this.action.label?'<h6>Je regarde  <strong style="color: #2852f9;">'+this.value1+"h</strong> de <strong>vidéos</strong> par jour</h6>":"insta"===this.action.label?'<h6>Je passe <strong style="color:#2852f9;">'+this.value1+"h</strong> sur les <strong>réseaux sociaux</strong></h6>":void 0},setValue:function(t){this.value1=t},showAccordion:function(){var t=document.getElementById(this.idpanellabel);switch(this.action.label){case"mail":this.checkCoherentValueMail()?t.style.maxHeight?(t.style.maxHeight=null,this.srcImg=i("050a")):(t.style.maxHeight=t.scrollHeight+"px",this.srcImg=i("1e33")):window.alert("Veuillez renseigner des valeurs cohérentes :(");break;case"video":t.style.maxHeight?(t.style.maxHeight=null,this.srcImg=i("050a")):(t.style.maxHeight=t.scrollHeight+"px",this.srcImg=i("1e33"));break;case"insta":t.style.maxHeight?(t.style.maxHeight=null,this.srcImg=i("050a")):(t.style.maxHeight=t.scrollHeight+"px",this.srcImg=i("1e33"))}},checkCoherentValueMail:function(){return!(this.action.value_1<this.action.value_2)}},updated:function(){"mail"!==this.action.label?this.action.value_1=this.value1:this.action.value_1<this.action.value_2?this.alertText="Les mails avec pièce jointe sont nécessairement inférieurs aux nombre de mails total":this.alertText="",this.$store.commit("SET_VALUE_ACTION",this.action)},beforeMount:function(){this.idtxtlabel="txt-label-"+this.action.id,this.idpanellabel="panel-label-"+this.action.id,this.idcaret="caret-"+this.action.id},mounted:function(){this.value1=null!==this.$store.getters.getAction(this.id).value_1&&"mail"!=this.$store.getters.getAction(this.id).label?this.value1=this.$store.getters.getAction(this.id).value_1:this.value1=0,this.isfirefox=this.$store.getters.getIsFirefox,this.srcImg=i("050a")}},d=u,f=(i("24ad"),i("2877")),p=Object(f["a"])(d,a,o,!1,null,"5a4d6600",null),m=p.exports,g=i("93fd"),h=i("ee6f"),v={name:"Actions",components:{ActionDisplay:m,Popup:g["a"],PopupAddAction:h["a"]},data:function(){return{actions:this.$store.getters.getActions}}},b=v,y=(i("a161"),Object(f["a"])(b,n,s,!1,null,"130cf8d8",null));e["default"]=y.exports},"9af2":function(t,e,i){t.exports=i.p+"img/arrow-right-circle.e023df2b.svg"},"9b19":function(t,e,i){t.exports=i.p+"img/logo.c8a1e198.svg"},a0d5:function(t,e,i){t.exports=i.p+"img/dettecarbone.0b15b79b.png"},a161:function(t,e,i){"use strict";i("3fb4")},a32c:function(t,e,i){t.exports=i.p+"img/factory.e42c363b.svg"},a434e:function(t,e,i){t.exports=i.p+"img/question-circle.8c6f9b66.svg"},a46a:function(t,e,i){t.exports=i.p+"img/chevron-left-arrow.7b9263ee.svg"},af8f:function(t,e,i){t.exports=i.p+"img/caret-right.6d16991c.svg"},b83f:function(t,e,i){t.exports=i.p+"img/dettecarbonesobriete.96de3856.png"},be71:function(t,e,i){t.exports=i.p+"img/plus-circle.da5b7948.svg"},c016:function(t,e,i){},c7e3:function(t,e,i){"use strict";
/*!
 * vue-range-slider v0.6.0
 * https://github.com/ktsn/vue-range-slider
 *
 * @license
 * Copyright (c) 2016-2018 katashin
 * Released under the MIT license
 * https://github.com/ktsn/vue-range-slider/blob/master/LICENSE
 */var n={created:function(){"undefined"!==typeof document&&o(this,(function(t,e){r(document,t,e)}))},beforeDestroy:function(){"undefined"!==typeof document&&o(this,(function(t,e){c(document,t,e)}))}},s="undefined"!==typeof window,a=s&&function(){var t=!1;try{var e={get:function(){t=!0}},i=Object.defineProperty({},"passive",e);window.addEventListener("test",null,i),window.removeEventListener("test",null,i)}catch(n){t=!1}return t}();function o(t,e){var i=t.$options.events;Object.keys(i).forEach((function(n){e(n,(function(e){return i[n].call(t,e)}))}))}function r(t,e,i){var n=a?{passive:!1}:void 0;t.addEventListener(e,i,n)}function c(t,e,i){var n=a?{passive:!1}:void 0;t.removeEventListener(e,i,n)}function l(t,e){var i=e.getBoundingClientRect();return{left:t.clientX-i.left,top:t.clientY-i.top}}function u(t,e,i,n){if(t<=e)return e;var s=Math.floor((i-e)/n)*n+e;if(t>=s)return s;var a=(t-e)/n,o=Math.floor(a),r=a-o;return 0===r?t:r<.5?n*o+e:n*(o+1)+e}var d={mixins:[n],props:{disabled:Boolean},data:function(){return{isDrag:!1}},events:{mousedown:function(t){return this.dragStart(t,this.offsetByMouse)},mousemove:function(t){return this.dragMove(t,this.offsetByMouse)},mouseup:function(t){return this.dragEnd(t,this.offsetByMouse)},touchstart:function(t){return this.dragStart(t,this.offsetByTouch)},touchmove:function(t){return this.dragMove(t,this.offsetByTouch)},touchend:function(t){return this.dragEnd(t,this.offsetByTouch)},touchcancel:function(t){return this.dragEnd(t,this.offsetByTouch)}},methods:{isInTarget:function(t){return!!t&&(t===this.$el||this.isInTarget(t.parentElement))},offsetByMouse:function(t){return l(t,this.$el)},offsetByTouch:function(t){var e=0===t.touches.length?t.changedTouches[0]:t.touches[0];return l(e,this.$el)},dragStart:function(t,e){this.disabled||void 0!==t.button&&0!==t.button||!this.isInTarget(t.target)||(t.preventDefault(),this.isDrag=!0,this.$emit("dragstart",t,e(t),this.$el))},dragMove:function(t,e){this.isDrag&&(t.preventDefault(),this.$emit("drag",t,e(t),this.$el))},dragEnd:function(t,e){this.isDrag&&(t.preventDefault(),this.isDrag=!1,this.$emit("dragend",t,e(t),this.$el))}},render:function(){return this.$slots.default&&this.$slots.default[0]}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"range-slider",class:{disabled:t.disabled}},[i("drag-helper",{attrs:{disabled:t.disabled},on:{dragstart:t.dragStart,drag:t.drag,dragend:t.dragEnd}},[i("span",{ref:"inner",staticClass:"range-slider-inner"},[i("input",{staticClass:"range-slider-hidden",attrs:{type:"text",name:t.name,disabled:t.disabled},domProps:{value:t.actualValue}}),t._v(" "),i("span",{staticClass:"range-slider-rail"}),t._v(" "),i("span",{staticClass:"range-slider-fill",style:{width:t.valuePercent+"%"}}),t._v(" "),i("span",{ref:"knob",staticClass:"range-slider-knob",style:{left:t.valuePercent+"%"}},[t._t("knob")],2)])])],1)},staticRenderFns:[],props:{name:String,value:[String,Number],disabled:{type:Boolean,default:!1},min:{type:[String,Number],default:0},max:{type:[String,Number],default:100},step:{type:[String,Number],default:1}},data:function(){return{actualValue:null,dragStartValue:null}},created:function(){var t=this._min,e=this._max,i=Number(this.value);(null==this.value||isNaN(i))&&(i=t>e?t:(t+e)/2),this.actualValue=this.round(i)},computed:{_min:function(){return Number(this.min)},_max:function(){return Number(this.max)},_step:function(){return Number(this.step)},valuePercent:function(){return(this.actualValue-this._min)/(this._max-this._min)*100}},watch:{value:function(t){var e=Number(t);null==t||isNaN(e)||(this.actualValue=this.round(e))},min:function(){this.actualValue=this.round(this.actualValue)},max:function(){this.actualValue=this.round(this.actualValue)}},methods:{dragStart:function(t,e){this.dragStartValue=this.actualValue,t.target!==this.$refs.knob&&this.drag(t,e)},drag:function(t,e){var i=this.$refs.inner.offsetWidth;this.actualValue=this.round(this.valueFromBounds(e.left,i)),this.emitInput(this.actualValue)},dragEnd:function(t,e){var i=this.$refs.inner.offsetWidth;this.actualValue=this.round(this.valueFromBounds(e.left,i)),this.dragStartValue!==this.actualValue&&this.emitChange(this.actualValue)},emitInput:function(t){this.$emit("input",t)},emitChange:function(t){this.$emit("change",t)},valueFromBounds:function(t,e){return t/e*(this._max-this._min)+this._min},round:function(t){return u(t,this._min,this._max,this._step)}},components:{DragHelper:d}};t.exports=f},c97c:function(t,e,i){t.exports=i.p+"img/database.fbfb8731.svg"},caa6:function(t,e,i){"use strict";i("2b48")},cd42:function(t,e,i){},d04b:function(t,e,i){t.exports=i.p+"img/caret-left.855ea103.svg"},e2b2:function(t,e,i){t.exports=i.p+"img/tablet.b282a706.png"},ee6f:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"popup-wrapper"}},[i("div",{staticClass:"plus-button",attrs:{id:"plus-button-action"},on:{click:t.onClickPopup}},[t._v(" + ")]),i("div",{staticClass:"modal",attrs:{id:"myModal-plus"}},[i("div",{staticClass:"modal-content",staticStyle:{width:"50%"},attrs:{id:"modal-content-plus"}},[i("div",{staticClass:"close",staticStyle:{display:"flex","justify-content":"right","text-align":"left"}},[i("span",{staticClass:"close",on:{click:t.closePopup}},[t._v("×")])]),i("div",{staticClass:"action-chooser",on:{click:function(e){return t.addAction("mail")}}},[i("h6",{staticClass:"action-chooser-txt"},[t._v("Mails")])]),i("div",{staticClass:"action-chooser",on:{click:function(e){return t.addAction("video")}}},[i("h6",{staticClass:"action-chooser-txt"},[t._v("Vidéo")])]),i("div",{staticClass:"action-chooser",on:{click:function(e){return t.addAction("insta")}}},[i("h6",{staticClass:"action-chooser-txt"},[t._v("Réseaux (a)sociaux")])])])])])},s=[],a=(i("c740"),{name:"Popup",props:{textbutton:String,content:String},data:function(){return{isMobile:!1}},methods:{onClickPopup:function(){1==this.isMobile?(document.getElementById("myModal-plus").style.display="flex",document.getElementById("myModal-plus").style.justifyContent="center"):document.getElementById("myModal-plus").style.display="block"},closePopup:function(){document.getElementById("myModal-plus").style.display="none"},addAction:function(t){var e=this.$store.getters.getActionAvailables;-1!=e.findIndex((function(e){return e===t}))?(this.$store.commit("CREATE_ACTION",t),this.$store.commit("UNAVAILABLE",t),this.closePopup()):window.alert("Cette action est déjà sélectionnée.")}},mounted:function(){this.isMobile=this.$store.getters.getIsMobile,1==this.isMobile&&(document.getElementById("modal-content-plus").style.margin="5px",document.getElementById("modal-content-plus").style.width="90%",document.getElementById("plus-button-action").style.backgroundColor="#B2B2B2")}}),o=a,r=(i("6752"),i("2877")),c=Object(r["a"])(o,n,s,!1,null,"c26d5e9e",null);e["a"]=c.exports},ef01:function(t,e,i){t.exports=i.p+"img/formuleconsodevice.99237eb9.png"},f590:function(t,e,i){t.exports=i.p+"img/right-arrow.7941f113.svg"},f7c0:function(t,e,i){t.exports=i.p+"img/devices.b00224ad.svg"},fede:function(t,e,i){t.exports=i.p+"img/ec_et_budget_carbone.4c31651a.png"}}]);
//# sourceMappingURL=chunk-df456406.1f72cfa0.js.map