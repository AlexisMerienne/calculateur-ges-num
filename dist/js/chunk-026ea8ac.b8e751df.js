(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-026ea8ac"],{"050a":function(t,e,n){t.exports=n.p+"img/caret-down.844cddbf.svg"},1771:function(t,e,n){var i={"./NewlogoI3S_0.png":"3452","./arrow-left-circle.svg":"9412","./arrow-right-circle.svg":"9af2","./caret-down.svg":"050a","./caret-left.svg":"d04b","./caret-right.svg":"af8f","./chevron-left-arrow.svg":"a46a","./chevron-right-arrow.svg":"30b8","./css/main.css":"5aea","./database.svg":"c97c","./dettecarbone.png":"a0d5","./dettecarbonesobriete.png":"b83f","./devices.svg":"f7c0","./factory.svg":"a32c","./formuleconsodevice.png":"ef01","./formuleconsoservicenum.png":"741a","./house-svg.svg":"287c","./logo.svg":"9b19","./network.svg":"5071","./plus-circle.svg":"be71","./plus.svg":"8a37","./power-plant.svg":"565c","./question-circle.svg":"a434e","./right-arrow.svg":"f590"};function a(t){var e=s(t);return n(e)}function s(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}a.keys=function(){return Object.keys(i)},a.resolve=s,t.exports=a,a.id="1771"},2760:function(t,e,n){},"287c":function(t,e,n){t.exports=n.p+"img/house-svg.0951b52d.svg"},"2b48":function(t,e,n){},"30b8":function(t,e,n){t.exports=n.p+"img/chevron-right-arrow.55a08e16.svg"},3905:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"popup-wrapper"}},[i("b-button",{attrs:{pill:"",id:"button-popup",variant:"outline-primary"},on:{click:t.onClickPopup}},[t._v(t._s(t.textbutton))]),i("div",{staticClass:"modal",attrs:{id:"myModal"}},[i("div",{staticClass:"modal-content",staticStyle:{width:"50%"},attrs:{id:"modal-content"}},[i("div",{staticClass:"close",staticStyle:{display:"flex","justify-content":"right","text-align":"left"}},[i("span",{staticClass:"close",on:{click:t.closePopup}},[t._v("×")])]),i("h5",{staticStyle:{"text-align":"left"}},[t._v(t._s(t.content))]),t.isEquation?i("div",[i("img",{attrs:{id:"img-equation",src:n("1771")("./"+t.src_equation),alt:t.src_equation}})]):t._e(),t._l(t.sources,(function(e){return i("div",{key:e.id},[i("p",{staticStyle:{"text-align":"left"}},[t._v("["+t._s((Number(e.id)+1).toString())+"] "),i("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.src))])])])}))],2)])],1)},a=[],s=(n("d3b7"),n("25f0"),{name:"Popup",props:{textbutton:String,content:String,sources:Array,isEquation:Boolean,src_equation:String},data:function(){return{isMobile:!1,src:""}},methods:{onClickPopup:function(){document.getElementById("myModal").style.display="block"},closePopup:function(){document.getElementById("myModal").style.display="none"}},mounted:function(){this.isMobile=this.$store.getters.getIsMobile,1==this.isMobile&&(document.getElementById("modal-content").style.margin="5px",document.getElementById("modal-content").style.width="90%");var t=document.getElementById("popup-wrapper").offsetWidth;null!=document.getElementById("img-equation")&&(document.getElementById("img-equation").style.width=t.toString()+"px")}}),o=s,r=(n("6e86"),n("2877")),u=Object(r["a"])(o,i,a,!1,null,"48ccfbc8",null);e["a"]=u.exports},5071:function(t,e,n){t.exports=n.p+"img/network.3145cd0a.svg"},"565c":function(t,e,n){t.exports=n.p+"img/power-plant.1390646b.svg"},6766:function(t,e,n){"use strict";n("aaba")},"6e86":function(t,e,n){"use strict";n("ba30")},"741a":function(t,e,n){t.exports=n.p+"img/formuleconsoservicenum.c3650147.png"},"89fb":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slidecontainer"},[n("input",{staticClass:"slider",attrs:{type:"range",min:t.min,max:t.max,id:"myRange"},domProps:{value:t.ivalue},on:{change:function(e){return t.$emit("send-value",e.target.value)}}})])},a=[],s=(n("a9e3"),{name:"Slider",model:{prop:"value",event:"sendValue"},props:{min:Number,max:Number,id:Number,ivalue:Number},data:function(){return{value:0}},methods:{sendEvent:function(){var t=document.getElementById("myRange");this.$emit("send-value",t.value)}},mounted:function(){document.getElementById("myRange").min=this.min,document.getElementById("myRange").max=this.max}}),o=s,r=(n("caa6"),n("2877")),u=Object(r["a"])(o,i,a,!1,null,"027a87a4",null);e["a"]=u.exports},"8a37":function(t,e,n){t.exports=n.p+"img/plus.52ed82b6.svg"},9412:function(t,e,n){t.exports=n.p+"img/arrow-left-circle.d7056b61.svg"},"96c8":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"actions-wrapper",shadow:""}},[n("div",{staticStyle:{display:"flex","flex-direction":"row","justify-content":"space-around"},attrs:{id:"title-and-question"}},[n("h3",[t._v("2. Mes applications")]),n("Popup",{attrs:{textbutton:"?",content:"Ajoutez les actions que vous faites pendant une journée type."}})],1),t._l(t.actions,(function(t){return n("div",{key:t.id},[n("ActionDisplay",{attrs:{id:t.id}})],1)})),n("div",{attrs:{id:"buttons"}},[n("b-dropdown",{staticStyle:{margin:"5px"},attrs:{"toggle-class":"rounded-circle px-2.8",size:"lg",variant:"white",pill:"",right:"","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("b-icon",{attrs:{id:"icon-plus",icon:"plus-circle-fill",scale:"2",variant:"primary"}})]},proxy:!0}])},[t._v(" "),n("b-dropdown-item",{on:{click:function(e){return t.addAction("mail")}}},[t._v("mail")]),n("b-dropdown-item",{on:{click:function(e){return t.addAction("video")}}},[t._v("video")]),n("b-dropdown-item",{on:{click:function(e){return t.addAction("insta")}}},[t._v("réseaux (a)sociaux")])],1)],1)],2)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"displayer",shadow:""}},["mail"===t.action.label?n("div",[n("h6",{staticStyle:{"text-align":"left"}},[t._v("Les "+t._s(t.action.label)+"s que j'ai envoyé aujourd'hui :")]),n("h6",{staticStyle:{"text-align":"left"}},[t._v("Mails totals")]),n("div",{staticClass:"form"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.action.value_1,expression:"action.value_1",modifiers:{number:!0}}],staticClass:"form-input",attrs:{id:"mail",type:"”number”",autocomplete:"off",placeholder:" "},domProps:{value:t.action.value_1},on:{input:function(e){e.target.composing||t.$set(t.action,"value_1",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),n("h6",{staticStyle:{"text-align":"left"}},[t._v("Dont avec pièces jointes")]),n("div",{staticClass:"form"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.action.value_2,expression:"action.value_2",modifiers:{number:!0}}],staticClass:"form-input",attrs:{id:"mailpj",type:"”number”",autocomplete:"off",placeholder:" "},domProps:{value:t.action.value_2},on:{input:function(e){e.target.composing||t.$set(t.action,"value_2",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]):n("div",{staticStyle:{display:"flex","flex-direction":"column"},attrs:{id:"descr-service-num"}},[n("div",{domProps:{innerHTML:t._s(t.printDescription())}}),t.isfirefox?n("div",[n("Slider",{attrs:{min:0,max:12,id:t.id,ivalue:parseInt(this.value1)},on:{"send-value":t.setValue}})],1):n("div",[n("range-slider",{staticClass:"slider",attrs:{min:"0",max:"12",step:"1"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1)]),n("div",{staticClass:"d-button",staticStyle:{width:"100%"}},[n("div",{staticClass:"d-button-container",staticStyle:{display:"flex","justify-content":"right"}},[n("b-button",{attrs:{id:"b-delete",pill:"",variant:"outline-danger"},on:{click:t.onDelete}},[t._v("Supprimer")])],1)])])},o=[],r=(n("a9e3"),n("c7e3")),u=n.n(r),c=(n("2760"),n("89fb")),l={name:"ActionDisplay",props:{id:Number},components:{RangeSlider:u.a,Slider:c["a"]},data:function(){return{action:this.$store.getters.getAction(this.id),temps:0,value1:0,isfirefox:!1}},methods:{onDelete:function(){this.$store.commit("DELETE_ACTION",this.id)},printDescription:function(){return"video"===this.action.label?'<h6>Je regarde  <strong style="color: #2852f9;">'+this.value1+"h</strong> de vidéos par jour</h6>":"insta"===this.action.label?'<h6>Je passe <strong style="color:#2852f9;">'+this.value1+"h</strong> sur les réseaux sociaux</h6>":void 0},setValue:function(t){this.value1=t}},updated:function(){"mail"!==this.action.label&&(this.action.value_1=this.value1),this.$store.commit("SET_VALUE_ACTION",this.action)},mounted:function(){this.value1=null!==this.$store.getters.getAction(this.id).value_1&&"mail"!=this.$store.getters.getAction(this.id).label?this.value1=this.$store.getters.getAction(this.id).value_1:this.value1=0,this.isfirefox=this.$store.getters.getIsFirefox}},d=l,f=(n("6766"),n("2877")),p=Object(f["a"])(d,s,o,!1,null,"7d711e2a",null),m=p.exports,v=n("3905"),g={name:"Actions",components:{ActionDisplay:m,Popup:v["a"]},data:function(){return{actions:this.$store.getters.getActions}},methods:{addAction:function(t){this.$store.commit("CREATE_ACTION",t)}}},h=g,b=(n("cb3e"),Object(f["a"])(h,i,a,!1,null,"254fbddd",null));e["default"]=b.exports},"9af2":function(t,e,n){t.exports=n.p+"img/arrow-right-circle.e023df2b.svg"},"9b19":function(t,e,n){t.exports=n.p+"img/logo.c8a1e198.svg"},a0d5:function(t,e,n){t.exports=n.p+"img/dettecarbone.0b15b79b.png"},a32c:function(t,e,n){t.exports=n.p+"img/factory.e42c363b.svg"},a434e:function(t,e,n){t.exports=n.p+"img/question-circle.8c6f9b66.svg"},a46a:function(t,e,n){t.exports=n.p+"img/chevron-left-arrow.7b9263ee.svg"},aaba:function(t,e,n){},af8f:function(t,e,n){t.exports=n.p+"img/caret-right.6d16991c.svg"},b83f:function(t,e,n){t.exports=n.p+"img/dettecarbonesobriete.96de3856.png"},ba30:function(t,e,n){},be71:function(t,e,n){t.exports=n.p+"img/plus-circle.da5b7948.svg"},c7e3:function(t,e,n){"use strict";
/*!
 * vue-range-slider v0.6.0
 * https://github.com/ktsn/vue-range-slider
 *
 * @license
 * Copyright (c) 2016-2018 katashin
 * Released under the MIT license
 * https://github.com/ktsn/vue-range-slider/blob/master/LICENSE
 */var i={created:function(){"undefined"!==typeof document&&o(this,(function(t,e){r(document,t,e)}))},beforeDestroy:function(){"undefined"!==typeof document&&o(this,(function(t,e){u(document,t,e)}))}},a="undefined"!==typeof window,s=a&&function(){var t=!1;try{var e={get:function(){t=!0}},n=Object.defineProperty({},"passive",e);window.addEventListener("test",null,n),window.removeEventListener("test",null,n)}catch(i){t=!1}return t}();function o(t,e){var n=t.$options.events;Object.keys(n).forEach((function(i){e(i,(function(e){return n[i].call(t,e)}))}))}function r(t,e,n){var i=s?{passive:!1}:void 0;t.addEventListener(e,n,i)}function u(t,e,n){var i=s?{passive:!1}:void 0;t.removeEventListener(e,n,i)}function c(t,e){var n=e.getBoundingClientRect();return{left:t.clientX-n.left,top:t.clientY-n.top}}function l(t,e,n,i){if(t<=e)return e;var a=Math.floor((n-e)/i)*i+e;if(t>=a)return a;var s=(t-e)/i,o=Math.floor(s),r=s-o;return 0===r?t:r<.5?i*o+e:i*(o+1)+e}var d={mixins:[i],props:{disabled:Boolean},data:function(){return{isDrag:!1}},events:{mousedown:function(t){return this.dragStart(t,this.offsetByMouse)},mousemove:function(t){return this.dragMove(t,this.offsetByMouse)},mouseup:function(t){return this.dragEnd(t,this.offsetByMouse)},touchstart:function(t){return this.dragStart(t,this.offsetByTouch)},touchmove:function(t){return this.dragMove(t,this.offsetByTouch)},touchend:function(t){return this.dragEnd(t,this.offsetByTouch)},touchcancel:function(t){return this.dragEnd(t,this.offsetByTouch)}},methods:{isInTarget:function(t){return!!t&&(t===this.$el||this.isInTarget(t.parentElement))},offsetByMouse:function(t){return c(t,this.$el)},offsetByTouch:function(t){var e=0===t.touches.length?t.changedTouches[0]:t.touches[0];return c(e,this.$el)},dragStart:function(t,e){this.disabled||void 0!==t.button&&0!==t.button||!this.isInTarget(t.target)||(t.preventDefault(),this.isDrag=!0,this.$emit("dragstart",t,e(t),this.$el))},dragMove:function(t,e){this.isDrag&&(t.preventDefault(),this.$emit("drag",t,e(t),this.$el))},dragEnd:function(t,e){this.isDrag&&(t.preventDefault(),this.isDrag=!1,this.$emit("dragend",t,e(t),this.$el))}},render:function(){return this.$slots.default&&this.$slots.default[0]}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"range-slider",class:{disabled:t.disabled}},[n("drag-helper",{attrs:{disabled:t.disabled},on:{dragstart:t.dragStart,drag:t.drag,dragend:t.dragEnd}},[n("span",{ref:"inner",staticClass:"range-slider-inner"},[n("input",{staticClass:"range-slider-hidden",attrs:{type:"text",name:t.name,disabled:t.disabled},domProps:{value:t.actualValue}}),t._v(" "),n("span",{staticClass:"range-slider-rail"}),t._v(" "),n("span",{staticClass:"range-slider-fill",style:{width:t.valuePercent+"%"}}),t._v(" "),n("span",{ref:"knob",staticClass:"range-slider-knob",style:{left:t.valuePercent+"%"}},[t._t("knob")],2)])])],1)},staticRenderFns:[],props:{name:String,value:[String,Number],disabled:{type:Boolean,default:!1},min:{type:[String,Number],default:0},max:{type:[String,Number],default:100},step:{type:[String,Number],default:1}},data:function(){return{actualValue:null,dragStartValue:null}},created:function(){var t=this._min,e=this._max,n=Number(this.value);(null==this.value||isNaN(n))&&(n=t>e?t:(t+e)/2),this.actualValue=this.round(n)},computed:{_min:function(){return Number(this.min)},_max:function(){return Number(this.max)},_step:function(){return Number(this.step)},valuePercent:function(){return(this.actualValue-this._min)/(this._max-this._min)*100}},watch:{value:function(t){var e=Number(t);null==t||isNaN(e)||(this.actualValue=this.round(e))},min:function(){this.actualValue=this.round(this.actualValue)},max:function(){this.actualValue=this.round(this.actualValue)}},methods:{dragStart:function(t,e){this.dragStartValue=this.actualValue,t.target!==this.$refs.knob&&this.drag(t,e)},drag:function(t,e){var n=this.$refs.inner.offsetWidth;this.actualValue=this.round(this.valueFromBounds(e.left,n)),this.emitInput(this.actualValue)},dragEnd:function(t,e){var n=this.$refs.inner.offsetWidth;this.actualValue=this.round(this.valueFromBounds(e.left,n)),this.dragStartValue!==this.actualValue&&this.emitChange(this.actualValue)},emitInput:function(t){this.$emit("input",t)},emitChange:function(t){this.$emit("change",t)},valueFromBounds:function(t,e){return t/e*(this._max-this._min)+this._min},round:function(t){return l(t,this._min,this._max,this._step)}},components:{DragHelper:d}};t.exports=f},c97c:function(t,e,n){t.exports=n.p+"img/database.fbfb8731.svg"},caa6:function(t,e,n){"use strict";n("2b48")},cb3e:function(t,e,n){"use strict";n("e132")},d04b:function(t,e,n){t.exports=n.p+"img/caret-left.855ea103.svg"},e132:function(t,e,n){},ef01:function(t,e,n){t.exports=n.p+"img/formuleconsodevice.99237eb9.png"},f590:function(t,e,n){t.exports=n.p+"img/right-arrow.7941f113.svg"},f7c0:function(t,e,n){t.exports=n.p+"img/devices.b00224ad.svg"}}]);
//# sourceMappingURL=chunk-026ea8ac.b8e751df.js.map