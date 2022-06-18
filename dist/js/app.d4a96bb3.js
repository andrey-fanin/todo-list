(function(){"use strict";var e={4469:function(e,t,o){var i=o(9963),n=o(6252),s=o(3577),a=o.p+"img/doge.bbcebd4d.png";const l={class:"header"},c={class:"container"},d=(0,n._)("div",{class:"logo"},"ToDo",-1),r={class:"form"},u=["placeholder"],h={class:"container"},p={class:"container container--mob"},v={key:0,class:"form form--mob"},m=["placeholder"],g={class:"",style:{"margin-bottom":"8px",display:"flex","align-items":"center"}},k={class:"container__remove-btns"},f={class:""},w={key:0,class:"flex"},_={class:""},b={key:0,class:"flex"},L=(0,n._)("span",null,"To do",-1),y={class:"task-num"},D={class:"task-list"},T=["onChange"],I=["onClick"],C=(0,n._)("img",{src:a,alt:"super dog",title:"puper dog"},null,-1),j=[C],x=(0,n._)("span",null,"Done",-1),O={class:"task-num"},A={class:"task-list complete-list"},S=["onChange"],H=["onClick"],U={key:0,class:"advices__wrap"},W=["innerHTML"];function q(e,t,o,a,C,q){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",l,[(0,n._)("div",c,[d,(0,n._)("div",r,[(0,n.wy)((0,n._)("input",{type:"text",placeholder:C.placeholder,"onUpdate:modelValue":t[0]||(t[0]=e=>C.handleInput=e),onKeypress:t[1]||(t[1]=(0,i.D2)(((...e)=>q.addTask&&q.addTask(...e)),["enter"]))},null,40,u),[[i.nr,C.handleInput,void 0,{trim:!0}]]),(0,n._)("button",{class:"btn",onClick:t[2]||(t[2]=(...e)=>q.addTask&&q.addTask(...e))},"Add new task")])])]),(0,n._)("div",h,[(0,n._)("div",p,[(0,n.Wm)(i.uT,{name:"rotateY"},{default:(0,n.w5)((()=>[C.isActive?((0,n.wg)(),(0,n.iD)("div",v,[(0,n.wy)((0,n._)("textarea",{type:"text",placeholder:C.placeholder,"onUpdate:modelValue":t[3]||(t[3]=e=>C.handleInput=e),onKeypress:t[4]||(t[4]=(0,i.D2)(((...e)=>q.addTask&&q.addTask(...e)),["enter"]))},null,40,m),[[i.nr,C.handleInput,void 0,{trim:!0}]]),(0,n._)("button",{class:"btn",onClick:t[5]||(t[5]=(...e)=>q.addTask&&q.addTask(...e))},"+")])):(0,n.kq)("",!0)])),_:1}),(0,n._)("div",g,[(0,n._)("button",{class:"btn btn--wide",onClick:t[6]||(t[6]=(...e)=>q.checkActive&&q.checkActive(...e))},(0,s.zw)(C.isActive?"close":"add new task"),1),(0,n.Wm)(i.uT,{name:"smoothFade"},{default:(0,n.w5)((()=>[C.isActive?((0,n.wg)(),(0,n.iD)("button",{key:0,class:"btn btn--transparent",onClick:t[7]||(t[7]=(...e)=>q.clearHandleInput&&q.clearHandleInput(...e))},"clear text")):(0,n.kq)("",!0)])),_:1})])]),(0,n._)("div",k,[(0,n._)("div",f,[(0,n.Wm)(i.uT,{name:"todoFade"},{default:(0,n.w5)((()=>[C.todoList.length?((0,n.wg)(),(0,n.iD)("div",w,[(0,n._)("button",{class:"btn-remove",onClick:t[8]||(t[8]=(...e)=>q.clearTodo&&q.clearTodo(...e))},"clear todo")])):(0,n.kq)("",!0)])),_:1})]),(0,n._)("div",_,[(0,n.Wm)(i.uT,{name:"completedFade"},{default:(0,n.w5)((()=>[C.doneList.length?((0,n.wg)(),(0,n.iD)("div",b,[(0,n._)("button",{class:"btn-remove",onClick:t[9]||(t[9]=(...e)=>q.clearDone&&q.clearDone(...e))},"clear done")])):(0,n.kq)("",!0)])),_:1})])]),(0,n._)("h2",null,[L,(0,n._)("span",y,[(0,n.Wm)(i.uT,{name:"numberScale"},{default:(0,n.w5)((()=>[((0,n.wg)(),(0,n.iD)("div",{key:C.todoList.length},(0,s.zw)(C.todoList.length),1))])),_:1})])]),(0,n._)("ul",D,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(C.todoList,((e,t)=>((0,n.wg)(),(0,n.iD)("li",{key:e.id},[(0,n._)("label",null,[(0,n._)("input",{type:"checkbox",onChange:e=>q.check(t,"active")},null,40,T),(0,n._)("span",null,(0,s.zw)(e.title),1)]),(0,n._)("button",{class:"btn-remove",onClick:e=>q.removeItem(t,"active")},"remove",8,I)])))),128))]),(0,n.Wm)(i.uT,{name:"smoothFade"},{default:(0,n.w5)((()=>[C.isDoge?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"doge--wrapper",onClick:t[10]||(t[10]=(...e)=>q.checkDoge&&q.checkDoge(...e))},j)):(0,n.kq)("",!0)])),_:1}),(0,n._)("h2",null,[x,(0,n._)("span",O,[(0,n.Wm)(i.uT,{name:"numberScale"},{default:(0,n.w5)((()=>[((0,n.wg)(),(0,n.iD)("div",{key:C.doneList.length},(0,s.zw)(C.doneList.length),1))])),_:1})])]),(0,n._)("ul",A,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(C.doneList,((e,t)=>((0,n.wg)(),(0,n.iD)("li",{key:e.id},[(0,n._)("label",null,[(0,n._)("input",{type:"checkbox",checked:"",onChange:e=>q.check(t,"completed")},null,40,S),(0,n._)("span",null,(0,s.zw)(e.title),1)]),(0,n._)("button",{class:"btn-remove",onClick:e=>q.removeItem(t,"completed")},"remove",8,H)])))),128))]),q.showAdvice?((0,n.wg)(),(0,n.iD)("div",U,[(0,n.Wm)(i.W3,{name:"smoothFade"},{default:(0,n.w5)((()=>[((0,n.wg)(),(0,n.iD)("div",{class:"advices__wrap-emoji",innerHTML:C.emoji,key:C.emoji},null,8,W)),((0,n.wg)(),(0,n.iD)("p",{class:"advices__wrap-text",key:C.advice},(0,s.zw)(C.advice),1))])),_:1})])):(0,n.kq)("",!0)])],64)}o(1703);var z={data(){return{todoList:this.getJSON().todoList||[],doneList:this.getJSON().doneList||[],id:0,placeholder:"type some text...",isActive:!1,handleInput:"",URLAdvice:"https://api.adviceslip.com/advice",URLEmoji:"https://emojihub.herokuapp.com/api/random/group_face_positive",advice:"",emoji:"",isDoge:!1}},methods:{getJSON(){return JSON.parse(localStorage.getItem("todoList"))},addTask(){this.handleInput&&(this.todoList.push({title:this.handleInput,id:this.id+=1}),this.handleInput="")},check(e,t){if("active"===t){const t=this.todoList.splice(e,1);this.doneList.push(...t)}else{const t=this.doneList.splice(e,1);this.todoList.push(...t)}},removeItem(e,t){const o="active"===t?this.todoList:this.doneList;o.splice(e,1)},clearTodo(){this.todoList=[]},clearDone(){this.doneList=[]},checkActive(){this.isActive=!this.isActive},checkDoge(){this.isDoge=!this.isDoge},clearHandleInput(){this.handleInput=""},async getUrl(e){this.emoji="",this.advice="";let{data:t}={};const o=await fetch(e);if(o.ok?t=await o.json():alert("Ошибка HTTP: "+o.status),!t)throw new Error("Совет пуст!");t?.slip?this.advice=t.slip.advice:t?.htmlCode&&(this.emoji=t.htmlCode[0])},saveInLocalStorage(){const e={};e.todoList=this.todoList,e.doneList=this.doneList,localStorage.setItem("todoList",JSON.stringify(e))}},watch:{todoList:{handler(){this.saveInLocalStorage()},deep:!0},doneList:{handler(){this.saveInLocalStorage()},deep:!0},checkId:function(e){e&&(this.placeholder="")},showAdvice:function(e){e&&(this.getUrl(this.URLEmoji),this.getUrl(this.URLAdvice))},getDoge:function(e){e&&(this.isDoge=!0)}},computed:{checkId(){return this.id>0},getDoge(){return this.id>5},showAdvice(){return!this.todoList.length&&!this.doneList.length&&this.checkId}}},F=o(3744);const J=(0,F.Z)(z,[["render",q]]);var N=J;(0,i.ri)(N).mount("#app")}},t={};function o(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,o),s.exports}o.m=e,function(){var e=[];o.O=function(t,i,n,s){if(!i){var a=1/0;for(r=0;r<e.length;r++){i=e[r][0],n=e[r][1],s=e[r][2];for(var l=!0,c=0;c<i.length;c++)(!1&s||a>=s)&&Object.keys(o.O).every((function(e){return o.O[e](i[c])}))?i.splice(c--,1):(l=!1,s<a&&(a=s));if(l){e.splice(r--,1);var d=n();void 0!==d&&(t=d)}}return t}s=s||0;for(var r=e.length;r>0&&e[r-1][2]>s;r--)e[r]=e[r-1];e[r]=[i,n,s]}}(),function(){o.d=function(e,t){for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p="/todo/"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,s,a=i[0],l=i[1],c=i[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(c)var r=c(o)}for(t&&t(i);d<a.length;d++)s=a[d],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(r)},i=self["webpackChunktodo"]=self["webpackChunktodo"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(4469)}));i=o.O(i)})();
//# sourceMappingURL=app.d4a96bb3.js.map