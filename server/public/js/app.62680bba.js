(function(t){function e(e){for(var a,r,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},i={app:0},o=[];function s(t){return c.p+"js/"+({cart:"cart",categories:"categories","signin~signup":"signin~signup",signin:"signin",signup:"signup"}[t]||t)+"."+{cart:"1ee41b19",categories:"b91efafd","signin~signup":"21ed8ac5",signin:"a6ef1daf",signup:"4cab6c4f"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"signin~signup":1,signin:1,signup:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({cart:"cart",categories:"categories","signin~signup":"signin~signup",signin:"signin",signup:"signup"}[t]||t)+"."+{cart:"31d6cfe0",categories:"31d6cfe0","signin~signup":"448ba328",signin:"c4375cc7",signup:"45952047"}[t]+".css",i=c.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[t],f.parentNode.removeChild(f),n(o)},f.href=i;var g=document.getElementsByTagName("head")[0];g.appendChild(f)})).then((function(){r[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}i[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"0405":function(t,e,n){},"53a2":function(t,e,n){"use strict";var a=n("0405"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("loading"),t.$store.state.isLoading?t._e():a("v-app-bar",{attrs:{app:"",color:"black",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Pigmentus Logo",contain:"",src:n("76b8"),transition:"scale-transition",width:"80"}})],1),a("v-spacer"),a("v-btn",{staticClass:"ma-2",attrs:{to:"/categories",color:"black"}},[t._v(" Categories ")]),a("v-text-field",{staticStyle:{"margin-top":"30px"},attrs:{outlined:"",label:"Search",filled:"","append-icon":"mdi-card-search-outline",color:"rgb(187, 162, 87)"}}),a("v-spacer"),a("v-btn",{staticClass:"ma-2",attrs:{tile:"",large:"",color:"white",icon:"",to:"/cart"}},[a("v-icon",[t._v("mdi-cart")])],1),t.$store.state.isLogin?t._e():a("v-btn",{staticClass:"ma-2",attrs:{to:"/signup",color:"black"}},[t._v(" Sign Up ")]),t.$store.state.isLogin?t._e():a("v-btn",{staticClass:"ma-2",attrs:{to:"/auth/signin",color:"black"}},[t._v(" Sign In ")]),t.$store.state.isLogin?a("v-btn",{staticClass:"ma-2",attrs:{to:"/courses",color:"black"}},[t._v(" My Course ")]):t._e(),t.$store.state.isLogin?a("div",{staticClass:"d-flex justify-center align-center"},[a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.attrs,r=e.on;return[a("v-btn",t._g(t._b({staticClass:"mx-2",attrs:{fab:"",outlined:"",color:"rgb(187, 162, 87)"}},"v-btn",n,!1),r),[a("v-badge",{attrs:{overlap:"",color:"red"},scopedSlots:t._u([{key:"badge",fn:function(){return[a("span",[t._v("3")])]},proxy:!0}],null,!0)},[a("v-avatar",[a("img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John"}})])],1)],1)]}}],null,!1,2950378144)},[a("v-card",{staticClass:"mx-auto",attrs:{width:"280",tile:""}},[a("v-list",[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.png"}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(t._s(t.$store.state.user.name)+" "+t._s(t.$store.state.user.lastName))]),a("v-list-item-subtitle",[t._v(t._s(t.$store.state.user.email))])],1)],1)],1),a("v-divider"),a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{attrs:{color:"rgb(187, 162, 87)"}},t._l(t.items,(function(e,n){return a("v-list-item",{key:n,attrs:{color:"rgb(187, 162, 87)",to:e.to}},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1)],1)})),1)],1)],1)],1)],1):t._e()],1),a("v-main",[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1),t.$store.state.isLoading?t._e():a("v-footer",{attrs:{dark:"",padless:""}},[a("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[a("v-card-title",{staticClass:"goldColor"},[a("strong",{staticClass:"subheading"},[t._v("Get connected with us on social networks!")]),a("v-spacer"),t._l(t.icons,(function(e){return a("v-btn",{key:e.icon,staticClass:"mx-4",attrs:{dark:"",icon:""}},[a("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e.icon))])],1)}))],2),a("v-card-text",{staticClass:"py-2 white--text text-center"},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("Pigmentus")])])],1)],1)],1)},i=[],o=n("5530"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",[t.show?a("div",{staticClass:"preload",attrs:{id:"preload"}},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:n("76b8"),alt:"logo"}})]),a("div",{staticClass:"loader-frame"},[a("div",{staticClass:"loader1",attrs:{id:"loader1"}}),a("div",{staticClass:"loader2",attrs:{id:"loader2"}})])]):t._e()])},c=[],l=n("2f62"),u=n("a18c"),d={name:"Loading",data:function(){return{show:!0}},mounted:function(){this.getLoading()},methods:Object(o["a"])(Object(o["a"])({},Object(l["c"])(["loading"])),{},{getLoading:function(){var t=this,e=document.getElementById("preload");setTimeout((function(){t.show=!1,t.loading(!0),e.style.animation="fadeout 1.5s ease"}),4e3)}})},f=d,g=(n("53a2"),n("2877")),p=Object(g["a"])(f,s,c,!1,null,null,null),m=p.exports,v={name:"App",components:{Loading:m},data:function(){return{icons:[{icon:"mdi-facebook",color:"rgb(66 103 178)"},{icon:"mdi-linkedin",color:"rgb(66 103 178)"},{icon:"mdi-instagram",color:"rgb(66 103 178)"}],items:[{name:"Profile",to:"/profile",icon:"mdi-account"},{name:"My Courses",to:"",icon:"mdi-school"},{name:"My Cart",to:"",icon:"mdi-cart"},{name:"Wishlist",to:"",icon:"mdi-view-list"},{name:"Help",to:"",icon:"mdi-help-box"},{name:"Log Out",to:"",icon:"mdi-logout"}]}},methods:Object(o["a"])({},Object(l["b"])(["isAuth"])),created:function(){this.isAuth()}},h=v,b=(n("034f"),n("6544")),_=n.n(b),y=n("7496"),w=n("40dc"),C=n("8212"),x=n("4ca6"),L=n("8336"),V=n("b0af"),j=n("99d9"),k=n("a523"),O=n("ce7e"),P=n("553a"),S=n("132d"),$=n("adda"),I=n("8860"),E=n("da13"),A=n("8270"),T=n("5d23"),M=n("1baa"),N=n("34c3"),B=n("f6c4"),R=n("e449"),H=n("2fa4"),U=n("8654"),D=Object(g["a"])(h,r,i,!1,null,null,null),F=D.exports;_()(D,{VApp:y["a"],VAppBar:w["a"],VAvatar:C["a"],VBadge:x["a"],VBtn:L["a"],VCard:V["a"],VCardText:j["a"],VCardTitle:j["b"],VContainer:k["a"],VDivider:O["a"],VFooter:P["a"],VIcon:S["a"],VImg:$["a"],VList:I["a"],VListItem:E["a"],VListItemAvatar:A["a"],VListItemContent:T["a"],VListItemGroup:M["a"],VListItemIcon:N["a"],VListItemSubtitle:T["b"],VListItemTitle:T["c"],VMain:B["a"],VMenu:R["a"],VSpacer:H["a"],VTextField:U["a"]});n("96cf");var J=n("1da1"),W=n("bc3a"),q=n.n(W);a["default"].use(l["a"]);var G=new l["a"].Store({state:{isLogin:!1,isLoading:!0,user:""},mutations:{loading:function(t,e){t.isLoading=!1},changeLoginStatus:function(t,e){t.isLogin=e},setUser:function(t,e){void 0===e?(t.user="",t.isLogin=!1):(t.isLogin=!0,t.user=e)}},actions:{isAuth:function(){var t=Object(J["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,q.a.get("http://pigmentus.herokuapp.com/auth").then((function(t){""===t.data.user?state.user="":n("setUser",t.data.user)})).catch((function(t){return console.log(t)}));case 2:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},modules:{}}),z=n("5f5b"),K=n("a7fe"),Y=n.n(K),Q=n("f309");n("d1e78"),n("15f5"),n("bf40");a["default"].use(Q["a"]);var X=new Q["a"]({icons:{iconfont:"mdi"}});n("f9e3"),n("2dd8");n("ed18").config(),a["default"].use(Y.a,q.a,X),a["default"].use(z["a"]),a["default"].config.productionTip=!1,q.a.defaults.baseURL="http://pigmentus.herokuapp.com",new a["default"]({router:u["a"],store:G,vuetify:X,render:function(t){return t(F)}}).$mount("#app")},"76b8":function(t,e,n){t.exports=n.p+"img/pigmentus-logo.9774fd66.png"},"85ec":function(t,e,n){},a18c:function(t,e,n){"use strict";n("d3b7");var a=n("2b0e"),r=n("8c4f"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center"}},[n("h1",[t._v("Welcome to your profile "+t._s(t.$store.state.user.name)+" "+t._s(t.$store.state.user.lastName)+". I'm working on this part right now, I know, I know, it looks ugly, but I'm just getting started")])])},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"text-center"})],1)},c=[],l={name:"Profile",data:function(){return{}}},u=l,d=n("2877"),f=n("6544"),g=n.n(f),p=n("a523"),m=n("0fd9"),v=Object(d["a"])(u,s,c,!1,null,null,null),h=v.exports;g()(v,{VContainer:p["a"],VRow:m["a"]});var b={name:"ProfileView",components:{Profile:h},data:function(){return{}}},_=b,y=Object(d["a"])(_,i,o,!1,null,null,null),w=y.exports;g()(y,{VRow:m["a"]});var C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center"}},[n("h1",[t._v("Welcome to home "+t._s(t.$store.state.user.name)+" "+t._s(t.$store.state.user.lastName)+".")])])},x=[],L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"text-center"})],1)},V=[],j={name:"Home",data:function(){return{}}},k=j,O=Object(d["a"])(k,L,V,!1,null,null,null),P=O.exports;g()(O,{VContainer:p["a"],VRow:m["a"]});var S={name:"HomeView",components:{Home:P},data:function(){return{}}},$=S,I=Object(d["a"])($,C,x,!1,null,null,null),E=I.exports;g()(I,{VRow:m["a"]}),a["default"].use(r["a"]);var A=[{path:"/",name:"Home",component:E},{path:"/profile",name:"Profile",component:w},{path:"/signup",name:"Signup",component:function(){return Promise.all([n.e("signin~signup"),n.e("signup")]).then(n.bind(null,"34c3b"))}},{path:"/auth/signin",name:"Signin",component:function(){return Promise.all([n.e("signin~signup"),n.e("signin")]).then(n.bind(null,"4a33"))}},{path:"/cart",name:"cart",component:function(){return n.e("cart").then(n.bind(null,"b789"))}},{path:"/categories",name:"categories",component:function(){return n.e("categories").then(n.bind(null,"58c2"))}}],T=new r["a"]({mode:"history",base:"/",routes:A});e["a"]=T}});
//# sourceMappingURL=app.62680bba.js.map