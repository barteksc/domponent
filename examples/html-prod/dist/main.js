!function(t){var e={};function s(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=2)}([function(t,e,s){!function(t){"use strict";const e={component:"component",key:"key",props:"props",action:"action",state:"state",bind:"bind",ref:"ref"},s={INHERITS_FROM:"<-",FROM_COMPONENT:".",KEY_VALUE:":",MULTIPLE_VALUES:"|",METHOD_CALL:"->",LIST:","},n={ONCE:"once",PASSIVE:"passive",CAPTURE:"capture"};class o{constructor(t){this.$root=t.element,this.$app=t.app,this.$key=t.key,this.$name=t.element.getAttribute(`data-${this.$app.$datasets.component}`)}}function i(t,e){t.textContent=e}function a(t){return t.trim().split(s.KEY_VALUE)}function r(t){return t.trim().split(s.MULTIPLE_VALUES)}function c(t){return t.trim().split(s.FROM_COMPONENT)}function l(){this.$b=[],h.call(this,`[data-${this.$app.$datasets.action}]`).forEach(t=>{const e=r(t.getAttribute(`data-${this.$app.$datasets.action}`)),o={el:t,actions:[]};e.forEach(e=>{const i=function(t){return e.trim().split(s.METHOD_CALL)}(),a=i[0],r=c(i[1]);if(r[0]===this.$name){let e={};if(r[2]){const t=function(t){return r[2].trim().split(s.LIST)}();for(let s in n)e[n[s]]=t.includes(n[s])}const i=this[r[1]].bind(this);t.addEventListener(a,i,e),o.actions.push({event:a,handler:i,options:e})}},this),this.$b.push(o)},this)}function p(t){this.$d.forEach(e=>{(function(t){this.propsWillUpdate();const e=Object.assign({},this.props);for(let e in this.$p){const s=this.$p[e];t.includes(this.$p[e].parentComponentKey)&&(this.props[e]=s.parentComponent.state[s.parentComponentKey],this.$p[e].els&&this.$p[e].els.forEach(t=>{updateDOM(t,this.props[e])}))}this.propsDidUpdate(e)}).call(this.$app.registeredComponents[e],t)})}function d(){const t=this.$root.getAttribute(`data-${this.$app.$datasets.props}`);if(t){const e={};return r(t).forEach(t=>{const n=function(t){return t.trim().split(s.INHERITS_FROM)}(t),o=a(n[1]),i=n[0],r=this.$app.registeredComponents[o[0]],c=o[1];r.$d.add(this.$key);const l=[...h.call(this,`[${this.$app.$datasets.bind}^="props:${i}"]`)];this.props[i]=r.state[c],e[i]={parentComponent:r,parentComponentKey:c,els:l.length>0?l:null}},this),e}return null}function h(t){return[...this.$root.querySelectorAll(t)].filter(t=>t.closest(`[data-${this.$app.$datasets.component}="${this.$root.getAttribute("data-"+this.$app.$datasets.component)}"]`)===this.$root)}class u extends o{constructor(t,e=!1){super(t),this.connecting(),this.props={},this.$d=new Set,this.$p=d.call(this),l.call(this),function(){h.call(this,`[data-${this.$app.$datasets.ref}]`).forEach(t=>{this[c(t.getAttribute(`data-${this.$app.$datasets.ref}`))[1]]=t})}.call(this),!e&&this.connected()}connecting(){}connected(){}disconnecting(){}propsWillUpdate(){}propsDidUpdate(){}}t.Component=class extends u{constructor(t){super(t,!0),this.state={},this.$s=function(){const t=h.call(this,`[data-${this.$app.$datasets.bind}^="state:"]`);if(t.length>0){const e={};return t.forEach(t=>{const s={};r(t.getAttribute(`data-${this.$app.$datasets.bind}`)).forEach(n=>{var o=c(a(n)[1])[1];s.el=t,e[o]||(e[o]=[]),e[o].push(s)})},this),e}return null}.call(this),function(){const t=this.$root.getAttribute(`data-${this.$app.$datasets.state}`);t&&this.setState(JSON.parse(t))}.call(this),this.connected()}stateWillUpdate(){}stateDidUpdate(){}setState(t=this.state,e){this.stateWillUpdate();const s=[];for(let e in t)t[e]!==this.state[e]&&(s.push(e),this.state[e]=t[e],this.$s&&this.$s[e]&&this.$s[e].forEach(s=>{i(s.el,t[e])}));var n;this.$d.size>0&&p.call(this,s),(n=e)&&n(),this.stateDidUpdate()}},t.Exponent=u,t.Init=function(t){return this.components=t.components,this.registeredComponents={},this.$datasets=(()=>{const s=e;if(t.dataAttributes)for(let e in t.dataAttributes)s[e]=t.dataAttributes[e];return s})(),this._cc=(e,s)=>{const n=e.getAttribute(`data-${this.$datasets.key}`)||"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)});this.registeredComponents[n]=new(t.components[e.getAttribute(`data-${this.$datasets.component}`)])({element:e,key:n,app:this}),s&&s()},this._dc=(t,e)=>{this.registeredComponents[t].disconnecting(),function(){this.$b.forEach(t=>{console.log("binding",t),t.actions.forEach(e=>{t.el.removeEventListener(e.event,e.handler,e.options)},this)},this)}.call(this.registeredComponents[t]),delete this.registeredComponents[t],e&&e()},this._rc=(t,e,s)=>{this.components[t]=e,s&&s()},this._urc=(t,e)=>{delete this.component[t],e&&e()},[...t.selector.querySelectorAll(`[data-${this.$datasets.component}]`)].forEach(t=>{this._cc(t)},this),t.appCreated&&t.appCreated(),{createComponent:(t,e)=>this._cc(t,e),deleteComponent:(t,e)=>this._dc(t,e),register:(t,e,s)=>this._rc(t,e,s),unregister:(t,e)=>this._urc(t,e)}},Object.defineProperty(t,"__esModule",{value:!0})}(e)},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var n=s(0);s(1);feather.replace(),console.time("appCreation");const o=new n.Init({selector:document.getElementById("root"),components:{Counter:class extends n.Component{constructor(t){super(t),this.state={count:parseInt(this.state.count)||0,isEven:this.state.isEven},this.setState(this.state),this.setEven()}increment(t){const e={},s=parseInt(this.state.count+1,10);e.count=s,e.isEven=s%2==0,this.setState(e,()=>console.log("Single Callback",this))}decrement(t){const e={},s=parseInt(this.state.count-1,10);e.count=s,e.isEven=s%2==0,this.setState(e)}goBlue(t){t.target.style.color="blue"}goGreen(t){t.target.style.color="green"}stateDidUpdate(){this.setEven()}setEven(){this.state.isEven?this.$root.classList.add("even"):this.$root.classList.remove("even")}},Timer:class extends n.Component{constructor(t){super(t),this.state={hours:"",seconds:"",minutes:""},setInterval(()=>{this.changeTime()},1e3)}changeTime(){const t=new Date;this.setState({seconds:t.getSeconds(),hours:t.getHours(),minutes:t.getMinutes()})}},DisplayAnything:class extends n.Exponent{constructor(t){super(t),this.displayProps()}propsDidUpdate(){this.displayProps()}displayProps(){this.objects.innerHTML=JSON.stringify(this.props,null,1)}},Name:class extends n.Component{constructor(t){super(t),this.state={name:"Thomas"}}handleInput(t){this.setState({name:t.target.value})}stateWillUpdate(){this.secondInput=this.$root.querySelector(".above-controlled")}stateDidUpdate(){this.secondInput.value=this.state.name}},HoverLetter:class extends n.Exponent{constructor(t){super(t),this.styleID="hover-letter__style",this.splitWord()}splitWord(){let t=this.letters.textContent.toString().split("").map(t=>`<span tabindex="0" class="hoverable">${t}</span>`),e="";t.forEach(t=>e+=t),this.letters.innerHTML="",this.letters.innerHTML=e,document.getElementById(this.styleID)||this.placeStyles()}placeStyles(){const t=`<style id="${this.styleID}">\n        .hoverable{\n            transition: transform .25s;\n            display: inline-block;\n            cursor: pointer;\n        }\n        .hoverable:hover,\n        .hoverable:focus{\n            transform: scale(1.4);\n        }\n    </style>`;document.head.insertAdjacentHTML("beforeend",t)}},Navigation:class extends n.Component{constructor(t){if(super(t),this.styleID="collapse-comp-styles",this.changeNav=this.changeNav.bind(this),!document.getElementById(this.styleID)){const t=`<style id="${this.styleID}">\n            .fold {\n              display: block;\n              max-height: 0px;\n              overflow: hidden;\n              transition: max-height .5s cubic-bezier(0, 1, 0, 1);\n            }\n            .fold.show {\n                max-height: 99em;\n                transition: max-height .5s ease-in-out;\n              }\n        </style>`;document.head.insertAdjacentHTML("beforeend",t)}}toggle(){this.setState({opened:!this.state.opened},this.changeNav)}changeNav(){this.state.opened?(this.menu.classList.add("show"),this.open.style.display="none",this.close.style.display="block"):(this.menu.classList.remove("show"),this.open.style.display="block",this.close.style.display="none")}},ShowCode:class extends n.Component{constructor(t){if(super(t),this.styleID="collapse-comp-styles",!document.getElementById(this.styleID)){const t=`<style id="${this.styleID}">\n                  .fold {\n                    display: block;\n                    max-height: 0px;\n                    overflow: hidden;\n                    transition: max-height .5s cubic-bezier(0, 1, 0, 1);\n                  }\n                  .fold.show {\n                      max-height: 99em;\n                      transition: max-height .5s ease-in-out;\n                    }\n              </style>`;document.head.insertAdjacentHTML("beforeend",t)}}toggle(){console.log(this),this.foldable.classList.toggle("show")}}},appCreated:()=>console.log("app created")});console.timeEnd("appCreation"),window.DomponentApp=o,setTimeout(()=>{!function(t){const e=document.getElementById("async"),s=Math.floor(100*Math.random()),n=`\n    <div class="col-md-6">\n    <div id="${t}" data-component="Counter" class="card" data-state='{"count":${s},"isEven":${s%2==0}}'>\n    <div class="card-body">\n    <strong class="card-title" data-action="mousedown->Counter.goBlue|mouseup->Counter.goGreen">Async Counter</strong>\n    <div>count: <span data-bind="state:Counter.count"></span></div>\n    <button type="button" data-action="click->Counter.decrement" class="btn btn-danger">\n      <i aria-label="subtract" data-feather="minus-circle"></i>\n    </button>\n    \n    <button\n      type="button"\n      data-action="click->Counter.increment|mouseover->Counter.goBlue|mouseout->Counter.goGreen"\n      class="btn btn-success"\n    >\n      <i aria-label="add" data-feather="plus-circle"></i>\n    </button>\n    </div>\n    \n  </div>\n    </div>\n  <div class="col-md-6">\n    <div id="async-props" class="card" data-props="theSecond<-Time:seconds|theMinute<-Time:minutes|theHour<-Time:hours" data-component="DisplayAnything">\n      <div class="card-body">\n        <p class="card-title">\n          Asynchronously inherits props\n        </p>\n        <p>WHOOOOOOOOOOOA!</p>\n        <p>props:</p>\n        \n          <pre>\n            <code data-ref="DisplayAnything.objects">\n            </code>  \n          </pre>\n        \n      </div>\n    </div>\n  </div>\n  `;e.insertAdjacentHTML("beforeend",n)}("id2"),o.createComponent(document.getElementById("id2"),()=>feather.replace()),o.createComponent(document.getElementById("async-props"),()=>feather.replace())},1e3)}]);