!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o,r,l,u,i,_={},c=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function p(e,t){for(var n in t)e[n]=t[n];return e}function f(e){var t=e.parentNode;t&&t.removeChild(e)}function a(e,t,n){var o,r,l,u,i=arguments;if(t=p({},t),arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(i[o]);if(null!=n&&(t.children=n),null!=e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===t[r]&&(t[r]=e.defaultProps[r]);return u=t.key,null!=(l=t.ref)&&delete t.ref,null!=u&&delete t.key,d(e,t,u,l)}function d(e,t,n,r){var l={type:e,props:t,key:n,ref:r,__k:null,__p:null,__b:0,__e:null,__d:null,__c:null,constructor:void 0};return o.vnode&&o.vnode(l),l}function h(e){return e.children}function y(e,t){this.props=e,this.context=t}function v(e,t){if(null==t)return e.__p?v(e.__p,e.__p.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?v(e):null}function m(e){var t,n;if(null!=(e=e.__p)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return m(e)}}function b(e){(!e.__d&&(e.__d=!0)&&1===r.push(e)||u!==o.debounceRendering)&&(u=o.debounceRendering,(o.debounceRendering||l)(g))}function g(){var e,t,n,o,l,u,i;for(r.sort((function(e,t){return t.__v.__b-e.__v.__b}));e=r.pop();)e.__d&&(n=void 0,o=void 0,u=(l=(t=e).__v).__e,(i=t.__P)&&(n=[],o=E(i,l,p({},l),t.__n,void 0!==i.ownerSVGElement,null,n,null==u?v(l):u),O(n,l),o!=u&&m(l)))}function k(e,t,n,o,r,l,u,i,s){var p,a,d,h,y,m,b,g=n&&n.__k||c,k=g.length;if(i==_&&(i=null!=l?l[0]:k?v(n,0):null),p=0,t.__k=w(t.__k,(function(n){if(null!=n){if(n.__p=t,n.__b=t.__b+1,null===(d=g[p])||d&&n.key==d.key&&n.type===d.type)g[p]=void 0;else for(a=0;a<k;a++){if((d=g[a])&&n.key==d.key&&n.type===d.type){g[a]=void 0;break}d=null}if(h=E(e,n,d=d||_,o,r,l,u,i,s),(a=n.ref)&&d.ref!=a&&(b||(b=[])).push(a,n.__c||h,n),null!=h){if(null==m&&(m=h),null!=n.__d)h=n.__d,n.__d=null;else if(l==d||h!=i||null==h.parentNode){e:if(null==i||i.parentNode!==e)e.appendChild(h);else{for(y=i,a=0;(y=y.nextSibling)&&a<k;a+=2)if(y==h)break e;e.insertBefore(h,i)}"option"==t.type&&(e.value="")}i=h.nextSibling,"function"==typeof t.type&&(t.__d=h)}}return p++,n})),t.__e=m,null!=l&&"function"!=typeof t.type)for(p=l.length;p--;)null!=l[p]&&f(l[p]);for(p=k;p--;)null!=g[p]&&T(g[p],g[p]);if(b)for(p=0;p<b.length;p++)j(b[p],b[++p],b[++p])}function w(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var o=0;o<e.length;o++)w(e[o],t,n);else n.push(t?t("string"==typeof e||"number"==typeof e?d(null,e,null,null):null!=e.__e||null!=e.__c?d(e.type,e.props,e.key,null):e):e);return n}function S(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===s.test(t)?n+"px":null==n?"":n}function x(e,t,n,o,r){var l,u,i,_,c;if("key"===(t=r?"className"===t?"class":t:"class"===t?"className":t)||"children"===t);else if("style"===t)if(l=e.style,"string"==typeof n)l.cssText=n;else{if("string"==typeof o&&(l.cssText="",o=null),o)for(u in o)n&&u in n||S(l,u,"");if(n)for(i in n)o&&n[i]===o[i]||S(l,i,n[i])}else"o"===t[0]&&"n"===t[1]?(_=t!==(t=t.replace(/Capture$/,"")),c=t.toLowerCase(),t=(c in e?c:t).slice(2),n?(o||e.addEventListener(t,P,_),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,P,_)):"list"!==t&&"tagName"!==t&&"form"!==t&&!r&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n?e.removeAttribute(t):e.setAttribute(t,n))}function P(e){this.l[e.type](o.event?o.event(e):e)}function E(e,t,n,r,l,u,i,_,c){var s,f,a,d,v,m,b,g,S,x,P=t.type;if(void 0!==t.constructor)return null;(s=o.__b)&&s(t);try{e:if("function"==typeof P){if(g=t.props,S=(s=P.contextType)&&r[s.__c],x=s?S?S.props.value:s.__p:r,n.__c?b=(f=t.__c=n.__c).__p=f.__E:("prototype"in P&&P.prototype.render?t.__c=f=new P(g,x):(t.__c=f=new y(g,x),f.constructor=P,f.render=D),S&&S.sub(f),f.props=g,f.state||(f.state={}),f.context=x,f.__n=r,a=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=P.getDerivedStateFromProps&&p(f.__s==f.state?f.__s=p({},f.__s):f.__s,P.getDerivedStateFromProps(g,f.__s)),d=f.props,v=f.state,a)null==P.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==P.getDerivedStateFromProps&&null==f.__e&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(g,x),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(g,f.__s,x)){for(f.props=g,f.state=f.__s,f.__d=!1,f.__v=t,t.__e=n.__e,t.__k=n.__k,s=0;s<t.__k.length;s++)t.__k[s]&&(t.__k[s].__p=t);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(g,f.__s,x),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(d,v,m)}))}f.context=x,f.props=g,f.state=f.__s,(s=o.__r)&&s(t),f.__d=!1,f.__v=t,f.__P=e,s=f.render(f.props,f.state,f.context),t.__k=w(null!=s&&s.type==h&&null==s.key?s.props.children:s),null!=f.getChildContext&&(r=p(p({},r),f.getChildContext())),a||null==f.getSnapshotBeforeUpdate||(m=f.getSnapshotBeforeUpdate(d,v)),k(e,t,n,r,l,u,i,_,c),f.base=t.__e,f.__h.length&&i.push(f),b&&(f.__E=f.__p=null),f.__e=null}else t.__e=C(n.__e,t,n,r,l,u,i,c);(s=o.diffed)&&s(t)}catch(e){o.__e(e,t,n)}return t.__e}function O(e,t){o.__c&&o.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){o.__e(e,t.__v)}}))}function C(e,t,n,o,r,l,u,i){var s,p,f,a,d,h=n.props,y=t.props;if(r="svg"===t.type||r,null==e&&null!=l)for(s=0;s<l.length;s++)if(null!=(p=l[s])&&(null===t.type?3===p.nodeType:p.localName===t.type)){e=p,l[s]=null;break}if(null==e){if(null===t.type)return document.createTextNode(y);e=r?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type),l=null}if(null===t.type)null!=l&&(l[l.indexOf(e)]=null),h!==y&&(e.data=y);else if(t!==n){if(null!=l&&(l=c.slice.call(e.childNodes)),f=(h=n.props||_).dangerouslySetInnerHTML,a=y.dangerouslySetInnerHTML,!i){if(h===_)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(a||f)&&(a&&f&&a.__html==f.__html||(e.innerHTML=a&&a.__html||""))}(function(e,t,n,o,r){var l;for(l in n)l in t||x(e,l,null,n[l],o);for(l in t)r&&"function"!=typeof t[l]||"value"===l||"checked"===l||n[l]===t[l]||x(e,l,t[l],n[l],o)})(e,y,h,r,i),t.__k=t.props.children,a||k(e,t,n,o,"foreignObject"!==t.type&&r,l,u,_,i),i||("value"in y&&void 0!==y.value&&y.value!==e.value&&(e.value=null==y.value?"":y.value),"checked"in y&&void 0!==y.checked&&y.checked!==e.checked&&(e.checked=y.checked))}return e}function j(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){o.__e(e,n)}}function T(e,t,n){var r,l,u;if(o.unmount&&o.unmount(e),(r=e.ref)&&j(r,null,t),n||"function"==typeof e.type||(n=null!=(l=e.__e)),e.__e=e.__d=null,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){o.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(u=0;u<r.length;u++)r[u]&&T(r[u],t,n);null!=l&&f(l)}function D(e,t,n){return this.constructor(e,n)}function M(e,t,n){var r,l,u;o.__p&&o.__p(e,t),l=(r=n===i)?null:n&&n.__k||t.__k,e=a(h,null,[e]),u=[],E(t,(r?t:n||t).__k=e,l||_,_,void 0!==t.ownerSVGElement,n&&!r?[n]:l?null:c.slice.call(t.childNodes),u,n||_,r),O(u,e)}o={},y.prototype.setState=function(e,t){var n=this.__s!==this.state&&this.__s||(this.__s=p({},this.state));("function"!=typeof e||(e=e(n,this.props)))&&p(n,e),null!=e&&this.__v&&(this.__e=!1,t&&this.__h.push(t),b(this))},y.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),b(this))},y.prototype.render=h,r=[],l="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,u=o.debounceRendering,o.__e=function(e,t,n){for(var o;t=t.__p;)if((o=t.__c)&&!o.__p)try{if(o.constructor&&null!=o.constructor.getDerivedStateFromError)o.setState(o.constructor.getDerivedStateFromError(e));else{if(null==o.componentDidCatch)continue;o.componentDidCatch(e)}return b(o.__E=o)}catch(t){e=t}throw e},i=_;function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function U(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}window.globalCounts=[];for(var A=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=U(this,W(t).call(this,e))).state={expanding:!0,width:e.width||1,count:e.count||0,reps:0},n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("stopEvent",(function(){globalCounts.push(e.state.reps)})),setInterval((function(){e.state.expanding?e.setState({width:++e.state.width,count:e.state.count+1,reps:e.state.reps+1},(function(){e.state.width>=250&&e.setState({expanding:!1})})):e.setState({width:--e.state.width,count:e.state.count-1,reps:e.state.reps+1},(function(){0===e.state.width&&e.setState({expanding:!0})}))}),1)}},{key:"render",value:function(){return a("div",{style:{height:"20px",width:"".concat(this.state.width,"px"),border:"1px solid"}},a("p",null,this.state.count))}}])&&L(n.prototype,o),r&&L(n,r),t}(y),F=[],I=0;I<100;I++)F.push(I);var B=function(){return a(h,null,F.map((function(e,t){return a(A,{key:t,count:0,width:0})})))},H=new Event("stopEvent");setTimeout((function(){document.dispatchEvent(H)}),6e4),document.addEventListener("DOMContentLoaded",(function(){M(a(B,null),document.getElementById("root"))}))}]);