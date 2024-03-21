import './polyfills.server.mjs';
import{G as A1,I as E,J as U,K as O1,L as T1,M as F1,P as _1,T as B1,W as D1,a as x,b as g1,c as L1,d as x1,e as $2,f as b1,g as b2,h as N1,i as o2,j as V,k as Y,l as S1,m as A,n as w1,o as b,p as m,q as f,r as g,s as k1,t as y1,u as P1,v as t2,w as h,x as k,y as Q,z as N}from"./chunk-XYXGNQF2.mjs";function R1(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(c);a&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,n)}return e}function v(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?R1(Object(e),!0).forEach(function(n){S(c,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):R1(Object(e)).forEach(function(n){Object.defineProperty(c,n,Object.getOwnPropertyDescriptor(e,n))})}return c}function B2(c){"@babel/helpers - typeof";return B2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},B2(c)}function n4(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function E1(c,a){for(var e=0;e<a.length;e++){var n=a[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(c,n.key,n)}}function r4(c,a,e){return a&&E1(c.prototype,a),e&&E1(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function S(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function f1(c,a){return s4(c)||t4(c,a)||m3(c,a)||l4()}function g2(c){return i4(c)||o4(c)||m3(c)||f4()}function i4(c){if(Array.isArray(c))return J2(c)}function s4(c){if(Array.isArray(c))return c}function o4(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function t4(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var n=[],r=!0,i=!1,s,o;try{for(e=e.call(c);!(r=(s=e.next()).done)&&(n.push(s.value),!(a&&n.length===a));r=!0);}catch(t){i=!0,o=t}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw o}}return n}}function m3(c,a){if(c){if(typeof c=="string")return J2(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return J2(c,a)}}function J2(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,n=new Array(a);e<a;e++)n[e]=c[e];return n}function f4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var U1=function(){},l1={},v3={},H3=null,z3={mark:U1,measure:U1};try{typeof window<"u"&&(l1=window),typeof document<"u"&&(v3=document),typeof MutationObserver<"u"&&(H3=MutationObserver),typeof performance<"u"&&(z3=performance)}catch{}var m4=l1.navigator||{},I1=m4.userAgent,q1=I1===void 0?"":I1,J=l1,u=v3,W1=H3,N2=z3,o0=!!J.document,j=!!u.documentElement&&!!u.head&&typeof u.addEventListener=="function"&&typeof u.createElement=="function",p3=~q1.indexOf("MSIE")||~q1.indexOf("Trident/"),S2,w2,k2,y2,P2,q="___FONT_AWESOME___",Z2=16,h3="fa",V3="svg-inline--fa",i2="data-fa-i2svg",c1="data-fa-pseudo-element",v4="data-fa-pseudo-element-pending",m1="data-prefix",v1="data-icon",G1="fontawesome-i2svg",H4="async",z4=["HTML","HEAD","STYLE","SCRIPT"],M3=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}(),C="classic",L="sharp",H1=[C,L];function L2(c){return new Proxy(c,{get:function(e,n){return n in e?e[n]:e[C]}})}var V2=L2((S2={},S(S2,C,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),S(S2,L,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),S2)),M2=L2((w2={},S(w2,C,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),S(w2,L,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),w2)),d2=L2((k2={},S(k2,C,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),S(k2,L,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),k2)),p4=L2((y2={},S(y2,C,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),S(y2,L,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),y2)),h4=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,d3="fa-layers-text",V4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,M4=L2((P2={},S(P2,C,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),S(P2,L,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),P2)),C3=[1,2,3,4,5,6,7,8,9,10],d4=C3.concat([11,12,13,14,15,16,17,18,19,20]),C4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],n2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},C2=new Set;Object.keys(M2[C]).map(C2.add.bind(C2));Object.keys(M2[L]).map(C2.add.bind(C2));var u4=[].concat(H1,g2(C2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",n2.GROUP,n2.SWAP_OPACITY,n2.PRIMARY,n2.SECONDARY]).concat(C3.map(function(c){return"".concat(c,"x")})).concat(d4.map(function(c){return"w-".concat(c)})),p2=J.FontAwesomeConfig||{};function g4(c){var a=u.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function L4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}u&&typeof u.querySelector=="function"&&(j1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],j1.forEach(function(c){var a=f1(c,2),e=a[0],n=a[1],r=L4(g4(e));r!=null&&(p2[n]=r)}));var j1,u3={styleDefault:"solid",familyDefault:"classic",cssPrefix:h3,replacementClass:V3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};p2.familyPrefix&&(p2.cssPrefix=p2.familyPrefix);var v2=v(v({},u3),p2);v2.autoReplaceSvg||(v2.observeMutations=!1);var z={};Object.keys(u3).forEach(function(c){Object.defineProperty(z,c,{enumerable:!0,set:function(e){v2[c]=e,h2.forEach(function(n){return n(z)})},get:function(){return v2[c]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(a){v2.cssPrefix=a,h2.forEach(function(e){return e(z)})},get:function(){return v2.cssPrefix}});J.FontAwesomeConfig=z;var h2=[];function x4(c){return h2.push(c),function(){h2.splice(h2.indexOf(c),1)}}var K=Z2,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function b4(c){if(!(!c||!j)){var a=u.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=u.head.childNodes,n=null,r=e.length-1;r>-1;r--){var i=e[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(n=i)}return u.head.insertBefore(a,n),c}}var N4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function u2(){for(var c=12,a="";c-- >0;)a+=N4[Math.random()*62|0];return a}function H2(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function z1(c){return c.classList?H2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function g3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function S4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(g3(c[e]),'" ')},"").trim()}function E2(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function p1(c){return c.size!==I.size||c.x!==I.x||c.y!==I.y||c.rotate!==I.rotate||c.flipX||c.flipY}function w4(c){var a=c.transform,e=c.containerWidth,n=c.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),s="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),o="rotate(".concat(a.rotate," 0 0)"),t={transform:"".concat(i," ").concat(s," ").concat(o)},H={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:t,path:H}}function k4(c){var a=c.transform,e=c.width,n=e===void 0?Z2:e,r=c.height,i=r===void 0?Z2:r,s=c.startCentered,o=s===void 0?!1:s,t="";return o&&p3?t+="translate(".concat(a.x/K-n/2,"em, ").concat(a.y/K-i/2,"em) "):o?t+="translate(calc(-50% + ".concat(a.x/K,"em), calc(-50% + ").concat(a.y/K,"em)) "):t+="translate(".concat(a.x/K,"em, ").concat(a.y/K,"em) "),t+="scale(".concat(a.size/K*(a.flipX?-1:1),", ").concat(a.size/K*(a.flipY?-1:1),") "),t+="rotate(".concat(a.rotate,"deg) "),t}var y4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function L3(){var c=h3,a=V3,e=z.cssPrefix,n=z.replacementClass,r=y4;if(e!==c||n!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),s=new RegExp("\\--".concat(c,"\\-"),"g"),o=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(e,"-")).replace(s,"--".concat(e,"-")).replace(o,".".concat(n))}return r}var $1=!1;function X2(){z.autoAddCss&&!$1&&(b4(L3()),$1=!0)}var P4={mixout:function(){return{dom:{css:L3,insertCss:X2}}},hooks:function(){return{beforeDOMElementCreation:function(){X2()},beforeI2svg:function(){X2()}}}},W=J||{};W[q]||(W[q]={});W[q].styles||(W[q].styles={});W[q].hooks||(W[q].hooks={});W[q].shims||(W[q].shims=[]);var B=W[q],x3=[],A4=function c(){u.removeEventListener("DOMContentLoaded",c),D2=1,x3.map(function(a){return a()})},D2=!1;j&&(D2=(u.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(u.readyState),D2||u.addEventListener("DOMContentLoaded",A4));function O4(c){j&&(D2?setTimeout(c,0):x3.push(c))}function x2(c){var a=c.tag,e=c.attributes,n=e===void 0?{}:e,r=c.children,i=r===void 0?[]:r;return typeof c=="string"?g3(c):"<".concat(a," ").concat(S4(n),">").concat(i.map(x2).join(""),"</").concat(a,">")}function X1(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var T4=function(a,e){return function(n,r,i,s){return a.call(e,n,r,i,s)}},Y2=function(a,e,n,r){var i=Object.keys(a),s=i.length,o=r!==void 0?T4(e,r):e,t,H,l;for(n===void 0?(t=1,l=a[i[0]]):(t=0,l=n);t<s;t++)H=i[t],l=o(l,a[H],H,a);return l};function F4(c){for(var a=[],e=0,n=c.length;e<n;){var r=c.charCodeAt(e++);if(r>=55296&&r<=56319&&e<n){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((r&1023)<<10)+(i&1023)+65536):(a.push(r),e--)}else a.push(r)}return a}function a1(c){var a=F4(c);return a.length===1?a[0].toString(16):null}function _4(c,a){var e=c.length,n=c.charCodeAt(a),r;return n>=55296&&n<=56319&&e>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(n-55296)*1024+r-56320+65536:n}function Y1(c){return Object.keys(c).reduce(function(a,e){var n=c[e],r=!!n.icon;return r?a[n.iconName]=n.icon:a[e]=n,a},{})}function e1(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=e.skipHooks,r=n===void 0?!1:n,i=Y1(a);typeof B.hooks.addPack=="function"&&!r?B.hooks.addPack(c,Y1(a)):B.styles[c]=v(v({},B.styles[c]||{}),i),c==="fas"&&e1("fa",a)}var A2,O2,T2,f2=B.styles,B4=B.shims,D4=(A2={},S(A2,C,Object.values(d2[C])),S(A2,L,Object.values(d2[L])),A2),h1=null,b3={},N3={},S3={},w3={},k3={},R4=(O2={},S(O2,C,Object.keys(V2[C])),S(O2,L,Object.keys(V2[L])),O2);function E4(c){return~u4.indexOf(c)}function U4(c,a){var e=a.split("-"),n=e[0],r=e.slice(1).join("-");return n===c&&r!==""&&!E4(r)?r:null}var y3=function(){var a=function(i){return Y2(f2,function(s,o,t){return s[t]=Y2(o,i,{}),s},{})};b3=a(function(r,i,s){if(i[3]&&(r[i[3]]=s),i[2]){var o=i[2].filter(function(t){return typeof t=="number"});o.forEach(function(t){r[t.toString(16)]=s})}return r}),N3=a(function(r,i,s){if(r[s]=s,i[2]){var o=i[2].filter(function(t){return typeof t=="string"});o.forEach(function(t){r[t]=s})}return r}),k3=a(function(r,i,s){var o=i[2];return r[s]=s,o.forEach(function(t){r[t]=s}),r});var e="far"in f2||z.autoFetchSvg,n=Y2(B4,function(r,i){var s=i[0],o=i[1],t=i[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:t}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:t}),r},{names:{},unicodes:{}});S3=n.names,w3=n.unicodes,h1=U2(z.styleDefault,{family:z.familyDefault})};x4(function(c){h1=U2(c.styleDefault,{family:z.familyDefault})});y3();function V1(c,a){return(b3[c]||{})[a]}function I4(c,a){return(N3[c]||{})[a]}function r2(c,a){return(k3[c]||{})[a]}function P3(c){return S3[c]||{prefix:null,iconName:null}}function q4(c){var a=w3[c],e=V1("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function Z(){return h1}var M1=function(){return{prefix:null,iconName:null,rest:[]}};function U2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,n=e===void 0?C:e,r=V2[n][c],i=M2[n][c]||M2[n][r],s=c in B.styles?c:null;return i||s||null}var Q1=(T2={},S(T2,C,Object.keys(d2[C])),S(T2,L,Object.keys(d2[L])),T2);function I2(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,i=(a={},S(a,C,"".concat(z.cssPrefix,"-").concat(C)),S(a,L,"".concat(z.cssPrefix,"-").concat(L)),a),s=null,o=C;(c.includes(i[C])||c.some(function(H){return Q1[C].includes(H)}))&&(o=C),(c.includes(i[L])||c.some(function(H){return Q1[L].includes(H)}))&&(o=L);var t=c.reduce(function(H,l){var p=U4(z.cssPrefix,l);if(f2[l]?(l=D4[o].includes(l)?p4[o][l]:l,s=l,H.prefix=l):R4[o].indexOf(l)>-1?(s=l,H.prefix=U2(l,{family:o})):p?H.iconName=p:l!==z.replacementClass&&l!==i[C]&&l!==i[L]&&H.rest.push(l),!r&&H.prefix&&H.iconName){var M=s==="fa"?P3(H.iconName):{},d=r2(H.prefix,H.iconName);M.prefix&&(s=null),H.iconName=M.iconName||d||H.iconName,H.prefix=M.prefix||H.prefix,H.prefix==="far"&&!f2.far&&f2.fas&&!z.autoFetchSvg&&(H.prefix="fas")}return H},M1());return(c.includes("fa-brands")||c.includes("fab"))&&(t.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(t.prefix="fad"),!t.prefix&&o===L&&(f2.fass||z.autoFetchSvg)&&(t.prefix="fass",t.iconName=r2(t.prefix,t.iconName)||t.iconName),(t.prefix==="fa"||s==="fa")&&(t.prefix=Z()||"fas"),t}var W4=function(){function c(){n4(this,c),this.definitions={}}return r4(c,[{key:"add",value:function(){for(var e=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var s=r.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){e.definitions[o]=v(v({},e.definitions[o]||{}),s[o]),e1(o,s[o]);var t=d2[C][o];t&&e1(t,s[o]),y3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(i){var s=r[i],o=s.prefix,t=s.iconName,H=s.icon,l=H[2];e[o]||(e[o]={}),l.length>0&&l.forEach(function(p){typeof p=="string"&&(e[o][p]=H)}),e[o][t]=H}),e}}]),c}(),K1=[],l2={},m2={},G4=Object.keys(m2);function j4(c,a){var e=a.mixoutsTo;return K1=c,l2={},Object.keys(m2).forEach(function(n){G4.indexOf(n)===-1&&delete m2[n]}),K1.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(s){typeof r[s]=="function"&&(e[s]=r[s]),B2(r[s])==="object"&&Object.keys(r[s]).forEach(function(o){e[s]||(e[s]={}),e[s][o]=r[s][o]})}),n.hooks){var i=n.hooks();Object.keys(i).forEach(function(s){l2[s]||(l2[s]=[]),l2[s].push(i[s])})}n.provides&&n.provides(m2)}),e}function n1(c,a){for(var e=arguments.length,n=new Array(e>2?e-2:0),r=2;r<e;r++)n[r-2]=arguments[r];var i=l2[c]||[];return i.forEach(function(s){a=s.apply(null,[a].concat(n))}),a}function s2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),n=1;n<a;n++)e[n-1]=arguments[n];var r=l2[c]||[];r.forEach(function(i){i.apply(null,e)})}function G(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return m2[c]?m2[c].apply(null,a):void 0}function r1(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||Z();if(a)return a=r2(e,a)||a,X1(A3.definitions,e,a)||X1(B.styles,e,a)}var A3=new W4,$4=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,s2("noAuto")},X4={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(s2("beforeI2svg",a),G("pseudoElements2svg",a),G("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,O4(function(){Q4({autoReplaceSvgRoot:e}),s2("watch",a)})}},Y4={icon:function(a){if(a===null)return null;if(B2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:r2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],n=U2(a[0]);return{prefix:n,iconName:r2(n,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(z.cssPrefix,"-"))>-1||a.match(h4))){var r=I2(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||Z(),iconName:r2(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=Z();return{prefix:i,iconName:r2(i,a)||a}}}},T={noAuto:$4,config:z,dom:X4,parse:Y4,library:A3,findIconDefinition:r1,toHtml:x2},Q4=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,n=e===void 0?u:e;(Object.keys(B.styles).length>0||z.autoFetchSvg)&&j&&z.autoReplaceSvg&&T.dom.i2svg({node:n})};function q2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(n){return x2(n)})}}),Object.defineProperty(c,"node",{get:function(){if(j){var n=u.createElement("div");return n.innerHTML=c.html,n.children}}}),c}function K4(c){var a=c.children,e=c.main,n=c.mask,r=c.attributes,i=c.styles,s=c.transform;if(p1(s)&&e.found&&!n.found){var o=e.width,t=e.height,H={x:o/t/2,y:.5};r.style=E2(v(v({},i),{},{"transform-origin":"".concat(H.x+s.x/16,"em ").concat(H.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function J4(c){var a=c.prefix,e=c.iconName,n=c.children,r=c.attributes,i=c.symbol,s=i===!0?"".concat(a,"-").concat(z.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:v(v({},r),{},{id:s}),children:n}]}]}function d1(c){var a=c.icons,e=a.main,n=a.mask,r=c.prefix,i=c.iconName,s=c.transform,o=c.symbol,t=c.title,H=c.maskId,l=c.titleId,p=c.extra,M=c.watchable,d=M===void 0?!1:M,y=n.found?n:e,F=y.width,_=y.height,D=r==="fak",w=[z.replacementClass,i?"".concat(z.cssPrefix,"-").concat(i):""].filter(function(X){return p.classes.indexOf(X)===-1}).filter(function(X){return X!==""||!!X}).concat(p.classes).join(" "),P={children:[],attributes:v(v({},p.attributes),{},{"data-prefix":r,"data-icon":i,class:w,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(F," ").concat(_)})},R=D&&!~p.classes.indexOf("fa-fw")?{width:"".concat(F/_*16*.0625,"em")}:{};d&&(P.attributes[i2]=""),t&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(l||u2())},children:[t]}),delete P.attributes.title);var O=v(v({},P),{},{prefix:r,iconName:i,main:e,mask:n,maskId:H,transform:s,symbol:o,styles:v(v({},R),p.styles)}),a2=n.found&&e.found?G("generateAbstractMask",O)||{children:[],attributes:{}}:G("generateAbstractIcon",O)||{children:[],attributes:{}},e2=a2.children,j2=a2.attributes;return O.children=e2,O.attributes=j2,o?J4(O):K4(O)}function J1(c){var a=c.content,e=c.width,n=c.height,r=c.transform,i=c.title,s=c.extra,o=c.watchable,t=o===void 0?!1:o,H=v(v(v({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});t&&(H[i2]="");var l=v({},s.styles);p1(r)&&(l.transform=k4({transform:r,startCentered:!0,width:e,height:n}),l["-webkit-transform"]=l.transform);var p=E2(l);p.length>0&&(H.style=p);var M=[];return M.push({tag:"span",attributes:H,children:[a]}),i&&M.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),M}function Z4(c){var a=c.content,e=c.title,n=c.extra,r=v(v(v({},n.attributes),e?{title:e}:{}),{},{class:n.classes.join(" ")}),i=E2(n.styles);i.length>0&&(r.style=i);var s=[];return s.push({tag:"span",attributes:r,children:[a]}),e&&s.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),s}var Q2=B.styles;function i1(c){var a=c[0],e=c[1],n=c.slice(4),r=f1(n,1),i=r[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(n2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(n2.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(n2.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:s}}var c6={found:!1,width:512,height:512};function a6(c,a){!M3&&!z.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function s1(c,a){var e=a;return a==="fa"&&z.styleDefault!==null&&(a=Z()),new Promise(function(n,r){var i={found:!1,width:512,height:512,icon:G("missingIconAbstract")||{}};if(e==="fa"){var s=P3(c)||{};c=s.iconName||c,a=s.prefix||a}if(c&&a&&Q2[a]&&Q2[a][c]){var o=Q2[a][c];return n(i1(o))}a6(c,a),n(v(v({},c6),{},{icon:z.showMissingIcons&&c?G("missingIconAbstract")||{}:{}}))})}var Z1=function(){},o1=z.measurePerformance&&N2&&N2.mark&&N2.measure?N2:{mark:Z1,measure:Z1},z2='FA "6.5.1"',e6=function(a){return o1.mark("".concat(z2," ").concat(a," begins")),function(){return O3(a)}},O3=function(a){o1.mark("".concat(z2," ").concat(a," ends")),o1.measure("".concat(z2," ").concat(a),"".concat(z2," ").concat(a," begins"),"".concat(z2," ").concat(a," ends"))},C1={begin:e6,end:O3},F2=function(){};function c3(c){var a=c.getAttribute?c.getAttribute(i2):null;return typeof a=="string"}function n6(c){var a=c.getAttribute?c.getAttribute(m1):null,e=c.getAttribute?c.getAttribute(v1):null;return a&&e}function r6(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(z.replacementClass)}function i6(){if(z.autoReplaceSvg===!0)return _2.replace;var c=_2[z.autoReplaceSvg];return c||_2.replace}function s6(c){return u.createElementNS("http://www.w3.org/2000/svg",c)}function o6(c){return u.createElement(c)}function T3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,n=e===void 0?c.tag==="svg"?s6:o6:e;if(typeof c=="string")return u.createTextNode(c);var r=n(c.tag);Object.keys(c.attributes||[]).forEach(function(s){r.setAttribute(s,c.attributes[s])});var i=c.children||[];return i.forEach(function(s){r.appendChild(T3(s,{ceFn:n}))}),r}function t6(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var _2={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(r){e.parentNode.insertBefore(T3(r),e)}),e.getAttribute(i2)===null&&z.keepOriginalSource){var n=u.createComment(t6(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(a){var e=a[0],n=a[1];if(~z1(e).indexOf(z.replacementClass))return _2.replace(a);var r=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce(function(o,t){return t===z.replacementClass||t.match(r)?o.toSvg.push(t):o.toNode.push(t),o},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var s=n.map(function(o){return x2(o)}).join(`
`);e.setAttribute(i2,""),e.innerHTML=s}};function a3(c){c()}function F3(c,a){var e=typeof a=="function"?a:F2;if(c.length===0)e();else{var n=a3;z.mutateApproach===H4&&(n=J.requestAnimationFrame||a3),n(function(){var r=i6(),i=C1.begin("mutate");c.map(r),i(),e()})}}var u1=!1;function _3(){u1=!0}function t1(){u1=!1}var R2=null;function e3(c){if(W1&&z.observeMutations){var a=c.treeCallback,e=a===void 0?F2:a,n=c.nodeCallback,r=n===void 0?F2:n,i=c.pseudoElementsCallback,s=i===void 0?F2:i,o=c.observeMutationsRoot,t=o===void 0?u:o;R2=new W1(function(H){if(!u1){var l=Z();H2(H).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!c3(p.addedNodes[0])&&(z.searchPseudoElements&&s(p.target),e(p.target)),p.type==="attributes"&&p.target.parentNode&&z.searchPseudoElements&&s(p.target.parentNode),p.type==="attributes"&&c3(p.target)&&~C4.indexOf(p.attributeName))if(p.attributeName==="class"&&n6(p.target)){var M=I2(z1(p.target)),d=M.prefix,y=M.iconName;p.target.setAttribute(m1,d||l),y&&p.target.setAttribute(v1,y)}else r6(p.target)&&r(p.target)})}}),j&&R2.observe(t,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function f6(){R2&&R2.disconnect()}function l6(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(n,r){var i=r.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(n[s]=o.join(":").trim()),n},{})),e}function m6(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),n=c.innerText!==void 0?c.innerText.trim():"",r=I2(z1(c));return r.prefix||(r.prefix=Z()),a&&e&&(r.prefix=a,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=I4(r.prefix,c.innerText)||V1(r.prefix,a1(c.innerText))),!r.iconName&&z.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function v6(c){var a=H2(c.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=c.getAttribute("title"),n=c.getAttribute("data-fa-title-id");return z.autoA11y&&(e?a["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(n||u2()):(a["aria-hidden"]="true",a.focusable="false")),a}function H6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function n3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=m6(c),n=e.iconName,r=e.prefix,i=e.rest,s=v6(c),o=n1("parseNodeAttributes",{},c),t=a.styleParser?l6(c):[];return v({iconName:n,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:t,attributes:s}},o)}var z6=B.styles;function B3(c){var a=z.autoReplaceSvg==="nest"?n3(c,{styleParser:!1}):n3(c);return~a.extra.classes.indexOf(d3)?G("generateLayersText",c,a):G("generateSvgReplacementMutation",c,a)}var c2=new Set;H1.map(function(c){c2.add("fa-".concat(c))});Object.keys(V2[C]).map(c2.add.bind(c2));Object.keys(V2[L]).map(c2.add.bind(c2));c2=g2(c2);function r3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();var e=u.documentElement.classList,n=function(p){return e.add("".concat(G1,"-").concat(p))},r=function(p){return e.remove("".concat(G1,"-").concat(p))},i=z.autoFetchSvg?c2:H1.map(function(l){return"fa-".concat(l)}).concat(Object.keys(z6));i.includes("fa")||i.push("fa");var s=[".".concat(d3,":not([").concat(i2,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(i2,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=H2(c.querySelectorAll(s))}catch{}if(o.length>0)n("pending"),r("complete");else return Promise.resolve();var t=C1.begin("onTree"),H=o.reduce(function(l,p){try{var M=B3(p);M&&l.push(M)}catch(d){M3||d.name==="MissingIcon"&&console.error(d)}return l},[]);return new Promise(function(l,p){Promise.all(H).then(function(M){F3(M,function(){n("active"),n("complete"),r("pending"),typeof a=="function"&&a(),t(),l()})}).catch(function(M){t(),p(M)})})}function p6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;B3(c).then(function(e){e&&F3([e],a)})}function h6(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(a||{}).icon?a:r1(a||{}),r=e.mask;return r&&(r=(r||{}).icon?r:r1(r||{})),c(n,v(v({},e),{},{mask:r}))}}var V6=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,r=n===void 0?I:n,i=e.symbol,s=i===void 0?!1:i,o=e.mask,t=o===void 0?null:o,H=e.maskId,l=H===void 0?null:H,p=e.title,M=p===void 0?null:p,d=e.titleId,y=d===void 0?null:d,F=e.classes,_=F===void 0?[]:F,D=e.attributes,w=D===void 0?{}:D,P=e.styles,R=P===void 0?{}:P;if(a){var O=a.prefix,a2=a.iconName,e2=a.icon;return q2(v({type:"icon"},a),function(){return s2("beforeDOMElementCreation",{iconDefinition:a,params:e}),z.autoA11y&&(M?w["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(y||u2()):(w["aria-hidden"]="true",w.focusable="false")),d1({icons:{main:i1(e2),mask:t?i1(t.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:a2,transform:v(v({},I),r),symbol:s,title:M,maskId:l,titleId:y,extra:{attributes:w,styles:R,classes:_}})})}},M6={mixout:function(){return{icon:h6(V6)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=r3,e.nodeCallback=p6,e}}},provides:function(a){a.i2svg=function(e){var n=e.node,r=n===void 0?u:n,i=e.callback,s=i===void 0?function(){}:i;return r3(r,s)},a.generateSvgReplacementMutation=function(e,n){var r=n.iconName,i=n.title,s=n.titleId,o=n.prefix,t=n.transform,H=n.symbol,l=n.mask,p=n.maskId,M=n.extra;return new Promise(function(d,y){Promise.all([s1(r,o),l.iconName?s1(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(F){var _=f1(F,2),D=_[0],w=_[1];d([e,d1({icons:{main:D,mask:w},prefix:o,iconName:r,transform:t,symbol:H,maskId:p,title:i,titleId:s,extra:M,watchable:!0})])}).catch(y)})},a.generateAbstractIcon=function(e){var n=e.children,r=e.attributes,i=e.main,s=e.transform,o=e.styles,t=E2(o);t.length>0&&(r.style=t);var H;return p1(s)&&(H=G("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(H||i.icon),{children:n,attributes:r}}}},d6={mixout:function(){return{layer:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,i=r===void 0?[]:r;return q2({type:"layer"},function(){s2("beforeDOMElementCreation",{assembler:e,params:n});var s=[];return e(function(o){Array.isArray(o)?o.map(function(t){s=s.concat(t.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(g2(i)).join(" ")},children:s}]})}}}},C6={mixout:function(){return{counter:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.title,i=r===void 0?null:r,s=n.classes,o=s===void 0?[]:s,t=n.attributes,H=t===void 0?{}:t,l=n.styles,p=l===void 0?{}:l;return q2({type:"counter",content:e},function(){return s2("beforeDOMElementCreation",{content:e,params:n}),Z4({content:e.toString(),title:i,extra:{attributes:H,styles:p,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(g2(o))}})})}}}},u6={mixout:function(){return{text:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?I:r,s=n.title,o=s===void 0?null:s,t=n.classes,H=t===void 0?[]:t,l=n.attributes,p=l===void 0?{}:l,M=n.styles,d=M===void 0?{}:M;return q2({type:"text",content:e},function(){return s2("beforeDOMElementCreation",{content:e,params:n}),J1({content:e,transform:v(v({},I),i),title:o,extra:{attributes:p,styles:d,classes:["".concat(z.cssPrefix,"-layers-text")].concat(g2(H))}})})}}},provides:function(a){a.generateLayersText=function(e,n){var r=n.title,i=n.transform,s=n.extra,o=null,t=null;if(p3){var H=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();o=l.width/H,t=l.height/H}return z.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,J1({content:e.innerHTML,width:o,height:t,transform:i,title:r,extra:s,watchable:!0})])}}},g6=new RegExp('"',"ug"),i3=[1105920,1112319];function L6(c){var a=c.replace(g6,""),e=_4(a,0),n=e>=i3[0]&&e<=i3[1],r=a.length===2?a[0]===a[1]:!1;return{value:a1(r?a[0]:a),isSecondary:n||r}}function s3(c,a){var e="".concat(v4).concat(a.replace(":","-"));return new Promise(function(n,r){if(c.getAttribute(e)!==null)return n();var i=H2(c.children),s=i.filter(function(e2){return e2.getAttribute(c1)===a})[0],o=J.getComputedStyle(c,a),t=o.getPropertyValue("font-family").match(V4),H=o.getPropertyValue("font-weight"),l=o.getPropertyValue("content");if(s&&!t)return c.removeChild(s),n();if(t&&l!=="none"&&l!==""){var p=o.getPropertyValue("content"),M=~["Sharp"].indexOf(t[2])?L:C,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(t[2])?M2[M][t[2].toLowerCase()]:M4[M][H],y=L6(p),F=y.value,_=y.isSecondary,D=t[0].startsWith("FontAwesome"),w=V1(d,F),P=w;if(D){var R=q4(F);R.iconName&&R.prefix&&(w=R.iconName,d=R.prefix)}if(w&&!_&&(!s||s.getAttribute(m1)!==d||s.getAttribute(v1)!==P)){c.setAttribute(e,P),s&&c.removeChild(s);var O=H6(),a2=O.extra;a2.attributes[c1]=a,s1(w,d).then(function(e2){var j2=d1(v(v({},O),{},{icons:{main:e2,mask:M1()},prefix:d,iconName:P,extra:a2,watchable:!0})),X=u.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(X,c.firstChild):c.appendChild(X),X.outerHTML=j2.map(function(e4){return x2(e4)}).join(`
`),c.removeAttribute(e),n()}).catch(r)}else n()}else n()})}function x6(c){return Promise.all([s3(c,"::before"),s3(c,"::after")])}function b6(c){return c.parentNode!==document.head&&!~z4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(c1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function o3(c){if(j)return new Promise(function(a,e){var n=H2(c.querySelectorAll("*")).filter(b6).map(x6),r=C1.begin("searchPseudoElements");_3(),Promise.all(n).then(function(){r(),t1(),a()}).catch(function(){r(),t1(),e()})})}var N6={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=o3,e}}},provides:function(a){a.pseudoElements2svg=function(e){var n=e.node,r=n===void 0?u:n;z.searchPseudoElements&&o3(r)}}},t3=!1,S6={mixout:function(){return{dom:{unwatch:function(){_3(),t3=!0}}}},hooks:function(){return{bootstrap:function(){e3(n1("mutationObserverCallbacks",{}))},noAuto:function(){f6()},watch:function(e){var n=e.observeMutationsRoot;t3?t1():e3(n1("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},f3=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(n,r){var i=r.toLowerCase().split("-"),s=i[0],o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)},w6={mixout:function(){return{parse:{transform:function(e){return f3(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,n){var r=n.getAttribute("data-fa-transform");return r&&(e.transform=f3(r)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var n=e.main,r=e.transform,i=e.containerWidth,s=e.iconWidth,o={transform:"translate(".concat(i/2," 256)")},t="translate(".concat(r.x*32,", ").concat(r.y*32,") "),H="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),p={transform:"".concat(t," ").concat(H," ").concat(l)},M={transform:"translate(".concat(s/2*-1," -256)")},d={outer:o,inner:p,path:M};return{tag:"g",attributes:v({},d.outer),children:[{tag:"g",attributes:v({},d.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:v(v({},n.icon.attributes),d.path)}]}]}}}},K2={x:0,y:0,width:"100%",height:"100%"};function l3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function k6(c){return c.tag==="g"?c.children:[c]}var y6={hooks:function(){return{parseNodeAttributes:function(e,n){var r=n.getAttribute("data-fa-mask"),i=r?I2(r.split(" ").map(function(s){return s.trim()})):M1();return i.prefix||(i.prefix=Z()),e.mask=i,e.maskId=n.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var n=e.children,r=e.attributes,i=e.main,s=e.mask,o=e.maskId,t=e.transform,H=i.width,l=i.icon,p=s.width,M=s.icon,d=w4({transform:t,containerWidth:p,iconWidth:H}),y={tag:"rect",attributes:v(v({},K2),{},{fill:"white"})},F=l.children?{children:l.children.map(l3)}:{},_={tag:"g",attributes:v({},d.inner),children:[l3(v({tag:l.tag,attributes:v(v({},l.attributes),d.path)},F))]},D={tag:"g",attributes:v({},d.outer),children:[_]},w="mask-".concat(o||u2()),P="clip-".concat(o||u2()),R={tag:"mask",attributes:v(v({},K2),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,D]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:k6(M)},R]};return n.push(O,{tag:"rect",attributes:v({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(w,")")},K2)}),{children:n,attributes:r}}}},P6={provides:function(a){var e=!1;J.matchMedia&&(e=J.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:v(v({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=v(v({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:v(v({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:v(v({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:v(v({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:v(v({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:v(v({},s),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:v(v({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:v(v({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},A6={hooks:function(){return{parseNodeAttributes:function(e,n){var r=n.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},O6=[P4,M6,d6,C6,u6,N6,S6,w6,y6,P6,A6];j4(O6,{mixoutsTo:T});var t0=T.noAuto,f0=T.config,l0=T.library,m0=T.dom,D3=T.parse,v0=T.findIconDefinition,H0=T.toHtml,R3=T.icon,z0=T.layer,T6=T.text,F6=T.counter;var _6=["*"],B6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},D6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},R6=c=>{let a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(e=>a[e]?e:null).filter(e=>e)},E6=c=>c.prefix!==void 0&&c.iconName!==void 0,U6=(c,a)=>E6(c)?c:typeof c=="string"?{prefix:a,iconName:c}:{prefix:c[0],iconName:c[1]},I6=(()=>{let a=class a{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};a.\u0275fac=function(r){return new(r||a)},a.\u0275prov=$2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),q6=(()=>{let a=class a{constructor(){this.definitions={}}addIcons(...n){for(let r of n){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(let i of r.icon[2])typeof i=="string"&&(this.definitions[r.prefix][i]=r)}}addIconPacks(...n){for(let r of n){let i=Object.keys(r).map(s=>r[s]);this.addIcons(...i)}}getIconDefinition(n,r){return n in this.definitions&&r in this.definitions[n]?this.definitions[n][r]:null}};a.\u0275fac=function(r){return new(r||a)},a.\u0275prov=$2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),W6=(()=>{let a=class a{constructor(){this.stackItemSize="1x"}ngOnChanges(n){if("size"in n)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};a.\u0275fac=function(r){return new(r||a)},a.\u0275dir=L1({type:a,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[b2]});let c=a;return c})(),G6=(()=>{let a=class a{constructor(n,r){this.renderer=n,this.elementRef=r}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(n){"size"in n&&(n.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${n.size.currentValue}`),n.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${n.size.previousValue}`))}};a.\u0275fac=function(r){return new(r||a)(Y(S1),Y(x1))},a.\u0275cmp=x({type:a,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[b2,N],ngContentSelectors:_6,decls:1,vars:0,template:function(r,i){r&1&&(y1(),P1(0))},encapsulation:2});let c=a;return c})(),E3=(()=>{let a=class a{set spin(n){this.animation=n?"spin":void 0}set pulse(n){this.animation=n?"spin-pulse":void 0}constructor(n,r,i,s,o){this.sanitizer=n,this.config=r,this.iconLibrary=i,this.stackItem=s,this.classes=[],o!=null&&s==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(n){if(this.icon==null&&this.config.fallbackIcon==null){D6();return}if(n){let r=this.icon!=null?this.icon:this.config.fallbackIcon,i=this.findIconDefinition(r);if(i!=null){let s=this.buildParams();this.renderIcon(i,s)}}}render(){this.ngOnChanges({})}findIconDefinition(n){let r=U6(n,this.config.defaultPrefix);if("icon"in r)return r;let i=this.iconLibrary.getIconDefinition(r.prefix,r.iconName);return i??(B6(r),null)}buildParams(){let n={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},r=typeof this.transform=="string"?D3.transform(this.transform):this.transform;return{title:this.title,transform:r,classes:[...R6(n),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(n,r){let i=R3(n,r);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))}};a.\u0275fac=function(r){return new(r||a)(Y(T1),Y(I6),Y(q6),Y(W6,8),Y(G6,8))},a.\u0275cmp=x({type:a,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(r,i){r&2&&(k1("innerHTML",i.renderedIconHTML,N1),w1("title",i.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[b2,N],decls:0,vars:0,template:function(r,i){},encapsulation:2});let c=a;return c})();var W2=(()=>{let a=class a{};a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=g1({type:a}),a.\u0275inj=b1({});let c=a;return c})();var U3={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]};var $6={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},I3=$6;var X6={prefix:"fas",iconName:"circle-user",icon:[512,512,[62142,"user-circle"],"f2bd","M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"]},q3=X6;var W3=(()=>{let a=class a{constructor(){this.faSearch=I3,this.faUser=q3}};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=x({type:a,selectors:[["app-header"]],standalone:!0,features:[N],decls:24,vars:2,consts:[[1,"logo-navigation"],["id","logo"],[1,"navigation-bar"],[1,"icon",3,"icon"],["type","text","placeholder","Search","id","search"],[1,"header-profile"],[1,"header-tab"],["src","assets/cart-shopping.png","alt","\xCDcone do carrinnho de compras"],["src","assets/sms.png","alt","\xCDcone para chat de conversas"],["src","assets/notification.png","alt","\xCDcone de notifica\xE7\xF5es"],[1,"profile"],["id","nome"],["id","membro"],["src","assets/Plant.png","alt","\xEDcone de membro"],[1,"icon","user",3,"icon"]],template:function(r,i){r&1&&(m(0,"header")(1,"div",0)(2,"h1",1),h(3,"EcoMarket"),f(),m(4,"div",2)(5,"button"),g(6,"fa-icon",3),f(),g(7,"input",4),f()(),m(8,"div",5)(9,"div",6),g(10,"img",7)(11,"img",8)(12,"img",9),f(),m(13,"div",10)(14,"div")(15,"p",11),h(16,"Ol\xE1, "),m(17,"b"),h(18,"Lucas Morais"),f()(),m(19,"div")(20,"p",12),h(21,"Gold Member"),f(),g(22,"img",13),f()(),g(23,"fa-icon",14),f()()()),r&2&&(V(6),b("icon",i.faSearch),V(17),b("icon",i.faUser))},dependencies:[W2,E3],styles:['@font-face{font-family:Dharrochy;src:url("./media/Dharrochy-BODTLCT2.otf") format("opentype"),url("./media/Dharrochy-NBXS2CP5.ttf") format("truetype");font-weight:400;font-style:normal}@media screen and (max-width: 768px){header[_ngcontent-%COMP%]{flex-direction:column-reverse;align-items:center;justify-content:center;height:150px;gap:10px}.logo-navigation[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:10px;width:100%}.logo-navigation[_ngcontent-%COMP%]   .navigation-bar[_ngcontent-%COMP%]{width:220px}.header-profile[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:right;width:100%}}@media screen and (min-width: 769px){header[_ngcontent-%COMP%]{align-items:end;justify-content:space-around;align-items:center;height:74px}header[_ngcontent-%COMP%]   .logo-navigation[_ngcontent-%COMP%]{display:flex;gap:30px}header[_ngcontent-%COMP%]   .logo-navigation[_ngcontent-%COMP%]   .navigation-bar[_ngcontent-%COMP%]{cursor:text;width:100%}header[_ngcontent-%COMP%]   .logo-navigation[_ngcontent-%COMP%]   .navigation-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{cursor:pointer}header[_ngcontent-%COMP%]   .header-profile[_ngcontent-%COMP%]{display:flex;align-items:center;gap:20px}}header[_ngcontent-%COMP%]{width:100%;display:flex;border-radius:0 0 20px 20px;background-color:#fff}header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:Dharrochy,sans-serif;font-size:33px;color:var(--verde-sustentavel)}header[_ngcontent-%COMP%]   .navigation-bar[_ngcontent-%COMP%]{border:solid 1px var(--marrom-terra);padding:3px 20px;border-radius:15px;display:flex;align-items:center;gap:10px}header[_ngcontent-%COMP%]   .navigation-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background-color:transparent}header[_ngcontent-%COMP%]   .navigation-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:14px;color:var(--marrom-terra)}header[_ngcontent-%COMP%]   .navigation-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:var(--marrom-terra);font-size:16px;border:none;width:100%;outline:none}header[_ngcontent-%COMP%]   .header-tab[_ngcontent-%COMP%]{display:flex;gap:10px}header[_ngcontent-%COMP%]   .header-tab[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;width:24px;height:20px}header[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]{display:flex;box-shadow:0 4px 4px #dadada40;width:213px;height:46px;border-radius:25px;align-items:center;justify-content:center;gap:20px;cursor:pointer}header[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:30px;color:var(--verde-sustentavel);background:transparent}header[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:200}header[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{display:flex;flex-direction:column}header[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child   #nome[_ngcontent-%COMP%]{font-size:14px}header[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%]{display:flex;align-items:end;justify-content:end}header[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%]   #membro[_ngcontent-%COMP%]{font-size:12px;color:var(--amarelo-organico)}']});let c=a;return c})();function Y6(c,a){if(c&1&&(m(0,"ul")(1,"li")(2,"p"),h(3),f()()()),c&2){let e=a.$implicit;V(3),k(e)}}function Q6(c,a){if(c&1&&(m(0,"ul")(1,"li")(2,"p"),h(3),f()()()),c&2){let e=a.$implicit;V(3),k(e)}}function K6(c,a){if(c&1&&(m(0,"ul")(1,"li")(2,"p"),h(3),f()()()),c&2){let e=a.$implicit;V(3),k(e)}}function J6(c,a){if(c&1&&(m(0,"ul")(1,"li")(2,"p"),h(3),f()()()),c&2){let e=a.$implicit;V(3),k(e)}}function Z6(c,a){if(c&1&&(m(0,"ul")(1,"li")(2,"p"),h(3),f()()()),c&2){let e=a.$implicit;V(3),k(e)}}function c0(c,a){if(c&1&&(m(0,"ul")(1,"li"),h(2),f()()),c&2){let e=a.$implicit;V(2),k(e)}}var G3=(()=>{let a=class a{constructor(){this.listProducts=["Leite de Am\xEAndoa Org\xE2nico","Queijo Vegano de Castanha de Caju","Hamb\xFArguer de Gr\xE3o de Bico","Iogurte de Coco Sem Lactose","Salsicha Vegetal Defumada","Maionese Vegana de Abacate","Chocolate Amargo Vegano","Sorvete de Banana com Chocolate","Pat\xEA de Ervas Finas Sem Ingredientes de Origem Animal","P\xE3o Integral Sem Ovos"],this.listSupport=["Suporte de Produtos","Agendar Reparo","Acompanhar Reparo","Telefones","Contatos Online","Centro de Servi\xE7os","Informa\xE7\xF5es de Garantia","Comunidade","E-mail para o CEO"],this.listAboutUs=["Informa\xE7\xF5es da empresa","\xC1rea de neg\xF3cios","Identidade da marca","Carreiras","Rela\xE7\xF5es com investidores","Not\xEDcias","\xC9tica","Loja f\xEDsica"],this.listAccount=["Gerenciar seu ID EcoMarket","Conta da EcoMarket"],this.listSustainability=["Meio ambiente","Seguran\xE7a e Privacidade","Acessibilidade","Diversidade \xB7 Equidade \xB7 Inclus\xE3o","Cidadania corporativa","Sustentabilidade Corporativa"],this.listTerms=["Termos & Condi\xE7\xF5es","Loja Online","Privacidade","Cookies","Legal","Mapa do site","Ciberseguran\xE7a"]}};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=x({type:a,selectors:[["app-footer"]],standalone:!0,features:[N],decls:36,vars:6,consts:[[1,"listas"],[4,"ngFor","ngForOf"],[1,"direitos"],[1,"terms"]],template:function(r,i){r&1&&(m(0,"footer")(1,"section",0)(2,"div")(3,"h2"),h(4,"Produtos"),f(),A(5,Y6,4,1,"ul",1),f(),m(6,"div")(7,"h2"),h(8,"Sustentabilidade"),f(),A(9,Q6,4,1,"ul",1),f(),m(10,"div")(11,"h2"),h(12,"Quem somos"),f(),A(13,K6,4,1,"ul",1),f(),m(14,"div")(15,"h2"),h(16,"Suporte"),f(),A(17,J6,4,1,"ul",1),f(),m(18,"div")(19,"h2"),h(20,"Sua Conta"),f(),A(21,Z6,4,1,"ul",1),f()(),m(22,"section",2)(23,"p"),h(24," Direitos Autorais \xA9 2024 EcoMarket. Todos os direitos reservados. "),f(),m(25,"p"),h(26," ECOMARKET SUSTENT\xC1VEL LTDA., com sede em Rua das \xC1rvores, n\xBA 123, Jardim Ecol\xF3gico, Cidade Verde, 12345-678, inscrita no CNPJ/MF sob o n\xBA. 12.345.678/0001-90. "),f(),m(27,"p"),h(28," Este site \xE9 otimizado para os navegadores mais recentes, como Google Chrome, Mozilla Firefox, e Microsoft Edge. "),f(),m(29,"p"),h(30," M\xE9todos de pagamento aceitos: Cart\xE3o de cr\xE9dito (Visa, MasterCard, American Express), PayPal, Boleto banc\xE1rio, Transfer\xEAncia banc\xE1ria e EcoPay. "),f()(),m(31,"section",3)(32,"div")(33,"h2"),h(34,"Brasil/Portugu\xEAs"),f()(),A(35,c0,3,1,"ul",1),f()()),r&2&&(V(5),b("ngForOf",i.listProducts),V(4),b("ngForOf",i.listSustainability),V(4),b("ngForOf",i.listAboutUs),V(4),b("ngForOf",i.listSupport),V(4),b("ngForOf",i.listAccount),V(14),b("ngForOf",i.listTerms))},dependencies:[U,E],styles:["@media screen and (max-width: 430px){footer[_ngcontent-%COMP%]{width:100%;background-color:#f9f9f9;display:flex;flex-direction:column;padding:50px 0}footer[_ngcontent-%COMP%]   .listas[_ngcontent-%COMP%]{flex-direction:column}footer[_ngcontent-%COMP%]   .listas[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}footer[_ngcontent-%COMP%]   .listas[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:20px 0}footer[_ngcontent-%COMP%]   .listas[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:5px 0}footer[_ngcontent-%COMP%]   .listas[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;font-weight:300;text-align:justify}footer[_ngcontent-%COMP%]   .direitos[_ngcontent-%COMP%]{gap:5px;padding:10px 33px}footer[_ngcontent-%COMP%]   .terms[_ngcontent-%COMP%]{flex-direction:column;gap:20px}}@media screen and (min-width: 431px){footer[_ngcontent-%COMP%]   .listas[_ngcontent-%COMP%]{justify-content:space-between}footer[_ngcontent-%COMP%]   .listas[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:216px}footer[_ngcontent-%COMP%]   .listas[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:20px}footer[_ngcontent-%COMP%]   .listas[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{width:80%}footer[_ngcontent-%COMP%]   .listas[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover{text-decoration:underline}footer[_ngcontent-%COMP%]   .direitos[_ngcontent-%COMP%]{gap:5px;padding:10px 33px}footer[_ngcontent-%COMP%]   .terms[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{border-right:solid 1px var(--marrom-terra);padding-right:20px}footer[_ngcontent-%COMP%]   .terms[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer}}footer[_ngcontent-%COMP%]{width:100%;background-color:#f9f9f9;display:flex;flex-direction:column;padding:50px 0}footer[_ngcontent-%COMP%]   .listas[_ngcontent-%COMP%]{display:flex;padding-left:33px}footer[_ngcontent-%COMP%]   .listas[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:var(--marrom-terra);font-size:24px;font-weight:400}footer[_ngcontent-%COMP%]   .listas[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:5px 0}footer[_ngcontent-%COMP%]   .listas[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;font-weight:300;text-align:justify}footer[_ngcontent-%COMP%]   .direitos[_ngcontent-%COMP%]{border-top:solid 1px var(--marrom-terra);border-bottom:solid 1px var(--marrom-terra);display:flex;flex-direction:column}footer[_ngcontent-%COMP%]   .direitos[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;font-weight:200}footer[_ngcontent-%COMP%]   .terms[_ngcontent-%COMP%]{display:flex;align-items:center;padding-left:33px;margin-top:20px}footer[_ngcontent-%COMP%]   .terms[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:16px;font-weight:600}footer[_ngcontent-%COMP%]   .terms[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;width:120px;text-align:center;padding:0 10px}footer[_ngcontent-%COMP%]   .terms[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:12px}"]});let c=a;return c})();var j3=(()=>{let a=class a{constructor(){this.title="EcoMarket"}};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=x({type:a,selectors:[["app-root"]],standalone:!0,features:[N],decls:3,vars:0,template:function(r,i){r&1&&g(0,"app-header")(1,"router-outlet")(2,"app-footer")},dependencies:[B1,W3,G3]});let c=a;return c})();var $3=(()=>{let a=class a{};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=x({type:a,selectors:[["app-banner"]],standalone:!0,features:[N],decls:24,vars:0,consts:[["id","banner"],["id","promo"],["id","side-right"],["id","cupom"],["id","porcent"],["id","info-cupom"]],template:function(r,i){r&1&&(m(0,"div",0)(1,"section")(2,"header")(3,"div",1)(4,"h2"),h(5,"Fique mais saud\xE1vel"),g(6,"br"),h(7," com a promo\xE7\xE3o 9.9"),f(),m(8,"button"),h(9,"Compre agora"),f()(),m(10,"div",2)(11,"div",3)(12,"div")(13,"h2",4),h(14,"90%"),f(),m(15,"p"),h(16,"Todos os produtos"),f()(),m(17,"div",5)(18,"p"),h(19,"V\xE1lido at\xE9 "),m(20,"b"),h(21,"11 de jan"),f()(),m(22,"button"),h(23,"Resgatar"),f()()()()()()())},styles:['@media screen and (max-width: 430px){section[_ngcontent-%COMP%]{display:flex;flex-direction:column}section[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{flex-direction:column;gap:20px}section[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   #promo[_ngcontent-%COMP%]{align-items:center}section[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px;text-align:center}section[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   #side-right[_ngcontent-%COMP%]{display:flex;justify-content:center}section[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   #side-right[_ngcontent-%COMP%]   #cupom[_ngcontent-%COMP%]{width:200px;height:90px}section[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   #side-right[_ngcontent-%COMP%]   #cupom[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{width:110px}section[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   #side-right[_ngcontent-%COMP%]   #cupom[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child   #porcent[_ngcontent-%COMP%]{font-size:30px}section[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   #side-right[_ngcontent-%COMP%]   #cupom[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child   p[_ngcontent-%COMP%]{font-size:12px;text-align:center}section[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{justify-content:center}}@media screen and (max-width: 768px) and (min-width: 431px){section[_ngcontent-%COMP%]{display:flex;flex-direction:column}section[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{gap:20px;justify-content:space-around}section[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:28px;text-align:center}section[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   #side-right[_ngcontent-%COMP%]{display:flex;justify-content:center}section[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   #side-right[_ngcontent-%COMP%]   #cupom[_ngcontent-%COMP%]{width:250px;height:90px}section[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   #side-right[_ngcontent-%COMP%]   #cupom[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{width:110px}section[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   #side-right[_ngcontent-%COMP%]   #cupom[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child   #porcent[_ngcontent-%COMP%]{font-size:30px}section[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   #side-right[_ngcontent-%COMP%]   #cupom[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child   p[_ngcontent-%COMP%]{font-size:12px;text-align:center}section[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{justify-content:center}}@media screen and (min-width: 769px){section[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{justify-content:space-around}section[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:49px;font-weight:700;color:var(--verde-sustentavel)}section[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   #side-right[_ngcontent-%COMP%]   #cupom[_ngcontent-%COMP%]{width:381px;height:116px}section[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   #side-right[_ngcontent-%COMP%]   #cupom[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{width:146px}section[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   #side-right[_ngcontent-%COMP%]   #cupom[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child   #porcent[_ngcontent-%COMP%]{font-size:40px}section[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   #side-right[_ngcontent-%COMP%]   #cupom[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child   p[_ngcontent-%COMP%]{font-size:14px}section[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{width:454px}}#banner[_ngcontent-%COMP%]{background:url("./media/banner-01-FWLJ2BN2.png");width:100%;height:300px;border-radius:30px;display:flex;justify-content:center;flex-direction:column}#banner[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:15px}#banner[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{display:flex}#banner[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   #promo[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}#banner[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   #promo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;border-radius:22px;width:158px;height:30px;background-color:var(--branco-puro);color:var(--verde-sustentavel);font-size:15px;font-weight:200;cursor:pointer}#banner[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;color:var(--verde-sustentavel)}#banner[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   #side-right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:30px}#banner[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   #side-right[_ngcontent-%COMP%]   #cupom[_ngcontent-%COMP%]{display:flex;background-color:var(--branco-puro);border-radius:20px;gap:10px}#banner[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   #side-right[_ngcontent-%COMP%]   #cupom[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{background-color:var(--verde-sustentavel);color:var(--branco-puro);border-radius:20px 0 0 20px;display:flex;flex-direction:column;align-items:center;justify-content:center}#banner[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   #side-right[_ngcontent-%COMP%]   #cupom[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child   #porcent[_ngcontent-%COMP%]{color:var(--branco-puro);font-weight:700}#banner[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   #side-right[_ngcontent-%COMP%]   #cupom[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child   p[_ngcontent-%COMP%]{font-weight:300}#banner[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   #side-right[_ngcontent-%COMP%]   #cupom[_ngcontent-%COMP%]   #info-cupom[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;gap:6px}#banner[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   #side-right[_ngcontent-%COMP%]   #cupom[_ngcontent-%COMP%]   #info-cupom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;font-weight:300}#banner[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   #side-right[_ngcontent-%COMP%]   #cupom[_ngcontent-%COMP%]   #info-cupom[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;border-radius:10px;background-color:var(--verde-sustentavel);color:var(--branco-puro);width:90px;height:20px;cursor:pointer}']});let c=a;return c})();function a0(c,a){if(c&1&&(m(0,"div",2)(1,"div",3),g(2,"img",4),m(3,"p"),h(4),f()(),m(5,"div",5)(6,"p"),h(7),f(),m(8,"p",6),h(9),f(),m(10,"button"),h(11,"Adicionar ao carrinho"),f()()()),c&2){let e=a.$implicit;V(2),t2("src",e.img,o2),V(2),k(e.name),V(3),Q("R$ ",e.discount,""),V(2),Q("R$ ",e.price,"")}}var X3=(()=>{let a=class a{};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=x({type:a,selectors:[["app-green-sale"]],inputs:{products:"products"},standalone:!0,features:[N],decls:5,vars:1,consts:[["id","conteiner"],["id","card-item",4,"ngFor","ngForOf"],["id","card-item"],["id","content-up"],["alt","",3,"src"],["id","content-down"],["id","no-discount"]],template:function(r,i){r&1&&(m(0,"section")(1,"h2"),h(2,"Produtos com desconto"),f(),m(3,"div",0),A(4,a0,12,4,"div",1),f()()),r&2&&(V(4),b("ngForOf",i.products))},dependencies:[U,E],styles:["section[_ngcontent-%COMP%]{margin-top:40px;display:flex;flex-direction:column;align-items:center;gap:50px}section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]{display:flex;width:80vw;padding:5px 10px;gap:10px;overflow-x:scroll}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]   #card-item[_ngcontent-%COMP%]{box-shadow:0 4px 8px 2px #dbdbdb80;border-radius:8px;padding:12px;cursor:pointer;display:flex;flex-direction:column;justify-content:space-around;width:190px;height:275px}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]   #card-item[_ngcontent-%COMP%]   #content-up[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;border-radius:8px 8px 0 0}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]   #card-item[_ngcontent-%COMP%]   #content-up[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:128px;height:96px}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]   #card-item[_ngcontent-%COMP%]   #content-up[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;font-weight:400;text-align:center}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]   #card-item[_ngcontent-%COMP%]   #content-down[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]   #card-item[_ngcontent-%COMP%]   #content-down[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child{font-size:18px;font-weight:500}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]   #card-item[_ngcontent-%COMP%]   #content-down[_ngcontent-%COMP%]   #no-discount[_ngcontent-%COMP%]{text-decoration:line-through;color:#d9d9d9;font-weight:200}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]   #card-item[_ngcontent-%COMP%]   #content-down[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:5px;width:150px;height:25px;background-color:transparent;border:solid 2px var(--verde-sustentavel);border-radius:4px;color:var(--verde-sustentavel);font-weight:400;cursor:pointer}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]::-webkit-scrollbar{height:5px;background-color:transparent}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--amarelo-organico);border-radius:20px}"]});let c=a;return c})();function e0(c,a){if(c&1&&(m(0,"div",2)(1,"div",3),g(2,"img",4),f(),m(3,"div",5)(4,"div")(5,"p"),h(6),f(),m(7,"p"),h(8),f(),m(9,"p",6),h(10),f()(),m(11,"button"),h(12,"Adicionar ao carrinho"),f()()()),c&2){let e=a.$implicit;V(2),t2("src",e.img,o2),V(4),k(e.name),V(2),Q("R$ ",e.discount,""),V(2),Q("R$ ",e.price,"")}}var Y3=(()=>{let a=class a{constructor(){this.faStar=U3}};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=x({type:a,selectors:[["app-best-rated"]],inputs:{products:"products"},standalone:!0,features:[N],decls:5,vars:1,consts:[["id","conteiner"],["id","card-item",4,"ngFor","ngForOf"],["id","card-item"],["id","content-left"],["alt","Foto do produto",3,"src"],["id","content-right"],["id","no-discount"]],template:function(r,i){r&1&&(m(0,"section")(1,"h2"),h(2,"Mais vistos"),f(),m(3,"div",0),A(4,e0,13,4,"div",1),f()()),r&2&&(V(4),b("ngForOf",i.products))},dependencies:[U,E,W2],styles:["section[_ngcontent-%COMP%]{margin-top:40px;display:flex;flex-direction:column;align-items:center;gap:50px}section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]{display:flex;width:80vw;padding:5px 10px;gap:15px;overflow-x:scroll}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]   #card-item[_ngcontent-%COMP%]{box-shadow:0 4px 8px 2px #dbdbdb80;border-radius:8px;padding:12px;cursor:pointer;display:flex;justify-content:space-around;width:400px;height:200px;gap:15px}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]   #card-item[_ngcontent-%COMP%]   #content-left[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:10px;border-radius:8px 8px 0 0}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]   #card-item[_ngcontent-%COMP%]   #content-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:162px;height:122px}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]   #card-item[_ngcontent-%COMP%]   #content-right[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]   #card-item[_ngcontent-%COMP%]   #content-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;font-weight:400}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]   #card-item[_ngcontent-%COMP%]   #content-right[_ngcontent-%COMP%]   #no-discount[_ngcontent-%COMP%]{text-decoration:line-through;color:#d9d9d9;font-weight:200}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]   #card-item[_ngcontent-%COMP%]   #content-right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:5px;width:150px;height:25px;background-color:transparent;border:solid 2px var(--verde-sustentavel);border-radius:4px;color:var(--verde-sustentavel);font-weight:400;cursor:pointer}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]   #card-item[_ngcontent-%COMP%]   #content-right[_ngcontent-%COMP%]   .yellow-star[_ngcontent-%COMP%]{color:#ebc351;font-size:12px}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]   #card-item[_ngcontent-%COMP%]   #content-right[_ngcontent-%COMP%]   .grey-star[_ngcontent-%COMP%]{color:#c7c7c7;font-size:12px}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]::-webkit-scrollbar{height:5px;background-color:transparent}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--amarelo-organico);border-radius:20px}"]});let c=a;return c})();function n0(c,a){if(c&1&&(m(0,"div",2),g(1,"img",3),m(2,"p"),h(3),f()()),c&2){let e=a.$implicit;V(),t2("src",e.img,o2),V(2),k(e.name)}}var Q3=(()=>{let a=class a{constructor(){this.categorias=[{name:"Vegetais",img:"assets/categorias/legumes-costafarms.png"},{name:"Necessidades di\xE1rias",img:"assets/categorias/pngegg (1) 1.png"},{name:"Bebida",img:"assets/categorias/bebida.png"},{name:"Mudas de \xE1rvores",img:"assets/categorias/muda.png"},{name:"Verde e Fresco",img:"assets/categorias/pngegg (1) 1 (3).png"},{name:"Pacotes de Refei\xE7\xF5es ",img:"assets/categorias/pngegg (1) 1 (2).png"},{name:"Fruta",img:"assets/categorias/pngegg (1) 1 (4).png"},{name:"Comida instant\xE2nea",img:"assets/categorias/pngegg (1) 1 (5).png"},{name:"Suprimentos de jardinagem",img:"assets/categorias/pngegg (1) 1 (6).png"},{name:"Carne Vegetariana",img:"assets/categorias/pngegg (1) 1 (7).png"},{name:"Especiarias de ervas",img:"assets/categorias/pngegg (1) 1 (8).png"},{name:"Outro",img:"assets/categorias/pngegg (1) 1 (1).png"}]}};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=x({type:a,selectors:[["app-category"]],standalone:!0,features:[N],decls:5,vars:1,consts:[[1,"grid"],["class","card",4,"ngFor","ngForOf"],[1,"card"],["alt","Imagem das categorias",3,"src"]],template:function(r,i){r&1&&(m(0,"section")(1,"h2"),h(2,"Categorias"),f(),m(3,"div",0),A(4,n0,4,2,"div",1),f()()),r&2&&(V(4),b("ngForOf",i.categorias))},dependencies:[U,E],styles:["@media screen and (max-width: 1278px) and (min-width: 431px){.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr 2fr 2fr;gap:20px;align-items:center;justify-content:center;padding:5px 10px;margin-top:40px}}@media screen and (min-width: 1279px){.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr 2fr 2fr 2fr 2fr 2fr;gap:20px;width:1240px;height:480px;align-items:center;justify-content:center;padding:5px 10px;margin-top:40px}}section[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-top:40px}section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center}section[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;width:190px;height:190px;border-radius:10px;box-shadow:0 4px 4px #d9d9d980;cursor:pointer}section[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;text-align:center}"]});let c=a;return c})();function r0(c,a){if(c&1&&(m(0,"div",2)(1,"div",3)(2,"div")(3,"h2",4),h(4),f(),m(5,"p"),h(6),f()(),m(7,"div",5)(8,"p"),h(9,"V\xE1lido at\xE9 "),m(10,"b"),h(11),f()(),m(12,"button"),h(13,"Resgatar"),f()()()()),c&2){let e=a.$implicit;V(4),Q("R$ ",e.value,""),V(2),k(e.desc),V(5),k(e.validate)}}var K3=(()=>{let a=class a{constructor(){this.listCupons=[{value:200,desc:"Compras acima de R$ 350",validate:"21 marc"},{value:100,desc:"Compras acima de R$ 180",validate:"13 de marc"},{value:50,desc:"Compras acima de R$ 150",validate:"18 de marc"},{value:150,desc:"Compras acima de R$ 300",validate:"21 de mar"}]}};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=x({type:a,selectors:[["app-cupons"]],standalone:!0,features:[N],decls:5,vars:1,consts:[["id","conteiner"],["id","side-right",4,"ngFor","ngForOf"],["id","side-right"],["id","cupom"],["id","porcent"],["id","info-cupom"]],template:function(r,i){r&1&&(m(0,"section")(1,"h2"),h(2,"Cupons Dispon\xEDveis"),f(),m(3,"div",0),A(4,r0,14,3,"div",1),f()()),r&2&&(V(4),b("ngForOf",i.listCupons))},dependencies:[U,E],styles:["section[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-top:40px}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]{margin-top:40px;display:flex;width:85vw;gap:20px;padding:5px 10px;overflow-x:scroll}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]   #cupom[_ngcontent-%COMP%]{display:flex;width:381px;height:116px;background-color:var(--branco-puro);border-radius:20px;gap:10px}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]   #cupom[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{background-color:var(--verde-sustentavel);color:var(--branco-puro);border-radius:20px 0 0 20px;width:146px;display:flex;flex-direction:column;align-items:center;justify-content:center}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]   #cupom[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child   #porcent[_ngcontent-%COMP%]{color:var(--branco-puro);font-weight:700;font-size:30px}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]   #cupom[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child   p[_ngcontent-%COMP%]{text-align:center;font-size:14px}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]   #cupom[_ngcontent-%COMP%]   #info-cupom[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;gap:6px}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]   #cupom[_ngcontent-%COMP%]   #info-cupom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;font-weight:300}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]   #cupom[_ngcontent-%COMP%]   #info-cupom[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;border-radius:10px;background-color:var(--verde-sustentavel);color:var(--branco-puro);width:90px;height:20px;cursor:pointer}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]::-webkit-scrollbar{height:5px;background-color:transparent}section[_ngcontent-%COMP%]   #conteiner[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--amarelo-organico);border-radius:20px}"]});let c=a;return c})();var J3=(()=>{let a=class a{constructor(){this.listDiscount=[{id:1,name:"Kit 12 Canudos de Bambu",discount:59.99,price:78.9,img:"assets/produtos/canudo-bambu.jpeg"},{id:2,name:"Ecobag",discount:19.99,price:29.99,img:"assets/produtos/ecobag.jpeg"},{id:3,name:"Esponja Org\xE2nica",discount:7.49,price:9.99,img:"assets/produtos/esponja.jpg"},{id:4,name:"L\xE2mpada de Led",discount:15,price:19.93,img:"assets/produtos/lampada-led.jpeg"},{id:5,name:"Sabonete Org\xE2nico",discount:35.99,price:42,img:"assets/produtos/sabonete-organico.jpg"},{id:6,name:"A\xE7\xFAcar Demerara",discount:19.99,price:27,img:"assets/produtos/acucar.jpg"},{id:7,name:"Ketchup Org\xE2nico",discount:10.99,price:12.99,img:"assets/produtos/ketchup.jpg"}],this.bestRated=[{id:1,name:"Native, Caf\xE9 Sol\xFAvel Liofilizado Org\xE2nico 90g",discount:29.99,price:39.99,img:"assets/produtos/cafe.png"},{id:2,name:"Castanha de Caju Torrada",discount:75.99,price:83.9,img:"assets/produtos/castanha.png"},{id:3,name:"Sabonete L\xEDquido de Lavanda e Menta, Vegano",discount:40,price:48.29,img:"assets/produtos/sabonete-liquido.png"},{id:4,name:"Organify SUPERGREEN Suco verde em p\xF3",discount:109.99,price:117.9,img:"assets/produtos/suco-po.png"}]}};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=x({type:a,selectors:[["app-home"]],standalone:!0,features:[N],decls:11,vars:2,consts:[[3,"products"]],template:function(r,i){r&1&&(m(0,"main")(1,"section"),g(2,"app-banner"),f(),m(3,"section"),g(4,"app-green-sale",0),f(),m(5,"section"),g(6,"app-best-rated",0),f(),m(7,"section"),g(8,"app-category"),f(),m(9,"section"),g(10,"app-cupons"),f()()),r&2&&(V(4),b("products",i.listDiscount),V(2),b("products",i.bestRated))},dependencies:[$3,X3,Y3,Q3,K3],styles:["main[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:30px 0;margin:30px 0}main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{margin:0 40px}"]});let c=a;return c})();var Z3=[{path:"home",component:J3},{path:"",redirectTo:"home",pathMatch:"full"},{path:"**",redirectTo:"home",pathMatch:"full"}];var c4={providers:[D1(Z3),F1()]};var i0={providers:[_1()]},a4=A1(c4,i0);var s0=()=>O1(j3,a4),o8=s0;export{o8 as a};
