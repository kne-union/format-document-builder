(self.webpackChunk_kne_components_format_document_builder=self.webpackChunk_kne_components_format_document_builder||[]).push([[764],{25764:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=25764,e.exports=t},11448:(e,t,o)=>{"use strict";var r=o(94922),n=o.n(r),s=o(87558),a=o(55199),m=o(89946),l=o.n(m),c=o(13050),d=o(1488),p=o.n(d),u=o(89261);window.PUBLIC_URL="/format-document-builder";const i={remote:"components-core",url:"https://registry.npmmirror.com",tpl:"{{url}}/@kne-components%2f{{remote}}/{{version}}/files/build",defaultVersion:"0.1.10"};(0,c.preset)({remotes:{default:i,"components-core":i,"components-iconfont":{remote:"components-iconfont",url:"https://registry.npmmirror.com",tpl:"{{url}}/@kne-components%2f{{remote}}/{{version}}/files/build",defaultVersion:"0.1.3"}}});const f=(()=>{const e=l().create({validateStatus:function(){return!0}});return t=>t.hasOwnProperty("loader")&&"function"===typeof t.loader?Promise.resolve(t.loader(p()(t,["loader"]))).then((e=>({data:{code:0,data:e}}))).catch((e=>(a.message.error(e.message||"\u8bf7\u6c42\u53d1\u751f\u9519\u8bef"),{data:{code:500,msg:e.message}}))):e(t)})();(0,s.preset)({ajax:f,loading:(0,u.jsx)(a.Spin,{delay:500,style:{position:"absolute",left:"50%",padding:"10px",transform:"translateX(-50%)"}}),error:null,empty:(0,u.jsx)(a.Empty,{}),transformResponse:e=>{const{data:t}=e;return e.data={code:0===t.code?200:t.code,msg:t.msg,results:t.data},e}});var h=o(65457),k=o(94679),_=o(14152),g=o.n(_),y=(o(91296),o(46446));const x=g().ExampleRoutes,b=e=>{let{preset:t,themeToken:o,...r}=e;return(0,u.jsx)(k.HashRouter,{children:(0,u.jsx)(x,{...r,paths:[{key:"components",path:"/",title:"\u9996\u9875"}],preset:t,themeToken:o,readme:y.default,pageProps:{menu:null}})})};h.createRoot(document.getElementById("root")).render((0,u.jsx)(n().StrictMode,{children:(0,u.jsx)(b,{preset:{ajax:f},themeToken:{colorPrimary:"#4F185A"}})}))}}]);
//# sourceMappingURL=764.c1b57dcc.chunk.js.map