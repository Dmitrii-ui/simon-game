(function(e){function t(t){for(var o,r,a=t[0],c=t[1],d=t[2],u=0,m=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(m.length)m.shift()();return s.push.apply(s,d||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(o=!1)}o&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},i={app:0},s=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var d=0;d<a.length;d++)t(a[d]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0af4":function(e,t,n){e.exports=n.p+"media/s4.36d5a722.mp3"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),i={class:"container"},s={class:"simon"},r=Object(o["d"])("div",{class:"simon__header"},[Object(o["d"])("h1",{class:"simon__title"},"Simon The Game")],-1),a={class:"simon__content"};function c(e,t,n,c,d,l){var u=Object(o["g"])("simon-game"),m=Object(o["g"])("simon-options");return Object(o["e"])(),Object(o["c"])("div",i,[Object(o["d"])("div",s,[r,Object(o["d"])("div",a,[Object(o["d"])(u,{blocks:d.blocks,onBlockClick:l.onBlockClick},null,8,["blocks","onBlockClick"]),Object(o["d"])(m,{mode:d.mode,round:d.round,onGameStart:l.gameStart,onSetMode:l.setMode,disabled:d.isStarted},null,8,["mode","round","onGameStart","onSetMode","disabled"])])])])}function d(e,t,n,i,s,r){return Object(o["e"])(),Object(o["c"])("div",{class:"simon__game",onClick:t[1]||(t[1]=function(){return r.onBlockClick&&r.onBlockClick.apply(r,arguments)})},[(Object(o["e"])(!0),Object(o["c"])(o["a"],null,Object(o["f"])(n.blocks,(function(e){return Object(o["e"])(),Object(o["c"])("div",{key:e.id,"data-id":e.id,"data-sound":e.sound,class:e.classNames},null,10,["data-id","data-sound"])})),128))])}var l={emits:["block-click"],props:{blocks:{type:Array,required:!0}},methods:{onBlockClick:function(e){e.target.classList.contains("simon__block")&&this.$emit("block-click",+e.target.dataset.id,e.target.dataset.sound)}}};l.render=d;var u=l,m={class:"simon__options"},b={class:"simon__form form"},p={class:"options__title"},f=Object(o["d"])("p",{class:"options__title"},"Уровни сложности:",-1),h={class:"form__group"},v=Object(o["d"])("label",{for:"easy"},"Легкий",-1),_={class:"form__group"},j=Object(o["d"])("label",{for:"normal"},"Средний",-1),O={class:"form__group"},k=Object(o["d"])("label",{for:"hard"},"Сложный",-1);function g(e,t,n,i,s,r){return Object(o["e"])(),Object(o["c"])("div",m,[Object(o["d"])("button",{disabled:n.disabled,class:"btn btn-primary",onClick:t[1]||(t[1]=function(t){return e.$emit("game-start")})},"Старт",8,["disabled"]),Object(o["d"])("form",b,[Object(o["d"])("p",p,"Раунд по счету: "+Object(o["h"])(n.round),1),f,Object(o["d"])("div",h,[Object(o["j"])(Object(o["d"])("input",{id:"easy",class:"simon__option",value:"easy",type:"radio",name:"mode",onInput:t[2]||(t[2]=function(t){return e.$emit("set-mode","easy")}),"onUpdate:modelValue":t[3]||(t[3]=function(e){return n.mode=e})},null,544),[[o["i"],n.mode]]),v]),Object(o["d"])("div",_,[Object(o["j"])(Object(o["d"])("input",{id:"normal",class:"simon__option",value:"normal",type:"radio",name:"mode",onInput:t[4]||(t[4]=function(t){return e.$emit("set-mode","normal")}),"onUpdate:modelValue":t[5]||(t[5]=function(e){return n.mode=e})},null,544),[[o["i"],n.mode]]),j]),Object(o["d"])("div",O,[Object(o["j"])(Object(o["d"])("input",{id:"hard",class:"simon__option",value:"hard",type:"radio",name:"mode",onInput:t[6]||(t[6]=function(t){return e.$emit("set-mode","hard")}),"onUpdate:modelValue":t[7]||(t[7]=function(e){return n.mode=e})},null,544),[[o["i"],n.mode]]),k])])])}var y=n("ade3"),S=(n("a9e3"),Object(y["a"])({emits:["set-mode"],props:{mode:{type:String,required:!0},round:{type:Number,required:!0},disabled:{type:Boolean,required:!0}}},"emits",["game-start"]));S.render=g;var q=S,w=(n("d3b7"),n("4de4"),{getRandomNumber:function(e,t){var n=e+Math.random()*(t+1-e);return Math.floor(n)},setActive:function(e,t,n,o){var i=this;return new Promise((function(s,r){i.playSound(o),e[t].classNames.push("active"),setTimeout((function(){e[t].classNames=e[t].classNames.filter((function(e){return"active"!==e})),s()}),n)}))},playSound:function(e){new Audio(e).play()}}),x={data:function(){return{mode:"easy",neededSequence:[],sequence:[],intervalTime:{easy:1500,normal:1e3,hard:400},isDemonstrating:!1,round:1,interval:null,isStarted:!1,isEnd:!1,timeToDemonstrating:300,blocks:[{id:0,classNames:["simon__block simon__block--blue"],sound:n("eac2")},{id:1,classNames:["simon__block simon__block--red"],sound:n("63ff")},{id:2,classNames:["simon__block simon__block--yellow"],sound:n("da44")},{id:3,classNames:["simon__block simon__block--green"],sound:n("0af4")}]}},methods:{setMode:function(e){this.mode=e},gameStart:function(){this.isEnd=!1,this.isStarted=!0,this.demonstrate()},demonstrate:function(){var e=this;this.isDemonstrating=!0,this.interval=setInterval((function(){var t=w.getRandomNumber(0,e.blocks.length-1);e.neededSequence.push(t),w.setActive(e.blocks,t,e.timeToDemonstrating,e.blocks[t].sound),e.neededSequence.length>=e.round&&(clearInterval(e.interval),e.isDemonstrating=!1)}),this.intervalTime[this.mode])},onBlockClick:function(e,t){var n=this;this.isStarted&&!1===this.isDemonstrating&&w.setActive(this.blocks,e,this.timeToDemonstrating,t).then((function(){e===n.neededSequence[n.sequence.length]?(n.sequence.push(e),n.sequence.length===n.neededSequence.length&&n.nextRound()):n.endGame()}))},nextRound:function(){this.round++,this.neededSequence=[],this.sequence=[],this.interval=null,this.demonstrate()},endGame:function(){this.isStarted=!1,this.neededSequence=[],this.sequence=[],this.interval=null,this.isEnd=!0,alert("Вы проиграли спустя ".concat(this.round," раундов")),this.round=1}},components:{SimonGame:u,SimonOptions:q}};n("bd22");x.render=c;var N=x,M=Object(o["b"])(N);M.config.devtools=!0,M.mount("#app")},"63ff":function(e,t,n){e.exports=n.p+"media/s2.d2c4a2c4.mp3"},"6e52":function(e,t,n){},bd22:function(e,t,n){"use strict";n("6e52")},da44:function(e,t,n){e.exports=n.p+"media/s3.c1c96b44.mp3"},eac2:function(e,t,n){e.exports=n.p+"media/s1.99e50f7d.mp3"}});
//# sourceMappingURL=app.05d9a1a6.js.map