(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b5b94a3"],{"050a":function(t,e,n){t.exports=n.p+"img/caret-down.844cddbf.svg"},"057f":function(t,e,n){var r=n("c6b6"),i=n("fc6a"),o=n("241c").f,a=n("4dae"),s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return o(t)}catch(e){return a(s)}};t.exports.f=function(t){return s&&"Window"==r(t)?u(t):o(i(t))}},"1e33":function(t,e,n){t.exports=n.p+"img/caret-up.bd757d4c.svg"},2760:function(t,e,n){},"3d87":function(t,e,n){var r=n("4930");t.exports=r&&!!Symbol["for"]&&!!Symbol.keyFor},"428f":function(t,e,n){var r=n("da84");t.exports=r},"4ce5":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"popup-wrapper"}},[n("div",{staticClass:"plus-button",attrs:{id:"plus-button-device"},on:{click:t.onClickPopup}},[t._v(" + ")]),n("div",{staticClass:"modal",attrs:{id:"myModal-plus"}},[n("div",{staticClass:"modal-content",staticStyle:{width:"50%"},attrs:{id:"modal-content-plus"}},[n("div",{staticClass:"close",staticStyle:{display:"flex","justify-content":"right","text-align":"left"}},[n("span",{staticClass:"close",on:{click:t.closePopup}},[t._v("×")])]),n("div",{staticClass:"device-chooser",on:{click:function(e){return t.addDevice("smartphone")}}},[n("h6",{staticClass:"device-chooser-txt"},[t._v("Smartphone 📱")])]),n("div",{staticClass:"device-chooser",on:{click:function(e){return t.addDevice("laptop")}}},[n("h6",{staticClass:"device-chooser-txt"},[t._v("Laptop 💻")])]),n("div",{staticClass:"device-chooser",on:{click:function(e){return t.addDevice("tele")}}},[n("h6",{staticClass:"device-chooser-txt"},[t._v("Télé 📺")])]),n("div",{staticClass:"device-chooser",on:{click:function(e){return t.addDevice("ordinateurfixe")}}},[n("h6",{staticClass:"device-chooser-txt"},[t._v("Ordinateur fixe 🖥")])]),n("div",{staticClass:"device-chooser",on:{click:function(e){return t.addDevice("tablette")}}},[t._m(0)])])])])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h6",{staticClass:"device-chooser-txt"},[t._v("Tablette "),r("img",{attrs:{alt:"icon tablette",src:n("e2b2"),width:"15px",height:"auto"}})])}],o={name:"Popup",data:function(){return{isMobile:!1}},methods:{onClickPopup:function(){1==this.isMobile?(document.getElementById("myModal-plus").style.display="flex",document.getElementById("myModal-plus").style.justifyContent="center"):document.getElementById("myModal-plus").style.display="block"},closePopup:function(){document.getElementById("myModal-plus").style.display="none"},addDevice:function(t){this.$store.commit("CREATE_DEVICE",t),this.closePopup()}},mounted:function(){this.isMobile=this.$store.getters.getIsMobile,1==this.isMobile&&(document.getElementById("modal-content-plus").style.margin="5px",document.getElementById("modal-content-plus").style.width="90%",document.getElementById("plus-button-device").style.backgroundColor="#B2B2B2")}},a=o,s=(n("6abb"),n("2877")),u=Object(s["a"])(a,r,i,!1,null,"54c6ec6c",null);e["a"]=u.exports},"4dae":function(t,e,n){var r=n("da84"),i=n("23cb"),o=n("07fa"),a=n("8418"),s=r.Array,u=Math.max;t.exports=function(t,e,n){for(var r=o(t),c=i(e,r),l=i(void 0===n?r:n,r),d=s(u(l-c,0)),f=0;c<l;c++,f++)a(d,f,t[c]);return d.length=f,d}},"57b9":function(t,e,n){var r=n("c65b"),i=n("d066"),o=n("b622"),a=n("cb2d");t.exports=function(){var t=i("Symbol"),e=t&&t.prototype,n=e&&e.valueOf,s=o("toPrimitive");e&&!e[s]&&a(e,s,(function(t){return r(n,this)}),{arity:1})}},"5a47":function(t,e,n){var r=n("23e7"),i=n("4930"),o=n("d039"),a=n("7418"),s=n("7b0b"),u=!i||o((function(){a.f(1)}));r({target:"Object",stat:!0,forced:u},{getOwnPropertySymbols:function(t){var e=a.f;return e?e(s(t)):[]}})},"6abb":function(t,e,n){"use strict";n("8a45")},"746f":function(t,e,n){var r=n("428f"),i=n("1a2d"),o=n("e538"),a=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},"8a45":function(t,e,n){},a4d3:function(t,e,n){n("d9f5"),n("b4f8"),n("c513"),n("e9c4"),n("5a47")},b4f8:function(t,e,n){var r=n("23e7"),i=n("d066"),o=n("1a2d"),a=n("577e"),s=n("5692"),u=n("3d87"),c=s("string-to-symbol-registry"),l=s("symbol-to-string-registry");r({target:"Symbol",stat:!0,forced:!u},{for:function(t){var e=a(t);if(o(c,e))return c[e];var n=i("Symbol")(e);return c[e]=n,l[n]=e,n}})},c513:function(t,e,n){var r=n("23e7"),i=n("1a2d"),o=n("d9b5"),a=n("0d51"),s=n("5692"),u=n("3d87"),c=s("symbol-to-string-registry");r({target:"Symbol",stat:!0,forced:!u},{keyFor:function(t){if(!o(t))throw TypeError(a(t)+" is not a symbol");if(i(c,t))return c[t]}})},c6dd:function(t,e){e.setTextDevice=function(t,e){switch(t){case"smartphone":return"L'écran de mon <strong> smartphone </strong>📱 est allumé pendant <strong style='color: #2852f9;'>"+e+"h</strong> dans une journée";case"laptop":return"J'utilise mon <strong> laptop </strong>💻 pendant <strong style='color: #2852f9;'>"+e+"h</strong> dans une journée";case"tele":return"Ma <strong> télé </strong>📺 est allumée pendant <strong style='color: #2852f9;'>"+e+"h</strong> dans une journée";case"ordinateurfixe":return"J'utilise mon <strong> ordinateur fixe </strong>🖥 pendant <strong style='color: #2852f9;'>"+e+"h</strong> dans une journée";case"tablette":return"L'écran de ma <strong> tablette </strong> est allumé pendant <strong style='color: #2852f9;'>"+e+"h</strong> dans une journée";default:return"Appareil non reconnu"}}},c7e3:function(t,e,n){"use strict";
/*!
 * vue-range-slider v0.6.0
 * https://github.com/ktsn/vue-range-slider
 *
 * @license
 * Copyright (c) 2016-2018 katashin
 * Released under the MIT license
 * https://github.com/ktsn/vue-range-slider/blob/master/LICENSE
 */var r={created:function(){"undefined"!==typeof document&&a(this,(function(t,e){s(document,t,e)}))},beforeDestroy:function(){"undefined"!==typeof document&&a(this,(function(t,e){u(document,t,e)}))}},i="undefined"!==typeof window,o=i&&function(){var t=!1;try{var e={get:function(){t=!0}},n=Object.defineProperty({},"passive",e);window.addEventListener("test",null,n),window.removeEventListener("test",null,n)}catch(r){t=!1}return t}();function a(t,e){var n=t.$options.events;Object.keys(n).forEach((function(r){e(r,(function(e){return n[r].call(t,e)}))}))}function s(t,e,n){var r=o?{passive:!1}:void 0;t.addEventListener(e,n,r)}function u(t,e,n){var r=o?{passive:!1}:void 0;t.removeEventListener(e,n,r)}function c(t,e){var n=e.getBoundingClientRect();return{left:t.clientX-n.left,top:t.clientY-n.top}}function l(t,e,n,r){if(t<=e)return e;var i=Math.floor((n-e)/r)*r+e;if(t>=i)return i;var o=(t-e)/r,a=Math.floor(o),s=o-a;return 0===s?t:s<.5?r*a+e:r*(a+1)+e}var d={mixins:[r],props:{disabled:Boolean},data:function(){return{isDrag:!1}},events:{mousedown:function(t){return this.dragStart(t,this.offsetByMouse)},mousemove:function(t){return this.dragMove(t,this.offsetByMouse)},mouseup:function(t){return this.dragEnd(t,this.offsetByMouse)},touchstart:function(t){return this.dragStart(t,this.offsetByTouch)},touchmove:function(t){return this.dragMove(t,this.offsetByTouch)},touchend:function(t){return this.dragEnd(t,this.offsetByTouch)},touchcancel:function(t){return this.dragEnd(t,this.offsetByTouch)}},methods:{isInTarget:function(t){return!!t&&(t===this.$el||this.isInTarget(t.parentElement))},offsetByMouse:function(t){return c(t,this.$el)},offsetByTouch:function(t){var e=0===t.touches.length?t.changedTouches[0]:t.touches[0];return c(e,this.$el)},dragStart:function(t,e){this.disabled||void 0!==t.button&&0!==t.button||!this.isInTarget(t.target)||(t.preventDefault(),this.isDrag=!0,this.$emit("dragstart",t,e(t),this.$el))},dragMove:function(t,e){this.isDrag&&(t.preventDefault(),this.$emit("drag",t,e(t),this.$el))},dragEnd:function(t,e){this.isDrag&&(t.preventDefault(),this.isDrag=!1,this.$emit("dragend",t,e(t),this.$el))}},render:function(){return this.$slots.default&&this.$slots.default[0]}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"range-slider",class:{disabled:t.disabled}},[n("drag-helper",{attrs:{disabled:t.disabled},on:{dragstart:t.dragStart,drag:t.drag,dragend:t.dragEnd}},[n("span",{ref:"inner",staticClass:"range-slider-inner"},[n("input",{staticClass:"range-slider-hidden",attrs:{type:"text",name:t.name,disabled:t.disabled},domProps:{value:t.actualValue}}),t._v(" "),n("span",{staticClass:"range-slider-rail"}),t._v(" "),n("span",{staticClass:"range-slider-fill",style:{width:t.valuePercent+"%"}}),t._v(" "),n("span",{ref:"knob",staticClass:"range-slider-knob",style:{left:t.valuePercent+"%"}},[t._t("knob")],2)])])],1)},staticRenderFns:[],props:{name:String,value:[String,Number],disabled:{type:Boolean,default:!1},min:{type:[String,Number],default:0},max:{type:[String,Number],default:100},step:{type:[String,Number],default:1}},data:function(){return{actualValue:null,dragStartValue:null}},created:function(){var t=this._min,e=this._max,n=Number(this.value);(null==this.value||isNaN(n))&&(n=t>e?t:(t+e)/2),this.actualValue=this.round(n)},computed:{_min:function(){return Number(this.min)},_max:function(){return Number(this.max)},_step:function(){return Number(this.step)},valuePercent:function(){return(this.actualValue-this._min)/(this._max-this._min)*100}},watch:{value:function(t){var e=Number(t);null==t||isNaN(e)||(this.actualValue=this.round(e))},min:function(){this.actualValue=this.round(this.actualValue)},max:function(){this.actualValue=this.round(this.actualValue)}},methods:{dragStart:function(t,e){this.dragStartValue=this.actualValue,t.target!==this.$refs.knob&&this.drag(t,e)},drag:function(t,e){var n=this.$refs.inner.offsetWidth;this.actualValue=this.round(this.valueFromBounds(e.left,n)),this.emitInput(this.actualValue)},dragEnd:function(t,e){var n=this.$refs.inner.offsetWidth;this.actualValue=this.round(this.valueFromBounds(e.left,n)),this.dragStartValue!==this.actualValue&&this.emitChange(this.actualValue)},emitInput:function(t){this.$emit("input",t)},emitChange:function(t){this.$emit("change",t)},valueFromBounds:function(t,e){return t/e*(this._max-this._min)+this._min},round:function(t){return l(t,this._min,this._max,this._step)}},components:{DragHelper:d}};t.exports=f},d9f5:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("c65b"),a=n("e330"),s=n("c430"),u=n("83ab"),c=n("4930"),l=n("d039"),d=n("1a2d"),f=n("3a9b"),h=n("825a"),p=n("fc6a"),v=n("a04b"),m=n("577e"),g=n("5c6c"),b=n("7c73"),y=n("df75"),S=n("241c"),w=n("057f"),x=n("7418"),C=n("06cf"),_=n("9bf2"),E=n("37e8"),B=n("d1e7"),$=n("cb2d"),D=n("5692"),k=n("f772"),M=n("d012"),O=n("90e3"),j=n("b622"),P=n("e538"),V=n("746f"),N=n("57b9"),F=n("d44e"),I=n("69f3"),T=n("b727").forEach,L=k("hidden"),J="Symbol",A="prototype",R=I.set,W=I.getterFor(J),H=Object[A],Q=i.Symbol,X=Q&&Q[A],Y=i.TypeError,q=i.QObject,z=C.f,G=_.f,K=w.f,U=B.f,Z=a([].push),tt=D("symbols"),et=D("op-symbols"),nt=D("wks"),rt=!q||!q[A]||!q[A].findChild,it=u&&l((function(){return 7!=b(G({},"a",{get:function(){return G(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=z(H,e);r&&delete H[e],G(t,e,n),r&&t!==H&&G(H,e,r)}:G,ot=function(t,e){var n=tt[t]=b(X);return R(n,{type:J,tag:t,description:e}),u||(n.description=e),n},at=function(t,e,n){t===H&&at(et,e,n),h(t);var r=v(e);return h(n),d(tt,r)?(n.enumerable?(d(t,L)&&t[L][r]&&(t[L][r]=!1),n=b(n,{enumerable:g(0,!1)})):(d(t,L)||G(t,L,g(1,{})),t[L][r]=!0),it(t,r,n)):G(t,r,n)},st=function(t,e){h(t);var n=p(e),r=y(n).concat(ft(n));return T(r,(function(e){u&&!o(ct,n,e)||at(t,e,n[e])})),t},ut=function(t,e){return void 0===e?b(t):st(b(t),e)},ct=function(t){var e=v(t),n=o(U,this,e);return!(this===H&&d(tt,e)&&!d(et,e))&&(!(n||!d(this,e)||!d(tt,e)||d(this,L)&&this[L][e])||n)},lt=function(t,e){var n=p(t),r=v(e);if(n!==H||!d(tt,r)||d(et,r)){var i=z(n,r);return!i||!d(tt,r)||d(n,L)&&n[L][r]||(i.enumerable=!0),i}},dt=function(t){var e=K(p(t)),n=[];return T(e,(function(t){d(tt,t)||d(M,t)||Z(n,t)})),n},ft=function(t){var e=t===H,n=K(e?et:p(t)),r=[];return T(n,(function(t){!d(tt,t)||e&&!d(H,t)||Z(r,tt[t])})),r};c||(Q=function(){if(f(X,this))throw Y("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?m(arguments[0]):void 0,e=O(t),n=function(t){this===H&&o(n,et,t),d(this,L)&&d(this[L],e)&&(this[L][e]=!1),it(this,e,g(1,t))};return u&&rt&&it(H,e,{configurable:!0,set:n}),ot(e,t)},X=Q[A],$(X,"toString",(function(){return W(this).tag})),$(Q,"withoutSetter",(function(t){return ot(O(t),t)})),B.f=ct,_.f=at,E.f=st,C.f=lt,S.f=w.f=dt,x.f=ft,P.f=function(t){return ot(j(t),t)},u&&(G(X,"description",{configurable:!0,get:function(){return W(this).description}}),s||$(H,"propertyIsEnumerable",ct,{unsafe:!0}))),r({global:!0,constructor:!0,wrap:!0,forced:!c,sham:!c},{Symbol:Q}),T(y(nt),(function(t){V(t)})),r({target:J,stat:!0,forced:!c},{useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!u},{create:ut,defineProperty:at,defineProperties:st,getOwnPropertyDescriptor:lt}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:dt}),N(),F(Q,J),M[L]=!0},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),o=n("da84"),a=n("e330"),s=n("1a2d"),u=n("1626"),c=n("3a9b"),l=n("577e"),d=n("9bf2").f,f=n("e893"),h=o.Symbol,p=h&&h.prototype;if(i&&u(h)&&(!("description"in p)||void 0!==h().description)){var v={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),e=c(p,this)?new h(t):void 0===t?h():h(t);return""===t&&(v[e]=!0),e};f(m,h),m.prototype=p,p.constructor=m;var g="Symbol(test)"==String(h("test")),b=a(p.toString),y=a(p.valueOf),S=/^Symbol\((.*)\)[^)]+$/,w=a("".replace),x=a("".slice);d(p,"description",{configurable:!0,get:function(){var t=y(this),e=b(t);if(s(v,t))return"";var n=g?x(e,7,-1):w(e,S,"$1");return""===n?void 0:n}}),r({global:!0,constructor:!0,forced:!0},{Symbol:m})}},e2b2:function(t,e,n){t.exports=n.p+"img/tablet.b282a706.png"},e538:function(t,e,n){var r=n("b622");e.f=r},e9c4:function(t,e,n){var r=n("23e7"),i=n("d066"),o=n("2ba4"),a=n("c65b"),s=n("e330"),u=n("d039"),c=n("e8b5"),l=n("1626"),d=n("861d"),f=n("d9b5"),h=n("f36a"),p=n("4930"),v=i("JSON","stringify"),m=s(/./.exec),g=s("".charAt),b=s("".charCodeAt),y=s("".replace),S=s(1..toString),w=/[\uD800-\uDFFF]/g,x=/^[\uD800-\uDBFF]$/,C=/^[\uDC00-\uDFFF]$/,_=!p||u((function(){var t=i("Symbol")();return"[null]"!=v([t])||"{}"!=v({a:t})||"{}"!=v(Object(t))})),E=u((function(){return'"\\udf06\\ud834"'!==v("\udf06\ud834")||'"\\udead"'!==v("\udead")})),B=function(t,e){var n=h(arguments),r=e;if((d(e)||void 0!==t)&&!f(t))return c(e)||(e=function(t,e){if(l(r)&&(e=a(r,this,t,e)),!f(e))return e}),n[1]=e,o(v,null,n)},$=function(t,e,n){var r=g(n,e-1),i=g(n,e+1);return m(x,t)&&!m(C,i)||m(C,t)&&!m(x,r)?"\\u"+S(b(t,0),16):t};v&&r({target:"JSON",stat:!0,arity:3,forced:_||E},{stringify:function(t,e,n){var r=h(arguments),i=o(_?B:v,null,r);return E&&"string"==typeof i?y(i,w,$):i}})}}]);
//# sourceMappingURL=chunk-0b5b94a3.36fd8a39.js.map