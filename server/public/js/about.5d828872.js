(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"13b3":function(t,e,n){},"1e6c":function(t,e,n){"use strict";var i=n("9d65"),s=n("4e82"),r=n("c3f0"),o=n("80d2"),a=n("58df"),c=Object(a["a"])(i["a"],Object(s["a"])("windowGroup","v-window-item","v-window"));e["a"]=c.extend().extend().extend({name:"v-window-item",directives:{Touch:r["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(o["d"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(o["d"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}})},"34c3":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"8",sm:"8",md:"8"}},[n("v-card",{staticClass:"elevation-12"},[n("v-window",[n("v-window-item",[n("v-row",{staticClass:"fill-height"},[n("v-col",{staticClass:"goldColor accent-3",attrs:{cols:"12",md:"4"}},[n("v-card-text",{staticClass:"mt-12"},[n("h1",{staticClass:"text-center display-1"},[t._v("Welcome Back !")]),n("h5",[t._v("To keep connected us please login with your personnel info")])]),n("div",{staticClass:"text-center"},[n("v-btn",{attrs:{rounded:"",dark:""},on:{click:function(e){return t.goLogin()}}},[t._v("SIGN IN")])],1)],1),n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-card-text",{staticClass:"mt-12"},[n("h1",{staticClass:"text-center display-2 textColor text--accent-3"},[t._v(" Create Account")]),n("div",{staticClass:"text-center "},[n("v-btn",{staticClass:"mx-2 facebook",attrs:{fab:"",color:"rgb(66 103 178)",href:"https://www.facebook.com/Pigmentus"}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-facebook")])],1),n("v-btn",{staticClass:"mx-2 instagram",attrs:{fab:"",color:"black",href:"https://www.instagram.com/pigmentus_pr/"}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-instagram")])],1),n("v-btn",{staticClass:"mx-2",attrs:{fab:"",color:"rgb(40,103,178)",href:"https://www.linkedin.com/in/axelcastro/"}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-linkedin")])],1)],1),n("v-form",[n("v-text-field",{attrs:{label:"Name",name:"Name","prepend-icon":"mdi-account",color:"rgb(187, 162, 87)"}}),n("v-text-field",{attrs:{label:"Last Name",name:"LastName","prepend-icon":"mdi-account",color:"rgb(187, 162, 87)"}}),n("v-text-field",{attrs:{label:"Email",name:"Email","prepend-icon":"mdi-email",color:"rgb(187, 162, 87)"}}),n("v-text-field",{attrs:{id:"Password",label:"Password",name:"Password","prepend-icon":"mdi-lock",type:"password",color:"rgb(187, 162, 87)"}}),n("v-text-field",{attrs:{id:"ConfirmPassword",label:"Confirm Password",name:"ConfirmPassword","prepend-icon":"mdi-lock",type:"password",color:"rgb(187, 162, 87)"}})],1),n("div",{staticClass:"text-center mt-3"},[n("v-btn",{attrs:{rounded:"",color:"rgb(187, 162, 87) "}},[t._v("SING UP")])],1)],1)],1)],1)],1)],1)],1)],1)],1)},s=[],r=(n("4160"),n("b0c0"),n("b64b"),n("159b"),n("a18c")),o={data:function(){return{user:{},password2:"",show1:!1,show2:!1,formHasErrors:!1,nameRules:[function(t){return!!t||"Name is required"}],lastNameRules:[function(t){return!!t||"Last Name is required"}],emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+.com+/.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return!!t||"Password is required"}],confirmPasswordRules:[function(t){return!!t||"Confirm Password is required"}]}},methods:{goLogin:function(){r["a"].push({name:"Signin"})},addUser:function(){this.user.enable=!0,console.log(this.user)},resetForm:function(){var t=this;this.errorMessages=[],this.formHasErrors=!1,Object.keys(this.form).forEach((function(e){t.$refs[e].reset()}))},submit:function(){var t=this;this.formHasErrors=!1,Object.keys(this.form).forEach((function(e){t.form[e]||(t.formHasErrors=!0),t.$refs[e].validate(!0)}))}},computed:{form:function(){return{name:this.name,lastName:this.lastName,email:this.email,password:this.password,password2:this.password2}},passwordConfirmationRule:function(){var t=this;return function(){return t.user.password1===t.user.password2||"Password must match"}}}},a=o,c=n("2877"),u=n("6544"),l=n.n(u),d=n("8336"),h=n("b0af"),f=n("99d9"),v=n("62ad"),m=n("4bd4"),w=n("132d"),p=n("0fd9"),g=n("8654"),b=n("f665"),x=n("1e6c"),C=Object(c["a"])(a,i,s,!1,null,null,null);e["default"]=C.exports;l()(C,{VBtn:d["a"],VCard:h["a"],VCardText:f["a"],VCol:v["a"],VForm:m["a"],VIcon:w["a"],VRow:p["a"],VTextField:g["a"],VWindow:b["a"],VWindowItem:x["a"]})},"4a33":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"8"}},[n("v-card",{staticClass:"elevation-12"},[n("v-window",[n("v-window-item",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-card-text",{staticClass:"mt-12"},[n("h1",{staticClass:"text-center display-2 textColor text--accent-3"},[t._v("Sign in to Pigmentus")]),n("div",{staticClass:"text-center"},[n("v-btn",{staticClass:"mx-2 facebook",attrs:{fab:"",color:"rgb(66 103 178)",href:"https://www.facebook.com/Pigmentus"}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-facebook")])],1),n("v-btn",{staticClass:"mx-2 instagram",attrs:{fab:"",color:"black",href:"https://www.instagram.com/pigmentus_pr/"}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-instagram")])],1),n("v-btn",{staticClass:"mx-2",attrs:{fab:"",color:"rgb(40,103,178)",href:"https://www.linkedin.com/in/axelcastro/"}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-linkedin")])],1)],1),n("v-form",[n("v-text-field",{attrs:{label:"Email",name:"Email","prepend-icon":"mdi-email",color:"rgb(187, 162, 87)"}}),n("v-text-field",{attrs:{id:"Password",label:"Password",name:"Password","prepend-icon":"mdi-lock",type:"password",color:"rgb(187, 162, 87)"}})],1),n("h3",{staticClass:"text-center mt-3"},[t._v("Forget your password?")])],1),n("div",{staticClass:"text-center mt-3"},[n("v-btn",{attrs:{rounded:"",color:"rgb(187, 162, 87) "}},[t._v("SING IN")])],1)],1),n("v-col",{staticClass:"goldColor accent-3",attrs:{cols:"12",md:"4"}},[n("v-card-text",{staticClass:"white--text mt-12"},[n("h1",{staticClass:"text-center display-1"},[t._v("Hello, Amigos !")]),n("h5",[t._v("Enter your personnel detail and start journey with us")])]),n("div",{staticClass:"text-center"},[n("v-btn",{attrs:{rounded:"",dark:""},on:{click:function(e){return t.goSignup()}}},[t._v("SIGN UP")])],1)],1)],1)],1)],1)],1)],1)],1)},s=[],r=n("a18c"),o={data:function(){return{step:1}},methods:{goSignup:function(){r["a"].push({name:"Signup"})}}},a=o,c=(n("7a9b"),n("2877")),u=n("6544"),l=n.n(u),d=n("8336"),h=n("b0af"),f=n("99d9"),v=n("62ad"),m=n("4bd4"),w=n("132d"),p=n("0fd9"),g=n("8654"),b=n("f665"),x=n("1e6c"),C=Object(c["a"])(a,i,s,!1,null,null,null);e["default"]=C.exports;l()(C,{VBtn:d["a"],VCard:h["a"],VCardText:f["a"],VCol:v["a"],VForm:m["a"],VIcon:w["a"],VRow:p["a"],VTextField:g["a"],VWindow:b["a"],VWindowItem:x["a"]})},"4bd4":function(t,e,n){"use strict";n("4de4"),n("7db0"),n("4160"),n("caad"),n("07ac"),n("2532"),n("159b");var i=n("5530"),s=n("58df"),r=n("7e2b"),o=n("3206");e["a"]=Object(s["a"])(r["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,n=function(t){return t.$watch("hasError",(function(n){e.$set(e.errorBag,t._uid,n)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=n(t)))})):i.valid=n(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var n=this.watchers.find((function(t){return t._uid===e._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"58c2":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center"}},[n("h1",[t._v("Categorizame este")])])},s=[],r=n("2877"),o=n("6544"),a=n.n(o),c=n("0fd9"),u={},l=Object(r["a"])(u,i,s,!1,null,null,null);e["default"]=l.exports;a()(l,{VRow:c["a"]})},6860:function(t,e,n){},"7a9b":function(t,e,n){"use strict";var i=n("6860"),s=n.n(i);s.a},afdd:function(t,e,n){"use strict";var i=n("8336");e["a"]=i["a"]},b789:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center"}},[n("h1",[t._v("Este es y que el carrito de compra.")])])},s=[],r=n("2877"),o=n("6544"),a=n.n(o),c=n("0fd9"),u={},l=Object(r["a"])(u,i,s,!1,null,null,null);e["default"]=l.exports;a()(l,{VRow:c["a"]})},c3f0:function(t,e,n){"use strict";n("4160"),n("159b");var i=n("80d2"),s=function(t){var e=t.touchstartX,n=t.touchendX,i=t.touchstartY,s=t.touchendY,r=.5,o=16;t.offsetX=n-e,t.offsetY=s-i,Math.abs(t.offsetY)<r*Math.abs(t.offsetX)&&(t.left&&n<e-o&&t.left(t),t.right&&n>e+o&&t.right(t)),Math.abs(t.offsetX)<r*Math.abs(t.offsetY)&&(t.up&&s<i-o&&t.up(t),t.down&&s>i+o&&t.down(t))};function r(t,e){var n=t.changedTouches[0];e.touchstartX=n.clientX,e.touchstartY=n.clientY,e.start&&e.start(Object.assign(t,e))}function o(t,e){var n=t.changedTouches[0];e.touchendX=n.clientX,e.touchendY=n.clientY,e.end&&e.end(Object.assign(t,e)),s(e)}function a(t,e){var n=t.changedTouches[0];e.touchmoveX=n.clientX,e.touchmoveY=n.clientY,e.move&&e.move(Object.assign(t,e))}function c(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return r(t,e)},touchend:function(t){return o(t,e)},touchmove:function(t){return a(t,e)}}}function u(t,e,n){var s=e.value,r=s.parent?t.parentElement:t,o=s.options||{passive:!0};if(r){var a=c(e.value);r._touchHandlers=Object(r._touchHandlers),r._touchHandlers[n.context._uid]=a,Object(i["o"])(a).forEach((function(t){r.addEventListener(t,a[t],o)}))}}function l(t,e,n){var s=e.value.parent?t.parentElement:t;if(s&&s._touchHandlers){var r=s._touchHandlers[n.context._uid];Object(i["o"])(r).forEach((function(t){s.removeEventListener(t,r[t])})),delete s._touchHandlers[n.context._uid]}}var d={inserted:u,unbind:l};e["a"]=d},f665:function(t,e,n){"use strict";n("99af"),n("7db0"),n("c740");var i=n("5530"),s=(n("13b3"),n("c3f0")),r=n("afdd"),o=n("9d26"),a=n("604c");e["a"]=a["a"].extend({name:"v-window",provide:function(){return{windowGroup:this}},directives:{Touch:s["a"]},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:{type:Boolean,default:void 0},showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return Object(i["a"])(Object(i["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.$vuetify.rtl&&"x"===t?!this.internalReverse:this.internalReverse,n=e?"-reverse":"";return"v-window-".concat(t).concat(n,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,n){return t.internalValue===t.getValue(e,n)}))},internalReverse:function(){return this.reverse?!this.isReverse:this.isReverse}},watch:{internalIndex:"updateReverse"},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genContainer:function(){var t=[this.$slots.default];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,n){var i=this;return this.$createElement("div",{staticClass:"v-window__".concat(t)},[this.$createElement(r["a"],{props:{icon:!0},attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},on:{click:function(){i.changedByDelimiters=!0,n()}}},[this.$createElement(o["a"],{props:{large:!0}},e)])])},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){var n=this.genIcon("prev",e,this.prev);n&&t.push(n)}var i=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&i&&"string"===typeof i){var s=this.genIcon("next",i,this.next);s&&t.push(s)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length,n=this.items[e];return n.disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length,n=this.items[e];return n.disabled?this.getPrevIndex(e):e},next:function(){if(this.isReverse=this.$vuetify.rtl,this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.isReverse=!this.$vuetify.rtl,this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){this.changedByDelimiters?this.changedByDelimiters=!1:this.isReverse=t<e}},render:function(t){var e=this,n={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var i=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};n.directives.push({name:"touch",value:i})}return t("div",n,[this.genContainer()])}})},f820:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],r=n("2877"),o={},a=Object(r["a"])(o,i,s,!1,null,null,null);e["default"]=a.exports}}]);
//# sourceMappingURL=about.5d828872.js.map