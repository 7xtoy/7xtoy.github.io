import{J as p,I as v,a4 as S,_ as h,aB as I,S as M,q as O,Q as b,aC as P,aD as x,m,G as s,R as E,P as C,C as D}from"./runtime.BnoF7zLh.js";function B(e){var t=S,r=h;p(null),v(null);try{return e()}finally{p(t),v(r)}}const R=new Set,V=new Set;function H(e,t,r,i){function n(a){if(i.capture||W.call(t,a),!a.cancelBubble)return B(()=>r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?O(()=>{t.addEventListener(e,n,i)}):t.addEventListener(e,n,i),n}function J(e){for(var t=0;t<e.length;t++)R.add(e[t]);for(var r of V)r(e)}function W(e){var T;var t=this,r=t.ownerDocument,i=e.type,n=((T=e.composedPath)==null?void 0:T.call(e))||[],a=n[0]||e.target,o=0,l=e.__root;if(l){var c=n.indexOf(l);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var g=n.indexOf(t);if(g===-1)return;c<=g&&(o=c)}if(a=n[o]||e.target,a!==t){I(e,"currentTarget",{configurable:!0,get(){return a||r}});var L=S,N=h;p(null),v(null);try{for(var f,w=[];a!==null;){var y=a.assignedSlot||a.parentNode||a.host||null;try{var d=a["__"+i];if(d!==void 0&&!a.disabled)if(M(d)){var[k,...A]=d;k.apply(a,[e,...A])}else d.call(a,e)}catch(_){f?w.push(_):f=_}if(e.cancelBubble||y===t||y===null)break;a=y}if(f){for(let _ of w)queueMicrotask(()=>{throw _});throw f}}finally{e.__root=t,delete e.currentTarget,p(L),v(N)}}}function j(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function u(e,t){var r=h;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function Q(e,t){var r=(t&P)!==0,i=(t&x)!==0,n,a=!e.startsWith("<!>");return()=>{if(m)return u(s,null),s;n===void 0&&(n=j(a?e:"<!>"+e),r||(n=b(n)));var o=i?document.importNode(n,!0):n.cloneNode(!0);if(r){var l=b(o),c=o.lastChild;u(l,c)}else u(o,o);return o}}function K(e=""){if(!m){var t=E(e+"");return u(t,t),t}var r=s;return r.nodeType!==3&&(r.before(r=E()),C(r)),u(r,r),r}function X(){if(m)return u(s,null),s;var e=document.createDocumentFragment(),t=document.createComment(""),r=E();return e.append(t,r),u(t,r),e}function Y(e,t){if(m){h.nodes_end=s,D();return}e!==null&&e.before(t)}function Z(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const q=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function $(e){return q.includes(e)}const G={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",srcobject:"srcObject"};function ee(e){return e=e.toLowerCase(),G[e]??e}const U=["touchstart","touchmove"];function te(e){return U.includes(e)}const F="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(F);export{Y as a,$ as b,H as c,J as d,R as e,u as f,te as g,W as h,Z as i,X as j,K as k,j as l,ee as n,V as r,Q as t};
