(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[8592],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return b}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),g=l(t),b=i,d=g["".concat(s,".").concat(b)]||g[b]||p[b]||a;return t?r.createElement(d,o(o({ref:n},c),{},{components:t})):r.createElement(d,o({ref:n},c))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8215:function(e,n,t){"use strict";var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},9877:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(7462),i=t(7294),a=t(2389),o=t(5773),u=t(6010),s="tabItem_LplD";function l(e){var n,t,a,l=e.lazy,c=e.block,p=e.defaultValue,g=e.values,b=e.groupId,d=e.className,f=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=g?g:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,o.lx)(h,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var m=null===p?p:null!=(n=null!=p?p:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=f[0])?void 0:a.props.value;if(null!==m&&!h.some((function(e){return e.value===m})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+m+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.UB)(),q=y.tabGroupChoices,k=y.setTabGroupChoices,w=(0,i.useState)(m),O=w[0],P=w[1],x=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var C=q[b];null!=C&&C!==O&&h.some((function(e){return e.value===C}))&&P(C)}var j=function(e){var n=e.currentTarget,t=x.indexOf(n),r=h[t].value;r!==O&&(E(n),P(r),null!=b&&k(b,r))},N=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;t=x[r]||x[0];break;case"ArrowLeft":var i=x.indexOf(e.currentTarget)-1;t=x[i]||x[x.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},d)},h.map((function(e){var n=e.value,t=e.label,a=e.attributes;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return x.push(e)},onKeyDown:N,onFocus:j,onClick:j},a,{className:(0,u.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),l?(0,i.cloneElement)(f.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function c(e){var n=(0,a.Z)();return i.createElement(l,(0,r.Z)({key:String(n)},e))}},6679:function(e){e.exports={mainSidebar:["about","rules",{"\u521d\u5b66\u8005\u6307\u5357":["beginner","beginner/card-layout",{"\u5f85\u5f03\u724c\uff08The Chop\uff09":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - \u6253\u51fa\u63d0\u793a\uff08Play Clues\uff09":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - \u4fdd\u7559\u63d0\u793a\uff08Save Clues\uff09":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"\u63d0\u793a\u89e3\u8bfb\uff08Clue Interpretation\uff09":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - \u70b9\u4f18\u539f\u5219\uff08Good Touch Principle\uff09":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - \u4fdd\u7559\u539f\u5219\uff08Save Principle\uff09":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - \u6700\u5c0f\u63d0\u793a\u4ef7\u503c\u539f\u5219\uff08Minimum Clue Value Principle\uff09":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"\u5f00\u5c40\uff08The Early Game\uff09":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3"]},{"\u4e00\u822c\u7b56\u7565\uff08General Strategy\uff09":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"\u7279\u6b8a\u884c\u52a8\uff08Special Moves\uff09":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]}]}},4099:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var r=t(7855),i=t(7294),a=function(e,n){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])},a(e,n)};function o(e){var n=e.className,t=e.counterClockwise,r=e.dashRatio,a=e.pathRadius,o=e.strokeWidth,l=e.style;return(0,i.createElement)("path",{className:n,style:Object.assign({},l,s({pathRadius:a,dashRatio:r,counterClockwise:t})),d:u({pathRadius:a,counterClockwise:t}),strokeWidth:o,fillOpacity:0})}function u(e){var n=e.pathRadius,t=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+n+"\n      a "+n+","+n+" "+t+" 1 1 0,"+2*n+"\n      a "+n+","+n+" "+t+" 1 1 0,-"+2*n+"\n    "}function s(e){var n=e.counterClockwise,t=e.dashRatio,r=e.pathRadius,i=2*Math.PI*r,a=(1-t)*i;return{strokeDasharray:i+"px "+i+"px",strokeDashoffset:(n?-a:a)+"px"}}var l=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return function(e,n){function t(){this.constructor=e}a(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}(n,e),n.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},n.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},n.prototype.getPathRatio=function(){var e=this.props,n=e.value,t=e.minValue,r=e.maxValue;return(Math.min(Math.max(n,t),r)-t)/(r-t)},n.prototype.render=function(){var e=this.props,n=e.circleRatio,t=e.className,r=e.classes,a=e.counterClockwise,u=e.styles,s=e.strokeWidth,l=e.text,c=this.getPathRadius(),p=this.getPathRatio();return(0,i.createElement)("svg",{className:r.root+" "+t,style:u.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,i.createElement)("circle",{className:r.background,style:u.background,cx:50,cy:50,r:50}):null,(0,i.createElement)(o,{className:r.trail,counterClockwise:a,dashRatio:n,pathRadius:c,strokeWidth:s,style:u.trail}),(0,i.createElement)(o,{className:r.path,counterClockwise:a,dashRatio:p*n,pathRadius:c,strokeWidth:s,style:u.path}),l?(0,i.createElement)("text",{className:r.text,style:u.text,x:50,y:50},l):null)},n.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},n}(i.Component);var c=t(6679).mainSidebar.find((function(e){return e["\u521d\u5b66\u8005\u6307\u5357"]}))["\u521d\u5b66\u8005\u6307\u5357"],p=[];!function e(n,t){for(var i,a=(0,r.Z)(t);!(i=a()).done;){var o=i.value;"string"==typeof o?n.push(o):e(n,Object.values(o)[0])}}(p,c),"beginner"===p[0]&&p.shift();var g=p.length;function b(e){var n=e.id,t=p.findIndex((function(e){return"beginner/"+n===e}));if(-1===t)throw new Error("page id not found in sidebar");var r=Math.round((t+1)/g*100);return(0,i.useEffect)((function(){var e=document.querySelector("ul.table-of-contents");e&&(e.style.paddingTop="6em")})),i.createElement("div",{id:"percent"},i.createElement(l,{value:r,text:r+"%"}))}}}]);