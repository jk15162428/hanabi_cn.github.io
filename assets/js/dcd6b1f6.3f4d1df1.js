/*! For license information please see dcd6b1f6.3f4d1df1.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[1857,7406,4126,1398,9799,2582,6427,4711,174,3077,7044,7081,9321,8890,6259,6843,9302,7450,5905,6813,9331,3722,7027,1369,2043],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=c(n),p=i,d=h["".concat(s,".").concat(p)]||h[p]||g[p]||a;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},9877:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7462),i=n(7294),a=n(2389),l=n(5773),o=n(6010),s="tabItem_LplD";function c(e){var t,n,a,c=e.lazy,u=e.block,g=e.defaultValue,h=e.values,p=e.groupId,d=e.className,m=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:m.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===g?g:null!=(t=null!=g?g:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=m[0])?void 0:a.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,l.UB)(),x=v.tabGroupChoices,w=v.setTabGroupChoices,k=(0,i.useState)(y),E=k[0],q=k[1],O=[],_=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var P=x[p];null!=P&&P!==E&&b.some((function(e){return e.value===P}))&&q(P)}var N=function(e){var t=e.currentTarget,n=O.indexOf(t),r=b[n].value;r!==E&&(_(t),q(r),null!=p&&w(p,r))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var i=O.indexOf(e.currentTarget)-1;n=O[i]||O[O.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},d)},b.map((function(e){var t=e.value,n=e.label,a=e.attributes;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return O.push(e)},onKeyDown:C,onFocus:N,onClick:N},a,{className:(0,o.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),c?(0,i.cloneElement)(m.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function u(e){var t=(0,a.Z)();return i.createElement(c,(0,r.Z)({key:String(t)},e))}},6679:function(e){e.exports={mainSidebar:["about","rules",{"\u521d\u5b66\u8005\u6307\u5357":["beginner","beginner/card-layout",{"The Chop\uff08\u5f03\u724c\u4f4d\uff09":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - Play Clues\uff08\u6253\u51fa\u63d0\u793a\uff09":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues\uff08\u4fdd\u7559\u63d0\u793a\uff09":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"\u63d0\u793a\u89e3\u8bfb":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle\uff08\u70b9\u4f18\u539f\u5219\uff09":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle\uff08\u4fdd\u7559\u539f\u5219\uff09":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle\uff08\u6700\u5c0f\u63d0\u793a\u4ef7\u503c\u539f\u5219\uff09":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game\uff08\u5f00\u5c40\uff09":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3"]},{"\u4e00\u822c\u7b56\u7565":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"\u7279\u6b8a\u64cd\u4f5c":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"\u57fa\u7840\u7b56\u7565":["level-1","level-2","level-3"]}]}},1961:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7855),i=n(7294),a=n(5774),l=n(6679),o=l.mainSidebar.find((function(e){return e["\u521d\u5b66\u8005\u6307\u5357"]}))["\u521d\u5b66\u8005\u6307\u5357"],s=[];!function e(t,n){for(var i,a=(0,r.Z)(n);!(i=a()).done;){var l=i.value;"string"==typeof l?t.push(l):e(t,Object.values(l)[0])}}(s,o),"beginner"===s[0]&&s.shift();var c=s.length;function u(e){var t=e.id,n=s.findIndex((function(e){return"beginner/"+t===e}));if(-1===n)throw new Error("page id not found in sidebar");var r=Math.round((n+1)/c*100);return(0,i.useEffect)((function(){var e=document.querySelector("ul.table-of-contents");e&&(e.style.paddingTop="6em")})),i.createElement("div",{id:"percent"},i.createElement(a.Ip,{value:r,text:r+"%"}))}},7944:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return X},default:function(){return K},frontMatter:function(){return z},metadata:function(){return F},toc:function(){return L}});var r,i,a,l,o,s,c,u,g,h,p,d,m,b,f,y,v,x,w,k,E,q,O,_,P,N,C,T,j,R=n(7462),H=n(3366),S=n(7294),I=n(3905),D=n(1961),Z=n(9877),B=n(8215),A=["title","titleId"];function M(){return M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},M.apply(this,arguments)}function V(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var G=function(e){var t=e.title,n=e.titleId,R=V(e,A);return S.createElement("svg",M({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:378,viewBox:"0 -3 944 378",width:944,className:"example","aria-labelledby":n},R),t?S.createElement("title",{id:n},t):null,r||(r=S.createElement("defs",null,S.createElement("filter",{x:0,y:0,width:1,height:1,id:"other-general-strategy-question-1_yml__a"},S.createElement("feFlood",{floodColor:"#0ff"})))),i||(i=S.createElement("image",{height:100,width:70,xlinkHref:"/hanabi_cn/img/pieces/cards/red0.svg"})),a||(a=S.createElement("image",{height:100,width:70,x:78,xlinkHref:"/hanabi_cn/img/pieces/cards/yellow1.svg"})),l||(l=S.createElement("image",{height:100,width:70,x:156,xlinkHref:"/hanabi_cn/img/pieces/cards/green0.svg"})),o||(o=S.createElement("image",{height:100,width:70,x:234,xlinkHref:"/hanabi_cn/img/pieces/cards/blue1.svg"})),s||(s=S.createElement("image",{height:100,width:70,x:312,xlinkHref:"/hanabi_cn/img/pieces/cards/purple3.svg"})),S.createElement("svg",M({height:100,width:90,x:464,className:"example","aria-labelledby":n},R),t?S.createElement("title",{id:n},t):null,S.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Alice"),c||(c=S.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#other-general-strategy-question-1_yml__a)",x:"0%",y:"50%"},"Clue Giver")),u||(u=S.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),g||(g=S.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:551,y:-3})),h||(h=S.createElement("image",{height:100,width:70,x:554,xlinkHref:"/hanabi_cn/img/pieces/cards/yellow2.svg"})),S.createElement("svg",M({height:100,width:70,x:632,className:"example","aria-labelledby":n},R),t?S.createElement("title",{id:n},t):null,p||(p=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",M({height:100,width:70,x:710,className:"example","aria-labelledby":n},R),t?S.createElement("title",{id:n},t):null,d||(d=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",M({height:100,width:70,x:788,className:"example","aria-labelledby":n},R),t?S.createElement("title",{id:n},t):null,m||(m=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",M({height:100,width:70,x:866,className:"example","aria-labelledby":n},R),t?S.createElement("title",{id:n},t):null,b||(b=S.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),S.createElement("svg",M({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":n},R),t?S.createElement("title",{id:n},t):null,S.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Bob")),f||(f=S.createElement("image",{height:100,width:70,x:554,xlinkHref:"/hanabi_cn/img/pieces/cards/purple2.svg",y:125})),y||(y=S.createElement("image",{height:100,width:70,x:632,xlinkHref:"/hanabi_cn/img/pieces/cards/blue1.svg",y:125})),v||(v=S.createElement("image",{height:100,width:70,x:710,xlinkHref:"/hanabi_cn/img/pieces/cards/red4.svg",y:125})),x||(x=S.createElement("image",{height:100,width:70,x:788,xlinkHref:"/hanabi_cn/img/pieces/cards/yellow1.svg",y:125})),w||(w=S.createElement("image",{height:100,width:70,x:866,xlinkHref:"/hanabi_cn/img/pieces/cards/purple3.svg",y:125})),S.createElement("svg",M({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":n},R),t?S.createElement("title",{id:n},t):null,S.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Cathy")),k||(k=S.createElement("image",{height:100,width:70,x:554,xlinkHref:"/hanabi_cn/img/pieces/cards/red3.svg",y:250})),E||(E=S.createElement("image",{height:100,width:70,x:632,xlinkHref:"/hanabi_cn/img/pieces/cards/red3.svg",y:250})),q||(q=S.createElement("image",{height:100,width:70,x:710,xlinkHref:"/hanabi_cn/img/pieces/cards/yellow1.svg",y:250})),O||(O=S.createElement("image",{height:100,width:70,x:788,xlinkHref:"/hanabi_cn/img/pieces/cards/yellow5.svg",y:250})),_||(_=S.createElement("image",{height:100,width:70,x:866,xlinkHref:"/hanabi_cn/img/pieces/cards/blue5.svg",y:250})),P||(P=S.createElement("image",{height:200,opacity:.2,width:200,x:91,xlinkHref:"/hanabi_cn/img/pieces/trashcan.png",y:120})),N||(N=S.createElement("image",{height:100,width:70,x:121,xlinkHref:"/hanabi_cn/img/pieces/cards/green3.svg",y:136.667})),C||(C=S.createElement("image",{height:100,width:70,x:156,xlinkHref:"/hanabi_cn/img/pieces/cards/green4.svg",y:170})),T||(T=S.createElement("image",{height:100,width:70,x:191,xlinkHref:"/hanabi_cn/img/pieces/cards/purple4.svg",y:203.333})),j||(j=S.createElement("rect",{fill:"none",height:200,rx:10,ry:10,stroke:"#006400",strokeWidth:2,width:200,x:91,y:120})))},W=["components"],z={id:"other-general-strategy-question-1",title:"\u5176\u4ed6\u7b56\u7565\uff08\u4e60\u98981\uff09"},X=void 0,F={unversionedId:"beginner/other-general-strategy-question-1",id:"beginner/other-general-strategy-question-1",title:"\u5176\u4ed6\u7b56\u7565\uff08\u4e60\u98981\uff09",description:"<Tabs",source:"@site/docs/beginner/other-general-strategy-question-1.md",sourceDirName:"beginner",slug:"/beginner/other-general-strategy-question-1",permalink:"/hanabi_cn/docs/beginner/other-general-strategy-question-1",editUrl:"https://github.com/jk15162428/hanabi_cn/edit/master/docs/beginner/other-general-strategy-question-1.md",tags:[],version:"current",frontMatter:{id:"other-general-strategy-question-1",title:"\u5176\u4ed6\u7b56\u7565\uff08\u4e60\u98981\uff09"},sidebar:"mainSidebar",previous:{title:"\u5176\u4ed6\u7b56\u7565",permalink:"/hanabi_cn/docs/beginner/other-general-strategy"},next:{title:"\u5176\u4ed6\u7b56\u7565\uff08\u4e60\u98982\uff09",permalink:"/hanabi_cn/docs/beginner/other-general-strategy-question-2"}},L=[],U={toc:L};function K(e){var t=e.components,n=(0,H.Z)(e,W);return(0,I.kt)("wrapper",(0,R.Z)({},U,n,{components:t,mdxType:"MDXLayout"}),(0,I.kt)(D.Z,{id:"other-general-strategy-question-1",mdxType:"BeginnersGuideProgress"}),(0,I.kt)(Z.Z,{defaultValue:"question",values:[{label:"\u95ee\u9898",value:"question"},{label:"\u9898\u89e3",value:"solution"}],mdxType:"Tabs"},(0,I.kt)(B.Z,{value:"question",mdxType:"TabItem"},(0,I.kt)("ul",null,(0,I.kt)("li",{parentName:"ul"},"It is Alice's turn and she has a yellow 2 to play."),(0,I.kt)("li",{parentName:"ul"},"Cathy has a critical blue 5 on chop."),(0,I.kt)("li",{parentName:"ul"},"Should Alice play the yellow 2 or save Cathy's blue 5?"))),(0,I.kt)(B.Z,{value:"solution",mdxType:"TabItem"},(0,I.kt)("ul",null,(0,I.kt)("li",{parentName:"ul"},"Alice has a playable card and Bob doesn't have anything to do."),(0,I.kt)("li",{parentName:"ul"},"Thus, it would be bad teamwork for Alice to save Cathy's blue 5."),(0,I.kt)("li",{parentName:"ul"},"Alice should play the yellow 2 and let Bob handle saving Cathy's blue 5.")))),(0,I.kt)(G,{mdxType:"OtherGeneralStrategyQuestion1"}))}K.isMDXComponent=!0},5774:function(e,t,n){"use strict";n.d(t,{Ip:function(){return s}});var r=n(7294),i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},i(e,t)};function a(e){var t=e.className,n=e.counterClockwise,i=e.dashRatio,a=e.pathRadius,s=e.strokeWidth,c=e.style;return(0,r.createElement)("path",{className:t,style:Object.assign({},c,o({pathRadius:a,dashRatio:i,counterClockwise:n})),d:l({pathRadius:a,counterClockwise:n}),strokeWidth:s,fillOpacity:0})}function l(e){var t=e.pathRadius,n=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+n+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+n+" 1 1 0,-"+2*t+"\n    "}function o(e){var t=e.counterClockwise,n=e.dashRatio,r=e.pathRadius,i=2*Math.PI*r,a=(1-n)*i;return{strokeDasharray:i+"px "+i+"px",strokeDashoffset:(t?-a:a)+"px"}}var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,n=e.minValue,r=e.maxValue;return(Math.min(Math.max(t,n),r)-n)/(r-n)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,n=e.className,i=e.classes,l=e.counterClockwise,o=e.styles,s=e.strokeWidth,c=e.text,u=this.getPathRadius(),g=this.getPathRatio();return(0,r.createElement)("svg",{className:i.root+" "+n,style:o.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,r.createElement)("circle",{className:i.background,style:o.background,cx:50,cy:50,r:50}):null,(0,r.createElement)(a,{className:i.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:s,style:o.trail}),(0,r.createElement)(a,{className:i.path,counterClockwise:l,dashRatio:g*t,pathRadius:u,strokeWidth:s,style:o.path}),c?(0,r.createElement)("text",{className:i.text,style:o.text,x:50,y:50},c):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(r.Component)}}]);