(function(t){function e(e){for(var r,s,o=e[0],c=e[1],l=e[2],u=0,v=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&v.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(v.length)v.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,s=1;s<a.length;s++){var o=a[s];0!==n[o]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},s={app:0},n={app:0},i=[];function o(t){return c.p+"js/"+({cart:"cart",categories:"categories",signin:"signin",signup:"signup"}[t]||t)+"."+{cart:"915317fa",categories:"c4090479",signin:"136cf9a1",signup:"6cc7b9bf"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={signin:1,signup:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var r="css/"+({cart:"cart",categories:"categories",signin:"signin",signup:"signup"}[t]||t)+"."+{cart:"31d6cfe0",categories:"31d6cfe0",signin:"6b8b7dee",signup:"fbbaccca"}[t]+".css",n=c.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===n))return e()}var v=document.getElementsByTagName("style");for(o=0;o<v.length;o++){l=v[o],u=l.getAttribute("data-href");if(u===r||u===n)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||n,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete s[t],d.parentNode.removeChild(d),a(i)},d.href=n;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){s[t]=0})));var r=n[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,a){r=n[t]=[e,a]}));e.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var v=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;v.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",v.name="ChunkLoadError",v.type=r,v.request=s,a[1](v)}n[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var v=0;v<l.length;v++)e(l[v]);var d=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("85ec"),s=a.n(r);s.a},"0405":function(t,e,a){},"23d2":function(t,e,a){"use strict";var r=a("57bd"),s=a.n(r);s.a},"53a2":function(t,e,a){"use strict";var r=a("0405"),s=a.n(r);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("loading"),t.$store.state.isLoading?t._e():r("v-app-bar",{attrs:{app:"",color:"black",dark:""}},[r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Pigmentus Logo",contain:"",src:a("76b8"),transition:"scale-transition",width:"80"}})],1),r("v-spacer"),r("v-spacer"),r("v-btn",{staticClass:"ma-2",attrs:{to:"/collections",color:"white",text:""}},[t._v(" Shop ")]),r("v-btn",{staticClass:"ma-2",attrs:{to:"/",color:"white",text:""}},[t._v(" Cursos ")]),r("v-btn",{staticClass:"ma-2",attrs:{to:"/admin",color:"white",text:""}},[t._v(" Admin ")]),t.$store.state.isLogin?r("v-btn",{staticClass:"ma-2",attrs:{to:"/courses",color:"white",text:""}},[t._v(" My Course ")]):t._e(),r("v-btn",{staticClass:"ma-2",attrs:{tile:"",large:"",color:"white",icon:"",to:"/cart"}},[r("v-icon",[t._v("mdi-cart")])],1),t.$store.state.isLogin?t._e():r("v-btn",{staticClass:"ma-2",attrs:{to:"/signup",color:"white",text:""}},[t._v(" Sign Up ")]),t.$store.state.isLogin?t._e():r("v-btn",{staticClass:"ma-2",attrs:{to:"/auth/signin",color:"white",text:""}},[t._v(" Sign In ")]),t.$store.state.isLogin?r("div",{staticClass:"d-flex justify-center align-center"},[r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.attrs,s=e.on;return[r("v-btn",t._g(t._b({staticClass:"mx-2",attrs:{fab:"",outlined:"",color:"rgb(187, 162, 87)"}},"v-btn",a,!1),s),[r("v-badge",{attrs:{overlap:"",color:"red"},scopedSlots:t._u([{key:"badge",fn:function(){return[r("span",[t._v("3")])]},proxy:!0}],null,!0)},[r("v-avatar",[r("img",{attrs:{src:"https://i1.sndcdn.com/avatars-000143584345-3qxowr-t500x500.jpg",alt:"John"}})])],1)],1)]}}],null,!1,2798600858)},[r("v-card",{staticClass:"mx-auto",attrs:{width:"280",tile:""}},[r("v-list",[r("v-list-item",[r("v-list-item-avatar",[r("v-img",{attrs:{src:"https://i1.sndcdn.com/avatars-000143584345-3qxowr-t500x500.jpg"}})],1),r("v-list-item-content",[r("v-list-item-title",{staticClass:"title"},[t._v(t._s(t.$store.state.user.name)+" "+t._s(t.$store.state.user.lastName))]),r("v-list-item-subtitle",[t._v(t._s(t.$store.state.user.email))])],1)],1)],1),r("v-divider"),r("v-list",{attrs:{nav:"",dense:""}},[r("v-list-item-group",{attrs:{color:"rgb(187, 162, 87)"}},t._l(t.items,(function(e,a){return r("v-list-item",{key:a,attrs:{color:"rgb(187, 162, 87)",to:e.to+"/"+t.$store.state.user.id+"/account"}},[r("v-list-item-icon",[r("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1)],1)})),1)],1)],1)],1)],1):t._e()],1),r("v-main",[r("router-view")],1),t.$store.state.isLoading?t._e():r("v-footer",{attrs:{dark:"",padless:""}},[r("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[r("v-card-title",{staticClass:"goldColor"},[r("strong",{staticClass:"subheading"},[t._v("Get connected with us on social networks!")]),r("v-spacer"),t._l(t.icons,(function(e){return r("v-btn",{key:e.icon,staticClass:"mx-4",attrs:{dark:"",icon:""}},[r("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e.icon))])],1)}))],2),r("v-card-text",{staticClass:"py-2 white--text text-center"},[t._v(" "+t._s((new Date).getFullYear())+" — "),r("strong",[t._v("Pigmentus")])])],1)],1)],1)},n=[],i=a("5530"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",[t.show?r("div",{staticClass:"preload",attrs:{id:"preload"}},[r("div",{staticClass:"logo"},[r("img",{attrs:{src:a("76b8"),alt:"logo"}})]),r("div",{staticClass:"loader-frame"},[r("div",{staticClass:"loader1",attrs:{id:"loader1"}}),r("div",{staticClass:"loader2",attrs:{id:"loader2"}})])]):t._e()])},c=[],l=a("2f62"),u=a("a18c"),v={name:"Loading",data:function(){return{show:!0}},mounted:function(){this.getLoading()},methods:Object(i["a"])(Object(i["a"])({},Object(l["c"])(["loading"])),{},{getLoading:function(){var t=this,e=document.getElementById("preload");setTimeout((function(){t.show=!1,t.loading(!0),e.style.animation="fadeout 1.5s ease"}),4e3)}})},d=v,m=(a("53a2"),a("2877")),p=Object(m["a"])(d,o,c,!1,null,null,null),h=p.exports,g={name:"App",components:{Loading:h},data:function(){return{icons:[{icon:"mdi-facebook",color:"rgb(66 103 178)"},{icon:"mdi-linkedin",color:"rgb(66 103 178)"},{icon:"mdi-instagram",color:"rgb(66 103 178)"}],items:[{name:"Profile",to:"/profile",icon:"mdi-account"},{name:"My Courses",to:"/courses",icon:"mdi-school"},{name:"My Cart",to:"/cart",icon:"mdi-cart"},{name:"Wishlist",to:"",icon:"mdi-view-list"},{name:"Help",to:"",icon:"mdi-help-box"},{name:"Log Out",to:"",icon:"mdi-logout"}]}},methods:Object(i["a"])({},Object(l["b"])(["isAuth"])),created:function(){this.isAuth()}},f=g,b=(a("034f"),a("6544")),_=a.n(b),C=a("7496"),x=a("40dc"),w=a("8212"),y=a("4ca6"),V=a("8336"),k=a("b0af"),S=a("99d9"),T=a("ce7e"),L=a("553a"),I=a("132d"),P=a("adda"),$=a("8860"),j=a("da13"),O=a("8270"),E=a("5d23"),R=a("1baa"),M=a("34c3"),A=a("f6c4"),D=a("e449"),B=a("2fa4"),N=Object(m["a"])(f,s,n,!1,null,null,null),U=N.exports;_()(N,{VApp:C["a"],VAppBar:x["a"],VAvatar:w["a"],VBadge:y["a"],VBtn:V["a"],VCard:k["a"],VCardText:S["c"],VCardTitle:S["d"],VDivider:T["a"],VFooter:L["a"],VIcon:I["a"],VImg:P["a"],VList:$["a"],VListItem:j["a"],VListItemAvatar:O["a"],VListItemContent:E["a"],VListItemGroup:R["a"],VListItemIcon:M["a"],VListItemSubtitle:E["b"],VListItemTitle:E["c"],VMain:A["a"],VMenu:D["a"],VSpacer:B["a"]});a("96cf");var q=a("1da1"),H=a("bc3a"),z=a.n(H);r["default"].use(l["a"]);var F=new l["a"].Store({state:{isLogin:!1,isLoading:!0,user:""},mutations:{loading:function(t,e){t.isLoading=!1},changeLoginStatus:function(t,e){t.isLogin=e},setUser:function(t,e){void 0===e?(t.user="",t.isLogin=!1):(t.isLogin=!0,t.user=e)}},actions:{isAuth:function(){var t=Object(q["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.commit,z.a.get("http://pigmentus.herokuapp.com/api/v1.0/auth").then((function(t){""===t.data.user?state.user="":a("setUser",t.data.user)})).catch((function(t){return console.log(t)}));case 2:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},modules:{}}),G=a("5f5b"),J=a("a7fe"),W=a.n(J),Q=a("f309");a("d1e78"),a("15f5"),a("bf40");r["default"].use(Q["a"]);var K=new Q["a"]({icons:{iconfont:"mdi"}});a("f9e3"),a("2dd8");a("ed18").config(),r["default"].use(W.a,z.a,K),r["default"].use(G["a"]),r["default"].config.productionTip=!1,z.a.defaults.baseURL="http://pigmentus.herokuapp.com",new r["default"]({router:u["a"],store:F,vuetify:K,render:function(t){return t(U)}}).$mount("#app")},"57bd":function(t,e,a){},"74ce":function(t,e,a){},"76b8":function(t,e,a){t.exports=a.p+"img/pigmentus-logo.9774fd66.png"},"7df4":function(t,e,a){},"85ec":function(t,e,a){},"8b52":function(t,e,a){},a18c:function(t,e,a){"use strict";a("d3b7");var r=a("2b0e"),s=a("8c4f"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("home")},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticClass:"ml-0 mr-0 pr-0 pl-0 pt-0",attrs:{"no-gutters":"",width:"100vh"}},[a("v-tabs",{attrs:{width:"100vh","background-color":"rgb(252, 249, 237)",light:"",color:"rgb(187, 162, 87)"}},[a("v-tab",[t._v("Microblading")]),a("v-tab",[t._v("Pestanas")]),a("v-tab",[t._v("Item Three")]),a("v-tab-item",[a("v-container",{attrs:{fluid:""}},[a("div",{staticStyle:{"text-align":"center"}},[a("h1",[a("b",[t._v("Microblading")])])]),a("v-row",[a("v-card",{staticClass:"mx-auto my-12",attrs:{loading:t.loading,"max-width":"374"}},[a("template",{slot:"progress"},[a("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),a("v-img",{attrs:{height:"250",src:"https://cdn.vuetifyjs.com/images/cards/cooking.png"}}),a("v-card-title",[t._v("Cafe Badilico")]),a("v-card-text",[a("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[a("v-rating",{attrs:{value:4.5,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),a("div",{staticClass:"grey--text ml-4"},[t._v(" 4.5 (413) ")])],1),a("div",{staticClass:"my-4 subtitle-1"},[t._v(" $ • Italian, Cafe ")]),a("div",[t._v("Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.")])],1),a("v-divider",{staticClass:"mx-4"}),a("v-card-title",[t._v("Tonight's availability")]),a("v-card-text",[a("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[a("v-chip",[t._v("5:30PM")]),a("v-chip",[t._v("7:30PM")]),a("v-chip",[t._v("8:00PM")]),a("v-chip",[t._v("9:00PM")])],1)],1),a("v-card-actions",[a("v-btn",{attrs:{color:"deep-purple lighten-2",text:""},on:{click:t.reserve}},[t._v(" Reserve ")])],1)],2),a("v-card",{staticClass:"mx-auto my-12",attrs:{loading:t.loading,"max-width":"374"}},[a("template",{slot:"progress"},[a("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),a("v-img",{attrs:{height:"250",src:"https://cdn.vuetifyjs.com/images/cards/cooking.png"}}),a("v-card-title",[t._v("Cafe Badilico")]),a("v-card-text",[a("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[a("v-rating",{attrs:{value:4.5,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),a("div",{staticClass:"grey--text ml-4"},[t._v(" 4.5 (413) ")])],1),a("div",{staticClass:"my-4 subtitle-1"},[t._v(" $ • Italian, Cafe ")]),a("div",[t._v("Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.")])],1),a("v-divider",{staticClass:"mx-4"}),a("v-card-title",[t._v("Tonight's availability")]),a("v-card-text",[a("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[a("v-chip",[t._v("5:30PM")]),a("v-chip",[t._v("7:30PM")]),a("v-chip",[t._v("8:00PM")]),a("v-chip",[t._v("9:00PM")])],1)],1),a("v-card-actions",[a("v-btn",{attrs:{color:"deep-purple lighten-2",text:""},on:{click:t.reserve}},[t._v(" Reserve ")])],1)],2),a("v-card",{staticClass:"mx-auto my-12",attrs:{loading:t.loading,"max-width":"374"}},[a("template",{slot:"progress"},[a("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),a("v-img",{attrs:{height:"250",src:"https://cdn.vuetifyjs.com/images/cards/cooking.png"}}),a("v-card-title",[t._v("Cafe Badilico")]),a("v-card-text",[a("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[a("v-rating",{attrs:{value:4.5,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),a("div",{staticClass:"grey--text ml-4"},[t._v(" 4.5 (413) ")])],1),a("div",{staticClass:"my-4 subtitle-1"},[t._v(" $ • Italian, Cafe ")]),a("div",[t._v("Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.")])],1),a("v-divider",{staticClass:"mx-4"}),a("v-card-title",[t._v("Tonight's availability")]),a("v-card-text",[a("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[a("v-chip",[t._v("5:30PM")]),a("v-chip",[t._v("7:30PM")]),a("v-chip",[t._v("8:00PM")]),a("v-chip",[t._v("9:00PM")])],1)],1),a("v-card-actions",[a("v-btn",{attrs:{color:"deep-purple lighten-2",text:""},on:{click:t.reserve}},[t._v(" Reserve ")])],1)],2)],1)],1)],1)],1)],1)},c=[],l={name:"Home",data:function(){return{loading:!1,selection:1}},methods:{reserve:function(){var t=this;this.loading=!0,setTimeout((function(){return t.loading=!1}),2e3)}}},u=l,v=a("2877"),d=a("6544"),m=a.n(d),p=a("8336"),h=a("b0af"),g=a("99d9"),f=a("cc20"),b=a("ef9a"),_=a("a523"),C=a("ce7e"),x=a("adda"),w=a("8e36"),y=a("1d4d"),V=a("0fd9"),k=a("71a3"),S=a("c671"),T=a("fe57"),L=Object(v["a"])(u,o,c,!1,null,null,null),I=L.exports;m()(L,{VBtn:p["a"],VCard:h["a"],VCardActions:g["a"],VCardText:g["c"],VCardTitle:g["d"],VChip:f["a"],VChipGroup:b["a"],VContainer:_["a"],VDivider:C["a"],VImg:x["a"],VProgressLinear:w["a"],VRating:y["a"],VRow:V["a"],VTab:k["a"],VTabItem:S["a"],VTabs:T["a"]});var P={name:"HomeView",components:{Home:I},data:function(){return{}}},$=P,j=Object(v["a"])($,n,i,!1,null,null,null),O=j.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{"min-height":"300px"}},[a("v-tabs",{attrs:{vertical:"",color:"rgb(187, 162, 87)"}},[a("v-tab",[a("v-icon",{attrs:{left:"",cla:""}},[t._v(" mdi-account ")]),t._v(" Option 1 ")],1),a("v-tab",[a("v-icon",{attrs:{left:""}},[t._v(" mdi-lock ")]),t._v(" Option 2 ")],1),a("v-tab",[a("v-icon",{attrs:{left:""}},[t._v(" mdi-access-point ")]),t._v(" Option 3 ")],1),a("v-tab-item",[a("v-container",[a("vue-core-video-player",{attrs:{src:"https://www.youtube.com/watch?v=bS5m8oTQQT8"}})],1)],1),a("v-tab-item",[a("v-container",[a("iframe",{attrs:{src:"https://iframe.dacast.com/vod/e01769c6-6250-e4d9-d65c-30ec7785bd98/13a49ad4-7a75-46a6-d059-27278b767277",width:"560",height:"315",frameborder:"0",scrolling:"no",allow:"autoplay",allowfullscreen:"",webkitallowfullscreen:"",mozallowfullscreen:"",oallowfullscreen:"",msallowfullscreen:""}})])],1),a("v-tab-item",[a("v-container",[a("p",[t._v(" Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ")])])],1)],1)],1)},R=[],M=(a("42ab"),{name:"Activity",data:function(){return{}}}),A=M,D=a("132d"),B=Object(v["a"])(A,E,R,!1,null,null,null),N=B.exports;m()(B,{VContainer:_["a"],VIcon:D["a"],VRow:V["a"],VTab:k["a"],VTabItem:S["a"],VTabs:T["a"]});var U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",[a("v-tabs",{attrs:{vertical:"",color:"rgb(187, 162, 87)"}},[a("v-tab",{on:{click:function(e){return t.$router.push("/profile/"+t.$store.state.user.id+"/account/personal")}}},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-account ")]),t._v(" Personal Info ")],1),a("v-tab",[a("v-icon",{staticClass:"ml-n5",attrs:{left:""}},[t._v(" mdi-mail ")]),t._v(" Billing Info ")],1),a("v-tab-item",[a("router-view")],1),a("v-tab-item",[a("v-container",[a("p",[t._v(" Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ")])])],1)],1)],1)},q=[],H={name:"UserAccount",data:function(){return{}}},z=H,F=Object(v["a"])(z,U,q,!1,null,null,null),G=F.exports;m()(F,{VContainer:_["a"],VIcon:D["a"],VRow:V["a"],VTab:k["a"],VTabItem:S["a"],VTabs:T["a"]});var J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{"min-height":"300px"}},[a("v-tabs",{attrs:{vertical:"",color:"rgb(187, 162, 87)"}},[a("v-tab",[a("v-icon",{attrs:{left:""}},[t._v(" mdi-account ")]),t._v(" Option 1 ")],1),a("v-tab",[a("v-icon",{attrs:{left:""}},[t._v(" mdi-lock ")]),t._v(" Option 2 ")],1),a("v-tab",[a("v-icon",{attrs:{left:""}},[t._v(" mdi-access-point ")]),t._v(" Option 3 ")],1),a("v-tab-item",[a("v-container",[a("p",[t._v(" Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ")])])],1),a("v-tab-item",[a("v-container",[a("p",[t._v(" Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ")])])],1),a("v-tab-item",[a("v-container",[a("p",[t._v(" Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ")])])],1)],1)],1)},W=[],Q={name:"Messages",data:function(){return{}}},K=Q,Y=Object(v["a"])(K,J,W,!1,null,null,null),X=Y.exports;m()(Y,{VContainer:_["a"],VIcon:D["a"],VRow:V["a"],VTab:k["a"],VTabItem:S["a"],VTabs:T["a"]});var Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",{staticClass:"mx-auto",attrs:{tile:""}},[a("v-img",{attrs:{height:"200",src:"https://img.bekiabelleza.com/articulos/portada/86000/86345.jpg"}}),a("v-row",{staticStyle:{margin:"2.5%",position:"absolute",top:"130px"}},[a("v-col",[a("v-list-item",[a("v-list-item-avatar",{attrs:{size:"100"}},[a("img",{attrs:{src:"https://i1.sndcdn.com/avatars-000143584345-3qxowr-t500x500.jpg",alt:"John"}})]),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title",staticStyle:{"margin-top":"20px"}},[t._v(t._s(t.$store.state.user.name)+" "+t._s(t.$store.state.user.lastName))]),a("v-list-item-subtitle",[t._v(" email | "+t._s(t.$store.state.user.email))])],1)],1)],1)],1),a("v-row",{staticClass:"pt-8 mt-8"},[a("v-col",[a("v-tabs",{attrs:{color:"rgb(187, 162, 87)",right:""}},[a("v-tab",{on:{click:function(e){return t.$router.push("/profile/"+t.$store.state.user.id+"/account/personal")}}},[t._v("Account")]),a("v-tab",{on:{click:function(e){return t.$router.push("/profile/"+t.$store.state.user.id+"/messages")}}},[a("v-badge",{attrs:{color:"red",content:"6"}},[t._v(" Messages ")])],1),a("v-tab",{on:{click:function(e){return t.$router.push("/profile/"+t.$store.state.user.id+"/activity")}}},[t._v("Activity")]),t._l(3,(function(t){return a("v-tab-item",{key:t},[a("v-divider",{staticClass:"mt-0 mb-0 pb-0"}),a("v-container",{staticClass:"mt-0 pt-0"},[a("transition",[a("keep-alive",[a("router-view")],1)],1)],1)],1)}))],2)],1)],1)],1)],1)},tt=[],et={name:"Profile",components:{Profile:lt},data:function(){return{items:[{title:"Account",icon:"mdi-account"},{title:"Purchase History",icon:"mdi-history"},{title:"Wishlist",icon:"mdi-view-list"},{title:"Settings",icon:"mdi-view-list"}],links:[{name:"Account",to:"/account"},{name:"Purchase History",to:"/purchase-history"},{name:"Wishlist"},{name:"Settings"}],mini:!0}}},at=et,rt=a("4ca6"),st=a("62ad"),nt=a("da13"),it=a("8270"),ot=a("5d23"),ct=Object(v["a"])(at,Z,tt,!1,null,null,null),lt=ct.exports;m()(ct,{VBadge:rt["a"],VCard:h["a"],VCol:st["a"],VContainer:_["a"],VDivider:C["a"],VImg:x["a"],VListItem:nt["a"],VListItemAvatar:it["a"],VListItemContent:ot["a"],VListItemSubtitle:ot["b"],VListItemTitle:ot["c"],VRow:V["a"],VTab:k["a"],VTabItem:S["a"],VTabs:T["a"]});var ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticClass:"ml-0 mr-0 pr-0 pl-0 pt-0",attrs:{"no-gutters":"",width:"100vh"}},[a("v-tabs",{attrs:{width:"100vh","background-color":"rgb(252, 249, 237)",light:"",color:"rgb(187, 162, 87)",absolute:""},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[t._l(t.tabs,(function(e){return a("v-tab",{key:e.id,attrs:{to:e.route}},[t._v(" "+t._s(e.name)+" ")])})),t._l(t.tabs,(function(t){return a("v-tab-item",{key:t.id,attrs:{value:t.route,transition:!1,"reverse-transition":!1}},[a("router-view")],1)}))],2)],1)},vt=[],dt={name:"Shop",data:function(){return{activeTab:"/shop/categories",tabs:[{id:1,name:"Alls",route:"/shop/categories"},{id:2,name:"Eyelashes",route:"/shop/eyelashes-products"},{id:3,name:"Eyebrows",route:"/shop/eyebrows-products"},{id:4,name:"Lips",route:"/shop/lips-products"},{id:5,name:"Courses kits",route:"/shop/kits-products"}]}}},mt=dt,pt=(a("bed8"),Object(v["a"])(mt,ut,vt,!1,null,null,null)),ht=pt.exports;m()(pt,{VRow:V["a"],VTab:k["a"],VTabItem:S["a"],VTabs:T["a"]});var gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("div",{staticClass:"title"},[a("h3",[t._v("Personal information")])]),a("v-divider"),a("v-row",{staticClass:"ml-5"},[a("v-col",[a("span",[a("b",[t._v("Name")])])]),a("v-col",[a("span",[t._v(t._s(t.$store.state.user.name))])]),a("v-col",[a("v-btn",{attrs:{text:"",color:"primary"}},[t._v(" Edit ")])],1)],1),a("v-divider"),a("v-row",{staticClass:"ml-5"},[a("v-col",[a("span",[a("b",[t._v("Last Name")])])]),a("v-col",[a("span",[t._v(t._s(t.$store.state.user.lastName))])]),a("v-col",[a("v-btn",{attrs:{text:"",color:"primary"}},[t._v(" Edit ")])],1)],1),a("v-divider"),a("v-row",{staticClass:"ml-5"},[a("v-col",[a("span",[a("b",[t._v("Email")])])]),a("v-col",[a("span",[t._v(t._s(t.$store.state.user.email))])]),a("v-col",[a("v-btn",{attrs:{text:"",color:"primary"}},[t._v(" Edit ")])],1)],1)],1)},ft=[],bt={name:"PersonalInfo",data:function(){return{}}},_t=bt,Ct=Object(v["a"])(_t,gt,ft,!1,null,null,null),xt=Ct.exports;m()(Ct,{VBtn:p["a"],VCol:st["a"],VContainer:_["a"],VDivider:C["a"],VRow:V["a"]});var wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-card",{staticClass:"mx-auto",attrs:{tile:""}},[a("v-col",{staticClass:"pt-0",staticStyle:{height:"140px","text-align":"center"}},[a("v-row",[a("h1",{staticClass:"pa-0 pt-8 pb-n6 mb-n16",staticStyle:{color:"rgb(187, 162, 87)","background-color":"black",height:"140px"}},[t._v("Pigmentus Shop")])])],1),a("v-row",[a("v-col",{staticClass:"pt-0 pb-0"},[a("v-tabs",{staticClass:"my-tabs",attrs:{vertical:"","background-color":"rgb(252, 249, 237)",color:"rgb(187, 162, 87)",absolute:""},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[t._l(t.collections,(function(e){return a("v-tab",{key:e.id,attrs:{to:e.route}},[t._v(" "+t._s(e.name)+" ")])})),t._l(t.collections,(function(t){return a("v-tab-item",{key:t.id,attrs:{value:t.route}},[a("products",{attrs:{collections:t}})],1)}))],2)],1)],1)],1)],1)},yt=[],Vt=(a("4160"),a("b0c0"),a("159b"),a("96cf"),a("1da1")),kt=a("bc3a"),St=a.n(kt),Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-col",[a("v-row",{staticClass:"ml-0 mr-0 productTitle"},[a("h1",[t._v(t._s(this.collections.name))])]),a("v-row",t._l(t.products,(function(e,r){return a("v-card",{key:r,staticClass:"mx-auto mt-2 mb-2 my-12",attrs:{loading:t.loading,"max-width":"250"}},[a("template",{slot:"progress"},[a("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),a("v-img",{attrs:{height:"250",src:e.image}}),a("v-card-text",{staticClass:"pb-0",staticStyle:{position:"relative"}},[a("v-btn",{staticClass:"white--text mt-n8",attrs:{absolute:"",color:"red",icon:"",medium:"",right:"",top:""}},[a("v-icon",[t._v("mdi-heart")])],1)],1),a("v-card-subtitle",{staticClass:"pt-0 pb-0"},[a("b",[t._v(t._s(e.name))])]),a("v-card-text",{staticClass:"pb-0"},[a("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[a("v-rating",{staticClass:"mt-0",attrs:{value:4.5,color:"amber",dense:"","half-increments":"",size:"14",readonly:""}}),a("div",{staticClass:"grey--text ml-4"},[t._v(" 4.5 (413) ")])],1),a("v-row",[a("v-col",{staticClass:"my-4 subtitle-1 mb-0",staticStyle:{"text-align":"left"}},[t._v(" in stock: "+t._s(e.in_stock)+" ")]),a("v-col",{staticClass:"my-4 subtitle-1 mb-0",staticStyle:{"text-align":"right"}},[t._v(" $"+t._s(e.price)+" ")])],1)],1),a("v-divider",{staticClass:"mx-4 ml-0 mr-0 mt-0 mb-0"}),a("v-card-actions",{staticStyle:{"background-color":"rgb(252, 249, 237)"}},[a("v-btn",{staticStyle:{color:"rgb(187, 162, 87)"},attrs:{color:"black",to:"/shop/eyelashes-products"}},[t._v(" Ver ")]),a("v-spacer"),a("v-btn",{staticStyle:{color:"rgb(187, 162, 87)"},attrs:{color:"black",to:"/shop/eyelashes-products"}},[t._v(" Add to Cart ")])],1)],2)})),1)],1)],1)},Lt=[],It={props:{collections:{type:Object}},name:"Products",data:function(){return{products:[]}},methods:{getProducts:function(){var t=Object(Vt["a"])(regeneratorRuntime.mark((function t(e){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:St.a.get("api/v1.0/products",{params:{collectionId:e}}).then((function(t){a.products=t.data.products.rows,console.log(t)})).catch((function(t){return console.log(t)}));case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},created:function(){this.getProducts(this.collections.id)}},Pt=It,$t=(a("decd"),a("2fa4")),jt=Object(v["a"])(Pt,Tt,Lt,!1,null,null,null),Ot=jt.exports;m()(jt,{VBtn:p["a"],VCard:h["a"],VCardActions:g["a"],VCardSubtitle:g["b"],VCardText:g["c"],VCol:st["a"],VContainer:_["a"],VDivider:C["a"],VIcon:D["a"],VImg:x["a"],VProgressLinear:w["a"],VRating:y["a"],VRow:V["a"],VSpacer:$t["a"]});var Et={components:{Products:Ot},name:"Collections",data:function(){return{collections:[],activeTab:String}},methods:{getCollections:function(){var t=Object(Vt["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:St.a.get("api/v1.0/collections").then((function(t){t.data.collections.rows.forEach((function(a){e.activeTab="/collections/".concat(t.data.collections.rows[0].id,"/products");var r={id:a.id,name:a.name,disabled:a.disabled,route:"/collections/".concat(a.id,"/products")};e.collections.push(r)}))})).catch((function(t){return console.log(t)}));case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),getProducts:function(){var t=Object(Vt["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:router.push("/");case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getCollections()}},Rt=Et,Mt=(a("cb7d"),Object(v["a"])(Rt,wt,yt,!1,null,null,null)),At=Mt.exports;m()(Mt,{VCard:h["a"],VCol:st["a"],VContainer:_["a"],VRow:V["a"],VTab:k["a"],VTabItem:S["a"],VTabs:T["a"]});var Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"6",md:"2"}},[a("v-card",{staticClass:"ma-0 pa-0",attrs:{width:"100vh",tile:"",height:"100vh"}},[a("v-list",{attrs:{rounded:""}},[a("v-subheader",[t._v("Admin")]),a("v-list-item-group",{attrs:{color:"rgb(187, 162, 87)"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.items,(function(e,r){return a("v-list-item",{key:r,attrs:{to:e.route}},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)})),1)],1)],1)],1),a("v-col",{staticStyle:{"background-color":"#F5F5F5"},attrs:{cols:"12",sm:"8",md:"10"}},[a("v-main",{staticClass:"pt-0"},[a("router-view")],1)],1)],1)},Bt=[],Nt={data:function(){return{selectedItem:1,items:[{text:"Dashboard",icon:"mdi-view-dashboard",route:"/admin/dashboard"},{text:"Customers",icon:"mdi-account",route:"/admin/customers"},{text:"Revenue",icon:"mdi-currency-usd",route:""},{text:"Products",icon:"mdi-view-list",route:""}]}}},Ut=Nt,qt=(a("23d2"),a("8860")),Ht=a("1baa"),zt=a("34c3"),Ft=a("f6c4"),Gt=a("e0c7"),Jt=Object(v["a"])(Ut,Dt,Bt,!1,null,null,null),Wt=Jt.exports;m()(Jt,{VCard:h["a"],VCol:st["a"],VIcon:D["a"],VList:qt["a"],VListItem:nt["a"],VListItemContent:ot["a"],VListItemGroup:Ht["a"],VListItemIcon:zt["a"],VListItemTitle:ot["c"],VMain:Ft["a"],VRow:V["a"],VSubheader:Gt["a"]});var Qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{"no-gutters":""}},[a("h1",{staticStyle:{"text-align":"center"}},[t._v(" Pigmentus Dashboard")]),a("v-col",{attrs:{cols:"12",sm:"6",md:"8"}},[a("v-row",{staticClass:"ml-5",attrs:{"no-gutters":""}},[a("v-col",[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("v-card",{attrs:{elevation:r?12:2,"max-width":"290",shaped:"",to:"/admin/customers"}},[a("v-card-text",[a("v-row",[a("v-col",{staticClass:"pt-0 pb-0"},[a("p",{staticClass:"display-1 text--primary mb-0"},[t._v(" 0 ")]),a("div",{staticClass:"mt-0 pt-0"},[t._v("New Customers")])]),a("v-col",{staticClass:"pb-0 pt-0 mt-2",staticStyle:{"text-align":"center"}},[a("v-icon",{attrs:{"x-large":"",color:"rgb(187, 162, 87)"}},[t._v("mdi-account")])],1)],1)],1)],1)]}}])})],1),a("v-col",[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("v-card",{attrs:{elevation:r?12:2,"max-width":"290",shaped:"",to:"/collections/1/products"}},[a("v-card-text",[a("v-row",[a("v-col",{staticClass:"pt-0 pb-0"},[a("p",{staticClass:"display-1 text--primary mb-0"},[t._v(" $0.00 ")]),a("div",{staticClass:"mt-0 pt-0"},[t._v("Daily revenue")])]),a("v-col",{staticClass:"pb-0 pt-0 mt-2",staticStyle:{"text-align":"center"}},[a("v-icon",{attrs:{"x-large":"",color:"rgb(187, 162, 87)"}},[t._v("mdi-currency-usd")])],1)],1)],1)],1)]}}])})],1),a("v-col",[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(t){var e=t.hover;return[a("v-card",{attrs:{elevation:e?12:2,"max-width":"290",height:"94",shaped:"",to:"/admin/customers"}},[a("v-row",{attrs:{"no-gutters":"",height:"94"}},[a("v-col",{attrs:{"align-self":"center"}},[a("v-progress-circular",{staticStyle:{"text-align":"center"},attrs:{indeterminate:"",color:"rgb(187, 162, 87)"}})],1)],1)],1)]}}])})],1)],1),a("v-row",{staticClass:"ml-5 mt-6",attrs:{"no-gutters":""}},[a("v-col",[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("v-card",{attrs:{elevation:r?12:2,"max-width":"290",shaped:"",to:"/admin/customers"}},[a("v-card-text",[a("v-row",[a("v-col",{staticClass:"pt-0 pb-0"},[a("p",{staticClass:"display-1 text--primary mb-0"},[t._v(" 0 ")]),a("div",{staticClass:"mt-0 pt-0"},[t._v("Total Courses")])]),a("v-col",{staticClass:"pb-0 pt-0 mt-2",staticStyle:{"text-align":"center"}},[a("v-icon",{attrs:{"x-large":"",color:"rgb(187, 162, 87)"}},[t._v("mdi-book-open-page-variant")])],1)],1)],1)],1)]}}])})],1),a("v-col",[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("v-card",{attrs:{elevation:r?12:2,"max-width":"290",shaped:"",to:"/collections/1/products"}},[a("v-card-text",[a("v-row",[a("v-col",{staticClass:"pt-0 pb-0"},[a("p",{staticClass:"display-1 text--primary mb-0"},[t._v(" $0.00 ")]),a("div",{staticClass:"mt-0 pt-0"},[t._v("Products revenue")])]),a("v-col",{staticClass:"pb-0 pt-0 mt-2",staticStyle:{"text-align":"center"}},[a("v-icon",{attrs:{"x-large":"",color:"rgb(187, 162, 87)"}},[t._v("mdi-currency-usd")])],1)],1)],1)],1)]}}])})],1),a("v-col",[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("v-card",{attrs:{elevation:r?12:2,"max-width":"290",shaped:"",to:"/collections/1/products"}},[a("v-card-text",[a("v-row",[a("v-col",{staticClass:"pt-0 pb-0"},[a("p",{staticClass:"display-1 text--primary mb-0"},[t._v(" $0.00 ")]),a("div",{staticClass:"mt-0 pt-0"},[t._v("Courses revenue")])]),a("v-col",{staticClass:"pb-0 pt-0 mt-2",staticStyle:{"text-align":"center"}},[a("v-icon",{attrs:{"x-large":"",color:"rgb(187, 162, 87)"}},[t._v("mdi-currency-usd")])],1)],1)],1)],1)]}}])})],1)],1)],1),a("v-col",{attrs:{cols:"6",md:"4"}},[a("v-card",{staticClass:"mt-4 mx-auto",attrs:{width:"450px"}},[a("v-sheet",{staticClass:"v-sheet--offset mx-auto",attrs:{color:"rgb(187, 162, 87)",elevation:"12","max-width":"calc(100% - 32px)"}},[a("v-sparkline",{attrs:{labels:t.labels,value:t.value,color:"white","line-width":"2",padding:"16"}})],1),a("v-card-text",{staticClass:"pt-0"},[a("div",{staticClass:"title font-weight-light mb-2"},[t._v(" Customer Registrations ")]),a("v-divider",{staticClass:"my-2"}),a("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v(" mdi-clock ")]),a("span",{staticClass:"caption grey--text font-weight-light"},[t._v("last registration 26 minutes ago")])],1)],1)],1)],1)},Kt=[],Yt=(a("a9e3"),{name:"Dashboard",data:function(){return{totalUsers:Number,isLoading:!1,labels:["12am","3am","6am","9am","12pm","3pm","6pm","9pm"],value:[200,675,410,390,310,460,250,240]}},methods:{getTotalUsers:function(){var t=Object(Vt["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.isLoading=!0,St.a.get("api/v1.0/users").then((function(t){e.totalUsers=t.data.users.rows.length,e.isLoading=!1})).catch((function(t){return console.log(t)}));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getTotalUsers()}}),Xt=Yt,Zt=(a("dbc3"),a("ce87")),te=a("490a"),ee=a("8dd9"),ae=a("7f2e"),re=Object(v["a"])(Xt,Qt,Kt,!1,null,null,null),se=re.exports;m()(re,{VCard:h["a"],VCardText:g["c"],VCol:st["a"],VDivider:C["a"],VHover:Zt["a"],VIcon:D["a"],VProgressCircular:te["a"],VRow:V["a"],VSheet:ee["a"],VSparkline:ae["a"]});var ne=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{"no-gutters":""}},[a("h1",{staticStyle:{"text-align":"center"}},[t._v(" Customers")]),a("v-col",{attrs:{cols:"12"}},[a("v-row",{staticClass:"ml-5 mr-5"},[a("v-card",[a("v-card-title",[t._v(" All Customers "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-data-table",{attrs:{headers:t.headers,items:t.users,search:t.search}})],1)],1)],1)],1)},ie=[],oe={name:"Customers",data:function(){return{search:"",headers:[{text:"Name",align:"start",value:"name"},{text:"Email",value:"email"},{text:"Phone",value:"phone"},{text:"Date Created",value:"dateCreated"},{text:"Last Seen",value:"lastSeen"}],users:[]}},methods:{getUsers:function(){var t=Object(Vt["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:St.a.get("api/v1.0/users").then((function(t){t.data.users.rows.forEach((function(t){var a={name:t.name+" "+t.last_name,email:t.email,dateCreated:new Date(t.created_date).toLocaleString(),lastSeen:new Date(t.last_seen).toLocaleString()};e.users.push(a)})),console.log(e.users)})).catch((function(t){return console.log(t)}));case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.getUsers()}},ce=oe,le=a("8fea"),ue=a("8654"),ve=Object(v["a"])(ce,ne,ie,!1,null,null,null),de=ve.exports;m()(ve,{VCard:h["a"],VCardTitle:g["d"],VCol:st["a"],VDataTable:le["a"],VRow:V["a"],VSpacer:$t["a"],VTextField:ue["a"]}),r["default"].use(s["a"]);var me=[{path:"/",name:"Home",component:O},{path:"/collections",name:"Collections",redirect:"/collections/1/products",component:At,children:[{path:":id/products",name:"products",component:Ot}]},{path:"/shop",name:"Shop",redirect:{name:"collections"},component:ht,children:[{path:"collections",name:"collections",component:At,children:[{path:"products",name:"products",component:Ot}]}]},{path:"/profile/:id",name:"Profile",component:lt,children:[{path:"activity",component:N},{path:"account",redirect:{name:"personal"},component:G,children:[{path:"personal",name:"personal",component:xt}]},{path:"messages",component:X}]},{path:"/admin",name:"Admin",component:Wt,redirect:{name:"dashboard"},children:[{path:"dashboard",name:"dashboard",component:se},{path:"customers",name:"customers",component:de}]},{path:"/signup",name:"Signup",component:function(){return a.e("signup").then(a.bind(null,"34c3b"))}},{path:"/auth/signin",name:"Signin",component:function(){return a.e("signin").then(a.bind(null,"4a33"))}},{path:"/cart",name:"cart",component:function(){return a.e("cart").then(a.bind(null,"b789"))}},{path:"/categories",name:"categories",component:function(){return a.e("categories").then(a.bind(null,"58c2"))}}],pe=new s["a"]({mode:"history",base:"/",routes:me});e["a"]=pe},bed8:function(t,e,a){"use strict";var r=a("8b52"),s=a.n(r);s.a},cb7d:function(t,e,a){"use strict";var r=a("7df4"),s=a.n(r);s.a},dbc3:function(t,e,a){"use strict";var r=a("ef6e"),s=a.n(r);s.a},decd:function(t,e,a){"use strict";var r=a("74ce"),s=a.n(r);s.a},ef6e:function(t,e,a){}});
//# sourceMappingURL=app.6dd60fd8.js.map