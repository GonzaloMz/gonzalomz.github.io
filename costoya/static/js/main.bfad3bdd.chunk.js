(this["webpackJsonpedunet-demo"]=this["webpackJsonpedunet-demo"]||[]).push([[0],{22:function(e,t,n){e.exports=n(35)},27:function(e,t,n){},28:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(13),i=n.n(r),o=(n(27),n(5)),s=(n(28),n(20)),u=n(21),l=n(17),h=function e(t){var n,c=this;Object(l.a)(this,e),this.setSelectedScreen=function(e){var t=e.replace(/[_]+[0-9]+/g,""),n=c.viewBoxMap[e]?c.viewBoxMap[e]:c.viewBoxMap[t];c.svgNode.setAttribute("viewBox",n)},this.getViewBoxMap=function(){return c.viewBoxMap},t.setAttribute("width","100%"),t.setAttribute("height",""),this.svgNode=t,this.viewBoxMap=function(e){var t=e.querySelectorAll("rect[id^=_P_]"),n={};return t.forEach((function(e){var t=e.getAttribute("id");n[t]="".concat(e.getAttribute("x")," ").concat(e.getAttribute("y")," ").concat(e.getAttribute("width")," ").concat(e.getAttribute("height"))})),n}(this.svgNode),this.viewBoxMap._P_HOME&&this.svgNode.setAttribute("viewBox",this.viewBoxMap._P_HOME),(n=this).svgNode.querySelectorAll("g[id^=_B_]").forEach((function(e){var t=e.getAttribute("id").replace("_B_","_P_");e.addEventListener("click",(function(){n.setSelectedScreen(t)}))}))};var v=function(e){new h(e)},d=function(e,t){e&&(console.log(t),console.error(e))},f=function(){new URLSearchParams(Object(o.f)().search);var e=new URLSearchParams(Object(o.f)().search).get("flow");return e||(e="HOME V1.svg"),e="../costoya-screens/".concat(e,".svg"),a.a.createElement(u.a,{beforeInjection:v,afterInjection:d,src:e,className:"fadeIn animated w-100"})};var g=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(s.a,null,a.a.createElement(o.c,null,a.a.createElement(o.a,{path:"/costoya",component:f}))))};i.a.render(a.a.createElement(g,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.bfad3bdd.chunk.js.map