(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{ERoZ:function(t,e,n){"use strict";n.d(e,"a",(function(){return C}));var r=n("Fcif"),i=n("aNYv"),o=n("dV/x"),c=n("mXGw"),a=n("vQWt"),u=n("PIrp"),l=n("zNIJ"),s=c.createElement,f=c.memo((function(t){var e=t.height,n=t.width,r=t.count,i=c.useMemo((function(){return{height:e,width:n,zIndex:-1,opacity:0,pointerEvents:"none"}}),[n,e,r]);return s("div",{"data-name":"SpacePlaceholder",style:i})})),d=n("Zeiy"),m=c.createElement,S="AT-VirtualScrollContainer",p=[d.ATCSS.position.fixed,d.ATCSS.height["100%"],d.ATCSS.width["100%"],d.ATCSS.left[0],d.ATCSS.top[0],d.ATCSS.overflow.auto],v=function(t){var e=t.onContainerScroll,n=Object(o.a)(t,["onContainerScroll"]),i=Object(c.useCallback)((function(){var t=u.current;e&&e({scrollTop:t.scrollTop,scrollLeft:t.scrollLeft})}),[e]),u=Object(c.useRef)(null);return Object(c.useEffect)((function(){var t=u.current;return null===t||void 0===t||t.addEventListener("scroll",i),function(){null===t||void 0===t||t.removeEventListener("scroll",i)}}),[i]),m("div",Object(r.a)({ref:u},n,{className:a.a.apply(void 0,[S,n.className].concat(p))}))},h=function(){var t=Object(c.useState)(0),e=t[0],n=t[1];return[e,function(){n(e+1)}]},b=n("SpwJ"),w=c.createElement,A="AT-List",x=[b.a.position.relative,b.a.transform.translate3D000],C=function(t){var e=t.itemCrossAxisSize,n=t.itemMainAxisMinSize,s=void 0===n?10:n,d=t.count,m=t.mainAxis,S=t.itemMainAxisSize,p=t.renderItem,b=t.handle,C=t.repaintId,O=t.onContainerScroll,g=Object(o.a)(t,["itemCrossAxisSize","itemMainAxisMinSize","count","mainAxis","itemMainAxisSize","renderItem","handle","repaintId","onContainerScroll"]),j=h(),y=Object(i.a)(j,2),T=(y[0],y[1]),z=c.useMemo((function(){return{repaint:T,setScrollPosition:function(t){}}}),[]),E=Object(c.useRef)(null);Object(c.useEffect)((function(){return b&&b(z),function(){b&&b(null)}}),[b]);var I=Object(c.useRef)(0);Object(u.b)(E,(function(t){var e="vertical"===m?t.height:t.width,n="function"!==typeof S?S:s,r=Math.ceil(e/n)+1;I.current=r,T()}));var M=Object(c.useRef)(),R=I.current,V=Object(l.a)({count:d,name:"VirtualList",itemCrossAxisSize:e,itemMainAxisSize:S,mainAxis:m,renderCount:R,renderItem:p,repaintId:C,itemPositionWithTransform:!0}),k=V.renderItemContainer,N=V.setScrollPosition,P=V.getCrossAxisTotalSize,X=V.getMainAxisTotalSize;return M.current=N,w("div",Object(r.a)({ref:E},g,{className:a.a.apply(void 0,[t.className,A,"".concat(A,"--").concat(m)].concat(x))}),w(v,{onContainerScroll:function(t){M.current&&M.current(t),O&&O(t)}},k(),w(f,{count:d,width:"horizontal"===m?X():P(),height:"vertical"===m?X():P()})))}},ODXe:function(t,e,n){"use strict";function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var c,a=t[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(u){i=!0,o=u}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(e,"a",(function(){return r}))},V5sz:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/rowlist",function(){return n("ic95")}])},ic95:function(t,e,n){"use strict";n.r(e);var r=n("ODXe"),i=n("mXGw"),o=n("nJsM"),c=i.createElement;e.default=function(){var t=i.useState(0),e=Object(r.a)(t,2),n=e[0],a=e[1],u=i.useState(250),l=Object(r.a)(u,2),s=l[0],f=l[1],d=i.useState(0),m=Object(r.a)(d,2),S=m[0],p=m[1];return console.log(S),c("div",null,c("button",{onClick:function(){a(n+1)}},"update counter - ",n),c("button",{onClick:function(){f(250===s?120:250)}},"toggleHeight"),c("button",{onClick:function(){p(100),document.querySelector(".AT-VirtualScrollContainer").scrollTop=100}},"setScrollTop 100"),c("button",{onClick:function(){p(150),document.querySelector(".AT-VirtualScrollContainer").scrollTop=150}},"setScrollTop 150"),c(o.a,{style:{height:s,margin:"2rem",border:"1px solid gray"},count:20,rowHeight:50,renderRow:function(t){var e=t.rowIndex,r=t.domRef,i=t.rowHeight;return c("div",{ref:r,style:{position:"absolute",contain:"size layout",top:0,left:0,height:i,width:"50vw",border:"1px solid red"}},"item-".concat(e)," counter ",n," ",c("input",{type:"text",defaultValue:e}))}}))}},nJsM:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("Fcif"),i=n("dV/x"),o=n("mXGw"),c=n("ERoZ"),a=o.createElement,u=function(t){var e=t.rowWidth,n=t.rowHeight,u=t.renderRow,l=Object(i.a)(t,["rowWidth","rowHeight","renderRow"]),s=o.useCallback((function(t){return u({domRef:t.domRef,rowHeight:t.itemMainAxisSize,rowIndex:t.itemIndex})}),[u]);return a(c.a,Object(r.a)({},l,{renderItem:s,mainAxis:"vertical",itemMainAxisSize:n,itemCrossAxisSize:e}))}}},[["V5sz",0,1,2,3]]]);