_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{"7Tx5":function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tests/datasource",function(){return r("8FxF")}])},"87aO":function(t,n,r){"use strict";var e=r("mXGw");n.a=function(t,n){var r=Object(e.useRef)(void 0===n?t:n);return Object(e.useLayoutEffect)((function(){r.current=t})),r.current}},"8FxF":function(t,n,r){"use strict";r.r(n);var e=r("mXGw"),i=r("fK2F"),u=e.createElement,o=[{name:"bob",age:1,id:1},{name:"bill",age:2,id:2}],a=function(){var t=Object(i.b)(),n=t.dataArray,r=t.loading;return u("div",null,r?"loading":null,r?null:JSON.stringify(n))},c=new Promise((function(t){setTimeout((function(){t(o)}),200)}));n.default=function(){return u(i.a,{data:c,primaryKey:"id",fields:["name","id","age"]},u(a,null))}},BsWD:function(t,n,r){"use strict";r.d(n,"a",(function(){return i}));var e=r("a3WO");function i(t,n){if(t){if("string"===typeof t)return Object(e.a)(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(e.a)(t,n):void 0}}},ODXe:function(t,n,r){"use strict";r.d(n,"a",(function(){return i}));var e=r("BsWD");function i(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],e=!0,i=!1,u=void 0;try{for(var o,a=t[Symbol.iterator]();!(e=(o=a.next()).done)&&(r.push(o.value),!n||r.length!==n);e=!0);}catch(c){i=!0,u=c}finally{try{e||null==a.return||a.return()}finally{if(i)throw u}}return r}}(t,n)||Object(e.a)(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},a3WO:function(t,n,r){"use strict";function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}r.d(n,"a",(function(){return e}))},rePB:function(t,n,r){"use strict";function e(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}r.d(n,"a",(function(){return e}))}},[["7Tx5",0,1,3,6]]]);