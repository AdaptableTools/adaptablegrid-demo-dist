_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{"0F4T":function(e,n,t){e.exports={linklist:"LinkList_linklist__MfCE_"}},DKFd:function(e,n,t){"use strict";t.r(n);var r=t("mXGw"),o=t.n(r),a=t("YFqc"),c=t.n(a),l=t("TTq8"),s=o.a.createElement;n.default=function(){return s(l.a,null,s(c.a,{href:"/tests/grid/props/sortable/sortable"},"Sortable"),s(c.a,{href:"/tests/grid/props/sortInfo/controlled"},"SortInfo controlled"),s(c.a,{href:"/tests/grid/props/sortInfo/uncontrolled"},"SortInfo uncontrolled"),s(c.a,{href:"/tests/grid/props/column/flex"},"Column flex"))}},QmYa:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tests/grid",function(){return t("DKFd")}])},TTq8:function(e,n,t){"use strict";var r=t("mXGw"),o=t.n(r),a=t("0F4T"),c=t.n(a),l=o.a.createElement;console.log(c.a);n.a=function(e){var n=e.children;return l("div",{className:c.a.linklist,style:{display:"flex",flexFlow:"column",padding:20}},n)}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var a=o(t("mXGw")),c=t("elyg"),l=t("nOHt"),s=t("vNVm"),i={};function u(e,n,t,r){if((0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;i[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,l.useRouter)(),o=t&&t.pathname||"/",f=a.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],l=t[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):l||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,m=e.shallow,w=e.scroll,g=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var y=a.Children.only(v),_=y&&"object"===typeof y&&y.ref,E=(0,s.useIntersection)({rootMargin:"200px"}),b=r(E,2),T=b[0],M=b[1],L=a.default.useCallback((function(e){T(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,T]);(0,a.useEffect)((function(){var e=M&&n&&(0,c.isLocalURL)(d),r="undefined"!==typeof g?g:t&&t.locale,o=i[d+"%"+p+(r?"%"+r:"")];e&&!o&&u(t,d,p,{locale:r})}),[p,d,M,g,n,t]);var k={ref:L,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,l,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==l&&(l=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a,locale:s}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())})))}(e,t,d,p,h,m,w,g)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),u(t,d,p,{priority:!0}))}};return(e.passHref||"a"===y.type&&!("href"in y.props))&&(k.href=(0,c.addBasePath)((0,c.addLocale)(p,"undefined"!==typeof g?g:t&&t.locale,t&&t.defaultLocale))),a.default.cloneElement(y,k)};n.default=f},vNVm:function(e,n,t){"use strict";var r=t("J4zp"),o=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!l,o=(0,a.useRef)(),i=(0,a.useState)(!1),u=r(i,2),f=u[0],d=u[1],p=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||f||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){a.unobserve(e),0===c.size&&(a.disconnect(),s.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,a.useEffect)((function(){l||f||(0,c.default)((function(){return d(!0)}))}),[f]),[p,f]};var a=t("mXGw"),c=o(t("0G5g")),l="undefined"!==typeof IntersectionObserver;var s=new Map}},[["QmYa",0,1,3,8]]]);