"use strict";(self["webpackChunkgymadmin"]=self["webpackChunkgymadmin"]||[]).push([[998],{444:function(t,e,n){n.d(e,{BH:function(){return _},L:function(){return c},LL:function(){return A},P0:function(){return v},Sg:function(){return b},ZB:function(){return l},ZR:function(){return I},aH:function(){return w},eu:function(){return C},hl:function(){return T},jU:function(){return E},m9:function(){return F},ne:function(){return O},r3:function(){return N},vZ:function(){return x}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296===(64512&s)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++r)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},s=function(t){const e=[];let n=0,r=0;while(n<t.length){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((7&s)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return e.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const e=t[s],i=s+1<t.length,o=i?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,f=63&c;a||(f=64,i||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const e=n[t.charAt(s++)],i=s<t.length,a=i?n[t.charAt(s)]:0;++s;const c=s<t.length,u=c?n[t.charAt(s)]:64;++s;const l=s<t.length,h=l?n[t.charAt(s)]:64;if(++s,null==e||null==a||null==u||null==h)throw new o;const f=e<<2|a>>4;if(r.push(f),64!==u){const t=a<<4&240|u>>2;if(r.push(t),64!==h){const t=u<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(t){const e=r(t);return i.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")},u=function(t){try{return i.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function l(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&h(n)&&(t[n]=l(t[n],e[n]));return t}function h(t){return"__proto__"!==t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d=()=>f().__FIREBASE_DEFAULTS__,p=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},g=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&u(t[1]);return e&&JSON.parse(e)},m=()=>{try{return d()||p()||g()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},y=t=>{var e,n;return null===(n=null===(e=m())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},v=t=>{const e=y(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},w=()=>{var t;return null===(t=m())||void 0===t?void 0:t.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){return"object"===typeof self&&self.self===self}function T(){try{return"object"===typeof indexedDB}catch(t){return!1}}function C(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const S="FirebaseError";class I extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=S,Object.setPrototypeOf(this,I.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,A.prototype.create)}}class A{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],i=s?k(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`,a=new I(r,o,n);return a}}function k(t,e){return t.replace(D,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const D=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function N(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function x(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const n=t[s],i=e[s];if(R(n)&&R(i)){if(!x(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function R(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t,e){const n=new L(t,e);return n.subscribe.bind(n)}class L{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=P(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=M),void 0===r.error&&(r.error=M),void 0===r.complete&&(r.complete=M);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),s}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function P(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function M(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(t){return t&&t._delegate?t._delegate:t}},262:function(t,e,n){n.d(e,{Bj:function(){return i},Fl:function(){return zt},IU:function(){return Nt},Jd:function(){return C},PG:function(){return It},SU:function(){return jt},Um:function(){return Tt},WL:function(){return qt},X$:function(){return k},X3:function(){return Dt},XI:function(){return Vt},Xl:function(){return xt},dq:function(){return Mt},iH:function(){return Ft},j:function(){return I},lk:function(){return S},nZ:function(){return a},qj:function(){return Et},qq:function(){return _},yT:function(){return kt}});var r=n(577);let s;class i{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=s,!t&&s&&(this.index=(s.scopes||(s.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=s;try{return s=this,t()}finally{s=e}}else 0}on(){s=this}off(){s=this.parent}stop(t){if(this._active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this._active=!1}}}function o(t,e=s){e&&e.active&&e.effects.push(t)}function a(){return s}const c=t=>{const e=new Set(t);return e.w=0,e.n=0,e},u=t=>(t.w&g)>0,l=t=>(t.n&g)>0,h=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=g},f=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];u(s)&&!l(s)?s.delete(t):e[n++]=s,s.w&=~g,s.n&=~g}e.length=n}},d=new WeakMap;let p=0,g=1;const m=30;let y;const v=Symbol(""),w=Symbol("");class _{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let t=y,e=E;while(t){if(t===this)return;t=t.parent}try{return this.parent=y,y=this,E=!0,g=1<<++p,p<=m?h(this):b(this),this.fn()}finally{p<=m&&f(this),g=1<<--p,y=this.parent,E=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){y===this?this.deferStop=!0:this.active&&(b(this),this.onStop&&this.onStop(),this.active=!1)}}function b(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let E=!0;const T=[];function C(){T.push(E),E=!1}function S(){const t=T.pop();E=void 0===t||t}function I(t,e,n){if(E&&y){let e=d.get(t);e||d.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=c());const s=void 0;A(r,s)}}function A(t,e){let n=!1;p<=m?l(t)||(t.n|=g,n=!u(t)):n=!t.has(y),n&&(t.add(y),y.deps.push(t))}function k(t,e,n,s,i,o){const a=d.get(t);if(!a)return;let u=[];if("clear"===e)u=[...a.values()];else if("length"===n&&(0,r.kJ)(t)){const t=Number(s);a.forEach(((e,n)=>{("length"===n||n>=t)&&u.push(e)}))}else switch(void 0!==n&&u.push(a.get(n)),e){case"add":(0,r.kJ)(t)?(0,r.S0)(n)&&u.push(a.get("length")):(u.push(a.get(v)),(0,r._N)(t)&&u.push(a.get(w)));break;case"delete":(0,r.kJ)(t)||(u.push(a.get(v)),(0,r._N)(t)&&u.push(a.get(w)));break;case"set":(0,r._N)(t)&&u.push(a.get(v));break}if(1===u.length)u[0]&&D(u[0]);else{const t=[];for(const e of u)e&&t.push(...e);D(c(t))}}function D(t,e){const n=(0,r.kJ)(t)?t:[...t];for(const r of n)r.computed&&N(r,e);for(const r of n)r.computed||N(r,e)}function N(t,e){(t!==y||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const x=(0,r.fY)("__proto__,__v_isRef,__isVue"),R=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(r.yk)),O=U(),L=U(!1,!0),P=U(!0),M=F();function F(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=Nt(this);for(let e=0,s=this.length;e<s;e++)I(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(Nt)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){C();const n=Nt(this)[e].apply(this,t);return S(),n}})),t}function V(t){const e=Nt(this);return I(e,"has",t),e.hasOwnProperty(t)}function U(t=!1,e=!1){return function(n,s,i){if("__v_isReactive"===s)return!t;if("__v_isReadonly"===s)return t;if("__v_isShallow"===s)return e;if("__v_raw"===s&&i===(t?e?wt:vt:e?yt:mt).get(n))return n;const o=(0,r.kJ)(n);if(!t){if(o&&(0,r.RI)(M,s))return Reflect.get(M,s,i);if("hasOwnProperty"===s)return V}const a=Reflect.get(n,s,i);return((0,r.yk)(s)?R.has(s):x(s))?a:(t||I(n,"get",s),e?a:Mt(a)?o&&(0,r.S0)(s)?a:a.value:(0,r.Kn)(a)?t?Ct(a):Et(a):a)}}const B=$(),j=$(!0);function $(t=!1){return function(e,n,s,i){let o=e[n];if(At(o)&&Mt(o)&&!Mt(s))return!1;if(!t&&(kt(s)||At(s)||(o=Nt(o),s=Nt(s)),!(0,r.kJ)(e)&&Mt(o)&&!Mt(s)))return o.value=s,!0;const a=(0,r.kJ)(e)&&(0,r.S0)(n)?Number(n)<e.length:(0,r.RI)(e,n),c=Reflect.set(e,n,s,i);return e===Nt(i)&&(a?(0,r.aU)(s,o)&&k(e,"set",n,s,o):k(e,"add",n,s)),c}}function q(t,e){const n=(0,r.RI)(t,e),s=t[e],i=Reflect.deleteProperty(t,e);return i&&n&&k(t,"delete",e,void 0,s),i}function K(t,e){const n=Reflect.has(t,e);return(0,r.yk)(e)&&R.has(e)||I(t,"has",e),n}function z(t){return I(t,"iterate",(0,r.kJ)(t)?"length":v),Reflect.ownKeys(t)}const G={get:O,set:B,deleteProperty:q,has:K,ownKeys:z},H={get:P,set(t,e){return!0},deleteProperty(t,e){return!0}},W=(0,r.l7)({},G,{get:L,set:j}),Q=t=>t,J=t=>Reflect.getPrototypeOf(t);function Y(t,e,n=!1,r=!1){t=t["__v_raw"];const s=Nt(t),i=Nt(e);n||(e!==i&&I(s,"get",e),I(s,"get",i));const{has:o}=J(s),a=r?Q:n?Ot:Rt;return o.call(s,e)?a(t.get(e)):o.call(s,i)?a(t.get(i)):void(t!==s&&t.get(e))}function X(t,e=!1){const n=this["__v_raw"],r=Nt(n),s=Nt(t);return e||(t!==s&&I(r,"has",t),I(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Z(t,e=!1){return t=t["__v_raw"],!e&&I(Nt(t),"iterate",v),Reflect.get(t,"size",t)}function tt(t){t=Nt(t);const e=Nt(this),n=J(e),r=n.has.call(e,t);return r||(e.add(t),k(e,"add",t,t)),this}function et(t,e){e=Nt(e);const n=Nt(this),{has:s,get:i}=J(n);let o=s.call(n,t);o||(t=Nt(t),o=s.call(n,t));const a=i.call(n,t);return n.set(t,e),o?(0,r.aU)(e,a)&&k(n,"set",t,e,a):k(n,"add",t,e),this}function nt(t){const e=Nt(this),{has:n,get:r}=J(e);let s=n.call(e,t);s||(t=Nt(t),s=n.call(e,t));const i=r?r.call(e,t):void 0,o=e.delete(t);return s&&k(e,"delete",t,void 0,i),o}function rt(){const t=Nt(this),e=0!==t.size,n=void 0,r=t.clear();return e&&k(t,"clear",void 0,void 0,n),r}function st(t,e){return function(n,r){const s=this,i=s["__v_raw"],o=Nt(i),a=e?Q:t?Ot:Rt;return!t&&I(o,"iterate",v),i.forEach(((t,e)=>n.call(r,a(t),a(e),s)))}}function it(t,e,n){return function(...s){const i=this["__v_raw"],o=Nt(i),a=(0,r._N)(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=i[t](...s),h=n?Q:e?Ot:Rt;return!e&&I(o,"iterate",u?w:v),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function ot(t){return function(...e){return"delete"!==t&&this}}function at(){const t={get(t){return Y(this,t)},get size(){return Z(this)},has:X,add:tt,set:et,delete:nt,clear:rt,forEach:st(!1,!1)},e={get(t){return Y(this,t,!1,!0)},get size(){return Z(this)},has:X,add:tt,set:et,delete:nt,clear:rt,forEach:st(!1,!0)},n={get(t){return Y(this,t,!0)},get size(){return Z(this,!0)},has(t){return X.call(this,t,!0)},add:ot("add"),set:ot("set"),delete:ot("delete"),clear:ot("clear"),forEach:st(!0,!1)},r={get(t){return Y(this,t,!0,!0)},get size(){return Z(this,!0)},has(t){return X.call(this,t,!0)},add:ot("add"),set:ot("set"),delete:ot("delete"),clear:ot("clear"),forEach:st(!0,!0)},s=["keys","values","entries",Symbol.iterator];return s.forEach((s=>{t[s]=it(s,!1,!1),n[s]=it(s,!0,!1),e[s]=it(s,!1,!0),r[s]=it(s,!0,!0)})),[t,n,e,r]}const[ct,ut,lt,ht]=at();function ft(t,e){const n=e?t?ht:lt:t?ut:ct;return(e,s,i)=>"__v_isReactive"===s?!t:"__v_isReadonly"===s?t:"__v_raw"===s?e:Reflect.get((0,r.RI)(n,s)&&s in e?n:e,s,i)}const dt={get:ft(!1,!1)},pt={get:ft(!1,!0)},gt={get:ft(!0,!1)};const mt=new WeakMap,yt=new WeakMap,vt=new WeakMap,wt=new WeakMap;function _t(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:_t((0,r.W7)(t))}function Et(t){return At(t)?t:St(t,!1,G,dt,mt)}function Tt(t){return St(t,!1,W,pt,yt)}function Ct(t){return St(t,!0,H,gt,vt)}function St(t,e,n,s,i){if(!(0,r.Kn)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=i.get(t);if(o)return o;const a=bt(t);if(0===a)return t;const c=new Proxy(t,2===a?s:n);return i.set(t,c),c}function It(t){return At(t)?It(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function At(t){return!(!t||!t["__v_isReadonly"])}function kt(t){return!(!t||!t["__v_isShallow"])}function Dt(t){return It(t)||At(t)}function Nt(t){const e=t&&t["__v_raw"];return e?Nt(e):t}function xt(t){return(0,r.Nj)(t,"__v_skip",!0),t}const Rt=t=>(0,r.Kn)(t)?Et(t):t,Ot=t=>(0,r.Kn)(t)?Ct(t):t;function Lt(t){E&&y&&(t=Nt(t),A(t.dep||(t.dep=c())))}function Pt(t,e){t=Nt(t);const n=t.dep;n&&D(n)}function Mt(t){return!(!t||!0!==t.__v_isRef)}function Ft(t){return Ut(t,!1)}function Vt(t){return Ut(t,!0)}function Ut(t,e){return Mt(t)?t:new Bt(t,e)}class Bt{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Nt(t),this._value=e?t:Rt(t)}get value(){return Lt(this),this._value}set value(t){const e=this.__v_isShallow||kt(t)||At(t);t=e?t:Nt(t),(0,r.aU)(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:Rt(t),Pt(this,t))}}function jt(t){return Mt(t)?t.value:t}const $t={get:(t,e,n)=>jt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Mt(s)&&!Mt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function qt(t){return It(t)?t:new Proxy(t,$t)}class Kt{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this._dirty=!0,this.effect=new _(t,(()=>{this._dirty||(this._dirty=!0,Pt(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=Nt(this);return Lt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function zt(t,e,n=!1){let s,i;const o=(0,r.mf)(t);o?(s=t,i=r.dG):(s=t.get,i=t.set);const a=new Kt(s,i,o||!i,n);return a}},252:function(t,e,n){n.d(e,{$d:function(){return o},Cn:function(){return M},FN:function(){return mn},Fl:function(){return Pn},HY:function(){return Me},JJ:function(){return ue},Ko:function(){return Vt},P$:function(){return st},Q6:function(){return lt},U2:function(){return ot},Uk:function(){return on},Us:function(){return Ne},Wm:function(){return en},Y3:function(){return v},Y8:function(){return tt},YP:function(){return H},_:function(){return tn},aZ:function(){return ht},dD:function(){return P},f3:function(){return le},h:function(){return Mn},iD:function(){return He},ic:function(){return It},j4:function(){return We},nJ:function(){return nt},nK:function(){return ut},up:function(){return Lt},wg:function(){return $e},wy:function(){return X}});var r=n(262),s=n(577);function i(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){a(i,e,n)}return s}function o(t,e,n,r){if((0,s.mf)(t)){const o=i(t,e,n,r);return o&&(0,s.tI)(o)&&o.catch((t=>{a(t,e,n)})),o}const c=[];for(let s=0;s<t.length;s++)c.push(o(t[s],e,n,r));return c}function a(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const s=e.proxy,o=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,s,o))return;r=r.parent}const a=e.appContext.config.errorHandler;if(a)return void i(a,null,10,[t,s,o])}c(t,n,s,r)}function c(t,e,n,r=!0){console.error(t)}let u=!1,l=!1;const h=[];let f=0;const d=[];let p=null,g=0;const m=Promise.resolve();let y=null;function v(t){const e=y||m;return t?e.then(this?t.bind(this):t):e}function w(t){let e=f+1,n=h.length;while(e<n){const r=e+n>>>1,s=I(h[r]);s<t?e=r+1:n=r}return e}function _(t){h.length&&h.includes(t,u&&t.allowRecurse?f+1:f)||(null==t.id?h.push(t):h.splice(w(t.id),0,t),b())}function b(){u||l||(l=!0,y=m.then(k))}function E(t){const e=h.indexOf(t);e>f&&h.splice(e,1)}function T(t){(0,s.kJ)(t)?d.push(...t):p&&p.includes(t,t.allowRecurse?g+1:g)||d.push(t),b()}function C(t,e=(u?f+1:0)){for(0;e<h.length;e++){const t=h[e];t&&t.pre&&(h.splice(e,1),e--,t())}}function S(t){if(d.length){const t=[...new Set(d)];if(d.length=0,p)return void p.push(...t);for(p=t,p.sort(((t,e)=>I(t)-I(e))),g=0;g<p.length;g++)p[g]();p=null,g=0}}const I=t=>null==t.id?1/0:t.id,A=(t,e)=>{const n=I(t)-I(e);if(0===n){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function k(t){l=!1,u=!0,h.sort(A);s.dG;try{for(f=0;f<h.length;f++){const t=h[f];t&&!1!==t.active&&i(t,null,14)}}finally{f=0,h.length=0,S(t),u=!1,y=null,(h.length||d.length)&&k(t)}}function D(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||s.kT;let i=n;const a=e.startsWith("update:"),c=a&&e.slice(7);if(c&&c in r){const t=`${"modelValue"===c?"model":c}Modifiers`,{number:e,trim:o}=r[t]||s.kT;o&&(i=n.map((t=>(0,s.HD)(t)?t.trim():t))),e&&(i=n.map(s.h5))}let u;let l=r[u=(0,s.hR)(e)]||r[u=(0,s.hR)((0,s._A)(e))];!l&&a&&(l=r[u=(0,s.hR)((0,s.rs)(e))]),l&&o(l,t,6,i);const h=r[u+"Once"];if(h){if(t.emitted){if(t.emitted[u])return}else t.emitted={};t.emitted[u]=!0,o(h,t,6,i)}}function N(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(void 0!==i)return i;const o=t.emits;let a={},c=!1;if(!(0,s.mf)(t)){const r=t=>{const n=N(t,e,!0);n&&(c=!0,(0,s.l7)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||c?((0,s.kJ)(o)?o.forEach((t=>a[t]=null)):(0,s.l7)(a,o),(0,s.Kn)(t)&&r.set(t,a),a):((0,s.Kn)(t)&&r.set(t,null),null)}function x(t,e){return!(!t||!(0,s.F7)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,s.RI)(t,e[0].toLowerCase()+e.slice(1))||(0,s.RI)(t,(0,s.rs)(e))||(0,s.RI)(t,e))}let R=null,O=null;function L(t){const e=R;return R=t,O=t&&t.type.__scopeId||null,e}function P(t){O=t}function M(){O=null}function F(t,e=R,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&ze(-1);const s=L(e);let i;try{i=t(...n)}finally{L(s),r._d&&ze(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function V(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:f,renderCache:d,data:p,setupState:g,ctx:m,inheritAttrs:y}=t;let v,w;const _=L(t);try{if(4&n.shapeFlag){const t=i||r;v=an(f.call(t,t,d,o,g,p,m)),w=l}else{const t=e;0,v=an(t.length>1?t(o,{attrs:l,slots:u,emit:h}):t(o,null)),w=e.props?l:U(l)}}catch(E){Be.length=0,a(E,t,1),v=en(Ve)}let b=v;if(w&&!1!==y){const t=Object.keys(w),{shapeFlag:e}=b;t.length&&7&e&&(c&&t.some(s.tR)&&(w=B(w,c)),b=sn(b,w))}return n.dirs&&(b=sn(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),v=b,L(_),v}const U=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,s.F7)(n))&&((e||(e={}))[n]=t[n]);return e},B=(t,e)=>{const n={};for(const r in t)(0,s.tR)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function j(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!s&&!a||a&&a.$stable)||r!==o&&(r?!o||$(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?$(r,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!x(u,n))return!0}}return!1}function $(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!x(n,i))return!0}return!1}function q({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const K=t=>t.__isSuspense;function z(t,e){e&&e.pendingBranch?(0,s.kJ)(t)?e.effects.push(...t):e.effects.push(t):T(t)}const G={};function H(t,e,n){return W(t,e,n)}function W(t,e,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=s.kT){var h;const f=(0,r.nZ)()===(null==(h=gn)?void 0:h.scope)?gn:null;let d,p,g=!1,m=!1;if((0,r.dq)(t)?(d=()=>t.value,g=(0,r.yT)(t)):(0,r.PG)(t)?(d=()=>t,a=!0):(0,s.kJ)(t)?(m=!0,g=t.some((t=>(0,r.PG)(t)||(0,r.yT)(t))),d=()=>t.map((t=>(0,r.dq)(t)?t.value:(0,r.PG)(t)?Y(t):(0,s.mf)(t)?i(t,f,2):void 0))):d=(0,s.mf)(t)?e?()=>i(t,f,2):()=>{if(!f||!f.isUnmounted)return p&&p(),o(t,f,3,[v])}:s.dG,e&&a){const t=d;d=()=>Y(t())}let y,v=t=>{p=T.onStop=()=>{i(t,f,4)}};if(Sn){if(v=s.dG,e?n&&o(e,f,3,[d(),m?[]:void 0,v]):d(),"sync"!==c)return s.dG;{const t=Vn();y=t.__watcherHandles||(t.__watcherHandles=[])}}let w=m?new Array(t.length).fill(G):G;const b=()=>{if(T.active)if(e){const t=T.run();(a||g||(m?t.some(((t,e)=>(0,s.aU)(t,w[e]))):(0,s.aU)(t,w)))&&(p&&p(),o(e,f,3,[t,w===G?void 0:m&&w[0]===G?[]:w,v]),w=t)}else T.run()};let E;b.allowRecurse=!!e,"sync"===c?E=b:"post"===c?E=()=>De(b,f&&f.suspense):(b.pre=!0,f&&(b.id=f.uid),E=()=>_(b));const T=new r.qq(d,E);e?n?b():w=T.run():"post"===c?De(T.run.bind(T),f&&f.suspense):T.run();const C=()=>{T.stop(),f&&f.scope&&(0,s.Od)(f.scope.effects,T)};return y&&y.push(C),C}function Q(t,e,n){const r=this.proxy,i=(0,s.HD)(t)?t.includes(".")?J(r,t):()=>r[t]:t.bind(r,r);let o;(0,s.mf)(e)?o=e:(o=e.handler,n=e);const a=gn;_n(this);const c=W(i,o.bind(r),n);return a?_n(a):bn(),c}function J(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function Y(t,e){if(!(0,s.Kn)(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),(0,r.dq)(t))Y(t.value,e);else if((0,s.kJ)(t))for(let n=0;n<t.length;n++)Y(t[n],e);else if((0,s.DM)(t)||(0,s._N)(t))t.forEach((t=>{Y(t,e)}));else if((0,s.PO)(t))for(const n in t)Y(t[n],e);return t}function X(t,e){const n=R;if(null===n)return t;const r=Rn(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,n,a,c=s.kT]=e[o];t&&((0,s.mf)(t)&&(t={mounted:t,updated:t}),t.deep&&Y(n),i.push({dir:t,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c}))}return t}function Z(t,e,n,s){const i=t.dirs,a=e&&e.dirs;for(let c=0;c<i.length;c++){const u=i[c];a&&(u.oldValue=a[c].value);let l=u.dir[s];l&&((0,r.Jd)(),o(l,n,8,[t.el,u,t,e]),(0,r.lk)())}}function tt(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ct((()=>{t.isMounted=!0})),At((()=>{t.isUnmounting=!0})),t}const et=[Function,Array],nt={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:et,onEnter:et,onAfterEnter:et,onEnterCancelled:et,onBeforeLeave:et,onLeave:et,onAfterLeave:et,onLeaveCancelled:et,onBeforeAppear:et,onAppear:et,onAfterAppear:et,onAppearCancelled:et},rt={name:"BaseTransition",props:nt,setup(t,{slots:e}){const n=mn(),s=tt();let i;return()=>{const o=e.default&&lt(e.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let t=!1;for(const e of o)if(e.type!==Ve){0,a=e,t=!0;break}}const c=(0,r.IU)(t),{mode:u}=c;if(s.isLeaving)return at(a);const l=ct(a);if(!l)return at(a);const h=ot(l,c,s,n);ut(l,h);const f=n.subTree,d=f&&ct(f);let p=!1;const{getTransitionKey:g}=l.type;if(g){const t=g();void 0===i?i=t:t!==i&&(i=t,p=!0)}if(d&&d.type!==Ve&&(!Je(l,d)||p)){const t=ot(d,c,s,n);if(ut(d,t),"out-in"===u)return s.isLeaving=!0,t.afterLeave=()=>{s.isLeaving=!1,!1!==n.update.active&&n.update()},at(a);"in-out"===u&&l.type!==Ve&&(t.delayLeave=(t,e,n)=>{const r=it(s,d);r[String(d.key)]=d,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},st=rt;function it(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ot(t,e,n,r){const{appear:i,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:y,onAppear:v,onAfterAppear:w,onAppearCancelled:_}=e,b=String(t.key),E=it(n,t),T=(t,e)=>{t&&o(t,r,9,e)},C=(t,e)=>{const n=e[1];T(t,e),(0,s.kJ)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},S={mode:a,persisted:c,beforeEnter(e){let r=u;if(!n.isMounted){if(!i)return;r=y||u}e._leaveCb&&e._leaveCb(!0);const s=E[b];s&&Je(t,s)&&s.el._leaveCb&&s.el._leaveCb(),T(r,[e])},enter(t){let e=l,r=h,s=f;if(!n.isMounted){if(!i)return;e=v||l,r=w||h,s=_||f}let o=!1;const a=t._enterCb=e=>{o||(o=!0,T(e?s:r,[t]),S.delayedLeave&&S.delayedLeave(),t._enterCb=void 0)};e?C(e,[t,a]):a()},leave(e,r){const s=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();T(d,[e]);let i=!1;const o=e._leaveCb=n=>{i||(i=!0,r(),T(n?m:g,[e]),e._leaveCb=void 0,E[s]===t&&delete E[s])};E[s]=t,p?C(p,[e,o]):o()},clone(t){return ot(t,e,n,r)}};return S}function at(t){if(dt(t))return t=sn(t),t.children=null,t}function ct(t){return dt(t)?t.children?t.children[0]:void 0:t}function ut(t,e){6&t.shapeFlag&&t.component?ut(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function lt(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:i);o.type===Me?(128&o.patchFlag&&s++,r=r.concat(lt(o.children,e,a))):(e||o.type!==Ve)&&r.push(null!=a?sn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function ht(t,e){return(0,s.mf)(t)?(()=>(0,s.l7)({name:t.name},e,{setup:t}))():t}const ft=t=>!!t.type.__asyncLoader;const dt=t=>t.type.__isKeepAlive;RegExp,RegExp;function pt(t,e){return(0,s.kJ)(t)?t.some((t=>pt(t,e))):(0,s.HD)(t)?t.split(",").includes(e):!!(0,s.Kj)(t)&&t.test(e)}function gt(t,e){yt(t,"a",e)}function mt(t,e){yt(t,"da",e)}function yt(t,e,n=gn){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(bt(e,r,n),n){let t=n.parent;while(t&&t.parent)dt(t.parent.vnode)&&vt(r,e,n,t),t=t.parent}}function vt(t,e,n,r){const i=bt(e,t,r,!0);kt((()=>{(0,s.Od)(r[e],i)}),n)}function wt(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function _t(t){return 128&t.shapeFlag?t.ssContent:t}function bt(t,e,n=gn,s=!1){if(n){const i=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...s)=>{if(n.isUnmounted)return;(0,r.Jd)(),_n(n);const i=o(e,n,t,s);return bn(),(0,r.lk)(),i});return s?i.unshift(a):i.push(a),a}}const Et=t=>(e,n=gn)=>(!Sn||"sp"===t)&&bt(t,((...t)=>e(...t)),n),Tt=Et("bm"),Ct=Et("m"),St=Et("bu"),It=Et("u"),At=Et("bum"),kt=Et("um"),Dt=Et("sp"),Nt=Et("rtg"),xt=Et("rtc");function Rt(t,e=gn){bt("ec",t,e)}const Ot="components";function Lt(t,e){return Mt(Ot,t,!0,e)||t}const Pt=Symbol.for("v-ndc");function Mt(t,e,n=!0,r=!1){const i=R||gn;if(i){const n=i.type;if(t===Ot){const t=On(n,!1);if(t&&(t===e||t===(0,s._A)(e)||t===(0,s.kC)((0,s._A)(e))))return n}const o=Ft(i[t]||n[t],e)||Ft(i.appContext[t],e);return!o&&r?n:o}}function Ft(t,e){return t&&(t[e]||t[(0,s._A)(e)]||t[(0,s.kC)((0,s._A)(e))])}function Vt(t,e,n,r){let i;const o=n&&n[r];if((0,s.kJ)(t)||(0,s.HD)(t)){i=new Array(t.length);for(let n=0,r=t.length;n<r;n++)i[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,i=new Array(t);for(let n=0;n<t;n++)i[n]=e(n+1,n,void 0,o&&o[n])}else if((0,s.Kn)(t))if(t[Symbol.iterator])i=Array.from(t,((t,n)=>e(t,n,void 0,o&&o[n])));else{const n=Object.keys(t);i=new Array(n.length);for(let r=0,s=n.length;r<s;r++){const s=n[r];i[r]=e(t[s],s,r,o&&o[r])}}else i=[];return n&&(n[r]=i),i}const Ut=t=>t?En(t)?Rn(t)||t.proxy:Ut(t.parent):null,Bt=(0,s.l7)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ut(t.parent),$root:t=>Ut(t.root),$emit:t=>t.emit,$options:t=>Qt(t),$forceUpdate:t=>t.f||(t.f=()=>_(t.update)),$nextTick:t=>t.n||(t.n=v.bind(t.proxy)),$watch:t=>Q.bind(t)}),jt=(t,e)=>t!==s.kT&&!t.__isScriptSetup&&(0,s.RI)(t,e),$t={get({_:t},e){const{ctx:n,setupState:i,data:o,props:a,accessCache:c,type:u,appContext:l}=t;let h;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return i[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(jt(i,e))return c[e]=1,i[e];if(o!==s.kT&&(0,s.RI)(o,e))return c[e]=2,o[e];if((h=t.propsOptions[0])&&(0,s.RI)(h,e))return c[e]=3,a[e];if(n!==s.kT&&(0,s.RI)(n,e))return c[e]=4,n[e];Kt&&(c[e]=0)}}const f=Bt[e];let d,p;return f?("$attrs"===e&&(0,r.j)(t,"get",e),f(t)):(d=u.__cssModules)&&(d=d[e])?d:n!==s.kT&&(0,s.RI)(n,e)?(c[e]=4,n[e]):(p=l.config.globalProperties,(0,s.RI)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:i,ctx:o}=t;return jt(i,e)?(i[e]=n,!0):r!==s.kT&&(0,s.RI)(r,e)?(r[e]=n,!0):!(0,s.RI)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:o}},a){let c;return!!n[a]||t!==s.kT&&(0,s.RI)(t,a)||jt(e,a)||(c=o[0])&&(0,s.RI)(c,a)||(0,s.RI)(r,a)||(0,s.RI)(Bt,a)||(0,s.RI)(i.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,s.RI)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function qt(t){return(0,s.kJ)(t)?t.reduce(((t,e)=>(t[e]=null,t)),{}):t}let Kt=!0;function zt(t){const e=Qt(t),n=t.proxy,i=t.ctx;Kt=!1,e.beforeCreate&&Ht(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:m,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:_,destroyed:b,unmounted:E,render:T,renderTracked:C,renderTriggered:S,errorCaptured:I,serverPrefetch:A,expose:k,inheritAttrs:D,components:N,directives:x,filters:R}=e,O=null;if(h&&Gt(h,i,O),c)for(const r in c){const t=c[r];(0,s.mf)(t)&&(i[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,s.Kn)(e)&&(t.data=(0,r.qj)(e))}if(Kt=!0,a)for(const r in a){const t=a[r],e=(0,s.mf)(t)?t.bind(n,n):(0,s.mf)(t.get)?t.get.bind(n,n):s.dG;0;const o=!(0,s.mf)(t)&&(0,s.mf)(t.set)?t.set.bind(n):s.dG,c=Pn({get:e,set:o});Object.defineProperty(i,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const r in u)Wt(u[r],i,n,r);if(l){const t=(0,s.mf)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{ue(e,t[e])}))}function L(t,e){(0,s.kJ)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(f&&Ht(f,t,"c"),L(Tt,d),L(Ct,p),L(St,g),L(It,m),L(gt,y),L(mt,v),L(Rt,I),L(xt,C),L(Nt,S),L(At,_),L(kt,E),L(Dt,A),(0,s.kJ)(k))if(k.length){const e=t.exposed||(t.exposed={});k.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});T&&t.render===s.dG&&(t.render=T),null!=D&&(t.inheritAttrs=D),N&&(t.components=N),x&&(t.directives=x)}function Gt(t,e,n=s.dG){(0,s.kJ)(t)&&(t=te(t));for(const i in t){const n=t[i];let o;o=(0,s.Kn)(n)?"default"in n?le(n.from||i,n.default,!0):le(n.from||i):le(n),(0,r.dq)(o)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[i]=o}}function Ht(t,e,n){o((0,s.kJ)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function Wt(t,e,n,r){const i=r.includes(".")?J(n,r):()=>n[r];if((0,s.HD)(t)){const n=e[t];(0,s.mf)(n)&&H(i,n)}else if((0,s.mf)(t))H(i,t.bind(n));else if((0,s.Kn)(t))if((0,s.kJ)(t))t.forEach((t=>Wt(t,e,n,r)));else{const r=(0,s.mf)(t.handler)?t.handler.bind(n):e[t.handler];(0,s.mf)(r)&&H(i,r,t)}else 0}function Qt(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let u;return c?u=c:i.length||n||r?(u={},i.length&&i.forEach((t=>Jt(u,t,a,!0))),Jt(u,e,a)):u=e,(0,s.Kn)(e)&&o.set(e,u),u}function Jt(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Jt(t,i,n,!0),s&&s.forEach((e=>Jt(t,e,n,!0)));for(const o in e)if(r&&"expose"===o);else{const r=Yt[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const Yt={data:Xt,props:re,emits:re,methods:ne,computed:ne,beforeCreate:ee,created:ee,beforeMount:ee,mounted:ee,beforeUpdate:ee,updated:ee,beforeDestroy:ee,beforeUnmount:ee,destroyed:ee,unmounted:ee,activated:ee,deactivated:ee,errorCaptured:ee,serverPrefetch:ee,components:ne,directives:ne,watch:se,provide:Xt,inject:Zt};function Xt(t,e){return e?t?function(){return(0,s.l7)((0,s.mf)(t)?t.call(this,this):t,(0,s.mf)(e)?e.call(this,this):e)}:e:t}function Zt(t,e){return ne(te(t),te(e))}function te(t){if((0,s.kJ)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ee(t,e){return t?[...new Set([].concat(t,e))]:e}function ne(t,e){return t?(0,s.l7)(Object.create(null),t,e):e}function re(t,e){return t?(0,s.kJ)(t)&&(0,s.kJ)(e)?[...new Set([...t,...e])]:(0,s.l7)(Object.create(null),qt(t),qt(null!=e?e:{})):e}function se(t,e){if(!t)return e;if(!e)return t;const n=(0,s.l7)(Object.create(null),t);for(const r in e)n[r]=ee(t[r],e[r]);return n}function ie(){return{app:null,config:{isNativeTag:s.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let oe=0;function ae(t,e){return function(n,r=null){(0,s.mf)(n)||(n=(0,s.l7)({},n)),null==r||(0,s.Kn)(r)||(r=null);const i=ie();const o=new Set;let a=!1;const c=i.app={_uid:oe++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Un,get config(){return i.config},set config(t){0},use(t,...e){return o.has(t)||(t&&(0,s.mf)(t.install)?(o.add(t),t.install(c,...e)):(0,s.mf)(t)&&(o.add(t),t(c,...e))),c},mixin(t){return i.mixins.includes(t)||i.mixins.push(t),c},component(t,e){return e?(i.components[t]=e,c):i.components[t]},directive(t,e){return e?(i.directives[t]=e,c):i.directives[t]},mount(s,o,u){if(!a){0;const l=en(n,r);return l.appContext=i,o&&e?e(l,s):t(l,s,u),a=!0,c._container=s,s.__vue_app__=c,Rn(l.component)||l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return i.provides[t]=e,c},runWithContext(t){ce=c;try{return t()}finally{ce=null}}};return c}}let ce=null;function ue(t,e){if(gn){let n=gn.provides;const r=gn.parent&&gn.parent.provides;r===n&&(n=gn.provides=Object.create(r)),n[t]=e}else 0}function le(t,e,n=!1){const r=gn||R;if(r||ce){const i=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ce._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&(0,s.mf)(e)?e.call(r&&r.proxy):e}else 0}function he(t,e,n,i=!1){const o={},a={};(0,s.Nj)(a,Ye,1),t.propsDefaults=Object.create(null),de(t,e,o,a);for(const r in t.propsOptions[0])r in o||(o[r]=void 0);n?t.props=i?o:(0,r.Um)(o):t.type.props?t.props=o:t.props=a,t.attrs=a}function fe(t,e,n,i){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,u=(0,r.IU)(o),[l]=t.propsOptions;let h=!1;if(!(i||c>0)||16&c){let r;de(t,e,o,a)&&(h=!0);for(const i in u)e&&((0,s.RI)(e,i)||(r=(0,s.rs)(i))!==i&&(0,s.RI)(e,r))||(l?!n||void 0===n[i]&&void 0===n[r]||(o[i]=pe(l,u,i,void 0,t,!0)):delete o[i]);if(a!==u)for(const t in a)e&&(0,s.RI)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let i=n[r];if(x(t.emitsOptions,i))continue;const c=e[i];if(l)if((0,s.RI)(a,i))c!==a[i]&&(a[i]=c,h=!0);else{const e=(0,s._A)(i);o[e]=pe(l,u,e,c,t,!1)}else c!==a[i]&&(a[i]=c,h=!0)}}h&&(0,r.X$)(t,"set","$attrs")}function de(t,e,n,i){const[o,a]=t.propsOptions;let c,u=!1;if(e)for(let r in e){if((0,s.Gg)(r))continue;const l=e[r];let h;o&&(0,s.RI)(o,h=(0,s._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:x(t.emitsOptions,r)||r in i&&l===i[r]||(i[r]=l,u=!0)}if(a){const e=(0,r.IU)(n),i=c||s.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=pe(o,e,c,i[c],t,!(0,s.RI)(i,c))}}return u}function pe(t,e,n,r,i,o){const a=t[n];if(null!=a){const t=(0,s.RI)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&!a.skipFactory&&(0,s.mf)(t)){const{propsDefaults:s}=i;n in s?r=s[n]:(_n(i),r=s[n]=t.call(null,e),bn())}else r=t}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,s.rs)(n)||(r=!0))}return r}function ge(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const o=t.props,a={},c=[];let u=!1;if(!(0,s.mf)(t)){const r=t=>{u=!0;const[n,r]=ge(t,e,!0);(0,s.l7)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!u)return(0,s.Kn)(t)&&r.set(t,s.Z6),s.Z6;if((0,s.kJ)(o))for(let h=0;h<o.length;h++){0;const t=(0,s._A)(o[h]);me(t)&&(a[t]=s.kT)}else if(o){0;for(const t in o){const e=(0,s._A)(t);if(me(e)){const n=o[t],r=a[e]=(0,s.kJ)(n)||(0,s.mf)(n)?{type:n}:(0,s.l7)({},n);if(r){const t=we(Boolean,r.type),n=we(String,r.type);r[0]=t>-1,r[1]=n<0||t<n,(t>-1||(0,s.RI)(r,"default"))&&c.push(e)}}}}const l=[a,c];return(0,s.Kn)(t)&&r.set(t,l),l}function me(t){return"$"!==t[0]}function ye(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:null===t?"null":""}function ve(t,e){return ye(t)===ye(e)}function we(t,e){return(0,s.kJ)(e)?e.findIndex((e=>ve(e,t))):(0,s.mf)(e)&&ve(e,t)?0:-1}const _e=t=>"_"===t[0]||"$stable"===t,be=t=>(0,s.kJ)(t)?t.map(an):[an(t)],Ee=(t,e,n)=>{if(e._n)return e;const r=F(((...t)=>be(e(...t))),n);return r._c=!1,r},Te=(t,e,n)=>{const r=t._ctx;for(const i in t){if(_e(i))continue;const n=t[i];if((0,s.mf)(n))e[i]=Ee(i,n,r);else if(null!=n){0;const t=be(n);e[i]=()=>t}}},Ce=(t,e)=>{const n=be(e);t.slots.default=()=>n},Se=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=(0,r.IU)(e),(0,s.Nj)(e,"_",n)):Te(e,t.slots={})}else t.slots={},e&&Ce(t,e);(0,s.Nj)(t.slots,Ye,1)},Ie=(t,e,n)=>{const{vnode:r,slots:i}=t;let o=!0,a=s.kT;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:((0,s.l7)(i,e),n||1!==t||delete i._):(o=!e.$stable,Te(e,i)),a=e}else e&&(Ce(t,e),a={default:1});if(o)for(const s in i)_e(s)||s in a||delete i[s]};function Ae(t,e,n,o,a=!1){if((0,s.kJ)(t))return void t.forEach(((t,r)=>Ae(t,e&&((0,s.kJ)(e)?e[r]:e),n,o,a)));if(ft(o)&&!a)return;const c=4&o.shapeFlag?Rn(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=t;const f=e&&e.r,d=l.refs===s.kT?l.refs={}:l.refs,p=l.setupState;if(null!=f&&f!==h&&((0,s.HD)(f)?(d[f]=null,(0,s.RI)(p,f)&&(p[f]=null)):(0,r.dq)(f)&&(f.value=null)),(0,s.mf)(h))i(h,l,12,[u,d]);else{const e=(0,s.HD)(h),i=(0,r.dq)(h);if(e||i){const r=()=>{if(t.f){const n=e?(0,s.RI)(p,h)?p[h]:d[h]:h.value;a?(0,s.kJ)(n)&&(0,s.Od)(n,c):(0,s.kJ)(n)?n.includes(c)||n.push(c):e?(d[h]=[c],(0,s.RI)(p,h)&&(p[h]=d[h])):(h.value=[c],t.k&&(d[t.k]=h.value))}else e?(d[h]=u,(0,s.RI)(p,h)&&(p[h]=u)):i&&(h.value=u,t.k&&(d[t.k]=u))};u?(r.id=-1,De(r,n)):r()}else 0}}function ke(){}const De=z;function Ne(t){return xe(t)}function xe(t,e){ke();const n=(0,s.E9)();n.__VUE__=!0;const{insert:i,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=s.dG,insertStaticContent:m}=t,y=(t,e,n,r=null,s=null,i=null,o=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!Je(t,e)&&(r=X(t),H(t,s,i,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Fe:v(t,e,n,r);break;case Ve:w(t,e,n,r);break;case Ue:null==t&&b(e,n,r,o);break;case Me:L(t,e,n,r,s,i,o,a,c);break;default:1&h?A(t,e,n,r,s,i,o,a,c):6&h?P(t,e,n,r,s,i,o,a,c):(64&h||128&h)&&u.process(t,e,n,r,s,i,o,a,c,et)}null!=l&&s&&Ae(l,t&&t.ref,i,e||t,!e)},v=(t,e,n,r)=>{if(null==t)i(e.el=u(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},w=(t,e,n,r)=>{null==t?i(e.el=l(e.children||""),n,r):e.el=t.el},b=(t,e,n,r)=>{[t.el,t.anchor]=m(t.children,e,n,r,t.el,t.anchor)},T=({el:t,anchor:e},n,r)=>{let s;while(t&&t!==e)s=p(t),i(t,n,r),t=s;i(e,n,r)},I=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},A=(t,e,n,r,s,i,o,a,c)=>{o=o||"svg"===e.type,null==t?k(e,n,r,s,i,o,a,c):x(t,e,s,i,o,a,c)},k=(t,e,n,r,o,u,l,h)=>{let d,p;const{type:g,props:m,shapeFlag:y,transition:v,dirs:w}=t;if(d=t.el=c(t.type,u,m&&m.is,m),8&y?f(d,t.children):16&y&&N(t.children,d,null,r,o,u&&"foreignObject"!==g,l,h),w&&Z(t,null,r,"created"),D(d,t,t.scopeId,l,r),m){for(const e in m)"value"===e||(0,s.Gg)(e)||a(d,e,null,m[e],u,t.children,r,o,Y);"value"in m&&a(d,"value",null,m.value),(p=m.onVnodeBeforeMount)&&hn(p,r,t)}w&&Z(t,null,r,"beforeMount");const _=(!o||o&&!o.pendingBranch)&&v&&!v.persisted;_&&v.beforeEnter(d),i(d,e,n),((p=m&&m.onVnodeMounted)||_||w)&&De((()=>{p&&hn(p,r,t),_&&v.enter(d),w&&Z(t,null,r,"mounted")}),o)},D=(t,e,n,r,s)=>{if(n&&g(t,n),r)for(let i=0;i<r.length;i++)g(t,r[i]);if(s){let n=s.subTree;if(e===n){const e=s.vnode;D(t,e,e.scopeId,e.slotScopeIds,s.parent)}}},N=(t,e,n,r,s,i,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?cn(t[u]):an(t[u]);y(null,c,e,n,r,s,i,o,a)}},x=(t,e,n,r,i,o,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||s.kT,g=e.props||s.kT;let m;n&&Re(n,!1),(m=g.onVnodeBeforeUpdate)&&hn(m,n,e,t),d&&Z(e,t,n,"beforeUpdate"),n&&Re(n,!0);const y=i&&"foreignObject"!==e.type;if(h?R(t.dynamicChildren,h,u,n,r,y,o):c||$(t,e,u,null,n,r,y,o,!1),l>0){if(16&l)O(u,e,p,g,n,r,i);else if(2&l&&p.class!==g.class&&a(u,"class",null,g.class,i),4&l&&a(u,"style",p.style,g.style,i),8&l){const s=e.dynamicProps;for(let e=0;e<s.length;e++){const o=s[e],c=p[o],l=g[o];l===c&&"value"!==o||a(u,o,c,l,i,t.children,n,r,Y)}}1&l&&t.children!==e.children&&f(u,e.children)}else c||null!=h||O(u,e,p,g,n,r,i);((m=g.onVnodeUpdated)||d)&&De((()=>{m&&hn(m,n,e,t),d&&Z(e,t,n,"updated")}),r)},R=(t,e,n,r,s,i,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Me||!Je(c,u)||70&c.shapeFlag)?d(c.el):n;y(c,u,l,null,r,s,i,o,!0)}},O=(t,e,n,r,i,o,c)=>{if(n!==r){if(n!==s.kT)for(const u in n)(0,s.Gg)(u)||u in r||a(t,u,n[u],null,c,e.children,i,o,Y);for(const u in r){if((0,s.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(t,u,h,l,c,e.children,i,o,Y)}"value"in r&&a(t,"value",n.value,r.value)}},L=(t,e,n,r,s,o,a,c,l)=>{const h=e.el=t?t.el:u(""),f=e.anchor=t?t.anchor:u("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(c=c?c.concat(g):g),null==t?(i(h,n,r),i(f,n,r),N(e.children,n,f,s,o,a,c,l)):d>0&&64&d&&p&&t.dynamicChildren?(R(t.dynamicChildren,p,n,s,o,a,c),(null!=e.key||s&&e===s.subTree)&&Oe(t,e,!0)):$(t,e,n,f,s,o,a,c,l)},P=(t,e,n,r,s,i,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?s.ctx.activate(e,n,r,o,c):M(e,n,r,s,i,o,c):F(t,e,c)},M=(t,e,n,r,s,i,o)=>{const a=t.component=pn(t,r,s);if(dt(t)&&(a.ctx.renderer=et),In(a),a.asyncDep){if(s&&s.registerDep(a,U),!t.el){const t=a.subTree=en(Ve);w(null,t,e,n)}}else U(a,t,e,n,s,i,o)},F=(t,e,n)=>{const r=e.component=t.component;if(j(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void B(r,e,n);r.next=e,E(r.update),r.update()}else e.el=t.el,r.vnode=e},U=(t,e,n,i,o,a,c)=>{const u=()=>{if(t.isMounted){let e,{next:n,bu:r,u:i,parent:u,vnode:l}=t,h=n;0,Re(t,!1),n?(n.el=l.el,B(t,n,c)):n=l,r&&(0,s.ir)(r),(e=n.props&&n.props.onVnodeBeforeUpdate)&&hn(e,u,n,l),Re(t,!0);const f=V(t);0;const p=t.subTree;t.subTree=f,y(p,f,d(p.el),X(p),t,o,a),n.el=f.el,null===h&&q(t,f.el),i&&De(i,o),(e=n.props&&n.props.onVnodeUpdated)&&De((()=>hn(e,u,n,l)),o)}else{let r;const{el:c,props:u}=e,{bm:l,m:h,parent:f}=t,d=ft(e);if(Re(t,!1),l&&(0,s.ir)(l),!d&&(r=u&&u.onVnodeBeforeMount)&&hn(r,f,e),Re(t,!0),c&&rt){const n=()=>{t.subTree=V(t),rt(c,t.subTree,t,o,null)};d?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const r=t.subTree=V(t);0,y(null,r,n,i,t,o,a),e.el=r.el}if(h&&De(h,o),!d&&(r=u&&u.onVnodeMounted)){const t=e;De((()=>hn(r,f,t)),o)}(256&e.shapeFlag||f&&ft(f.vnode)&&256&f.vnode.shapeFlag)&&t.a&&De(t.a,o),t.isMounted=!0,e=n=i=null}},l=t.effect=new r.qq(u,(()=>_(h)),t.scope),h=t.update=()=>l.run();h.id=t.uid,Re(t,!0),h()},B=(t,e,n)=>{e.component=t;const s=t.vnode.props;t.vnode=e,t.next=null,fe(t,e.props,s,n),Ie(t,e.children,n),(0,r.Jd)(),C(),(0,r.lk)()},$=(t,e,n,r,s,i,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void z(u,h,n,r,s,i,o,a,c);if(256&d)return void K(u,h,n,r,s,i,o,a,c)}8&p?(16&l&&Y(u,s,i),h!==u&&f(n,h)):16&l?16&p?z(u,h,n,r,s,i,o,a,c):Y(u,s,i,!0):(8&l&&f(n,""),16&p&&N(h,n,r,s,i,o,a,c))},K=(t,e,n,r,i,o,a,c,u)=>{t=t||s.Z6,e=e||s.Z6;const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=u?cn(e[d]):an(e[d]);y(t[d],r,n,null,i,o,a,c,u)}l>h?Y(t,i,o,!0,!1,f):N(e,n,r,i,o,a,c,u,f)},z=(t,e,n,r,i,o,a,c,u)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],s=e[l]=u?cn(e[l]):an(e[l]);if(!Je(r,s))break;y(r,s,n,null,i,o,a,c,u),l++}while(l<=f&&l<=d){const r=t[f],s=e[d]=u?cn(e[d]):an(e[d]);if(!Je(r,s))break;y(r,s,n,null,i,o,a,c,u),f--,d--}if(l>f){if(l<=d){const t=d+1,s=t<h?e[t].el:r;while(l<=d)y(null,e[l]=u?cn(e[l]):an(e[l]),n,s,i,o,a,c,u),l++}}else if(l>d)while(l<=f)H(t[l],i,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=d;l++){const t=e[l]=u?cn(e[l]):an(e[l]);null!=t.key&&m.set(t.key,l)}let v,w=0;const _=d-g+1;let b=!1,E=0;const T=new Array(_);for(l=0;l<_;l++)T[l]=0;for(l=p;l<=f;l++){const r=t[l];if(w>=_){H(r,i,o,!0);continue}let s;if(null!=r.key)s=m.get(r.key);else for(v=g;v<=d;v++)if(0===T[v-g]&&Je(r,e[v])){s=v;break}void 0===s?H(r,i,o,!0):(T[s-g]=l+1,s>=E?E=s:b=!0,y(r,e[s],n,null,i,o,a,c,u),w++)}const C=b?Le(T):s.Z6;for(v=C.length-1,l=_-1;l>=0;l--){const t=g+l,s=e[t],f=t+1<h?e[t+1].el:r;0===T[l]?y(null,s,n,f,i,o,a,c,u):b&&(v<0||l!==C[v]?G(s,n,f,2):v--)}}},G=(t,e,n,r,s=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void G(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,et);if(a===Me){i(o,e,n);for(let t=0;t<u.length;t++)G(u[t],e,n,r);return void i(t.anchor,e,n)}if(a===Ue)return void T(t,e,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),i(o,e,n),De((()=>c.enter(o)),s);else{const{leave:t,delayLeave:r,afterLeave:s}=c,a=()=>i(o,e,n),u=()=>{t(o,(()=>{a(),s&&s()}))};r?r(o,a,u):u()}else i(o,e,n)},H=(t,e,n,r=!1,s=!1)=>{const{type:i,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:f}=t;if(null!=a&&Ae(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const d=1&l&&f,p=!ft(t);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&hn(g,e,t),6&l)J(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);d&&Z(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,s,et,r):u&&(i!==Me||h>0&&64&h)?Y(u,e,n,!1,!0):(i===Me&&384&h||!s&&16&l)&&Y(c,e,n),r&&W(t)}(p&&(g=o&&o.onVnodeUnmounted)||d)&&De((()=>{g&&hn(g,e,t),d&&Z(t,null,e,"unmounted")}),n)},W=t=>{const{type:e,el:n,anchor:r,transition:s}=t;if(e===Me)return void Q(n,r);if(e===Ue)return void I(t);const i=()=>{o(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&t.shapeFlag&&s&&!s.persisted){const{leave:e,delayLeave:r}=s,o=()=>e(n,i);r?r(t.el,i,o):o()}else i()},Q=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},J=(t,e,n)=>{const{bum:r,scope:i,update:o,subTree:a,um:c}=t;r&&(0,s.ir)(r),i.stop(),o&&(o.active=!1,H(a,t,e,n)),c&&De(c,e),De((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},Y=(t,e,n,r=!1,s=!1,i=0)=>{for(let o=i;o<t.length;o++)H(t[o],e,n,r,s)},X=t=>6&t.shapeFlag?X(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el),tt=(t,e,n)=>{null==t?e._vnode&&H(e._vnode,null,null,!0):y(e._vnode||null,t,e,null,null,null,n),C(),S(),e._vnode=t},et={p:y,um:H,m:G,r:W,mt:M,mc:N,pc:$,pbc:R,n:X,o:t};let nt,rt;return e&&([nt,rt]=e(et)),{render:tt,hydrate:nt,createApp:ae(tt,nt)}}function Re({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Oe(t,e,n=!1){const r=t.children,i=e.children;if((0,s.kJ)(r)&&(0,s.kJ)(i))for(let s=0;s<r.length;s++){const t=r[s];let e=i[s];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=i[s]=cn(i[s]),e.el=t.el),n||Oe(t,e)),e.type===Fe&&(e.el=t.el)}}function Le(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}i=0,o=n.length-1;while(i<o)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}i=n.length,o=n[i-1];while(i-- >0)n[i]=o,o=e[o];return n}const Pe=t=>t.__isTeleport;const Me=Symbol.for("v-fgt"),Fe=Symbol.for("v-txt"),Ve=Symbol.for("v-cmt"),Ue=Symbol.for("v-stc"),Be=[];let je=null;function $e(t=!1){Be.push(je=t?null:[])}function qe(){Be.pop(),je=Be[Be.length-1]||null}let Ke=1;function ze(t){Ke+=t}function Ge(t){return t.dynamicChildren=Ke>0?je||s.Z6:null,qe(),Ke>0&&je&&je.push(t),t}function He(t,e,n,r,s,i){return Ge(tn(t,e,n,r,s,i,!0))}function We(t,e,n,r,s){return Ge(en(t,e,n,r,s,!0))}function Qe(t){return!!t&&!0===t.__v_isVNode}function Je(t,e){return t.type===e.type&&t.key===e.key}const Ye="__vInternal",Xe=({key:t})=>null!=t?t:null,Ze=({ref:t,ref_key:e,ref_for:n})=>("number"===typeof t&&(t=""+t),null!=t?(0,s.HD)(t)||(0,r.dq)(t)||(0,s.mf)(t)?{i:R,r:t,k:e,f:!!n}:t:null);function tn(t,e=null,n=null,r=0,i=null,o=(t===Me?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Xe(e),ref:e&&Ze(e),scopeId:O,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:R};return c?(un(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=(0,s.HD)(n)?8:16),Ke>0&&!a&&je&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&je.push(u),u}const en=nn;function nn(t,e=null,n=null,i=0,o=null,a=!1){if(t&&t!==Pt||(t=Ve),Qe(t)){const r=sn(t,e,!0);return n&&un(r,n),Ke>0&&!a&&je&&(6&r.shapeFlag?je[je.indexOf(t)]=r:je.push(r)),r.patchFlag|=-2,r}if(Ln(t)&&(t=t.__vccOpts),e){e=rn(e);let{class:t,style:n}=e;t&&!(0,s.HD)(t)&&(e.class=(0,s.C_)(t)),(0,s.Kn)(n)&&((0,r.X3)(n)&&!(0,s.kJ)(n)&&(n=(0,s.l7)({},n)),e.style=(0,s.j5)(n))}const c=(0,s.HD)(t)?1:K(t)?128:Pe(t)?64:(0,s.Kn)(t)?4:(0,s.mf)(t)?2:0;return tn(t,e,n,i,o,c,a,!0)}function rn(t){return t?(0,r.X3)(t)||Ye in t?(0,s.l7)({},t):t:null}function sn(t,e,n=!1){const{props:r,ref:i,patchFlag:o,children:a}=t,c=e?ln(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Xe(c),ref:e&&e.ref?n&&i?(0,s.kJ)(i)?i.concat(Ze(e)):[i,Ze(e)]:Ze(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Me?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&sn(t.ssContent),ssFallback:t.ssFallback&&sn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u}function on(t=" ",e=0){return en(Fe,null,t,e)}function an(t){return null==t||"boolean"===typeof t?en(Ve):(0,s.kJ)(t)?en(Me,null,t.slice()):"object"===typeof t?cn(t):en(Fe,null,String(t))}function cn(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:sn(t)}function un(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,s.kJ)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),un(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||Ye in e?3===r&&R&&(1===R.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=R}}else(0,s.mf)(e)?(e={default:e,_ctx:R},n=32):(e=String(e),64&r?(n=16,e=[on(e)]):n=8);t.children=e,t.shapeFlag|=n}function ln(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,s.C_)([e.class,r.class]));else if("style"===t)e.style=(0,s.j5)([e.style,r.style]);else if((0,s.F7)(t)){const n=e[t],i=r[t];!i||n===i||(0,s.kJ)(n)&&n.includes(i)||(e[t]=n?[].concat(n,i):i)}else""!==t&&(e[t]=r[t])}return e}function hn(t,e,n,r=null){o(t,e,7,[n,r])}const fn=ie();let dn=0;function pn(t,e,n){const i=t.type,o=(e?e.appContext:t.appContext)||fn,a={uid:dn++,vnode:t,type:i,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ge(i,o),emitsOptions:N(i,o),emit:null,emitted:null,propsDefaults:s.kT,inheritAttrs:i.inheritAttrs,ctx:s.kT,data:s.kT,props:s.kT,attrs:s.kT,slots:s.kT,refs:s.kT,setupState:s.kT,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=D.bind(null,a),t.ce&&t.ce(a),a}let gn=null;const mn=()=>gn||R;let yn,vn,wn="__VUE_INSTANCE_SETTERS__";(vn=(0,s.E9)()[wn])||(vn=(0,s.E9)()[wn]=[]),vn.push((t=>gn=t)),yn=t=>{vn.length>1?vn.forEach((e=>e(t))):vn[0](t)};const _n=t=>{yn(t),t.scope.on()},bn=()=>{gn&&gn.scope.off(),yn(null)};function En(t){return 4&t.vnode.shapeFlag}let Tn,Cn,Sn=!1;function In(t,e=!1){Sn=e;const{props:n,children:r}=t.vnode,s=En(t);he(t,n,s,e),Se(t,r);const i=s?An(t,e):void 0;return Sn=!1,i}function An(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=(0,r.Xl)(new Proxy(t.ctx,$t));const{setup:o}=n;if(o){const n=t.setupContext=o.length>1?xn(t):null;_n(t),(0,r.Jd)();const c=i(o,t,0,[t.props,n]);if((0,r.lk)(),bn(),(0,s.tI)(c)){if(c.then(bn,bn),e)return c.then((n=>{kn(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=c}else kn(t,c,e)}else Dn(t,e)}function kn(t,e,n){(0,s.mf)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,s.Kn)(e)&&(t.setupState=(0,r.WL)(e)),Dn(t,n)}function Dn(t,e,n){const i=t.type;if(!t.render){if(!e&&Tn&&!i.render){const e=i.template||Qt(t).template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=i,c=(0,s.l7)((0,s.l7)({isCustomElement:n,delimiters:o},r),a);i.render=Tn(e,c)}}t.render=i.render||s.dG,Cn&&Cn(t)}_n(t),(0,r.Jd)(),zt(t),(0,r.lk)(),bn()}function Nn(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return(0,r.j)(t,"get","$attrs"),e[n]}}))}function xn(t){const e=e=>{t.exposed=e||{}};return{get attrs(){return Nn(t)},slots:t.slots,emit:t.emit,expose:e}}function Rn(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(t.exposed)),{get(e,n){return n in e?e[n]:n in Bt?Bt[n](t):void 0},has(t,e){return e in t||e in Bt}}))}function On(t,e=!0){return(0,s.mf)(t)?t.displayName||t.name:t.name||e&&t.__name}function Ln(t){return(0,s.mf)(t)&&"__vccOpts"in t}const Pn=(t,e)=>(0,r.Fl)(t,e,Sn);function Mn(t,e,n){const r=arguments.length;return 2===r?(0,s.Kn)(e)&&!(0,s.kJ)(e)?Qe(e)?en(t,null,[e]):en(t,e):en(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Qe(n)&&(n=[n]),en(t,e,n))}const Fn=Symbol.for("v-scx"),Vn=()=>{{const t=le(Fn);return t}};const Un="3.3.4"},963:function(t,e,n){n.d(e,{bM:function(){return ut},iM:function(){return pt},nr:function(){return ct},ri:function(){return vt}});var r=n(577),s=n(252),i=n(262);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,c=a&&a.createElement("template"),u={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?a.createElementNS(o,t):a.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&s.setAttribute("multiple",r.multiple),s},createText:t=>a.createTextNode(t),createComment:t=>a.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>a.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling)){while(1)if(e.insertBefore(s.cloneNode(!0),n),s===i||!(s=s.nextSibling))break}else{c.innerHTML=r?`<svg>${t}</svg>`:t;const s=c.content;if(r){const t=s.firstChild;while(t.firstChild)s.appendChild(t.firstChild);s.removeChild(t)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function l(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function h(t,e,n){const s=t.style,i=(0,r.HD)(n);if(n&&!i){if(e&&!(0,r.HD)(e))for(const t in e)null==n[t]&&d(s,t,"");for(const t in n)d(s,t,n[t])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const f=/\s*!important$/;function d(t,e,n){if((0,r.kJ)(n))n.forEach((n=>d(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=m(t,e);f.test(n)?t.setProperty((0,r.rs)(s),n.replace(f,""),"important"):t[s]=n}}const p=["Webkit","Moz","ms"],g={};function m(t,e){const n=g[e];if(n)return n;let s=(0,r._A)(e);if("filter"!==s&&s in t)return g[e]=s;s=(0,r.kC)(s);for(let r=0;r<p.length;r++){const n=p[r]+s;if(n in t)return g[e]=n}return e}const y="http://www.w3.org/1999/xlink";function v(t,e,n,s,i){if(s&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(y,e.slice(6,e.length)):t.setAttributeNS(y,e,n);else{const s=(0,r.Pq)(e);null==n||s&&!(0,r.yA)(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function w(t,e,n,s,i,o,a){if("innerHTML"===e||"textContent"===e)return s&&a(s,i,o),void(t[e]=null==n?"":n);const c=t.tagName;if("value"===e&&"PROGRESS"!==c&&!c.includes("-")){t._value=n;const r="OPTION"===c?t.getAttribute("value"):t.value,s=null==n?"":n;return r!==s&&(t.value=s),void(null==n&&t.removeAttribute(e))}let u=!1;if(""===n||null==n){const s=typeof t[e];"boolean"===s?n=(0,r.yA)(n):null==n&&"string"===s?(n="",u=!0):"number"===s&&(n=0,u=!0)}try{t[e]=n}catch(l){0}u&&t.removeAttribute(e)}function _(t,e,n,r){t.addEventListener(e,n,r)}function b(t,e,n,r){t.removeEventListener(e,n,r)}function E(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[n,a]=C(e);if(r){const o=i[e]=k(r,s);_(t,n,o,a)}else o&&(b(t,n,o,a),i[e]=void 0)}}const T=/(?:Once|Passive|Capture)$/;function C(t){let e;if(T.test(t)){let n;e={};while(n=t.match(T))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,r.rs)(t.slice(2));return[n,e]}let S=0;const I=Promise.resolve(),A=()=>S||(I.then((()=>S=0)),S=Date.now());function k(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,s.$d)(D(t,n.value),e,5,[t])};return n.value=t,n.attached=A(),n}function D(t,e){if((0,r.kJ)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const N=/^on[a-z]/,x=(t,e,n,s,i=!1,o,a,c,u)=>{"class"===e?l(t,s,i):"style"===e?h(t,n,s):(0,r.F7)(e)?(0,r.tR)(e)||E(t,e,n,s,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):R(t,e,s,i))?w(t,e,s,o,a,c,u):("true-value"===e?t._trueValue=s:"false-value"===e&&(t._falseValue=s),v(t,e,s,i))};function R(t,e,n,s){return s?"innerHTML"===e||"textContent"===e||!!(e in t&&N.test(e)&&(0,r.mf)(n)):"spellcheck"!==e&&"draggable"!==e&&"translate"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!N.test(e)||!(0,r.HD)(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const O="transition",L="animation",P=(t,{slots:e})=>(0,s.h)(s.P$,B(t),e);P.displayName="Transition";const M={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},F=P.props=(0,r.l7)({},s.nJ,M),V=(t,e=[])=>{(0,r.kJ)(t)?t.forEach((t=>t(...e))):t&&t(...e)},U=t=>!!t&&((0,r.kJ)(t)?t.some((t=>t.length>1)):t.length>1);function B(t){const e={};for(const r in t)r in M||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:s,duration:i,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=j(i),m=g&&g[0],y=g&&g[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:_,onLeave:b,onLeaveCancelled:E,onBeforeAppear:T=v,onAppear:C=w,onAppearCancelled:S=_}=e,I=(t,e,n)=>{K(t,e?h:c),K(t,e?l:a),n&&n()},A=(t,e)=>{t._isLeaving=!1,K(t,f),K(t,p),K(t,d),e&&e()},k=t=>(e,n)=>{const r=t?C:w,i=()=>I(e,t,n);V(r,[e,i]),z((()=>{K(e,t?u:o),q(e,t?h:c),U(r)||H(e,s,m,i)}))};return(0,r.l7)(e,{onBeforeEnter(t){V(v,[t]),q(t,o),q(t,a)},onBeforeAppear(t){V(T,[t]),q(t,u),q(t,l)},onEnter:k(!1),onAppear:k(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>A(t,e);q(t,f),Y(),q(t,d),z((()=>{t._isLeaving&&(K(t,f),q(t,p),U(b)||H(t,s,y,n))})),V(b,[t,n])},onEnterCancelled(t){I(t,!1),V(_,[t])},onAppearCancelled(t){I(t,!0),V(S,[t])},onLeaveCancelled(t){A(t),V(E,[t])}})}function j(t){if(null==t)return null;if((0,r.Kn)(t))return[$(t.enter),$(t.leave)];{const e=$(t);return[e,e]}}function $(t){const e=(0,r.He)(t);return e}function q(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t._vtc||(t._vtc=new Set)).add(e)}function K(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function z(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let G=0;function H(t,e,n,r){const s=t._endId=++G,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=W(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,f),i()},f=e=>{e.target===t&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),t.addEventListener(u,f)}function W(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),s=r(`${O}Delay`),i=r(`${O}Duration`),o=Q(s,i),a=r(`${L}Delay`),c=r(`${L}Duration`),u=Q(a,c);let l=null,h=0,f=0;e===O?o>0&&(l=O,h=o,f=i.length):e===L?u>0&&(l=L,h=u,f=c.length):(h=Math.max(o,u),l=h>0?o>u?O:L:null,f=l?l===O?i.length:c.length:0);const d=l===O&&/\b(transform|all)(,|$)/.test(r(`${O}Property`).toString());return{type:l,timeout:h,propCount:f,hasTransform:d}}function Q(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>J(e)+J(t[n]))))}function J(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Y(){return document.body.offsetHeight}const X=new WeakMap,Z=new WeakMap,tt={name:"TransitionGroup",props:(0,r.l7)({},F,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=(0,s.FN)(),r=(0,s.Y8)();let o,a;return(0,s.ic)((()=>{if(!o.length)return;const e=t.moveClass||`${t.name||"v"}-move`;if(!st(o[0].el,n.vnode.el,e))return;o.forEach(et),o.forEach(nt);const r=o.filter(rt);Y(),r.forEach((t=>{const n=t.el,r=n.style;q(n,e),r.transform=r.webkitTransform=r.transitionDuration="";const s=n._moveCb=t=>{t&&t.target!==n||t&&!/transform$/.test(t.propertyName)||(n.removeEventListener("transitionend",s),n._moveCb=null,K(n,e))};n.addEventListener("transitionend",s)}))})),()=>{const c=(0,i.IU)(t),u=B(c);let l=c.tag||s.HY;o=a,a=e.default?(0,s.Q6)(e.default()):[];for(let t=0;t<a.length;t++){const e=a[t];null!=e.key&&(0,s.nK)(e,(0,s.U2)(e,u,r,n))}if(o)for(let t=0;t<o.length;t++){const e=o[t];(0,s.nK)(e,(0,s.U2)(e,u,r,n)),X.set(e,e.el.getBoundingClientRect())}return(0,s.Wm)(l,null,a)}}};tt.props;function et(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function nt(t){Z.set(t,t.el.getBoundingClientRect())}function rt(t){const e=X.get(t),n=Z.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const e=t.el.style;return e.transform=e.webkitTransform=`translate(${r}px,${s}px)`,e.transitionDuration="0s",t}}function st(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach((t=>{t.split(/\s+/).forEach((t=>t&&r.classList.remove(t)))})),n.split(/\s+/).forEach((t=>t&&r.classList.add(t))),r.style.display="none";const s=1===e.nodeType?e:e.parentNode;s.appendChild(r);const{hasTransform:i}=W(r);return s.removeChild(r),i}const it=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(e)?t=>(0,r.ir)(e,t):e};function ot(t){t.target.composing=!0}function at(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ct={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=it(i);const o=s||i.props&&"number"===i.props.type;_(t,e?"change":"input",(e=>{if(e.target.composing)return;let s=t.value;n&&(s=s.trim()),o&&(s=(0,r.h5)(s)),t._assign(s)})),n&&_(t,"change",(()=>{t.value=t.value.trim()})),e||(_(t,"compositionstart",ot),_(t,"compositionend",at),_(t,"change",at))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},o){if(t._assign=it(o),t.composing)return;if(document.activeElement===t&&"range"!==t.type){if(n)return;if(s&&t.value.trim()===e)return;if((i||"number"===t.type)&&(0,r.h5)(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}};const ut={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=(0,r.DM)(e);_(t,"change",(()=>{const e=Array.prototype.filter.call(t.options,(t=>t.selected)).map((t=>n?(0,r.h5)(ht(t)):ht(t)));t._assign(t.multiple?i?new Set(e):e:e[0])})),t._assign=it(s)},mounted(t,{value:e}){lt(t,e)},beforeUpdate(t,e,n){t._assign=it(n)},updated(t,{value:e}){lt(t,e)}};function lt(t,e){const n=t.multiple;if(!n||(0,r.kJ)(e)||(0,r.DM)(e)){for(let s=0,i=t.options.length;s<i;s++){const i=t.options[s],o=ht(i);if(n)(0,r.kJ)(e)?i.selected=(0,r.hq)(e,o)>-1:i.selected=e.has(o);else if((0,r.WV)(ht(i),e))return void(t.selectedIndex!==s&&(t.selectedIndex=s))}n||-1===t.selectedIndex||(t.selectedIndex=-1)}}function ht(t){return"_value"in t?t._value:t.value}const ft=["ctrl","shift","alt","meta"],dt={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>ft.some((n=>t[`${n}Key`]&&!e.includes(n)))},pt=(t,e)=>(n,...r)=>{for(let t=0;t<e.length;t++){const r=dt[e[t]];if(r&&r(n,e))return}return t(n,...r)};const gt=(0,r.l7)({patchProp:x},u);let mt;function yt(){return mt||(mt=(0,s.Us)(gt))}const vt=(...t)=>{const e=yt().createApp(...t);const{mount:n}=e;return e.mount=t=>{const s=wt(t);if(!s)return;const i=e._component;(0,r.mf)(i)||i.render||i.template||(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function wt(t){if((0,r.HD)(t)){const e=document.querySelector(t);return e}return t}},577:function(t,e,n){function r(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,{C_:function(){return X},DM:function(){return y},E9:function(){return K},F7:function(){return u},Gg:function(){return N},HD:function(){return b},He:function(){return $},Kj:function(){return w},Kn:function(){return T},NO:function(){return a},Nj:function(){return B},Od:function(){return f},PO:function(){return k},Pq:function(){return tt},RI:function(){return p},S0:function(){return D},W7:function(){return A},WV:function(){return rt},Z6:function(){return i},_A:function(){return O},_N:function(){return m},aU:function(){return V},dG:function(){return o},e1:function(){return G},fY:function(){return r},h5:function(){return j},hR:function(){return F},hq:function(){return st},ir:function(){return U},j5:function(){return H},kC:function(){return M},kJ:function(){return g},kT:function(){return s},l7:function(){return h},mf:function(){return _},rs:function(){return P},tI:function(){return C},tR:function(){return l},yA:function(){return et},yk:function(){return E},zw:function(){return it}});const s={},i=[],o=()=>{},a=()=>!1,c=/^on[^a-z]/,u=t=>c.test(t),l=t=>t.startsWith("onUpdate:"),h=Object.assign,f=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},d=Object.prototype.hasOwnProperty,p=(t,e)=>d.call(t,e),g=Array.isArray,m=t=>"[object Map]"===I(t),y=t=>"[object Set]"===I(t),v=t=>"[object Date]"===I(t),w=t=>"[object RegExp]"===I(t),_=t=>"function"===typeof t,b=t=>"string"===typeof t,E=t=>"symbol"===typeof t,T=t=>null!==t&&"object"===typeof t,C=t=>T(t)&&_(t.then)&&_(t.catch),S=Object.prototype.toString,I=t=>S.call(t),A=t=>I(t).slice(8,-1),k=t=>"[object Object]"===I(t),D=t=>b(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,N=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),x=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},R=/-(\w)/g,O=x((t=>t.replace(R,((t,e)=>e?e.toUpperCase():"")))),L=/\B([A-Z])/g,P=x((t=>t.replace(L,"-$1").toLowerCase())),M=x((t=>t.charAt(0).toUpperCase()+t.slice(1))),F=x((t=>t?`on${M(t)}`:"")),V=(t,e)=>!Object.is(t,e),U=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},B=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},j=t=>{const e=parseFloat(t);return isNaN(e)?t:e},$=t=>{const e=b(t)?Number(t):NaN;return isNaN(e)?t:e};let q;const K=()=>q||(q="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const z="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",G=r(z);function H(t){if(g(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=b(r)?Y(r):H(r);if(s)for(const t in s)e[t]=s[t]}return e}return b(t)||T(t)?t:void 0}const W=/;(?![^(]*\))/g,Q=/:([^]+)/,J=/\/\*[^]*?\*\//g;function Y(t){const e={};return t.replace(J,"").split(W).forEach((t=>{if(t){const n=t.split(Q);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function X(t){let e="";if(b(t))e=t;else if(g(t))for(let n=0;n<t.length;n++){const r=X(t[n]);r&&(e+=r+" ")}else if(T(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Z="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tt=r(Z);function et(t){return!!t||""===t}function nt(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=rt(t[r],e[r]);return n}function rt(t,e){if(t===e)return!0;let n=v(t),r=v(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=E(t),r=E(e),n||r)return t===e;if(n=g(t),r=g(e),n||r)return!(!n||!r)&&nt(t,e);if(n=T(t),r=T(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const n in t){const r=t.hasOwnProperty(n),s=e.hasOwnProperty(n);if(r&&!s||!r&&s||!rt(t[n],e[n]))return!1}}return String(t)===String(e)}function st(t,e){return t.findIndex((t=>rt(t,e)))}const it=t=>b(t)?t:null==t?"":g(t)||T(t)&&(t.toString===S||!_(t.toString))?JSON.stringify(t,ot,2):String(t),ot=(t,e)=>e&&e.__v_isRef?ot(t,e.value):m(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n])=>(t[`${e} =>`]=n,t)),{})}:y(e)?{[`Set(${e.size})`]:[...e.values()]}:!T(e)||g(e)||k(e)?e:String(e)},744:function(t,e){e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n}},816:function(t,e,n){n.r(e),n.d(e,{FirebaseError:function(){return i.ZR},SDK_VERSION:function(){return vt},_DEFAULT_ENTRY_NAME:function(){return it},_addComponent:function(){return ut},_addOrOverwriteComponent:function(){return lt},_apps:function(){return at},_clearComponents:function(){return pt},_components:function(){return ct},_getProvider:function(){return ft},_registerComponent:function(){return ht},_removeServiceInstance:function(){return dt},deleteApp:function(){return Et},getApp:function(){return _t},getApps:function(){return bt},initializeApp:function(){return wt},onLog:function(){return Ct},registerVersion:function(){return Tt},setLogLevel:function(){return St}});var r=n(463),s=n(333),i=n(444);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",i)},s=()=>{e(E(t.result)),r()},i=()=>{n(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),g.set(e,t),e}function y(t){if(f.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",i),t.removeEventListener("abort",i)},s=()=>{e(),r()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",i),t.addEventListener("abort",i)}));f.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){v=t(v)}function _(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),E(h.get(this))}:function(...e){return E(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return d.set(r,e.sort?e.sort():[e]),E(r)}}function b(t){return"function"===typeof t?_(t):(t instanceof IDBTransaction&&y(t),o(t,u())?new Proxy(t,v):t)}function E(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=b(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const T=t=>g.get(t);function C(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=E(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(E(o.result),t.oldVersion,t.newVersion,E(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{i&&t.addEventListener("close",(()=>i())),s&&t.addEventListener("versionchange",(t=>s(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],A=new Map;function k(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(A.get(e))return A.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=I.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!S.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&i.done]))[0]};return A.set(e,i),i}w((t=>({...t,get:(e,n,r)=>k(e,n)||t.get(e,n,r),has:(e,n)=>!!k(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class D{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(N(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function N(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const x="@firebase/app",R="0.9.19",O=new s.Yd("@firebase/app"),L="@firebase/app-compat",P="@firebase/analytics-compat",M="@firebase/analytics",F="@firebase/app-check-compat",V="@firebase/app-check",U="@firebase/auth",B="@firebase/auth-compat",j="@firebase/database",$="@firebase/database-compat",q="@firebase/functions",K="@firebase/functions-compat",z="@firebase/installations",G="@firebase/installations-compat",H="@firebase/messaging",W="@firebase/messaging-compat",Q="@firebase/performance",J="@firebase/performance-compat",Y="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",st="10.4.0",it="[DEFAULT]",ot={[x]:"fire-core",[L]:"fire-core-compat",[M]:"fire-analytics",[P]:"fire-analytics-compat",[V]:"fire-app-check",[F]:"fire-app-check-compat",[U]:"fire-auth",[B]:"fire-auth-compat",[j]:"fire-rtdb",[$]:"fire-rtdb-compat",[q]:"fire-fn",[K]:"fire-fn-compat",[z]:"fire-iid",[G]:"fire-iid-compat",[H]:"fire-fcm",[W]:"fire-fcm-compat",[Q]:"fire-perf",[J]:"fire-perf-compat",[Y]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){O.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t,e){t.container.addOrOverwriteComponent(e)}function ht(t){const e=t.name;if(ct.has(e))return O.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function ft(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function dt(t,e,n=it){ft(t,e).clearInstance(n)}function pt(){ct.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mt=new i.LL("app","Firebase",gt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw mt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=st;function wt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const s=Object.assign({name:it,automaticDataCollectionEnabled:!1},e),o=s.name;if("string"!==typeof o||!o)throw mt.create("bad-app-name",{appName:String(o)});if(n||(n=(0,i.aH)()),!n)throw mt.create("no-options");const a=at.get(o);if(a){if((0,i.vZ)(n,a.options)&&(0,i.vZ)(s,a.config))return a;throw mt.create("duplicate-app",{appName:o})}const c=new r.H0(o);for(const r of ct.values())c.addComponent(r);const u=new yt(n,s,c);return at.set(o,u),u}function _t(t=it){const e=at.get(t);if(!e&&t===it&&(0,i.aH)())return wt();if(!e)throw mt.create("no-app",{appName:t});return e}function bt(){return Array.from(at.values())}async function Et(t){const e=t.name;at.has(e)&&(at.delete(e),await Promise.all(t.container.getProviders().map((t=>t.delete()))),t.isDeleted=!0)}function Tt(t,e,n){var s;let i=null!==(s=ot[t])&&void 0!==s?s:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${i}" with version "${e}":`];return o&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void O.warn(t.join(" "))}ht(new r.wA(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}function Ct(t,e){if(null!==t&&"function"!==typeof t)throw mt.create("invalid-log-argument");(0,s.Am)(t,e)}function St(t){(0,s.Ub)(t)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="firebase-heartbeat-database",At=1,kt="firebase-heartbeat-store";let Dt=null;function Nt(){return Dt||(Dt=C(It,At,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(kt)}}}).catch((t=>{throw mt.create("idb-open",{originalErrorMessage:t.message})}))),Dt}async function xt(t){try{const e=await Nt(),n=await e.transaction(kt).objectStore(kt).get(Ot(t));return n}catch(e){if(e instanceof i.ZR)O.warn(e.message);else{const t=mt.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});O.warn(t.message)}}}async function Rt(t,e){try{const n=await Nt(),r=n.transaction(kt,"readwrite"),s=r.objectStore(kt);await s.put(e,Ot(t)),await r.done}catch(n){if(n instanceof i.ZR)O.warn(n.message);else{const t=mt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});O.warn(t.message)}}}function Ot(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=1024,Pt=2592e6;class Mt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ut(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Ft();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=Pt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Ft(),{heartbeatsToSend:e,unsentEntries:n}=Vt(this._heartbeatsCache.heartbeats),r=(0,i.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ft(){const t=new Date;return t.toISOString().substring(0,10)}function Vt(t,e=Lt){const n=[];let r=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),Bt(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Bt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ut{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await xt(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Rt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Rt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Bt(t){return(0,i.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t){ht(new r.wA("platform-logger",(t=>new D(t)),"PRIVATE")),ht(new r.wA("heartbeat",(t=>new Mt(t)),"PRIVATE")),Tt(x,R,t),Tt(x,R,"esm2017"),Tt("fire-js","")}jt("")},463:function(t,e,n){n.d(e,{H0:function(){return u},wA:function(){return s}});var r=n(444);class s{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:i})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=i){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=i){return this.instances.has(t)}getOptions(t=i){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(s);n===t&&i.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=i){return this.component?this.component.multipleInstances?t:i:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===i?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},333:function(t,e,n){n.d(e,{Am:function(){return h},Ub:function(){return l},Yd:function(){return u},in:function(){return s}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var s;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(s||(s={}));const i={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},o=s.INFO,a={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),s=a[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in s))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?i[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...t),this._logHandler(this,s.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...t),this._logHandler(this,s.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,s.INFO,...t),this._logHandler(this,s.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,s.WARN,...t),this._logHandler(this,s.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...t),this._logHandler(this,s.ERROR,...t)}}function l(t){r.forEach((e=>{e.setLogLevel(t)}))}function h(t,e){for(const n of r){let r=null;e&&e.level&&(r=i[e.level]),n.userLogHandler=null===t?null:(e,n,...i)=>{const o=i.map((t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}})).filter((t=>t)).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:s[n].toLowerCase(),message:o,args:i,type:e.name})}}}},770:function(t,e,n){n.d(e,{Z:function(){return y}});var r=n(444),s=n(463),i=n(816),o=n(333);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(t,e){this._delegate=t,this.firebase=e,(0,i._addComponent)(t,new s.wA("app-compat",(()=>this),"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((t=>{this._delegate.checkDestroyed(),t()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,i.deleteApp)(this._delegate))))}_getService(t,e=i._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(t);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:e})}_removeServiceInstance(t,e=i._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(t).clearInstance(e)}_addComponent(t){(0,i._addComponent)(this._delegate,t)}_addOrOverwriteComponent(t){(0,i._addOrOverwriteComponent)(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r.LL("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(t){const e={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:i.registerVersion,setLogLevel:i.setLogLevel,onLog:i.onLog,apps:null,SDK_VERSION:i.SDK_VERSION,INTERNAL:{registerComponent:l,removeApp:s,useAsService:h,modularAPIs:i}};function s(t){delete e[t]}function o(t){if(t=t||i._DEFAULT_ENTRY_NAME,!(0,r.r3)(e,t))throw u.create("no-app",{appName:t});return e[t]}function a(s,o={}){const a=i.initializeApp(s,o);if((0,r.r3)(e,a.name))return e[a.name];const c=new t(a,n);return e[a.name]=c,c}function c(){return Object.keys(e).map((t=>e[t]))}function l(e){const s=e.name,a=s.replace("-compat","");if(i._registerComponent(e)&&"PUBLIC"===e.type){const i=(t=o())=>{if("function"!==typeof t[a])throw u.create("invalid-app-argument",{appName:s});return t[a]()};void 0!==e.serviceProps&&(0,r.ZB)(i,e.serviceProps),n[a]=i,t.prototype[a]=function(...t){const n=this._getService.bind(this,s);return n.apply(this,e.multipleInstances?t:[])}}return"PUBLIC"===e.type?n[a]:null}function h(t,e){if("serverAuth"===e)return null;const n=e;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=t,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const t=l(a);function e(e){(0,r.ZB)(t,e)}return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:h,extendNamespace:e,createSubscribe:r.ne,ErrorFactory:r.LL,deepExtend:r.ZB}),t}const f=h(),d=new o.Yd("@firebase/app-compat"),p="@firebase/app-compat",g="0.2.19";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function m(t){(0,i.registerVersion)(p,g,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,r.jU)()&&void 0!==self.firebase){d.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&d.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const y=f;m();var v="firebase",w="10.4.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
y.registerVersion(v,w,"app-compat")},100:function(t,e,n){n.d(e,{ET:function(){return of},hJ:function(){return oh},PL:function(){return sf},ad:function(){return lh},Xo:function(){return zh},IO:function(){return Bh},ar:function(){return $h}});var r,s=n(816),i=n(463),o=n(333),a=n(444),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},u={},l=l||{},h=c||self;function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function d(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function p(t){return Object.prototype.hasOwnProperty.call(t,g)&&t[g]||(t[g]=++m)}var g="closure_uid_"+(1e9*Math.random()>>>0),m=0;function y(t,e,n){return t.call.apply(t.bind,arguments)}function v(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function w(t,e,n){return w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:v,w.apply(null,arguments)}function _(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function b(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}function E(){this.s=this.s,this.o=this.o}var T=0;E.prototype.s=!1,E.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==T)||p(this)},E.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const C=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function S(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function I(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(f(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let s=0;s<r;s++)t[n+s]=e[s]}else t.push(e)}}function A(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",(()=>{}),e),h.removeEventListener("test",(()=>{}),e)}catch(n){}return t}();function D(t){return/^[\s\xa0]*$/.test(t)}function N(){var t=h.navigator;return t&&(t=t.userAgent)?t:""}function x(t){return-1!=N().indexOf(t)}function R(t){return R[" "](t),t}function O(t,e){var n=_r;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}R[" "]=function(){};var L,P,M=x("Opera"),F=x("Trident")||x("MSIE"),V=x("Edge"),U=V||F,B=x("Gecko")&&!(-1!=N().toLowerCase().indexOf("webkit")&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),j=-1!=N().toLowerCase().indexOf("webkit")&&!x("Edge");function $(){var t=h.document;return t?t.documentMode:void 0}t:{var q="",K=function(){var t=N();return B?/rv:([^\);]+)(\)|;)/.exec(t):V?/Edge\/([\d\.]+)/.exec(t):F?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):j?/WebKit\/(\S+)/.exec(t):M?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(K&&(q=K?K[1]:""),F){var z=$();if(null!=z&&z>parseFloat(q)){L=String(z);break t}}L=q}if(h.document&&F){var G=$();P=G||(parseInt(L,10)||void 0)}else P=void 0;var H=P;function W(t,e){if(A.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(B){t:{try{R(e.nodeName);var s=!0;break t}catch(i){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:Q[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&W.$.h.call(this)}}b(W,A);var Q={2:"touch",3:"pen",4:"mouse"};W.prototype.h=function(){W.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var J="closure_listenable_"+(1e6*Math.random()|0),Y=0;function X(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++Y,this.fa=this.ia=!1}function Z(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function tt(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function et(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function nt(t){const e={};for(const n in t)e[n]=t[n];return e}const rt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function st(t,e){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)t[n]=r[n];for(let e=0;e<rt.length;e++)n=rt[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function it(t){this.src=t,this.g={},this.h=0}function ot(t,e){var n=e.type;if(n in t.g){var r,s=t.g[n],i=C(s,e);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Z(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function at(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}it.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=at(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new X(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};var ct="closure_lm_"+(1e6*Math.random()|0),ut={};function lt(t,e,n,r,s){if(r&&r.once)return dt(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)lt(t,e[i],n,r,s);return null}return n=_t(n),t&&t[J]?t.O(e,n,d(r)?!!r.capture:!!r,s):ht(t,e,n,!1,r,s)}function ht(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=d(s)?!!s.capture:!!s,a=vt(t);if(a||(t[ct]=a=new it(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=ft(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)k||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(mt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ft(){function t(n){return e.call(t.src,t.listener,n)}const e=yt;return t}function dt(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)dt(t,e[i],n,r,s);return null}return n=_t(n),t&&t[J]?t.P(e,n,d(r)?!!r.capture:!!r,s):ht(t,e,n,!0,r,s)}function pt(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)pt(t,e[i],n,r,s);else r=d(r)?!!r.capture:!!r,n=_t(n),t&&t[J]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=at(i,n,r,s),-1<n&&(Z(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=vt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=at(e,n,r,s)),(n=-1<t?e[t]:null)&&gt(n))}function gt(t){if("number"!==typeof t&&t&&!t.fa){var e=t.src;if(e&&e[J])ot(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(mt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=vt(e))?(ot(n,t),0==n.h&&(n.src=null,e[ct]=null)):Z(t)}}}function mt(t){return t in ut?ut[t]:ut[t]="on"+t}function yt(t,e){if(t.fa)t=!0;else{e=new W(e,this);var n=t.listener,r=t.la||t.src;t.ia&&gt(t),t=n.call(r,e)}return t}function vt(t){return t=t[ct],t instanceof it?t:null}var wt="__closure_events_fn_"+(1e9*Math.random()>>>0);function _t(t){return"function"===typeof t?t:(t[wt]||(t[wt]=function(e){return t.handleEvent(e)}),t[wt])}function bt(){E.call(this),this.i=new it(this),this.S=this,this.J=null}function Et(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,"string"===typeof e)e=new A(e,t);else if(e instanceof A)e.target=e.target||t;else{var s=e;e=new A(r,t),st(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Tt(o,r,!0,e)&&s}if(o=e.g=t,s=Tt(o,r,!0,e)&&s,s=Tt(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Tt(o,r,!1,e)&&s}function Tt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&ot(t.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}b(bt,E),bt.prototype[J]=!0,bt.prototype.removeEventListener=function(t,e,n,r){pt(this,t,e,n,r)},bt.prototype.N=function(){if(bt.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Z(n[r]);delete e.g[t],e.h--}}this.J=null},bt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},bt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Ct=h.JSON.stringify;class St{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function It(){var t=Lt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class At{constructor(){this.h=this.g=null}add(t,e){const n=kt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var kt=new St((()=>new Dt),(t=>t.reset()));class Dt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Nt(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function xt(t){h.setTimeout((()=>{throw t}),0)}let Rt,Ot=!1,Lt=new At,Pt=()=>{const t=h.Promise.resolve(void 0);Rt=()=>{t.then(Mt)}};var Mt=()=>{for(var t;t=It();){try{t.h.call(t.g)}catch(n){xt(n)}var e=kt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ot=!1};function Ft(t,e){bt.call(this),this.h=t||1,this.g=e||h,this.j=w(this.qb,this),this.l=Date.now()}function Vt(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function Ut(t,e,n){if("function"===typeof t)n&&(t=w(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=w(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Bt(t){t.g=Ut((()=>{t.g=null,t.i&&(t.i=!1,Bt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}b(Ft,bt),r=Ft.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Et(this,"tick"),this.ga&&(Vt(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){Ft.$.N.call(this),Vt(this),delete this.g};class jt extends E{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Bt(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $t(t){E.call(this),this.h=t,this.g={}}b($t,E);var qt=[];function Kt(t,e,n,r){Array.isArray(n)||(n&&(qt[0]=n.toString()),n=qt);for(var s=0;s<n.length;s++){var i=lt(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function zt(t){tt(t.g,(function(t,e){this.g.hasOwnProperty(e)&&gt(t)}),t),t.g={}}function Gt(){this.g=!0}function Ht(t,e,n,r,s,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}function Wt(t,e,n,r,s,i,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function Qt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Yt(t,n)+(r?" "+r:"")}))}function Jt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Yt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return Ct(n)}catch(a){return e}}$t.prototype.N=function(){$t.$.N.call(this),zt(this)},$t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Gt.prototype.Ea=function(){this.g=!1},Gt.prototype.info=function(){};var Xt={},Zt=null;function te(){return Zt=Zt||new bt}function ee(t){A.call(this,Xt.Ta,t)}function ne(t){const e=te();Et(e,new ee(e))}function re(t,e){A.call(this,Xt.STAT_EVENT,t),this.stat=e}function se(t){const e=te();Et(e,new re(e,t))}function ie(t,e){A.call(this,Xt.Ua,t),this.size=e}function oe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}Xt.Ta="serverreachability",b(ee,A),Xt.STAT_EVENT="statevent",b(re,A),Xt.Ua="timingevent",b(ie,A);var ae={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ce={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ue(){}function le(t){return t.h||(t.h=t.i())}function he(){}ue.prototype.h=null;var fe,de={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pe(){A.call(this,"d")}function ge(){A.call(this,"c")}function me(){}function ye(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new $t(this),this.P=we,t=U?125:void 0,this.V=new Ft(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ve}function ve(){this.i=null,this.g="",this.h=!1}b(pe,A),b(ge,A),b(me,ue),me.prototype.g=function(){return new XMLHttpRequest},me.prototype.i=function(){return{}},fe=new me;var we=45e3,_e={},be={};function Ee(t,e,n){t.L=1,t.v=Ke(Ue(e)),t.s=n,t.S=!0,Te(t,null)}function Te(t,e){t.G=Date.now(),Ae(t),t.A=Ue(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),rn(n.i,"t",r),t.C=0,n=t.l.J,t.h=new ve,t.g=ur(t.l,n?e:null,!t.s),0<t.O&&(t.M=new jt(w(t.Pa,t,t.g),t.O)),Kt(t.U,t.g,"readystatechange",t.nb),e=t.I?nt(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ne(),Ht(t.j,t.u,t.A,t.m,t.W,t.s)}function Ce(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function Se(t,e,n){let r,s=!0;for(;!t.J&&t.C<n.length;){if(r=Ie(t,n),r==be){4==e&&(t.o=4,se(14),s=!1),Qt(t.j,t.m,null,"[Incomplete Response]");break}if(r==_e){t.o=4,se(15),Qt(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}Qt(t.j,t.m,r,null),Re(t,r)}Ce(t)&&r!=be&&r!=_e&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,se(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),er(e),e.M=!0,se(11))):(Qt(t.j,t.m,n,"[Invalid Chunked Response]"),xe(t),Ne(t))}function Ie(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?be:(n=Number(e.substring(n,r)),isNaN(n)?_e:(r+=1,r+n>e.length?be:(e=e.slice(r,r+n),t.C=r+n,e)))}function Ae(t){t.Y=Date.now()+t.P,ke(t,t.P)}function ke(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=oe(w(t.lb,t),e)}function De(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function Ne(t){0==t.l.H||t.J||sr(t.l,t)}function xe(t){De(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,Vt(t.V),zt(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Re(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||fn(n.i,t)))if(!t.K&&fn(n.i,t)&&3==n.H){try{var r=n.Ja.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;rr(n),Gn(n)}tr(n),se(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&0==n.A&&!n.v&&(n.v=oe(w(n.ib,n),6e3));if(1>=hn(n.i)&&n.oa){try{n.oa()}catch(u){}n.oa=void 0}}else or(n,11)}else if((t.K||n.g==t)&&rr(n),!D(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const e=u[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const s=u[4];null!=s&&(n.Ga=s,n.l.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=r.i;i.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(dn(i,i.h),i.h=null))}if(r.F){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.Da=t,qe(r.I,r.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=cr(r,r.J?r.pa:null,r.Y),o.K){pn(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(De(a),Ae(a)),r.g=o}else Zn(r);0<n.j.length&&Wn(n)}else"stop"!=u[0]&&"close"!=u[0]||or(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?or(n,7):zn(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}ne(4)}catch(u){}}function Oe(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Le(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(f(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Pe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Le(t),r=Oe(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}r=ye.prototype,r.setTimeout=function(t){this.P=t},r.nb=function(t){t=t.target;const e=this.M;e&&3==Vn(t)?e.l():this.Pa(t)},r.Pa=function(t){try{if(t==this.g)t:{const l=Vn(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>l)&&(3!=l||U||this.g&&(this.h.h||this.g.ja()||Un(this.g)))){this.J||4!=l||7==e||ne(8==e||0>=f?3:2),De(this);var n=this.g.da();this.ca=n;e:if(Ce(this)){var r=Un(this.g);t="";var s=r.length,i=4==Vn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){xe(this),Ne(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Wt(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,se(12),xe(this),Ne(this);break t}Qt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Re(this,n)}this.S?(Se(this,l,o),U&&this.i&&3==l&&(Kt(this.U,this.V,"tick",this.mb),this.V.start())):(Qt(this.j,this.m,o,null),Re(this,o)),4==l&&xe(this),this.i&&!this.J&&(4==l?sr(this.l,this):(this.i=!1,Ae(this)))}else Bn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,se(12)):(this.o=0,se(13)),xe(this),Ne(this)}}}catch(l){}},r.mb=function(){if(this.g){var t=Vn(this.g),e=this.g.ja();this.C<e.length&&(De(this),Se(this,t,e),this.i&&4!=t&&Ae(this))}},r.cancel=function(){this.J=!0,xe(this)},r.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Jt(this.j,this.A),2!=this.L&&(ne(),se(17)),xe(this),this.o=2,Ne(this)):ke(this,this.Y-t)};var Me=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fe(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ve(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ve){this.h=t.h,Be(this,t.j),this.s=t.s,this.g=t.g,je(this,t.m),this.l=t.l;var e=t.i,n=new Ze;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),$e(this,n),this.o=t.o}else t&&(e=String(t).match(Me))?(this.h=!1,Be(this,e[1]||"",!0),this.s=ze(e[2]||""),this.g=ze(e[3]||"",!0),je(this,e[4]),this.l=ze(e[5]||"",!0),$e(this,e[6]||"",!0),this.o=ze(e[7]||"")):(this.h=!1,this.i=new Ze(null,this.h))}function Ue(t){return new Ve(t)}function Be(t,e,n){t.j=n?ze(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function je(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function $e(t,e,n){e instanceof Ze?(t.i=e,on(t.i,t.h)):(n||(e=Ge(e,Ye)),t.i=new Ze(e,t.h))}function qe(t,e,n){t.i.set(e,n)}function Ke(t){return qe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ze(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ge(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,He),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function He(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ve.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ge(e,We,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Ge(e,We,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ge(n,"/"==n.charAt(0)?Je:Qe,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ge(n,Xe)),t.join("")};var We=/[#\/\?@]/g,Qe=/[#\?:]/g,Je=/[#\?]/g,Ye=/[#\?@]/g,Xe=/#/g;function Ze(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function tn(t){t.g||(t.g=new Map,t.h=0,t.i&&Fe(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function en(t,e){tn(t),e=sn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function nn(t,e){return tn(t),e=sn(t,e),t.g.has(e)}function rn(t,e,n){en(t,e),0<n.length&&(t.i=null,t.g.set(sn(t,e),S(n)),t.h+=n.length)}function sn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function on(t,e){e&&!t.j&&(tn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(en(this,e),rn(this,n,t))}),t)),t.j=e}r=Ze.prototype,r.add=function(t,e){tn(this),this.i=null,t=sn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){tn(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},r.ta=function(){tn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let t=0;t<s.length;t++)n.push(e[r])}return n},r.Z=function(t){tn(this);let e=[];if("string"===typeof t)nn(this,t)&&(e=e.concat(this.g.get(sn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},r.set=function(t,e){return tn(this),this.i=null,t=sn(this,t),nn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;""!==o[r]&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};var an=class{constructor(t,e){this.g=t,this.map=e}};function cn(t){this.l=t||un,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ka&&h.g.Ka()&&h.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var un=10;function ln(t){return!!t.h||!!t.g&&t.g.size>=t.j}function hn(t){return t.h?1:t.g?t.g.size:0}function fn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function dn(t,e){t.g?t.g.add(e):t.h=e}function pn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function gn(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return S(t.i)}cn.prototype.cancel=function(){if(this.i=gn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var mn=class{stringify(t){return h.JSON.stringify(t,void 0)}parse(t){return h.JSON.parse(t,void 0)}};function yn(){this.g=new mn}function vn(t,e,n){const r=n||"";try{Pe(t,(function(t,n){let s=t;d(t)&&(s=Ct(t)),e.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function wn(t,e){const n=new Gt;if(h.Image){const r=new Image;r.onload=_(_n,n,r,"TestLoadImage: loaded",!0,e),r.onerror=_(_n,n,r,"TestLoadImage: error",!1,e),r.onabort=_(_n,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=_(_n,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function _n(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch(i){}}function bn(t){this.l=t.ec||null,this.j=t.ob||!1}function En(t,e){bt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Tn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}b(bn,ue),bn.prototype.g=function(){return new En(this.l,this.j)},bn.prototype.i=function(t){return function(){return t}}({}),b(En,bt);var Tn=0;function Cn(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function Sn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,In(t)}function In(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=En.prototype,r.open=function(t,e){if(this.readyState!=Tn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,In(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||h).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Sn(this)),this.readyState=Tn},r.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,In(this)),this.g&&(this.readyState=3,In(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cn(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Sn(this):In(this),3==this.readyState&&Cn(this)}},r.Za=function(t){this.g&&(this.response=this.responseText=t,Sn(this))},r.Ya=function(t){this.g&&(this.response=t,Sn(this))},r.ka=function(){this.g&&Sn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(En.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var An=h.JSON.parse;function kn(t){bt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Dn,this.L=this.M=!1}b(kn,bt);var Dn="",Nn=/^https?$/i,xn=["POST","PUT"];function Rn(t){return F&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function On(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ln(t),Mn(t)}function Ln(t){t.F||(t.F=!0,Et(t,"complete"),Et(t,"error"))}function Pn(t){if(t.h&&"undefined"!=typeof l&&(!t.C[1]||4!=Vn(t)||2!=t.da()))if(t.v&&4==Vn(t))Ut(t.La,0,t);else if(Et(t,"readystatechange"),4==Vn(t)){t.h=!1;try{const a=t.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===a){var s=String(t.I).match(Me)[1]||null;!s&&h.self&&h.self.location&&(s=h.self.location.protocol.slice(0,-1)),r=!Nn.test(s?s.toLowerCase():"")}n=r}if(n)Et(t,"complete"),Et(t,"success");else{t.m=6;try{var i=2<Vn(t)?t.g.statusText:""}catch(o){i=""}t.j=i+" ["+t.da()+"]",Ln(t)}}finally{Mn(t)}}}function Mn(t,e){if(t.g){Fn(t);const r=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Et(t,"ready");try{r.onreadystatechange=s}catch(n){}}}function Fn(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Vn(t){return t.g?t.g.readyState:0}function Un(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Dn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Jr){return null}}function Bn(t){const e={};t=(t.g&&2<=Vn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(D(t[r]))continue;var n=Nt(t[r]);const s=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}et(e,(function(t){return t.join(", ")}))}function jn(t){let e="";return tt(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function $n(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=jn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):qe(t,e,n))}function qn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Kn(t){this.Ga=0,this.j=[],this.l=new Gt,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=qn("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=qn("baseRetryDelayMs",5e3,t),this.hb=qn("retryDelaySeedMs",1e4,t),this.eb=qn("forwardChannelMaxRetries",2,t),this.xa=qn("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new cn(t&&t.concurrentRequestLimit),this.Ja=new yn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function zn(t){if(Hn(t),3==t.H){var e=t.W++,n=Ue(t.I);if(qe(n,"SID",t.K),qe(n,"RID",e),qe(n,"TYPE","terminate"),Yn(t,n),e=new ye(t,t.l,e),e.L=2,e.v=Ke(Ue(n)),n=!1,h.navigator&&h.navigator.sendBeacon)try{n=h.navigator.sendBeacon(e.v.toString(),"")}catch(r){}!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=ur(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ae(e)}ar(t)}function Gn(t){t.g&&(er(t),t.g.cancel(),t.g=null)}function Hn(t){Gn(t),t.u&&(h.clearTimeout(t.u),t.u=null),rr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function Wn(t){if(!ln(t.i)&&!t.m){t.m=!0;var e=t.Na;Rt||Pt(),Ot||(Rt(),Ot=!0),Lt.add(e,t),t.C=0}}function Qn(t,e){return!(hn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.j=e.F.concat(t.j),!0):!(1==t.H||2==t.H||t.C>=(t.cb?0:t.eb))&&(t.m=oe(w(t.Na,t,e),ir(t,t.C)),t.C++,!0))}function Jn(t,e){var n;n=e?e.m:t.W++;const r=Ue(t.I);qe(r,"SID",t.K),qe(r,"RID",n),qe(r,"AID",t.V),Yn(t,r),t.o&&t.s&&$n(r,t.o,t.s),n=new ye(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Xn(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),dn(t.i,n),Ee(n,r,e)}function Yn(t,e){t.na&&tt(t.na,(function(t,n){qe(e,n,t)})),t.h&&Pe({},(function(t,n){qe(e,n,t)}))}function Xn(t,e,n){n=Math.min(t.j.length,n);var r=t.h?w(t.h.Va,t.h,t):null;t:{var s=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=s[a].g;const c=s[a].map;if(n-=e,0>n)e=Math.max(0,s[a].g-100),o=!1;else try{vn(c,t,"req"+n+"_")}catch(i){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,r}function Zn(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Rt||Pt(),Ot||(Rt(),Ot=!0),Lt.add(e,t),t.A=0}}function tr(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=oe(w(t.Ma,t),ir(t,t.A)),t.A++,!0)}function er(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function nr(t){t.g=new ye(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=Ue(t.wa);qe(e,"RID","rpc"),qe(e,"SID",t.K),qe(e,"AID",t.V),qe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&qe(e,"TO",t.qa),qe(e,"TYPE","xmlhttp"),Yn(t,e),t.o&&t.s&&$n(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Ke(Ue(e)),n.s=null,n.S=!0,Te(n,t)}function rr(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function sr(t,e){var n=null;if(t.g==e){rr(t),er(t),t.g=null;var r=2}else{if(!fn(t.i,e))return;n=e.F,pn(t.i,e),r=1}if(0!=t.H)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=te(),Et(r,new ie(r,n)),Wn(t)}else Zn(t);else if(s=e.o,3==s||0==s&&0<e.ca||!(1==r&&Qn(t,e)||2==r&&tr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:or(t,5);break;case 4:or(t,10);break;case 3:or(t,6);break;default:or(t,2)}}function ir(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function or(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var r=w(t.pb,t);n||(n=new Ve("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Be(n,"https"),Ke(n)),wn(n.toString(),r)}else se(2);t.H=0,t.h&&t.h.za(e),ar(t),Hn(t)}function ar(t){if(t.H=0,t.ma=[],t.h){const e=gn(t.i);0==e.length&&0==t.j.length||(I(t.ma,e),I(t.ma,t.j),t.i.i.length=0,S(t.j),t.j.length=0),t.h.ya()}}function cr(t,e,n){var r=n instanceof Ve?Ue(n):new Ve(n);if(""!=r.g)e&&(r.g=e+"."+r.g),je(r,r.m);else{var s=h.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Ve(null);r&&Be(i,r),e&&(i.g=e),s&&je(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&qe(r,n,e),qe(r,"VER",t.ra),Yn(t,r),r}function ur(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new kn(new bn({ob:!0})):new kn(t.va),e.Oa(t.J),e}function lr(){}function hr(){if(F&&!(10<=Number(H)))throw Error("Environmental error: no available transport.")}function fr(t,e){bt.call(this),this.g=new Kn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!D(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!D(e)&&(this.g.F=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new gr(this)}function dr(t){pe.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function pr(){ge.call(this),this.status=1}function gr(t){this.g=t}function mr(){this.blockSize=-1}function yr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function vr(t,e,n){n||(n=0);var r=Array(16);if("string"===typeof e)for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}function wr(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=0|t[s];r&&i==e||(n[s]=i,r=!1)}this.g=n}r=kn.prototype,r.Oa=function(t){this.M=t},r.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():fe.g(),this.C=this.u?le(this.u):le(fe),this.g.onreadystatechange=w(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){return void On(this,i)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),s=h.FormData&&t instanceof h.FormData,!(0<=C(xn,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Fn(this),0<this.B&&((this.L=Rn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=w(this.ua,this)):this.A=Ut(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){On(this,i)}},r.ua=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Et(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Et(this,"complete"),Et(this,"abort"),Mn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Mn(this,!0)),kn.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?Pn(this):this.kb())},r.kb=function(){Pn(this)},r.isActive=function(){return!!this.g},r.da=function(){try{return 2<Vn(this)?this.g.status:-1}catch(t){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),An(e)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Kn.prototype,r.ra=8,r.H=1,r.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new ye(this,this.l,t);let i=this.s;if(this.U&&(i?(i=nt(i),st(i,this.U)):i=this.U),null!==this.o||this.O||(s.I=i,i=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var r=this.j[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Xn(this,s,e),n=Ue(this.I),qe(n,"RID",t),qe(n,"CVER",22),this.F&&qe(n,"X-HTTP-Session-Id",this.F),Yn(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(jn(i)))+"&"+e:this.o&&$n(n,this.o,i)),dn(this.i,s),this.bb&&qe(n,"TYPE","init"),this.P?(qe(n,"$req",e),qe(n,"SID","null"),s.aa=!0,Ee(s,n,null)):Ee(s,n,e),this.H=2}}else 3==this.H&&(t?Jn(this,t):0==this.j.length||ln(this.i)||Jn(this))},r.Ma=function(){if(this.u=null,nr(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=oe(w(this.jb,this),t)}},r.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,se(10),Gn(this),nr(this))},r.ib=function(){null!=this.v&&(this.v=null,Gn(this),tr(this),se(19))},r.pb=function(t){t?(this.l.info("Successfully pinged google.com"),se(2)):(this.l.info("Failed to ping google.com"),se(1))},r.isActive=function(){return!!this.h&&this.h.isActive(this)},r=lr.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.isActive=function(){return!0},r.Va=function(){},hr.prototype.g=function(t,e){return new fr(t,e)},b(fr,bt),fr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;se(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=cr(t,null,t.Y),Wn(t)},fr.prototype.close=function(){zn(this.g)},fr.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ct(t),t=n);e.j.push(new an(e.fb++,t)),3==e.H&&Wn(e)},fr.prototype.N=function(){this.g.h=null,delete this.j,zn(this.g),delete this.g,fr.$.N.call(this)},b(dr,pe),b(pr,ge),b(gr,lr),gr.prototype.Ba=function(){Et(this.g,"a")},gr.prototype.Aa=function(t){Et(this.g,new dr(t))},gr.prototype.za=function(t){Et(this.g,new pr)},gr.prototype.ya=function(){Et(this.g,"b")},b(yr,mr),yr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},yr.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(0==s)for(;i<=n;)vr(this,t,i),i+=this.blockSize;if("string"===typeof t){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){vr(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){vr(this,r),s=0;break}}this.h=s,this.i+=e},yr.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var _r={};function br(t){return-128<=t&&128>t?O(t,(function(t){return new wr([0|t],0>t?-1:0)})):new wr([0|t],0>t?-1:0)}function Er(t){if(isNaN(t)||!isFinite(t))return Sr;if(0>t)return Nr(Er(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Cr;return new wr(e,0)}function Tr(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return Nr(Tr(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Er(Math.pow(e,8)),r=Sr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Er(Math.pow(e,i)),r=r.R(i).add(Er(o))):(r=r.R(n),r=r.add(Er(o)))}return r}var Cr=4294967296,Sr=br(0),Ir=br(1),Ar=br(16777216);function kr(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function Dr(t){return-1==t.h}function Nr(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new wr(n,~t.h).add(Ir)}function xr(t,e){return t.add(Nr(e))}function Rr(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Or(t,e){this.g=t,this.h=e}function Lr(t,e){if(kr(e))throw Error("division by zero");if(kr(t))return new Or(Sr,Sr);if(Dr(t))return e=Lr(Nr(t),e),new Or(Nr(e.g),Nr(e.h));if(Dr(e))return e=Lr(t,Nr(e)),new Or(Nr(e.g),e.h);if(30<t.g.length){if(Dr(t)||Dr(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ir,r=e;0>=r.X(t);)n=Pr(n),r=Pr(r);var s=Mr(n,1),i=Mr(r,1);for(r=Mr(r,2),n=Mr(n,2);!kr(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Mr(r,1),n=Mr(n,1)}return e=xr(t,s.R(e)),new Or(s,e)}for(s=Sr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Er(n),o=i.R(e);Dr(o)||0<o.X(t);)n-=r,i=Er(n),o=i.R(e);kr(i)&&(i=Ir),s=s.add(i),t=xr(t,o)}return new Or(s,t)}function Pr(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new wr(n,t.h)}function Mr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new wr(s,t.h)}r=wr.prototype,r.ea=function(){if(Dr(this))return-Nr(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Cr+r)*e,e*=Cr}return t},r.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(kr(this))return"0";if(Dr(this))return"-"+Nr(this).toString(t);for(var e=Er(Math.pow(t,6)),n=this,r="";;){var s=Lr(n,e).g;n=xr(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,kr(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}},r.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},r.X=function(t){return t=xr(this,t),Dr(t)?-1:kr(t)?0:1},r.abs=function(){return Dr(this)?Nr(this):this},r.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(65535&this.D(s))+(65535&t.D(s)),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new wr(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(t){if(kr(this)||kr(t))return Sr;if(Dr(this))return Dr(t)?Nr(this).R(Nr(t)):Nr(Nr(this).R(t));if(Dr(t))return Nr(this.R(Nr(t)));if(0>this.X(Ar)&&0>t.X(Ar))return Er(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=65535&this.D(r),a=t.D(s)>>>16,c=65535&t.D(s);n[2*r+2*s]+=o*c,Rr(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Rr(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Rr(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Rr(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new wr(n,0)},r.gb=function(t){return Lr(this,t).h},r.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new wr(n,this.h&t.h)},r.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new wr(n,this.h|t.h)},r.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new wr(n,this.h^t.h)},hr.prototype.createWebChannel=hr.prototype.g,fr.prototype.send=fr.prototype.u,fr.prototype.open=fr.prototype.m,fr.prototype.close=fr.prototype.close,ae.NO_ERROR=0,ae.TIMEOUT=8,ae.HTTP_ERROR=6,ce.COMPLETE="complete",he.EventType=de,de.OPEN="a",de.CLOSE="b",de.ERROR="c",de.MESSAGE="d",bt.prototype.listen=bt.prototype.O,kn.prototype.listenOnce=kn.prototype.P,kn.prototype.getLastError=kn.prototype.Sa,kn.prototype.getLastErrorCode=kn.prototype.Ia,kn.prototype.getStatus=kn.prototype.da,kn.prototype.getResponseJson=kn.prototype.Wa,kn.prototype.getResponseText=kn.prototype.ja,kn.prototype.send=kn.prototype.ha,kn.prototype.setWithCredentials=kn.prototype.Oa,yr.prototype.digest=yr.prototype.l,yr.prototype.reset=yr.prototype.reset,yr.prototype.update=yr.prototype.j,wr.prototype.add=wr.prototype.add,wr.prototype.multiply=wr.prototype.R,wr.prototype.modulo=wr.prototype.gb,wr.prototype.compare=wr.prototype.X,wr.prototype.toNumber=wr.prototype.ea,wr.prototype.toString=wr.prototype.toString,wr.prototype.getBits=wr.prototype.D,wr.fromNumber=Er,wr.fromString=Tr;var Fr=u.createWebChannelTransport=function(){return new hr},Vr=u.getStatEventTarget=function(){return te()},Ur=u.ErrorCode=ae,Br=u.EventType=ce,jr=u.Event=Xt,$r=u.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},qr=(u.FetchXmlHttpFactory=bn,u.WebChannel=he),Kr=u.XhrIo=kn,zr=u.Md5=yr,Gr=u.Integer=wr;const Hr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Wr.UNAUTHENTICATED=new Wr(null),Wr.GOOGLE_CREDENTIALS=new Wr("google-credentials-uid"),Wr.FIRST_PARTY=new Wr("first-party-uid"),Wr.MOCK_USER=new Wr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Qr="10.4.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new o.Yd("@firebase/firestore");function Yr(){return Jr.logLevel}function Xr(t,...e){if(Jr.logLevel<=o["in"].DEBUG){const n=e.map(es);Jr.debug(`Firestore (${Qr}): ${t}`,...n)}}function Zr(t,...e){if(Jr.logLevel<=o["in"].ERROR){const n=e.map(es);Jr.error(`Firestore (${Qr}): ${t}`,...n)}}function ts(t,...e){if(Jr.logLevel<=o["in"].WARN){const n=e.map(es);Jr.warn(`Firestore (${Qr}): ${t}`,...n)}}function es(t){if("string"==typeof t)return t;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(t="Unexpected state"){const e=`FIRESTORE (${Qr}) INTERNAL ASSERTION FAILED: `+t;throw Zr(e),new Error(e)}function rs(t,e){t||ns()}function ss(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class os extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class us{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Wr.UNAUTHENTICATED)))}shutdown(){}}class ls{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class hs{constructor(t){this.t=t,this.currentUser=Wr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new as;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new as,t.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{Xr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Xr("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new as)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Xr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(rs("string"==typeof e.accessToken),new cs(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return rs(null===t||"string"==typeof t),new Wr(t)}}class fs{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Wr.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ds{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new fs(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(Wr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ps{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gs{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&Xr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,Xr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Xr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?r(t):Xr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(rs("string"==typeof t.token),this.R=t.token,new ps(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ms(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=ms(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%t.length))}return n}}function vs(t,e){return t<e?-1:t>e?1:0}function ws(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _s{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new os(is.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new os(is.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new os(is.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new os(is.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return _s.fromMillis(Date.now())}static fromDate(t){return _s.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new _s(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?vs(this.nanoseconds,t.nanoseconds):vs(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(t){this.timestamp=t}static fromTimestamp(t){return new bs(t)}static min(){return new bs(new _s(0,0))}static max(){return new bs(new _s(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(t,e,n){void 0===e?e=0:e>t.length&&ns(),void 0===n?n=t.length-e:n>t.length-e&&ns(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Es.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Es?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),s=e.get(r);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ts extends Es{construct(t,e,n){return new Ts(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new os(is.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Ts(e)}static emptyPath(){return new Ts([])}}const Cs=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ss extends Es{construct(t,e,n){return new Ss(t,e,n)}static isValidIdentifier(t){return Cs.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ss.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ss(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(0===n.length)throw new os(is.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new os(is.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new os(is.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(s(),r++)}if(s(),i)throw new os(is.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ss(e)}static emptyPath(){return new Ss([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(t){this.path=t}static fromPath(t){return new Is(Ts.fromString(t))}static fromName(t){return new Is(Ts.fromString(t).popFirst(5))}static empty(){return new Is(Ts.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Ts.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Ts.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Is(new Ts(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}As.UNKNOWN_ID=-1;function ks(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=bs.fromTimestamp(1e9===r?new _s(n+1,0):new _s(n,r));return new Ns(s,Is.empty(),e)}function Ds(t){return new Ns(t.readTime,t.key,-1)}class Ns{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ns(bs.min(),Is.empty(),-1)}static max(){return new Ns(bs.max(),Is.empty(),-1)}}function xs(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Is.comparator(t.documentKey,e.documentKey),0!==n?n:vs(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Os{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(t){if(t.code!==is.FAILED_PRECONDITION||t.message!==Rs)throw t;Xr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&ns(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Ps(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Ps?e:Ps.resolve(e)}catch(t){return Ps.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Ps.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Ps.reject(e)}static resolve(t){return new Ps(((e,n)=>{e(t)}))}static reject(t){return new Ps(((e,n)=>{n(t)}))}static waitFor(t){return new Ps(((e,n)=>{let r=0,s=0,i=!1;t.forEach((t=>{++r,t.next((()=>{++s,i&&s===r&&e()}),(t=>n(t)))})),i=!0,s===r&&e()}))}static or(t){let e=Ps.resolve(!1);for(const n of t)e=e.next((t=>t?Ps.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new Ps(((n,r)=>{const s=t.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;e(t[c]).next((t=>{i[c]=t,++o,o===s&&n(i)}),(t=>r(t)))}}))}static doWhile(t,e){return new Ps(((n,r)=>{const s=()=>{!0===t()?e().next((()=>{s()}),r):n()};s()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fs{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.oe(t),this._e=t=>e.writeSequenceNumber(t))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}function Vs(t){return null==t}function Us(t){return 0===t&&1/t==-1/0}function Bs(t){return"number"==typeof t&&Number.isInteger(t)&&!Us(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fs.ae=-1;const js=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],$s=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],qs=$s;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ks(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function zs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Gs(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(t,e){this.comparator=t,this.root=e||Qs.EMPTY}insert(t,e){return new Hs(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Qs.BLACK,null,null))}remove(t){return new Hs(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Qs.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ws(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ws(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ws(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ws(this.root,t,this.comparator,!0)}}class Ws{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Qs{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=null!=n?n:Qs.RED,this.left=null!=r?r:Qs.EMPTY,this.right=null!=s?s:Qs.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new Qs(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===s?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Qs.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Qs.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Qs.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Qs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ns();if(this.right.isRed())throw ns();const t=this.left.check();if(t!==this.right.check())throw ns();return t+(this.isRed()?0:1)}}Qs.EMPTY=null,Qs.RED=!0,Qs.BLACK=!1,Qs.EMPTY=new class{constructor(){this.size=0}get key(){throw ns()}get value(){throw ns()}get color(){throw ns()}get left(){throw ns()}get right(){throw ns()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Qs(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Js{constructor(t){this.comparator=t,this.data=new Hs(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ys(this.data.getIterator())}getIteratorFrom(t){return new Ys(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Js))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Js(this.comparator);return e.data=t,e}}class Ys{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xs{constructor(t){this.fields=t,t.sort(Ss.comparator)}static empty(){return new Xs([])}unionWith(t){let e=new Js(Ss.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Xs(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ws(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ti{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Zs("Invalid base64 string: "+t):t}}(t);return new ti(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ti(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return vs(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ti.EMPTY_BYTE_STRING=new ti("");const ei=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ni(t){if(rs(!!t),"string"==typeof t){let e=0;const n=ei.exec(t);if(rs(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ri(t.seconds),nanos:ri(t.nanos)}}function ri(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function si(t){return"string"==typeof t?ti.fromBase64String(t):ti.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function oi(t){const e=t.mapValue.fields.__previous_value__;return ii(e)?oi(e):e}function ai(t){const e=ni(t.mapValue.fields.__local_write_time__.timestampValue);return new _s(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,e,n,r,s,i,o,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class ui{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ui("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof ui&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function hi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ii(t)?4:Si(t)?9007199254740991:10:ns()}function fi(t,e){if(t===e)return!0;const n=hi(t);if(n!==hi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ai(t).isEqual(ai(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ni(t.timestampValue),r=ni(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return si(t.bytesValue).isEqual(si(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return ri(t.geoPointValue.latitude)===ri(e.geoPointValue.latitude)&&ri(t.geoPointValue.longitude)===ri(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return ri(t.integerValue)===ri(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=ri(t.doubleValue),r=ri(e.doubleValue);return n===r?Us(n)===Us(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return ws(t.arrayValue.values||[],e.arrayValue.values||[],fi);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Ks(n)!==Ks(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!fi(n[s],r[s])))return!1;return!0}(t,e);default:return ns()}}function di(t,e){return void 0!==(t.values||[]).find((t=>fi(t,e)))}function pi(t,e){if(t===e)return 0;const n=hi(t),r=hi(e);if(n!==r)return vs(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return vs(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=ri(t.integerValue||t.doubleValue),r=ri(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return gi(t.timestampValue,e.timestampValue);case 4:return gi(ai(t),ai(e));case 5:return vs(t.stringValue,e.stringValue);case 6:return function(t,e){const n=si(t),r=si(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let s=0;s<n.length&&s<r.length;s++){const t=vs(n[s],r[s]);if(0!==t)return t}return vs(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=vs(ri(t.latitude),ri(e.latitude));return 0!==n?n:vs(ri(t.longitude),ri(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const t=pi(n[s],r[s]);if(t)return t}return vs(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===li.mapValue&&e===li.mapValue)return 0;if(t===li.mapValue)return 1;if(e===li.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),s=e.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const t=vs(r[o],i[o]);if(0!==t)return t;const e=pi(n[r[o]],s[i[o]]);if(0!==e)return e}return vs(r.length,i.length)}(t.mapValue,e.mapValue);default:throw ns()}}function gi(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return vs(t,e);const n=ni(t),r=ni(e),s=vs(n.seconds,r.seconds);return 0!==s?s:vs(n.nanos,r.nanos)}function mi(t){return yi(t)}function yi(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ni(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return si(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return Is.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=yi(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const s of e)r?r=!1:n+=",",n+=`${s}:${yi(t.fields[s])}`;return n+"}"}(t.mapValue):ns()}function vi(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function wi(t){return!!t&&"integerValue"in t}function _i(t){return!!t&&"arrayValue"in t}function bi(t){return!!t&&"nullValue"in t}function Ei(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ti(t){return!!t&&"mapValue"in t}function Ci(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return zs(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Ci(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ci(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Si(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ii{constructor(t){this.value=t}static empty(){return new Ii({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ti(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ci(e)}setAll(t){let e=Ss.emptyPath(),n={},r=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=s.popLast()}t?n[s.lastSegment()]=Ci(t):r.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());Ti(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return fi(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Ti(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){zs(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new Ii(Ci(this.value))}}function Ai(t){const e=[];return zs(t.fields,((t,n)=>{const r=new Ss([t]);if(Ti(n)){const t=Ai(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new Xs(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ki{constructor(t,e,n,r,s,i,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=s,this.data=i,this.documentState=o}static newInvalidDocument(t){return new ki(t,0,bs.min(),bs.min(),bs.min(),Ii.empty(),0)}static newFoundDocument(t,e,n,r){return new ki(t,1,e,bs.min(),n,r,0)}static newNoDocument(t,e){return new ki(t,2,e,bs.min(),bs.min(),Ii.empty(),0)}static newUnknownDocument(t,e){return new ki(t,3,e,bs.min(),bs.min(),Ii.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(bs.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ii.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ii.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=bs.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ki&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ki(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t,e){this.position=t,this.inclusive=e}}function Ni(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(r=i.field.isKeyField()?Is.comparator(Is.fromName(o.referenceValue),n.key):pi(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function xi(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fi(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t,e="asc"){this.field=t,this.dir=e}}function Oi(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{}class Pi extends Li{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new qi(t,e,n):"array-contains"===e?new Hi(t,n):"in"===e?new Wi(t,n):"not-in"===e?new Qi(t,n):"array-contains-any"===e?new Ji(t,n):new Pi(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Ki(t,n):new zi(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(pi(e,this.value)):null!==e&&hi(this.value)===hi(e)&&this.matchesComparison(pi(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return ns()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Mi extends Li{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new Mi(t,e)}matches(t){return Fi(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le((t=>t.isInequality()));return null!==t?t.field:null}le(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function Fi(t){return"and"===t.op}function Vi(t){return Ui(t)&&Fi(t)}function Ui(t){for(const e of t.filters)if(e instanceof Mi)return!1;return!0}function Bi(t){if(t instanceof Pi)return t.field.canonicalString()+t.op.toString()+mi(t.value);if(Vi(t))return t.filters.map((t=>Bi(t))).join(",");{const e=t.filters.map((t=>Bi(t))).join(",");return`${t.op}(${e})`}}function ji(t,e){return t instanceof Pi?function(t,e){return e instanceof Pi&&t.op===e.op&&t.field.isEqual(e.field)&&fi(t.value,e.value)}(t,e):t instanceof Mi?function(t,e){return e instanceof Mi&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&ji(n,e.filters[r])),!0)}(t,e):void ns()}function $i(t){return t instanceof Pi?function(t){return`${t.field.canonicalString()} ${t.op} ${mi(t.value)}`}(t):t instanceof Mi?function(t){return t.op.toString()+" {"+t.getFilters().map($i).join(" ,")+"}"}(t):"Filter"}class qi extends Pi{constructor(t,e,n){super(t,e,n),this.key=Is.fromName(n.referenceValue)}matches(t){const e=Is.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ki extends Pi{constructor(t,e){super(t,"in",e),this.keys=Gi("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class zi extends Pi{constructor(t,e){super(t,"not-in",e),this.keys=Gi("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Gi(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Is.fromName(t.referenceValue)))}class Hi extends Pi{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return _i(e)&&di(e.arrayValue,this.value)}}class Wi extends Pi{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&di(this.value.arrayValue,e)}}class Qi extends Pi{constructor(t,e){super(t,"not-in",e)}matches(t){if(di(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!di(this.value.arrayValue,e)}}class Ji extends Pi{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!_i(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>di(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(t,e=null,n=[],r=[],s=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.he=null}}function Xi(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Yi(t,e,n,r,s,i,o)}function Zi(t){const e=ss(t);if(null===e.he){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Bi(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Vs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>mi(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>mi(t))).join(",")),e.he=t}return e.he}function to(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Oi(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ji(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!xi(t.startAt,e.startAt)&&xi(t.endAt,e.endAt)}function eo(t){return Is.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class no{constructor(t,e=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function ro(t,e,n,r,s,i,o,a){return new no(t,e,n,r,s,i,o,a)}function so(t){return new no(t)}function io(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function oo(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ao(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function co(t){return null!==t.collectionGroup}function uo(t){const e=ss(t);if(null===e.Pe){e.Pe=[];const t=ao(e),n=oo(e);if(null!==t&&null===n)t.isKeyField()||e.Pe.push(new Ri(t)),e.Pe.push(new Ri(Ss.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.Pe.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Ri(Ss.keyField(),t))}}}return e.Pe}function lo(t){const e=ss(t);return e.Ie||(e.Ie=ho(e,uo(t))),e.Ie}function ho(t,e){if("F"===t.limitType)return Xi(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new Ri(t.field,e)}));const n=t.endAt?new Di(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Di(t.startAt.position,t.startAt.inclusive):null;return Xi(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function fo(t,e){e.getFirstInequalityField(),ao(t);const n=t.filters.concat([e]);return new no(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function po(t,e,n){return new no(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function go(t,e){return to(lo(t),lo(e))&&t.limitType===e.limitType}function mo(t){return`${Zi(lo(t))}|lt:${t.limitType}`}function yo(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>$i(t))).join(", ")}]`),Vs(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>mi(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>mi(t))).join(",")),`Target(${e})`}(lo(t))}; limitType=${t.limitType})`}function vo(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Is.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of uo(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Ni(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,uo(t),e))&&!(t.endAt&&!function(t,e,n){const r=Ni(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,uo(t),e))}(t,e)}function wo(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function _o(t){return(e,n)=>{let r=!1;for(const s of uo(t)){const t=bo(s,e,n);if(0!==t)return t;r=r||s.field.isKeyField()}return 0}}function bo(t,e,n){const r=t.field.isKeyField()?Is.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),s=n.data.field(t);return null!==r&&null!==s?pi(r,s):ns()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ns()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){zs(this.inner,((e,n)=>{for(const[r,s]of n)t(r,s)}))}isEmpty(){return Gs(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=new Hs(Is.comparator);function Co(){return To}const So=new Hs(Is.comparator);function Io(...t){let e=So;for(const n of t)e=e.insert(n.key,n);return e}function Ao(t){let e=So;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function ko(){return No()}function Do(){return No()}function No(){return new Eo((t=>t.toString()),((t,e)=>t.isEqual(e)))}const xo=new Hs(Is.comparator),Ro=new Js(Is.comparator);function Oo(...t){let e=Ro;for(const n of t)e=e.add(n);return e}const Lo=new Js(vs);function Po(){return Lo}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Us(e)?"-0":e}}function Fo(t){return{integerValue:""+t}}function Vo(t,e){return Bs(e)?Fo(e):Mo(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(){this._=void 0}}function Bo(t,e,n){return t instanceof qo?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&ii(e)&&(e=oi(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Ko?zo(t,e):t instanceof Go?Ho(t,e):function(t,e){const n=$o(t,e),r=Qo(n)+Qo(t.Te);return wi(n)&&wi(t.Te)?Fo(r):Mo(t.serializer,r)}(t,e)}function jo(t,e,n){return t instanceof Ko?zo(t,e):t instanceof Go?Ho(t,e):n}function $o(t,e){return t instanceof Wo?function(t){return wi(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class qo extends Uo{}class Ko extends Uo{constructor(t){super(),this.elements=t}}function zo(t,e){const n=Jo(e);for(const r of t.elements)n.some((t=>fi(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Go extends Uo{constructor(t){super(),this.elements=t}}function Ho(t,e){let n=Jo(e);for(const r of t.elements)n=n.filter((t=>!fi(t,r)));return{arrayValue:{values:n}}}class Wo extends Uo{constructor(t,e){super(),this.serializer=t,this.Te=e}}function Qo(t){return ri(t.integerValue||t.doubleValue)}function Jo(t){return _i(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Ko&&e instanceof Ko||t instanceof Go&&e instanceof Go?ws(t.elements,e.elements,fi):t instanceof Wo&&e instanceof Wo?fi(t.Te,e.Te):t instanceof qo&&e instanceof qo}(t.transform,e.transform)}class Xo{constructor(t,e){this.version=t,this.transformResults=e}}class Zo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Zo}static exists(t){return new Zo(void 0,t)}static updateTime(t){return new Zo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ta(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class ea{}function na(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new fa(t.key,Zo.none()):new aa(t.key,t.data,Zo.none());{const n=t.data,r=Ii.empty();let s=new Js(Ss.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),s=s.add(t)}return new ca(t.key,r,new Xs(s.toArray()),Zo.none())}}function ra(t,e,n){t instanceof aa?function(t,e,n){const r=t.value.clone(),s=la(t.fieldTransforms,e,n.transformResults);r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof ca?function(t,e,n){if(!ta(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=la(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(ua(t)),s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function sa(t,e,n,r){return t instanceof aa?function(t,e,n,r){if(!ta(t.precondition,e))return n;const s=t.value.clone(),i=ha(t.fieldTransforms,r,e);return s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,r):t instanceof ca?function(t,e,n,r){if(!ta(t.precondition,e))return n;const s=ha(t.fieldTransforms,r,e),i=e.data;return i.setAll(ua(t)),i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return ta(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function ia(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),s=$o(r.transform,t||null);null!=s&&(null===n&&(n=Ii.empty()),n.set(r.field,s))}return n||null}function oa(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&ws(t,e,((t,e)=>Yo(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class aa extends ea{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ca extends ea{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ua(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function la(t,e,n){const r=new Map;rs(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,jo(o,a,n[s]))}return r}function ha(t,e,n){const r=new Map;for(const s of t){const t=s.transform,i=n.data.field(s.field);r.set(s.field,Bo(t,i,e))}return r}class fa extends ea{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class da extends ea{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&ra(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=sa(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=sa(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Do();return this.mutations.forEach((r=>{const s=t.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=e.has(r.key)?null:o;const a=na(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(bs.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Oo())}isEqual(t){return this.batchId===t.batchId&&ws(this.mutations,t.mutations,((t,e)=>oa(t,e)))&&ws(this.baseMutations,t.baseMutations,((t,e)=>oa(t,e)))}}class ga{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){rs(t.mutations.length===n.length);let r=function(){return xo}();const s=t.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new ga(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ya{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var va,wa;function _a(t){switch(t){default:return ns();case is.CANCELLED:case is.UNKNOWN:case is.DEADLINE_EXCEEDED:case is.RESOURCE_EXHAUSTED:case is.INTERNAL:case is.UNAVAILABLE:case is.UNAUTHENTICATED:return!1;case is.INVALID_ARGUMENT:case is.NOT_FOUND:case is.ALREADY_EXISTS:case is.PERMISSION_DENIED:case is.FAILED_PRECONDITION:case is.ABORTED:case is.OUT_OF_RANGE:case is.UNIMPLEMENTED:case is.DATA_LOSS:return!0}}function ba(t){if(void 0===t)return Zr("GRPC error has no .code"),is.UNKNOWN;switch(t){case va.OK:return is.OK;case va.CANCELLED:return is.CANCELLED;case va.UNKNOWN:return is.UNKNOWN;case va.DEADLINE_EXCEEDED:return is.DEADLINE_EXCEEDED;case va.RESOURCE_EXHAUSTED:return is.RESOURCE_EXHAUSTED;case va.INTERNAL:return is.INTERNAL;case va.UNAVAILABLE:return is.UNAVAILABLE;case va.UNAUTHENTICATED:return is.UNAUTHENTICATED;case va.INVALID_ARGUMENT:return is.INVALID_ARGUMENT;case va.NOT_FOUND:return is.NOT_FOUND;case va.ALREADY_EXISTS:return is.ALREADY_EXISTS;case va.PERMISSION_DENIED:return is.PERMISSION_DENIED;case va.FAILED_PRECONDITION:return is.FAILED_PRECONDITION;case va.ABORTED:return is.ABORTED;case va.OUT_OF_RANGE:return is.OUT_OF_RANGE;case va.UNIMPLEMENTED:return is.UNIMPLEMENTED;case va.DATA_LOSS:return is.DATA_LOSS;default:return ns()}}(wa=va||(va={}))[wa.OK=0]="OK",wa[wa.CANCELLED=1]="CANCELLED",wa[wa.UNKNOWN=2]="UNKNOWN",wa[wa.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",wa[wa.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",wa[wa.NOT_FOUND=5]="NOT_FOUND",wa[wa.ALREADY_EXISTS=6]="ALREADY_EXISTS",wa[wa.PERMISSION_DENIED=7]="PERMISSION_DENIED",wa[wa.UNAUTHENTICATED=16]="UNAUTHENTICATED",wa[wa.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",wa[wa.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",wa[wa.ABORTED=10]="ABORTED",wa[wa.OUT_OF_RANGE=11]="OUT_OF_RANGE",wa[wa.UNIMPLEMENTED=12]="UNIMPLEMENTED",wa[wa.INTERNAL=13]="INTERNAL",wa[wa.UNAVAILABLE=14]="UNAVAILABLE",wa[wa.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ea=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=new Gr([4294967295,4294967295],0);function Sa(t){const e=Ta().encode(t),n=new zr;return n.update(e),new Uint8Array(n.digest())}function Ia(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Gr([n,r],0),new Gr([s,i],0)]}class Aa{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new ka(`Invalid padding: ${e}`);if(n<0)throw new ka(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new ka(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new ka(`Invalid padding when bitmap length is 0: ${e}`);this.Ae=8*t.length-e,this.Re=Gr.fromNumber(this.Ae)}Ve(t,e,n){let r=t.add(e.multiply(Gr.fromNumber(n)));return 1===r.compare(Ca)&&(r=new Gr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Re).toNumber()}me(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Ae)return!1;const e=Sa(t),[n,r]=Ia(e);for(let s=0;s<this.hashCount;s++){const t=this.Ve(n,r,s);if(!this.me(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),i=new Aa(s,r,e);return n.forEach((t=>i.insert(t))),i}insert(t){if(0===this.Ae)return;const e=Sa(t),[n,r]=Ia(e);for(let s=0;s<this.hashCount;s++){const t=this.Ve(n,r,s);this.fe(t)}}fe(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class ka extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,Na.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Da(bs.min(),r,new Hs(vs),Co(),Oo())}}class Na{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Na(n,e,Oo(),Oo(),Oo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(t,e,n,r){this.ge=t,this.removedTargetIds=e,this.key=n,this.pe=r}}class Ra{constructor(t,e){this.targetId=t,this.ye=e}}class Oa{constructor(t,e,n=ti.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class La{constructor(){this.we=0,this.Se=Fa(),this.be=ti.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return 0!==this.we}get Fe(){return this.Ce}Me(t){t.approximateByteSize()>0&&(this.Ce=!0,this.be=t)}xe(){let t=Oo(),e=Oo(),n=Oo();return this.Se.forEach(((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:ns()}})),new Na(this.be,this.De,t,e,n)}Oe(){this.Ce=!1,this.Se=Fa()}Ne(t,e){this.Ce=!0,this.Se=this.Se.insert(t,e)}Be(t){this.Ce=!0,this.Se=this.Se.remove(t)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class Pa{constructor(t){this.Qe=t,this.Ke=new Map,this.$e=Co(),this.Ue=Ma(),this.We=new Hs(vs)}Ge(t){for(const e of t.ge)t.pe&&t.pe.isFoundDocument()?this.ze(e,t.pe):this.je(e,t.key,t.pe);for(const e of t.removedTargetIds)this.je(e,t.key,t.pe)}He(t){this.forEachTarget(t,(e=>{const n=this.Je(e);switch(t.state){case 0:this.Ye(e)&&n.Me(t.resumeToken);break;case 1:n.ke(),n.ve||n.Oe(),n.Me(t.resumeToken);break;case 2:n.ke(),n.ve||this.removeTarget(e);break;case 3:this.Ye(e)&&(n.qe(),n.Me(t.resumeToken));break;case 4:this.Ye(e)&&(this.Ze(e),n.Me(t.resumeToken));break;default:ns()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ke.forEach(((t,n)=>{this.Ye(n)&&e(n)}))}Xe(t){const e=t.targetId,n=t.ye.count,r=this.et(e);if(r){const s=r.target;if(eo(s))if(0===n){const t=new Is(s.path);this.je(e,t,ki.newNoDocument(t,bs.min()))}else rs(1===n);else{const r=this.tt(e);if(r!==n){const n=this.nt(t),s=n?this.rt(n,t,r):1;if(0!==s){this.Ze(e);const t=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(e,t)}null==Ea||Ea.it(function(t,e,n,r,s){var i,o,a,c,u,l;const h={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},f=e.unchangedNames;return f&&(h.bloomFilter={applied:0===s,hashCount:null!==(i=null==f?void 0:f.hashCount)&&void 0!==i?i:0,bitmapLength:null!==(c=null===(a=null===(o=null==f?void 0:f.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(l=null===(u=null==f?void 0:f.bits)||void 0===u?void 0:u.padding)&&void 0!==l?l:0,mightContain:t=>{var e;return null!==(e=null==r?void 0:r.mightContain(t))&&void 0!==e&&e}}),h}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,t.ye,this.Qe.st(),n,s))}}}}nt(t){const e=t.ye.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:s=0}=e;let i,o;try{i=si(n).toUint8Array()}catch(t){if(t instanceof Zs)return ts("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new Aa(i,r,s)}catch(t){return ts(t instanceof ka?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.Ae?null:o}rt(t,e,n){return e.ye.count===n-this.ot(t,e.targetId)?0:2}ot(t,e){const n=this.Qe.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const s=this.Qe.st(),i=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;t.mightContain(i)||(this.je(e,n,null),r++)})),r}_t(t){const e=new Map;this.Ke.forEach(((n,r)=>{const s=this.et(r);if(s){if(n.current&&eo(s.target)){const e=new Is(s.target.path);null!==this.$e.get(e)||this.ut(r,e)||this.je(r,e,ki.newNoDocument(e,t))}n.Fe&&(e.set(r,n.xe()),n.Oe())}}));let n=Oo();this.Ue.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.et(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.$e.forEach(((e,n)=>n.setReadTime(t)));const r=new Da(t,e,this.We,this.$e,n);return this.$e=Co(),this.Ue=Ma(),this.We=new Hs(vs),r}ze(t,e){if(!this.Ye(t))return;const n=this.ut(t,e.key)?2:0;this.Je(t).Ne(e.key,n),this.$e=this.$e.insert(e.key,e),this.Ue=this.Ue.insert(e.key,this.ct(e.key).add(t))}je(t,e,n){if(!this.Ye(t))return;const r=this.Je(t);this.ut(t,e)?r.Ne(e,1):r.Be(e),this.Ue=this.Ue.insert(e,this.ct(e).delete(t)),n&&(this.$e=this.$e.insert(e,n))}removeTarget(t){this.Ke.delete(t)}tt(t){const e=this.Je(t).xe();return this.Qe.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Le(t){this.Je(t).Le()}Je(t){let e=this.Ke.get(t);return e||(e=new La,this.Ke.set(t,e)),e}ct(t){let e=this.Ue.get(t);return e||(e=new Js(vs),this.Ue=this.Ue.insert(t,e)),e}Ye(t){const e=null!==this.et(t);return e||Xr("WatchChangeAggregator","Detected inactive target",t),e}et(t){const e=this.Ke.get(t);return e&&e.ve?null:this.Qe.lt(t)}Ze(t){this.Ke.set(t,new La),this.Qe.getRemoteKeysForTarget(t).forEach((e=>{this.je(t,e,null)}))}ut(t,e){return this.Qe.getRemoteKeysForTarget(t).has(e)}}function Ma(){return new Hs(Is.comparator)}function Fa(){return new Hs(Is.comparator)}const Va=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Ua=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),Ba=(()=>{const t={and:"AND",or:"OR"};return t})();class ja{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function $a(t,e){return t.useProto3Json||Vs(e)?e:{value:e}}function qa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ka(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function za(t,e){return qa(t,e.toTimestamp())}function Ga(t){return rs(!!t),bs.fromTimestamp(function(t){const e=ni(t);return new _s(e.seconds,e.nanos)}(t))}function Ha(t,e){return function(t){return new Ts(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Wa(t){const e=Ts.fromString(t);return rs(yc(e)),e}function Qa(t,e){return Ha(t.databaseId,e.path)}function Ja(t,e){const n=Wa(e);if(n.get(1)!==t.databaseId.projectId)throw new os(is.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new os(is.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Is(tc(n))}function Ya(t,e){return Ha(t.databaseId,e)}function Xa(t){const e=Wa(t);return 4===e.length?Ts.emptyPath():tc(e)}function Za(t){return new Ts(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function tc(t){return rs(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function ec(t,e,n){return{name:Qa(t,e),fields:n.value.mapValue.fields}}function nc(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:ns()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(t,e){return t.useProto3Json?(rs(void 0===e||"string"==typeof e),ti.fromBase64String(e||"")):(rs(void 0===e||e instanceof Uint8Array),ti.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?is.UNKNOWN:ba(t.code);return new os(e,t.message||"")}(o);n=new Oa(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ja(t,r.document.name),i=Ga(r.document.updateTime),o=r.document.createTime?Ga(r.document.createTime):bs.min(),a=new Ii({mapValue:{fields:r.document.fields}}),c=ki.newFoundDocument(s,i,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new xa(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ja(t,r.document),i=r.readTime?Ga(r.readTime):bs.min(),o=ki.newNoDocument(s,i),a=r.removedTargetIds||[];n=new xa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ja(t,r.document),i=r.removedTargetIds||[];n=new xa([],i,s,null)}else{if(!("filter"in e))return ns();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:s}=t,i=new ya(r,s),o=t.targetId;n=new Ra(o,i)}}return n}function rc(t,e){let n;if(e instanceof aa)n={update:ec(t,e.key,e.value)};else if(e instanceof fa)n={delete:Qa(t,e.key)};else if(e instanceof ca)n={update:ec(t,e.key,e.data),updateMask:mc(e.fieldMask)};else{if(!(e instanceof da))return ns();n={verify:Qa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof qo)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ko)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Go)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Wo)return{fieldPath:e.field.canonicalString(),increment:n.Te};throw ns()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:za(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:ns()}(t,e.precondition)),n}function sc(t,e){return t&&t.length>0?(rs(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Ga(t.updateTime):Ga(e);return n.isEqual(bs.min())&&(n=Ga(e)),new Xo(n,t.transformResults||[])}(t,e)))):[]}function ic(t,e){return{documents:[Ya(t,e.path)]}}function oc(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Ya(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ya(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(t){if(0!==t.length)return gc(Mi.create(t,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:dc(t.field),direction:lc(t.dir)}}(t)))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=$a(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function ac(t){let e=Xa(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){rs(1===r);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=function(t){const e=uc(t);return e instanceof Mi&&Vi(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new Ri(pc(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Vs(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Di(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Di(n,e)}(n.endAt)),ro(e,s,o,i,a,"F",c,u)}function cc(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ns()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function uc(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=pc(t.unaryFilter.field);return Pi.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=pc(t.unaryFilter.field);return Pi.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=pc(t.unaryFilter.field);return Pi.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=pc(t.unaryFilter.field);return Pi.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ns()}}(t):void 0!==t.fieldFilter?function(t){return Pi.create(pc(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ns()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Mi.create(t.compositeFilter.filters.map((t=>uc(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return ns()}}(t.compositeFilter.op))}(t):ns()}function lc(t){return Va[t]}function hc(t){return Ua[t]}function fc(t){return Ba[t]}function dc(t){return{fieldPath:t.canonicalString()}}function pc(t){return Ss.fromServerFormat(t.fieldPath)}function gc(t){return t instanceof Pi?function(t){if("=="===t.op){if(Ei(t.value))return{unaryFilter:{field:dc(t.field),op:"IS_NAN"}};if(bi(t.value))return{unaryFilter:{field:dc(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Ei(t.value))return{unaryFilter:{field:dc(t.field),op:"IS_NOT_NAN"}};if(bi(t.value))return{unaryFilter:{field:dc(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:dc(t.field),op:hc(t.op),value:t.value}}}(t):t instanceof Mi?function(t){const e=t.getFilters().map((t=>gc(t)));return 1===e.length?e[0]:{compositeFilter:{op:fc(t.op),filters:e}}}(t):ns()}function mc(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function yc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t,e,n,r,s=bs.min(),i=bs.min(),o=ti.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new vc(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new vc(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new vc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new vc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t){this.ht=t}}function _c(t){const e=ac({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?po(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bc{constructor(){}dt(t,e){this.Tt(t,e),e.Et()}Tt(t,e){if("nullValue"in t)this.At(e,5);else if("booleanValue"in t)this.At(e,10),e.Rt(t.booleanValue?1:0);else if("integerValue"in t)this.At(e,15),e.Rt(ri(t.integerValue));else if("doubleValue"in t){const n=ri(t.doubleValue);isNaN(n)?this.At(e,13):(this.At(e,15),Us(n)?e.Rt(0):e.Rt(n))}else if("timestampValue"in t){const n=t.timestampValue;this.At(e,20),"string"==typeof n?e.Vt(n):(e.Vt(`${n.seconds||""}`),e.Rt(n.nanos||0))}else if("stringValue"in t)this.ft(t.stringValue,e),this.gt(e);else if("bytesValue"in t)this.At(e,30),e.yt(si(t.bytesValue)),this.gt(e);else if("referenceValue"in t)this.wt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.At(e,45),e.Rt(n.latitude||0),e.Rt(n.longitude||0)}else"mapValue"in t?Si(t)?this.At(e,Number.MAX_SAFE_INTEGER):(this.St(t.mapValue,e),this.gt(e)):"arrayValue"in t?(this.bt(t.arrayValue,e),this.gt(e)):ns()}ft(t,e){this.At(e,25),this.Dt(t,e)}Dt(t,e){e.Vt(t)}St(t,e){const n=t.fields||{};this.At(e,55);for(const r of Object.keys(n))this.ft(r,e),this.Tt(n[r],e)}bt(t,e){const n=t.values||[];this.At(e,50);for(const r of n)this.Tt(r,e)}wt(t,e){this.At(e,37),Is.fromName(t).path.forEach((t=>{this.At(e,60),this.Dt(t,e)}))}At(t,e){t.Rt(e)}gt(t){t.Rt(2)}}bc.Ct=new bc;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ec{constructor(){this.an=new Tc}addToCollectionParentIndex(t,e){return this.an.add(e),Ps.resolve()}getCollectionParents(t,e){return Ps.resolve(this.an.getEntries(e))}addFieldIndex(t,e){return Ps.resolve()}deleteFieldIndex(t,e){return Ps.resolve()}deleteAllFieldIndexes(t){return Ps.resolve()}createTargetIndexes(t,e){return Ps.resolve()}getDocumentsMatchingTarget(t,e){return Ps.resolve(null)}getIndexType(t,e){return Ps.resolve(0)}getFieldIndexes(t,e){return Ps.resolve([])}getNextCollectionGroupToUpdate(t){return Ps.resolve(null)}getMinOffset(t,e){return Ps.resolve(Ns.min())}getMinOffsetFromCollectionGroup(t,e){return Ps.resolve(Ns.min())}updateCollectionGroup(t,e,n){return Ps.resolve()}updateIndexEntries(t,e){return Ps.resolve()}}class Tc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Js(Ts.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Js(Ts.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Cc{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Cc(t,Cc.DEFAULT_COLLECTION_PERCENTILE,Cc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cc.DEFAULT_COLLECTION_PERCENTILE=10,Cc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Cc.DEFAULT=new Cc(41943040,Cc.DEFAULT_COLLECTION_PERCENTILE,Cc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Cc.DISABLED=new Cc(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sc{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static Bn(){return new Sc(0)}static Ln(){return new Sc(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ic{constructor(){this.changes=new Eo((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ki.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Ps.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ac{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&sa(n.mutation,t,Xs.empty(),_s.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Oo()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Oo()){const r=ko();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=Io();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=ko();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Oo())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let s=Co();const i=No(),o=function(){return No()}();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof ca)?s=s.insert(e.key,e):void 0!==o?(i.set(e.key,o.mutation.getFieldMask()),sa(o.mutation,e,o.mutation.getFieldMask(),_s.now())):i.set(e.key,Xs.empty())})),this.recalculateAndSaveOverlays(t,s).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Ac(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=No();let r=new Hs(((t,e)=>t-e)),s=Oo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const s of t)s.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||Xs.empty();o=s.applyToLocalView(i,o),n.set(t,o);const a=(r.get(s.batchId)||Oo()).add(t);r=r.insert(s.batchId,a)}))})).next((()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Do();c.forEach((t=>{if(!s.has(t)){const r=na(e.get(t),n.get(t));null!==r&&u.set(t,r),s=s.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Ps.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,r){return function(t){return Is.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):co(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):Ps.resolve(ko());let o=-1,a=s;return i.next((e=>Ps.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?Ps.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,s))).next((()=>this.computeViews(t,a,e,Oo()))).next((t=>({batchId:o,changes:Ao(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Is(e)).next((t=>{let e=Io();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const s=e.collectionGroup;let i=Io();return this.indexManager.getCollectionParents(t,s).next((o=>Ps.forEach(o,(o=>{const a=function(t,e){return new no(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(s));return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s,r)))).next((t=>{s.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,ki.newInvalidDocument(r)))}));let n=Io();return t.forEach(((t,r)=>{const i=s.get(t);void 0!==i&&sa(i.mutation,r,Xs.empty(),_s.now()),vo(e,r)&&(n=n.insert(t,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(t){this.serializer=t,this.lr=new Map,this.hr=new Map}getBundleMetadata(t,e){return Ps.resolve(this.lr.get(e))}saveBundleMetadata(t,e){return this.lr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:Ga(t.createTime)}}(e)),Ps.resolve()}getNamedQuery(t,e){return Ps.resolve(this.hr.get(e))}saveNamedQuery(t,e){return this.hr.set(e.name,function(t){return{name:t.name,query:_c(t.bundledQuery),readTime:Ga(t.readTime)}}(e)),Ps.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(){this.overlays=new Hs(Is.comparator),this.Pr=new Map}getOverlay(t,e){return Ps.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ko();return Ps.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.It(t,e,r)})),Ps.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Pr.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Pr.delete(n)),Ps.resolve()}getOverlaysForCollection(t,e,n){const r=ko(),s=e.length+1,i=new Is(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===s&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Ps.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new Hs(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=ko(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=ko(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return Ps.resolve(o)}It(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Pr.get(r.largestBatchId).delete(n.key);this.Pr.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new ma(e,n));let s=this.Pr.get(e);void 0===s&&(s=Oo(),this.Pr.set(e,s)),this.Pr.set(e,s.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(){this.Ir=new Js(Rc.dr),this.Tr=new Js(Rc.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(t,e){const n=new Rc(t,e);this.Ir=this.Ir.add(n),this.Tr=this.Tr.add(n)}Ar(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Rr(new Rc(t,e))}Vr(t,e){t.forEach((t=>this.removeReference(t,e)))}mr(t){const e=new Is(new Ts([])),n=new Rc(e,t),r=new Rc(e,t+1),s=[];return this.Tr.forEachInRange([n,r],(t=>{this.Rr(t),s.push(t.key)})),s}gr(){this.Ir.forEach((t=>this.Rr(t)))}Rr(t){this.Ir=this.Ir.delete(t),this.Tr=this.Tr.delete(t)}pr(t){const e=new Is(new Ts([])),n=new Rc(e,t),r=new Rc(e,t+1);let s=Oo();return this.Tr.forEachInRange([n,r],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new Rc(t,0),n=this.Ir.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Rc{constructor(t,e){this.key=t,this.yr=e}static dr(t,e){return Is.comparator(t.key,e.key)||vs(t.yr,e.yr)}static Er(t,e){return vs(t.yr,e.yr)||Is.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.wr=1,this.Sr=new Js(Rc.dr)}checkEmpty(t){return Ps.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new pa(s,e,n,r);this.mutationQueue.push(i);for(const o of r)this.Sr=this.Sr.add(new Rc(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Ps.resolve(i)}lookupMutationBatch(t,e){return Ps.resolve(this.br(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Dr(n),s=r<0?0:r;return Ps.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Ps.resolve(0===this.mutationQueue.length?-1:this.wr-1)}getAllMutationBatches(t){return Ps.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Rc(e,0),r=new Rc(e,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([n,r],(t=>{const e=this.br(t.yr);s.push(e)})),Ps.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Js(vs);return e.forEach((t=>{const e=new Rc(t,0),r=new Rc(t,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([e,r],(t=>{n=n.add(t.yr)}))})),Ps.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;Is.isDocumentKey(s)||(s=s.child(""));const i=new Rc(new Is(s),0);let o=new Js(vs);return this.Sr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.yr)),!0)}),i),Ps.resolve(this.Cr(o))}Cr(t){const e=[];return t.forEach((t=>{const n=this.br(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){rs(0===this.vr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.Sr;return Ps.forEach(e.mutations,(r=>{const s=new Rc(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.Sr=n}))}xn(t){}containsKey(t,e){const n=new Rc(e,0),r=this.Sr.firstAfterOrEqual(n);return Ps.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Ps.resolve()}vr(t,e){return this.Dr(t)}Dr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}br(t){const e=this.Dr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(t){this.Fr=t,this.docs=function(){return new Hs(Is.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,i=this.Fr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Ps.resolve(n?n.document.mutableCopy():ki.newInvalidDocument(e))}getEntries(t,e){let n=Co();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ki.newInvalidDocument(t))})),Ps.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let s=Co();const i=e.path,o=new Is(i.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!i.isPrefixOf(t.path))break;t.path.length>i.length+1||xs(Ds(o),n)<=0||(r.has(o.key)||vo(e,o))&&(s=s.insert(o.key,o.mutableCopy()))}return Ps.resolve(s)}getAllFromCollectionGroup(t,e,n,r){ns()}Mr(t,e){return Ps.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Pc(this)}getSize(t){return Ps.resolve(this.size)}}class Pc extends Ic{constructor(t){super(),this.ur=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.ur.addEntry(t,r)):this.ur.removeEntry(n)})),Ps.waitFor(e)}getFromCache(t,e){return this.ur.getEntry(t,e)}getAllFromCache(t,e){return this.ur.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t){this.persistence=t,this.Or=new Eo((t=>Zi(t)),to),this.lastRemoteSnapshotVersion=bs.min(),this.highestTargetId=0,this.Nr=0,this.Br=new xc,this.targetCount=0,this.Lr=Sc.Bn()}forEachTarget(t,e){return this.Or.forEach(((t,n)=>e(n))),Ps.resolve()}getLastRemoteSnapshotVersion(t){return Ps.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Ps.resolve(this.Nr)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),Ps.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Nr&&(this.Nr=e),Ps.resolve()}Qn(t){this.Or.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new Sc(e),this.highestTargetId=e),t.sequenceNumber>this.Nr&&(this.Nr=t.sequenceNumber)}addTargetData(t,e){return this.Qn(e),this.targetCount+=1,Ps.resolve()}updateTargetData(t,e){return this.Qn(e),Ps.resolve()}removeTargetData(t,e){return this.Or.delete(e.target),this.Br.mr(e.targetId),this.targetCount-=1,Ps.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.Or.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Or.delete(i),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Ps.waitFor(s).next((()=>r))}getTargetCount(t){return Ps.resolve(this.targetCount)}getTargetData(t,e){const n=this.Or.get(e)||null;return Ps.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Ar(e,n),Ps.resolve()}removeMatchingKeys(t,e,n){this.Br.Vr(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach((e=>{s.push(r.markPotentiallyOrphaned(t,e))})),Ps.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Br.mr(e),Ps.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.pr(e);return Ps.resolve(n)}containsKey(t,e){return Ps.resolve(this.Br.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(t,e){this.kr={},this.overlays={},this.qr=new Fs(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=t(this),this.Kr=new Mc(this),this.indexManager=new Ec,this.remoteDocumentCache=function(t){return new Lc(t)}((t=>this.referenceDelegate.$r(t))),this.serializer=new wc(e),this.Ur=new Dc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Nc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.kr[t.toKey()];return n||(n=new Oc(e,this.referenceDelegate),this.kr[t.toKey()]=n),n}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(t,e,n){Xr("MemoryPersistence","Starting transaction:",t);const r=new Vc(this.qr.next());return this.referenceDelegate.Wr(),n(r).next((t=>this.referenceDelegate.Gr(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}zr(t,e){return Ps.or(Object.values(this.kr).map((n=>()=>n.containsKey(t,e))))}}class Vc extends Os{constructor(t){super(),this.currentSequenceNumber=t}}class Uc{constructor(t){this.persistence=t,this.jr=new xc,this.Hr=null}static Jr(t){return new Uc(t)}get Yr(){if(this.Hr)return this.Hr;throw ns()}addReference(t,e,n){return this.jr.addReference(n,e),this.Yr.delete(n.toString()),Ps.resolve()}removeReference(t,e,n){return this.jr.removeReference(n,e),this.Yr.add(n.toString()),Ps.resolve()}markPotentiallyOrphaned(t,e){return this.Yr.add(e.toString()),Ps.resolve()}removeTarget(t,e){this.jr.mr(e.targetId).forEach((t=>this.Yr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Yr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Wr(){this.Hr=new Set}Gr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ps.forEach(this.Yr,(n=>{const r=Is.fromPath(n);return this.Zr(t,r).next((t=>{t||e.removeEntry(r,bs.min())}))})).next((()=>(this.Hr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Zr(t,e).next((t=>{t?this.Yr.delete(e.toString()):this.Yr.add(e.toString())}))}$r(t){return 0}Zr(t,e){return Ps.or([()=>Ps.resolve(this.jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.zr(t,e)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bc{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Qi=n,this.Ki=r}static $i(t,e){let n=Oo(),r=Oo();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Bc(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(t,e){this.ji=t,this.indexManager=e,this.Ui=!0}getDocumentsMatchingQuery(t,e,n,r){const s={result:null};return this.Hi(t,e).next((t=>{s.result=t})).next((()=>{if(!s.result)return this.Ji(t,e,r,n).next((t=>{s.result=t}))})).next((()=>{if(s.result)return;const n=new jc;return this.Yi(t,e,n).next((r=>{if(s.result=r,this.Wi)return this.Zi(t,e,n,r.size)}))})).next((()=>s.result))}Zi(t,e,n,r){return n.documentReadCount<this.Gi?(Yr()<=o["in"].DEBUG&&Xr("QueryEngine","SDK will not create cache indexes for query:",yo(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),Ps.resolve()):(Yr()<=o["in"].DEBUG&&Xr("QueryEngine","Query:",yo(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.zi*r?(Yr()<=o["in"].DEBUG&&Xr("QueryEngine","The SDK decides to create cache indexes for query:",yo(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,lo(e))):Ps.resolve())}Hi(t,e){if(io(e))return Ps.resolve(null);let n=lo(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=po(e,null,"F"),n=lo(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const s=Oo(...r);return this.ji.getDocuments(t,s).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const i=this.Xi(e,r);return this.es(e,i,s,n.readTime)?this.Hi(t,po(e,null,"F")):this.ts(t,i,e,n)}))))})))))}Ji(t,e,n,r){return io(e)||r.isEqual(bs.min())?Ps.resolve(null):this.ji.getDocuments(t,n).next((s=>{const i=this.Xi(e,s);return this.es(e,i,n,r)?Ps.resolve(null):(Yr()<=o["in"].DEBUG&&Xr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),yo(e)),this.ts(t,i,e,ks(r,-1)).next((t=>t)))}))}Xi(t,e){let n=new Js(_o(t));return e.forEach(((e,r)=>{vo(t,r)&&(n=n.add(r))})),n}es(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Yi(t,e,n){return Yr()<=o["in"].DEBUG&&Xr("QueryEngine","Using full collection scan to execute query:",yo(e)),this.ji.getDocumentsMatchingQuery(t,e,Ns.min(),n)}ts(t,e,n,r){return this.ji.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(t,e,n,r){this.persistence=t,this.ns=e,this.serializer=r,this.rs=new Hs(vs),this.ss=new Eo((t=>Zi(t)),to),this.os=new Map,this._s=t.getRemoteDocumentCache(),this.Kr=t.getTargetCache(),this.Ur=t.getBundleCache(),this.us(n)}us(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new kc(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.rs)))}}function Kc(t,e,n,r){return new qc(t,e,n,r)}async function zc(t,e){const n=ss(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((s=>(r=s,n.us(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const s=[],i=[];let o=Oo();for(const t of r){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({cs:t,removedBatchIds:s,addedBatchIds:i})))}))}))}function Gc(t,e){const n=ss(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),s=n._s.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const s=n.batch,i=s.keys();let o=Ps.resolve();return i.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);rs(null!==i),e.version.compareTo(i)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Oo();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function Hc(t){const e=ss(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Kr.getLastRemoteSnapshotVersion(t)))}function Wc(t,e){const n=ss(t),r=e.snapshotVersion;let s=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n._s.newChangeBuffer({trackRemovals:!0});s=n.rs;const o=[];e.targetChanges.forEach(((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.Kr.removeMatchingKeys(t,i.removedDocuments,a).next((()=>n.Kr.addMatchingKeys(t,i.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(ti.EMPTY_BYTE_STRING,bs.min()).withLastLimboFreeSnapshotVersion(bs.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),s=s.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,i)&&o.push(n.Kr.updateTargetData(t,u))}));let a=Co(),c=Oo();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(Qc(t,i,e.documentUpdates).next((t=>{a=t.ls,c=t.hs}))),!r.isEqual(bs.min())){const e=n.Kr.getLastRemoteSnapshotVersion(t).next((e=>n.Kr.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Ps.waitFor(o).next((()=>i.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.rs=s,t)))}function Qc(t,e,n){let r=Oo(),s=Oo();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Co();return n.forEach(((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(bs.min())?(e.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),r=r.insert(n,i)):Xr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{ls:r,hs:s}}))}function Jc(t,e){const n=ss(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Yc(t,e){const n=ss(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Kr.getTargetData(t,e).next((s=>s?(r=s,Ps.resolve(r)):n.Kr.allocateTargetId(t).next((s=>(r=new vc(e,s,"TargetPurposeListen",t.currentSequenceNumber),n.Kr.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.rs.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.rs=n.rs.insert(t.targetId,t),n.ss.set(e,t.targetId)),t}))}async function Xc(t,e,n){const r=ss(t),s=r.rs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(t=>r.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!Ms(t))throw t;Xr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.rs=r.rs.remove(e),r.ss.delete(s.target)}function Zc(t,e,n){const r=ss(t);let s=bs.min(),i=Oo();return r.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const r=ss(t),s=r.ss.get(n);return void 0!==s?Ps.resolve(r.rs.get(s)):r.Kr.getTargetData(e,n)}(r,t,lo(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>r.ns.getDocumentsMatchingQuery(t,e,n?s:bs.min(),n?i:Oo()))).next((t=>(tu(r,wo(e),t),{documents:t,Ps:i})))))}function tu(t,e,n){let r=t.os.get(e)||bs.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.os.set(e,r)}class eu{constructor(){this.activeTargetIds=Po()}Rs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}As(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class nu{constructor(){this.ro=new eu,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.ro.Rs(t),this.io[t]||"not-current"}updateQueryState(t,e,n){this.io[t]=e}removeLocalQueryTarget(t){this.ro.Vs(t)}isLocalQueryTarget(t){return this.ro.activeTargetIds.has(t)}clearQueryState(t){delete this.io[t]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(t){return this.ro.activeTargetIds.has(t)}start(){return this.ro=new eu,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{so(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(t){this.co.push(t)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){Xr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.co)t(0)}uo(){Xr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.co)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iu=null;function ou(){return null===iu?iu=function(){return 268435456+Math.round(2147483648*Math.random())}():iu++,"0x"+iu.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const au={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(t){this.ho=t.ho,this.Po=t.Po}Io(t){this.To=t}Eo(t){this.Ao=t}onMessage(t){this.Ro=t}close(){this.Po()}send(t){this.ho(t)}Vo(){this.To()}mo(t){this.Ao(t)}fo(t){this.Ro(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu="WebChannelConnection";class lu extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${n}/databases/${r}`,this.wo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get So(){return!1}bo(t,e,n,r,s){const i=ou(),o=this.Do(t,e);Xr("RestConnection",`Sending RPC '${t}' ${i}:`,o,n);const a={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(a,r,s),this.vo(t,o,a,n).then((e=>(Xr("RestConnection",`Received RPC '${t}' ${i}: `,e),e)),(e=>{throw ts("RestConnection",`RPC '${t}' ${i} failed with error: `,e,"url: ",o,"request:",n),e}))}Fo(t,e,n,r,s,i){return this.bo(t,e,n,r,s)}Co(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}Do(t,e){const n=au[t];return`${this.po}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,n,r){const s=ou();return new Promise(((i,o)=>{const a=new Kr;a.setWithCredentials(!0),a.listenOnce(Br.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Ur.NO_ERROR:const e=a.getResponseJson();Xr(uu,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(e)),i(e);break;case Ur.TIMEOUT:Xr(uu,`RPC '${t}' ${s} timed out`),o(new os(is.DEADLINE_EXCEEDED,"Request time out"));break;case Ur.HTTP_ERROR:const n=a.getStatus();if(Xr(uu,`RPC '${t}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(is).indexOf(e)>=0?e:is.UNKNOWN}(e.status);o(new os(t,e.message))}else o(new os(is.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new os(is.UNAVAILABLE,"Connection failed."));break;default:ns()}}finally{Xr(uu,`RPC '${t}' ${s} completed.`)}}));const c=JSON.stringify(r);Xr(uu,`RPC '${t}' ${s} sending request:`,r),a.send(e,"POST",c,n,15)}))}Mo(t,e,n){const r=ou(),s=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Fr(),o=Vr(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Co(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=s.join("");Xr(uu,`Creating RPC '${t}' stream ${r}: ${u}`,a);const l=i.createWebChannel(u,a);let h=!1,f=!1;const d=new cu({ho:e=>{f?Xr(uu,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(h||(Xr(uu,`Opening RPC '${t}' stream ${r} transport.`),l.open(),h=!0),Xr(uu,`RPC '${t}' stream ${r} sending:`,e),l.send(e))},Po:()=>l.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(l,qr.EventType.OPEN,(()=>{f||Xr(uu,`RPC '${t}' stream ${r} transport opened.`)})),p(l,qr.EventType.CLOSE,(()=>{f||(f=!0,Xr(uu,`RPC '${t}' stream ${r} transport closed`),d.mo())})),p(l,qr.EventType.ERROR,(e=>{f||(f=!0,ts(uu,`RPC '${t}' stream ${r} transport errored:`,e),d.mo(new os(is.UNAVAILABLE,"The operation could not be completed")))})),p(l,qr.EventType.MESSAGE,(e=>{var n;if(!f){const s=e.data[0];rs(!!s);const i=s,o=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(o){Xr(uu,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=va[t];if(void 0!==e)return ba(e)}(e),s=o.message;void 0===n&&(n=is.INTERNAL,s="Unknown error status: "+e+" with message "+o.message),f=!0,d.mo(new os(n,s)),l.close()}else Xr(uu,`RPC '${t}' stream ${r} received:`,s),d.fo(s)}})),p(o,jr.STAT_EVENT,(e=>{e.stat===$r.PROXY?Xr(uu,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===$r.NOPROXY&&Xr(uu,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{d.Vo()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(t){return new ja(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(t,e,n=1e3,r=1.5,s=6e4){this._i=t,this.timerId=e,this.xo=n,this.Oo=r,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(t){this.cancel();const e=Math.floor(this.Bo+this.Ko()),n=Math.max(0,Date.now()-this.ko),r=Math.max(0,e-n);r>0&&Xr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Bo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,r,(()=>(this.ko=Date.now(),t()))),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){null!==this.Lo&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){null!==this.Lo&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(t,e,n,r,s,i,o,a){this._i=t,this.Uo=n,this.Wo=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new du(t,e)}Jo(){return 1===this.state||5===this.state||this.Yo()}Yo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&null===this.zo&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,(()=>this.t_())))}n_(t){this.r_(),this.stream.send(t)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(t,e){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,4!==t?this.Ho.reset():e&&e.code===is.RESOURCE_EXHAUSTED?(Zr(e.toString()),Zr("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):e&&e.code===is.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.s_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Eo(e)}s_(){}auth(){this.state=1;const t=this.o_(this.Go),e=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Go===e&&this.__(t,n)}),(e=>{t((()=>{const t=new os(is.UNKNOWN,"Fetching auth token failed: "+e.message);return this.a_(t)}))}))}__(t,e){const n=this.o_(this.Go);this.stream=this.u_(t,e),this.stream.Io((()=>{n((()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,(()=>(this.Yo()&&(this.state=3),Promise.resolve()))),this.listener.Io())))})),this.stream.Eo((t=>{n((()=>this.a_(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Zo(){this.state=5,this.Ho.Qo((async()=>{this.state=0,this.start()}))}a_(t){return Xr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}o_(t){return e=>{this._i.enqueueAndForget((()=>this.Go===t?e():(Xr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class gu extends pu{constructor(t,e,n,r,s,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,i),this.serializer=s}u_(t,e){return this.connection.Mo("Listen",t,e)}onMessage(t){this.Ho.reset();const e=nc(this.serializer,t),n=function(t){if(!("targetChange"in t))return bs.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?bs.min():e.readTime?Ga(e.readTime):bs.min()}(t);return this.listener.c_(e,n)}l_(t){const e={};e.database=Za(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=eo(r)?{documents:ic(t,r)}:{query:oc(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=Ka(t,e.resumeToken);const r=$a(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(bs.min())>0){n.readTime=qa(t,e.snapshotVersion.toTimestamp());const r=$a(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=cc(this.serializer,t);n&&(e.labels=n),this.n_(e)}h_(t){const e={};e.database=Za(this.serializer),e.removeTarget=t,this.n_(e)}}class mu extends pu{constructor(t,e,n,r,s,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,i),this.serializer=s,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(t,e){return this.connection.Mo("Write",t,e)}onMessage(t){if(rs(!!t.streamToken),this.lastStreamToken=t.streamToken,this.P_){this.Ho.reset();const e=sc(t.writeResults,t.commitTime),n=Ga(t.commitTime);return this.listener.T_(n,e)}return rs(!t.writeResults||0===t.writeResults.length),this.P_=!0,this.listener.E_()}A_(){const t={};t.database=Za(this.serializer),this.n_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>rc(this.serializer,t)))};this.n_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.R_=!1}V_(){if(this.R_)throw new os(is.FAILED_PRECONDITION,"The client has already been terminated.")}bo(t,e,n){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.bo(t,e,n,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===is.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new os(is.UNKNOWN,t.toString())}))}Fo(t,e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.connection.Fo(t,e,n,s,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===is.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new os(is.UNKNOWN,t.toString())}))}terminate(){this.R_=!0}}class vu{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){0===this.f_&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve()))))}b_(t){"Online"===this.state?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.w_("Offline")))}set(t){this.D_(),this.f_=0,"Online"===t&&(this.p_=!1),this.w_(t)}w_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}S_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(Zr(e),this.p_=!1):Xr("OnlineStateTracker",e)}D_(){null!==this.g_&&(this.g_.cancel(),this.g_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=s,this.x_.so((t=>{n.enqueueAndForget((async()=>{ku(this)&&(Xr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=ss(t);e.F_.add(4),await bu(e),e.O_.set("Unknown"),e.F_.delete(4),await _u(e)}(this))}))})),this.O_=new vu(n,r)}}async function _u(t){if(ku(t))for(const e of t.M_)await e(!0)}async function bu(t){for(const e of t.M_)await e(!1)}function Eu(t,e){const n=ss(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),Au(n)?Iu(n):Gu(n).Yo()&&Cu(n,e))}function Tu(t,e){const n=ss(t),r=Gu(n);n.v_.delete(e),r.Yo()&&Su(n,e),0===n.v_.size&&(r.Yo()?r.e_():ku(n)&&n.O_.set("Unknown"))}function Cu(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(bs.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Gu(t).l_(e)}function Su(t,e){t.N_.Le(e),Gu(t).h_(e)}function Iu(t){t.N_=new Pa({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Gu(t).start(),t.O_.y_()}function Au(t){return ku(t)&&!Gu(t).Jo()&&t.v_.size>0}function ku(t){return 0===ss(t).F_.size}function Du(t){t.N_=void 0}async function Nu(t){t.v_.forEach(((e,n)=>{Cu(t,e)}))}async function xu(t,e){Du(t),Au(t)?(t.O_.b_(e),Iu(t)):t.O_.set("Unknown")}async function Ru(t,e,n){if(t.O_.set("Online"),e instanceof Oa&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.v_.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.v_.delete(r),t.N_.removeTarget(r))}(t,e)}catch(n){Xr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ou(t,n)}else if(e instanceof xa?t.N_.Ge(e):e instanceof Ra?t.N_.Xe(e):t.N_.He(e),!n.isEqual(bs.min()))try{const e=await Hc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.N_._t(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.v_.get(r);s&&t.v_.set(r,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t.v_.get(e);if(!r)return;t.v_.set(e,r.withResumeToken(ti.EMPTY_BYTE_STRING,r.snapshotVersion)),Su(t,e);const s=new vc(r.target,e,n,r.sequenceNumber);Cu(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Xr("RemoteStore","Failed to raise snapshot:",e),await Ou(t,e)}}async function Ou(t,e,n){if(!Ms(e))throw e;t.F_.add(1),await bu(t),t.O_.set("Offline"),n||(n=()=>Hc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Xr("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await _u(t)}))}function Lu(t,e){return e().catch((n=>Ou(t,n,e)))}async function Pu(t){const e=ss(t),n=Hu(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;Mu(e);)try{const t=await Jc(e.localStore,r);if(null===t){0===e.C_.length&&n.e_();break}r=t.batchId,Fu(e,t)}catch(t){await Ou(e,t)}Vu(e)&&Uu(e)}function Mu(t){return ku(t)&&t.C_.length<10}function Fu(t,e){t.C_.push(e);const n=Hu(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function Vu(t){return ku(t)&&!Hu(t).Jo()&&t.C_.length>0}function Uu(t){Hu(t).start()}async function Bu(t){Hu(t).A_()}async function ju(t){const e=Hu(t);for(const n of t.C_)e.d_(n.mutations)}async function $u(t,e,n){const r=t.C_.shift(),s=ga.from(r,e,n);await Lu(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Pu(t)}async function qu(t,e){e&&Hu(t).I_&&await async function(t,e){if(function(t){return _a(t)&&t!==is.ABORTED}(e.code)){const n=t.C_.shift();Hu(t).Xo(),await Lu(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Pu(t)}}(t,e),Vu(t)&&Uu(t)}async function Ku(t,e){const n=ss(t);n.asyncQueue.verifyOperationInProgress(),Xr("RemoteStore","RemoteStore received new credentials");const r=ku(n);n.F_.add(3),await bu(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await _u(n)}async function zu(t,e){const n=ss(t);e?(n.F_.delete(2),await _u(n)):e||(n.F_.add(2),await bu(n),n.O_.set("Unknown"))}function Gu(t){return t.B_||(t.B_=function(t,e,n){const r=ss(t);return r.V_(),new gu(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Io:Nu.bind(null,t),Eo:xu.bind(null,t),c_:Ru.bind(null,t)}),t.M_.push((async e=>{e?(t.B_.Xo(),Au(t)?Iu(t):t.O_.set("Unknown")):(await t.B_.stop(),Du(t))}))),t.B_}function Hu(t){return t.L_||(t.L_=function(t,e,n){const r=ss(t);return r.V_(),new mu(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{Io:Bu.bind(null,t),Eo:qu.bind(null,t),E_:ju.bind(null,t),T_:$u.bind(null,t)}),t.M_.push((async e=>{e?(t.L_.Xo(),await Pu(t)):(await t.L_.stop(),t.C_.length>0&&(Xr("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))}))),t.L_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Wu{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new as,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,s){const i=Date.now()+n,o=new Wu(t,e,i,r,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new os(is.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qu(t,e){if(Zr("AsyncQueue",`${e}: ${t}`),Ms(t))return new os(is.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Is.comparator(e.key,n.key):(t,e)=>Is.comparator(t.key,e.key),this.keyedMap=Io(),this.sortedSet=new Hs(this.comparator)}static emptySet(t){return new Ju(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ju))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Ju;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(){this.k_=new Hs(Is.comparator)}track(t){const e=t.doc.key,n=this.k_.get(e);n?0!==t.type&&3===n.type?this.k_=this.k_.insert(e,t):3===t.type&&1!==n.type?this.k_=this.k_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.k_=this.k_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.k_=this.k_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.k_=this.k_.remove(e):1===t.type&&2===n.type?this.k_=this.k_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.k_=this.k_.insert(e,{type:2,doc:t.doc}):ns():this.k_=this.k_.insert(e,t)}q_(){const t=[];return this.k_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Xu{constructor(t,e,n,r,s,i,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,s){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new Xu(t,e,Ju.emptySet(e),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&go(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(){this.Q_=void 0,this.listeners=[]}}class tl{constructor(){this.queries=new Eo((t=>mo(t)),go),this.onlineState="Unknown",this.K_=new Set}}async function el(t,e){const n=ss(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Zu),s)try{i.Q_=await n.onListen(r)}catch(t){const n=Qu(t,`Initialization of query '${yo(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,i),i.listeners.push(e),e.U_(n.onlineState),i.Q_&&e.W_(i.Q_)&&il(n)}async function nl(t,e){const n=ss(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function rl(t,e){const n=ss(t);let r=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.W_(s)&&(r=!0);e.Q_=s}}r&&il(n)}function sl(t,e,n){const r=ss(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function il(t){t.K_.forEach((t=>{t.next()}))}class ol{constructor(t,e,n){this.query=t,this.G_=e,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=n||{}}W_(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Xu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.z_?this.H_(t)&&(this.G_.next(t),e=!0):this.J_(t,this.onlineState)&&(this.Y_(t),e=!0),this.j_=t,e}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let e=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),e=!0),e}J_(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Z_||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}H_(t){if(t.docChanges.length>0)return!0;const e=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Y_(t){t=Xu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class al{constructor(t){this.key=t}}class cl{constructor(t){this.key=t}}class ul{constructor(t,e){this.query=t,this.oa=e,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=Oo(),this.mutatedKeys=Oo(),this.ua=_o(t),this.ca=new Ju(this.ua)}get la(){return this.oa}ha(t,e){const n=e?e.Pa:new Yu,r=e?e.ca:this.ca;let s=e?e.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=vo(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.Ia(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.ua(l,a)>0||c&&this.ua(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(o=!0)),d&&(l?(i=i.add(l),s=f?s.add(t):s.delete(t)):(i=i.delete(t),s=s.delete(t)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{ca:i,Pa:n,es:o,mutatedKeys:s}}Ia(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const s=t.Pa.q_();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ns()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.ua(t.doc,e.doc))),this.da(n);const i=e?this.Ta():[],o=0===this.aa.size&&this.current?1:0,a=o!==this._a;return this._a=o,0!==s.length||a?{snapshot:new Xu(this.query,t.ca,r,s,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ea:i}:{Ea:i}}U_(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Yu,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}da(t){t&&(t.addedDocuments.forEach((t=>this.oa=this.oa.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.oa=this.oa.delete(t))),this.current=t.current)}Ta(){if(!this.current)return[];const t=this.aa;this.aa=Oo(),this.ca.forEach((t=>{this.Aa(t.key)&&(this.aa=this.aa.add(t.key))}));const e=[];return t.forEach((t=>{this.aa.has(t)||e.push(new cl(t))})),this.aa.forEach((n=>{t.has(n)||e.push(new al(n))})),e}Ra(t){this.oa=t.Ps,this.aa=Oo();const e=this.ha(t.documents);return this.applyChanges(e,!0)}Va(){return Xu.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,0===this._a,this.hasCachedResults)}}class ll{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class hl{constructor(t){this.key=t,this.ma=!1}}class fl{constructor(t,e,n,r,s,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.fa={},this.ga=new Eo((t=>mo(t)),go),this.pa=new Map,this.ya=new Set,this.wa=new Hs(Is.comparator),this.Sa=new Map,this.ba=new xc,this.Da={},this.Ca=new Map,this.va=Sc.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return!0===this.Fa}}async function dl(t,e){const n=Rl(t);let r,s;const i=n.ga.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const t=await Yc(n.localStore,lo(e)),i=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,s=await pl(n,e,r,"current"===i,t.resumeToken),n.isPrimaryClient&&Eu(n.remoteStore,t)}return s}async function pl(t,e,n,r,s){t.Ma=(e,n,r)=>async function(t,e,n,r){let s=e.view.ha(n);s.es&&(s=await Zc(t.localStore,e.query,!1).then((({documents:t})=>e.view.ha(t,s))));const i=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,i);return Il(t,e.targetId,o.Ea),o.snapshot}(t,e,n,r);const i=await Zc(t.localStore,e,!0),o=new ul(e,i.Ps),a=o.ha(i.documents),c=Na.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,s),u=o.applyChanges(a,t.isPrimaryClient,c);Il(t,n,u.Ea);const l=new ll(e,n,o);return t.ga.set(e,l),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),u.snapshot}async function gl(t,e){const n=ss(t),r=n.ga.get(e),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter((t=>!go(t,e)))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Xc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Tu(n.remoteStore,r.targetId),Cl(n,r.targetId)})).catch(Ls)):(Cl(n,r.targetId),await Xc(n.localStore,r.targetId,!0))}async function ml(t,e,n){const r=Ol(t);try{const t=await function(t,e){const n=ss(t),r=_s.now(),s=e.reduce(((t,e)=>t.add(e.key)),Oo());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Co(),c=Oo();return n._s.getEntries(t,s).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((s=>{i=s;const o=[];for(const t of e){const e=ia(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new ca(t.key,e,Ai(e.value.mapValue),Zo.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Ao(i)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Da[t.currentUser.toKey()];r||(r=new Hs(vs)),r=r.insert(e,n),t.Da[t.currentUser.toKey()]=r}(r,t.batchId,n),await Dl(r,t.changes),await Pu(r.remoteStore)}catch(t){const e=Qu(t,"Failed to persist write");n.reject(e)}}async function yl(t,e){const n=ss(t);try{const t=await Wc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.Sa.get(e);r&&(rs(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.ma=!0:t.modifiedDocuments.size>0?rs(r.ma):t.removedDocuments.size>0&&(rs(r.ma),r.ma=!1))})),await Dl(n,t,e)}catch(t){await Ls(t)}}function vl(t,e,n){const r=ss(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ga.forEach(((n,r)=>{const s=r.view.U_(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=ss(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const s of n.listeners)s.U_(e)&&(r=!0)})),r&&il(n)}(r.eventManager,e),t.length&&r.fa.c_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wl(t,e,n){const r=ss(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Sa.get(e),i=s&&s.key;if(i){let t=new Hs(Is.comparator);t=t.insert(i,ki.newNoDocument(i,bs.min()));const n=Oo().add(i),s=new Da(bs.min(),new Map,new Hs(vs),t,n);await yl(r,s),r.wa=r.wa.remove(i),r.Sa.delete(e),kl(r)}else await Xc(r.localStore,e,!1).then((()=>Cl(r,e,n))).catch(Ls)}async function _l(t,e){const n=ss(t),r=e.batch.batchId;try{const t=await Gc(n.localStore,e);Tl(n,r,null),El(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Dl(n,t)}catch(t){await Ls(t)}}async function bl(t,e,n){const r=ss(t);try{const t=await function(t,e){const n=ss(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(rs(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);Tl(r,e,n),El(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Dl(r,t)}catch(n){await Ls(n)}}function El(t,e){(t.Ca.get(e)||[]).forEach((t=>{t.resolve()})),t.Ca.delete(e)}function Tl(t,e,n){const r=ss(t);let s=r.Da[r.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),r.Da[r.currentUser.toKey()]=s}}function Cl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach((e=>{t.ba.containsKey(e)||Sl(t,e)}))}function Sl(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);null!==n&&(Tu(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),kl(t))}function Il(t,e,n){for(const r of n)r instanceof al?(t.ba.addReference(r.key,e),Al(t,r)):r instanceof cl?(Xr("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||Sl(t,r.key)):ns()}function Al(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(Xr("SyncEngine","New document in limbo: "+n),t.ya.add(r),kl(t))}function kl(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new Is(Ts.fromString(e)),r=t.va.next();t.Sa.set(r,new hl(n)),t.wa=t.wa.insert(n,r),Eu(t.remoteStore,new vc(lo(so(n.path)),r,"TargetPurposeLimboResolution",Fs.ae))}}async function Dl(t,e,n){const r=ss(t),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach(((t,a)=>{o.push(r.Ma(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){s.push(t);const e=Bc.$i(a.targetId,t);i.push(e)}})))})),await Promise.all(o),r.fa.c_(s),await async function(t,e){const n=ss(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Ps.forEach(e,(e=>Ps.forEach(e.Qi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Ps.forEach(e.Ki,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Ms(t))throw t;Xr("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.rs.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.rs=n.rs.insert(t,s)}}}(r.localStore,i))}async function Nl(t,e){const n=ss(t);if(!n.currentUser.isEqual(e)){Xr("SyncEngine","User change. New user:",e.toKey());const t=await zc(n.localStore,e);n.currentUser=e,function(t,e){t.Ca.forEach((t=>{t.forEach((t=>{t.reject(new os(is.CANCELLED,e))}))})),t.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Dl(n,t.cs)}}function xl(t,e){const n=ss(t),r=n.Sa.get(e);if(r&&r.ma)return Oo().add(r.key);{let t=Oo();const r=n.pa.get(e);if(!r)return t;for(const e of r){const r=n.ga.get(e);t=t.unionWith(r.view.la)}return t}}function Rl(t){const e=ss(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=yl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xl.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wl.bind(null,e),e.fa.c_=rl.bind(null,e.eventManager),e.fa.xa=sl.bind(null,e.eventManager),e}function Ol(t){const e=ss(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_l.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bl.bind(null,e),e}class Ll{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=fu(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Kc(this.persistence,new $c,t.initialUser,this.serializer)}createPersistence(t){return new Fc(Uc.Jr,this.serializer)}createSharedClientState(t){return new nu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Pl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>vl(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Nl.bind(null,this.syncEngine),await zu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new tl}()}createDatastore(t){const e=fu(t.databaseInfo.databaseId),n=function(t){return new lu(t)}(t.databaseInfo);return function(t,e,n,r){return new yu(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,s){return new wu(t,e,n,r,s)}(this.localStore,this.datastore,t.asyncQueue,(t=>vl(this.syncEngine,t,0)),function(){return su.C()?new su:new ru}())}createSyncEngine(t,e){return function(t,e,n,r,s,i,o){const a=new fl(t,e,n,r,s,i);return o&&(a.Fa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=ss(t);Xr("RemoteStore","RemoteStore shutting down."),e.F_.add(5),await bu(e),e.x_.shutdown(),e.O_.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ml{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):Zr("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fl{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Wr.UNAUTHENTICATED,this.clientId=ys.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Xr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Xr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new os(is.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new as;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Qu(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Vl(t,e){t.asyncQueue.verifyOperationInProgress(),Xr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await zc(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Ul(t,e){t.asyncQueue.verifyOperationInProgress();const n=await jl(t);Xr("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>Ku(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Ku(e.remoteStore,n))),t._onlineComponents=e}function Bl(t){return"FirebaseError"===t.name?t.code===is.FAILED_PRECONDITION||t.code===is.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function jl(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Xr("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Bl(n))throw n;ts("Error using user provided cache. Falling back to memory cache: "+n),await Vl(t,new Ll)}}else Xr("FirestoreClient","Using default OfflineComponentProvider"),await Vl(t,new Ll);return t._offlineComponents}async function $l(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Xr("FirestoreClient","Using user provided OnlineComponentProvider"),await Ul(t,t._uninitializedComponentsProvider._online)):(Xr("FirestoreClient","Using default OnlineComponentProvider"),await Ul(t,new Pl))),t._onlineComponents}function ql(t){return $l(t).then((t=>t.syncEngine))}async function Kl(t){const e=await $l(t),n=e.eventManager;return n.onListen=dl.bind(null,e.syncEngine),n.onUnlisten=gl.bind(null,e.syncEngine),n}function zl(t,e,n={}){const r=new as;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,s){const i=new Ml({next:n=>{e.enqueueAndForget((()=>nl(t,o))),n.fromCache&&"server"===r.source?s.reject(new os(is.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:t=>s.reject(t)}),o=new ol(n,i,{includeMetadataChanges:!0,Z_:!0});return el(t,o)}(await Kl(t),t.asyncQueue,e,n,r))),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gl(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Hl=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(t,e,n){if(!n)throw new os(is.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ql(t,e,n,r){if(!0===e&&!0===r)throw new os(is.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Jl(t){if(!Is.isDocumentKey(t))throw new os(is.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Yl(t){if(Is.isDocumentKey(t))throw new os(is.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xl(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":ns()}function Zl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new os(is.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xl(t);throw new os(is.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class th{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new os(is.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new os(is.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ql("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gl(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new os(is.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new os(is.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new os(is.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class eh{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new th({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new os(is.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new os(is.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new th(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new us;switch(t.type){case"firstParty":return new ds(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new os(is.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Hl.get(t);e&&(Xr("ComponentProvider","Removing Datastore"),Hl.delete(t),e.terminate())}(this),Promise.resolve()}}function nh(t,e,n,r={}){var s;const i=(t=Zl(t,eh))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==i.host&&i.host!==o&&ts("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Wr.MOCK_USER;else{e=(0,a.Sg)(r.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new os(is.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Wr(i)}t._authCredentials=new ls(new cs(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new rh(this.firestore,t,this._query)}}class sh{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ih(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new sh(this.firestore,t,this._key)}}class ih extends rh{constructor(t,e,n){super(t,e,so(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new sh(this.firestore,null,new Is(t))}withConverter(t){return new ih(this.firestore,t,this._path)}}function oh(t,e,...n){if(t=(0,a.m9)(t),Wl("collection","path",e),t instanceof eh){const r=Ts.fromString(e,...n);return Yl(r),new ih(t,null,r)}{if(!(t instanceof sh||t instanceof ih))throw new os(is.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ts.fromString(e,...n));return Yl(r),new ih(t.firestore,null,r)}}function ah(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=ys.V()),Wl("doc","path",e),t instanceof eh){const r=Ts.fromString(e,...n);return Jl(r),new sh(t,null,new Is(r))}{if(!(t instanceof sh||t instanceof ih))throw new os(is.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ts.fromString(e,...n));return Jl(r),new sh(t.firestore,t instanceof ih?t.converter:null,new Is(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ch{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new du(this,"async_queue_retry"),this.ou=()=>{const t=hu();t&&Xr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Ho.$o()};const t=hu();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this._u(),this.au(t)}enterRestrictedMode(t){if(!this.eu){this.eu=!0,this.iu=t||!1;const e=hu();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.ou)}}enqueue(t){if(this._u(),this.eu)return new Promise((()=>{}));const e=new as;return this.au((()=>this.eu&&this.iu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xa.push(t),this.uu())))}async uu(){if(0!==this.Xa.length){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(t){if(!Ms(t))throw t;Xr("AsyncQueue","Operation failed with retryable error: "+t)}this.Xa.length>0&&this.Ho.Qo((()=>this.uu()))}}au(t){const e=this.Za.then((()=>(this.ru=!0,t().catch((t=>{this.nu=t,this.ru=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Zr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.ru=!1,t))))));return this.Za=e,e}enqueueAfterDelay(t,e,n){this._u(),this.su.indexOf(t)>-1&&(e=0);const r=Wu.createAndSchedule(this,t,e,n,(t=>this.cu(t)));return this.tu.push(r),r}_u(){this.nu&&ns()}verifyOperationInProgress(){}async lu(){let t;do{t=this.Za,await t}while(t!==this.Za)}hu(t){for(const e of this.tu)if(e.timerId===t)return!0;return!1}Pu(t){return this.lu().then((()=>{this.tu.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.tu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.lu()}))}Iu(t){this.su.push(t)}cu(t){const e=this.tu.indexOf(t);this.tu.splice(e,1)}}class uh extends eh{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=function(){return new ch}(),this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||fh(this),this._firestoreClient.terminate()}}function lh(t,e){const n="object"==typeof t?t:(0,s.getApp)(),r="string"==typeof t?t:e||"(default)",i=(0,s._getProvider)(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const t=(0,a.P0)("firestore");t&&nh(i,...t)}return i}function hh(t){return t._firestoreClient||fh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function fh(t){var e,n,r;const s=t._freezeSettings(),i=function(t,e,n,r){return new ci(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Gl(r.experimentalLongPollingOptions),r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new Fl(t._authCredentials,t._appCheckCredentials,t._queue,i),(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dh{constructor(t){this._byteString=t}static fromBase64String(t){try{return new dh(ti.fromBase64String(t))}catch(t){throw new os(is.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new dh(ti.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new os(is.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ss(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gh{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new os(is.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new os(is.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return vs(this._lat,t._lat)||vs(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh=/^__.*__$/;class vh{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new ca(t,this.data,this.fieldMask,e,this.fieldTransforms):new aa(t,this.data,e,this.fieldTransforms)}}function wh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ns()}}class _h{constructor(t,e,n,r,s,i){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===s&&this.du(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(t){return new _h(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Eu({path:n,Ru:!1});return r.Vu(t),r}mu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Eu({path:n,Ru:!1});return r.du(),r}fu(t){return this.Eu({path:void 0,Ru:!0})}gu(t){return Rh(t,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}du(){if(this.path)for(let t=0;t<this.path.length;t++)this.Vu(this.path.get(t))}Vu(t){if(0===t.length)throw this.gu("Document fields must not be empty");if(wh(this.Tu)&&yh.test(t))throw this.gu('Document fields cannot begin and end with "__"')}}class bh{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||fu(t)}wu(t,e,n,r=!1){return new _h({Tu:t,methodName:e,yu:n,path:Ss.emptyPath(),Ru:!1,pu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Eh(t){const e=t._freezeSettings(),n=fu(t._databaseId);return new bh(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Th(t,e,n,r,s,i={}){const o=t.wu(i.merge||i.mergeFields?2:0,e,n,s);kh("Data must be an object, but it was:",o,r);const a=Ih(r,o);let c,u;if(i.merge)c=new Xs(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const r of i.mergeFields){const s=Dh(e,r,n);if(!o.contains(s))throw new os(is.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Oh(t,s)||t.push(s)}c=new Xs(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new vh(new Ii(a),c,u)}function Ch(t,e,n,r=!1){return Sh(n,t.wu(r?4:3,e))}function Sh(t,e){if(Ah(t=(0,a.m9)(t)))return kh("Unsupported field value:",e,t),Ih(t,e);if(t instanceof gh)return function(t,e){if(!wh(e.Tu))throw e.gu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.gu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&4!==e.Tu)throw e.gu("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const s of t){let t=Sh(s,e.fu(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Vo(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=_s.fromDate(t);return{timestampValue:qa(e.serializer,n)}}if(t instanceof _s){const n=new _s(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:qa(e.serializer,n)}}if(t instanceof mh)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof dh)return{bytesValue:Ka(e.serializer,t._byteString)};if(t instanceof sh){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.gu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ha(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.gu(`Unsupported field value: ${Xl(t)}`)}(t,e)}function Ih(t,e){const n={};return Gs(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zs(t,((t,r)=>{const s=Sh(r,e.Au(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function Ah(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof _s||t instanceof mh||t instanceof dh||t instanceof sh||t instanceof gh)}function kh(t,e,n){if(!Ah(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Xl(n);throw"an object"===r?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function Dh(t,e,n){if((e=(0,a.m9)(e))instanceof ph)return e._internalPath;if("string"==typeof e)return xh(t,e);throw Rh("Field path arguments must be of type string or ",t,!1,void 0,n)}const Nh=new RegExp("[~\\*/\\[\\]]");function xh(t,e,n){if(e.search(Nh)>=0)throw Rh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ph(...e.split("."))._internalPath}catch(b){throw Rh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Rh(t,e,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new os(is.INVALID_ARGUMENT,a+t+c)}function Oh(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new sh(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Ph(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Mh("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Ph extends Lh{data(){return super.data()}}function Mh(t,e){return"string"==typeof e?xh(t,e):e instanceof ph?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new os(is.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vh{}class Uh extends Vh{}function Bh(t,e,...n){let r=[];e instanceof Vh&&r.push(e),r=r.concat(n),function(t){const e=t.filter((t=>t instanceof qh)).length,n=t.filter((t=>t instanceof jh)).length;if(e>1||e>0&&n>0)throw new os(is.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const s of r)t=s._apply(t);return t}class jh extends Uh{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new jh(t,e,n)}_apply(t){const e=this._parse(t);return Wh(t._query,e),new rh(t.firestore,t.converter,fo(t._query,e))}_parse(t){const e=Eh(t.firestore),n=function(t,e,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new os(is.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){Hh(o,i);const e=[];for(const n of o)e.push(Gh(r,t,n));a={arrayValue:{values:e}}}else a=Gh(r,t,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||Hh(o,i),a=Ch(n,e,o,"in"===i||"not-in"===i);return Pi.create(s,i,a)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}function $h(t,e,n){const r=e,s=Mh("where",t);return jh._create(s,r,n)}class qh extends Vh{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new qh(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:Mi.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const s of r)Wh(n,s),n=fo(n,s)}(t._query,e),new rh(t.firestore,t.converter,fo(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Kh extends Uh{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Kh(t,e)}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new os(is.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new os(is.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Ri(e,n);return function(t,e){if(null===oo(t)){const n=ao(t);null!==n&&Qh(t,n,e.field)}}(t,r),r}(t._query,this._field,this._direction);return new rh(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new no(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function zh(t,e="asc"){const n=e,r=Mh("orderBy",t);return Kh._create(r,n)}function Gh(t,e,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new os(is.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!co(e)&&-1!==n.indexOf("/"))throw new os(is.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ts.fromString(n));if(!Is.isDocumentKey(r))throw new os(is.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return vi(t,new Is(r))}if(n instanceof sh)return vi(t,n._key);throw new os(is.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xl(n)}.`)}function Hh(t,e){if(!Array.isArray(t)||0===t.length)throw new os(is.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Wh(t,e){if(e.isInequality()){const n=ao(t),r=e.field;if(null!==n&&!n.isEqual(r))throw new os(is.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const s=oo(t);null!==s&&Qh(t,r,s)}const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new os(is.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new os(is.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Qh(t,e,n){if(!n.isEqual(e))throw new os(is.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Jh{convertValue(t,e="none"){switch(hi(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ri(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(si(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw ns()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return zs(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new mh(ri(t.latitude),ri(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=oi(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(ai(t));default:return null}}convertTimestamp(t){const e=ni(t);return new _s(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Ts.fromString(t);rs(yc(n));const r=new ui(n.get(1),n.get(3)),s=new Is(n.popFirst(5));return r.isEqual(e)||Zr(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xh{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Zh extends Lh{constructor(t,e,n,r,s,i){super(t,e,n,r,i),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new tf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Mh("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class tf extends Zh{data(t={}){return super.data(t)}}class ef{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Xh(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new tf(this._firestore,this._userDataWriter,n.key,n,new Xh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new os(is.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new tf(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Xh(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new tf(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Xh(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,i=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:nf(e.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function nf(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ns()}}class rf extends Jh{constructor(t){super(),this.firestore=t}convertBytes(t){return new dh(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new sh(this.firestore,null,e)}}function sf(t){t=Zl(t,rh);const e=Zl(t.firestore,uh),n=hh(e),r=new rf(e);return Fh(t._query),zl(n,t._query).then((n=>new ef(e,r,t,n)))}function of(t,e){const n=Zl(t.firestore,uh),r=ah(t),s=Yh(t.converter,e);return af(n,[Th(Eh(t.firestore),"addDoc",r._key,s,null!==t.converter,{}).toMutation(r._key,Zo.exists(!1))]).then((()=>r))}function af(t,e){return function(t,e){const n=new as;return t.asyncQueue.enqueueAndForget((async()=>ml(await ql(t),e,n))),n.promise}(hh(t),e)}new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){Qr=t}(s.SDK_VERSION),(0,s._registerComponent)(new i.wA("firestore",((t,{instanceIdentifier:n,options:r})=>{const s=t.getProvider("app").getImmediate(),i=new uh(new hs(t.getProvider("auth-internal")),new gs(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new os(is.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ui(t.options.projectId,e)}(s,n),s);return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i}),"PUBLIC").setMultipleInstances(!0)),(0,s.registerVersion)(Hr,"4.2.0",t),(0,s.registerVersion)(Hr,"4.2.0","esm2017")}()},201:function(t,e,n){n.d(e,{p7:function(){return ne},r5:function(){return B}});var r=n(252),s=n(262);
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const i="undefined"!==typeof window;function o(t){return t.__esModule||"Module"===t[Symbol.toStringTag]}const a=Object.assign;function c(t,e){const n={};for(const r in e){const s=e[r];n[r]=l(s)?s.map(t):t(s)}return n}const u=()=>{},l=Array.isArray;const h=/\/$/,f=t=>t.replace(h,"");function d(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=b(null!=r?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function p(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function g(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function m(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&y(e.matched[r],n.matched[s])&&v(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function y(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function v(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!w(t[n],e[n]))return!1;return!0}function w(t,e){return l(t)?_(t,e):l(e)?_(e,t):t===e}function _(t,e){return l(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function b(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];".."!==s&&"."!==s||r.push("");let i,o,a=n.length-1;for(i=0;i<r.length;i++)if(o=r[i],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var E,T;(function(t){t["pop"]="pop",t["push"]="push"})(E||(E={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(T||(T={}));function C(t){if(!t)if(i){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),f(t)}const S=/^[^#]+#/;function I(t,e){return t.replace(S,"#")+e}function A(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const k=()=>({left:window.pageXOffset,top:window.pageYOffset});function D(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const s="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=A(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function N(t,e){const n=history.state?history.state.position-e:-1;return n+t}const x=new Map;function R(t,e){x.set(t,e)}function O(t){const e=x.get(t);return x.delete(t),e}let L=()=>location.protocol+"//"+location.host;function P(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let e=s.includes(t.slice(i))?t.slice(i).length:1,n=s.slice(e);return"/"!==n[0]&&(n="/"+n),g(n,"")}const o=g(n,t);return o+r+s}function M(t,e,n,r){let s=[],i=[],o=null;const c=({state:i})=>{const a=P(t,location),c=n.value,u=e.value;let l=0;if(i){if(n.value=a,e.value=i,o&&o===c)return void(o=null);l=u?i.position-u.position:0}else r(a);s.forEach((t=>{t(n.value,c,{delta:l,type:E.pop,direction:l?l>0?T.forward:T.back:T.unknown})}))};function u(){o=n.value}function l(t){s.push(t);const e=()=>{const e=s.indexOf(t);e>-1&&s.splice(e,1)};return i.push(e),e}function h(){const{history:t}=window;t.state&&t.replaceState(a({},t.state,{scroll:k()}),"")}function f(){for(const t of i)t();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:u,listen:l,destroy:f}}function F(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?k():null}}function V(t){const{history:e,location:n}=window,r={value:P(t,n)},s={value:e.state};function i(r,i,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:L()+t+r;try{e[o?"replaceState":"pushState"](i,"",c),s.value=i}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(t,n){const o=a({},e.state,F(s.value.back,t,s.value.forward,!0),n,{position:s.value.position});i(t,o,!0),r.value=t}function c(t,n){const o=a({},s.value,e.state,{forward:t,scroll:k()});i(o.current,o,!0);const c=a({},F(r.value,t,null),{position:o.position+1},n);i(t,c,!1),r.value=t}return s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:s,push:c,replace:o}}function U(t){t=C(t);const e=V(t),n=M(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const s=a({location:"",base:t,go:r,createHref:I.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function B(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),U(t)}function j(t){return"string"===typeof t||t&&"object"===typeof t}function $(t){return"string"===typeof t||"symbol"===typeof t}const q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},K=Symbol("");var z;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(z||(z={}));function G(t,e){return a(new Error,{type:t,[K]:!0},e)}function H(t,e){return t instanceof Error&&K in t&&(null==e||!!(t.type&e))}const W="[^/]+?",Q={sensitive:!1,strict:!1,start:!0,end:!0},J=/[.+*?^${}()[\]/\\]/g;function Y(t,e){const n=a({},Q,e),r=[];let s=n.start?"^":"";const i=[];for(const a of t){const t=a.length?[]:[90];n.strict&&!a.length&&(s+="/");for(let e=0;e<a.length;e++){const r=a[e];let o=40+(n.sensitive?.25:0);if(0===r.type)e||(s+="/"),s+=r.value.replace(J,"\\$&"),o+=40;else if(1===r.type){const{value:t,repeatable:n,optional:c,regexp:u}=r;i.push({name:t,repeatable:n,optional:c});const l=u||W;if(l!==W){o+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${t}" (${l}): `+h.message)}}let f=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;e||(f=c&&a.length<2?`(?:/${f})`:"/"+f),c&&(f+="?"),s+=f,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===l&&(o+=-50)}t.push(o)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(t){const e=t.match(o),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",s=i[r-1];n[s.name]=t&&s.repeatable?t.split("/"):t}return n}function u(e){let n="",r=!1;for(const s of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of s)if(0===t.type)n+=t.value;else if(1===t.type){const{value:i,repeatable:o,optional:a}=t,c=i in e?e[i]:"";if(l(c)&&!o)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${i}"`);s.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:o,score:r,keys:i,parse:c,stringify:u}}function X(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function Z(t,e){let n=0;const r=t.score,s=e.score;while(n<r.length&&n<s.length){const t=X(r[n],s[n]);if(t)return t;n++}if(1===Math.abs(s.length-r.length)){if(tt(r))return 1;if(tt(s))return-1}return s.length-r.length}function tt(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const et={type:0,value:""},nt=/[a-zA-Z0-9_]/;function rt(t){if(!t)return[[]];if("/"===t)return[[et]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a,c=0,u="",l="";function h(){u&&(0===n?i.push({type:0,value:u}):1===n||2===n||3===n?(i.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:nt.test(a)?f():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function st(t,e,n){const r=Y(rt(t.path),n);const s=a(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf===!e.record.aliasOf&&e.children.push(s),s}function it(t,e){const n=[],r=new Map;function s(t){return r.get(t)}function i(t,n,r){const s=!r,c=at(t);c.aliasOf=r&&r.record;const h=ht(e,t),f=[c];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)f.push(a({},c,{components:r?r.record.components:c.components,path:t,aliasOf:r?r.record:c}))}let d,p;for(const e of f){const{path:a}=e;if(n&&"/"!==a[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(a&&r+a)}if(d=st(e,n,h),r?r.alias.push(d):(p=p||d,p!==d&&p.alias.push(d),s&&t.name&&!ut(d)&&o(t.name)),c.children){const t=c.children;for(let e=0;e<t.length;e++)i(t[e],d,r&&r.children[e])}r=r||d,(d.record.components&&Object.keys(d.record.components).length||d.record.name||d.record.redirect)&&l(d)}return p?()=>{o(p)}:u}function o(t){if($(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function c(){return n}function l(t){let e=0;while(e<n.length&&Z(t,n[e])>=0&&(t.record.path!==n[e].record.path||!ft(t,n[e])))e++;n.splice(e,0,t),t.record.name&&!ut(t)&&r.set(t.record.name,t)}function h(t,e){let s,i,o,c={};if("name"in t&&t.name){if(s=r.get(t.name),!s)throw G(1,{location:t});0,o=s.record.name,c=a(ot(e.params,s.keys.filter((t=>!t.optional)).map((t=>t.name))),t.params&&ot(t.params,s.keys.map((t=>t.name)))),i=s.stringify(c)}else if("path"in t)i=t.path,s=n.find((t=>t.re.test(i))),s&&(c=s.parse(i),o=s.record.name);else{if(s=e.name?r.get(e.name):n.find((t=>t.re.test(e.path))),!s)throw G(1,{location:t,currentLocation:e});o=s.record.name,c=a({},e.params,t.params),i=s.stringify(c)}const u=[];let l=s;while(l)u.unshift(l.record),l=l.parent;return{name:o,path:i,params:c,matched:u,meta:lt(u)}}return e=ht({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>i(t))),{addRoute:i,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function ot(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function at(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ct(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ct(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="object"===typeof n?n[r]:n;return e}function ut(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function lt(t){return t.reduce(((t,e)=>a(t,e.meta)),{})}function ht(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ft(t,e){return e.children.some((e=>e===t||ft(t,e)))}const dt=/#/g,pt=/&/g,gt=/\//g,mt=/=/g,yt=/\?/g,vt=/\+/g,wt=/%5B/g,_t=/%5D/g,bt=/%5E/g,Et=/%60/g,Tt=/%7B/g,Ct=/%7C/g,St=/%7D/g,It=/%20/g;function At(t){return encodeURI(""+t).replace(Ct,"|").replace(wt,"[").replace(_t,"]")}function kt(t){return At(t).replace(Tt,"{").replace(St,"}").replace(bt,"^")}function Dt(t){return At(t).replace(vt,"%2B").replace(It,"+").replace(dt,"%23").replace(pt,"%26").replace(Et,"`").replace(Tt,"{").replace(St,"}").replace(bt,"^")}function Nt(t){return Dt(t).replace(mt,"%3D")}function xt(t){return At(t).replace(dt,"%23").replace(yt,"%3F")}function Rt(t){return null==t?"":xt(t).replace(gt,"%2F")}function Ot(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Lt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const t=r[s].replace(vt," "),n=t.indexOf("="),i=Ot(n<0?t:t.slice(0,n)),o=n<0?null:Ot(t.slice(n+1));if(i in e){let t=e[i];l(t)||(t=e[i]=[t]),t.push(o)}else e[i]=o}return e}function Pt(t){let e="";for(let n in t){const r=t[n];if(n=Nt(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const s=l(r)?r.map((t=>t&&Dt(t))):[r&&Dt(r)];s.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function Mt(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=l(r)?r.map((t=>null==t?null:""+t)):null==r?r:""+r)}return e}const Ft=Symbol(""),Vt=Symbol(""),Ut=Symbol(""),Bt=Symbol(""),jt=Symbol("");function $t(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function qt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise(((o,a)=>{const c=t=>{!1===t?a(G(4,{from:n,to:e})):t instanceof Error?a(t):j(t)?a(G(2,{from:e,to:t})):(i&&r.enterCallbacks[s]===i&&"function"===typeof t&&i.push(t),o())},u=t.call(r&&r.instances[s],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch((t=>a(t)))}))}function Kt(t,e,n,r){const s=[];for(const i of t){0;for(const t in i.components){let a=i.components[t];if("beforeRouteEnter"===e||i.instances[t])if(zt(a)){const o=a.__vccOpts||a,c=o[e];c&&s.push(qt(c,n,r,i,t))}else{let c=a();0,s.push((()=>c.then((s=>{if(!s)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${i.path}"`));const a=o(s)?s.default:s;i.components[t]=a;const c=a.__vccOpts||a,u=c[e];return u&&qt(u,n,r,i,t)()}))))}}}return s}function zt(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function Gt(t){const e=(0,r.f3)(Ut),n=(0,r.f3)(Bt),i=(0,r.Fl)((()=>e.resolve((0,s.SU)(t.to)))),o=(0,r.Fl)((()=>{const{matched:t}=i.value,{length:e}=t,r=t[e-1],s=n.matched;if(!r||!s.length)return-1;const o=s.findIndex(y.bind(null,r));if(o>-1)return o;const a=Yt(t[e-2]);return e>1&&Yt(r)===a&&s[s.length-1].path!==a?s.findIndex(y.bind(null,t[e-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Jt(n.params,i.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&v(n.params,i.value.params)));function l(n={}){return Qt(n)?e[(0,s.SU)(t.replace)?"replace":"push"]((0,s.SU)(t.to)).catch(u):Promise.resolve()}return{route:i,href:(0,r.Fl)((()=>i.value.href)),isActive:a,isExactActive:c,navigate:l}}const Ht=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Gt,setup(t,{slots:e}){const n=(0,s.qj)(Gt(t)),{options:i}=(0,r.f3)(Ut),o=(0,r.Fl)((()=>({[Xt(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Xt(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const s=e.default&&e.default(n);return t.custom?s:(0,r.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),Wt=Ht;function Qt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Jt(t,e){for(const n in e){const r=e[n],s=t[n];if("string"===typeof r){if(r!==s)return!1}else if(!l(s)||s.length!==r.length||r.some(((t,e)=>t!==s[e])))return!1}return!0}function Yt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Xt=(t,e,n)=>null!=t?t:null!=e?e:n,Zt=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=(0,r.f3)(jt),o=(0,r.Fl)((()=>t.route||i.value)),c=(0,r.f3)(Vt,0),u=(0,r.Fl)((()=>{let t=(0,s.SU)(c);const{matched:e}=o.value;let n;while((n=e[t])&&!n.components)t++;return t})),l=(0,r.Fl)((()=>o.value.matched[u.value]));(0,r.JJ)(Vt,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(Ft,l),(0,r.JJ)(jt,o);const h=(0,s.iH)();return(0,r.YP)((()=>[h.value,l.value,t.name]),(([t,e,n],[r,s,i])=>{e&&(e.instances[n]=t,s&&s!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=s.leaveGuards),e.updateGuards.size||(e.updateGuards=s.updateGuards))),!t||!e||s&&y(e,s)&&r||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const s=o.value,i=t.name,c=l.value,u=c&&c.components[i];if(!u)return te(n.default,{Component:u,route:s});const f=c.props[i],d=f?!0===f?s.params:"function"===typeof f?f(s):f:null,p=t=>{t.component.isUnmounted&&(c.instances[i]=null)},g=(0,r.h)(u,a({},d,e,{onVnodeUnmounted:p,ref:h}));return te(n.default,{Component:g,route:s})||g}}});function te(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const ee=Zt;function ne(t){const e=it(t.routes,t),n=t.parseQuery||Lt,o=t.stringifyQuery||Pt,h=t.history;const f=$t(),g=$t(),y=$t(),v=(0,s.XI)(q);let w=q;i&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=c.bind(null,(t=>""+t)),b=c.bind(null,Rt),T=c.bind(null,Ot);function C(t,n){let r,s;return $(t)?(r=e.getRecordMatcher(t),s=n):s=t,e.addRoute(s,r)}function S(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function I(){return e.getRoutes().map((t=>t.record))}function A(t){return!!e.getRecordMatcher(t)}function x(t,r){if(r=a({},r||v.value),"string"===typeof t){const s=d(n,t,r.path),i=e.resolve({path:s.path},r),o=h.createHref(s.fullPath);return a(s,i,{params:T(i.params),hash:Ot(s.hash),redirectedFrom:void 0,href:o})}let s;if("path"in t)s=a({},t,{path:d(n,t.path,r.path).path});else{const e=a({},t.params);for(const t in e)null==e[t]&&delete e[t];s=a({},t,{params:b(e)}),r.params=b(r.params)}const i=e.resolve(s,r),c=t.hash||"";i.params=_(T(i.params));const u=p(o,a({},t,{hash:kt(c),path:i.path})),l=h.createHref(u);return a({fullPath:u,hash:c,query:o===Pt?Mt(t.query):t.query||{}},i,{redirectedFrom:void 0,href:l})}function L(t){return"string"===typeof t?d(n,t,v.value.path):a({},t)}function P(t,e){if(w!==t)return G(8,{from:e,to:t})}function M(t){return U(t)}function F(t){return M(a(L(t),{replace:!0}))}function V(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=L(r):{path:r},r.params={}),a({query:t.query,hash:t.hash,params:"path"in r?{}:t.params},r)}}function U(t,e){const n=w=x(t),r=v.value,s=t.state,i=t.force,c=!0===t.replace,u=V(n);if(u)return U(a(L(u),{state:"object"===typeof u?a({},s,u.state):s,force:i,replace:c}),e||n);const l=n;let h;return l.redirectedFrom=e,!i&&m(o,r,n)&&(h=G(16,{to:l,from:r}),rt(r,r,!0,!1)),(h?Promise.resolve(h):K(l,r)).catch((t=>H(t)?H(t,2)?t:nt(t):tt(t,l,r))).then((t=>{if(t){if(H(t,2))return U(a({replace:c},L(t.to),{state:"object"===typeof t.to?a({},s,t.to.state):s,force:i}),e||l)}else t=W(l,r,!0,c,s);return z(l,r,t),t}))}function B(t,e){const n=P(t,e);return n?Promise.reject(n):Promise.resolve()}function j(t){const e=at.values().next().value;return e&&"function"===typeof e.runWithContext?e.runWithContext(t):t()}function K(t,e){let n;const[r,s,i]=re(t,e);n=Kt(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach((r=>{n.push(qt(r,t,e))}));const o=B.bind(null,t,e);return n.push(o),ut(n).then((()=>{n=[];for(const r of f.list())n.push(qt(r,t,e));return n.push(o),ut(n)})).then((()=>{n=Kt(s,"beforeRouteUpdate",t,e);for(const r of s)r.updateGuards.forEach((r=>{n.push(qt(r,t,e))}));return n.push(o),ut(n)})).then((()=>{n=[];for(const r of i)if(r.beforeEnter)if(l(r.beforeEnter))for(const s of r.beforeEnter)n.push(qt(s,t,e));else n.push(qt(r.beforeEnter,t,e));return n.push(o),ut(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=Kt(i,"beforeRouteEnter",t,e),n.push(o),ut(n)))).then((()=>{n=[];for(const r of g.list())n.push(qt(r,t,e));return n.push(o),ut(n)})).catch((t=>H(t,8)?t:Promise.reject(t)))}function z(t,e,n){y.list().forEach((r=>j((()=>r(t,e,n)))))}function W(t,e,n,r,s){const o=P(t,e);if(o)return o;const c=e===q,u=i?history.state:{};n&&(r||c?h.replace(t.fullPath,a({scroll:c&&u&&u.scroll},s)):h.push(t.fullPath,s)),v.value=t,rt(t,e,n,c),nt()}let Q;function J(){Q||(Q=h.listen(((t,e,n)=>{if(!ct.listening)return;const r=x(t),s=V(r);if(s)return void U(a(s,{replace:!0}),r).catch(u);w=r;const o=v.value;i&&R(N(o.fullPath,n.delta),k()),K(r,o).catch((t=>H(t,12)?t:H(t,2)?(U(t.to,r).then((t=>{H(t,20)&&!n.delta&&n.type===E.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),tt(t,r,o)))).then((t=>{t=t||W(r,o,!1),t&&(n.delta&&!H(t,8)?h.go(-n.delta,!1):n.type===E.pop&&H(t,20)&&h.go(-1,!1)),z(r,o,t)})).catch(u)})))}let Y,X=$t(),Z=$t();function tt(t,e,n){nt(t);const r=Z.list();return r.length?r.forEach((r=>r(t,e,n))):console.error(t),Promise.reject(t)}function et(){return Y&&v.value!==q?Promise.resolve():new Promise(((t,e)=>{X.add([t,e])}))}function nt(t){return Y||(Y=!t,J(),X.list().forEach((([e,n])=>t?n(t):e())),X.reset()),t}function rt(e,n,s,o){const{scrollBehavior:a}=t;if(!i||!a)return Promise.resolve();const c=!s&&O(N(e.fullPath,0))||(o||!s)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(e,n,c))).then((t=>t&&D(t))).catch((t=>tt(t,e,n)))}const st=t=>h.go(t);let ot;const at=new Set,ct={currentRoute:v,listening:!0,addRoute:C,removeRoute:S,hasRoute:A,getRoutes:I,resolve:x,options:t,push:M,replace:F,go:st,back:()=>st(-1),forward:()=>st(1),beforeEach:f.add,beforeResolve:g.add,afterEach:y.add,onError:Z.add,isReady:et,install(t){const e=this;t.component("RouterLink",Wt),t.component("RouterView",ee),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,s.SU)(v)}),i&&!ot&&v.value===q&&(ot=!0,M(h.location).catch((t=>{0})));const n={};for(const s in q)Object.defineProperty(n,s,{get:()=>v.value[s],enumerable:!0});t.provide(Ut,e),t.provide(Bt,(0,s.Um)(n)),t.provide(jt,v);const r=t.unmount;at.add(t),t.unmount=function(){at.delete(t),at.size<1&&(w=q,Q&&Q(),Q=null,v.value=q,ot=!1,Y=!1),r()}}};function ut(t){return t.reduce(((t,e)=>t.then((()=>j(e)))),Promise.resolve())}return ct}function re(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const i=e.matched[o];i&&(t.matched.find((t=>y(t,i)))?r.push(i):n.push(i));const a=t.matched[o];a&&(e.matched.find((t=>y(t,a)))||s.push(a))}return[n,r,s]}}}]);
//# sourceMappingURL=chunk-vendors.ea164e66.js.map