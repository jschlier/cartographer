(function(){var e={5640:function(e,t,n){"use strict";var s=n(9242),r=n(3396),i=n(7139);const c={class:"hello"},o=(0,r._)("h2",null,"Decrees",-1),a=(0,r._)("h2",null,"Season",-1),p=(0,r._)("h2",null,"Played Cards",-1),u=["disabled"],g=["disabled"],d={class:"played-cards"};function l(e,t,n,s,l,f){const h=(0,r.up)("card-display");return(0,r.wg)(),(0,r.iD)("div",c,[o,(0,r._)("div",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(l.decrees,((e,t)=>((0,r.wg)(),(0,r.iD)("p",{key:t,class:(0,i.C_)({"decree--active":l.currentSeason.decrees.includes(t)})},[(0,r.Uk)((0,i.zw)(t)+": ",1),(0,r.Wm)(h,{card:e},null,8,["card"])],2)))),128))]),a,(0,r._)("h3",null,"Current season: "+(0,i.zw)(l.currentSeason.name),1),(0,r._)("p",null,"Remaining Energy: "+(0,i.zw)(Math.max(l.remainingEnergy,0)),1),(0,r._)("p",null,[(0,r.Uk)("Current decrees: "),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(l.currentSeason.decrees,((e,t)=>((0,r.wg)(),(0,r.iD)("span",{class:"decree",key:t},(0,i.zw)(e),1)))),128))]),p,(0,r._)("p",null,[(0,r._)("button",{onClick:t[0]||(t[0]=e=>f.drawCard()),disabled:l.remainingEnergy<1},"Draw Card",8,u),(0,r._)("button",{onClick:t[1]||(t[1]=e=>f.nextSeason()),disabled:l.remainingEnergy>0||0===l.seasons.length},"Next Season",8,g),(0,r._)("button",{onClick:t[2]||(t[2]=e=>f.newGame())},"New Game")]),(0,r._)("div",d,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(l.playedCards,((e,t)=>((0,r.wg)(),(0,r.j4)(h,{key:t,card:e,index:t},null,8,["card","index"])))),128))])])}n(7658);var f=n(7327);class h{constructor(e,t){this.id=e,this.name=t,this.filePath="../assets/cards/"+e+".png"}}class j extends h{constructor(e,t,n,s){super(e,t),this.decrees=n,this.units=s}}class m extends h{constructor(e,t,n){super(e,t),this.description=n}}class w extends h{constructor(e,t,n=0){super(e,t),this.costs=n}}class x extends w{constructor(e,t){super(e,t)}}class b{constructor(){(0,f.Z)(this,"currentIndex",0),(0,f.Z)(this,"cards",{ambushes:[new x(1,"Goblinattacke"),new x(2,"Grottenschratüberfall"),new x(3,"Koboldansturm"),new x(4,"Gnollangriff")],explorations:[new w(5,"Tempelruinen"),new w(6,"Verfallener Außenposten"),new w(7,"Großer Strom",1),new w(8,"Ackerland",1),new w(9,"Weiler",1),new w(10,"Vergessener Wald",1),new w(11,"Hinterlandbach",2),new w(12,"Gehöft",2),new w(13,"Obsthain",2),new w(14,"Baumwipfeldorf",2),new w(15,"Sumpf",2),new w(16,"Fischerdorf",2),new w(17,"Splitterland")],seasons:[new j(18,"Frühling",["A","B"],8),new j(19,"Sommer",["B","C"],8),new j(20,"Herbst",["C","D"],7),new j(21,"Winter",["D","A"],6)],decrees:{forest:[new m(26,"Schildwald"),new m(27,"Grünfläche"),new m(28,"Düsterwald"),new m(29,"Pfad des Waldes")],waterAndFields:[new m(30,"Bewässerungskanal"),new m(31,"Tal der Magier"),new m(32,"Goldener Kornspeicher"),new m(33,"Ausgedehnte Strände")],villages:[new m(34,"Bastionen in der Wildnis"),new m(35,"Metropole"),new m(36,"Schillernde Ebene"),new m(37,"Schild des Reichs")],area:[new m(38,"Grenzland"),new m(39,"Unzugängliche Baronie"),new m(40,"Die Lange Straße"),new m(41,"Die Kessel")]}}),this.cards.ambushes=this.shuffle(this.cards.ambushes)}shuffle(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1)),s=e[t];e[t]=e[n],e[n]=s}return e}getSeasons(){return this.cards.seasons}getRandomDecrees(){let e=[];for(const t of Object.values(this.cards.decrees))e.push(t[Math.random()*t.length>>0]);return e=this.shuffle(e),{A:e.shift(),B:e.shift(),C:e.shift(),D:e.shift()}}nextSeason(){return this.currentIndex=0,this.cards.explorations.push(this.cards.ambushes.pop()),this.shuffle(this.cards.explorations)}draw(){const e=this.currentIndex++,t=this.cards.explorations[e];return t instanceof x&&this.cards.explorations.splice(e,1),t}}const v=["src"],_={class:"modal card__detail"},k={class:"modal__header"},y={class:"card__title"},D={key:0,class:"card__costs"},C={class:"modal__content"},S=["src"];function O(e,t,s,c,o,a){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",{class:"card",style:(0,i.j5)({top:-230*s.index+"px"})},[(0,r._)("span",{class:"clickable",onClick:t[0]||(t[0]=e=>o.showDetail=!0)},[(0,r._)("img",{src:n(7940)("./"+s.card.id+".jpg")},null,8,v)])],4),o.showDetail?((0,r.wg)(),(0,r.j4)(r.lR,{key:0,to:"body"},[(0,r._)("div",{class:"modal-backdrop clickable",onClick:t[1]||(t[1]=e=>o.showDetail=!1)}),(0,r._)("div",_,[(0,r._)("div",k,[(0,r._)("span",{class:"clickable",onClick:t[2]||(t[2]=e=>o.showDetail=!1)},"X"),(0,r._)("span",y,(0,i.zw)(s.card.name),1),"undefined"!==typeof s.card.costs?((0,r.wg)(),(0,r.iD)("span",D,"("+(0,i.zw)(s.card.costs)+")",1)):(0,r.kq)("",!0)]),(0,r._)("div",C,[(0,r._)("img",{class:"",alt:"Example Wertungen",src:n(7940)("./"+s.card.id+".jpg")},null,8,S)])])])):(0,r.kq)("",!0)],64)}var E={name:"CardDisplay",props:{msg:String,index:Number,card:{type:h}},data(){return{showDetail:!1}},created(){}},G=n(89);const z=(0,G.Z)(E,[["render",O],["__scopeId","data-v-42b12fac"]]);var M=z,A={components:{CardDisplay:M},data(){return{currentSeason:{name:""},seasons:[],decrees:{},cardDeck:{},playedCards:[],remainingEnergy:0,currentIndex:0}},created(){this.newGame()},methods:{newGame(){this.cardDeck=new b,this.decrees=this.cardDeck.getRandomDecrees(),this.seasons=this.cardDeck.getSeasons(),this.nextSeason()},drawCard(){const e=this.cardDeck.draw();this.remainingEnergy-=e.costs??0,this.playedCards.push(e)},nextSeason(){this.cardDeck.nextSeason(),this.currentSeason=this.seasons.shift(),this.remainingEnergy=this.currentSeason.units,this.playedCards=[]}}};const B=(0,G.Z)(A,[["render",l]]);var W=B;(0,s.ri)(W).mount("#app")},7940:function(e,t,n){var s={"./1.jpg":9060,"./10.jpg":7571,"./11.jpg":523,"./12.jpg":4148,"./13.jpg":3948,"./14.jpg":5113,"./15.jpg":3722,"./16.jpg":2157,"./17.jpg":3447,"./18.jpg":659,"./19.jpg":3617,"./2.jpg":812,"./20.jpg":5081,"./21.jpg":4123,"./22.jpg":1777,"./23.jpg":6394,"./24.jpg":6768,"./25.jpg":558,"./26.jpg":7997,"./27.jpg":8530,"./28.jpg":5764,"./29.jpg":9620,"./3.jpg":3208,"./30.jpg":9515,"./31.jpg":34,"./32.jpg":8978,"./33.jpg":8223,"./34.jpg":4192,"./35.jpg":9121,"./36.jpg":1116,"./37.jpg":6805,"./38.jpg":4078,"./39.jpg":6452,"./4.jpg":8267,"./40.jpg":3263,"./41.jpg":5925,"./5.jpg":4623,"./6.jpg":6124,"./7.jpg":9328,"./8.jpg":8682,"./9.jpg":9976};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=i,e.exports=r,r.id=7940},9060:function(e,t,n){"use strict";e.exports=n.p+"img/1.fe4673a0.jpg"},7571:function(e,t,n){"use strict";e.exports=n.p+"img/10.cc79aaaf.jpg"},523:function(e,t,n){"use strict";e.exports=n.p+"img/11.5f6bc0b4.jpg"},4148:function(e,t,n){"use strict";e.exports=n.p+"img/12.f46e408f.jpg"},3948:function(e,t,n){"use strict";e.exports=n.p+"img/13.88d717a4.jpg"},5113:function(e,t,n){"use strict";e.exports=n.p+"img/14.4f2fcb4c.jpg"},3722:function(e,t,n){"use strict";e.exports=n.p+"img/15.11e72441.jpg"},2157:function(e,t,n){"use strict";e.exports=n.p+"img/16.9e52d98f.jpg"},3447:function(e,t,n){"use strict";e.exports=n.p+"img/17.69e49d00.jpg"},659:function(e,t,n){"use strict";e.exports=n.p+"img/18.b2ca2dc9.jpg"},3617:function(e,t,n){"use strict";e.exports=n.p+"img/19.7977fdf7.jpg"},812:function(e,t,n){"use strict";e.exports=n.p+"img/2.2f789670.jpg"},5081:function(e,t,n){"use strict";e.exports=n.p+"img/20.7e9e18b9.jpg"},4123:function(e,t,n){"use strict";e.exports=n.p+"img/21.e5e373be.jpg"},1777:function(e,t,n){"use strict";e.exports=n.p+"img/22.79a8f3ae.jpg"},6394:function(e,t,n){"use strict";e.exports=n.p+"img/23.dacc4d69.jpg"},6768:function(e,t,n){"use strict";e.exports=n.p+"img/24.fed1796a.jpg"},558:function(e,t,n){"use strict";e.exports=n.p+"img/25.fc41abe8.jpg"},7997:function(e,t,n){"use strict";e.exports=n.p+"img/26.0fb8f310.jpg"},8530:function(e,t,n){"use strict";e.exports=n.p+"img/27.83e803ff.jpg"},5764:function(e,t,n){"use strict";e.exports=n.p+"img/28.44c9aae5.jpg"},9620:function(e,t,n){"use strict";e.exports=n.p+"img/29.bc6c9f4d.jpg"},3208:function(e,t,n){"use strict";e.exports=n.p+"img/3.245ed34e.jpg"},9515:function(e,t,n){"use strict";e.exports=n.p+"img/30.0fb2a573.jpg"},34:function(e,t,n){"use strict";e.exports=n.p+"img/31.ab101163.jpg"},8978:function(e,t,n){"use strict";e.exports=n.p+"img/32.c0d07482.jpg"},8223:function(e,t,n){"use strict";e.exports=n.p+"img/33.563bbf24.jpg"},4192:function(e,t,n){"use strict";e.exports=n.p+"img/34.8fecccfa.jpg"},9121:function(e,t,n){"use strict";e.exports=n.p+"img/35.436df91f.jpg"},1116:function(e,t,n){"use strict";e.exports=n.p+"img/36.23411279.jpg"},6805:function(e,t,n){"use strict";e.exports=n.p+"img/37.1018b48b.jpg"},4078:function(e,t,n){"use strict";e.exports=n.p+"img/38.768343e4.jpg"},6452:function(e,t,n){"use strict";e.exports=n.p+"img/39.a609f3bb.jpg"},8267:function(e,t,n){"use strict";e.exports=n.p+"img/4.98358299.jpg"},3263:function(e,t,n){"use strict";e.exports=n.p+"img/40.3b682ee4.jpg"},5925:function(e,t,n){"use strict";e.exports=n.p+"img/41.cd2a2053.jpg"},4623:function(e,t,n){"use strict";e.exports=n.p+"img/5.45d2c1bb.jpg"},6124:function(e,t,n){"use strict";e.exports=n.p+"img/6.099f8610.jpg"},9328:function(e,t,n){"use strict";e.exports=n.p+"img/7.e8170c74.jpg"},8682:function(e,t,n){"use strict";e.exports=n.p+"img/8.d73f534f.jpg"},9976:function(e,t,n){"use strict";e.exports=n.p+"img/9.6b32752d.jpg"}},t={};function n(s){var r=t[s];if(void 0!==r)return r.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,s,r,i){if(!s){var c=1/0;for(u=0;u<e.length;u++){s=e[u][0],r=e[u][1],i=e[u][2];for(var o=!0,a=0;a<s.length;a++)(!1&i||c>=i)&&Object.keys(n.O).every((function(e){return n.O[e](s[a])}))?s.splice(a--,1):(o=!1,i<c&&(c=i));if(o){e.splice(u--,1);var p=r();void 0!==p&&(t=p)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[s,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/cartographer/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,i,c=s[0],o=s[1],a=s[2],p=0;if(c.some((function(t){return 0!==e[t]}))){for(r in o)n.o(o,r)&&(n.m[r]=o[r]);if(a)var u=a(n)}for(t&&t(s);p<c.length;p++)i=c[p],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},s=self["webpackChunkcartographer"]=self["webpackChunkcartographer"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(5640)}));s=n.O(s)})();
//# sourceMappingURL=app.038f7233.js.map