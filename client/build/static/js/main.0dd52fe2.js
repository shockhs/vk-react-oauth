!function(e){function t(t){for(var r,o,c=t[0],i=t[1],u=t[2],j=0,m=[];j<c.length;j++)o=c[j],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(l&&l(t);m.length;)m.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={0:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;s.push([295,1]),n()}({295:function(e,t,n){n(296),e.exports=n(514)},488:function(e,t,n){},508:function(e,t,n){var r={"./af":155,"./af.js":155,"./ar":156,"./ar-dz":157,"./ar-dz.js":157,"./ar-kw":158,"./ar-kw.js":158,"./ar-ly":159,"./ar-ly.js":159,"./ar-ma":160,"./ar-ma.js":160,"./ar-sa":161,"./ar-sa.js":161,"./ar-tn":162,"./ar-tn.js":162,"./ar.js":156,"./az":163,"./az.js":163,"./be":164,"./be.js":164,"./bg":165,"./bg.js":165,"./bm":166,"./bm.js":166,"./bn":167,"./bn.js":167,"./bo":168,"./bo.js":168,"./br":169,"./br.js":169,"./bs":170,"./bs.js":170,"./ca":171,"./ca.js":171,"./cs":172,"./cs.js":172,"./cv":173,"./cv.js":173,"./cy":174,"./cy.js":174,"./da":175,"./da.js":175,"./de":176,"./de-at":177,"./de-at.js":177,"./de-ch":178,"./de-ch.js":178,"./de.js":176,"./dv":179,"./dv.js":179,"./el":180,"./el.js":180,"./en-au":181,"./en-au.js":181,"./en-ca":182,"./en-ca.js":182,"./en-gb":183,"./en-gb.js":183,"./en-ie":184,"./en-ie.js":184,"./en-il":185,"./en-il.js":185,"./en-in":186,"./en-in.js":186,"./en-nz":187,"./en-nz.js":187,"./en-sg":188,"./en-sg.js":188,"./eo":189,"./eo.js":189,"./es":190,"./es-do":191,"./es-do.js":191,"./es-us":192,"./es-us.js":192,"./es.js":190,"./et":193,"./et.js":193,"./eu":194,"./eu.js":194,"./fa":195,"./fa.js":195,"./fi":196,"./fi.js":196,"./fil":197,"./fil.js":197,"./fo":198,"./fo.js":198,"./fr":199,"./fr-ca":200,"./fr-ca.js":200,"./fr-ch":201,"./fr-ch.js":201,"./fr.js":199,"./fy":202,"./fy.js":202,"./ga":203,"./ga.js":203,"./gd":204,"./gd.js":204,"./gl":205,"./gl.js":205,"./gom-deva":206,"./gom-deva.js":206,"./gom-latn":207,"./gom-latn.js":207,"./gu":208,"./gu.js":208,"./he":209,"./he.js":209,"./hi":210,"./hi.js":210,"./hr":211,"./hr.js":211,"./hu":212,"./hu.js":212,"./hy-am":213,"./hy-am.js":213,"./id":214,"./id.js":214,"./is":215,"./is.js":215,"./it":216,"./it-ch":217,"./it-ch.js":217,"./it.js":216,"./ja":218,"./ja.js":218,"./jv":219,"./jv.js":219,"./ka":220,"./ka.js":220,"./kk":221,"./kk.js":221,"./km":222,"./km.js":222,"./kn":223,"./kn.js":223,"./ko":224,"./ko.js":224,"./ku":225,"./ku.js":225,"./ky":226,"./ky.js":226,"./lb":227,"./lb.js":227,"./lo":228,"./lo.js":228,"./lt":229,"./lt.js":229,"./lv":230,"./lv.js":230,"./me":231,"./me.js":231,"./mi":232,"./mi.js":232,"./mk":233,"./mk.js":233,"./ml":234,"./ml.js":234,"./mn":235,"./mn.js":235,"./mr":236,"./mr.js":236,"./ms":237,"./ms-my":238,"./ms-my.js":238,"./ms.js":237,"./mt":239,"./mt.js":239,"./my":240,"./my.js":240,"./nb":241,"./nb.js":241,"./ne":242,"./ne.js":242,"./nl":243,"./nl-be":244,"./nl-be.js":244,"./nl.js":243,"./nn":245,"./nn.js":245,"./oc-lnc":246,"./oc-lnc.js":246,"./pa-in":247,"./pa-in.js":247,"./pl":248,"./pl.js":248,"./pt":249,"./pt-br":250,"./pt-br.js":250,"./pt.js":249,"./ro":251,"./ro.js":251,"./ru":252,"./ru.js":252,"./sd":253,"./sd.js":253,"./se":254,"./se.js":254,"./si":255,"./si.js":255,"./sk":256,"./sk.js":256,"./sl":257,"./sl.js":257,"./sq":258,"./sq.js":258,"./sr":259,"./sr-cyrl":260,"./sr-cyrl.js":260,"./sr.js":259,"./ss":261,"./ss.js":261,"./sv":262,"./sv.js":262,"./sw":263,"./sw.js":263,"./ta":264,"./ta.js":264,"./te":265,"./te.js":265,"./tet":266,"./tet.js":266,"./tg":267,"./tg.js":267,"./th":268,"./th.js":268,"./tk":269,"./tk.js":269,"./tl-ph":270,"./tl-ph.js":270,"./tlh":271,"./tlh.js":271,"./tr":272,"./tr.js":272,"./tzl":273,"./tzl.js":273,"./tzm":274,"./tzm-latn":275,"./tzm-latn.js":275,"./tzm.js":274,"./ug-cn":276,"./ug-cn.js":276,"./uk":277,"./uk.js":277,"./ur":278,"./ur.js":278,"./uz":279,"./uz-latn":280,"./uz-latn.js":280,"./uz.js":279,"./vi":281,"./vi.js":281,"./x-pseudo":282,"./x-pseudo.js":282,"./yo":283,"./yo.js":283,"./zh-cn":284,"./zh-cn.js":284,"./zh-hk":285,"./zh-hk.js":285,"./zh-mo":286,"./zh-mo.js":286,"./zh-tw":287,"./zh-tw.js":287};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id=508},509:function(e,t,n){},513:function(e,t,n){},514:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),s=n(288),o=n(58),c=n(11),i=n(50),u="http://localhost:5000",l="https://oauth.vk.com/authorize?client_id=".concat("7534196","&display=page&redirect_uri=").concat("http://localhost:5000","/callback&scope=groups&response_type=code&v=5.120"),j=n.p+"static/media/icon_vk.svg",m=(n(488),function(){return a.a.createElement("main",{className:"login"},a.a.createElement("a",{href:l},a.a.createElement("span",null,"Login"),a.a.createElement("img",{src:j,alt:"VK icon"})))}),f=n(289),p=n.n(f),d=n(60),h=n.n(d);function v(e,t,n,r,a,s,o){try{var c=e[s](o),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,a)}function g(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function o(e){v(s,r,a,o,c,"next",e)}function c(e){v(s,r,a,o,c,"throw",e)}o(void 0)}))}}var b=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={headers:{responseType:"application/json"}},this.login=function(){var e=g(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("".concat(u,"/api/auth/login"),{code:n},t.options);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{error:"You are not authorized"});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),this.logout=g(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("".concat(u,"/api/auth/logout"),t.options);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{error:"You are not authorized"});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))};function y(e,t,n,r,a,s,o){try{var c=e[s](o),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,a)}function k(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function o(e){y(s,r,a,o,c,"next",e)}function c(e){y(s,r,a,o,c,"throw",e)}o(void 0)}))}}var E=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={headers:{responseType:"application/json"}},this.getGroupsData=k(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(u,"/api/user/groups"),t.options);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getUserData=k(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(u,"/api/user/"),t.options);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))},w=n(515),z={firstName:void 0,lastName:void 0,bDate:void 0,id:void 0},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=Object(w.a)((function(){return{currentUser:e,setData:function(e){t.currentUser=e},removeData:function(){t.currentUser=z},get info(){return t.currentUser}}}));return t},O=n(1),x=n.n(O),D=n(291),_=n(292),M=n.p+"static/media/noattach.png",P=function(e){var t=e.post,n=t.text,r=t.attachments,s=t.likes,o=t.views,c=t.date,i=n.replace(/\[|]|(club([0-9]+)[|])/g,"");return a.a.createElement("article",{className:"post"},a.a.createElement("div",{className:"image"},r[0]?function(){if("photo"===r[0].type&&r[0].photo){var e=r[0].photo.sizes;return a.a.createElement("img",{src:e[e.length-1].url,alt:"post attachment"})}if("video"===r[0].type&&r[0].video){e=r[0].video.image;return a.a.createElement("img",{src:e[e.length-1].url,alt:"post attachment"})}}():a.a.createElement("img",{src:M,alt:"no image post"})),a.a.createElement("div",{className:"text"},a.a.createElement("span",null,i.substring(0,510))),a.a.createElement("div",{className:"stats"},a.a.createElement("div",{className:"counter"},a.a.createElement("span",{className:"likes"},a.a.createElement(D.a,{color:"red"}),s.count),a.a.createElement("span",{className:"views"},a.a.createElement(_.a,null),o.count)),a.a.createElement("span",{className:"date"},x()(c).locale("ru").format("D MMMM LT"))))},U=function(e){var t=e.id,n=Object(r.useState)(null),s=n[0],o=n[1];return Object(r.useEffect)((function(){t&&E.getGroupsData().then((function(e){200===e.status&&o(e.data)}))}),[t]),a.a.createElement("div",null,s?s.length?s.map((function(e){return a.a.createElement(P,{key:e.id,post:e})})):"Постов нет":"Loading...")},R=(n(509),Object(i.a)((function(e){var t=e.currentUser,n=e.history,r=N();return a.a.createElement("div",{className:"user"},a.a.createElement(o.b,{className:"homepageLink",to:"/"},"Homepage"),a.a.createElement("div",{className:"username"},t.firstName+" "+t.lastName),a.a.createElement("div",{className:"id"},"@"+t.id),a.a.createElement("div",{className:"date"},"Дата рождения: ",t.bDate?x()(new Date(t.bDate)).format("DD.MM.YYYY"):"Скрыто"),a.a.createElement("button",{className:"logoutBtn",onClick:function(e){e.preventDefault(),b.logout().then((function(e){200===e.status&&(r.removeData(),n.push("/login"))}))}},"Logout"))}))),T=Object(c.f)(R),L=Object(i.a)((function(e){var t=e.location,n=e.history,s=N();return Object(r.useEffect)((function(){var e,r=null===(e=p.a.parse(t.search))||void 0===e?void 0:e.code;r?b.login(r).then((function(e){if(e.error)n.push("/login");else if(200===e.status){var t=e.data,r=t.bdate,a=t.last_name,o=t.first_name,c=t.id;s.setData({bDate:r,lastName:a,firstName:o,id:c})}})):E.getUserData().then((function(e){if(200===e.status){var t=e.data,r=t.bdate,a=t.last_name,o=t.first_name,c=t.id;s.setData({bDate:r,lastName:a,firstName:o,id:c})}else n.push("/login")}))}),[t]),a.a.createElement(a.a.Fragment,null,a.a.createElement(T,{currentUser:s.info}),a.a.createElement(U,{id:s.info.id}))})),S=Object(c.f)(L),Y=Object(i.a)((function(){return a.a.createElement("div",{className:"container"},a.a.createElement(c.c,null,a.a.createElement(c.a,{exact:!0,path:"/login",render:function(){return a.a.createElement(m,null)}}),a.a.createElement(c.a,{path:"/",render:function(){return a.a.createElement(S,null)}})))}));n(513);Object(s.render)(a.a.createElement(o.a,null,a.a.createElement(Y,null)),document.getElementById("app"))}});