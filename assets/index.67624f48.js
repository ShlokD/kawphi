import{S as A,i as j,s as q,e as g,t as x,a as u,n as C,b as d,c as p,d as O,f as _,g as v,h as G,l as I,j as b,k as y,m as N,o as R,p as S,q as B,r as K}from"./vendor.9a985b57.js";const P=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerpolicy&&(e.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?e.credentials="include":s.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(s){if(s.ep)return;s.ep=!0;const e=o(s);fetch(s.href,e)}};P();var W="/kawphi/assets/Americano.ec99503b.svg",z="/kawphi/assets/Corretto.2441bb01.svg",D="/kawphi/assets/Espresso.6ce8efc1.svg",H="/kawphi/assets/EspressoRomano.488e3e67.svg",J="/kawphi/assets/Galao.aa946309.svg",Q="/kawphi/assets/Latte.92d1874f.svg",T="/kawphi/assets/Lungo.1ac0b411.svg",U="/kawphi/assets/Macchiato.32b53b2a.svg";function L(c,t,o){const a=c.slice();return a[4]=t[o],a}function $(c,t,o){const a=c.slice();return a[7]=t[o],a}function E(c){let t,o=c[7]+"",a,s;return{c(){t=g("li"),a=x(o),u(t,"class",s=C(`w-80 f4 tc bw1 b--black b--solid pa3 ${c[7].toLowerCase()}`)+" svelte-7slhfx")},m(e,r){d(e,t,r),p(t,a)},p(e,r){r&1&&o!==(o=e[7]+"")&&O(a,o),r&1&&s!==(s=C(`w-80 f4 tc bw1 b--black b--solid pa3 ${e[7].toLowerCase()}`)+" svelte-7slhfx")&&u(t,"class",s)},d(e){e&&_(t)}}}function M(c){let t,o,a,s,e,r,i,n=c[4].name+"",f,l,m,k;function F(){return c[3](c[4])}return{c(){t=g("div"),o=g("button"),a=g("img"),r=v(),i=g("p"),f=x(n),l=v(),u(a,"alt",s=c[4].name),G(a.src,e=c[4].image)||u(a,"src",e),u(o,"class","bw0 bg-transparent"),u(i,"class","f4 f2-ns"),u(t,"class","w-50 w-25-ns tc pa2")},m(h,w){d(h,t,w),p(t,o),p(o,a),p(t,r),p(t,i),p(i,f),p(t,l),m||(k=I(o,"click",F),m=!0)},p(h,w){c=h},d(h){h&&_(t),m=!1,k()}}}function V(c){let t,o,a,s=c[0],e=[];for(let n=0;n<s.length;n+=1)e[n]=E($(c,s,n));let r=c[1],i=[];for(let n=0;n<r.length;n+=1)i[n]=M(L(c,r,n));return{c(){t=g("ul");for(let n=0;n<e.length;n+=1)e[n].c();o=v(),a=g("div");for(let n=0;n<i.length;n+=1)i[n].c();u(t,"class","pl0 pt2 w-100 list flex flex-column items-center justify-center"),u(a,"class","flex flex-wrap ma2 pa3")},m(n,f){d(n,t,f);for(let l=0;l<e.length;l+=1)e[l].m(t,null);d(n,o,f),d(n,a,f);for(let l=0;l<i.length;l+=1)i[l].m(a,null)},p(n,[f]){if(f&1){s=n[0];let l;for(l=0;l<s.length;l+=1){const m=$(n,s,l);e[l]?e[l].p(m,f):(e[l]=E(m),e[l].c(),e[l].m(t,null))}for(;l<e.length;l+=1)e[l].d(1);e.length=s.length}if(f&6){r=n[1];let l;for(l=0;l<r.length;l+=1){const m=L(n,r,l);i[l]?i[l].p(m,f):(i[l]=M(m),i[l].c(),i[l].m(a,null))}for(;l<i.length;l+=1)i[l].d(1);i.length=r.length}},i:b,o:b,d(n){n&&_(t),y(e,n),n&&_(o),n&&_(a),y(i,n)}}}function X(c,t,o){let a=[],s=[{name:"Americano",ingredients:["Water","Coffee"],image:W},{name:"Corretto",ingredients:["Brandy","Coffee"],image:z},{name:"Espresso",ingredients:["Coffee"],image:D},{name:"Espresso Romano",ingredients:["Lemon","Coffee"],image:H},{name:"Galao",ingredients:["Foam","Milk","Milk","Coffee"],image:J},{name:"Latte",ingredients:["Foam","Milk","Coffee"],image:Q},{name:"Lungo",ingredients:["Coffee","Coffee"],image:T},{name:"Macchiato",ingredients:["Foam","Coffee"],image:U}];const e=i=>{o(0,a=i.ingredients||[])};return[a,s,e,i=>e(i)]}class Y extends A{constructor(t){super();j(this,t,X,V,q,{})}}function Z(c){let t,o,a,s,e;return s=new Y({}),{c(){t=g("main"),o=g("h1"),o.textContent="Kawphi",a=v(),N(s.$$.fragment),u(o,"class","ma0 pa2 tc f-headline svelte-1v0j1c7"),u(t,"class","svelte-1v0j1c7")},m(r,i){d(r,t,i),p(t,o),p(t,a),R(s,t,null),e=!0},p:b,i(r){e||(S(s.$$.fragment,r),e=!0)},o(r){B(s.$$.fragment,r),e=!1},d(r){r&&_(t),K(s)}}}class ee extends A{constructor(t){super();j(this,t,null,Z,q,{})}}new ee({target:document.getElementById("app")});