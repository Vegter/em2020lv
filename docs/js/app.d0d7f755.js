(function(t){function e(e){for(var n,i,o=e[0],l=e[1],u=e[2],v=0,f=[];v<o.length;v++)i=o[v],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],n=!0,o=1;o<s.length;o++){var l=s[o];0!==r[l]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=s[0]))}return t}var n={},r={app:0},a=[];function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=n,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/em2020lv/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[s("div",{staticClass:"d-flex align-center"},[t._v(" Elections municipales 2020 ")]),s("v-spacer"),s("div",{staticClass:"align-left"},[t._v(" La Verdière ")])],1),s("v-content",[s("elections")],1)],1)},a=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",{attrs:{"text-center":"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("h2",[t._v("Les Suffrages")]),s("v-card",{staticClass:"mx-auto",attrs:{tile:""}},[s("v-row",{staticClass:"mr-2 ml-2"},t._l(t.listes,(function(e){return s("v-col",{key:e.name,attrs:{sm:"4",cols:"12"}},[s("div",{staticClass:"text-left"},[t._v(" Liste "+t._s(e.name)+" "),e.percentage<.05?s("span"):t.results.winner?s("span",{staticClass:"text-no-wrap"},[t._v(" ("+t._s(e.prime+e.seats+e.restSeats)+" sièges) ")]):t._e()]),s("v-text-field",{attrs:{rules:t.positive},model:{value:e.votes,callback:function(s){t.$set(e,"votes",s)},expression:"list.votes"}}),s("div",[s("v-btn",{attrs:{tabindex:"-1"},on:{click:function(s){return t.addVote(e,1)}}},[t._v("+")]),s("v-btn",{attrs:{tabindex:"-1"},on:{click:function(s){return t.addVote(e,-1)}}},[t._v("-")])],1)],1)})),1)],1)],1),s("v-flex",{staticClass:"mt-5 mb-5"},[s("v-btn",{on:{click:function(e){return t.calcul()}}},[t._v("Calcul")])],1),t.results.error?s("v-flex",{attrs:{xs12:""}},[s("v-card",{staticClass:"mx-auto mb-2",attrs:{tile:""}},[s("v-card-text",[s("h3",{staticClass:"headline font-weight-bold mb-3"},[t._v(t._s(t.results.error))])])],1)],1):t.results.winner?s("v-flex",{attrs:{xs12:""}},[s("v-card",{staticClass:"mx-auto mb-2",attrs:{tile:""}},[s("v-card-text",[s("h3",{staticClass:"headline font-weight-bold mb-3"},[t._v("Sièges et Suffrages")]),s("div",[t._v(" "+t._s(t.results.totalSeats)+" sièges à attribuer ")]),s("div",[t._v(" "+t._s(t.results.totalVotes)+" suffrages exprimés, donc une majorité absolue de ("+t._s(t.results.totalVotes)+"/2) + 1 = "+t._s(t.results.absoluteMajority)+" voix ")])])],1),s("v-card",{staticClass:"mx-auto mb-2",attrs:{tile:""}},[s("v-card-text",[s("h3",{staticClass:"headline font-weight-bold mb-3"},[t._v("Seuil électoral")]),s("p",[t._v(" Les sièges sont répartis à la représentation proportionnelle à la plus forte moyenne entre toutes les listes ayant obtenu plus de 5% ("+t._s(Math.ceil(.05*t.results.totalVotes))+") des suffrages exprimés, en fonction du nombre de suffrage obtenus. ")]),t._l(t.listes,(function(e){return s("div",{key:e.name},[s("h4",[t._v("Liste "+t._s(e.name))]),t._v(" "+t._s(e.votes)+" ("+t._s((100*e.percentage).toFixed(2))+"%) ")])}))],2)],1),s("v-card",{staticClass:"mx-auto mb-2",attrs:{tile:""}},[s("v-card-text",[s("h3",{staticClass:"headline font-weight-bold mb-3"},[t._v("Prime Majoritaire")]),s("div",[t._v(" La prime majoritaire donne "+t._s(t.results.winner.prime)+" sièges à la liste "+t._s(t.results.winner.name)+". Ce qui laisse "+t._s(t.results.remainingSeats)+" sièges à pourvoir. ")])])],1),s("v-card",{staticClass:"mx-auto mb-2",attrs:{tile:""}},[s("v-card-text",[s("h3",{staticClass:"headline font-weight-bold mb-3"},[t._v("Quotient électoral")]),s("div",[t._v(" On calcule le quotient électoral : "+t._s(t.results.totalVotes)+"/"+t._s(t.results.remainingSeats)+" = "+t._s(t.results.q.toFixed(2))+" ")])])],1),s("v-card",{staticClass:"mx-auto mb-2",attrs:{tile:""}},[s("v-card-text",[s("h3",{staticClass:"headline font-weight-bold mb-3"},[t._v("Plus forte moyenne")]),s("div",[t._v(" Attribution à la plus forte moyenne pour chaque liste ")]),t._l(t.results.lists,(function(e){return s("v-list-item",{key:e.name},[s("v-list-item-content",[s("v-row",{attrs:{justify:"center"}},[s("v-col",[s("h4",[t._v("Liste "+t._s(e.name))]),s("div",[t._v(" Q: "+t._s(e.votes)+"/"+t._s(t.results.q.toFixed(2))+" = "+t._s(e.avg.toFixed(2))+" soit "+t._s(e.seats)+" sièges ")])])],1)],1)],1)})),s("div",[t._v(" Ce qui laisse "+t._s(t.results.restSeats)+" sièges à pourvoir. ")])],2)],1),t._l(t.results.restRounds,(function(e,n){return s("v-card",{key:n,staticClass:"mx-auto mb-2",attrs:{tile:""}},[s("v-card-text",[s("h3",{staticClass:"headline font-weight-bold mb-3"},[t._v("Attribution du siège "+t._s(n+1))]),s("div",[t._v(" Attribution à la plus forte moyenne pour chaque liste ")]),t._l(t.results.lists,(function(e){return s("v-list-item",{key:e.name},[s("v-list-item-content",[s("v-row",{attrs:{justify:"center"}},[s("v-col",[s("h4",[t._v("Liste "+t._s(e.name))]),s("div",[t._v(" Q: "+t._s(e.votes)+"/"+t._s(e.rounds[n].roundSeats)+" + 1 = "+t._s(e.rounds[n].avg.toFixed(2))+" ")])])],1)],1)],1)})),s("div",[t._v(" On attribue 1 nouveau siège à la liste "+t._s(e.winner.name)+" qui a la plus forte moyenne. ")])],2)],1)})),s("v-card",{staticClass:"mx-auto",attrs:{tile:""}},[s("v-card-text",[s("h3",{staticClass:"headline font-weight-bold mb-3"},[t._v("Resultats")]),t._l(t.results.lists,(function(e){return s("div",{key:e.name},[t._v(" "+t._s(e.name)+" "+t._s(e.prime+e.seats+e.restSeats)+" sièges ")])}))],2)],1)],2):t._e()],1)],1)},o=[],l=(s("4de4"),s("4160"),s("d81d"),s("fb6a"),s("b65f"),s("159b"),s("53ca")),u=s("2909"),c=19,v=["Marignane","Charrat","Rogier"],f=v.map((function(t){return{name:t,votes:null}}));function d(t){window.console.log(t)}function p(){var t={totalSeats:null,totalVotes:null,absoluteMajority:null,winner:null,remainingSeats:null,q:null,lists:null,nRounds:null,restRounds:[]};t.winner=null,t.error=null,f.forEach((function(t){return t.votes=parseInt(t.votes)}));var e=0;f.forEach((function(t){return e+=t.votes})),f.forEach((function(t){t.percentage=t.votes/e}));var s=f.slice(),n=s.filter((function(t){return t.percentage>=.05})),r=Math.max.apply(Math,Object(u["a"])(n.map((function(t){return t.votes})))),a=n.filter((function(t){return t.votes===r}));if(a.length>1)return d("NO WINNER"),t.winner=null,t.error="Aucun gagnant clair",t;var i=a[0],o=Math.round(c/2);i.prime=o,n.forEach((function(t){t.isWinner=t===i,t.prime=t===i?o:0}));var v=c-o,p=e/v,m=v;n.forEach((function(t){t.avg=t.votes/p,t.seats=Math.trunc(t.avg),m-=t.seats}));var h=new Array(m);n.forEach((function(t){t.rounds=new Array(m),t.restSeats=0}));var _=m,b=0,g=function(){n.forEach((function(t){var e=t.seats+t.restSeats;t.rounds[b]={roundSeats:e,avg:t.votes/(e+1)}}));var e=Math.max.apply(Math,Object(u["a"])(n.map((function(t){return t.rounds[b].avg})))),s=n.filter((function(t){return t.rounds[b].avg===e}));if(s.length>1){var r=Math.max.apply(Math,Object(u["a"])(s.map((function(t){return t.votes}))));if(s=s.filter((function(t){return t.votes===r})),s.length>1&&b===m-1)return d("UNKNOWN LAST RESTSEAT"),t.winner=null,t.error="siège résiduel inconnu",{v:t}}h[b]={winner:s[0]};var a=s[0];n.forEach((function(t){t.rounds[b].isWinner=t===a,t.rounds[b].seats=t===a?1:0})),a.restSeats+=1,b++};while(b<m){var x=g();if("object"===Object(l["a"])(x))return x.v}return d(n),t.totalSeats=c,t.totalVotes=e,t.absoluteMajority=Math.trunc(e/2+1),t.winner=i,t.remainingSeats=v,t.restSeats=m,t.q=p,t.lists=n,t.restRounds=h,t.nRounds=_,t}var m={name:"Elections",data:function(){return{positive:[function(t){return!isNaN(parseInt(t))||"valeur invalide"},function(t){return parseInt(t)>=0||"value negative"}],listes:f,seats:c,results:{}}},watch:{listes:{handler:function(){this.recalc()},deep:!0}},methods:{addVote:function(t,e){this.parseVotes(t),t.votes+=e,this.$forceUpdate()},parseVotes:function(t){t.votes=parseInt(t.votes),t.votes&&!isNaN(t.votes)||(t.votes=0)},recalc:function(){this.results.winner&&this.calcul()},calcul:function(){var t=this;f.forEach((function(e){return t.parseVotes(e)})),this.results=p()}}},h=m,_=s("2877"),b=s("6544"),g=s.n(b),x=s("8336"),w=s("b0af"),y=s("99d9"),C=s("62ad"),S=s("a523"),V=s("0e8f"),j=s("a722"),O=s("da13"),M=s("5d23"),E=s("0fd9"),k=s("8654"),L=Object(_["a"])(h,i,o,!1,null,null,null),A=L.exports;g()(L,{VBtn:x["a"],VCard:w["a"],VCardText:y["a"],VCol:C["a"],VContainer:S["a"],VFlex:V["a"],VLayout:j["a"],VListItem:O["a"],VListItemContent:M["a"],VRow:E["a"],VTextField:k["a"]});var q={name:"App",components:{Elections:A},data:function(){return{}}},N=q,R=s("7496"),P=s("40dc"),T=s("a75b"),F=s("2fa4"),I=Object(_["a"])(N,r,a,!1,null,null,null),$=I.exports;g()(I,{VApp:R["a"],VAppBar:P["a"],VContent:T["a"],VSpacer:F["a"]});var W=s("f309");n["a"].use(W["a"]);var Q=new W["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:Q,render:function(t){return t($)}}).$mount("#app")}});
//# sourceMappingURL=app.d0d7f755.js.map