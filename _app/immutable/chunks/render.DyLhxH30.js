import{K as O,j as Y,M as I,h as _,N as b,O as E,l as u,s as g,o as f,P as C,Q as R,R as T,i as M,S,T as V,U as j,V as k,W as F,X as W,n as $,t as K,Y as P,x as Q,c as U}from"./runtime.CkuZylG8.js";import{e as X,r as D,h as v,f as q,g as z}from"./disclose-version.Dn480MU7.js";let r;function B(){r=void 0}function x(t){let e=null,a=_;var o;if(_){for(e=f,r===void 0&&(r=C(document.head));r!==null&&(r.nodeType!==8||r.data!==b);)r=E(r);r===null?u(!1):r=g(E(r))}_||(o=document.head.appendChild(O()));try{Y(()=>t(o),I)}finally{a&&(u(!0),r=f,g(e))}}function ee(t,e){var a=e==null?"":typeof e=="object"?e+"":e;a!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=a,t.nodeValue=a==null?"":a+"")}function G(t,e){return H(t,e)}function te(t,e){R(),e.intro=e.intro??!1;const a=e.target,o=_,y=f;try{for(var n=C(a);n&&(n.nodeType!==8||n.data!==b);)n=E(n);if(!n)throw T;u(!0),g(n),M();const h=H(t,{...e,anchor:n});if(f===null||f.nodeType!==8||f.data!==S)throw V(),T;return u(!1),h}catch(h){if(h===T)return e.recover===!1&&j(),R(),k(a),u(!1),G(t,e);throw h}finally{u(o),g(y),B()}}const l=new Map;function H(t,{target:e,anchor:a,props:o={},events:y,context:n,intro:h=!0}){R();var m=new Set,w=i=>{for(var s=0;s<i.length;s++){var d=i[s];if(!m.has(d)){m.add(d);var c=z(d);e.addEventListener(d,v,{passive:c});var A=l.get(d);A===void 0?(document.addEventListener(d,v,{passive:c}),l.set(d,1)):l.set(d,A+1)}}};w(F(X)),D.add(w);var p=void 0,L=W(()=>{var i=a??e.appendChild(O());return $(()=>{if(n){K({});var s=U;s.c=n}y&&(o.$$events=y),_&&q(i,null),p=t(i,o)||{},_&&(P.nodes_end=f),n&&Q()}),()=>{var c;for(var s of m){e.removeEventListener(s,v);var d=l.get(s);--d===0?(document.removeEventListener(s,v),l.delete(s)):l.set(s,d)}D.delete(w),N.delete(p),i!==a&&((c=i.parentNode)==null||c.removeChild(i))}});return N.set(p,L),p}let N=new WeakMap;function ae(t){const e=N.get(t);e&&e()}export{te as a,x as h,G as m,ee as s,ae as u};
