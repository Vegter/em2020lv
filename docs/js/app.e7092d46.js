(function(t){function e(e){for(var a,i,o=e[0],l=e[1],u=e[2],v=0,f=[];v<o.length;v++)i=o[v],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,o=1;o<s.length;o++){var l=s[o];0!==n[l]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},n={app:0},r=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/em2020lv/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"35a2":function(t,e,s){t.exports=s.p+"img/Charrat.c70a36a2.jpg"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[s("div",{staticClass:"d-flex align-center"},[t._v(" Elections municipales 2020 ")]),s("v-spacer"),s("div",{staticClass:"align-left"},[t._v(" La Verdière ")])],1),s("v-content",[s("elections")],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("div",{staticClass:"align-center"},[t._v(" Il s'agit d'un projet open source privé non affilié à la municipalité ou autrement. Les résultats affichés sont approximatifs et n'ont aucun statut officiel. ")])]),a("v-flex",{attrs:{xs12:""}},[a("h2",[t._v("Les Suffrages")]),a("v-card",{staticClass:"mx-auto",attrs:{tile:""}},[a("v-row",{staticClass:"mr-2 ml-2"},t._l(t.listes,(function(e){return a("v-col",{key:e.name,attrs:{md:"4",cols:"12"}},[a("div",{staticClass:"text-cente"},[a("v-img",{staticClass:"center",attrs:{src:s("710a")("./"+e.name+".jpg"),width:"45",height:"45"}}),t._v(" Liste "+t._s(e.name)+" "),e.percentage<.05?a("span"):t.results.winner?a("span",{staticClass:"text-no-wrap"},[t._v(" ("+t._s(e.prime+e.seats+e.restSeats)+" sièges) ")]):t._e()],1),a("v-text-field",{staticClass:"mr-5 ml-5",attrs:{rules:t.positive},model:{value:e.votes,callback:function(s){t.$set(e,"votes",s)},expression:"list.votes"}}),a("div",[a("v-btn",{staticClass:"float-left ml-5",attrs:{tabindex:"-1"},on:{click:function(s){return t.addVote(e,-1)}}},[t._v("-")]),a("v-btn",{staticClass:"float-right mr-5",attrs:{tabindex:"-1"},on:{click:function(s){return t.addVote(e,1)}}},[t._v("+")])],1)],1)})),1)],1)],1),a("v-flex",{staticClass:"mt-5 mb-5"},[a("v-btn",{on:{click:function(e){return t.calcul()}}},[t._v("Estimation")])],1),t.results.error?a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"mx-auto mb-2",attrs:{tile:""}},[a("v-card-text",[a("h3",{staticClass:"headline font-weight-bold mb-3"},[t._v(t._s(t.results.error))])])],1)],1):t.results.winner?a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"mx-auto mb-2",attrs:{tile:""}},[a("v-card-text",[a("h3",{staticClass:"headline font-weight-bold mb-3"},[t._v("Sièges et Suffrages")]),a("div",[t._v(" "+t._s(t.results.totalSeats)+" sièges à attribuer ")]),a("div",[t._v(" "+t._s(t.results.totalVotes)+" suffrages exprimés, donc une majorité absolue de ("+t._s(t.results.totalVotes)+"/2) + 1 = "+t._s(t.results.absoluteMajority)+" voix ")])])],1),a("v-card",{staticClass:"mx-auto mb-2",attrs:{tile:""}},[a("v-card-text",[a("h3",{staticClass:"headline font-weight-bold mb-3"},[t._v("Seuil électoral")]),a("p",[t._v(" Les sièges sont répartis à la représentation proportionnelle à la plus forte moyenne entre toutes les listes ayant obtenu plus de 5% ("+t._s(Math.ceil(.05*t.results.totalVotes))+") des suffrages exprimés, en fonction du nombre de suffrage obtenus. ")]),t._l(t.listes,(function(e){return a("div",{key:e.name},[a("h4",[t._v("Liste "+t._s(e.name))]),t._v(" "+t._s(e.votes)+" ("+t._s((100*e.percentage).toFixed(2))+"%) ")])}))],2)],1),a("v-card",{staticClass:"mx-auto mb-2",attrs:{tile:""}},[a("v-card-text",[a("h3",{staticClass:"headline font-weight-bold mb-3"},[t._v("Prime Majoritaire")]),a("div",[t._v(" La prime majoritaire donne "+t._s(t.results.winner.prime)+" sièges à la liste "+t._s(t.results.winner.name)+". Ce qui laisse "+t._s(t.results.remainingSeats)+" sièges à pourvoir. ")])])],1),a("v-card",{staticClass:"mx-auto mb-2",attrs:{tile:""}},[a("v-card-text",[a("h3",{staticClass:"headline font-weight-bold mb-3"},[t._v("Quotient électoral")]),a("div",[t._v(" On calcule le quotient électoral : "+t._s(t.results.totalVotes)+"/"+t._s(t.results.remainingSeats)+" = "+t._s(t.results.q.toFixed(2))+" ")])])],1),a("v-card",{staticClass:"mx-auto mb-2",attrs:{tile:""}},[a("v-card-text",[a("h3",{staticClass:"headline font-weight-bold mb-3"},[t._v("Plus forte moyenne")]),a("div",[t._v(" Attribution à la plus forte moyenne pour chaque liste ")]),t._l(t.results.lists,(function(e){return a("v-list-item",{key:e.name},[a("v-list-item-content",[a("v-row",{attrs:{justify:"center"}},[a("v-col",[a("h4",[t._v("Liste "+t._s(e.name))]),a("div",[t._v(" Q: "+t._s(e.votes)+"/"+t._s(t.results.q.toFixed(2))+" = "+t._s(e.avg.toFixed(2))+" soit "+t._s(e.seats)+" sièges ")])])],1)],1)],1)})),a("div",[t._v(" Ce qui laisse "+t._s(t.results.restSeats)+" sièges à pourvoir. ")])],2)],1),t._l(t.results.restRounds,(function(e,s){return a("v-card",{key:s,staticClass:"mx-auto mb-2",attrs:{tile:""}},[a("v-card-text",[a("h3",{staticClass:"headline font-weight-bold mb-3"},[t._v("Attribution du siège "+t._s(s+1))]),a("div",[t._v(" Attribution à la plus forte moyenne pour chaque liste ")]),t._l(t.results.lists,(function(e){return a("v-list-item",{key:e.name},[a("v-list-item-content",[a("v-row",{attrs:{justify:"center"}},[a("v-col",[a("h4",[t._v("Liste "+t._s(e.name))]),a("div",[t._v(" Q: "+t._s(e.votes)+"/"+t._s(e.rounds[s].roundSeats)+" + 1 = "+t._s(e.rounds[s].avg.toFixed(2))+" ")])])],1)],1)],1)})),a("div",[t._v(" On attribue 1 nouveau siège à la liste "+t._s(e.winner.name)+" qui a la plus forte moyenne. ")])],2)],1)})),a("v-card",{staticClass:"mx-auto",attrs:{tile:""}},[a("v-card-text",[a("h3",{staticClass:"headline font-weight-bold mb-3"},[t._v("Resultats")]),t._l(t.results.lists,(function(e){return a("div",{key:e.name},[t._v(" "+t._s(e.name)+" "+t._s(e.prime+e.seats+e.restSeats)+" sièges ")])}))],2)],1)],2):t._e()],1)],1)},o=[],l=(s("4de4"),s("4160"),s("d81d"),s("fb6a"),s("b65f"),s("159b"),s("53ca")),u=s("2909"),c=19,v=["Marignane","Charrat","Rogier"],f=v.map((function(t){return{name:t,votes:null}}));function d(t){window.console.log(t)}function p(){var t={totalSeats:null,totalVotes:null,absoluteMajority:null,winner:null,remainingSeats:null,q:null,lists:null,nRounds:null,restRounds:[]};t.winner=null,t.error=null,t.calculated=!0,f.forEach((function(t){return t.votes=parseInt(t.votes)}));var e=0;f.forEach((function(t){return e+=t.votes})),f.forEach((function(t){t.percentage=t.votes/e}));var s=f.slice(),a=s.filter((function(t){return t.percentage>=.05})),n=Math.max.apply(Math,Object(u["a"])(a.map((function(t){return t.votes})))),r=a.filter((function(t){return t.votes===n}));if(r.length>1)return d("NO WINNER"),t.winner=null,t.error="Le résultat est indéterminé",t;var i=r[0],o=Math.round(c/2);i.prime=o,a.forEach((function(t){t.isWinner=t===i,t.prime=t===i?o:0}));var v=c-o,p=e/v,m=v;a.forEach((function(t){t.avg=t.votes/p,t.seats=Math.trunc(t.avg),m-=t.seats}));var h=new Array(m);a.forEach((function(t){t.rounds=new Array(m),t.restSeats=0}));var _=m,g=0,b=function(){a.forEach((function(t){var e=t.seats+t.restSeats;t.rounds[g]={roundSeats:e,avg:t.votes/(e+1)}}));var e=Math.max.apply(Math,Object(u["a"])(a.map((function(t){return t.rounds[g].avg})))),s=a.filter((function(t){return t.rounds[g].avg===e}));if(s.length>1){var n=Math.max.apply(Math,Object(u["a"])(s.map((function(t){return t.votes}))));if(s=s.filter((function(t){return t.votes===n})),s.length>1)return d("UNKNOWN LAST RESTSEAT"),t.winner=null,t.error="Attribution des sièges restants est indéterminé",{v:t}}h[g]={winner:s[0]};var r=s[0];a.forEach((function(t){t.rounds[g].isWinner=t===r,t.rounds[g].seats=t===r?1:0})),r.restSeats+=1,g++};while(g<m){var x=b();if("object"===Object(l["a"])(x))return x.v}return d(a),t.totalSeats=c,t.totalVotes=e,t.absoluteMajority=Math.trunc(e/2+1),t.winner=i,t.remainingSeats=v,t.restSeats=m,t.q=p,t.lists=a,t.restRounds=h,t.nRounds=_,t}var m={name:"Elections",data:function(){return{positive:[function(t){return!isNaN(parseInt(t))||"valeur invalide"},function(t){return parseInt(t)>=0||"value negative"}],listes:f,seats:c,results:{}}},watch:{listes:{handler:function(){this.recalc()},deep:!0}},methods:{addVote:function(t,e){this.parseVotes(t),t.votes+=e,this.$forceUpdate()},parseVotes:function(t){t.votes=parseInt(t.votes),t.votes&&!isNaN(t.votes)||(t.votes=0)},recalc:function(){this.results.calculated&&this.calcul()},calcul:function(){var t=this;f.forEach((function(e){return t.parseVotes(e)})),this.results=p()}}},h=m,_=(s("de97"),s("2877")),g=s("6544"),b=s.n(g),x=s("8336"),w=s("b0af"),y=s("99d9"),C=s("62ad"),j=s("a523"),S=s("0e8f"),V=s("adda"),O=s("a722"),M=s("da13"),E=s("5d23"),k=s("0fd9"),L=s("8654"),N=Object(_["a"])(h,i,o,!1,null,null,null),R=N.exports;b()(N,{VBtn:x["a"],VCard:w["a"],VCardText:y["a"],VCol:C["a"],VContainer:j["a"],VFlex:S["a"],VImg:V["a"],VLayout:O["a"],VListItem:M["a"],VListItemContent:E["a"],VRow:k["a"],VTextField:L["a"]});var A={name:"App",components:{Elections:R},data:function(){return{}}},q=A,I=s("7496"),P=s("40dc"),T=s("a75b"),F=s("2fa4"),$=Object(_["a"])(q,n,r,!1,null,null,null),U=$.exports;b()($,{VApp:I["a"],VAppBar:P["a"],VContent:T["a"],VSpacer:F["a"]});var W=s("f309");a["a"].use(W["a"]);var Q=new W["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:Q,render:function(t){return t(U)}}).$mount("#app")},"6b8f":function(t,e,s){t.exports=s.p+"img/Rogier.faa46fe0.jpg"},"710a":function(t,e,s){var a={"./Charrat.jpg":"35a2","./Marignane.jpg":"e092","./Rogier.jpg":"6b8f"};function n(t){var e=r(t);return s(e)}function r(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id="710a"},"8a88":function(t,e,s){},de97:function(t,e,s){"use strict";var a=s("8a88"),n=s.n(a);n.a},e092:function(t,e,s){t.exports=s.p+"img/Marignane.fd153a75.jpg"}});
//# sourceMappingURL=app.e7092d46.js.map