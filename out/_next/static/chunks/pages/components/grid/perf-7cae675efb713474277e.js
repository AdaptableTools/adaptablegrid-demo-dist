_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{Y32C:function(n,t,o){"use strict";o.r(t);var i=o("KQm4"),e=o("ODXe"),u=o("mXGw"),c=o("I0Fj"),l=o("fK2F"),r=u.createElement,f="abcdefghijklmnopqrstuvwxyz".split(""),a=Object(c.GridFactory)();t.default=function(){var n=u.useState(100),t=Object(e.a)(n,2),o=t[0],c=t[1],s=u.useState(40),d=Object(e.a)(s,2),h=d[0],b=d[1],w=u.useState(null),k=Object(e.a)(w,2),g=k[0],p=k[1],v=u.useMemo((function(){return function(n){for(var t=new Map,o=0;t.size<n;){var i=Math.floor(o/f.length),e=o%f.length,u=f[e]+(i+1),c={field:u,render:function(n,t){var o=t.rowIndex,i=t.column;return r("span",null,"Row ",o,", col ",i.field," = ",n)}.bind(null,o)};t.set(u,c),o++}return t}(o)}),[o]),C=u.useMemo((function(){var n=Array.from(v.keys());return new Map([[n[0],"start"],[n[1],"start"],[n[2],"end"],[n[3],"end"]])}),[v]),m=u.useState(100),y=Object(e.a)(m,2),x=y[0],_=y[1],j=u.useMemo((function(){return Object(i.a)(Array(x)).map((function(n,t){var o=Array.from(v.values()).reduce((function(n,o){return n[o.field]="".concat(o.field,"-").concat(t),n}),{});return o.id="id-".concat(t),o}))}),[v,x]),O=u.useState(!0),M=Object(e.a)(O,2),F=M[0],E=M[1];return r(u.StrictMode,null,r("div",{style:{height:"100%"}},r("button",{onClick:function(){return E(!F)}}," ","Toggle configuration"),r("div",{style:{display:F?"block":"none"}},r("div",{style:{display:"flex",flexFlow:"row"}},r("button",{onClick:function(){c(10)}},"10 cols"),r("button",{onClick:function(){c(20)}},"20 cols"),r("button",{onClick:function(){c(30)}},"30 cols"),r("button",{onClick:function(){c(50)}},"50 cols"),r("button",{onClick:function(){c(100)}},"100 cols"),r("button",{onClick:function(){c(150)}},"150 cols")),r("div",{style:{display:"flex",flexFlow:"row"}},r("button",{onClick:function(){_(100)}},"100 rows"),r("button",{onClick:function(){_(1e3)}},"1000 rows"),r("button",{onClick:function(){_(1e4)}},"10k rows"),r("button",{onClick:function(){_(1e5)}},"100k rows")),r("div",{style:{display:"flex",flexFlow:"row"}},r("button",{onClick:function(){p(300)}},"height=300"),r("button",{onClick:function(){p(200)}},"height=200"),r("button",{onClick:function(){p("60vh")}},"height=60vh"),r("button",{onClick:function(){p("80vh")}},"height=80vh"),r("button",{onClick:function(){p("90vh")}},"height=90vh")),r("div",{style:{display:"flex",flexFlow:"row"}},r("button",{onClick:function(){b(30)}},"rowHeight=30"),r("button",{onClick:function(){b(40)}},"rowHeight=40"),r("button",{onClick:function(){b(50)}},"rowHeight=50"),r("button",{onClick:function(){b(70)}},"rowHeight=70"),r("button",{onClick:function(){b(100)}},"rowHeight=100")),r("p",null,x," rows, ",o," columns, row height 40")),r(l.b,{data:j,primaryKey:"id",fields:["id"].concat(Object(i.a)(Array.from(v.values()).map((function(n){return n.field}))))},r(a,{virtualizeColumns:!0,domProps:{style:{margin:"5px",height:g||"60vh",border:"1px solid gray",position:"relative"}},defaultColumnPinning:C,key:h,rowHeight:h,columnDefaultWidth:150,columnMinWidth:40,columns:v}))))}},g99D:function(n,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/grid/perf",function(){return o("Y32C")}])}},[["g99D",0,1,2,3,4,5,6,7]]]);