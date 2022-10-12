"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[592],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),p=o,m=d["".concat(s,".").concat(p)]||d[p]||f[p]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9960:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(7294),o=n(3727),a=n(2263),i=n(3919),c=n(412);const s=(0,r.createContext)({collectLink:()=>{}});var l=n(4996),u=n(8780);const f=function(e){let{isNavLink:t,to:n,href:f,activeClassName:d,isActive:p,"data-noBrokenLinkCheck":m,autoAddBaseUrl:v=!0,...g}=e;var h;const{siteConfig:{trailingSlash:y,baseUrl:b}}=(0,a.Z)(),{withBaseUrl:w}=(0,l.C)(),E=(0,r.useContext)(s),P=n||f,O=(0,i.Z)(P),_=null==P?void 0:P.replace("pathname://","");let S=void 0!==_?(x=_,v&&(e=>e.startsWith("/"))(x)?w(x):x):void 0;var x;S&&O&&(S=(0,u.applyTrailingSlash)(S,{trailingSlash:y,baseUrl:b}));const C=(0,r.useRef)(!1),L=t?o.OL:o.rU,j=c.Z.canUseIntersectionObserver,k=(0,r.useRef)();(0,r.useEffect)((()=>(!j&&O&&null!=S&&window.docusaurus.prefetch(S),()=>{j&&k.current&&k.current.disconnect()})),[k,S,j,O]);const D=null!==(h=null==S?void 0:S.startsWith("#"))&&void 0!==h&&h,R=!S||!O||D;return S&&O&&!D&&!m&&E.collectLink(S),R?r.createElement("a",{href:S,...P&&!O&&{target:"_blank",rel:"noopener noreferrer"},...g}):r.createElement(L,{...g,onMouseEnter:()=>{C.current||null==S||(window.docusaurus.preload(S),C.current=!0)},innerRef:e=>{var t,n;j&&e&&O&&(t=e,n=()=>{null!=S&&window.docusaurus.prefetch(S)},k.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(k.current.unobserve(t),k.current.disconnect(),n())}))})),k.current.observe(t))},to:S||"",...t&&{isActive:p,activeClassName:d}})}},5999:(e,t,n)=>{n.d(t,{Z:()=>u,I:()=>l});var r=n(7294);const o=/{\w+}/g,a="{}";function i(e,t){const n=[],i=e.replace(o,(e=>{const o=e.substr(1,e.length-2),i=null==t?void 0:t[o];if(void 0!==i){const e=r.isValidElement(i)?i:String(i);return n.push(e),a}return e}));return 0===n.length?e:n.every((e=>"string"==typeof e))?i.split(a).reduce(((e,t,r)=>{var o;return e.concat(t).concat(null!==(o=n[r])&&void 0!==o?o:"")}),""):i.split(a).reduce(((e,t,o)=>[...e,r.createElement(r.Fragment,{key:o},t,n[o])]),[])}var c=n(7529);function s(e){let{id:t,message:n}=e;var r,o;if(void 0===t&&void 0===n)throw new Error("Docusaurus translation declarations must have at least a translation id or a default translation message");return null!==(o=null!==(r=c[null!=t?t:n])&&void 0!==r?r:n)&&void 0!==o?o:t}function l(e,t){let{message:n,id:r}=e;return i(s({message:n,id:r}),t)}function u(e){let{children:t,id:n,values:r}=e;if(t&&"string"!=typeof t)throw console.warn("Illegal <Translate> children",t),new Error("The Docusaurus <Translate> component only accept simple string values");return i(s({message:t,id:n}),r)}},9935:(e,t,n)=>{n.d(t,{m:()=>r});const r="default"},3919:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{Z:()=>o,b:()=>r})},8143:(e,t,n)=>{n.r(t),n.d(t,{BrowserRouter:()=>r.VK,HashRouter:()=>r.UT,Link:()=>r.rU,MemoryRouter:()=>r.VA,NavLink:()=>r.OL,Prompt:()=>r.NL,Redirect:()=>r.l_,Route:()=>r.AW,Router:()=>r.F0,StaticRouter:()=>r.gx,Switch:()=>r.rs,generatePath:()=>r.Gn,matchPath:()=>r.LX,useHistory:()=>r.k6,useLocation:()=>r.TH,useParams:()=>r.UO,useRouteMatch:()=>r.$B,withRouter:()=>r.EN});var r=n(3727)},4996:(e,t,n)=>{n.d(t,{C:()=>a,Z:()=>i});var r=n(2263),o=n(3919);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,r){let{forcePrependBaseUrl:a=!1,absolute:i=!1}=void 0===r?{}:r;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(a)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+c:c}(t,e,n,r)}}function i(e,t){void 0===t&&(t={});const{withBaseUrl:n}=a();return n(e,t)}},8084:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a,useAllPluginInstancesData:()=>i,usePluginData:()=>c});var r=n(2263),o=n(9935);function a(){const{globalData:e}=(0,r.Z)();if(!e)throw new Error("Docusaurus global data not found.");return e}function i(e){const t=a()[e];if(!t)throw new Error(`Docusaurus plugin global data not found for "${e}" plugin.`);return t}function c(e,t){void 0===t&&(t=o.m);const n=i(e)[t];if(!n)throw new Error(`Docusaurus plugin global data not found for "${e}" plugin with id "${t}".`);return n}},2389:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294),o=n(9913);function a(){return(0,r.useContext)(o._)}},8408:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;const r=n(8143);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});const o=Object.entries(e).find((e=>{let[n,o]=e;return!!(0,r.matchPath)(t,{path:o.path,exact:!1,strict:!1})})),a=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!a&&n.failfast)throw new Error(`Can't find active docs plugin for "${t}" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(e).map((e=>e.path)).join(", ")}`);return a};t.getLatestVersion=e=>e.versions.find((e=>e.isLast));t.getActiveVersion=(e,n)=>{const o=(0,t.getLatestVersion)(e);return[...e.versions.filter((e=>e!==o)),o].find((e=>!!(0,r.matchPath)(n,{path:e.path,exact:!1,strict:!1})))};t.getActiveDocContext=(e,n)=>{const o=(0,t.getActiveVersion)(e,n),a=null==o?void 0:o.docs.find((e=>!!(0,r.matchPath)(n,{path:e.path,exact:!0,strict:!1})));return{activeVersion:o,activeDoc:a,alternateDocVersions:a?function(t){const n={};return e.versions.forEach((e=>{e.docs.forEach((r=>{r.id===t&&(n[e.name]=r)}))})),n}(a.id):{}}};t.getDocVersionSuggestions=(e,n)=>{const r=(0,t.getLatestVersion)(e),o=(0,t.getActiveDocContext)(e,n);return{latestDocSuggestion:null==o?void 0:o.alternateDocVersions[r.name],latestVersionSuggestion:r}}},6730:(e,t,n)=>{t.Jo=t.Iw=t.zu=t.yW=t.gB=t.gA=t.zh=t._r=void 0;const r=n(655),o=n(8143),a=(0,r.__importStar)(n(8084)),i=n(8408),c={};t._r=()=>{var e;return null!==(e=(0,a.default)()["docusaurus-plugin-content-docs"])&&void 0!==e?e:c};t.zh=e=>(0,a.usePluginData)("docusaurus-plugin-content-docs",e);t.gA=function(e){void 0===e&&(e={});const n=(0,t._r)(),{pathname:r}=(0,o.useLocation)();return(0,i.getActivePlugin)(n,r,e)};t.gB=e=>(0,t.zh)(e).versions;t.yW=e=>{const n=(0,t.zh)(e);return(0,i.getLatestVersion)(n)};t.zu=e=>{const n=(0,t.zh)(e),{pathname:r}=(0,o.useLocation)();return(0,i.getActiveVersion)(n,r)};t.Iw=e=>{const n=(0,t.zh)(e),{pathname:r}=(0,o.useLocation)();return(0,i.getActiveDocContext)(n,r)};t.Jo=e=>{const n=(0,t.zh)(e),{pathname:r}=(0,o.useLocation)();return(0,i.getDocVersionSuggestions)(n,r)}},1217:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(7294),o=n(2859),a=n(2822),i=n(4996);function c(e){let{title:t,description:n,keywords:c,image:s,children:l}=e;const u=(0,a.pe)(t),{withBaseUrl:f}=(0,i.C)(),d=s?f(s,{absolute:!0}):void 0;return r.createElement(o.Z,null,t&&r.createElement("title",null,u),t&&r.createElement("meta",{property:"og:title",content:u}),n&&r.createElement("meta",{name:"description",content:n}),n&&r.createElement("meta",{property:"og:description",content:n}),c&&r.createElement("meta",{name:"keywords",content:Array.isArray(c)?c.join(","):c}),d&&r.createElement("meta",{property:"og:image",content:d}),d&&r.createElement("meta",{name:"twitter:image",content:d}),l)}},907:(e,t,n)=>{n.d(t,{Iw:()=>r.Iw,Jo:()=>r.Jo,_r:()=>r._r,gA:()=>r.gA,gB:()=>r.gB,yW:()=>r.yW,zh:()=>r.zh,zu:()=>r.zu});var r=n(6730)},3783:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),o=n(412);const a="desktop",i="mobile",c="ssr";function s(){return o.Z.canUseDOM?window.innerWidth>996?a:i:c}const l=function(){const[e,t]=(0,r.useState)((()=>s()));return(0,r.useEffect)((()=>{function e(){t(s())}return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),e}},2822:(e,t,n)=>{n.d(t,{pl:()=>ve,zF:()=>Z,HX:()=>v,PO:()=>X,L5:()=>ae,Cv:()=>Q,Cn:()=>G,OC:()=>ke,kM:()=>le,WA:()=>l,os:()=>g,Fx:()=>Te,Mg:()=>b,_f:()=>u,PZ:()=>we,bc:()=>m,MA:()=>be,l5:()=>d,nT:()=>ge,uR:()=>R,J:()=>se,Rb:()=>Ee,be:()=>he,SL:()=>k,g8:()=>K,c2:()=>x,D9:()=>j,RF:()=>Ae,DA:()=>Ce,Si:()=>Se,LU:()=>o,pe:()=>w});var r=n(2263);function o(){return(0,r.Z)().siteConfig.themeConfig}const a="localStorage";function i(e){if(void 0===e&&(e=a),"undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(n){return t=n,c||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",t),c=!0),null}var t}let c=!1;const s={get:()=>null,set:()=>{},del:()=>{}};const l=(e,t)=>{if("undefined"==typeof window)return function(e){function t(){throw new Error(`Illegal storage API usage for storage key "${e}".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.`)}return{get:t,set:t,del:t}}(e);const n=i(null==t?void 0:t.persistence);return null===n?s:{get:()=>n.getItem(e),set:t=>n.setItem(e,t),del:()=>n.removeItem(e)}};function u(e){void 0===e&&(e=a);const t=i(e);if(!t)return[];const n=[];for(let r=0;r<t.length;r+=1){const e=t.key(r);null!==e&&n.push(e)}return n}var f=n(6550);function d(){const{siteConfig:{baseUrl:e,url:t},i18n:{defaultLocale:n,currentLocale:o}}=(0,r.Z)(),{pathname:a}=(0,f.TH)(),i=o===n?e:e.replace(`/${o}/`,"/"),c=a.replace(e,"");return{createUrl:function(e){let{locale:r,fullyQualified:o}=e;return`${o?t:""}${function(e){return e===n?`${i}`:`${i}${e}/`}(r)}${c}`}}}const p=/title=(["'])(.*?)\1/;function m(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(p))||void 0===t?void 0:t[2])&&void 0!==n?n:""}const v="default";function g(e,t){return`docs-${e}-${t}`}var h=n(907);const y=!!h._r,b=(e,t)=>{const n=e=>!e||(null==e?void 0:e.endsWith("/"))?e:`${e}/`;return n(e)===n(t)},w=e=>{const{siteConfig:t}=(0,r.Z)(),{title:n,titleDelimiter:o}=t;return e&&e.trim().length?`${e.trim()} ${o} ${n}`:n};var E=n(7294);const P=["zero","one","two","few","many","other"];function O(e){return P.filter((t=>e.includes(t)))}const _={locale:"en",pluralForms:O(["one","other"]),select:e=>1===e?"one":"other"};function S(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,E.useMemo)((()=>{if(!Intl.PluralRules)return console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),_;try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:O(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n`),_}}),[e])}function x(){const e=S();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];{r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms}), but the message contains ${r.length} plural forms: ${e} `);const o=n.select(t),a=n.pluralForms.indexOf(o);return r[Math.min(a,r.length-1)]}}(n,t,e)}}const C="undefined"!=typeof window?E.useLayoutEffect:E.useEffect;function L(e){const t=(0,E.useRef)(e);return C((()=>{t.current=e}),[e]),(0,E.useCallback)((function(){return t.current(...arguments)}),[])}function j(e){const t=(0,E.useRef)();return C((()=>{t.current=e})),t.current}function k(e){const t=(0,f.TH)(),n=j(t),r=L(e);(0,E.useEffect)((()=>{r({location:t,previousLocation:n})}),[r,t,n])}var D=n(412);function R(e){let{initialState:t}=e;const[n,r]=(0,E.useState)(null!=t&&t),o=(0,E.useCallback)((()=>{r((e=>!e))}),[]);return{collapsed:n,setCollapsed:r,toggleCollapsed:o}}const A={display:"none",overflow:"hidden",height:"0px"},T={display:"block",overflow:"visible",height:"auto"};function I(e,t){const n=t?A:T;e.style.display=n.display,e.style.overflow=n.overflow,e.style.height=n.height}function M(e){let{collapsibleRef:t,collapsed:n,animation:r}=e;const o=(0,E.useRef)(!1);(0,E.useEffect)((()=>{const e=t.current;function a(){var t,n;const o=e.scrollHeight,a=null!==(t=null==r?void 0:r.duration)&&void 0!==t?t:function(e){const t=e/36;return Math.round(10*(4+15*t**.25+t/5))}(o);return{transition:`height ${a}ms ${null!==(n=null==r?void 0:r.easing)&&void 0!==n?n:"ease-in-out"}`,height:`${o}px`}}function i(){const t=a();e.style.transition=t.transition,e.style.height=t.height}if(!o.current)return I(e,n),void(o.current=!0);return e.style.willChange="height",function(){const t=requestAnimationFrame((()=>{n?(i(),requestAnimationFrame((()=>{e.style.height=A.height,e.style.overflow=A.overflow}))):(e.style.display="block",requestAnimationFrame((()=>{i()})))}));return()=>cancelAnimationFrame(t)}()}),[t,n,r])}function $(e){if(!D.Z.canUseDOM)return e?A:T}function V(e){let{as:t="div",collapsed:n,children:r,animation:o,onCollapseTransitionEnd:a,className:i,disableSSRStyle:c}=e;const s=(0,E.useRef)(null);return M({collapsibleRef:s,collapsed:n,animation:o}),E.createElement(t,{ref:s,style:c?void 0:$(n),onTransitionEnd:e=>{"height"===e.propertyName&&(I(s.current,n),null==a||a(n))},className:i},r)}function N(e){let{collapsed:t,...n}=e;const[r,o]=(0,E.useState)(!t);(0,E.useLayoutEffect)((()=>{t||o(!0)}),[t]);const[a,i]=(0,E.useState)(t);return(0,E.useLayoutEffect)((()=>{r&&i(t)}),[r,t]),r?E.createElement(V,{...n,collapsed:a}):null}function Z(e){let{lazy:t,...n}=e;const r=t?N:V;return E.createElement(r,{...n})}var U=n(2389),B=n(6010);const F="details_Q743",H="isBrowser_rWTL",z="collapsibleContent_K5uX";function W(e){return!!e&&("SUMMARY"===e.tagName||W(e.parentElement))}function q(e,t){return!!e&&(e===t||q(e.parentElement,t))}const X=e=>{let{summary:t,children:n,...r}=e;const o=(0,U.Z)(),a=(0,E.useRef)(null),{collapsed:i,setCollapsed:c}=R({initialState:!r.open}),[s,l]=(0,E.useState)(r.open);return E.createElement("details",{...r,ref:a,open:s,"data-collapsed":i,className:(0,B.Z)(F,{[H]:o},r.className),onMouseDown:e=>{W(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;W(t)&&q(t,a.current)&&(e.preventDefault(),i?(c(!1),l(!0)):c(!0))}},t,E.createElement(Z,{lazy:!1,collapsed:i,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{c(e),l(!e)}},E.createElement("div",{className:z},n)))};const J=(0,E.createContext)(null);function G(e){let{children:t}=e;return E.createElement(J.Provider,{value:(0,E.useState)(null)},t)}function Y(){const e=(0,E.useContext)(J);if(null===e)throw new Error("MobileSecondaryMenuProvider was not used correctly, context value is null");return e}function K(){const[e]=Y();if(e){const t=e.component;return function(n){return E.createElement(t,{...e.props,...n})}}return()=>{}}function Q(e){let{component:t,props:n}=e;const[,r]=Y(),o=(a=n,(0,E.useMemo)((()=>a),[...Object.keys(a),...Object.values(a)]));var a;return(0,E.useEffect)((()=>{r({component:t,props:o})}),[r,t,o]),(0,E.useEffect)((()=>()=>r(null)),[r]),null}const ee=e=>`docs-preferred-version-${e}`,te={save:(e,t,n)=>{l(ee(e),{persistence:t}).set(n)},read:(e,t)=>l(ee(e),{persistence:t}).get(),clear:(e,t)=>{l(ee(e),{persistence:t}).del()}};function ne(e){let{pluginIds:t,versionPersistence:n,allDocsData:r}=e;const o={};return t.forEach((e=>{o[e]=function(e){const t=te.read(e,n);return r[e].versions.some((e=>e.name===t))?{preferredVersionName:t}:(te.clear(e,n),{preferredVersionName:null})}(e)})),o}function re(){const e=(0,h._r)(),t=o().docs.versionPersistence,n=(0,E.useMemo)((()=>Object.keys(e)),[e]),[r,a]=(0,E.useState)((()=>function(e){const t={};return e.forEach((e=>{t[e]={preferredVersionName:null}})),t}(n)));(0,E.useEffect)((()=>{a(ne({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]);return[r,(0,E.useMemo)((()=>({savePreferredVersion:function(e,n){te.save(e,t,n),a((t=>({...t,[e]:{preferredVersionName:n}})))}})),[t])]}const oe=(0,E.createContext)(null);function ae(e){let{children:t}=e;return y?E.createElement(ie,null,t):E.createElement(E.Fragment,null,t)}function ie(e){let{children:t}=e;const n=re();return E.createElement(oe.Provider,{value:n},t)}var ce=n(9935);function se(e){void 0===e&&(e=ce.m);const t=(0,h.zh)(e),[n,r]=function(){const e=(0,E.useContext)(oe);if(!e)throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');return e}(),{preferredVersionName:o}=n[e];return{preferredVersion:o?t.versions.find((e=>e.name===o)):null,savePreferredVersionName:(0,E.useCallback)((t=>{r.savePreferredVersion(e,t)}),[r,e])}}const le={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagPostListPage:"blog-tags-post-list-page",docsDocPage:"docs-doc-page",docsTagsListPage:"docs-tags-list-page",docsTagDocListPage:"docs-tags-doc-list-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docsPages:"docs-wrapper",mdxPages:"mdx-wrapper"},common:{editThisPage:"theme-edit-this-page",lastUpdated:"theme-last-updated",backToTopButton:"theme-back-to-top-button"},layout:{},docs:{docVersionBanner:"theme-doc-version-banner",docVersionBadge:"theme-doc-version-badge",docMarkdown:"theme-doc-markdown",docTocMobile:"theme-doc-toc-mobile",docTocDesktop:"theme-doc-toc-desktop",docFooter:"theme-doc-footer",docFooterTagsRow:"theme-doc-footer-tags-row",docFooterEditMetaRow:"theme-doc-footer-edit-meta-row",docSidebarMenu:"theme-doc-sidebar-menu",docSidebarItemCategory:"theme-doc-sidebar-item-category",docSidebarItemLink:"theme-doc-sidebar-item-link",docSidebarItemCategoryLevel:e=>`theme-doc-sidebar-item-category-level-${e}`,docSidebarItemLinkLevel:e=>`theme-doc-sidebar-item-link-level-${e}`},blog:{}},ue=l("docusaurus.announcement.dismiss"),fe=l("docusaurus.announcement.id"),de=()=>"true"===ue.get(),pe=e=>ue.set(String(e)),me=(0,E.createContext)(null),ve=e=>{let{children:t}=e;const n=(()=>{const{announcementBar:e}=o(),t=(0,U.Z)(),[n,r]=(0,E.useState)((()=>!!t&&de()));(0,E.useEffect)((()=>{r(de())}),[]);const a=(0,E.useCallback)((()=>{pe(!0),r(!0)}),[]);return(0,E.useEffect)((()=>{if(!e)return;const{id:t}=e;let n=fe.get();"annoucement-bar"===n&&(n="announcement-bar");const o=t!==n;fe.set(t),o&&pe(!1),!o&&de()||r(!1)}),[e]),(0,E.useMemo)((()=>({isActive:!!e&&!n,close:a})),[e,n,a])})();return E.createElement(me.Provider,{value:n},t)},ge=()=>{const e=(0,E.useContext)(me);if(!e)throw new Error("useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree");return e};function he(){const{siteConfig:{baseUrl:e}}=(0,r.Z)(),{pathname:t}=(0,f.TH)();return t.replace(e,"/")}var ye=n(5999);const be=()=>(0,ye.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function we(e){const t={};return Object.values(e).forEach((e=>{var n;const r=function(e){return e[0].toUpperCase()}(e.name);t[r]=null!==(n=t[r])&&void 0!==n?n:[],t[r].push(e)})),Object.entries(t).sort(((e,t)=>{let[n]=e,[r]=t;return n.localeCompare(r)})).map((e=>{let[t,n]=e;return{letter:t,tags:n.sort(((e,t)=>e.name.localeCompare(t.name)))}}))}function Ee(e){!function(e){const{block:t}=(0,f.k6)(),n=(0,E.useRef)(e);(0,E.useEffect)((()=>{n.current=e}),[e]),(0,E.useEffect)((()=>t(((e,t)=>n.current(e,t)))),[t,n])}(((t,n)=>{if("POP"===n)return e(t,n)}))}function Pe(e){const t=e.getBoundingClientRect();return t.top===t.bottom?Pe(e.parentNode):t}function Oe(e,t){let{anchorTopOffset:n}=t;var r;const o=e.find((e=>Pe(e).top>=n));if(o){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(Pe(o))?o:null!==(r=e[e.indexOf(o)-1])&&void 0!==r?r:null}return e[e.length-1]}function _e(){const e=(0,E.useRef)(0),{navbar:{hideOnScroll:t}}=o();return(0,E.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const Se=function(e){const t=(0,E.useRef)(void 0),n=_e();(0,E.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:o,minHeadingLevel:a,maxHeadingLevel:i}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const r=[];for(let o=t;o<=n;o+=1)r.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:a,maxHeadingLevel:i}),s=Oe(c,{anchorTopOffset:n.current}),l=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){var r;n?(t.current&&t.current!==e&&(null===(r=t.current)||void 0===r||r.classList.remove(o)),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===l)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])};function xe(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return t.flatMap((e=>{const t=xe({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[{...e,children:t}]:t}))}function Ce(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,E.useMemo)((()=>xe({toc:t,minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}function Le(){const e=(0,E.useRef)(!0);return(0,E.useMemo)((()=>({scrollEventsEnabledRef:e,enableScrollEvents:()=>{e.current=!0},disableScrollEvents:()=>{e.current=!1}})),[])}const je=(0,E.createContext)(void 0);function ke(e){let{children:t}=e;return E.createElement(je.Provider,{value:Le()},t)}function De(){const e=(0,E.useContext)(je);if(null==e)throw new Error('"useScrollController" is used but no context provider was found in the React tree.');return e}const Re=()=>D.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null;function Ae(e,t){void 0===t&&(t=[]);const{scrollEventsEnabledRef:n}=De(),r=(0,E.useRef)(Re()),o=L(e);(0,E.useEffect)((()=>{const e=()=>{if(!n.current)return;const e=Re();o&&o(e,r.current),r.current=e},t={passive:!0};return e(),window.addEventListener("scroll",e,t),()=>window.removeEventListener("scroll",e,t)}),[o,n,...t])}function Te(e,t){return void 0!==e&&void 0!==t&&new RegExp(e,"gi").test(t)}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[o]=e.split(/[#?]/),a="/"===o||o===r?o:(i=o,n?function(e){return e.endsWith("/")?e:`${e}/`}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(o,a)}},8780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var a=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},9964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6010:(e,t,n)=>{function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:()=>o});const o=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},655:(e,t,n)=>{n.r(t),n.d(t,{__assign:()=>a,__asyncDelegator:()=>E,__asyncGenerator:()=>w,__asyncValues:()=>P,__await:()=>b,__awaiter:()=>u,__classPrivateFieldGet:()=>C,__classPrivateFieldIn:()=>j,__classPrivateFieldSet:()=>L,__createBinding:()=>d,__decorate:()=>c,__exportStar:()=>p,__extends:()=>o,__generator:()=>f,__importDefault:()=>x,__importStar:()=>S,__makeTemplateObject:()=>O,__metadata:()=>l,__param:()=>s,__read:()=>v,__rest:()=>i,__spread:()=>g,__spreadArray:()=>y,__spreadArrays:()=>h,__values:()=>m});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function c(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i}function s(e,t){return function(n,r){t(n,r,e)}}function l(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function u(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(t){a(t)}}function c(e){try{s(r.throw(e))}catch(t){a(t)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}s((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(c){a=[6,c],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}var d=Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function p(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||d(t,e,n)}function m(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function v(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}function g(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(v(arguments[t]));return e}function h(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],i=0,c=a.length;i<c;i++,o++)r[o]=a[i];return r}function y(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function w(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),a=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){a.push([e,t,n,r])>1||c(e,t)}))})}function c(e,t){try{(n=o[e](t)).value instanceof b?Promise.resolve(n.value.v).then(s,l):u(a[0][2],n)}catch(r){u(a[0][3],r)}var n}function s(e){c("next",e)}function l(e){c("throw",e)}function u(e,t){e(t),a.shift(),a.length&&c(a[0][0],a[0][1])}}function E(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:b(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function P(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=m(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}}function O(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var _=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function S(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&d(t,e,n);return _(t,e),t}function x(e){return e&&e.__esModule?e:{default:e}}function C(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function L(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}function j(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}}}]);