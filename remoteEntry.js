var format_document_builder_0_1_0;(()=>{"use strict";var e={60885:(e,t,r)=>{var n={"./components":()=>Promise.all([r.e(263),r.e(194),r.e(784)]).then((()=>()=>r(8151)))},a=(e,t)=>(r.R=t,t=r.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),r.R=void 0,t),o=(e,t)=>{if(r.S){var n="default",a=r.S[n];if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return r.S[n]=e,r.I(n,t)}};r.d(t,{get:()=>a,init:()=>o})}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=e,r.c=t,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(n,a){if(1&a&&(n=this(n)),8&a)return n;if("object"===typeof n&&n){if(4&a&&n.__esModule)return n;if(16&a&&"function"===typeof n.then)return n}var o=Object.create(null);r.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&a&&n;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>n[e]));return i.default=()=>n,r.d(o,i),o}})(),r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[])),r.u=e=>"static/js/"+e+"."+{118:"edcb7957",194:"afe53821",199:"1215808a",201:"014369e5",233:"85699f96",245:"dc22fa57",263:"7d4560bb",286:"48573b6c",288:"36898698",307:"a41fa692",344:"232f1aee",446:"33613712",467:"05245f64",469:"4bf3f507",480:"3e63cd2b",488:"a9148131",498:"69f07913",564:"5988151e",638:"da76d868",714:"55cc39ec",775:"d4e56608",784:"4e3d3984",830:"45af2a52",848:"2aa96c16",922:"d6b8ca00"}[e]+".chunk.js",r.miniCssF=e=>"static/css/"+e+".3bf50ab8.chunk.css",r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="@kne-components/format-document-builder:";r.l=(n,a,o,i)=>{if(e[n])e[n].push(a);else{var l,d;if(void 0!==o)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var c=u[s];if(c.getAttribute("src")==n||c.getAttribute("data-webpack")==t+o){l=c;break}}l||(d=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+o),l.src=n),e[n]=[a];var f=(t,r)=>{l.onerror=l.onload=null,clearTimeout(h);var a=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(r))),t)return t(r)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),d&&document.head.appendChild(l)}}})(),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{r.S={};var e={},t={};r.I=(n,a)=>{a||(a=[]);var o=t[n];if(o||(o=t[n]={}),!(a.indexOf(o)>=0)){if(a.push(o),e[n])return e[n];r.o(r.S,n)||(r.S[n]={});var i=r.S[n],l="@kne-components/format-document-builder",d=(e,t,r,n)=>{var a=i[e]=i[e]||{},o=a[t];(!o||!o.loaded&&(!n!=!o.eager?n:l>o.from))&&(a[t]={get:r,from:l,eager:!!n})},u=[];if("default"===n)d("@kne/current-lib_format-document-builder","0.1.0",(()=>Promise.all([r.e(118),r.e(564),r.e(922),r.e(199),r.e(830)]).then((()=>()=>r(71830))))),d("@kne/global-context","1.1.1",(()=>Promise.all([r.e(922),r.e(638)]).then((()=>()=>r(39638))))),d("@kne/react-fetch","1.5.4",(()=>Promise.all([r.e(307),r.e(201),r.e(922),r.e(488)]).then((()=>()=>r(3201))))),d("@kne/react-form-antd","4.0.0",(()=>Promise.all([r.e(118),r.e(286),r.e(922),r.e(263),r.e(199),r.e(775)]).then((()=>()=>r(17286))))),d("@kne/remote-loader","1.2.3",(()=>Promise.all([r.e(307),r.e(922),r.e(467)]).then((()=>()=>r(31467))))),d("@kne/use-event","0.1.5",(()=>Promise.all([r.e(922),r.e(498)]).then((()=>()=>r(29498))))),d("antd","5.21.5",(()=>Promise.all([r.e(480),r.e(922),r.e(714),r.e(469)]).then((()=>()=>r(69480))))),d("axios","1.7.7",(()=>r.e(344).then((()=>()=>r(24344))))),d("dayjs","1.11.13",(()=>r.e(446).then((()=>()=>r(60446))))),d("dayjs","1.11.13",(()=>r.e(288).then((()=>()=>r(93288))))),d("react-dom","18.3.1",(()=>Promise.all([r.e(848),r.e(922)]).then((()=>()=>r(83848))))),d("react-router-dom","6.27.0",(()=>Promise.all([r.e(245),r.e(922),r.e(714)]).then((()=>()=>r(53245))))),d("react","18.3.1",(()=>r.e(233).then((()=>()=>r(98233)))));return u.length?e[n]=Promise.all(u).then((()=>e[n]=1)):e[n]=1}}})(),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var a=n.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=n[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=r[1]?t(r[1]):[];return r[2]&&(n.length++,n.push.apply(n,t(r[2]))),r[3]&&(n.push([]),n.push.apply(n,t(r[3]))),n},t=(t,r)=>{t=e(t),r=e(r);for(var n=0;;){if(n>=t.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=t[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},n=(e,t)=>e&&r.o(e,t),a=e=>(e.loaded=1,e.get()),o=e=>Object.keys(e).reduce(((t,r)=>(e[r].eager&&(t[r]=e[r]),t)),{}),i=(e,r,n)=>{var a=n?o(e[r]):e[r];return Object.keys(a).reduce(((e,r)=>!e||!a[e].loaded&&t(e,r)?r:e),0)},l=e=>{throw new Error(e)},d=e=>function(t,n,a,o,i){var l=r.I(t);return l&&l.then&&!a?l.then(e.bind(e,t,r.S[t],n,!1,o,i)):e(t,r.S[t],n,a,o,i)},u=(e,t,r)=>r?r():((e,t)=>l("Shared module "+t+" doesn't exist in shared scope "+e))(e,t),s=d(((e,t,r,o,l)=>{if(!n(t,r))return u(e,r,l);var d=i(t,r,o);return a(t[r][d])})),c={},f={94922:()=>s("default","react",!1,(()=>r.e(233).then((()=>()=>r(98233))))),55199:()=>s("default","antd",!1,(()=>Promise.all([r.e(480),r.e(714),r.e(469)]).then((()=>()=>r(69480))))),74946:()=>s("default","@kne/global-context",!1,(()=>r.e(638).then((()=>()=>r(39638))))),87832:()=>s("default","@kne/react-form-antd",!1,(()=>Promise.all([r.e(286),r.e(263),r.e(775)]).then((()=>()=>r(17286))))),80263:()=>s("default","dayjs",!1,(()=>r.e(288).then((()=>()=>r(93288))))),20775:()=>s("default","@kne/use-event",!1,(()=>r.e(498).then((()=>()=>r(29498))))),85714:()=>s("default","react-dom",!1,(()=>r.e(848).then((()=>()=>r(83848))))),57469:()=>s("default","dayjs",!1,(()=>r.e(446).then((()=>()=>r(60446))))),86100:()=>s("default","@kne/current-lib_format-document-builder",!1,(()=>Promise.all([r.e(118),r.e(564),r.e(922),r.e(199),r.e(830)]).then((()=>()=>r(71830)))))},h={194:[86100],199:[55199],263:[80263],469:[57469],714:[85714],775:[20775],830:[74946,87832],922:[94922]},m={};r.f.consumes=(e,t)=>{r.o(h,e)&&h[e].forEach((e=>{if(r.o(c,e))return t.push(c[e]);if(!m[e]){var n=t=>{c[e]=0,r.m[e]=n=>{delete r.c[e],n.exports=t()}};m[e]=!0;var a=t=>{delete c[e],r.m[e]=n=>{throw delete r.c[e],t}};try{var o=f[e]();o.then?t.push(c[e]=o.then(n).catch(a)):n(o)}catch(i){a(i)}}}))}})(),(()=>{if("undefined"!==typeof document){var e=e=>new Promise(((t,n)=>{var a=r.miniCssF(e),o=r.p+a;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var a=(i=r[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===t))return i}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){var i;if((a=(i=o[n]).getAttribute("data-href"))===e||a===t)return i}})(a,o))return t();((e,t,n,a,o)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",r.nc&&(i.nonce=r.nc),i.onerror=i.onload=r=>{if(i.onerror=i.onload=null,"load"===r.type)a();else{var n=r&&r.type,l=r&&r.target&&r.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+n+": "+l+")");d.name="ChunkLoadError",d.code="CSS_CHUNK_LOAD_FAILED",d.type=n,d.request=l,i.parentNode&&i.parentNode.removeChild(i),o(d)}},i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i)})(e,o,null,t,n)})),t={858:0};r.f.miniCss=(r,n)=>{t[r]?n.push(t[r]):0!==t[r]&&{784:1}[r]&&n.push(t[r]=e(r).then((()=>{t[r]=0}),(e=>{throw delete t[r],e})))}}})(),(()=>{var e={858:0};r.f.j=(t,n)=>{var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else if(/^(199|263|469|714|775|922)$/.test(t))e[t]=0;else{var o=new Promise(((r,n)=>a=e[t]=[r,n]));n.push(a[2]=o);var i=r.p+r.u(t),l=new Error;r.l(i,(n=>{if(r.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,a[1](l)}}),"chunk-"+t,t)}};var t=(t,n)=>{var a,o,i=n[0],l=n[1],d=n[2],u=0;if(i.some((t=>0!==e[t]))){for(a in l)r.o(l,a)&&(r.m[a]=l[a]);if(d)d(r)}for(t&&t(n);u<i.length;u++)o=i[u],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0},n=self.webpackChunk_kne_components_format_document_builder=self.webpackChunk_kne_components_format_document_builder||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r(60885);format_document_builder_0_1_0=n})();
//# sourceMappingURL=remoteEntry.js.map