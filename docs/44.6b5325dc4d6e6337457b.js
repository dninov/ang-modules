(self.webpackChunkmodules=self.webpackChunkmodules||[]).push([[44],{44:(n,t,e)=>{"use strict";e.r(t),e.d(t,{ModsModule:()=>C});var o=e(583),i=e(353),c=e(639),s=e(865);const l=function(n){return{active:n}};function r(n,t){if(1&n){const n=c.EpF();c.ynx(0),c.TgZ(1,"div",2),c.NdJ("click",function(){const t=c.CHM(n).index;return c.oxw().onClick(t)}),c._UZ(2,"i",3),c._uU(3),c.qZA(),c.TgZ(4,"div",4),c.TgZ(5,"p"),c._uU(6),c.qZA(),c.qZA(),c.BQk()}if(2&n){const n=t.$implicit,e=t.index,o=c.oxw();c.xp6(1),c.Q6J("ngClass",c.VKq(4,l,e===o.openedItemIndex)),c.xp6(2),c.hij(" ",n.title," "),c.xp6(1),c.Q6J("ngClass",c.VKq(6,l,e===o.openedItemIndex)),c.xp6(2),c.hij(" ",n.content," ")}}let d=(()=>{class n{constructor(){this.items=[],this.openedItemIndex=0}ngOnInit(){}onClick(n){this.openedItemIndex=n===this.openedItemIndex?-1:n}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=c.Xpm({type:n,selectors:[["app-accordion"]],inputs:{items:"items"},decls:2,vars:1,consts:[[1,"ui","accordion","styled"],[4,"ngFor","ngForOf"],[1,"title",3,"ngClass","click"],[1,"dropdown","icon"],[1,"content",3,"ngClass"]],template:function(n,t){1&n&&(c.TgZ(0,"div",0),c.YNc(1,r,7,8,"ng-container",1),c.qZA()),2&n&&(c.xp6(1),c.Q6J("ngForOf",t.items))},directives:[o.sg,o.mk],styles:[""]}),n})();const a=[[["","modalTitle",""]],"*",[["","modalFooter",""]]],u=["[modalTitle]","*","[modalFooter]"];let p=(()=>{class n{constructor(n){this.el=n,this.close=new c.vpe}ngOnInit(){document.body.appendChild(this.el.nativeElement)}ngOnDestroy(){this.el.nativeElement.remove()}onClose(){this.close.emit()}}return n.\u0275fac=function(t){return new(t||n)(c.Y36(c.SBq))},n.\u0275cmp=c.Xpm({type:n,selectors:[["app-modal"]],outputs:{close:"close"},ngContentSelectors:u,decls:13,vars:0,consts:[[1,"ui","dimmer","visible","active",3,"click"],[1,"ui","modal","visible","active",3,"click"],[1,"close","icon",3,"click"],[1,"header"],[1,"content"],[1,"actions","actions-default"],[1,"ui","button",3,"click"],[1,"actions"]],template:function(n,t){1&n&&(c.F$t(a),c.TgZ(0,"div",0),c.NdJ("click",function(){return t.onClose()}),c.TgZ(1,"div",1),c.NdJ("click",function(n){return n.stopPropagation()}),c.TgZ(2,"i",2),c.NdJ("click",function(){return t.onClose()}),c.qZA(),c.TgZ(3,"div",3),c.Hsn(4),c.qZA(),c.TgZ(5,"div",4),c.TgZ(6,"p"),c.Hsn(7,1),c.qZA(),c.qZA(),c.TgZ(8,"div",5),c.TgZ(9,"button",6),c.NdJ("click",function(){return t.onClose()}),c._uU(10," OK "),c.qZA(),c.qZA(),c.TgZ(11,"div",7),c.Hsn(12,2),c.qZA(),c.qZA(),c.qZA())},styles:[".actions-default[_ngcontent-%COMP%], .actions[_ngcontent-%COMP%]:empty{display:none}.actions[_ngcontent-%COMP%]:empty + .actions-default[_ngcontent-%COMP%]{display:block}"]}),n})();function m(n,t){if(1&n){const n=c.EpF();c.TgZ(0,"app-modal",3),c.NdJ("close",function(){return c.CHM(n),c.oxw().onClick()}),c.TgZ(1,"div",4),c._uU(2,"I am all-seeing"),c.qZA(),c.TgZ(3,"p"),c._uU(4,"This is a way to failure of the soul"),c.qZA(),c.ynx(5,5),c.TgZ(6,"button",0),c.NdJ("click",function(){return c.CHM(n),c.oxw().onClick()}),c._uU(7,"Close"),c.qZA(),c.BQk(),c.qZA()}}const g=[{path:"",component:(()=>{class n{constructor(){this.modalOpen=!1,this.items=[{title:"Why am I going to die?",content:"Continue working!"},{title:"What is the purpose of life?",content:"Continue working!"},{title:"Will I ever be happy?",content:"Continue working!"}]}ngOnInit(){}onClick(){this.modalOpen=!this.modalOpen}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=c.Xpm({type:n,selectors:[["app-mods-home"]],decls:8,vars:2,consts:[[1,"ui","button",3,"click"],[3,"close",4,"ngIf"],[3,"items"],[3,"close"],["modalTitle",""],["modalFooter",""]],template:function(n,t){1&n&&(c.TgZ(0,"app-divider"),c._uU(1,"Modal Component"),c.qZA(),c.TgZ(2,"button",0),c.NdJ("click",function(){return t.onClick()}),c._uU(3,"Show Modal"),c.qZA(),c.YNc(4,m,8,0,"app-modal",1),c.TgZ(5,"app-divider"),c._uU(6,"Accordion Component"),c.qZA(),c._UZ(7,"app-accordion",2)),2&n&&(c.xp6(4),c.Q6J("ngIf",t.modalOpen),c.xp6(3),c.Q6J("items",t.items))},directives:[s.X,o.O5,d,p],styles:[""]}),n})()}];let Z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[i.Bz.forChild(g)],i.Bz]}),n})();var f=e(466);let C=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[o.ez,Z,f.m]]}),n})()}}]);