(()=>{var n={1375:function(n){!function(t){"use strict";var r={h:function(n){return n.map((function(n){return String.fromCharCode(n)})).join("")},l:function(n){return n.split("").map((function(n){return n.charCodeAt(0)}))}};r.v={h:function(n){return decodeURIComponent(escape(r.h(n)))},l:function(n){return r.l(unescape(encodeURIComponent(n)))}},n.exports?n.exports=r:t.p=r}(this)},2287:function(n){!function(t){"use strict";var r={V:function(n){return function(n){return n.map((function(n){return t=n.toString(16),r=2,t.length>r?t:Array(r-t.length+1).join("0")+t;var t,r})).join("")}(n)},J:function(n){if(n.length%2==1)throw new Error("hexToBytes can't have a string with an odd number of characters.");return 0===n.indexOf("0x")&&(n=n.slice(2)),n.match(/../g).map((function(n){return parseInt(n,16)}))}};n.exports?n.exports=r:t.H=r}(this)},9083:function(n,t,r){!function(t){"use strict";var i={};n.exports?(i.V=r(2287).V,i.p=r(1375),n.exports=a):(i.V=t.H.V,i.p=t.p,t.hi=a);var e=[];!function(){function n(n){for(var t=Math.sqrt(n),r=2;r<=t;r++)if(!(n%r))return!1;return!0}function t(n){return 4294967296*(n-(0|n))|0}for(var r=2,i=0;i<64;)n(r)&&(e[i]=t(Math.pow(r,1/3)),i++),r++}();var u=function(n){for(var t=[],r=0,i=0;r<n.length;r++,i+=8)t[i>>>5]|=n[r]<<24-i%32;return t},o=function(n){for(var t=[],r=0;r<32*n.length;r+=8)t.push(n[r>>>5]>>>24-r%32&255);return t},c=[],f=function(n,t,r){for(var i=n[0],u=n[1],o=n[2],f=n[3],a=n[4],s=n[5],l=n[6],h=n[7],v=0;v<64;v++){if(v<16)c[v]=0|t[r+v];else{var d=c[v-15],b=(d<<25|d>>>7)^(d<<14|d>>>18)^d>>>3,p=c[v-2],m=(p<<15|p>>>17)^(p<<13|p>>>19)^p>>>10;c[v]=b+c[v-7]+m+c[v-16]}var y=i&u^i&o^u&o,w=(i<<30|i>>>2)^(i<<19|i>>>13)^(i<<10|i>>>22),g=h+((a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25))+(a&s^~a&l)+e[v]+c[v];h=l,l=s,s=a,a=f+g|0,f=o,o=u,u=i,i=g+(w+y)|0}n[0]=n[0]+i|0,n[1]=n[1]+u|0,n[2]=n[2]+o|0,n[3]=n[3]+f|0,n[4]=n[4]+a|0,n[5]=n[5]+s|0,n[6]=n[6]+l|0,n[7]=n[7]+h|0};function a(n,t){n.constructor===String&&(n=i.p.v.l(n));var r=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],e=u(n),c=8*n.length;e[c>>5]|=128<<24-c%32,e[15+(c+64>>9<<4)]=c;for(var a=0;a<e.length;a+=16)f(r,e,a);var s=o(r);return t&&t.fi?s:t&&t.li?i.p.h(s):i.V(s)}a.x2=function(n,t){return a(a(n,{fi:!0}),t)}}(this)}},t={};function r(i){var e=t[i];if(void 0!==e)return e.exports;var u=t[i]={exports:{}};return n[i].call(u.exports,u,u.exports,r),u.exports}r.n=n=>{var t=n&&n.t?()=>n.default:()=>n;return r.d(t,{a:t}),t},r.d=(n,t)=>{for(var i in t)r.Yt(t,i)&&!r.Yt(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:t[i]})},r.Yt=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{"use strict";var n,t,i=function(n){this.be=n},e=function(){function n(n){this.be=n}return n.prototype.Dc=function(n,t){return this.initEvent(n,t)},n.prototype.send=function(n,t){this.be.send(n,t)},n}(),u=function(){return u=Object.assign||function(n){for(var t,r=1,i=arguments.length;r<i;r++)for(var e in t=arguments[r])Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n},u.apply(this,arguments)},o=function(){function n(n){this.bu=null,this.data=this.so(n)}return n.prototype.$r=function(){return this.mu},n.prototype.getName=function(){return this.name},n.prototype.gu=function(){return this.bu},n.prototype.getData=function(){return u(u({Pi:this.mu,Ni:this.name},this._u),this.data)},n.prototype.yu=function(n){this._u=n},n}(),c="media_u";!function(n){n[n.SCRIPT=0]="SCRIPT",n[n.STYLE=1]="STYLE",n[n.HEAD=2]="HEAD",n[n.IFRAME=3]="IFRAME",n[n.OBJECT=4]="OBJECT"}(n||(n={})),function(n){n.IMG=" ",n.BR="\n"}(t||(t={}));var f=function(){function n(n,t){this.pe=n,this.we=t}return Object.defineProperty(n.prototype,"x",{get:function(){return this.pe},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"y",{get:function(){return this.we},enumerable:!1,configurable:!0}),n}(),a=(function(){function n(n,t){this.Jr=n,this.Hr=t}n.prototype.toString=function(){return"".concat(this.Jr,"x").concat(this.Hr)},Object.defineProperty(n.prototype,"width",{get:function(){return this.Jr},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"height",{get:function(){return this.Hr},enumerable:!1,configurable:!0})}(),window.navigator.userAgent,function(n,t){return"[".concat(n).concat(t?"=".concat(t):"","]")}),s=function(n,t){try{return t&&t instanceof Element&&(t.querySelectorAll,1)?t.querySelectorAll(n):document.querySelectorAll(n)}catch(n){return[]}},l=function(r,i){if(!r||r.nodeName in n);else if(r.nodeType===Node.TEXT_NODE)i.push(String(r.nodeValue).replace(/(\r\n|\r|\n)/g,""));else if(r.nodeName in t)i.push(t[r.nodeName]);else for(var e=r.firstChild;e;)l(e,i),e=e.nextSibling},h=function(n){var t,r=[];return l(n,r)," "!==(t=(t=r.join("")).replace(/ +/g," "))&&(t=t.replace(/^\s*/,"")),t},v=function(n,t){return n&&n.getAttribute(t)||""},d=function(n){return"string"==typeof n},b=function(n){var t=typeof n;return"object"===t&&null!==n||"function"===t},p=function(n){return Array.isArray(n)};var m,y=function(n){try{return JSON.parse(n)}catch(n){}return null},w=function(){function n(){}var t;return n.isEnabled=function(){try{return this.store,!0}catch(n){return!1}},n.set=function(n,t,r){if(this.store){var i="".concat(this.prefix,"_").concat(n);if(r)this.setItem(i,String(t));else switch(!0){case"boolean"==typeof t:this.setItem(i,"".concat("b").concat(this.separator).concat(JSON.stringify(t)));break;case d(t):this.setItem(i,"".concat("s").concat(this.separator).concat(t))}}},n.get=function(n,t){if(!this.store)return null;var r="".concat(this.prefix,"_").concat(n),i=this.getItem(r)||"";if(!i)return null;if(t)return i;var e=i.split(this.separator),u=e[0],o=e[1];switch(u){case"b":return JSON.parse(o);case"s":return o}return null},n.remove=function(n){if(this.store){var t="".concat(this.prefix,"_").concat(n);try{this.store.removeItem(t)}catch(n){}}},n.dh=function(){try{return window.localStorage}catch(n){return null}},n.getItem=function(n){if(!this.store)return null;try{return this.store.getItem(n)}catch(n){return null}},n.setItem=function(n,t){if(this.store)try{this.store.setItem(n,t)}catch(n){}},t=n,n.prefix="_top100",n.separator=":",n.store=t.dh(),n}(),g=function(n,t){return t?n.split("?")[0]:n},_=(m=function(n,t){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])},m(n,t)},function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}m(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),O=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.mu="media",t.name="page_view",t}return _(t,n),t.prototype.so=function(n){var t,r=n.data,i=n.nu.getSettings(),e=JSON.parse(JSON.stringify(r)),u=document.referrer||"",o=r.url;if(!o){var f=a("rel","canonical"),l=s(f);o=l[0]&&v(l[0],"href")||location.href.split("#")[0]}if(e.url=g(o,i.Te),r.title||(e.title=function(){var n=s("title"),t="";return 0!==n.length&&(t=h(n[0])),t}()),e.itemId&&(e.itemId="".concat(i.io,"_").concat(e.itemId)),(null===(t=e.Ai)||void 0===t?void 0:t.id)&&(e.Ai.id="".concat(i.io,"_").concat(e.Ai.id)),w.isEnabled()){var d=w.get(c,!0),b=d?"".concat(d,","):"",p=!1;if(d){var m=d.split(","),y=!!~m.indexOf(u);p=!!~m.indexOf(e.url),e.Mi=y?1:0}else e.Mi=0;p||w.set(c,"".concat(b).concat(e.url),!0)}return{jr:e,referrer:u}},t}(o),j=function(){},S=r(9083),E=r.n(S),T=function(n){var t=0,r=n?function(n){var t=n.getBoundingClientRect(),r=document.body,i=document.documentElement,e=window.scrollY||i.scrollTop||r.scrollTop,u=window.scrollX||i.scrollLeft||r.scrollLeft,o=i.clientTop||r.clientTop||0,c=i.clientLeft||r.clientLeft||0;return new f(t.left+u-c,t.top+e-o)}(n):null;return r&&r.y&&(t=parseInt("".concat(r.y),10)),t},A=function(n){var t=h(n);return t?t.length:0},x=function(n){var t=h(n);return t?t.split(" ").length:0},k=function(n){var t=n&&s("img",n);return t?t.length:0},C=function(n){return{height:(t=n,t?t.offsetHeight:0),start:T(n),symbols:A(n),Ii:x(n),images:k(n)};var t},I=function(n){var t=n.reduce((function(n,t){return n?t.position>n.position?t:n:t}),null);return t&&t.name||""},B=function(n){return d(n)?E()(n):""},N=function(){var n=function(t,r){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])},n(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function i(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),P=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.av="manual",t}return N(t,n),t.prototype.collect=function(n){var t={yi:this.av,title:n.title||null,type:n.type||null,itemId:n.itemId||null,url:n.url||null,description:n.description||null,Oi:n.themes||null,Si:{published:n.datePublished||null,Ti:n.dateModified||null},Ai:null,sizes:null},r=n.author;return r&&b(r)&&(t.Ai={name:r.name||null,id:d(r.id)&&B(r.id)||d(r.name)&&B(r.name)||null,url:r.url||null}),n.itemId?t.itemId=B(n.itemId.toString()):n.url&&n.title&&(t.itemId=B(n.url+n.title)),n.articleContainer instanceof HTMLElement&&(t.sizes=C(n.articleContainer)),t},t}(j),M=["BlogPosting","NewsArticle","Article","WebPage","News"],J=["BreadcrumbList"],L=function(n){var t={};if(!n)return t;for(var r in n)t[r]=n[r];return t},R=function(n,t){return"__proto__"===t?null:n&&void 0!==t?n[t]:null},H=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];if(n.length<1||!b(n[0]))return null;if(n.length<2)return n[0];var r=n[0];return n.forEach((function(n){b(n)&&null!==n&&!p(n)&&Object.keys(n).forEach((function(t){var i=R(r,t),e=R(n,t);e!==r&&(b(e)&&null!==e?p(e)?r[t]=W(e):!b(i)||null===i||p(i)?r[t]=L(e):r[t]=H(i,e):r[t]=e)}))})),r},z=function(n,t){return function(n,t,r){return Array.prototype.indexOf.call(n,t,r)}(n,t)>=0},D=function(n,t,r){var i=function(n,t,r){for(var i=n.length,e=d(n)?n.split(""):n,u=i-1;u>=0;u--)if(u in e&&t.call(r,e[u],u,n))return u;return-1}(n,t,r);return i<0?null:d(n)?n.charAt(i):n[i]};var F,U,V,W=function(n){var t=[];return n.forEach((function(n,r){b(n)&&null!==n?Array.isArray(n)?t[r]=W(n):t[r]=L(n):t[r]=n})),t},Y=function(){var n=function(t,r){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])},n(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function i(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),q=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.av="micro",t}return Y(t,n),t.prototype.collect=function(){if(this.lv=t.hv(M),!this.lv)return null;if(this.lv===this.vv&&this.dv)return this.dv;this.vv=this.lv;var n={yi:this.av,type:t.bv(this.lv),itemId:v(this.lv,"data-id"),Ai:null,Si:null};H(n,this.pv()),H(n,this.mv()),H(n,t.yv(this.lv));var r=t.hv(J);return r&&(n.Oi=t.wv(r)),n.itemId?n.itemId=B(n.itemId.toString()):n.itemId=B(n.url+n.title),this.dv=n,n},t.bv=function(n){var t=n&&n.getAttribute("itemtype");return t&&t.split("schema.org/")[1]||""},t.wv=function(n){var t=a("itemprop","itemListElement"),r=function(n){if(n instanceof Set){var t=[];return n.forEach((function(n){return t.push(n)})),t}return Array.prototype.slice.call(n)}(s(t,n)).map((function(n){var t=s(a("itemprop","name"),n)[0],r=s(a("itemprop","position"),n)[0];return t&&r?{name:t.innerText,position:parseInt(v(r,"content"),10)}:null}));return I(r.filter((function(n){return n})))},t.hv=function(n){var r=a("itemscope"),i=s(r);return D(i,(function(r){var i=t.bv(r);return r.children.length&&z(n,i)}))},t.yv=function(n,t){var r=a("itemprop"),i=s(r,n);if(0===i.length)return{};var e={Ai:{},Si:{}};return i.forEach((function(n){switch(v(n,"itemprop")){case"identifier":if(e.itemId)return;var r=v(n,"content");r.length>2&&(e.itemId=r);break;case"headline":e.title=h(n);break;case"datePublished":if(!e.Si)break;e.Si.published=v(n,"content")||v(n,"datetime");break;case"dateModified":if(!e.Si)break;e.Si.Ti=v(n,"content")||v(n,"datetime");break;case"genre":e.Oi=v(n,"content");break;case"description":case"abstract":e.description=h(n)||v(n,"content");break;case"articleBody":e.sizes=C(n);break;case"author":if(!e.Ai||!e.Ai.name)break;e.Ai.name=v(n,"content"),e.Ai.id=B(e.Ai.name);break;case"name":e.Ai&&"author"===t&&(e.Ai.name=v(n,"content"),e.Ai.id=B(e.Ai.name));break;case"url":e.Ai&&"author"===t&&(e.Ai.url=v(n,"href"))}})),e},t.prototype.mv=function(){var n=a("itemscope"),r=s(n,this.lv);if(0===r.length)return{};var i={};return r.forEach((function(n){if("author"===n.getAttribute("itemprop"))!function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r,i=n[0]||{},e=n.length,u=1;if("object"!=typeof i)return{};for(;u<e;){var o=n[u];if("object"==typeof o){r=Object.keys(o);for(var c=0;c<r.length;c++){var f=r[c];i[f]=o[f]}}u++}}(i,t.yv(n,"author"))})),i},t.prototype.pv=function(){var n=a("rel"),t=s(n,this.lv);if(0===t.length)return{};var r={};return t.forEach((function(n){"canonical"===n.getAttribute("rel")&&(r.url=v(n,"canonical"))})),r},t}(j),G=function(){var n=function(t,r){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])},n(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function i(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),K=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.av="ld",t}return G(t,n),t.prototype.collect=function(){var n,r,i,e,u,o,c,f,a,s,l;if(this.lv=t.hv(M),this.gv=y(this.lv&&this.lv.innerText),!this.gv)return null;var h={yi:this.av,type:null===(n=R(this.gv,"@type"))||void 0===n?void 0:n.toString(),title:null===(r=R(this.gv,"name")||R(this.gv,"headline")||document.title)||void 0===r?void 0:r.toString(),description:null===(i=R(this.gv,"description"))||void 0===i?void 0:i.toString(),Si:{published:null===(e=R(this.gv,"datePublished"))||void 0===e?void 0:e.toString(),Ti:null===(u=R(this.gv,"dateModified"))||void 0===u?void 0:u.toString()},sizes:this._v(),Oi:null===(o=R(this.gv,"articleSection"))||void 0===o?void 0:o.toString(),Ai:null};if(!h.Oi){var v=t.hv(J);v&&(h.Oi=t.wv(v))}var d=R(this.gv,"image");d&&d.length&&h.sizes&&(h.sizes.images=d.length);var b=R(this.gv,"author");if(b){var p=null===(c=R(b,"name"))||void 0===c?void 0:c.toString();p&&(h.Ai={name:p,url:null===(f=R(b,"url"))||void 0===f?void 0:f.toString(),id:B(p)})}var m=R(this.gv,"mainEntityOfPage");h.url=null===(a=m?R(m,"@id"):R(this.gv,"url"))||void 0===a?void 0:a.toString();var w=R(this.gv,"identifier"),g=null===(s=R(w,"propertyID"))||void 0===s?void 0:s.toString();return"mediaId"!==g&&"Article id"!==g||(h.itemId=null===(l=R(w,"value"))||void 0===l?void 0:l.toString()),h.itemId?h.itemId=B(h.itemId.toString()):h.itemId=B(h.url+h.title),h},t.wv=function(n){var t=y(n.innerText)||{},r=R(t,"itemListElement");return p(r)?I(r):""},t.hv=function(n){var t=a('type="application/ld+json"'),r=s(t);return D(r,(function(t){var r=t.innerText;return!!D(n,(function(n){return!!~r.indexOf(n)}))}))},t.prototype.Ov=function(n){var t=R(this.gv,n);return t?R(t,"@id"):null},t.prototype.jv=function(){var n,t=document.body,r=null===(n=this.Ov("mainEntityOfPage")||this.Ov("mainEntity")||R(this.gv,"@id"))||void 0===n?void 0:n.toString(),i=r&&r.split("#")[1];return i&&(t=document.getElementById(i)),t},t.prototype._v=function(){var n;return n=this.lv&&function(n,t){for(var r=n;r;){if(r.matches(t))return r;r=r.parentElement}return null}(this.lv,"body")?this.lv.parentNode:this.jv(),C(n)},t}(j),Q=function(){var n=function(t,r){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])},n(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function i(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),X=function(n){function t(t,r){var i,e=n.call(this,t)||this;return e.Sv={},e.Ev=((i={}).manual=new P,i.micro=new q,i.ld=new K,i),e.media=r,e}return Q(t,n),t.prototype.jc=function(){return this.Sv},t.prototype.track=function(n,r){var i=this.initEvent(n,r);if(i){var e,u=n.getSettings();e=this.Sv,Object.keys(e).length||this.Tv(i,u.io),this.media.Av(u.io),this.send(i,{nu:n,Rc:t.xv(r.data)})}},t.prototype.initEvent=function(n,t){var r=this.so(t.data);return r?new O({data:r,nu:n}):null},t.xv=function(n){return n&&b(n)},t.prototype.so=function(n){var r=this.Ev,i=r.micro,e=r.manual,u=r.ld;return t.xv(n)?e.collect(n):i.collect()||u.collect()},t.prototype.Tv=function(n,t){var r=n.getData();this.Sv.itemId=String(r.jr.itemId).replace("".concat(t,"_"),""),this.Sv.url=r.jr.url,this.Sv.sizes=r.jr.sizes},t}(e),Z=function(){var n=function(t,r){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])},n(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function i(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),$=function(n){function t(t,r){var i=n.call(this,t)||this;return i.no={kv:{js:null}},i.media=r,i.no.kv.js=new X(t,i.media),i}return Z(t,n),t.prototype.jc=function(){var n=this.no.kv;return n.js?n.js.jc():null},t.prototype.rf=function(n,t){var r=this.no.kv;r.js&&r.js.track(n,t)},t}(i),nn=function(n){this.be=n,this.listeners=n.wu()},tn="module_init",rn=function(){var n=function(t,r){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])},n(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function i(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),en=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.Cv=new Set,t.gh=new $(t.be,t),t}return rn(t,n),t.prototype.cu=function(){return this.gh},t.prototype.Av=function(n){this.Cv.add(n)},t.prototype.fl=function(n){this.Cv.delete(n)},t.prototype.if=function(n){var t=n.getSettings().io;return this.Cv.has(t)},t}(nn);F="media",U=en,(V=window._top100?window._top100.getListeners():null)&&V.publish(tn,F,U)})()})();