const be=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}};be();const y={},we=(e,t)=>e===t,S=Symbol("solid-proxy"),ee=Symbol("solid-track"),T={equals:we};let Se=re;const A={},N=1,k=2,te={owned:null,cleanups:null,context:null,owner:null};var d=null;let _=null,a=null,O=null,h=null,p=null,U=0;function I(e,t){const n=a,s=d,i=e.length===0?te:{owned:null,cleanups:null,context:null,owner:t||s};d=i,a=null;try{return H(()=>e(()=>V(i)),!0)}finally{a=n,d=s}}function G(e,t){t=t?Object.assign({},T,t):T;const n={value:e,observers:null,observerSlots:null,pending:A,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.pending!==A?n.pending:n.value)),X(n,i));return[ie.bind(n),s]}function W(e,t,n){const s=le(e,t,!1,N);R(s)}function F(e,t,n){n=n?Object.assign({},T,n):T;const s=le(e,t,!0,0);return s.pending=A,s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,R(s),ie.bind(s)}function ne(e){if(O)return e();let t;const n=O=[];try{t=e()}finally{O=null}return H(()=>{for(let s=0;s<n.length;s+=1){const i=n[s];if(i.pending!==A){const l=i.pending;i.pending=A,X(i,l)}}},!1),t}function q(e){let t,n=a;return a=null,t=e(),a=n,t}function Ae(e){return d===null||(d.cleanups===null?d.cleanups=[e]:d.cleanups.push(e)),e}function se(){return a}function ie(){const e=_;if(this.sources&&(this.state||e)){const t=h;h=null,this.state===N||e?R(this):B(this),h=t}if(a){const t=this.observers?this.observers.length:0;a.sources?(a.sources.push(this),a.sourceSlots.push(t)):(a.sources=[this],a.sourceSlots=[t]),this.observers?(this.observers.push(a),this.observerSlots.push(a.sources.length-1)):(this.observers=[a],this.observerSlots=[a.sources.length-1])}return this.value}function X(e,t,n){if(O)return e.pending===A&&O.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let s=!1;return e.value=t,e.observers&&e.observers.length&&H(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i];s&&_.disposed.has(l),(s&&!l.tState||!s&&!l.state)&&(l.pure?h.push(l):p.push(l),l.observers&&fe(l)),s||(l.state=N)}if(h.length>1e6)throw h=[],new Error},!1),t}function R(e){if(!e.fn)return;V(e);const t=d,n=a,s=U;a=d=e,$e(e,e.value,s),a=n,d=t}function $e(e,t,n){let s;try{s=e.fn(t)}catch(i){ce(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?X(e,s):e.value=s,e.updatedAt=n)}function le(e,t,n,s=N,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:d,context:null,pure:n};return d===null||d!==te&&(d.owned?d.owned.push(l):d.owned=[l]),l}function oe(e){const t=_;if(e.state===0||t)return;if(e.state===k||t)return B(e);if(e.suspense&&q(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<U);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===N||t)R(e);else if(e.state===k||t){const i=h;h=null,B(e,n[0]),h=i}}function H(e,t){if(h)return e();let n=!1;t||(h=[]),p?n=!0:p=[],U++;try{const s=e();return Ne(n),s}catch(s){ce(s)}finally{h=null,n||(p=null)}}function Ne(e){h&&(re(h),h=null),!e&&(p.length?ne(()=>{Se(p),p=null}):p=null)}function re(e){for(let t=0;t<e.length;t++)oe(e[t])}function B(e,t){const n=_;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===N||n?i!==t&&oe(i):(i.state===k||n)&&B(i,t))}}function fe(e){const t=_;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=k,s.pure?h.push(s):p.push(s),s.observers&&fe(s))}}function V(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const l=i.pop(),o=n.observerSlots.pop();s<i.length&&(l.sourceSlots[o]=s,i[s]=l,n.observerSlots[s]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)V(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ce(e){throw e}const Y=Symbol("fallback");function J(e){for(let t=0;t<e.length;t++)e[t]()}function me(e,t,n={}){let s=[],i=[],l=[],o=[],r=0,f;return Ae(()=>J(l)),()=>{const u=e()||[];return u[ee],q(()=>{if(u.length===0)return r!==0&&(J(l),l=[],s=[],i=[],r=0,o=[]),n.fallback&&(s=[Y],i[0]=I(g=>(l[0]=g,n.fallback())),r=1),i;for(s[0]===Y&&(l[0](),l=[],s=[],i=[],r=0),f=0;f<u.length;f++)f<s.length&&s[f]!==u[f]?o[f](()=>u[f]):f>=s.length&&(i[f]=I(c));for(;f<s.length;f++)l[f]();return r=o.length=l.length=u.length,s=u.slice(0),i=i.slice(0,r)});function c(g){l[f]=g;const[m,C]=G(u[f]);return o[f]=C,t(m,f)}}}function b(e,t){return q(()=>e(t||{}))}function ue(e){const t="fallback"in e&&{fallback:()=>e.fallback};return F(me(()=>e.each,e.children,t||void 0))}function xe(e){let t=!1;const n=F(()=>e.when,void 0,{equals:(s,i)=>t?s===i:!s==!i});return F(()=>{const s=n();if(s){const i=e.children;return(t=typeof i=="function"&&i.length>0)?q(()=>i(s)):i}return e.fallback})}function Oe(e,t,n){let s=n.length,i=t.length,l=s,o=0,r=0,f=t[i-1].nextSibling,u=null;for(;o<i||r<l;){if(t[o]===n[r]){o++,r++;continue}for(;t[i-1]===n[l-1];)i--,l--;if(i===o){const c=l<s?r?n[r-1].nextSibling:n[l-r]:f;for(;r<l;)e.insertBefore(n[r++],c)}else if(l===r)for(;o<i;)(!u||!u.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[l-1]&&n[r]===t[i-1]){const c=t[--i].nextSibling;e.insertBefore(n[r++],t[o++].nextSibling),e.insertBefore(n[--l],c),t[i]=n[l]}else{if(!u){u=new Map;let g=r;for(;g<l;)u.set(n[g],g++)}const c=u.get(t[o]);if(c!=null)if(r<c&&c<l){let g=o,m=1,C;for(;++g<i&&g<l&&!((C=u.get(t[g]))==null||C!==c+m);)m++;if(m>c-r){const ye=t[o];for(;r<c;)e.insertBefore(n[r++],ye)}else e.replaceChild(n[r++],t[o++])}else o++;else t[o++].remove()}}}const Z="_$DX_DELEGATE";function Pe(e,t,n){let s;return I(i=>{s=i,t===document?e():$(t,e(),t.firstChild?null:void 0,n)}),()=>{s(),t.textContent=""}}function E(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function ae(e,t=window.document){const n=t[Z]||(t[Z]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];n.has(l)||(n.add(l),t.addEventListener(l,_e))}}function $(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return v(e,t,s,n);W(i=>v(e,t(),i,n),s)}function _e(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),y.registry&&!y.done&&(y.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));n!==null;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s(i,e):s(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function v(e,t,n,s,i){for(y.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(y.context)return n;if(l==="number"&&(t=t.toString()),o){let r=n[0];r&&r.nodeType===3?r.data=t:r=document.createTextNode(t),n=w(e,n,s,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(y.context)return n;n=w(e,n,s)}else{if(l==="function")return W(()=>{let r=t();for(;typeof r=="function";)r=r();n=v(e,r,n,s)}),()=>n;if(Array.isArray(t)){const r=[];if(K(r,t,i))return W(()=>n=v(e,r,n,s,!0)),()=>n;if(y.context){for(let f=0;f<r.length;f++)if(r[f].parentNode)return n=r}if(r.length===0){if(n=w(e,n,s),o)return n}else Array.isArray(n)?n.length===0?z(e,r,s):Oe(e,n,r):(n&&w(e),z(e,r));n=r}else if(t instanceof Node){if(y.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=w(e,n,s,t);w(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function K(e,t,n){let s=!1;for(let i=0,l=t.length;i<l;i++){let o=t[i],r;if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))s=K(e,o)||s;else if((r=typeof o)=="string")e.push(document.createTextNode(o));else if(r==="function")if(n){for(;typeof o=="function";)o=o();s=K(e,Array.isArray(o)?o:[o])||s}else e.push(o),s=!0;else e.push(document.createTextNode(o.toString()))}return s}function z(e,t,n){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function w(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let l=!1;for(let o=t.length-1;o>=0;o--){const r=t[o];if(i!==r){const f=r.parentNode===e;!l&&!o?f?e.replaceChild(i,r):e.insertBefore(i,n):f&&r.remove()}else l=!0}}else e.insertBefore(i,n);return[i]}const de=Symbol("store-raw"),D=Symbol("store-node"),Ee=Symbol("store-name");function he(e,t){let n=e[S];if(!n){Object.defineProperty(e,S,{value:n=new Proxy(e,ke)});const s=Object.keys(e),i=Object.getOwnPropertyDescriptors(e);for(let l=0,o=s.length;l<o;l++){const r=s[l];if(i[r].get){const f=i[r].get.bind(n);Object.defineProperty(e,r,{get:f})}}}return n}function j(e){return e!=null&&typeof e=="object"&&(e[S]||!e.__proto__||e.__proto__===Object.prototype||Array.isArray(e))}function P(e,t=new Set){let n,s,i,l;if(n=e!=null&&e[de])return n;if(!j(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let o=0,r=e.length;o<r;o++)i=e[o],(s=P(i,t))!==i&&(e[o]=s)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const o=Object.keys(e),r=Object.getOwnPropertyDescriptors(e);for(let f=0,u=o.length;f<u;f++)l=o[f],!r[l].get&&(i=e[l],(s=P(i,t))!==i&&(e[l]=s))}return e}function Q(e){let t=e[D];return t||Object.defineProperty(e,D,{value:t={}}),t}function M(e,t,n){return e[t]||(e[t]=pe(n,!0))}function Ce(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===S||t===D||t===Ee||(delete n.value,delete n.writable,n.get=()=>e[S][t]),n}function ge(e){if(se()){const t=Q(e);(t._||(t._=pe()))()}}function Te(e){return ge(e),Reflect.ownKeys(e)}function pe(e,t){const[n,s]=G(e,t?{internal:!0}:{equals:!1,internal:!0});return n.$=s,n}const ke={get(e,t,n){if(t===de)return e;if(t===S)return n;if(t===ee)return ge(e);const s=Q(e),i=s[t];let l=i?s[t]():e[t];if(t===D||t==="__proto__")return l;if(!i){const o=Object.getOwnPropertyDescriptor(e,t);se()&&(typeof l!="function"||e.hasOwnProperty(t))&&!(o&&o.get)&&(l=M(s,t,l)())}return j(l)?he(l):l},set(){return!0},deleteProperty(){return!0},ownKeys:Te,getOwnPropertyDescriptor:Ce};function L(e,t,n){if(e[t]===n)return;const s=e[t],i=e.length;n===void 0?delete e[t]:e[t]=n;let l=Q(e),o;(o=M(l,t,s))&&o.$(()=>n),Array.isArray(e)&&e.length!==i&&(o=M(l,"length",i))&&o.$(e.length),(o=l._)&&o.$()}function Be(e,t){const n=Object.keys(t);for(let s=0;s<n.length;s+=1){const i=n[s];L(e,i,t[i])}}function ve(e,t){if(typeof t=="function"&&(t=t(e)),t=P(t),e===t)return;let n=0,s=t.length;for(;n<s;n++){const i=t[n];e[n]!==i&&L(e,n,i)}L(e,"length",s)}function x(e,t,n=[]){let s,i=e;if(t.length>1){s=t.shift();const o=typeof s,r=Array.isArray(e);if(Array.isArray(s)){for(let f=0;f<s.length;f++)x(e,[s[f]].concat(t),n);return}else if(r&&o==="function"){for(let f=0;f<e.length;f++)s(e[f],f)&&x(e,[f].concat(t),n);return}else if(r&&o==="object"){const{from:f=0,to:u=e.length-1,by:c=1}=s;for(let g=f;g<=u;g+=c)x(e,[g].concat(t),n);return}else if(t.length>1){x(e[s],t,[s].concat(n));return}i=e[s],n=[s].concat(n)}let l=t[0];typeof l=="function"&&(l=l(i,n),l===i)||s===void 0&&l==null||(l=P(l),s===void 0||j(i)&&j(l)&&!Array.isArray(l)?Be(i,l):L(e,s,l))}function De(e,t){const n=P(e||{}),s=Array.isArray(n),i=he(n);function l(...o){ne(()=>{s&&o.length===1?ve(n,o[0]):x(n,o)})}return[i,l]}const je=E('<button class="box"></button>');function Le(e){return(()=>{const t=je.cloneNode(!0);return t.$$click=()=>e.setBoxState(e.rowNum,e.colNum),$(t,()=>e.box),t})()}ae(["click"]);const qe=E('<div class="row"></div>');function Re(e){return(()=>{const t=qe.cloneNode(!0);return $(t,b(ue,{get each(){return e.rowArr},children:(n,s)=>b(Le,{get box(){return n()},get rowNum(){return e.rowNum},colNum:s,get setBoxState(){return e.setBoxState}})})),t})()}const Ie=E('<div class="board"></div>'),We=E('<div class="result"><p></p><button>Play<br>Again?</button></div>');function Fe(){const[e,t]=De([["-","-","-"],["-","-","-"],["-","-","-"]]),[n,s]=G("");let i="\u274C",l=0;const o=(f,u)=>{if(!(e[f][u]!=="-"||n())){l++,i=i!=="\u2B55"?"\u2B55":"\u274C",t([...e.slice(0,f),[...e[f].slice(0,u),i,...e[f].slice(u+1)],...e.slice(f+1)]),l>=9&&s("Tie!"),e[0][0]!=="-"&&e[0][0]===e[1][1]&&e[0][0]===e[2][2]&&s(`Player ${i} Won!`),e[0][2]!=="-"&&e[0][2]===e[1][1]&&e[0][2]===e[2][0]&&s(`Player ${i} Won!`);for(let c=0;c<3;c++)e[c][0]!=="-"&&e[c][0]===e[c][1]&&e[c][0]===e[c][2]&&s(`Player ${i} Won!`),e[0][c]!=="-"&&e[0][c]===e[1][c]&&e[0][c]===e[2][c]&&s(`Player ${i} Won!`)}},r=()=>{i="X",l=0,s(""),t([["-","-","-"],["-","-","-"],["-","-","-"]])};return[(()=>{const f=Ie.cloneNode(!0);return $(f,b(ue,{each:e,children:(u,c)=>b(Re,{get rowArr(){return u()},rowNum:c,setBoxState:o})})),f})(),b(xe,{get when(){return n()},get fallback(){return[]},get children(){const f=We.cloneNode(!0),u=f.firstChild,c=u.nextSibling;return $(u,n),c.$$click=()=>r(),f}})]}ae(["click"]);const Ke=E('<div class="app"><h1>Solid Tic-Tac-Toe</h1></div>');function Me(){return(()=>{const e=Ke.cloneNode(!0);return e.firstChild,$(e,b(Fe,{}),null),e})()}Pe(()=>b(Me,{}),document.getElementById("root"));
