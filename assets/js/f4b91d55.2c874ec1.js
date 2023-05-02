/*! For license information please see f4b91d55.2c874ec1.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[5574,7239,4908,9151,6481,3978,4345,9583,6643,3286,8786,8157,627,17,9005,8111],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>u,kt:()=>m});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=i.createContext({}),o=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=o(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=o(a),m=n,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return a?i.createElement(h,l(l({ref:t},u),{},{components:a})):i.createElement(h,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var o=2;o<r;o++)l[o]=a[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var i=a(7294),n=a(6010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return i.createElement("div",{role:"tabpanel",className:(0,n.Z)(r,l),hidden:a},t)}},4866:(e,t,a)=>{"use strict";a.d(t,{Z:()=>k});var i=a(3117),n=a(7294),r=a(6010),l=a(2466),s=a(6775),c=a(1980),o=a(7392),u=a(12);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:i,default:n}}=e;return{value:t,label:a,attributes:i,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const i=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(i.location.search);t.set(r,e),i.replace({...i.location,search:t.toString()})}),[r,i])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:i}=e,r=d(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=a.find((e=>e.default))??a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:r}))),[c,o]=h({queryString:a,groupId:i}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,r]=(0,u.Nk)(a);return[i,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:i}),b=(()=>{const e=c??p;return m({value:e,tabValues:r})?e:null})();(0,n.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),o(e),g(e)}),[o,g,r]),tabValues:r}}var b=a(2389);const f="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:s,selectValue:c,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),i=o[a].value;i!==s&&(p(t),c(i))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},o.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,i.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,r.Z)("tabs__item",v,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function x(e){let{lazy:t,children:a,selectedValue:i}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i}))))}function w(e){const t=g(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",f)},n.createElement(y,(0,i.Z)({},e,t)),n.createElement(x,(0,i.Z)({},e,t)))}function k(e){const t=(0,b.Z)();return n.createElement(w,(0,i.Z)({key:String(t)},e))}},6679:e=>{e.exports={mainSidebar:["about",{"\u521d\u5b66\u8005\u6307\u5357":["beginner","beginner/card-layout",{"The Chop\uff08\u5f03\u724c\u4f4d\uff09":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - Play Clues\uff08\u6253\u51fa\u63d0\u793a\uff09":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues\uff08\u4fdd\u7559\u63d0\u793a\uff09":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation\uff08\u63d0\u793a\u89e3\u8bfb\uff09":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle\uff08\u70b9\u4f18\u539f\u5219\uff09":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle\uff08\u4fdd\u7559\u539f\u5219\uff09":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle\uff08\u6700\u5c0f\u63d0\u793a\u4ef7\u503c\u539f\u5219\uff09":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game\uff08\u5f00\u5c40\uff09":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3"]},{"General Strategy\uff08\u4e00\u822c\u7b56\u7565\uff09":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"Special Moves\uff08\u7279\u6b8a\u64cd\u4f5c\uff09":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"\u57fa\u7840\u7b56\u7565":["reference","first-principles","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23","level-24","level-25"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/funnels","variant-specific/gray","variant-specific/light-pink","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/no-positive-clues","variant-specific/null-fives","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/odds-and-evens","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white"]},{"Challenge Questions":["challenge-questions","challenge-questions/level-2","challenge-questions/level-8"]},"convention-attribution"]}},1961:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var i=a(7294),n=a(5774),r=a(6679);const l=r.mainSidebar.find((e=>e["\u521d\u5b66\u8005\u6307\u5357"]))["\u521d\u5b66\u8005\u6307\u5357"],s=[];!function e(t,a){for(const i of a)"string"==typeof i?t.push(i):e(t,Object.values(i)[0])}(s,l),"beginner"===s[0]&&s.shift();const c=s.length;function o(e){let{id:t}=e;const a=s.findIndex((e=>`beginner/${t}`===e));if(-1===a)throw new Error("page id not found in sidebar");const r=Math.round((a+1)/c*100);return(0,i.useEffect)((()=>{const e=document.querySelector("ul.table-of-contents");e&&(e.style.paddingTop="6em")})),i.createElement("div",{id:"percent"},i.createElement(n.Ip,{value:r,text:`${r}%`}))}},4104:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>$,contentTitle:()=>A,default:()=>L,frontMatter:()=>M,metadata:()=>W,toc:()=>Q});var i,n,r,l,s,c,o,u,p,d,m,h,g,b,f,v,y,x,w,k,E,q,N,C,P,_,S,O,T,j=a(3117),V=a(7294),I=a(3905),R=a(1961),B=a(4866),Z=a(5162);function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},D.apply(this,arguments)}const H=e=>{let{title:t,titleId:a,...j}=e;return V.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:375,viewBox:"0 0 944 375",width:944,className:"example","aria-labelledby":a},j),t?V.createElement("title",{id:a},t):null,i||(i=V.createElement("defs",null,V.createElement("filter",{x:0,y:0,width:1,height:1,id:"critical-save-question-4_yml__a"},V.createElement("feFlood",{floodColor:"#0ff"})))),n||(n=V.createElement("image",{height:100,width:70,xlinkHref:"/hanabi_cn/img/pieces/cards/red0.svg"})),r||(r=V.createElement("image",{height:100,width:70,x:78,xlinkHref:"/hanabi_cn/img/pieces/cards/yellow2.svg"})),l||(l=V.createElement("image",{height:100,width:70,x:156,xlinkHref:"/hanabi_cn/img/pieces/cards/green2.svg"})),s||(s=V.createElement("image",{height:100,width:70,x:234,xlinkHref:"/hanabi_cn/img/pieces/cards/blue2.svg"})),c||(c=V.createElement("image",{height:100,width:70,x:312,xlinkHref:"/hanabi_cn/img/pieces/cards/purple2.svg"})),V.createElement("svg",D({height:100,width:90,x:464,className:"example","aria-labelledby":a},j),t?V.createElement("title",{id:a},t):null,V.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Alice"),o||(o=V.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#critical-save-question-4_yml__a)",x:"0%",y:"50%"},"Clue Giver")),u||(u=V.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),V.createElement("svg",D({height:100,width:70,x:554,className:"example","aria-labelledby":a},j),t?V.createElement("title",{id:a},t):null,p||(p=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",D({height:100,width:70,x:632,className:"example","aria-labelledby":a},j),t?V.createElement("title",{id:a},t):null,d||(d=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",D({height:100,width:70,x:710,className:"example","aria-labelledby":a},j),t?V.createElement("title",{id:a},t):null,m||(m=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",D({height:100,width:70,x:788,className:"example","aria-labelledby":a},j),t?V.createElement("title",{id:a},t):null,h||(h=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",D({height:100,width:70,x:866,className:"example","aria-labelledby":a},j),t?V.createElement("title",{id:a},t):null,g||(g=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",D({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":a},j),t?V.createElement("title",{id:a},t):null,V.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Bob")),V.createElement("svg",D({height:100,width:70,x:554,y:125,className:"example","aria-labelledby":a},j),t?V.createElement("title",{id:a},t):null,b||(b=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",D({height:100,width:70,x:632,y:125,className:"example","aria-labelledby":a},j),t?V.createElement("title",{id:a},t):null,f||(f=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",D({height:100,width:70,x:710,y:125,className:"example","aria-labelledby":a},j),t?V.createElement("title",{id:a},t):null,v||(v=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),V.createElement("svg",D({height:100,width:70,x:788,y:125,className:"example","aria-labelledby":a},j),t?V.createElement("title",{id:a},t):null,y||(y=V.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),x||(x=V.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:863,y:122})),V.createElement("svg",D({height:100,width:70,x:866,y:125,className:"example","aria-labelledby":a},j),t?V.createElement("title",{id:a},t):null,w||(w=V.createElement("image",{height:100,width:70,xlinkHref:"/hanabi_cn/img/pieces/cards/red.svg"}))),k||(k=V.createElement("image",{height:70,width:50,x:876,xlinkHref:"/hanabi_cn/img/pieces/arrow.svg",y:85})),E||(E=V.createElement("circle",{cx:901,cy:110,fill:"red",r:15,stroke:"#000",strokeWidth:2})),V.createElement("svg",D({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":a},j),t?V.createElement("title",{id:a},t):null,V.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Cathy")),q||(q=V.createElement("image",{height:100,width:70,x:554,xlinkHref:"/hanabi_cn/img/pieces/cards/purple1.svg",y:250})),N||(N=V.createElement("image",{height:100,width:70,x:632,xlinkHref:"/hanabi_cn/img/pieces/cards/green1.svg",y:250})),C||(C=V.createElement("image",{height:100,width:70,x:710,xlinkHref:"/hanabi_cn/img/pieces/cards/blue2.svg",y:250})),P||(P=V.createElement("image",{height:100,width:70,x:788,xlinkHref:"/hanabi_cn/img/pieces/cards/blue1.svg",y:250})),_||(_=V.createElement("image",{height:100,width:70,x:866,xlinkHref:"/hanabi_cn/img/pieces/cards/green2.svg",y:250})),S||(S=V.createElement("image",{height:200,opacity:.2,width:200,x:91,xlinkHref:"/hanabi_cn/img/pieces/trashcan.png",y:120})),O||(O=V.createElement("image",{height:100,width:70,x:156,xlinkHref:"/hanabi_cn/img/pieces/cards/red2.svg",y:170})),T||(T=V.createElement("rect",{fill:"none",height:200,rx:10,ry:10,stroke:"#006400",strokeWidth:2,width:200,x:91,y:120})))},M={id:"critical-save-question-4",title:"The Critical Save (Question 4)"},A=void 0,W={unversionedId:"beginner/critical-save-question-4",id:"beginner/critical-save-question-4",title:"The Critical Save (Question 4)",description:"<Tabs",source:"@site/docs/beginner/critical-save-question-4.mdx",sourceDirName:"beginner",slug:"/beginner/critical-save-question-4",permalink:"/hanabi_cn/docs/beginner/critical-save-question-4",draft:!1,editUrl:"https://github.com/jk15162428/hanabi_cn/edit/master/docs/beginner/critical-save-question-4.mdx",tags:[],version:"current",frontMatter:{id:"critical-save-question-4",title:"The Critical Save (Question 4)"},sidebar:"mainSidebar",previous:{title:"The Critical Save (Question 3)",permalink:"/hanabi_cn/docs/beginner/critical-save-question-3"},next:{title:"Single Card Focus",permalink:"/hanabi_cn/docs/beginner/single-card-focus"}},$={},Q=[],G={toc:Q};function L(e){let{components:t,...a}=e;return(0,I.kt)("wrapper",(0,j.Z)({},G,a,{components:t,mdxType:"MDXLayout"}),(0,I.kt)(R.Z,{id:"critical-save-question-4",mdxType:"BeginnersGuideProgress"}),(0,I.kt)(B.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,I.kt)(Z.Z,{value:"question",mdxType:"TabItem"},(0,I.kt)("ul",null,(0,I.kt)("li",{parentName:"ul"},"Alice clues red to Bob, touching a card on slot 5."),(0,I.kt)("li",{parentName:"ul"},"Is this a ",(0,I.kt)("em",{parentName:"li"},"Play Clue")," or a ",(0,I.kt)("em",{parentName:"li"},"Save Clue"),"?"),(0,I.kt)("li",{parentName:"ul"},"What ",(0,I.kt)("em",{parentName:"li"},"card note")," does Bob write? (Be specific.)"))),(0,I.kt)(Z.Z,{value:"solution",mdxType:"TabItem"},(0,I.kt)("ul",null,(0,I.kt)("li",{parentName:"ul"},"Bob knows that this could be a ",(0,I.kt)("em",{parentName:"li"},"Play Clue")," on the red 1."),(0,I.kt)("li",{parentName:"ul"},"However, since it touched his chop, it could also be a ",(0,I.kt)("em",{parentName:"li"},"Save Clue"),". Since red 2 is in the trash and a red clue matches that card, it could be red 2."),(0,I.kt)("li",{parentName:"ul"},"Bob does not know whether or not this is a ",(0,I.kt)("em",{parentName:"li"},"Play Clue")," or a ",(0,I.kt)("em",{parentName:"li"},"Save Clue"),", but he has to treat it as a ",(0,I.kt)("em",{parentName:"li"},"Save Clue")," for the time being until he gets more information."),(0,I.kt)("li",{parentName:"ul"},"Bob writes a ",(0,I.kt)("em",{parentName:"li"},"card note")," that includes the following identities:",(0,I.kt)("ul",{parentName:"li"},(0,I.kt)("li",{parentName:"ul"},"red 1 (as a ",(0,I.kt)("em",{parentName:"li"},"Play Clue"),")"),(0,I.kt)("li",{parentName:"ul"},"red 2 (as a ",(0,I.kt)("em",{parentName:"li"},"Critical Save"),")"))),(0,I.kt)("li",{parentName:"ul"},"Note that most of the time, players save two's with a ",(0,I.kt)("em",{parentName:"li"},"2 Save"),". However, if the first copy of a 2 gets discarded, the second copy of that 2 can be ",(0,I.kt)("em",{parentName:"li"},"Critical Saved")," in the exact same way that a 3 or a 4 would be.")))),(0,I.kt)(H,{mdxType:"CriticalSaveQuestion4"}))}L.isMDXComponent=!0},5774:(e,t,a)=>{"use strict";a.d(t,{Ip:()=>c});var i=a(7294),n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])},n(e,t)};function r(e){var t=e.className,a=e.counterClockwise,n=e.dashRatio,r=e.pathRadius,c=e.strokeWidth,o=e.style;return(0,i.createElement)("path",{className:t,style:Object.assign({},o,s({pathRadius:r,dashRatio:n,counterClockwise:a})),d:l({pathRadius:r,counterClockwise:a}),strokeWidth:c,fillOpacity:0})}function l(e){var t=e.pathRadius,a=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+a+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+a+" 1 1 0,-"+2*t+"\n    "}function s(e){var t=e.counterClockwise,a=e.dashRatio,i=e.pathRadius,n=2*Math.PI*i,r=(1-a)*n;return{strokeDasharray:n+"px "+n+"px",strokeDashoffset:(t?-r:r)+"px"}}var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,a=e.minValue,i=e.maxValue;return(Math.min(Math.max(t,a),i)-a)/(i-a)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,a=e.className,n=e.classes,l=e.counterClockwise,s=e.styles,c=e.strokeWidth,o=e.text,u=this.getPathRadius(),p=this.getPathRatio();return(0,i.createElement)("svg",{className:n.root+" "+a,style:s.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,i.createElement)("circle",{className:n.background,style:s.background,cx:50,cy:50,r:50}):null,(0,i.createElement)(r,{className:n.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:c,style:s.trail}),(0,i.createElement)(r,{className:n.path,counterClockwise:l,dashRatio:p*t,pathRadius:u,strokeWidth:c,style:s.path}),o?(0,i.createElement)("text",{className:n.text,style:s.text,x:50,y:50},o):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(i.Component)}}]);