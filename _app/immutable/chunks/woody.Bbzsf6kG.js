import{Z as j,j as B,h as I,i as X,_ as ee,$ as C,n as N,G as ae,a0 as W,o as m,a1 as D,D as U,a2 as G,a3 as K,a4 as P,m as A,p as H,a5 as re,c as ne,s as L,P as le,K as fe,a6 as ie,W as $,H as te,k as Z,l as S,S as se,a7 as b,Y as q,a8 as ue,V as ve,a9 as ce,aa as oe,ab as _e,ac as de,ad as he,ae as pe,O as Ee}from"./runtime.CkuZylG8.js";const Y=0,k=1,O=2;function ge(s,e,r,_,d){I&&X();var i=s,u=j(),p=ne,v=W,c,a,t,f=(u?D:U)(void 0),l=(u?D:U)(void 0),h=!1;function E(n,o){h=!0,o&&(G(y),K(y),P(p));try{n===Y&&r&&(c?A(c):c=N(()=>r(i))),n===k&&_&&(a?A(a):a=N(()=>_(i,f))),n===O&&d&&(t?A(t):t=N(()=>d(i,l))),n!==Y&&c&&H(c,()=>c=null),n!==k&&a&&H(a,()=>a=null),n!==O&&t&&H(t,()=>t=null)}finally{o&&(P(null),K(null),G(null),re())}}var y=B(()=>{if(v!==(v=e())){if(ee(v)){var n=v;h=!1,n.then(o=>{n===v&&(C(f,o),E(k,!0))},o=>{if(n===v&&(C(l,o),E(O,!0),!d))throw l.v}),I?r&&(c=N(()=>r(i))):ae(()=>{h||E(Y,!0)})}else C(f,v),E(k,!1);return()=>v=W}});I&&(i=m)}function me(s,e){return e}function ye(s,e,r,_){for(var d=[],i=e.length,u=0;u<i;u++)ue(e[u].e,d,!0);var p=i>0&&d.length===0&&r!==null;if(p){var v=r.parentNode;ve(v),v.append(r),_.clear(),x(s,e[0].prev,e[i-1].next)}ce(d,()=>{for(var c=0;c<i;c++){var a=e[c];p||(_.delete(a.k),x(s,a.prev,a.next)),oe(a.e,!p)}})}function Ne(s,e,r,_,d,i=null){var u=s,p={flags:e,items:new Map,first:null};{var v=s;u=I?L(le(v)):v.appendChild(fe())}I&&X();var c=null,a=!1;B(()=>{var t=r(),f=ie(t)?t:t==null?[]:$(t),l=f.length;if(a&&l===0)return;a=l===0;let h=!1;if(I){var E=u.data===te;E!==(l===0)&&(u=Z(),L(u),S(!1),h=!0)}if(I){for(var y=null,n,o=0;o<l;o++){if(m.nodeType===8&&m.data===se){u=m,h=!0,S(!1);break}var w=f[o],g=_(w,o);n=F(m,p,y,null,w,g,o,d,e),p.items.set(g,n),y=n}l>0&&L(Z())}if(!I){var T=_e;Te(f,p,u,d,e,(T.f&b)!==0,_)}i!==null&&(l===0?c?A(c):c=N(()=>i(u)):c!==null&&H(c,()=>{c=null})),h&&S(!0),r()}),I&&(u=m)}function Te(s,e,r,_,d,i,u){var p=s.length,v=e.items,c=e.first,a=c,t,f=null,l=[],h=[],E,y,n,o;for(o=0;o<p;o+=1){if(E=s[o],y=u(E,o),n=v.get(y),n===void 0){var w=a?a.e.nodes_start:r;f=F(w,e,f,f===null?e.first:f.next,E,y,o,_,d),v.set(y,f),l=[],h=[],a=f.next;continue}if(Ie(n,E,o),n.e.f&b&&A(n.e),n!==a){if(t!==void 0&&t.has(n)){if(l.length<h.length){var g=h[0],T;f=g.prev;var V=l[0],R=l[l.length-1];for(T=0;T<l.length;T+=1)z(l[T],g,r);for(T=0;T<h.length;T+=1)t.delete(h[T]);x(e,V.prev,R.next),x(e,f,V),x(e,R,g),a=g,f=R,o-=1,l=[],h=[]}else t.delete(n),z(n,a,r),x(e,n.prev,n.next),x(e,n,f===null?e.first:f.next),x(e,f,n),f=n;continue}for(l=[],h=[];a!==null&&a.k!==y;)(i||!(a.e.f&b))&&(t??(t=new Set)).add(a),h.push(a),a=a.next;if(a===null)continue;n=a}l.push(n),f=n,a=n.next}if(a!==null||t!==void 0){for(var M=t===void 0?[]:$(t);a!==null;)(i||!(a.e.f&b))&&M.push(a),a=a.next;var J=M.length;if(J>0){var Q=p===0?r:null;ye(e,M,Q,v)}}q.first=e.first&&e.first.e,q.last=f&&f.e}function Ie(s,e,r,_){C(s.v,e),s.i=r}function F(s,e,r,_,d,i,u,p,v){var c=(v&he)!==0,a=(v&pe)===0,t=c?a?U(d):D(d):d,f=v&de?D(u):u,l={i:f,v:t,k:i,a:null,e:null,prev:r,next:_};try{return l.e=N(()=>p(s,t,f),I),l.e.prev=r&&r.e,l.e.next=_&&_.e,r===null?e.first=l:(r.next=l,r.e.next=l.e),_!==null&&(_.prev=l,_.e.prev=l.e),l}finally{}}function z(s,e,r){for(var _=s.next?s.next.e.nodes_start:r,d=e?e.e.nodes_start:r,i=s.e.nodes_start;i!==_;){var u=Ee(i);d.before(i),i=u}}function x(s,e,r){e===null?s.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}const Ae=""+new URL("../assets/woody.tT1KNYz2.png",import.meta.url).href;export{Ae as W,ge as a,Ne as e,me as i};