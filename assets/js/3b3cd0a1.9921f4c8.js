"use strict";(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[6187],{433:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(7294),i=a(4334);const n="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return l.createElement("div",{role:"tabpanel",className:(0,i.Z)(n,r),hidden:a},t)}},2808:(e,t,a)=>{a.d(t,{Z:()=>E});var l=a(3117),i=a(7294),n=a(4334),r=a(3735),s=a(6775),c=a(4423),o=a(636),h=a(9200);function m(e){return function(e){var t;return(null==(t=i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:l,default:i}}=e;return{value:t,label:a,attributes:l,default:i}}))}function u(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const l=(0,s.k6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(n),(0,i.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(l.location.search);t.set(n,e),l.replace({...l.location,search:t.toString()})}),[n,l])]}function p(e){const{defaultValue:t,queryString:a=!1,groupId:l}=e,n=u(e),[r,s]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=a.find((e=>e.default))??a[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:n}))),[c,o]=g({queryString:a,groupId:l}),[m,p]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,n]=(0,h.Nk)(a);return[l,(0,i.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:l}),b=(()=>{const e=c??m;return d({value:e,tabValues:n})?e:null})();(0,i.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!d({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);s(e),o(e),p(e)}),[o,p,n]),tabValues:n}}var b=a(5730);const f="tabList__CuJ",y="tabItem_LNqP";function x(e){let{className:t,block:a,selectedValue:s,selectValue:c,tabValues:o}=e;const h=[],{blockElementScrollPositionUntilNextRender:m}=(0,r.o5)(),u=e=>{const t=e.currentTarget,a=h.indexOf(t),l=o[a].value;l!==s&&(m(t),c(l))},d=e=>{var t;let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=h.indexOf(e.currentTarget)+1;a=h[t]??h[0];break}case"ArrowLeft":{const t=h.indexOf(e.currentTarget)-1;a=h[t]??h[h.length-1];break}}null==(t=a)||t.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},t)},o.map((e=>{let{value:t,label:a,attributes:r}=e;return i.createElement("li",(0,l.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>h.push(e),onKeyDown:d,onClick:u},r,{className:(0,n.Z)("tabs__item",y,null==r?void 0:r.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:l}=e;const n=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===l));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==l}))))}function w(e){const t=p(e);return i.createElement("div",{className:(0,n.Z)("tabs-container",f)},i.createElement(x,(0,l.Z)({},e,t)),i.createElement(v,(0,l.Z)({},e,t)))}function E(e){const t=(0,b.Z)();return i.createElement(w,(0,l.Z)({key:String(t)},e))}},2274:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>Be,contentTitle:()=>Ce,default:()=>Ae,frontMatter:()=>Oe,metadata:()=>Ie,toc:()=>Se});var l,i,n,r,s,c,o,h,m,u,d,g,p,b,f,y,x,v,w,E,k,_,N,T,H=a(3117),q=a(7294),O=a(3905);function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},C.apply(this,arguments)}const I=e=>{let{title:t,titleId:a,...H}=e;return q.createElement("svg",C({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:378,viewBox:"0 -3 866 378",width:866,className:"example","aria-labelledby":a},H),t?q.createElement("title",{id:a},t):null,l||(l=q.createElement("defs",null,q.createElement("filter",{x:0,y:0,width:1,height:1,id:"question-1_yml__a"},q.createElement("feFlood",{floodColor:"#0ff"})))),i||(i=q.createElement("image",{height:100,width:70,xlinkHref:"/hanabi_cn/img/pieces/cards/red3.svg"})),n||(n=q.createElement("image",{height:100,width:70,x:78,xlinkHref:"/hanabi_cn/img/pieces/cards/yellow5.svg"})),r||(r=q.createElement("image",{height:100,width:70,x:156,xlinkHref:"/hanabi_cn/img/pieces/cards/green5.svg"})),s||(s=q.createElement("image",{height:100,width:70,x:234,xlinkHref:"/hanabi_cn/img/pieces/cards/blue4.svg"})),c||(c=q.createElement("image",{height:100,width:70,x:312,xlinkHref:"/hanabi_cn/img/pieces/cards/purple4.svg"})),q.createElement("svg",C({height:100,width:90,x:464,className:"example","aria-labelledby":a},H),t?q.createElement("title",{id:a},t):null,q.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Alice"),o||(o=q.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#question-1_yml__a)",x:"0%",y:"50%"},"Clue Giver")),h||(h=q.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),q.createElement("svg",C({height:100,width:70,x:554,className:"example","aria-labelledby":a},H),t?q.createElement("title",{id:a},t):null,m||(m=q.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),q.createElement("svg",C({height:100,width:70,x:632,className:"example","aria-labelledby":a},H),t?q.createElement("title",{id:a},t):null,u||(u=q.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),q.createElement("svg",C({height:100,width:70,x:710,className:"example","aria-labelledby":a},H),t?q.createElement("title",{id:a},t):null,d||(d=q.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),g||(g=q.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:785,y:-3})),p||(p=q.createElement("image",{height:100,width:70,x:788,xlinkHref:"/hanabi_cn/img/pieces/cards/red4.svg"})),q.createElement("svg",C({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":a},H),t?q.createElement("title",{id:a},t):null,q.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Bob")),b||(b=q.createElement("image",{height:100,width:70,x:554,xlinkHref:"/hanabi_cn/img/pieces/cards/green3.svg",y:125})),f||(f=q.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:629,y:122})),y||(y=q.createElement("image",{height:100,width:70,x:632,xlinkHref:"/hanabi_cn/img/pieces/cards/red5.svg",y:125})),x||(x=q.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:707,y:122})),v||(v=q.createElement("image",{height:100,width:70,x:710,xlinkHref:"/hanabi_cn/img/pieces/cards/purple5.svg",y:125})),w||(w=q.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:785,y:122})),E||(E=q.createElement("image",{height:100,width:70,x:788,xlinkHref:"/hanabi_cn/img/pieces/cards/blue5.svg",y:125})),q.createElement("svg",C({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":a},H),t?q.createElement("title",{id:a},t):null,q.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Cathy")),k||(k=q.createElement("image",{height:100,width:70,x:554,xlinkHref:"/hanabi_cn/img/pieces/cards/red2.svg",y:250})),_||(_=q.createElement("image",{height:100,width:70,x:632,xlinkHref:"/hanabi_cn/img/pieces/cards/red1.svg",y:250})),N||(N=q.createElement("image",{height:100,width:70,x:710,xlinkHref:"/hanabi_cn/img/pieces/cards/yellow4.svg",y:250})),T||(T=q.createElement("image",{height:100,width:70,x:788,xlinkHref:"/hanabi_cn/img/pieces/cards/yellow3.svg",y:250})))};var B,S,j,A,V,P,Z,D,Q,z,L,F,M,X,G,$,R,U,W,Y,J,K;function ee(){return ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},ee.apply(this,arguments)}const te=e=>{let{title:t,titleId:a,...l}=e;return q.createElement("svg",ee({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:378,viewBox:"0 -3 866 378",width:866,className:"example","aria-labelledby":a},l),t?q.createElement("title",{id:a},t):null,B||(B=q.createElement("defs",null,q.createElement("filter",{x:0,y:0,width:1,height:1,id:"question-2_yml__a"},q.createElement("feFlood",{floodColor:"#0ff"})))),S||(S=q.createElement("image",{height:100,width:70,xlinkHref:"/hanabi_cn/img/pieces/cards/red3.svg"})),j||(j=q.createElement("image",{height:100,width:70,x:78,xlinkHref:"/hanabi_cn/img/pieces/cards/yellow4.svg"})),A||(A=q.createElement("image",{height:100,width:70,x:156,xlinkHref:"/hanabi_cn/img/pieces/cards/green4.svg"})),V||(V=q.createElement("image",{height:100,width:70,x:234,xlinkHref:"/hanabi_cn/img/pieces/cards/blue4.svg"})),P||(P=q.createElement("image",{height:100,width:70,x:312,xlinkHref:"/hanabi_cn/img/pieces/cards/purple4.svg"})),q.createElement("svg",ee({height:100,width:90,x:464,className:"example","aria-labelledby":a},l),t?q.createElement("title",{id:a},t):null,q.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Alice"),Z||(Z=q.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#question-2_yml__a)",x:"0%",y:"50%"},"Clue Giver")),D||(D=q.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),q.createElement("svg",ee({height:100,width:70,x:554,className:"example","aria-labelledby":a},l),t?q.createElement("title",{id:a},t):null,Q||(Q=q.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),q.createElement("svg",ee({height:100,width:70,x:632,className:"example","aria-labelledby":a},l),t?q.createElement("title",{id:a},t):null,z||(z=q.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),L||(L=q.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:707,y:-3})),F||(F=q.createElement("image",{height:100,width:70,x:710,xlinkHref:"/hanabi_cn/img/pieces/cards/yellow5.svg"})),M||(M=q.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:785,y:-3})),X||(X=q.createElement("image",{height:100,width:70,x:788,xlinkHref:"/hanabi_cn/img/pieces/cards/green5.svg"})),q.createElement("svg",ee({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":a},l),t?q.createElement("title",{id:a},t):null,q.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Bob")),G||(G=q.createElement("image",{height:100,width:70,x:554,xlinkHref:"/hanabi_cn/img/pieces/cards/red4.svg",y:125})),$||($=q.createElement("image",{height:100,width:70,x:632,xlinkHref:"/hanabi_cn/img/pieces/cards/blue1.svg",y:125})),R||(R=q.createElement("image",{height:100,width:70,x:710,xlinkHref:"/hanabi_cn/img/pieces/cards/blue2.svg",y:125})),U||(U=q.createElement("image",{height:100,width:70,x:788,xlinkHref:"/hanabi_cn/img/pieces/cards/purple3.svg",y:125})),q.createElement("svg",ee({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":a},l),t?q.createElement("title",{id:a},t):null,q.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Cathy")),W||(W=q.createElement("image",{height:100,width:70,x:554,xlinkHref:"/hanabi_cn/img/pieces/cards/purple2.svg",y:250})),Y||(Y=q.createElement("image",{height:100,width:70,x:632,xlinkHref:"/hanabi_cn/img/pieces/cards/purple1.svg",y:250})),J||(J=q.createElement("image",{height:100,width:70,x:710,xlinkHref:"/hanabi_cn/img/pieces/cards/yellow4.svg",y:250})),K||(K=q.createElement("image",{height:100,width:70,x:788,xlinkHref:"/hanabi_cn/img/pieces/cards/red5.svg",y:250})))};var ae,le,ie,ne,re,se,ce,oe,he,me,ue,de,ge,pe,be,fe,ye,xe,ve,we,Ee,ke,_e;function Ne(){return Ne=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},Ne.apply(this,arguments)}const Te=e=>{let{title:t,titleId:a,...l}=e;return q.createElement("svg",Ne({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:375,viewBox:"0 0 866 375",width:866,className:"example","aria-labelledby":a},l),t?q.createElement("title",{id:a},t):null,ae||(ae=q.createElement("defs",null,q.createElement("filter",{x:0,y:0,width:1,height:1,id:"question-3_yml__a"},q.createElement("feFlood",{floodColor:"#0ff"})))),le||(le=q.createElement("image",{height:100,width:70,xlinkHref:"/hanabi_cn/img/pieces/cards/red2.svg"})),ie||(ie=q.createElement("image",{height:100,width:70,x:78,xlinkHref:"/hanabi_cn/img/pieces/cards/yellow5.svg"})),ne||(ne=q.createElement("image",{height:100,width:70,x:156,xlinkHref:"/hanabi_cn/img/pieces/cards/green5.svg"})),re||(re=q.createElement("image",{height:100,width:70,x:234,xlinkHref:"/hanabi_cn/img/pieces/cards/blue5.svg"})),se||(se=q.createElement("image",{height:100,width:70,x:312,xlinkHref:"/hanabi_cn/img/pieces/cards/purple5.svg"})),q.createElement("svg",Ne({height:100,width:90,x:464,className:"example","aria-labelledby":a},l),t?q.createElement("title",{id:a},t):null,q.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Alice"),ce||(ce=q.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#question-3_yml__a)",x:"0%",y:"50%"},"Clue Giver")),oe||(oe=q.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),q.createElement("svg",Ne({height:100,width:70,x:554,className:"example","aria-labelledby":a},l),t?q.createElement("title",{id:a},t):null,he||(he=q.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),q.createElement("svg",Ne({height:100,width:70,x:632,className:"example","aria-labelledby":a},l),t?q.createElement("title",{id:a},t):null,me||(me=q.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),q.createElement("svg",Ne({height:100,width:70,x:710,className:"example","aria-labelledby":a},l),t?q.createElement("title",{id:a},t):null,ue||(ue=q.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),q.createElement("svg",Ne({height:100,width:70,x:788,className:"example","aria-labelledby":a},l),t?q.createElement("title",{id:a},t):null,de||(de=q.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),q.createElement("svg",Ne({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":a},l),t?q.createElement("title",{id:a},t):null,q.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Bob")),ge||(ge=q.createElement("image",{height:100,width:70,x:554,xlinkHref:"/hanabi_cn/img/pieces/cards/purple2.svg",y:125})),pe||(pe=q.createElement("image",{height:100,width:70,x:632,xlinkHref:"/hanabi_cn/img/pieces/cards/blue1.svg",y:125})),be||(be=q.createElement("image",{height:100,width:70,x:710,xlinkHref:"/hanabi_cn/img/pieces/cards/red5.svg",y:125})),fe||(fe=q.createElement("image",{height:100,width:70,x:788,xlinkHref:"/hanabi_cn/img/pieces/cards/purple3.svg",y:125})),q.createElement("svg",Ne({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":a},l),t?q.createElement("title",{id:a},t):null,q.createElement("text",{className:"site-theme-text",dominantBaseline:"central",style:{fontSize:"1.4em"},x:"0%",y:"50%"},"Cathy")),ye||(ye=q.createElement("image",{height:100,width:70,x:554,xlinkHref:"/hanabi_cn/img/pieces/cards/red3.svg",y:250})),xe||(xe=q.createElement("image",{height:100,width:70,x:632,xlinkHref:"/hanabi_cn/img/pieces/cards/purple1.svg",y:250})),ve||(ve=q.createElement("image",{height:100,width:70,x:710,xlinkHref:"/hanabi_cn/img/pieces/cards/yellow4.svg",y:250})),we||(we=q.createElement("image",{height:100,width:70,x:788,xlinkHref:"/hanabi_cn/img/pieces/cards/blue3.svg",y:250})),Ee||(Ee=q.createElement("image",{height:200,opacity:.2,width:200,x:91,xlinkHref:"/hanabi_cn/img/pieces/trashcan.png",y:120})),ke||(ke=q.createElement("image",{height:100,width:70,x:156,xlinkHref:"/hanabi_cn/img/pieces/cards/red3.svg",y:170})),_e||(_e=q.createElement("rect",{fill:"none",height:200,rx:10,ry:10,stroke:"#006400",strokeWidth:2,width:200,x:91,y:120})))};var He=a(2808),qe=a(433);const Oe={id:"level-8",title:"Level 8 Challenge Questions"},Ce=void 0,Ie={unversionedId:"challenge-questions/level-8",id:"challenge-questions/level-8",title:"Level 8 Challenge Questions",description:"These questions are for level 8 strategies.",source:"@site/docs/challenge-questions/level-8.mdx",sourceDirName:"challenge-questions",slug:"/challenge-questions/level-8",permalink:"/hanabi_cn/docs/challenge-questions/level-8",draft:!1,editUrl:"https://github.com/jk15162428/hanabi_cn/edit/master/docs/challenge-questions/level-8.mdx",tags:[],version:"current",frontMatter:{id:"level-8",title:"Level 8 Challenge Questions"},sidebar:"mainSidebar",previous:{title:"Level 2 Challenge Questions",permalink:"/hanabi_cn/docs/challenge-questions/level-2"},next:{title:"Convention Attribution",permalink:"/hanabi_cn/docs/convention-attribution"}},Be={},Se=[{value:"Question 1",id:"question-1",level:2},{value:"Question 2",id:"question-2",level:2},{value:"Question 3",id:"question-3",level:2}],je={toc:Se};function Ae(e){let{components:t,...a}=e;return(0,O.kt)("wrapper",(0,H.Z)({},je,a,{components:t,mdxType:"MDXLayout"}),(0,O.kt)("p",null,"These questions are for ",(0,O.kt)("a",{parentName:"p",href:"../level-8"},"level 8")," strategies."),(0,O.kt)("h2",{id:"question-1"},"Question 1"),(0,O.kt)(He.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,O.kt)(qe.Z,{value:"question",mdxType:"TabItem"},(0,O.kt)("ul",null,(0,O.kt)("li",{parentName:"ul"},"There are 3 cards left in the deck, and no clues available. All remaining useful cards are gotten."),(0,O.kt)("li",{parentName:"ul"},"Bob knows the identity of all of his clued cards."),(0,O.kt)("li",{parentName:"ul"},"What action should Alice perform?"))),(0,O.kt)(qe.Z,{value:"solution",mdxType:"TabItem"},(0,O.kt)("ul",null,(0,O.kt)("li",{parentName:"ul"},"It might be tempting for Alice to play her red 4 to allow Bob to play his red 5. However, doing this will lose the game."),(0,O.kt)("li",{parentName:"ul"},"This is because the limiting factor is Bob's ability to play all of his 5s before the end of the game. For this to happen, the team needs clues in order to stall. Discarding gives back a clue, but playing the 4 does not."),(0,O.kt)("li",{parentName:"ul"},"Thus, it is correct for Alice to discard on this turn, holding on to the red 4 for later.")))),(0,O.kt)(I,{mdxType:"Question1"}),(0,O.kt)("h2",{id:"question-2"},"Question 2"),(0,O.kt)(He.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,O.kt)(qe.Z,{value:"question",mdxType:"TabItem"},(0,O.kt)("ul",null,(0,O.kt)("li",{parentName:"ul"},"There are 5 cards left in the deck, and 3 clues available. The only clued cards are Alice's 5s."),(0,O.kt)("li",{parentName:"ul"},"What action should Alice perform?"))),(0,O.kt)(qe.Z,{value:"solution",mdxType:"TabItem"},(0,O.kt)("ul",null,(0,O.kt)("li",{parentName:"ul"},"It might be tempting for Alice to clue red to Cathy, which would be a ",(0,O.kt)("em",{parentName:"li"},"Finesse")," on the red 4. However, doing so would risk losing the game."),(0,O.kt)("li",{parentName:"ul"},"This is because it is possible that Alice will draw the blue 5 and the purple 5. If she did, then she would have to play 4 cards in total. If Alice clues on this turn, then it would be impossible to play all 4 cards (because the game will end."),(0,O.kt)("li",{parentName:"ul"},"Instead, it is correct for Alice to play yellow 5 or green 5, letting Bob save the red 5, and Cathy getting the red 4.")))),(0,O.kt)(te,{mdxType:"Question2"}),(0,O.kt)("h2",{id:"question-3"},"Question 3"),(0,O.kt)(He.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,O.kt)(qe.Z,{value:"question",mdxType:"TabItem"},(0,O.kt)("ul",null,(0,O.kt)("li",{parentName:"ul"},"There are 2 cards left in the deck, and 3 clues available. No one has any clued cards."),(0,O.kt)("li",{parentName:"ul"},"What action should Alice perform?"))),(0,O.kt)(qe.Z,{value:"solution",mdxType:"TabItem"},(0,O.kt)("ul",null,(0,O.kt)("li",{parentName:"ul"},"Alice sees the red 3 in Cathy's hand and the red 5 in Bob's hand."),(0,O.kt)("li",{parentName:"ul"},"If Alice has the red 4 in her hand, then the situation is simple: the team will clue the red cards and then play them."),(0,O.kt)("li",{parentName:"ul"},"On the other hand, it is possible that both red 4s are still in the deck. In this case, there would be no time to play the 5 after playing the 4."),(0,O.kt)("li",{parentName:"ul"},"Thus, Alice should discard. She is guaranteed to either have had a red 4 in her hand, or to draw one of the copies.",(0,O.kt)("ul",{parentName:"li"},(0,O.kt)("li",{parentName:"ul"},"(For the purposes of this example, we assume that it is extremely unlikely for Alice to be discarding the red 4, since the team would have likely ",(0,O.kt)("em",{parentName:"li"},"Chop Moved")," it earlier on.)"))),(0,O.kt)("li",{parentName:"ul"},"After Alice discards, Bob can ",(0,O.kt)("em",{parentName:"li"},"Finesse")," the red 3 by cluing Alice's red 4, and then the red 5 can play in the subsequent round.")))),(0,O.kt)(Te,{mdxType:"Question3"}))}Ae.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var l=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,l,i=function(e,t){if(null==e)return{};var a,l,i={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=l.createContext({}),o=function(e){var t=l.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=o(e.components);return l.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=o(a),d=i,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||n;return a?l.createElement(g,r(r({ref:t},h),{},{components:a})):l.createElement(g,r({ref:t},h))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var o=2;o<n;o++)r[o]=a[o];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);