(function(t){function e(e){for(var a,s,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);m&&m(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var o=n[s];0!==i[o]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},s={app:0},i={app:0},r=[];function o(t){return c.p+"js/"+({about:"about",cart:"cart",categories:"categories","signin~signup":"signin~signup",signin:"signin",signup:"signup"}[t]||t)+"."+{about:"28cacbba",cart:"1ee41b19",categories:"42498be3","signin~signup":"34dec874",signin:"bf337684",signup:"27e5dea7"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"signin~signup":1,signin:1,signup:1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise((function(e,n){for(var a="css/"+({about:"about",cart:"cart",categories:"categories","signin~signup":"signin~signup",signin:"signin",signup:"signup"}[t]||t)+"."+{about:"31d6cfe0",cart:"31d6cfe0",categories:"31d6cfe0","signin~signup":"448ba328",signin:"c4375cc7",signup:"45952047"}[t]+".css",i=c.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){l=f[o],u=l.getAttribute("data-href");if(u===a||u===i)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var a=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete s[t],m.parentNode.removeChild(m),n(r)},m.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(m)})).then((function(){s[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",f.name="ChunkLoadError",f.type=a,f.request=s,n[1](f)}i[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var m=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"black",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Pigmentus Logo",contain:"",src:n("76b8"),transition:"scale-transition",width:"80"}})],1),a("v-spacer"),a("v-btn",{staticClass:"ma-2",attrs:{to:"/categories",color:"black"}},[t._v(" Categories ")]),a("v-text-field",{staticStyle:{"margin-top":"30px"},attrs:{outlined:"",label:"Search",filled:"","append-icon":"mdi-card-search-outline",color:"rgb(187, 162, 87)"}}),a("v-spacer"),a("v-btn",{staticClass:"ma-2",attrs:{tile:"",large:"",color:"white",icon:"",to:"/cart"}},[a("v-icon",[t._v("mdi-cart")])],1),t.$store.state.isLogin?t._e():a("v-btn",{staticClass:"ma-2",attrs:{to:"/signup",color:"black"}},[t._v(" Sign Up ")]),t.$store.state.isLogin?t._e():a("v-btn",{staticClass:"ma-2",attrs:{to:"/auth/signin",color:"black"}},[t._v(" Sign In ")]),t.$store.state.isLogin?a("v-btn",{staticClass:"ma-2",attrs:{to:"/cursos",color:"black"}},[t._v(" My Course ")]):t._e(),t.$store.state.isLogin?a("div",{staticClass:"d-flex justify-center align-center"},[a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.attrs,s=e.on;return[a("v-btn",t._g(t._b({staticClass:"mx-2",attrs:{fab:"",outlined:"",color:"rgb(187, 162, 87)"}},"v-btn",n,!1),s),[a("v-badge",{attrs:{overlap:"",color:"red"},scopedSlots:t._u([{key:"badge",fn:function(){return[a("span",[t._v("3")])]},proxy:!0}],null,!0)},[a("v-avatar",[a("img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John"}})])],1)],1)]}}],null,!1,2950378144)},[a("v-card",{staticClass:"mx-auto",attrs:{width:"280",tile:""}},[a("v-list",[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.png"}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(t._s(t.$store.state.user.name))]),a("v-list-item-subtitle",[t._v(t._s(t.$store.state.user.email))])],1)],1)],1),a("v-divider"),a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{attrs:{color:"rgb(187, 162, 87)"}},t._l(t.profileItems,(function(e,n){return a("v-list-item",{key:n,attrs:{color:"rgb(187, 162, 87)"}},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1)],1)})),1)],1)],1)],1)],1):t._e()],1),a("v-main",[a("router-view")],1),a("v-footer",{attrs:{dark:"",padless:""}},[a("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[a("v-card-title",{staticClass:"goldColor"},[a("strong",{staticClass:"subheading"},[t._v("Get connected with us on social networks!")]),a("v-spacer"),t._l(t.icons,(function(e){return a("v-btn",{key:e.icon,staticClass:"mx-4",attrs:{dark:"",icon:""}},[a("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e.icon))])],1)}))],2),a("v-card-text",{staticClass:"py-2 white--text text-center"},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("Pigmentus")])])],1)],1)],1)},i=[],r={name:"App",components:{},data:function(){return{icons:[{icon:"mdi-facebook",color:"rgb(66 103 178)"},{icon:"mdi-linkedin",color:"rgb(66 103 178)"},{icon:"mdi-instagram",color:"rgb(66 103 178)"}],profileItems:[{name:"Profile",to:"",icon:"mdi-account"},{name:"My Courses",to:"",icon:"mdi-school"},{name:"My Cart",to:"",icon:"mdi-cart"},{name:"Wishlist",to:"",icon:"mdi-view-list"},{name:"Help",to:"",icon:"mdi-help-box"},{name:"Log Out",to:"",icon:"mdi-logout"}]}}},o=r,c=(n("034f"),n("2877")),l=n("6544"),u=n.n(l),f=n("7496"),m=n("40dc"),d=n("8212"),p=n("4ca6"),g=n("8336"),v=n("b0af"),h=n("99d9"),b=n("ce7e"),y=n("553a"),_=n("132d"),x=n("adda"),C=n("8860"),w=n("da13"),k=n("8270"),j=n("5d23"),V=n("1baa"),L=n("34c3"),S=n("f6c4"),P=n("e449"),I=n("2fa4"),O=n("8654"),E=Object(c["a"])(o,s,i,!1,null,null,null),A=E.exports;u()(E,{VApp:f["a"],VAppBar:m["a"],VAvatar:d["a"],VBadge:p["a"],VBtn:g["a"],VCard:v["a"],VCardText:h["a"],VCardTitle:h["b"],VDivider:b["a"],VFooter:y["a"],VIcon:_["a"],VImg:x["a"],VList:C["a"],VListItem:w["a"],VListItemAvatar:k["a"],VListItemContent:j["a"],VListItemGroup:V["a"],VListItemIcon:L["a"],VListItemSubtitle:j["b"],VListItemTitle:j["c"],VMain:S["a"],VMenu:P["a"],VSpacer:I["a"],VTextField:O["a"]});var T=n("a18c"),M=(n("b0c0"),n("2f62"));a["default"].use(M["a"]);var $=new M["a"].Store({state:{isLogin:!1,user:{}},mutations:{changeLoginStatus:function(t,e){t.isLogin=e},getUser:function(t,e){t.user.name=e.name,t.user.lastName=e.last_name,t.user.email=e.email}},actions:{},modules:{}}),N=n("5f5b"),q=n("bc3a"),B=n.n(q),D=n("a7fe"),F=n.n(D),H=n("f309");n("d1e78"),n("15f5"),n("bf40");a["default"].use(H["a"]);var U=new H["a"]({icons:{iconfont:"mdi"}}),W=n("00e7"),R=n.n(W);n("f9e3"),n("2dd8");n("ed18").config(),a["default"].use(F.a,B.a,U),a["default"].use(N["a"]),a["default"].use(R.a),a["default"].config.productionTip=!1,B.a.defaults.baseURL="https://pigmentus.herokuapp.com",B.a.defaults.baseURL="http://localhost:3000/",new a["default"]({router:T["a"],store:$,vuetify:U,render:function(t){return t(A)}}).$mount("#app")},"76b8":function(t,e,n){t.exports=n.p+"img/pigmentus-logo.9774fd66.png"},"85ec":function(t,e,n){},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"},a18c:function(t,e,n){"use strict";n("d3b7");var a=n("2b0e"),s=n("8c4f"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center"}},[n("h1",[t._v("Este es el home aqui podrian ir los videos o categorias, de verdad no se.")])])},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"12"}},[a("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),a("v-col",{staticClass:"mb-4"},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),a("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),a("br"),t._v("please join our online "),a("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},c=[],l={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},u=l,f=n("2877"),m=n("6544"),d=n.n(m),p=n("62ad"),g=n("a523"),v=n("adda"),h=n("0fd9"),b=Object(f["a"])(u,o,c,!1,null,null,null),y=b.exports;d()(b,{VCol:p["a"],VContainer:g["a"],VImg:v["a"],VRow:h["a"]});var _={name:"Home",components:{HelloWorld:y}},x=_,C=Object(f["a"])(x,i,r,!1,null,null,null),w=C.exports;d()(C,{VRow:h["a"]}),a["default"].use(s["a"]);var k=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/signup",name:"Signup",component:function(){return Promise.all([n.e("signin~signup"),n.e("signup")]).then(n.bind(null,"34c3b"))}},{path:"/auth/signin",name:"Signin",component:function(){return Promise.all([n.e("signin~signup"),n.e("signin")]).then(n.bind(null,"4a33"))}},{path:"/cart",name:"cart",component:function(){return n.e("cart").then(n.bind(null,"b789"))}},{path:"/categories",name:"categories",component:function(){return n.e("categories").then(n.bind(null,"58c2"))}}],j=new s["a"]({mode:"history",base:"/",routes:k});e["a"]=j}});
//# sourceMappingURL=app.a52496cb.js.map