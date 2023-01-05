/*! For license information please see 5a47c1d8.70ef9684.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[6577,7406,4126,1398,9799,2582,6427,4711,174,3077,7044,7081,9321,8890,6259,6843,9302,7450,5905,6813,9331,3722,7027,1369,2043],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return b}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=i,b=p["".concat(u,".").concat(d)]||p[d]||g[d]||a;return t?r.createElement(b,o(o({ref:n},c),{},{components:t})):r.createElement(b,o({ref:n},c))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){"use strict";var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},9877:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(7462),i=t(7294),a=t(2389),o=t(5773),l=t(6010),u="tabItem_LplD";function s(e){var n,t,a,s=e.lazy,c=e.block,p=e.defaultValue,g=e.values,d=e.groupId,b=e.className,h=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=g?g:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),m=(0,o.lx)(f,(function(e,n){return e.value===n.value}));if(m.length>0)throw new Error('Docusaurus error: Duplicate values "'+m.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(n=null!=p?p:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=h[0])?void 0:a.props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.UB)(),x=y.tabGroupChoices,k=y.setTabGroupChoices,w=(0,i.useState)(v),q=w[0],E=w[1],O=[],P=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var T=x[d];null!=T&&T!==q&&f.some((function(e){return e.value===T}))&&E(T)}var C=function(e){var n=e.currentTarget,t=O.indexOf(n),r=f[t].value;r!==q&&(P(n),E(r),null!=d&&k(d,r))},j=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;t=O[r]||O[0];break;case"ArrowLeft":var i=O.indexOf(e.currentTarget)-1;t=O[i]||O[O.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},b)},f.map((function(e){var n=e.value,t=e.label,a=e.attributes;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:q===n?0:-1,"aria-selected":q===n,key:n,ref:function(e){return O.push(e)},onKeyDown:j,onFocus:C,onClick:C},a,{className:(0,l.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":q===n})}),null!=t?t:n)}))),s?(0,i.cloneElement)(h.filter((function(e){return e.props.value===q}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==q})}))))}function c(e){var n=(0,a.Z)();return i.createElement(s,(0,r.Z)({key:String(n)},e))}},6679:function(e){e.exports={mainSidebar:["about","rules",{"\u521d\u5b66\u8005\u6307\u5357":["beginner","beginner/card-layout",{"The Chop\uff08\u5f03\u724c\u4f4d\uff09":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - Play Clues\uff08\u6253\u51fa\u63d0\u793a\uff09":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues\uff08\u4fdd\u7559\u63d0\u793a\uff09":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"\u63d0\u793a\u89e3\u8bfb":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle\uff08\u70b9\u4f18\u539f\u5219\uff09":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle\uff08\u4fdd\u7559\u539f\u5219\uff09":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle\uff08\u6700\u5c0f\u63d0\u793a\u4ef7\u503c\u539f\u5219\uff09":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game\uff08\u5f00\u5c40\uff09":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3"]},{"\u4e00\u822c\u7b56\u7565":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"\u7279\u6b8a\u64cd\u4f5c":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"\u57fa\u7840\u7b56\u7565":["level-1","level-2","level-3","level-4"]}]}},1961:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(7855),i=t(7294),a=t(5774),o=t(6679),l=o.mainSidebar.find((function(e){return e["\u521d\u5b66\u8005\u6307\u5357"]}))["\u521d\u5b66\u8005\u6307\u5357"],u=[];!function e(n,t){for(var i,a=(0,r.Z)(t);!(i=a()).done;){var o=i.value;"string"==typeof o?n.push(o):e(n,Object.values(o)[0])}}(u,l),"beginner"===u[0]&&u.shift();var s=u.length;function c(e){var n=e.id,t=u.findIndex((function(e){return"beginner/"+n===e}));if(-1===t)throw new Error("page id not found in sidebar");var r=Math.round((t+1)/s*100);return(0,i.useEffect)((function(){var e=document.querySelector("ul.table-of-contents");e&&(e.style.paddingTop="6em")})),i.createElement("div",{id:"percent"},i.createElement(a.Ip,{value:r,text:r+"%"}))}},7486:function(e,n,t){"use strict";t.r(n),t.d(n,{contentTitle:function(){return E},default:function(){return C},frontMatter:function(){return q},metadata:function(){return O},toc:function(){return P}});var r,i,a,o,l,u,s,c,p=t(7462),g=t(3366),d=t(7294),b=t(3905),h=t(1961),f=t(9877),m=t(8215),v=["title","titleId"];function y(){return y=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},y.apply(this,arguments)}function x(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var k=function(e){var n=e.title,t=e.titleId,p=x(e,v);return d.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:128,viewBox:"0 -3 554 128",width:554,className:"example","aria-labelledby":t},p),n?d.createElement("title",{id:t},n):null,d.createElement("svg",y({height:100,width:90,x:74,className:"example","aria-labelledby":t},p),n?d.createElement("title",{id:t},n):null,d.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Alice")),r||(r=d.createElement("image",{height:100,width:70,x:164,xlinkHref:"/hanabi_cn/img/pieces/cards/yellow1.svg"})),i||(i=d.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:239,y:-3})),a||(a=d.createElement("image",{height:100,width:70,x:242,xlinkHref:"/hanabi_cn/img/pieces/cards/red3.svg"})),o||(o=d.createElement("image",{height:100,width:70,x:320,xlinkHref:"/hanabi_cn/img/pieces/cards/blue2.svg"})),l||(l=d.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:395,y:-3})),u||(u=d.createElement("image",{height:100,width:70,x:398,xlinkHref:"/hanabi_cn/img/pieces/cards/red4.svg"})),s||(s=d.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:473,y:-3})),c||(c=d.createElement("image",{height:100,width:70,x:476,xlinkHref:"/hanabi_cn/img/pieces/cards/red5.svg"})))},w=["components"],q={id:"chop-question-3",title:"The Chop\uff08\u4e60\u98983\uff09"},E=void 0,O={unversionedId:"beginner/chop-question-3",id:"beginner/chop-question-3",title:"The Chop\uff08\u4e60\u98983\uff09",description:"<Tabs",source:"@site/docs/beginner/chop-question-3.md",sourceDirName:"beginner",slug:"/beginner/chop-question-3",permalink:"/hanabi_cn/docs/beginner/chop-question-3",editUrl:"https://github.com/jk15162428/hanabi_cn/edit/master/docs/beginner/chop-question-3.md",tags:[],version:"current",frontMatter:{id:"chop-question-3",title:"The Chop\uff08\u4e60\u98983\uff09"},sidebar:"mainSidebar",previous:{title:"The Chop\uff08\u4e60\u98982\uff09",permalink:"/hanabi_cn/docs/beginner/chop-question-2"},next:{title:"The Chop\uff08\u4e60\u98984\uff09",permalink:"/hanabi_cn/docs/beginner/chop-question-4"}},P=[],T={toc:P};function C(e){var n=e.components,t=(0,g.Z)(e,w);return(0,b.kt)("wrapper",(0,p.Z)({},T,t,{components:n,mdxType:"MDXLayout"}),(0,b.kt)(h.Z,{id:"chop-question-3",mdxType:"BeginnersGuideProgress"}),(0,b.kt)(f.Z,{defaultValue:"question",values:[{label:"\u95ee\u9898",value:"question"},{label:"\u9898\u89e3",value:"solution"}],mdxType:"Tabs"},(0,b.kt)(m.Z,{value:"question",mdxType:"TabItem"},(0,b.kt)("ul",null,(0,b.kt)("li",{parentName:"ul"},"What slot is Alice's chop?"))),(0,b.kt)(m.Z,{value:"solution",mdxType:"TabItem"},(0,b.kt)("ul",null,(0,b.kt)("li",{parentName:"ul"},"Slot 3 (because slots 4 and 5 have clues on them).")))),(0,b.kt)(k,{mdxType:"ChopQuestion3"}))}C.isMDXComponent=!0},5774:function(e,n,t){"use strict";t.d(n,{Ip:function(){return u}});var r=t(7294),i=function(e,n){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])},i(e,n)};function a(e){var n=e.className,t=e.counterClockwise,i=e.dashRatio,a=e.pathRadius,u=e.strokeWidth,s=e.style;return(0,r.createElement)("path",{className:n,style:Object.assign({},s,l({pathRadius:a,dashRatio:i,counterClockwise:t})),d:o({pathRadius:a,counterClockwise:t}),strokeWidth:u,fillOpacity:0})}function o(e){var n=e.pathRadius,t=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+n+"\n      a "+n+","+n+" "+t+" 1 1 0,"+2*n+"\n      a "+n+","+n+" "+t+" 1 1 0,-"+2*n+"\n    "}function l(e){var n=e.counterClockwise,t=e.dashRatio,r=e.pathRadius,i=2*Math.PI*r,a=(1-t)*i;return{strokeDasharray:i+"px "+i+"px",strokeDashoffset:(n?-a:a)+"px"}}var u=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return function(e,n){function t(){this.constructor=e}i(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}(n,e),n.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},n.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},n.prototype.getPathRatio=function(){var e=this.props,n=e.value,t=e.minValue,r=e.maxValue;return(Math.min(Math.max(n,t),r)-t)/(r-t)},n.prototype.render=function(){var e=this.props,n=e.circleRatio,t=e.className,i=e.classes,o=e.counterClockwise,l=e.styles,u=e.strokeWidth,s=e.text,c=this.getPathRadius(),p=this.getPathRatio();return(0,r.createElement)("svg",{className:i.root+" "+t,style:l.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,r.createElement)("circle",{className:i.background,style:l.background,cx:50,cy:50,r:50}):null,(0,r.createElement)(a,{className:i.trail,counterClockwise:o,dashRatio:n,pathRadius:c,strokeWidth:u,style:l.trail}),(0,r.createElement)(a,{className:i.path,counterClockwise:o,dashRatio:p*n,pathRadius:c,strokeWidth:u,style:l.path}),s?(0,r.createElement)("text",{className:i.text,style:l.text,x:50,y:50},s):null)},n.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},n}(r.Component)}}]);