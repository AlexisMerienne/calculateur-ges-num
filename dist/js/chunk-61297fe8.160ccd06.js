(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61297fe8"],{"002c":function(t,e,n){},"050a":function(t,e,n){t.exports=n.p+"img/caret-down.844cddbf.svg"},"057f":function(t,e,n){var i=n("c6b6"),r=n("fc6a"),o=n("241c").f,s=n("4dae"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return s(a)}};t.exports.f=function(t){return a&&"Window"==i(t)?c(t):o(r(t))}},1771:function(t,e,n){var i={"./NewlogoI3S_0.png":"3452","./arrow-left-circle.svg":"9412","./arrow-right-circle.svg":"9af2","./caret-down.svg":"050a","./caret-left.svg":"d04b","./caret-right.svg":"af8f","./caret-up.svg":"1e33","./chevron-left-arrow.svg":"a46a","./chevron-right-arrow.svg":"30b8","./css/main.css":"5aea","./database.svg":"c97c","./dettecarbone.png":"a0d5","./dettecarbonesobriete.png":"b83f","./devices.svg":"f7c0","./ec_et_budget_carbone.png":"fede","./factory.svg":"a32c","./formuleconsodevice.png":"ef01","./formuleconsoservicenum.png":"741a","./house-svg.svg":"287c","./logo.svg":"9b19","./network.svg":"5071","./plus-circle.svg":"be71","./plus.svg":"8a37","./power-plant.svg":"565c","./question-circle.svg":"a434e","./right-arrow.svg":"f590"};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=o,t.exports=r,r.id="1771"},"1e33":function(t,e,n){t.exports=n.p+"img/caret-up.bd757d4c.svg"},2760:function(t,e,n){},"287c":function(t,e,n){t.exports=n.p+"img/house-svg.0951b52d.svg"},"2c1f":function(t,e,n){},"30b8":function(t,e,n){t.exports=n.p+"img/chevron-right-arrow.55a08e16.svg"},"31be":function(t,e,n){"use strict";n("2c1f")},3905:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"popup-wrapper"}},[i("b-button",{attrs:{pill:"",id:"button-popup",variant:"outline-primary"},on:{click:t.onClickPopup}},[t._v(t._s(t.textbutton))]),i("div",{staticClass:"modal",attrs:{id:"myModal"}},[i("div",{staticClass:"modal-content",staticStyle:{width:"50%"},attrs:{id:"modal-content"}},[i("div",{staticClass:"close",staticStyle:{display:"flex","justify-content":"right","text-align":"left"}},[i("span",{staticClass:"close",on:{click:t.closePopup}},[t._v("×")])]),i("h5",{staticStyle:{"text-align":"left"}},[t._v(t._s(t.content))]),t.isEquation?i("div",[i("img",{attrs:{id:"img-equation",src:n("1771")("./"+t.src_equation),alt:t.src_equation}})]):t._e(),t._l(t.sources,(function(e){return i("div",{key:e.id},[i("p",{staticStyle:{"text-align":"left"}},[t._v("["+t._s((Number(e.id)+1).toString())+"] "),i("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.src))])])])}))],2)])],1)},r=[],o=(n("d3b7"),n("25f0"),{name:"Popup",props:{textbutton:String,content:String,sources:Array,isEquation:Boolean,src_equation:String},data:function(){return{isMobile:!1,src:""}},methods:{onClickPopup:function(){document.getElementById("myModal").style.display="block"},closePopup:function(){document.getElementById("myModal").style.display="none"}},mounted:function(){this.isMobile=this.$store.getters.getIsMobile,1==this.isMobile&&(document.getElementById("modal-content").style.margin="5px",document.getElementById("modal-content").style.width="90%");var t=document.getElementById("popup-wrapper").offsetWidth;null!=document.getElementById("img-equation")&&(document.getElementById("img-equation").style.width=t.toString()+"px")}}),s=o,a=(n("6e86"),n("2877")),c=Object(a["a"])(s,i,r,!1,null,"48ccfbc8",null);e["a"]=c.exports},"3af4":function(t,e,n){"use strict";n("002c")},"428f":function(t,e,n){var i=n("da84");t.exports=i},"4dae":function(t,e,n){var i=n("da84"),r=n("23cb"),o=n("07fa"),s=n("8418"),a=i.Array,c=Math.max;t.exports=function(t,e,n){for(var i=o(t),u=r(e,i),d=r(void 0===n?i:n,i),l=a(c(d-u,0)),f=0;u<d;u++,f++)s(l,f,t[u]);return l.length=f,l}},5071:function(t,e,n){t.exports=n.p+"img/network.3145cd0a.svg"},"565c":function(t,e,n){t.exports=n.p+"img/power-plant.1390646b.svg"},"6e86":function(t,e,n){"use strict";n("ba30")},"741a":function(t,e,n){t.exports=n.p+"img/formuleconsoservicenum.c3650147.png"},"746f":function(t,e,n){var i=n("428f"),r=n("1a2d"),o=n("e538"),s=n("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});r(e,t)||s(e,t,{value:o.f(t)})}},"8a37":function(t,e,n){t.exports=n.p+"img/plus.52ed82b6.svg"},9412:function(t,e,n){t.exports=n.p+"img/arrow-left-circle.d7056b61.svg"},"9af2":function(t,e,n){t.exports=n.p+"img/arrow-right-circle.e023df2b.svg"},"9b19":function(t,e,n){t.exports=n.p+"img/logo.c8a1e198.svg"},a0d5:function(t,e,n){t.exports=n.p+"img/dettecarbone.0b15b79b.png"},a32c:function(t,e,n){t.exports=n.p+"img/factory.e42c363b.svg"},a434e:function(t,e,n){t.exports=n.p+"img/question-circle.8c6f9b66.svg"},a46a:function(t,e,n){t.exports=n.p+"img/chevron-left-arrow.7b9263ee.svg"},a4d3:function(t,e,n){"use strict";var i=n("23e7"),r=n("da84"),o=n("d066"),s=n("2ba4"),a=n("c65b"),c=n("e330"),u=n("c430"),d=n("83ab"),l=n("4930"),f=n("d039"),p=n("1a2d"),g=n("e8b5"),v=n("1626"),h=n("861d"),m=n("3a9b"),b=n("d9b5"),y=n("825a"),x=n("7b0b"),w=n("fc6a"),_=n("a04b"),S=n("577e"),E=n("5c6c"),D=n("7c73"),$=n("df75"),k=n("241c"),O=n("057f"),B=n("7418"),C=n("06cf"),j=n("9bf2"),M=n("37e8"),I=n("d1e7"),N=n("f36a"),P=n("6eeb"),V=n("5692"),T=n("f772"),q=n("d012"),L=n("90e3"),A=n("b622"),F=n("e538"),J=n("746f"),z=n("d44e"),W=n("69f3"),R=n("b727").forEach,U=T("hidden"),H="Symbol",Q="prototype",X=A("toPrimitive"),Y=W.set,G=W.getterFor(H),K=Object[Q],Z=r.Symbol,tt=Z&&Z[Q],et=r.TypeError,nt=r.QObject,it=o("JSON","stringify"),rt=C.f,ot=j.f,st=O.f,at=I.f,ct=c([].push),ut=V("symbols"),dt=V("op-symbols"),lt=V("string-to-symbol-registry"),ft=V("symbol-to-string-registry"),pt=V("wks"),gt=!nt||!nt[Q]||!nt[Q].findChild,vt=d&&f((function(){return 7!=D(ot({},"a",{get:function(){return ot(this,"a",{value:7}).a}})).a}))?function(t,e,n){var i=rt(K,e);i&&delete K[e],ot(t,e,n),i&&t!==K&&ot(K,e,i)}:ot,ht=function(t,e){var n=ut[t]=D(tt);return Y(n,{type:H,tag:t,description:e}),d||(n.description=e),n},mt=function(t,e,n){t===K&&mt(dt,e,n),y(t);var i=_(e);return y(n),p(ut,i)?(n.enumerable?(p(t,U)&&t[U][i]&&(t[U][i]=!1),n=D(n,{enumerable:E(0,!1)})):(p(t,U)||ot(t,U,E(1,{})),t[U][i]=!0),vt(t,i,n)):ot(t,i,n)},bt=function(t,e){y(t);var n=w(e),i=$(n).concat(St(n));return R(i,(function(e){d&&!a(xt,n,e)||mt(t,e,n[e])})),t},yt=function(t,e){return void 0===e?D(t):bt(D(t),e)},xt=function(t){var e=_(t),n=a(at,this,e);return!(this===K&&p(ut,e)&&!p(dt,e))&&(!(n||!p(this,e)||!p(ut,e)||p(this,U)&&this[U][e])||n)},wt=function(t,e){var n=w(t),i=_(e);if(n!==K||!p(ut,i)||p(dt,i)){var r=rt(n,i);return!r||!p(ut,i)||p(n,U)&&n[U][i]||(r.enumerable=!0),r}},_t=function(t){var e=st(w(t)),n=[];return R(e,(function(t){p(ut,t)||p(q,t)||ct(n,t)})),n},St=function(t){var e=t===K,n=st(e?dt:w(t)),i=[];return R(n,(function(t){!p(ut,t)||e&&!p(K,t)||ct(i,ut[t])})),i};if(l||(Z=function(){if(m(tt,this))throw et("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?S(arguments[0]):void 0,e=L(t),n=function(t){this===K&&a(n,dt,t),p(this,U)&&p(this[U],e)&&(this[U][e]=!1),vt(this,e,E(1,t))};return d&&gt&&vt(K,e,{configurable:!0,set:n}),ht(e,t)},tt=Z[Q],P(tt,"toString",(function(){return G(this).tag})),P(Z,"withoutSetter",(function(t){return ht(L(t),t)})),I.f=xt,j.f=mt,M.f=bt,C.f=wt,k.f=O.f=_t,B.f=St,F.f=function(t){return ht(A(t),t)},d&&(ot(tt,"description",{configurable:!0,get:function(){return G(this).description}}),u||P(K,"propertyIsEnumerable",xt,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:Z}),R($(pt),(function(t){J(t)})),i({target:H,stat:!0,forced:!l},{for:function(t){var e=S(t);if(p(lt,e))return lt[e];var n=Z(e);return lt[e]=n,ft[n]=e,n},keyFor:function(t){if(!b(t))throw et(t+" is not a symbol");if(p(ft,t))return ft[t]},useSetter:function(){gt=!0},useSimple:function(){gt=!1}}),i({target:"Object",stat:!0,forced:!l,sham:!d},{create:yt,defineProperty:mt,defineProperties:bt,getOwnPropertyDescriptor:wt}),i({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:_t,getOwnPropertySymbols:St}),i({target:"Object",stat:!0,forced:f((function(){B.f(1)}))},{getOwnPropertySymbols:function(t){return B.f(x(t))}}),it){var Et=!l||f((function(){var t=Z();return"[null]"!=it([t])||"{}"!=it({a:t})||"{}"!=it(Object(t))}));i({target:"JSON",stat:!0,forced:Et},{stringify:function(t,e,n){var i=N(arguments),r=e;if((h(e)||void 0!==t)&&!b(t))return g(e)||(e=function(t,e){if(v(r)&&(e=a(r,this,t,e)),!b(e))return e}),i[1]=e,s(it,null,i)}})}if(!tt[X]){var Dt=tt.valueOf;P(tt,X,(function(t){return a(Dt,this)}))}z(Z,H),q[U]=!0},af8f:function(t,e,n){t.exports=n.p+"img/caret-right.6d16991c.svg"},b83f:function(t,e,n){t.exports=n.p+"img/dettecarbonesobriete.96de3856.png"},ba30:function(t,e,n){},be71:function(t,e,n){t.exports=n.p+"img/plus-circle.da5b7948.svg"},c6dd:function(t,e){e.setTextDevice=function(t,e){switch(t){case"smartphone":return"L'écran de mon <strong> smartphone </strong> est allumé pendant <strong style='color: #2852f9;'>"+e+"h</strong> dans une journée";case"laptop":return"J'utilise mon <strong> laptop </strong> pendant <strong style='color: #2852f9;'>"+e+"h</strong> dans une journée";case"tele":return"Ma <strong> télé </strong> est allumée pendant <strong style='color: #2852f9;'>"+e+"h</strong> dans une journée";case"ordinateurfixe":return"J'utilise mon <strong> ordinateur fixe </strong> pendant <strong style='color: #2852f9;'>"+e+"h</strong> dans une journée";default:return"Appareil non reconnu"}}},c7e3:function(t,e,n){"use strict";
/*!
 * vue-range-slider v0.6.0
 * https://github.com/ktsn/vue-range-slider
 *
 * @license
 * Copyright (c) 2016-2018 katashin
 * Released under the MIT license
 * https://github.com/ktsn/vue-range-slider/blob/master/LICENSE
 */var i={created:function(){"undefined"!==typeof document&&s(this,(function(t,e){a(document,t,e)}))},beforeDestroy:function(){"undefined"!==typeof document&&s(this,(function(t,e){c(document,t,e)}))}},r="undefined"!==typeof window,o=r&&function(){var t=!1;try{var e={get:function(){t=!0}},n=Object.defineProperty({},"passive",e);window.addEventListener("test",null,n),window.removeEventListener("test",null,n)}catch(i){t=!1}return t}();function s(t,e){var n=t.$options.events;Object.keys(n).forEach((function(i){e(i,(function(e){return n[i].call(t,e)}))}))}function a(t,e,n){var i=o?{passive:!1}:void 0;t.addEventListener(e,n,i)}function c(t,e,n){var i=o?{passive:!1}:void 0;t.removeEventListener(e,n,i)}function u(t,e){var n=e.getBoundingClientRect();return{left:t.clientX-n.left,top:t.clientY-n.top}}function d(t,e,n,i){if(t<=e)return e;var r=Math.floor((n-e)/i)*i+e;if(t>=r)return r;var o=(t-e)/i,s=Math.floor(o),a=o-s;return 0===a?t:a<.5?i*s+e:i*(s+1)+e}var l={mixins:[i],props:{disabled:Boolean},data:function(){return{isDrag:!1}},events:{mousedown:function(t){return this.dragStart(t,this.offsetByMouse)},mousemove:function(t){return this.dragMove(t,this.offsetByMouse)},mouseup:function(t){return this.dragEnd(t,this.offsetByMouse)},touchstart:function(t){return this.dragStart(t,this.offsetByTouch)},touchmove:function(t){return this.dragMove(t,this.offsetByTouch)},touchend:function(t){return this.dragEnd(t,this.offsetByTouch)},touchcancel:function(t){return this.dragEnd(t,this.offsetByTouch)}},methods:{isInTarget:function(t){return!!t&&(t===this.$el||this.isInTarget(t.parentElement))},offsetByMouse:function(t){return u(t,this.$el)},offsetByTouch:function(t){var e=0===t.touches.length?t.changedTouches[0]:t.touches[0];return u(e,this.$el)},dragStart:function(t,e){this.disabled||void 0!==t.button&&0!==t.button||!this.isInTarget(t.target)||(t.preventDefault(),this.isDrag=!0,this.$emit("dragstart",t,e(t),this.$el))},dragMove:function(t,e){this.isDrag&&(t.preventDefault(),this.$emit("drag",t,e(t),this.$el))},dragEnd:function(t,e){this.isDrag&&(t.preventDefault(),this.isDrag=!1,this.$emit("dragend",t,e(t),this.$el))}},render:function(){return this.$slots.default&&this.$slots.default[0]}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"range-slider",class:{disabled:t.disabled}},[n("drag-helper",{attrs:{disabled:t.disabled},on:{dragstart:t.dragStart,drag:t.drag,dragend:t.dragEnd}},[n("span",{ref:"inner",staticClass:"range-slider-inner"},[n("input",{staticClass:"range-slider-hidden",attrs:{type:"text",name:t.name,disabled:t.disabled},domProps:{value:t.actualValue}}),t._v(" "),n("span",{staticClass:"range-slider-rail"}),t._v(" "),n("span",{staticClass:"range-slider-fill",style:{width:t.valuePercent+"%"}}),t._v(" "),n("span",{ref:"knob",staticClass:"range-slider-knob",style:{left:t.valuePercent+"%"}},[t._t("knob")],2)])])],1)},staticRenderFns:[],props:{name:String,value:[String,Number],disabled:{type:Boolean,default:!1},min:{type:[String,Number],default:0},max:{type:[String,Number],default:100},step:{type:[String,Number],default:1}},data:function(){return{actualValue:null,dragStartValue:null}},created:function(){var t=this._min,e=this._max,n=Number(this.value);(null==this.value||isNaN(n))&&(n=t>e?t:(t+e)/2),this.actualValue=this.round(n)},computed:{_min:function(){return Number(this.min)},_max:function(){return Number(this.max)},_step:function(){return Number(this.step)},valuePercent:function(){return(this.actualValue-this._min)/(this._max-this._min)*100}},watch:{value:function(t){var e=Number(t);null==t||isNaN(e)||(this.actualValue=this.round(e))},min:function(){this.actualValue=this.round(this.actualValue)},max:function(){this.actualValue=this.round(this.actualValue)}},methods:{dragStart:function(t,e){this.dragStartValue=this.actualValue,t.target!==this.$refs.knob&&this.drag(t,e)},drag:function(t,e){var n=this.$refs.inner.offsetWidth;this.actualValue=this.round(this.valueFromBounds(e.left,n)),this.emitInput(this.actualValue)},dragEnd:function(t,e){var n=this.$refs.inner.offsetWidth;this.actualValue=this.round(this.valueFromBounds(e.left,n)),this.dragStartValue!==this.actualValue&&this.emitChange(this.actualValue)},emitInput:function(t){this.$emit("input",t)},emitChange:function(t){this.$emit("change",t)},valueFromBounds:function(t,e){return t/e*(this._max-this._min)+this._min},round:function(t){return d(t,this._min,this._max,this._step)}},components:{DragHelper:l}};t.exports=f},c97c:function(t,e,n){t.exports=n.p+"img/database.fbfb8731.svg"},cfe4:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"wrapper"}},[i("div",{staticStyle:{width:"80%",display:"flex","flex-direction":"row","justify-content":"space-between"},attrs:{id:"title-and-question"}},[i("h3",[t._v("Mes appareils")]),i("div",{staticStyle:{width:"20px"},attrs:{id:"some-space"}}),i("Popup",{attrs:{textbutton:"?",content:"Ajoutez les appareils numériques que vous utilisez dans une journée type et renseignez leur durée d'utilisation"}})],1),i("div",{attrs:{id:"devices-column"}},t._l(t.devices,(function(t){return i("div",{key:t.id},[i("DeviceDisplayMobile",{attrs:{id:t.id}})],1)})),0),i("div",{attrs:{id:"buttons"}},[i("b-dropdown",{staticStyle:{margin:"5px"},attrs:{id:"dropdown-device",size:"lg",variant:"white",pill:"","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[i("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center",height:"60px",width:"60px","background-color":"#0033ff","border-radius":"50%","z-index":"98","border-width":"1px","border-color":"#0029cc"},attrs:{id:"round-button"}},[i("img",{attrs:{src:n("8a37"),alt:"plus icon"}})])]},proxy:!0}])},[i("b-dropdown-item",{on:{click:function(e){return t.addDevice("smartphone")}}},[t._v("Smartphone")]),i("b-dropdown-item",{on:{click:function(e){return t.addDevice("laptop")}}},[t._v("Laptop")]),i("b-dropdown-item",{on:{click:function(e){return t.addDevice("tele")}}},[t._v("Télé")]),i("b-dropdown-item",{on:{click:function(e){return t.addDevice("ordinateurfixe")}}},[t._v("Ordinateur fixe")])],1)],1)])},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"displayer",shadow:""}},[n("div",{staticStyle:{display:"flex","flex-direction":"row"},attrs:{id:"displat-txt-label"}},[n("div",{attrs:{id:t.idtxtlabel}}),n("div",{staticStyle:{width:"2px"}})]),n("range-slider",{staticClass:"slider",attrs:{min:"0",max:"24",step:"1"},model:{value:t.temps,callback:function(e){t.temps=e},expression:"temps"}}),n("div",{staticStyle:{"margin-top":"10px"},attrs:{id:"display-dette-ddv"}},[n("h6",[t._v("Je possède cet appareil depuis "),n("strong",[t._v(t._s(t.device.dette_fabrication)+" an(s)")])]),n("div",{staticClass:"form"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.device.dette_fabrication,expression:"device.dette_fabrication",modifiers:{number:!0}}],staticClass:"form-input",attrs:{id:"dette-ddv-v2",type:"”number”",autocomplete:"off",placeholder:" "},domProps:{value:t.device.dette_fabrication},on:{input:function(e){e.target.composing||t.$set(t.device,"dette_fabrication",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),n("div",{staticClass:"d-button",staticStyle:{width:"100%"}},[n("div",{staticClass:"d-button-container",staticStyle:{display:"flex","justify-content":"right"}},[n("b-button",{attrs:{id:"b-delete",pill:"",variant:"outline-danger"},on:{click:t.onDelete}},[t._v("Supprimer")])],1)])],1)},s=[],a=(n("a9e3"),n("a4d3"),n("e01a"),n("d3b7"),n("25f0"),n("c7e3")),c=n.n(a),u=(n("2760"),n("c6dd")),d={name:"DeviceDisplay",props:{id:Number},components:{RangeSlider:c.a},data:function(){return{device:null,temps:0,description:"",idtxtlabel:""}},methods:{onDelete:function(){this.$store.commit("DELETE_DEVICE",this.id)}},beforeMount:function(){this.device=this.$store.getters.getDevice(this.id),this.idtxtlabel="txt-label-"+this.device.id},mounted:function(){this.$store.getters.getIsMobile&&(document.getElementById("displayer").style.margin="5px"),this.device=this.$store.getters.getDevice(this.id),this.temps=this.device.temps[0],this.description=Object(u["setTextDevice"])(this.device.label,this.temps);var t=document.createElement("h6");t.id="description-"+this.id.toString(),t.style.marginBottom="0px",t.innerHTML=this.description,t.style.textAlign="left",document.getElementById(this.idtxtlabel).appendChild(t),this.isfirefox=this.$store.getters.getIsFirefox},updated:function(){this.device.temps[0]=this.temps,this.$store.commit("SET_VALUE_DEVICE",this.device);var t=document.getElementById("description-"+this.id.toString());t.remove(),this.description=Object(u["setTextDevice"])(this.device.label,this.temps);var e=document.createElement("h6");e.id="description-"+this.id.toString(),e.style.marginBottom="0px",e.innerHTML=this.description,e.style.textAlign="left",document.getElementById(this.idtxtlabel).appendChild(e)}},l=d,f=(n("3af4"),n("2877")),p=Object(f["a"])(l,o,s,!1,null,"55a06502",null),g=p.exports,v=n("3905"),h={name:"WrapperDevice",components:{DeviceDisplayMobile:g,Popup:v["a"]},data:function(){return{devices:this.$store.getters.getDevices}},methods:{addDevice:function(t){this.$store.commit("CREATE_DEVICE",t)}},mounted:function(){}},m=h,b=(n("31be"),Object(f["a"])(m,i,r,!1,null,"3a9e46fc",null));e["default"]=b.exports},d04b:function(t,e,n){t.exports=n.p+"img/caret-left.855ea103.svg"},e01a:function(t,e,n){"use strict";var i=n("23e7"),r=n("83ab"),o=n("da84"),s=n("e330"),a=n("1a2d"),c=n("1626"),u=n("3a9b"),d=n("577e"),l=n("9bf2").f,f=n("e893"),p=o.Symbol,g=p&&p.prototype;if(r&&c(p)&&(!("description"in g)||void 0!==p().description)){var v={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:d(arguments[0]),e=u(g,this)?new p(t):void 0===t?p():p(t);return""===t&&(v[e]=!0),e};f(h,p),h.prototype=g,g.constructor=h;var m="Symbol(test)"==String(p("test")),b=s(g.toString),y=s(g.valueOf),x=/^Symbol\((.*)\)[^)]+$/,w=s("".replace),_=s("".slice);l(g,"description",{configurable:!0,get:function(){var t=y(this),e=b(t);if(a(v,t))return"";var n=m?_(e,7,-1):w(e,x,"$1");return""===n?void 0:n}}),i({global:!0,forced:!0},{Symbol:h})}},e538:function(t,e,n){var i=n("b622");e.f=i},ef01:function(t,e,n){t.exports=n.p+"img/formuleconsodevice.99237eb9.png"},f590:function(t,e,n){t.exports=n.p+"img/right-arrow.7941f113.svg"},f7c0:function(t,e,n){t.exports=n.p+"img/devices.b00224ad.svg"},fede:function(t,e,n){t.exports=n.p+"img/ec_et_budget_carbone.4c31651a.png"}}]);
//# sourceMappingURL=chunk-61297fe8.160ccd06.js.map