(function(e){function t(t){for(var r,n,c=t[0],i=t[1],f=t[2],l=0,u=[];l<c.length;l++)n=c[l],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&u.push(s[n][0]),s[n]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(u.length)u.shift()();return o.push.apply(o,f||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,n=1;n<a.length;n++){var c=a[n];0!==s[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},s={app:0},o=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-16db9dc3":"2cb2daf7","chunk-a6cfe37c":"050b6f05"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a={"chunk-16db9dc3":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var r="css/"+({}[e]||e)+"."+{"chunk-16db9dc3":"66d15802","chunk-a6cfe37c":"31d6cfe0"}[e]+".css",s=i.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var f=o[c],l=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===r||l===s))return t()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){f=u[c],l=f.getAttribute("data-href");if(l===r||l===s)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete n[e],d.parentNode.removeChild(d),a(o)},d.href=s;var b=document.getElementsByTagName("head")[0];b.appendChild(d)})).then((function(){n[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,a){r=s[e]=[t,a]}));t.push(r[2]=o);var f,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var u=new Error;f=function(t){l.onerror=l.onload=null,clearTimeout(d);var a=s[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",u.name="ChunkLoadError",u.type=r,u.request=n,a[1](u)}s[e]=void 0}};var d=setTimeout((function(){f({type:"timeout",target:l})}),12e4);l.onerror=l.onload=f,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/star-wars-galaxy/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],l=f.push.bind(f);f.push=t,f=f.slice();for(var u=0;u<f.length;u++)t(f[u]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"1a5d":function(e,t,a){var r={"./Home.vue":["bb51","chunk-a6cfe37c"],"./Info.vue":["2469","chunk-16db9dc3"]};function n(e){if(!a.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],n=t[0];return a.e(t[1]).then((function(){return a(n)}))}n.keys=function(){return Object.keys(r)},n.id="1a5d",e.exports=n},4678:function(e,t,a){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=s(e);return a(t)}function s(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=s,e.exports=n,n.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=a("bc3a"),s=a.n(n);r["a"].use({install:function(){r["a"].prototype.$axios=s.a,r["a"].prototype.$installAxios=function(){this.$store.$axios=r["a"].prototype.$axios}}});var o=a("a28f"),c=a.n(o);r["a"].use({install:function(){r["a"].prototype.$logger=c()({level:"error"}),r["a"].prototype.$installLogger=function(){this.$store.$logger=r["a"].prototype.$logger}}});var i=a("f309");a("bf40"),a("41e6");r["a"].use(i["a"]);var f=new i["a"]({iconfont:"mdi",theme:{primary:"#3498db",secondary:"#34495e",success:"#2ecc71",danger:"#e74c3c",warning:"#f1c40f","warning-dark":"#ffa21a",info:"#00d3ee",light:"#ecf0f1",dark:"#2c3e50",tertiary:"#495057",accent:"#95a5a6",error:"#c0392b"}}),l=a("1cf8");a("2b69");r["a"].use(l["a"]);var u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("Sidebar"),a("Toolbar"),a("v-main",[a("v-container",{attrs:{fluid:"","ma-0":"","pa-0":""}},[a("router-view")],1)],1),a("Footer")],1)},d=[],b=a("5530"),p=(a("96cf"),a("1da1")),j=a("2f62"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-navigation-drawer",{attrs:{app:"",clipped:e.sidebar.clipped,floating:e.sidebar.floating,"mini-variant":e.sidebar.mini,permanent:"permanent"===e.sidebar.type,temporary:"temporary"===e.sidebar.type,overflow:""},model:{value:e.sidebar.model,callback:function(t){e.$set(e.sidebar,"model",t)},expression:"sidebar.model"}})},h=[],v={name:"Sidebar",data:function(){return{}},methods:{},computed:Object(b["a"])({},Object(j["c"])(["sidebar"]))},g=v,y=a("2877"),k=a("6544"),w=a.n(k),_=a("f774"),O=Object(y["a"])(g,m,h,!1,null,null,null),x=O.exports;w()(O,{VNavigationDrawer:_["a"]});var C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app-bar",{attrs:{app:"","clipped-left":e.appbar.clipped,dense:e.appbar.dense}},[a("v-app-bar-nav-icon",{attrs:{"aria-label":"nav"},on:{click:function(t){e.sidebar.model=!e.sidebar.model}}}),a("v-toolbar-title",{staticClass:"headline"},[a("span",[e._v(e._s(e.VUE_APP_TITLE))]),a("span",{staticClass:"font-weight-light"},[e._v(e._s(e.VUE_APP_VERSION))])]),a("v-spacer"),a("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[a("v-btn",{attrs:{to:"/",tile:"","aria-label":"home"}},[e._v(" Home ")]),a("v-btn",{attrs:{to:"/info",tile:"","aria-label":"info"}},[e._v(" Info ")])],1)],1)},E=[],z={name:"Toolbar",data:function(){return{VUE_APP_TITLE:"template-vue-dashboard",VUE_APP_VERSION:"v".concat("1.0.6")}},computed:Object(b["a"])({},Object(j["c"])(["appbar","sidebar"]))},$=z,P=a("40dc"),T=a("5bc1"),V=a("8336"),S=a("2fa4"),M=a("2a7f"),A=Object(y["a"])($,C,E,!1,null,null,null),I=A.exports;w()(A,{VAppBar:P["a"],VAppBarNavIcon:T["a"],VBtn:V["a"],VSpacer:S["a"],VToolbarItems:M["a"],VToolbarTitle:M["b"]});var N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-footer",{staticClass:"pt-0 pb-0",attrs:{app:"",inset:e.footer.inset,height:e.footer.height}},[a("span",{staticClass:"px-3"},[e._v("© "+e._s((new Date).getFullYear()))]),a("v-spacer"),a("v-btn",{staticClass:"mr-5",attrs:{height:e.footer.height,width:e.footer.height,tile:"",icon:"","x-small":"","aria-label":"invert-colors"},on:{click:function(t){t.stopPropagation(),e.$vuetify.theme.dark=!e.$vuetify.theme.dark}}},[a("v-icon",[e._v("mdi-invert-colors")])],1),a("v-btn",{staticClass:"mr-5",attrs:{height:e.footer.height,width:e.footer.height,tile:"","x-small":"","aria-label":"app-version",href:e.repoUrl}},[e._v(" "+e._s(e.version)+" ")]),a("span",{staticClass:"overline"},[e._v(e._s(e.now))])],1)},D=[],L=a("c1df"),U=a.n(L),Y={name:"Footer",data:function(){return{version:"v".concat("1.0.6"),repoUrl:"https://github.com/mi-sec/template-vue-dashboard#readme",now:U()().format("D MMM YYYY, HH:mm:ss")}},mounted:function(){var e=this;this.timeInterval=setInterval((function(){return e.now=U()().format("D MMM YYYY, HH:mm:ss")}),60)},beforeDestroy:function(){clearInterval(this.timeInterval)},computed:Object(b["a"])({},Object(j["c"])(["footer"]))},B=Y,F=a("553a"),H=a("132d"),R=Object(y["a"])(B,N,D,!1,null,null,null),q=R.exports;w()(R,{VBtn:V["a"],VFooter:F["a"],VIcon:H["a"],VSpacer:S["a"]});var J={name:"App",components:{Sidebar:x,Toolbar:I,Footer:q},data:function(){return{drawer:null}},beforeCreate:function(){this.$installAxios(),this.$installLogger()},mounted:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getConfig();case 2:case"end":return t.stop()}}),t)})))()},methods:Object(b["a"])({},Object(j["b"])(["getConfig"]))},K=J,G=(a("034f"),a("7496")),Q=a("a523"),W=a("f6c4"),X=Object(y["a"])(K,u,d,!1,null,null,null),Z=X.exports;w()(X,{VApp:G["a"],VContainer:Q["a"],VMain:W["a"]});var ee={getConfig:function(e){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.$logger.info("action.getConfig"),a.prev=1,a.next=4,t.$axios.get("config.json");case 4:r=a.sent,n=r.data,e.commit("commitConfig",n),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](1),t.$logger.error(a.t0);case 12:case"end":return a.stop()}}),a,null,[[1,9]])})))()}},te={commitConfig:function(e,t){Object.assign(e,t)}},ae={appbar:{clipped:!0,dense:!0},sidebar:{model:null,type:"",clipped:!0,floating:!1,mini:!1},footer:{inset:!1,height:26}},re={getDarkMode:function(e){return e.darkMode},getSidebarModel:function(e){return e.sidebarModel}};r["a"].use(j["a"]);var ne=new j["a"].Store({actions:ee,getters:re,mutations:te,state:ae}),se=(a("99af"),a("d81d"),a("b0c0"),a("d3b7"),a("58ca")),oe=a("8c4f"),ce=[{path:"/",name:"home",view:"Home",meta:{}},{path:"/info",name:"info",view:"Info",meta:{}}];function ie(e){var t=e.path,r=e.name,n=e.view,s=e.meta;return{name:r||n,path:t,meta:s,component:function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a("1a5d")("./".concat(n,".vue"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}}r["a"].use(oe["a"]),r["a"].use(se["a"]);var fe=new oe["a"]({base:"/star-wars-galaxy/",mode:"history",routes:ce.map((function(e){return ie(e)})).concat([{path:"*",redirect:"/"}]),scrollBehavior:function(e,t,a){return a||(e.hash?{selector:e.hash}:{x:0,y:0})}}),le=fe,ue=a("31bd");Object(ue["sync"])(ne,le),r["a"].config.productionTip=!1,new r["a"]({vuetify:f,router:le,store:ne,render:function(e){return e(Z)}}).$mount("#app")},"85ec":function(e,t,a){}});