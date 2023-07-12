/*! For license information please see 6643.d8de8a86.js.LICENSE.txt */
"use strict";(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[6643,7239,4908,9151,6481,3978,4345,9583,3286,8786,8157,627,17,9005,8111],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},i=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,b=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return r?a.createElement(b,u(u({ref:t},i),{},{components:r})):a.createElement(b,u({ref:t},i))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,u=new Array(o);u[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,u[1]=l;for(var c=2;c<o;c++)u[c]=r[c];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(7294),n=r(6010);const o={tabItem:"tabItem_Ymn6"};function u(e){let{children:t,hidden:r,className:u}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,u),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(3117),n=r(7294),o=r(6010),u=r(2466),l=r(6775),s=r(1980),c=r(7392),i=r(12);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[u,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=b({queryString:r,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,i.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),m=(()=>{const e=s??p;return f({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{m&&l(m)}),[m]);return{selectedValue:u,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var m=r(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:p}=(0,u.o5)(),d=e=>{const t=e.currentTarget,r=i.indexOf(t),a=c[r].value;a!==l&&(p(t),s(a))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:u}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>i.push(e),onKeyDown:f,onClick:d},u,{className:(0,o.Z)("tabs__item",y.tabItem,u?.className,{"tabs__item--active":l===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=h(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},n.createElement(g,(0,a.Z)({},e,t)),n.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,m.Z)();return n.createElement(k,(0,a.Z)({key:String(t)},e))}},5774:(e,t,r)=>{r.d(t,{Ip:()=>i});var a=r(7294),n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},n(e,t)};var o=50,u=50;function l(e){var t=e.className,r=e.counterClockwise,n=e.dashRatio,o=e.pathRadius,u=e.strokeWidth,l=e.style;return(0,a.createElement)("path",{className:t,style:Object.assign({},l,c({pathRadius:o,dashRatio:n,counterClockwise:r})),d:s({pathRadius:o,counterClockwise:r}),strokeWidth:u,fillOpacity:0})}function s(e){var t=e.pathRadius,r=e.counterClockwise?1:0;return"\n      M "+o+","+u+"\n      m 0,-"+t+"\n      a "+t+","+t+" "+r+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+r+" 1 1 0,-"+2*t+"\n    "}function c(e){var t=e.counterClockwise,r=e.dashRatio,a=e.pathRadius,n=2*Math.PI*a,o=(1-r)*n;return{strokeDasharray:n+"px "+n+"px",strokeDashoffset:(t?-o:o)+"px"}}var i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,r=e.minValue,a=e.maxValue;return(Math.min(Math.max(t,r),a)-r)/(a-r)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,r=e.className,n=e.classes,s=e.counterClockwise,c=e.styles,i=e.strokeWidth,p=e.text,d=this.getPathRadius(),f=this.getPathRatio();return(0,a.createElement)("svg",{className:n.root+" "+r,style:c.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,a.createElement)("circle",{className:n.background,style:c.background,cx:o,cy:u,r:50}):null,(0,a.createElement)(l,{className:n.trail,counterClockwise:s,dashRatio:t,pathRadius:d,strokeWidth:i,style:c.trail}),(0,a.createElement)(l,{className:n.path,counterClockwise:s,dashRatio:f*t,pathRadius:d,strokeWidth:i,style:c.path}),p?(0,a.createElement)("text",{className:n.text,style:c.text,x:o,y:u},p):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(a.Component)}}]);