(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{ODXe:function(t,n,e){"use strict";function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var e=[],o=!0,r=!1,u=void 0;try{for(var i,c=t[Symbol.iterator]();!(o=(i=c.next()).done)&&(e.push(i.value),!n||e.length!==n);o=!0);}catch(l){r=!0,u=l}finally{try{o||null==c.return||c.return()}finally{if(r)throw u}}return e}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}e.d(n,"a",(function(){return o}))},XmNl:function(t,n,e){"use strict";e.r(n);var o=e("ODXe"),r=e("mXGw"),u=e("9Wvq"),i=r.createElement;n.default=function(){var t=r.useState(100),n=Object(o.a)(t,2),e=n[0],c=n[1],l=function(t){return function(){c(t)}};return i("div",null,i("div",{style:{display:"flex",flexFlow:"row"}},i("button",{onClick:l(3)},"set count 3"),i("button",{onClick:l(10)},"set count 10"),i("button",{onClick:l(17)},"set count 17"),i("button",{onClick:l(27)},"set count 27"),i("button",{onClick:l(50)},"set count 50"),i("button",{onClick:l(100)},"set count 100"),i("button",{onClick:l(1e3)},"set count 1000")),i("p",null,"Current count ",e),i(u.a,{style:{height:550,margin:"2rem",border:"1px solid gray"},count:e,rowHeight:110,renderRow:function(t){var n=t.rowIndex;return i("div",{style:{width:"180vw",border:"1px solid red"}},"item-".concat(n))}}))}},e0i5:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tests/list/set-count",function(){return e("XmNl")}])}},[["e0i5",0,1,2]]]);